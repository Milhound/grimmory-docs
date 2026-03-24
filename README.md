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
3. Keep [CNAME](static/CNAME) set to `docs.grimmory.org`
4. Enable `Enforce HTTPS` after certificate is issued


- `url: https://docs.grimmory.org`
- `baseUrl: /`
