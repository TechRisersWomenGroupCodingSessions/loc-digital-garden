import { describe, it, expect, beforeEach } from 'vitest'
import { shallowMount, mount } from '@vue/test-utils' 
import Seed from "../../src/components/Seed.vue"

describe('Seed', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(Seed, {
            props: {
                planted: 2,
                tended: 14,
                title: "Some great content",
                content: "Some incredible content"
            }
        })
    });
    it('renders as expected', () => {
        expect(wrapper.html()).toMatchSnapshot();
    });

    it('contains expected content', () => {
        expect(wrapper.text()).toContain("Planted: 2 days agoLast tended: 14 days agoSome great contentSome incredible content");
    });
});