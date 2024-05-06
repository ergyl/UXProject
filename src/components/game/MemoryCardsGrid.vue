<!-- Grid for the memory game, it is used to insert
MemoryCard components in the grid -->

<template>
  <NineCardsGrid :items="items">
    <template #item-slot="{ item, index }">
      <MemoryCard
        :key="index"
        :item="item"
        :front-image="item.image"
        :back-image="backImages[index]"
        @select-item="$emit('select-item', $event)"
      />
    </template>
  </NineCardsGrid>
</template>

<script>
import NineCardsGrid from '@/components/ui/NineCardsGrid.vue';
import MemoryCard from './MemoryCard.vue';

export default {
  components: {
    NineCardsGrid,
    MemoryCard,
  },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    backImages: {
      type: Array,
      default: () => [],
    }
  },
  emits: ['select-item'],
};
</script>
