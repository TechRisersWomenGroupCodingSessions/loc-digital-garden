import { defineConfig } from 'vitest/config'

// info here on how to configure vitest: https://vitest.dev/config/
export default defineConfig({
  test: {
    environment: 'node',
    deps: {
      inline: true,
      // external: ['**/node_modules/**'],
      // exclude: ['**/node_modules/**']
    }
  },
})
