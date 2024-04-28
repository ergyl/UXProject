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
      v-if="gameStore.readyToPlay"
      class="w-28 h-auto object-contain my-0 mx-auto"
      :src="MullwardMemorizingImage"
      alt="Ryggsäck öppen"
    >
    <img
      v-else
      class="w-28 h-auto object-contain my-0 mx-auto"
      :src="BackpackOpenImage"
      alt="Ryggsäck öppen"
    >
  </div>
      
  <div class="col-start-1 col-end-9 row-start-3 row-end-24 text-center bg-green-500 overflow-scroll">
    <div class="grid grid-cols-8">
      <fwb-spinner
        v-if="gameStore.readyToPlay"
        size="12"
        class="self-center relative left-40"
      />
      
      <div class="col-start-2 col-end-8 pt-8 pb-4">
        <NineCardsGrid
          :items="placeHolderArray"
        />
      </div>
    </div>
      
    <!-- Flex container wrapper positioned in the grid -->
    <div class="col-start-3 col-end-8 px-16">
      <fwb-progress
        v-if="gameStore.readyToPlay"
        :progress="gameStore.memorizeTimeLeftPercentage"
        :color="gameStore.progressColor"
        size="lg"
        label-position="inside"
        label-progress
        label="Memorera"
      />

      <fwb-progress
        v-else
        :progress="gameStore.gameTimeLeftPercentage"
        :color="gameStore.progressColor"
        size="lg"
        label-position="inside"
        label-progress
        label="Spela"
      />
    </div>
  </div>
</template>
          
<script setup>
import { ref, onMounted } from 'vue';
import { useGameStore } from '@/stores/gameStore';
import { FwbSpinner, FwbProgress } from 'flowbite-vue';
import Ksamsok from '@/services/Ksamsok.js'; // Import the service class
import MullwardMemorizingImage from '@/assets/images/illustrations/game/mullward_memorize.png';
import BackpackOpenImage from '@/assets/images/placeholders/backpack-open.png';
import NineCardsGrid from '../components/ui/NineCardsGrid.vue';

const gameStore = useGameStore();
gameStore.startGame();

const items = ref([]);  // Reactive reference to store fetched items

const placeHolderArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
</script>
