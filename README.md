# Astral Landing [![Netlify Status](https://api.netlify.com/api/v1/badges/94589a2f-f57d-4390-a4d4-429eb54b8a67/deploy-status)](https://app.netlify.com/sites/nervous-shannon-b45865/deploys)

## Install Gatsby Globally

```bash
yarn install
yarn global add gatsby-cli
yarn gatsby telemetry --disable
yarn gatsby feedback --disable
```

## Develop

Clone repo and run develop

```bash
cd landingV2
yarn develop
```

## Test Build

```bash
yarn && yarn build
```

## Fleek Deploy

- Docker image: `fleek/gatsby`

- Build command: `yarn && yarn build`

- Publish directory: `public`

## References

- Based on [Marguerite Roth's landing page](https://github.com/margueriteroth)

- Created by j-mars
