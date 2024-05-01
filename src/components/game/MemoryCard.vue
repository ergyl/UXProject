<!-- Handles the state of the memory card and displays
either front or back image-->

<template>
  <div
    class="memory-card cursor-pointer content flex object-contain items-center justify-center"
    @click="toggle"
  >
    <img
      v-if="!isFlipped"
      :src="frontImage"
      alt="Front"
      class="item-thumbnail w-full h-auto"
    >
    <img
      v-if="isFlipped"
      :src="backImage"
      alt="Back"
      class="item-thumbnail w-full h-auto"
    >
  </div>
</template>
    
  <script>
  import { useGameStore } from '@/stores/gameStore';
  
  export default {
    name: 'MemoryCard',
    props: {
      frontImage: {
        type: String,
        required: true
      },
      backImage: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        isFlipped: false
      };
    },
    computed: {
      gameStore() {
        return useGameStore();
      },
      gameState() {
        return this.gameStore.gameState;
      }
    },
    watch: {
      gameState(newVal) {
        if (newVal === 'play') {
          this.flip(true);
        } else {
          this.flip(false);
        }
      }
    },
    methods: {
      toggle() {
        // Toggle flip state on click
        this.isFlipped = !this.isFlipped;
      },
      flip(showBack) {
        // Method to set isFlipped based on argument
        this.isFlipped = showBack;
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
  

  