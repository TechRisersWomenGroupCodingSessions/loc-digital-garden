
import { describe, it, expect } from 'vitest'
import { setup, $fetch } from '@nuxt/test-utils-edge'

describe('My test', async () => {
    await setup({
        // test context options
    })

    it('displays expected content', async () => {
        const res = await $fetch('/')
        const { body } = res
        expect(body).toContain('<H1>LoC Digital Garden</H1>')
    });
});