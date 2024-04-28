<!-- Page in the SPA -->

<!-- This is the main game view, which will handle 
    displaying the memory cards, flipping them, '
    and the game logic -->

<template>
  <!-- Use the defined grid lines from MainLayout to position the content -->
  <!-- Ensure that the column numbers here match the lines in the MainLayout grid -->
  <div class="col-start-4 col-end-6 row-start-1 row-end-1 bg-red-200 flex flex-col items-center justify-center mt-4">
    <!-- Content here will be placed within the MainLayout grid -->
    <img
      class="w-28 h-auto object-contain my-0 mx-auto"
      :src="BackpackOpenImage"
      alt="Ryggsäck öppen"
    >
  </div>
      
  <div class="col-start-1 col-end-9 row-start-3 row-end-24 text-center bg-green-500 overflow-scroll">
    <div class="grid grid-cols-8">
      <div class="col-start-2 col-end-8 pt-8 pb-4">
        <NineCardsGrid />
      </div>
    </div>
      
    <!-- Flex container wrapper positioned in the grid -->
    <div class="col-start-3 col-end-8 px-16">
      <fwb-progress
        :progress="gameStore.gameTimeLeftPercentage"
        :color="gameStore.progressColor"
        size="lg"
        label-position="inside"
        label-progress
      />
    </div>
  </div>
</template>
          
<script setup>
import { onMounted, onUnmounted } from 'vue';
import { useGameStore } from '@/stores/gameStore';
import { FwbProgress } from 'flowbite-vue';

import NineCardsGrid from '../components/ui/NineCardsGrid.vue';
import BackpackOpenImage from '../assets/images/placeholders/backpack-open.png';

const gameStore = useGameStore();
let timerInterval;

onMounted(() => {
  gameStore.startGame();
  timerInterval = setInterval(() => {
    gameStore.updateTimeAndColor();
    if (gameStore.gameTimeLeft <= 0) {
      clearInterval(timerInterval);
      gameStore.endGame();
    }
  }, 1000);
});

onUnmounted(() => {
  clearInterval(timerInterval);
});
</script>
