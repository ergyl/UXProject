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
        :slot-image="slotImage"
        @select-item="handleSelectItem(item)"
      />

    </template>
  </NineCardsGrid>
  <!-- Item Won Popup -->
  <ItemInspectPopUp
    v-if="selectedItem"
    :item="selectedItem"
    @close="handleClose"
  />
</template>

<script>
import { useBackpackStore } from '@/stores/backpackStore';
import NineCardsGrid from '@/components/ui/NineCardsGrid.vue';
import ItemCard from '@/components/backpack/ItemCard.vue';
import SlotImage from '@/assets/images/illustrations/backpack/backpack-slot.png';
import ItemInspectPopUp from '@/components/backpack/ItemInspectPopUp.vue'

export default {
  components: {
    NineCardsGrid,
    ItemCard,
    ItemInspectPopUp, // Register the ItemWonPopUp component
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
      selectedItem: null, 
    }
  },
  methods: {
    handleSelectItem(item) {
      const backpackStore = useBackpackStore();
      backpackStore.setSelectedItemID(item.id);
      this.$emit('select-item', item.id);
      this.selectedItem = item;
    },
    handleClose() {
      this.selectedItem = null;
    },
  },
};
</script>
