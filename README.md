# Nuxt 3 Minimal Starter

Look at the [nuxt 3 documentation](https://v3.nuxtjs.org) to learn more.

## Setup

Ensure you have the minimum versions of npm and node as specified in the [package.json](./package.json) `engines` section.

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/guide/deploy/presets) for more information.

## Tests

`npm run test`
Run all the tests in the suite.

`npm run test:ui` and open this url in the browser `http://localhost:51204/__vitest__/`
This provides a visual indication of the test run and may be helpful for debugging, more information [here](https://vitest.dev/guide/ui.html).

`npx vitest name-of-test`
To run a single test in isolate, you can target them using [Vitest in this way](https://vitest.dev/guide/filtering.html#cli)

### Test structure

All tests can be found in [test](/test) directory. The folder structure follows the same structure of the src files.

More insight on decisions made in approach to tests can be found in [Setting Up](/SETTING_UP.md).
