<!-- Handles the state of the memory card and displays
either front or back image-->

<template>
  <div
    class="memory-card cursor-pointer content flex object-contain items-center justify-center"
    @click="flip"
  >
    <img
      v-if="!isFlipped"
      :src="frontImage"
      alt="Front"
      class="item-thumbnail w-full h-auto"
    >
    <img
      v-else
      :src="backImage"
      alt="Back"
      class="item-thumbnail w-full h-auto"
    >
  </div>
</template>
  
  <script>
  import { useGameStore } from '@/stores/gameStore';

  const gameStore = useGameStore();

  export default {
    name: 'MemoryCard',
    props: {
      frontImage: {
        type: String,
        default: '',
      },
      backImage: {
        type: String,
        default: '',
      }
    },
    data() {
      return {
        isFlipped: false
      };
    },
    methods: {
      flip() {
        this.isFlipped = !this.isFlipped;
      }
    }
  };
  </script>
  
  <style scoped>
  .memory-card {
    transition: transform 0.6s;
    transform-style: preserve-3d;
  }
  .item-thumbnail {
    backface-visibility: hidden;
  }
</style>

  