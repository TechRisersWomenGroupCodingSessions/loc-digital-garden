import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    conponents: {
        dirs: [
            {
                path: '~/components/',
                extensions: ['vue'],
            }
        ]
    },
    srcDir: './src'

})
