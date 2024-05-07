<!-- Page in the SPA -->

<!-- This is the main game view, which will handle 
    displaying the memory cards, flipping them, '
    and the game logic -->

<template>
  <!-- Use the defined grid lines from MainLayout to position the content -->
  <!-- Ensure that the column numbers here match the lines in the MainLayout grid -->
  <div
    v-if="gameStore.gameState !== 'finished'"
    class="col-start-4 col-end-6 row-start-1 row-end-1 bg-red-200 flex flex-col items-center justify-center mt-4"
  >
    <fwb-tooltip
      placement="bottom"
    >
      <template #trigger>
        <img
          v-if="gameStore.gameState !== 'play'"
          class="w-28 h-auto object-contain my-0 mx-auto"
          :src="MullwardMemorizingImage"
          alt="Mullward memorerar bilder"
          @load="mullwardMemorizingImageLoaded"
        >
      </template>
      <template #content>
        Titta och memora var föremålen finns.
      </template>
    </fwb-tooltip>

    <fwb-tooltip
      v-if="gameStore.gameState === 'play'"
      placement="bottom"
    >
      <template #trigger>
        <img
          class="w-28 h-auto object-contain my-0 mx-auto"
          :src="BackpackOpenImage"
          alt="Ryggsäck öppen"
        >
      </template>
      <template #content>
        Var finns detta föremål?
      </template>
    </fwb-tooltip>
  </div>
      
  <div
    v-if="gameStore.gameState !== 'finished'"
    class="col-start-1 col-end-9 row-start-3 row-end-24 text-center bg-green-500 overflow-scroll"
  >
    <div
      v-if="!thumbnailsLoaded || !mullwardLoaded"
      class="flex w-full h-full justify-center items-center"
    >
      <fwb-spinner
        size="12"
        class="self-center"
      />
    </div>

    <div class="grid grid-cols-8">
      <div
        v-if="thumbnailsLoaded && mullwardLoaded"
        class="col-start-2 col-end-8 pt-8 pb-4"
      >
        <MemoryCardsGrid
          :items="gameStore.items"
          :back-images="tileImages"
          @select-item="selectedItem = $event"
        />
      </div>
    </div>
      
    <!-- Flex container wrapper positioned in the grid -->
    <div class="col-start-3 col-end-8 px-16">
      <fwb-progress
        v-if="gameStore.gameState === 'memorize' && thumbnailsLoaded"
        :progress="gameStore.memorizeTimeLeftPercentage"
        :color="gameStore.progressColor"
        size="lg"
        label-position="inside"
        label-progress
        label="Memorera"
      />

      <fwb-progress
        v-if="gameStore.gameState === 'play'"
        :progress="gameStore.gameTimeLeftPercentage"
        :color="gameStore.progressColor"
        size="lg"
        label-position="inside"
        label-progress
        label="Spela"
      />
    </div>
  </div>

  <!-- Game finished -->
  <div
    v-if="gameStore.gameState === 'finished'"
    class="col-start-1 col-end-9 row-start-1 row-end-1 h-8"
  />
  <div
    v-if="gameStore.gameState === 'finished'"
    class="col-start-1 col-end-9 row-start-2 row-end-2 flex justify-center items-center bg-green-200"
  >
    <h2 class="pt-1 pb-1">
      Vilket föremål vill du läsa mer om?
    </h2>
  </div>
  
  <div
    v-if="gameStore.gameState === 'finished'"
    class="col-start-1 col-end-9 row-start-3 row-end-24 text-center bg-blue-500 overflow-scroll"
  >
    <p class="pt-8">
      Du måste titta på föremål och spara dem i ryggsäcken. Annars försvinner de!
    </p>
    <div
      v-if="gameStore.gameState === 'finished'"
      class="grid grid-cols-8"
    >
      <div class="col-start-2 col-end-8 pt-8 pb-4">
        <MemoryCardsGrid
          :items="gameStore.items"
          :back-images="tileImages"
          @select-item="selectedItem = $event"
        />
      </div>
    </div>

    <!-- Item Details Popup -->
    <ItemDetailsPopup
      v-if="selectedItem"
      :item="selectedItem"
      @close="selectedItem = null"
    />
  
    <div class="flex justify-start py-2 px-16 pb-8">
      <fwb-button
        color="default"
        size="md"
        @click="router.push('home')"
      >
        Lämna <br>
        utgrävningsplatsen
      </fwb-button>
    </div>
  </div>
</template>
          
<script setup>
import { ref, onBeforeUnmount, onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useGameStore } from '@/stores/gameStore';
import { FwbTooltip, FwbSpinner, FwbProgress, FwbButton } from 'flowbite-vue';
import Ksamsok from '@/services/Ksamsok.js'; // Import the service class
import MullwardMemorizingImage from '@/assets/images/illustrations/game/mullward_memorize.png';
import BackpackOpenImage from '@/assets/images/placeholders/backpack-open.png';
import MemoryCardsGrid from '@/components/game/MemoryCardsGrid.vue';
import ItemDetailsPopup from '@/components/ui/ItemDetailsPopUp.vue'

import image1 from '@/assets/images/illustrations/game/tile1.png';
import image2 from '@/assets/images/illustrations/game/tile2.png';
import image3 from '@/assets/images/illustrations/game/tile3.png';
import image4 from '@/assets/images/illustrations/game/tile4.png';
import image5 from '@/assets/images/illustrations/game/tile5.png';
import image6 from '@/assets/images/illustrations/game/tile6.png';
import image7 from '@/assets/images/illustrations/game/tile7.png';
import image8 from '@/assets/images/illustrations/game/tile8.png';
import image9 from '@/assets/images/illustrations/game/tile9.png';

const tileImages = [image1, image2, image3, image4, image5, image6, image7, image8, image9];

const gameStore = useGameStore();
const router = useRouter();
const route = useRoute();

const mullwardLoaded = ref(false);
const thumbnailsLoaded = ref(false);
const selectedItem = ref(null);

async function getItems() {
  if (!gameStore.category) return;
  let items;
  try {
    switch (gameStore.category) {
      case 'toys':
        items = await Ksamsok.getToys();
        break;
      case 'world':
        items = await Ksamsok.getWorldItems();
        break;
      case 'artwork':
        items = await Ksamsok.getArtwork();
        break;
      default:
        console.error('Unrecognized category:', gameStore.category);
        return; // Exit if category is unrecognized
    }
    console.log('API Returned Items:', items); // Check what the API returned
    if (items) {
      gameStore.addItems(items);
      thumbnailsLoaded.value = true;
      checkStartConditions();
    } else {
      console.error('No items fetched for category:', gameStore.category);
    }
  } catch (error) {
    console.error('Error fetching items for category:', gameStore.category, error.message);
  }
}


onMounted(() => {
  console.log("Chosen category:", gameStore.category);
    getItems();
});

function mullwardMemorizingImageLoaded() {
console.log("MullwardMemorizingImage loaded");
mullwardLoaded.value = true;
}

// Handle route updates (for example, navigating away and back to the page)
if (router && route) {
    watch(() => route.path, () => {
        if (route.name === 'game-play') {
            getItems();
        }
    });
}

/** watch(() => gameStore.gameState, (newState) => {
  if (newState === 'finished') {
  }
}); */


function checkStartConditions() {
  if (thumbnailsLoaded.value && mullwardLoaded.value) {
      gameStore.startGame();
    }
  }

onBeforeUnmount(() => {
  console.log(`gameStore object: ${gameStore}`); // Should log the store object
  console.log('resetGame method:', gameStore.resetGame);
  gameStore.resetGame();
});
</script>
