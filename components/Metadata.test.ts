import { describe, it, expect, beforeEach } from 'vitest'
import { shallowMount } from '@vue/test-utils' 
import Metadata from "./Metadata.vue"

describe('Metadata', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount(Metadata, {
            props: {
                planted: 2,
                tended: 14,
            }
        })
    });
    it('renders as expected', () => {
        expect(wrapper.html()).toMatchSnapshot();
    });

    it.skip('contains expected content', () => {
        expect(wrapper.text()).toContain("Planted 2 days ago");
        expect(wrapper.text()).toContain("Tended 2 days ago");
    });
});