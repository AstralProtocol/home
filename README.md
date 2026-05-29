# Astral — astral.global

The Astral landing page. A single static HTML file, deployed on Vercel.

## Structure

```
index.html      The page — self-contained (inlined CSS + JS), Google Fonts via CDN
assets/         Logo(s), favicon, and the 1200x630 social card (og-image.png)
vercel.json     Static deploy config (no framework build)
```

## Develop

No build step or dependencies. Open `index.html` directly, or serve the
folder:

```bash
python3 -m http.server 8099
# http://localhost:8099/index.html
```

## Deploy

Vercel serves the site as static files. `vercel.json` assembles
`index.html` + `assets/` into `public/` and publishes that — no Gatsby,
no framework build. Pushing to the default branch deploys to production;
pull requests get preview URLs.

## History

The previous Gatsby site is archived on the `legacy/gatsby-site` branch
(`git checkout legacy/gatsby-site`).
