import { describe, it, expect } from 'vitest'

import { shallowMount } from '@vue/test-utils'
import NineCardsGrid from '@/components/ui/NineCardsGrid.vue'

describe('NineCardsGrid', () => {
    // unit test #1
    it('sets showDefaultImage to false by default', () => {
        const wrapper = shallowMount(NineCardsGrid);
        expect(wrapper.props('showDefaultImage')).to.be.false;
    })

    // unit test #2
    it('can set showDefaultImage to true', () => {
        const wrapper = shallowMount(NineCardsGrid, { props: { showDefaultImage: true } })
        expect(wrapper.props('showDefaultImage')).to.be.true;
    })

    // unit test #3, incomplete
    it('contains 9 squares on default', () => {
        const wrapper = shallowMount(NineCardsGrid, { props: { showDefaultImage: true } })
        expect(wrapper.html()).to.contain('square border')
            .and.to.contain('content');
    })
})

