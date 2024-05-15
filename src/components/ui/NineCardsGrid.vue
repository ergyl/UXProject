<!-- A 3x3 basic grid with squares to hold content -->

<template>
  <div class="flex flex-wrap gap-0 border border-black bg-semi-transparent">
    <div
      v-for="(item, index) in nineItems"
      :key="index"
      class="square w-1/3 border border-black"
    >
      <div class="content">
        <!-- Render slot depending on 'showDefaultImage' prop -->
        <slot 
          v-if="item !== undefined || showDefaultImage"
          :name="'item-slot'"
          :item="item"
          :index="index"
          class="bg-cover bg-center"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NineCardsGrid',
  props: {
    items: {
      type: Array,
      default: () => []
    },
    showDefaultImage: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    nineItems() {
      // Create an array of 9 elements, filling with items or undefined
      return Array.from({ length: 9 }, (_, i) => this.items[i]);
    }
  }
};
</script>

<style scoped>
.square {
  @apply aspect-square;
  position: relative;
}
.content {
  @apply aspect-square;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>