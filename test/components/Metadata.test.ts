import { describe, it, expect, beforeEach } from 'vitest'
import { shallowMount } from '@vue/test-utils' 
import Metadata from "../../src/components/Metadata.vue"

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

    it('contains expected content', () => {
        expect(wrapper.text()).toContain("Planted: 2 days agoLast tended: 14 days ago");
    });
});