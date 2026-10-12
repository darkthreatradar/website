# Dark Threat Radar Website

Official website for [Dark Threat Radar](https://github.com/fr3dux/dark-threat-radar).

## Cloudflare Pages

This repository is intentionally buildless. Cloudflare Pages serves the static
files from `dist/` directly.

Use these project settings:

- Production branch: `main`
- Framework preset: `None`
- Build command: leave empty
- Build output directory: `dist`
- Root directory: `/`

Custom domains:

- `darkthreatradar.com` (primary)
- `www.darkthreatradar.com`

The project contains no runtime secrets, server functions, databases, or paid
cloud dependencies.

## Local preview

Serve the `dist/` directory with any static HTTP server.
