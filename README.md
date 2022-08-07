# Ladies of Code Digitial Garden

- [Ladies of Code Digitial Garden](#ladies-of-code-digitial-garden)
  - [About](#about)
  - [Setup](#setup)
  - [Run locally](#run-locally)
  - [See how the site looks in production](#see-how-the-site-looks-in-production)
  - [Tests](#tests)
    - [Test structure](#test-structure)
  - [Linting and formatting](#linting-and-formatting)

## About

This project is set up using [nuxt 3](https://v3.nuxtjs.org). Find out more about the ambitions for this project [here](https://ladiesofcodegroupsessions.github.io/).

## Setup

1. Ensure you have the minimum versions of npm and node as specified in the [package.json](./package.json) `engines` section.
2. Make sure to install the dependencies:

```bash
# npm
npm install
```

## Run locally

Start the development server on http://localhost:3000

```bash
npm run dev
```

## See how the site looks in production

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

```bash
npm run test
```

Run all the tests in the suite.

```bash
npm run test:ui
```

and open this url in the browser `http://localhost:51204/__vitest__/`.

This provides a visual indication of the test run and may be helpful for debugging, more information [here](https://vitest.dev/guide/ui.html).

```bash
npx vitest name-of-test
```

To run a single test in isolate, you can target them using [Vitest in this way](https://vitest.dev/guide/filtering.html#cli)

### Test structure

All tests can be found in [test](/test) directory. The folder structure follows the same structure of the src files.

More insight on decisions made in approach to tests can be found in [Setting Up](/SETTING_UP.md).

## Linting and formatting

Checkout the `scripts` section of the [package.json](package.json) file to see the commands which can be run.

Typical developer flow after making local changes would be:

```bash
npm run format && lint
```

If there are linting errors which can't be automatically fixed, it's possible to see which lint it fails on specifically using

```bash
npm run lint:eslint
```

```bash
npm run lint:prettier
```
