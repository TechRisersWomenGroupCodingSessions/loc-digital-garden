import { describe, expect, it } from 'vitest'

// Edit an assertion and save to see HMR in action

describe('Foo', () => {
      it('foo', () => {
          expect(Math.sqrt(4)).eq(2)
      }),
    it('snapshot', () => { expect({ foo: 'bar' }).toMatchSnapshot() })
})