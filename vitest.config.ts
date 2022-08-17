import { defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";
import eslint from 'vite-plugin-eslint'

// info here on how to configure vitest: https://vitest.dev/config/
export default defineConfig({
  plugins: [vue(), eslint({
    exclude: ['**/node_modules/**', '**/.vscode/**', '**/.nuxt/**', 'package.json', 'package-lock.json'],
    failOnError: true
  })],
  test: {
    deps: {
      inline: [/@nuxt\/test-utils-edge/],
    },
    environment: "jsdom",
  },
});
