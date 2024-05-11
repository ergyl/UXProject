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
        @select-item="$emit('select-item', $event)"
      />
    </template>
  </NineCardsGrid>
</template>

<script>
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
  }
};
</script>
