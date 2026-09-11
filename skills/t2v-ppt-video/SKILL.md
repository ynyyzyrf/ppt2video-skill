---
name: t2v-ppt-video
description: Use the T2V PPT/image-to-video API flow to upload a PPT or provide image URLs, create a video generation task, and poll until the generated video URL is available.
metadata:
  short-description: T2V PPT to video API flow
---

# T2V PPT Video

Use this skill when the user wants to call or automate the `play.t2v.cn` PPT-to-video workflow without opening the website. It can either upload a PPT first or skip PPT upload and create the video directly from image URLs plus per-image text.

The PPT workflow has three API steps:

1. Upload a `.ppt` or `.pptx` to `POST https://api.t2v.cn/api/file/convert`.
2. Create a video task with `POST https://api.t2v.cn/api/video/generation2`.
3. Poll `POST https://api.t2v.cn/api/status` with the returned `task_id` until the response contains `result.url`.

The image-only workflow has two API steps:

1. Create a video task with `POST https://api.t2v.cn/api/video/generation2`, using provided image URLs.
2. Poll `POST https://api.t2v.cn/api/status` with the returned `task_id` until the response contains `result.url`.

Important behavior:

- The second API creates the task and returns `task_id` and usually `task_time`; it does not directly return the final video link.
- The final video link comes from the third API after generation finishes, at `result.url`.
- For the OME/MAG default PPT video workflow, send `voice: 411` for every source item, `subtitles.main: "zh"`, `subtitles.second: ""`, `speech_rate: 100`, `bgm: -1`, and `border: 0` unless the user explicitly asks for a different setting.
- For HTML screenshots or local PNG/JPG files, prefer packaging the screenshots into a temporary PPTX and then using the PPT workflow. A PNG uploaded through `/api/file/save_video` may return a URL but can still fail inside `generation2` because the backend may treat it as a video-like file and try to read a duration.
- The image-only workflow is safest when the image URLs are already in the same shape as `/api/file/convert` output, or have been separately proven to work with `generation2`.
- Do not hard-code credentials. Read the public T2V API key from `T2V_API_KEY`, and read the login token from `T2V_ACCESS_TOKEN` when the account requires authorization.
- Treat API calls that upload files or create tasks as external mutations. Make sure the user asked to run the workflow before executing them.

## Script

For the full flow, prefer the bundled helper:

```bash
node <skill_dir>/scripts/t2v-ppt-video.mjs --ppt path/to/file.pptx --texts path/to/texts.json --out result.json
```

For image URLs plus text, skip PPT upload:

```bash
node <skill_dir>/scripts/t2v-ppt-video.mjs --images path/to/images.json --texts path/to/texts.json --out result.json
```

Environment variables:

- `T2V_API_KEY`: required. This is sent as `x-api-key`.
- `T2V_ACCESS_TOKEN`: optional token from the website login flow. It may be either the raw JWT or the full `Bearer ...` value.
- `T2V_BASE_URL`: optional, defaults to `https://api.t2v.cn`.

`texts.json` can be either:

```json
["Text for slide 1", "Text for slide 2"]
```

or:

```json
{
  "1": "Text for slide 1",
  "2": "Text for slide 2"
}
```

`images.json` can be either:

```json
["https://example.com/slide-1.png", "https://example.com/slide-2.png"]
```

or:

```json
[
  {
    "url": "https://example.com/slide-1.png",
    "logo": {
      "image_id": 0,
      "ratio": 1.5,
      "position": { "weight": 0.85, "height": 0.05 }
    },
    "copy_right": {
      "copy_right_id": 0,
      "font_size": 6,
      "position": { "weight": 0, "height": 0.1 }
    }
  }
]
```

Useful options:

- `--voice 411`: voice id for every page.
- `--bgm -1`: background music id; `-1` means no background music.
- `--subtitle-main zh`: primary subtitle language.
- `--subtitle-second en`: secondary subtitle language.
- `--speech-rate 100`: speaking speed.
- `--border 0`: `0` for no border, `1` for border.
- `--interval-ms 10000`: polling interval.
- `--timeout-ms 1800000`: polling timeout.

The script writes JSON containing the selected input mode, optional upload response, created task, final status response, `task_id`, and `video_url`.

## Request Shapes

Upload PPT:

```http
POST /api/file/convert
Content-Type: multipart/form-data
```

Multipart field:

- `upload_file`: `.ppt` or `.pptx`

Create task:

```json
{
  "source": [
    {
      "text": "Slide narration",
      "image": {
        "url": "slide image url",
        "logo": {
          "image_id": 0,
          "ratio": 1.5,
          "position": { "weight": 0.85, "height": 0.05 }
        },
        "copy_right": {
          "copy_right_id": 0,
          "font_size": 6,
          "position": { "weight": 0, "height": 0.1 }
        }
      },
      "voice": 411
    }
  ],
  "bgm": -1,
  "subtitles": { "main": "zh", "second": "" },
  "speech_rate": 100,
  "border": 0
}
```

Poll status:

```json
{ "task_id": "task id from generation2" }
```
