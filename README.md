# Ladies of Code Digitial Garden

- [Ladies of Code Digitial Garden](#ladies-of-code-digitial-garden)
  - [About](#about)
  - [Becoming a technical contributor to the Digital Garden](#becoming-a-technical-contributor-to-the-digital-garden)
  - [Adding a post to the Digital Garden](#adding-a-post-to-the-digital-garden)
  - [Setup](#setup)
  - [Run locally](#run-locally)
  - [See how the site looks in production](#see-how-the-site-looks-in-production)
  - [Tests](#tests)
    - [Test structure](#test-structure)
  - [Linting and formatting](#linting-and-formatting)

## About

This project is set up using [nuxt 3](https://v3.nuxtjs.org). Find out more about the ambitions for this project [here](https://ladiesofcodegroupsessions.github.io/).

You can see the site [here](https://ladies-of-code-digital-garden.netlify.app/)

## Becoming a technical contributor to the Digital Garden
We would like to improve this site technically and we very much welcome open source contributors from the LoC community. 
Please see the existing [set of improvements identified](https://github.com/LadiesOfCodeGroupSessions/loc-digital-garden/issues).

If you would be interested in contributing to these improvements, please express your interest on the issues themselves. We can
then work together asynchronously on the issues.

In this project we work with feature branches & Pull Requests. If you have some changes you'd like us to review, please do open a Pull Request. This will then be reviewed by the Codeowners.

## Adding a post to the Digital Garden

If you'd like to add a post to the Digital Garden, please follow the instructions in the [CONTRIBUTORS](CONTRIBUTORS.md) file.
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