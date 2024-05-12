<!-- Handles the state of the memory card and displays
either front or back image-->

<template>
  <div
    class="memory-card flex items-center justify-center h-full w-full object-cover bg-cover bg-center"
    :class="{ 'cursor-pointer': gameState === 'loaded' || gameState === 'play' && !isFound || gameState === 'finished' }"
    :style="{ backgroundImage: `url(${isFlipped ? backImage : frontImage})` }"
    @click="toggle"
  />
</template>

<script>
import { useGameStore } from '@/stores/gameStore';

export default {
  name: 'MemoryCard',
  props: {
    item: {
      type: Object,
      required: true
    },
    frontImage: {
      type: String,
      required: true
    },
    backImage: {
      type: String,
      required: true
    }
  },
  emits: ['select-item'],
  data() {
    return {
      isFlipped: true,
      isFound: false
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
    gameState(newVal, oldVal) {
      console.log('switched from ', oldVal, 'to ', newVal)
      if (newVal === 'memorize' || newVal === 'finished') {
        console.log('set show fromtImage from', this.isFlipped);
        this.flip(false); // Show frontImage
        console.log('set show fromtImage to', this.isFlipped);
      } else if (newVal === 'play') {
        this.flip(true); // Show backImage
      } else {
        this.flip(true); // Default to showing backImage
      }
    }
  },
  methods: {
    toggle() {
      const currentGameState = this.gameStore.gameState;

      if (currentGameState === 'play' && this.gameStore.playTimer !== null) {
        if (this.isFound || this.gameStore.onCooldown) {
        return;
      }
        this.isFlipped = !this.isFlipped;
        this.gameStore.startCooldown(1500);

        if (this.gameStore.targetItem === this.item) {
          this.isFound = true;
          console.log('Correct item!');
          this.gameStore.guessItem(this.item);
          this.gameStore.setTargetItem();
        } else {
          setTimeout(() => {
            this.isFlipped = true;
          }, 1500);
        }
      } else if (currentGameState === 'finished') {
        this.$emit('select-item', this.item);
        console.log('selected memoryCard');
      }
    },
    flip(showBack) {
      this.isFlipped = showBack;
    },
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