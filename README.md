# ppt2video-skill

Codex skills for the OME HTML scene to T2V PPT video workflow.

## Skills

- `skills/ome-fixed-video-template`
  - Generates or updates OME-style HTML video scenes.
  - Uses `template/data.js` as the ordinary content-editing surface.
  - Supports capture URLs such as `template/index.html?scene=1&capture=1`.

- `skills/t2v-ppt-video`
  - Uploads a `.ppt` or `.pptx` to the T2V API.
  - Creates a video generation task and polls until the final video URL is available.
  - Can also create a video from compatible image URLs plus text.

## Install Locally

Copy the desired skill folder into your Codex skills directory:

```powershell
Copy-Item -Recurse -Force .\skills\t2v-ppt-video "$env:USERPROFILE\.codex\skills\t2v-ppt-video"
Copy-Item -Recurse -Force .\skills\ome-fixed-video-template "$env:USERPROFILE\.codex\skills\ome-fixed-video-template"
```

## T2V Environment

The T2V skill reads credentials only from environment variables:

- `T2V_API_KEY`
- `T2V_ACCESS_TOKEN`
- `T2V_BASE_URL` optional, defaults to `https://api.t2v.cn`

Do not commit credential values to this repository.

## Default Workflow

1. Use `ome-fixed-video-template` to prepare concise OME HTML scenes.
2. Capture each scene as a screenshot with `?scene=N&capture=1`.
3. Package screenshots into a PPTX.
4. Use `t2v-ppt-video` to upload the PPTX, create a generation task, and poll for the MP4 URL.

Default T2V settings in the skill are:

- voice: `411`
- main subtitles: `zh`
- second subtitles: empty
- speech rate: `100`
- background music: `-1`
- border: `0`
