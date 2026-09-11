---
name: ome-fixed-video-template
description: Generate or update OME presentation-style HTML video pages from a brief while preserving the fixed OME visual template and scene structure.
metadata:
  short-description: OME fixed HTML video template
---

# OME Fixed Video Template

Use this skill when the user wants a reusable OME presentation-style HTML video, or when another workflow needs HTML scenes that will later be screenshotted and sent to T2V.

The template is the source of truth. Preserve `template/index.html` and `DESIGN.md` unless the user explicitly asks for a redesign. For ordinary content changes, edit only `template/data.js`.

## Fixed Requirements

- The cover's top-left brand text must stay exactly `OME數字化生態`.
- Keep the default 5-scene flow: cover, architecture, four-step flow, roadmap, and ending. When the user explicitly asks for data provenance, add the data sources scene as the final scene unless they specify a different order.
- Keep copy concise so it fits the fixed layout.
- For research-style narration, open the first script paragraph with `大家好，呢個視頻係關於{topic}的調研。`, then continue with the core conclusion.
- If the output will be sent to T2V, render capture screenshots from `template/index.html?scene=1&capture=1` through the final scene, then package those screenshots into a PPTX before using the T2V PPT workflow.
- In capture mode, only the requested scene may be visible. Disable scene opacity transitions and hide inactive scenes so screenshots do not contain ghosted content from the previous page.

## Data Shape

Populate `window.OME_VIDEO_DATA` with:

- `brand`
- `coverTitle`
- `coverSubtitle` when the cover needs a secondary title
- `architecture`
- `fourStep`
- `roadmap`
- `dataSources` when a data/provenance scene is requested
- `ending`

When creating or replacing `template/data.js`, keep `brand: "OME數字化生態"` even if the topic, report, or title changes.

## Content Limits

- Cover title: 18 Chinese characters or fewer when possible.
- Section title: 16 Chinese characters or fewer when possible.
- Subtitle: 40 Chinese characters or fewer when possible.
- Chip or tag: 8 Chinese characters or fewer when possible.
- Card paragraph: one sentence preferred.

Prefer shortening text over changing CSS.
