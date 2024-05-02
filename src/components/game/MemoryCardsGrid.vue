<!-- Grid for the memory game, it is used to insert
MemoryCard components in the grid -->

<template>
  <NineCardsGrid :items="frontImages">
    <template #item-slot="{ item, index }">
      <MemoryCard
        :key="index"
        :front-image="item"
        :back-image="backImages[index]"
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
    frontImages: {
      type: Array,
      default: () => [],
    },
    backImages: {
      type: Array,
      default: () => [],
    }
  },
};
</script>
