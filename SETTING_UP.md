# Project set up decisions

Documenting the steps to create a Vue/ TypeScript skeleton with linting and tests.

## Testing

**Decision**
Opted to explore testing functionality provided by [V3 of Nuxtjs](https://v3.nuxtjs.org/guide/going-further/testing/). This uses [@nuxt/test-utils-edge](https://www.npmjs.com/package/@nuxt/test-utils-edge) and [vitest](https://github.com/vitest-dev/vitest) as its test runner.

Note: these testing mechanisms are still experimental, subject to change and are not production ready.

At present there is no Vue3 support for testing, see examples of test set ups [here](https://github.com/vitest-dev/vitest/tree/main/examples).

More information on [nuxt test utils generally, here](https://test-utils.nuxtjs.org/).

**Rationale**
Decided to trial out the test tools provided by Nuxtjs community, as previous experience of trying to test the behaviour using other testing tools has been complex.

Investigated using Jest with Vue3 testing but the configuration alone seems incredibly complex, see more [here](https://test-utils.vuejs.org/installation/) and in the demo repo [here](https://github.com/lmiller1990/vtu-next-demo).

## Package.json
Had to do this strange 
https://github.com/nuxt/framework/issues/2919