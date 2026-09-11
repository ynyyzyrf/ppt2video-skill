---
name: ome-fixed-video-template
description: Generate or update OME presentation-style HTML video pages from a brief while preserving the fixed OME visual template and scene structure.
metadata:
  short-description: OME fixed HTML video template with reusable slide widgets
---

# OME Fixed Video Template

Use this skill when the user wants a reusable OME presentation-style HTML video, or when another workflow needs HTML scenes that will later be screenshotted and sent to T2V.

The template is the source of truth. Preserve `template/index.html` and `DESIGN.md` unless the user explicitly asks for a redesign or asks to add reusable layout/widgets. For ordinary content changes, edit only `template/data.js`.

## Fixed Requirements

- The cover's top-left brand text must stay exactly `OME數字化生態`.
- Keep the default 5-scene flow: cover, architecture, four-step flow, roadmap, and ending. When the user explicitly asks for data provenance, add the data sources scene as the final scene unless they specify a different order. For denser explainers, add optional `extraScenes` instead of forcing unrelated content into the default sections.
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
- `extraScenes` when the topic needs additional reusable PPT widgets

When creating or replacing `template/data.js`, keep `brand: "OME數字化生態"` even if the topic, report, or title changes.

## Extra Scene Widgets

Use `extraScenes` for additional explanation pages while keeping the OME visual shell. Each extra scene supports:

```js
{
  kicker: "WIDGET TOOLKIT",
  title: '流程、時間線與 <span class="accent">標籤</span>',
  subtitle: "Short page subtitle",
  layout: "grid-3",
  duration: 8,
  widgets: []
}
```

Supported layouts:

- `grid-2`: two equal cards.
- `grid-3`: three equal cards.
- `grid-4`: four compact cards.
- `focus`: one wider card plus one standard card.
- `stack`: one full-width card.

Supported widget types:

- `metric`: `{type, label, title, value, note, trend}` for a large KPI.
- `comparison`: `{type, label, title, desc, items}` for before/after or option A/B.
- `matrix`: `{type, label, title, desc, items}` for 2x2 compact facts.
- `checklist`: `{type, label, title, desc, items}` for acceptance criteria or risks.
- `quote`: `{type, label, text, source}` for a strong takeaway.
- `timeline`: `{type, label, title, desc, items}` for four milestones.
- `process`: `{type, label, title, desc, items}` for four numbered steps.
- `stack`: `{type, label, title, desc, items}` for layered architecture.
- `tags`: `{type, label, title, desc, items}` for keywords or capabilities.

For `items`, use either arrays like `["Title", "Text"]` or objects like `{title: "Title", text: "Text"}`. Keep each widget to 1-4 short facts. If a page starts to feel crowded, create another `extraScenes` page instead of shrinking text.

## Research Explainer Pack

For market research, strategy, product, or FDE-style reports, prefer these semantic widgets over generic cards. They are designed to turn long reports into a clear narrated deck:

- `role-comparison`: compare adjacent roles or concepts. Use `roles: [{title, goal, code}]`.
- `delivery-loop`: show a value flywheel or closed delivery loop. Use `center` and `steps`.
- `solution-stack`: explain 3-5 layers of an architecture or solution. Use `layers: [{n, title, text, tags}]`.
- `industry-matrix`: summarize industry scenarios and KPIs. Use `industries: [{industry, solution, kpi}]`.
- `market-signals`: show why the market is moving now. Use `signals: [{name, signal, note}]`.
- `fit-checker`: show when a solution fits or does not fit. Use `fit` and `noFit` arrays.
- `kpi-scorecard`: group technical, workflow, adoption, and financial metrics. Use `kpis: [{title, value, text}]`.
- `risk-register`: present risks with severity labels. Use `risks: [{level, title, text}]`.
- `contract-checklist`: turn procurement or governance advice into checklist groups. Use `groups: [{title, items}]`.
- `sprint-roadmap`: show staged adoption gates. Use `gates: [{title, text}]`.

For an FDE research explainer, a strong default sequence is:

1. `role-comparison` + `delivery-loop`
2. `solution-stack` + `industry-matrix`
3. `market-signals` + `fit-checker`
4. `kpi-scorecard` + `risk-register` + `contract-checklist`
5. `sprint-roadmap`

## Content Limits

- Cover title: 18 Chinese characters or fewer when possible.
- Section title: 16 Chinese characters or fewer when possible.
- Subtitle: 40 Chinese characters or fewer when possible.
- Chip or tag: 8 Chinese characters or fewer when possible.
- Card paragraph: one sentence preferred.
- Extra scene widget title: 12 Chinese characters or fewer when possible.
- Widget body text: one short line, preferably fewer than 24 Chinese characters.

Prefer shortening text over changing CSS.
