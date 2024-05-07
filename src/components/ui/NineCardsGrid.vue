<template>
  <div class="flex flex-wrap border border-black bg-semi-transparent p-2">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="square border border-black"
    >
      <div class="content">
        <!-- Slot for custom content such as images or buttons -->
        <slot
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
          default: function() {
            return [];
        }
    }
  },
};
</script>

<style scoped>
.square {
  flex: 1 0 31%; /* slightly less than 1/3 to accommodate the gap */
  height: 0;
  padding-bottom: 31%; /* the same as width for maintaining aspect ratio */
  position: relative;
}
.content {
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