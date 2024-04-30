<template>
  <div class="flex flex-wrap gap-2 border border-black bg-semi-transparent p-2">
    <button
      v-for="(thumbnail, index) in thumbnails"
      :key="thumbnail.id"
      class="square border-2 border-black"
      @click="logIndex(index)"
    >
      <div class="content flex items-center justify-center bg-black">
        <img
          v-if="clickedIndex === index"
          :key="index"
          :src="thumbnail"
          alt="Föremål"
          class="h-full w-auto object-cover"
        >
        <div v-else class="h-full w-full object-cover bg-black"></div>
      </div>
    </button>
  </div>
</template>

<script>
export default {
  name: 'NineCardsGrid',
  props: {
    thumbnails: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  data() {
    return {
      clickedIndex: null
    }
  },
  methods: {
    logIndex(index) {
      this.clickedIndex = index;
      console.log(index);
    }
  }
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

  