import { describe, it, expect } from 'vitest'
import { setup, fetch } from '@nuxt/test-utils-edge'

describe('SSR App', async () => {
  await setup({
      server: false,
      runner: 'vitest'
  })

    it('renders the index page', async () => {
    const res = await fetch('/')
    const { body } = res   

    expect(body).toContain('<H1>LoC Digital Garden</H1>')
  })
})