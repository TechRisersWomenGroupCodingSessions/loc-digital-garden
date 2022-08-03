import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'

// info here on how to configure vitest: https://vitest.dev/config/
export default defineConfig({
  plugins: [vue()],
  test: {
    deps: {
      inline: [/@nuxt\/test-utils-edge/],
    },
  },
})