<!-- Page in the SPA -->

<!-- This is the main game view, which will handle 
    displaying the memory cards, flipping them, '
    and the game logic -->

<template>
  <!-- Use the defined grid lines from MainLayout to position the content -->
  <!-- Ensure that the column numbers here match the lines in the MainLayout grid -->
  <div class="col-start-4 col-end-6 row-start-1 row-end-1 bg-red-200 flex flex-col items-center justify-center mt-4">
    <fwb-tooltip
      placement="bottom"
    >
      <template #trigger>
        <img
          v-if="!gameStore.isPlaying"
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
      v-if="gameStore.isPlaying"
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
      
  <div class="col-start-1 col-end-9 row-start-3 row-end-24 text-center bg-green-500 overflow-scroll">
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
          :front-images="thumbnailURLs"
          :back-images="tileImages"
        />
      </div>
    </div>
      
    <!-- Flex container wrapper positioned in the grid -->
    <div class="col-start-3 col-end-8 px-16">
      <fwb-progress
        v-if="gameStore.readyToPlay && thumbnailsLoaded"
        :progress="gameStore.memorizeTimeLeftPercentage"
        :color="gameStore.progressColor"
        size="lg"
        label-position="inside"
        label-progress
        label="Memorera"
      />

      <fwb-progress
        v-if="gameStore.isPlaying"
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
import { ref, onBeforeUnmount, onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useGameStore } from '@/stores/gameStore';
import { FwbTooltip, FwbSpinner, FwbProgress } from 'flowbite-vue';
import Ksamsok from '@/services/Ksamsok.js'; // Import the service class
import MullwardMemorizingImage from '@/assets/images/illustrations/game/mullward_memorize.png';
import BackpackOpenImage from '@/assets/images/placeholders/backpack-open.png';
import MemoryCardsGrid from '@/components/game/MemoryCardsGrid.vue';

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

const items = ref([]);   // JSON objects of items returned by Ksamsok API
const thumbnailURLs = ref([]); // the front images for the memory cards
const router = useRouter();
const route = useRoute();
const mullwardLoaded = ref(false);
const thumbnailsLoaded = ref(false);

async function getItems() {
    if (!gameStore.category) return;
    try {
        switch (gameStore.category) {
            case 'toys':
                items.value = await Ksamsok.getToys();
                getThumbnails();
                break;
            case 'world':
                items.value = await Ksamsok.getWorldItems();
                getThumbnails();
                break;
            case 'artwork':
                items.value = await Ksamsok.getArtwork();
                getThumbnails();
                break;
            default:
                console.error('Unrecognized category:', gameStore.category);
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

watch(() => gameStore.gameState, (newState) => {
  if (newState === 'finished') {
    router.push({ name: 'game-finished' });
  }
});

async function getThumbnails() {
  items.value.forEach((obj) => {
    thumbnailURLs.value.push(obj.image);
  });
  console.log("Items:", items.value);
  console.log("Thumbnails:", thumbnailURLs.value);
  thumbnailsLoaded.value = true;
  checkStartConditions();
}

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
