# React User Details

This application demonstrates some basic functional requirements:

- Fetch and display some users within a card grid
- Show user details in a modal
- Provide user feedback mechanisms

As well as some non-functional requirements:

- Unit tests
- End to End tests
- Project structure

Contents:

- [Project details](#project-details)
- [Pre-development](#pre-development)
- [Development](#development)
- [Run production build](#run-production-build)
- [Run unit tests](#run-unit-tests)
- [Run End to End (e2e) tests](#run-end-to-end-e2e-tests)

## Project details

- Uses Next.js for server rendering and routing.
- Features a 'user directory' card grid with results fetched from a stub during
  local development, or an endpoint in production mode. Data for up to 10 users
  are fetched and displayed on a given page, with server-side pagination.
- Showcases unit testing with Vitest; test files are colocated with components
  or utilities. React components use testing library with keyboard navigation.
- Showcases End to End tests with Playwright; a test file in [`/e2e`](/e2e)
  demonstrates page navigation and content assertions.

## Pre-development

First-time setup requires environment variables and dependencies.

```bash
# 1. dependencies
npm install

# 2. environment variables
cp .env.example .env

# 3. add `DATA_ENDPOINT=example.com` to `.env.`
# replace `example.com` with endpoint value provided by team
# alternatively, set `APP_ENV=test` to use stub data
```

## Development

```bash
# one-time step
npm install

# run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses
[`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)
to automatically optimize and load [Geist](https://vercel.com/font), a new font
family for Vercel.

## Run production build

```bash
# one-time step
npm install

# build for production
npm run build

# run production build
npm start
```

## Run unit tests

```bash
# unit tests
npm run test:unit
```

## Run End to End (e2e) tests

```bash
# end to end tests directly on host machine, runs in GUI mode by default
npx playwright install # one-time browser install
npm run build # we use the production build for testing
npm run test:e2e

# end to end tests via Docker, runs tests and then exits by default
docker compose up
```

Note in `playwright.config.js` the `APP_ENV` environment variable is set to
`'test'` to inform the server to use stub data. If you run playwright directly,
be sure to include this value in `.env` or `.env.local`.
