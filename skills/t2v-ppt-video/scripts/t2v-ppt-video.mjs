#!/usr/bin/env node

import fs from "node:fs/promises";
import path from "node:path";

const DEFAULT_MATERIAL = {
  logo: {
    image_id: 0,
    ratio: 1.5,
    position: { weight: 0.85, height: 0.05 },
  },
  copy_right: {
    copy_right_id: 0,
    font_size: 6,
    position: { weight: 0, height: 0.1 },
  },
};

function usage() {
  console.error(`Usage:
  node scripts/t2v-ppt-video.mjs --ppt file.pptx --texts texts.json [--out result.json]
  node scripts/t2v-ppt-video.mjs --images images.json --texts texts.json [--out result.json]

Required env:
  T2V_API_KEY

Optional env:
  T2V_ACCESS_TOKEN
  T2V_BASE_URL
`);
}

function parseArgs(argv) {
  const args = {
    voice: 411,
    bgm: -1,
    subtitleMain: "zh",
    subtitleSecond: "",
    speechRate: 100,
    border: 0,
    intervalMs: 10000,
    timeoutMs: 1800000,
  };

  for (let i = 0; i < argv.length; i += 1) {
    const key = argv[i];
    const value = argv[i + 1];
    if (!key.startsWith("--")) {
      throw new Error(`Unexpected argument: ${key}`);
    }
    if (typeof value === "undefined" || value.startsWith("--")) {
      throw new Error(`Missing value for ${key}`);
    }
    i += 1;

    switch (key) {
      case "--ppt":
        args.ppt = value;
        break;
      case "--texts":
        args.texts = value;
        break;
      case "--images":
        args.images = value;
        break;
      case "--out":
        args.out = value;
        break;
      case "--voice":
        args.voice = Number(value);
        break;
      case "--bgm":
        args.bgm = Number(value);
        break;
      case "--subtitle-main":
        args.subtitleMain = value;
        break;
      case "--subtitle-second":
        args.subtitleSecond = value;
        break;
      case "--speech-rate":
        args.speechRate = Number(value);
        break;
      case "--border":
        args.border = Number(value);
        break;
      case "--interval-ms":
        args.intervalMs = Number(value);
        break;
      case "--timeout-ms":
        args.timeoutMs = Number(value);
        break;
      default:
        throw new Error(`Unknown option: ${key}`);
    }
  }

  return args;
}

function headers(json = true) {
  const apiKey = process.env.T2V_API_KEY;
  if (!apiKey) {
    throw new Error("T2V_API_KEY is required");
  }

  const result = {
    Accept: "application/json",
    "x-api-key": apiKey,
  };

  if (json) {
    result["Content-Type"] = "application/json";
  }

  if (process.env.T2V_ACCESS_TOKEN) {
    const token = process.env.T2V_ACCESS_TOKEN.trim();
    result.Authorization = token.toLowerCase().startsWith("bearer ")
      ? token
      : `Bearer ${token}`;
  }

  return result;
}

async function readTexts(filePath) {
  const raw = await fs.readFile(filePath, "utf8");
  const parsed = JSON.parse(raw);
  if (Array.isArray(parsed)) {
    return parsed;
  }
  if (parsed && typeof parsed === "object") {
    return Object.keys(parsed)
      .sort((a, b) => Number(a) - Number(b))
      .map((key) => parsed[key]);
  }
  throw new Error("texts JSON must be an array or an object keyed by slide number");
}

async function readImages(filePath) {
  const raw = await fs.readFile(filePath, "utf8");
  const parsed = JSON.parse(raw);
  if (!Array.isArray(parsed)) {
    throw new Error("images JSON must be an array");
  }
  return parsed.map((item) => {
    if (typeof item === "string") {
      return { url: item, ...DEFAULT_MATERIAL };
    }
    if (item && typeof item === "object" && typeof item.url === "string") {
      return {
        url: item.url,
        logo: item.logo ?? DEFAULT_MATERIAL.logo,
        copy_right: item.copy_right ?? DEFAULT_MATERIAL.copy_right,
      };
    }
    throw new Error("each image must be a URL string or an object with a url field");
  });
}

async function postJson(baseUrl, route, body) {
  const response = await fetch(`${baseUrl}${route}`, {
    method: "POST",
    headers: headers(true),
    body: JSON.stringify(body),
  });
  const text = await response.text();
  let data;
  try {
    data = text ? JSON.parse(text) : null;
  } catch {
    data = text;
  }
  if (!response.ok) {
    throw new Error(`${route} failed with HTTP ${response.status}: ${text}`);
  }
  return data;
}

async function uploadPpt(baseUrl, pptPath) {
  const content = await fs.readFile(pptPath);
  const formData = new FormData();
  const filename = path.basename(pptPath);
  formData.append("upload_file", new Blob([content]), filename);

  const response = await fetch(`${baseUrl}/api/file/convert`, {
    method: "POST",
    headers: headers(false),
    body: formData,
  });

  const text = await response.text();
  let data;
  try {
    data = text ? JSON.parse(text) : null;
  } catch {
    data = text;
  }

  if (!response.ok) {
    throw new Error(`/api/file/convert failed with HTTP ${response.status}: ${text}`);
  }
  if (!data || !Array.isArray(data.result)) {
    throw new Error("/api/file/convert response did not include result[]");
  }

  return data;
}

function buildGenerationBody(images, texts, args) {
  const source = images.map((item, index) => ({
    text: texts[index] || "",
    image: item,
    voice: args.voice,
  }));

  if (!source.some((item) => item.text.trim())) {
    throw new Error("At least one slide must have text");
  }

  return {
    source,
    bgm: args.bgm,
    subtitles: {
      main: args.subtitleMain,
      second: args.subtitleSecond,
    },
    speech_rate: args.speechRate,
    border: args.border,
  };
}

async function sleep(ms) {
  await new Promise((resolve) => setTimeout(resolve, ms));
}

async function pollForVideo(baseUrl, taskId, intervalMs, timeoutMs) {
  const start = Date.now();
  let lastStatus;

  while (Date.now() - start <= timeoutMs) {
    const status = await postJson(baseUrl, "/api/status", { task_id: taskId });
    lastStatus = status;

    if (status?.result?.url) {
      return status;
    }

    if (status?.status === 3) {
      throw new Error(`Task failed: ${JSON.stringify(status)}`);
    }

    await sleep(intervalMs);
  }

  throw new Error(`Timed out waiting for video URL. Last status: ${JSON.stringify(lastStatus)}`);
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  if ((!args.ppt && !args.images) || !args.texts || (args.ppt && args.images)) {
    usage();
    process.exitCode = 2;
    return;
  }

  const baseUrl = process.env.T2V_BASE_URL || "https://api.t2v.cn";
  const texts = await readTexts(args.texts);
  const upload = args.ppt ? await uploadPpt(baseUrl, args.ppt) : null;
  const images = args.images
    ? await readImages(args.images)
    : upload.result.map((item) => ({ url: item.url, ...DEFAULT_MATERIAL }));
  const createBody = buildGenerationBody(images, texts, args);
  const created = await postJson(baseUrl, "/api/video/generation2", createBody);

  if (!created?.task_id) {
    throw new Error(`/api/video/generation2 response did not include task_id: ${JSON.stringify(created)}`);
  }

  const finalStatus = await pollForVideo(
    baseUrl,
    created.task_id,
    args.intervalMs,
    args.timeoutMs
  );

  const result = {
    mode: args.images ? "images" : "ppt",
    task_id: created.task_id,
    video_url: finalStatus.result.url,
    upload,
    created,
    final_status: finalStatus,
  };

  const output = JSON.stringify(result, null, 2);
  if (args.out) {
    await fs.writeFile(args.out, output, "utf8");
  } else {
    console.log(output);
  }
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exitCode = 1;
});
