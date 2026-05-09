<p align="center">
  <img src="https://img.shields.io/badge/Read%20the%20Docs-FB923C?style=for-the-badge&logo=readthedocs&link=https%3A%2F%2Fgrimmory.org%2Fdocs%2Fgetting-started" alt="Read the Docs"/>
  <img src="https://img.shields.io/discord/1483208318720675860?style=for-the-badge&logo=discord&label=Join%20Discord&link=https%3A%2F%2Fdiscord.gg%2FvNsB8CTebs" alt="Join Discord"/>
  <img src="https://img.shields.io/docker/v/grimmory/grimmory/latest?style=for-the-badge&label=Latest%20Version" alt="Latest Version"/>
</p>

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
