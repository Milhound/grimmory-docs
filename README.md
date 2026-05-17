<div align="center">

[![Read the Docs](https://img.shields.io/badge/Read%20the%20Docs-FB923C?style=flat-square&logo=readthedocs)](https://grimmory.org/docs/getting-started)
[![Join Discord](https://img.shields.io/badge/Discord-5865F2?style=flat-square&logo=discord&logoColor=white)](https://discord.gg/vNsB8CTebs)
[![Reddit](https://img.shields.io/badge/Reddit-%23FF4500?style=flat-square&logo=reddit&logoColor=white)](https://www.reddit.com/r/Grimmory/)
[![Latest Docker Version](https://img.shields.io/docker/v/grimmory/grimmory/latest?color=2496ED&style=flat-square&logo=docker&logoColor=white)](https://hub.docker.com/r/grimmory/grimmory/tags)

</div>

# Grimmory Docs

Docusaurus docs site for Grimmory.

## Local

```bash
npm ci
npm start
```

## Build

```bash
npm run build
```

## Deploy

GitHub Pages deploys from [deploy.yml](.github/workflows/deploy.yml) on push to `master`.

Required one-time setup:

1. GitHub repo: `Settings -> Pages -> Source: GitHub Actions`
2. DNS: `CNAME docs -> <org-or-user>.github.io`
3. Keep [CNAME](static/CNAME) set to `grimmory.org`
4. Enable `Enforce HTTPS` after certificate is issued

- `url: https://grimmory.org`
- `baseUrl: /`
