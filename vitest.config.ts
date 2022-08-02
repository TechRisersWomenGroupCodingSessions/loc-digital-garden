import { defineConfig } from 'vitest/config'

// info here on how to configure vitest: https://vitest.dev/config/
export default defineConfig({
  test: {
    deps: {
      inline: [/@nuxt\/test-utils-edge/],
    },
  },
})