import { describe, it, expect } from "vitest";
import { mount } from '@vue/test-utils'
import File from './src/pages/[...slug].vue'

describe('file', () => {
  it('renders a div', () => {
    // const wrapperOne = shallowMount(File)
    const wrapperTwo = mount(File)
    expect(wrapperTwo.html()).toBe(1); 
    // expect(wrapperOne.html()).toBe(1); 
    // expect(wrapper.contains('div')).toBe(true)
  })
})