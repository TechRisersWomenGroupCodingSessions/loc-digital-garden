import { describe, it, expect } from 'vitest'
import { setup, $fetch } from '@nuxt/test-utils-edge'

describe('Seed API', async () => {
    await setup({
    })

    it('returns a well formed response', async () => {
        const response = await $fetch('/api/seed')

        expect(response).toEqual({"seed": "Some really awesome insight"})
    });
});