<!-- Grid for the memory game, it is used to insert
MemoryCard components in the grid -->

<template>
  <NineCardsGrid
    :items="items"
    :show-default-image="true"
  >
    <template #item-slot="{ item, index }">
      <ItemCard
        :key="index"
        :item="item"
        :front-image="item ? item.image : slotImage"
        @select-item="handleSelectItem(item)"
      />
    </template>
  </NineCardsGrid>
</template>

<script>
import { useBackpackStore } from '@/stores/backpackStore';
import NineCardsGrid from '@/components/ui/NineCardsGrid.vue';
import ItemCard from '@/components/backpack/ItemCard.vue';
import SlotImage from '@/assets/images/illustrations/backpack/backpack-slot.png';

export default {
  components: {
    NineCardsGrid,
    ItemCard,
  },
  props: {
    items: {
      type: Array,
      default: () => [],
    }
  },
  emits: ['select-item'],
  data() {
    return {
      slotImage: SlotImage,
    }
  },
  methods: {
    handleSelectItem(item) {
      const backpackStore = useBackpackStore();
      backpackStore.setSelectedItemID(item.id);
      this.$emit('select-item', item.id);

      console.log('Selected item:', backpackStore.selectedItemID);
    },
  },
};
</script>
