<!-- Page in the SPA -->

<!-- This is the main game view, which will handle 
    displaying the memory cards, flipping them, '
    and the game logic -->

<template>
  <!-- Use the defined grid lines from MainLayout to position the content -->
  <!-- Ensure that the column numbers here match the lines in the MainLayout grid -->
  <div class="col-start-4 col-end-6 row-start-1 row-end-1 bg-red-200 flex flex-col items-center justify-center mt-4">
    <!-- Content here will be placed within the MainLayout grid -->
    <fwb-tooltip
      v-if="gameStore.readyToPlay"
      placement="bottom"
    >
      <template #trigger>
        <img
         
          class="w-28 h-auto object-contain my-0 mx-auto"
          :src="MullwardMemorizingImage"
          alt="Ryggsäck öppen"
        >
      </template>
      <template #content>
        Titta och memora var föremålen finns.
      </template>
    </fwb-tooltip>

    <fwb-tooltip
      v-else
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
    <div class="grid grid-cols-8">
      <fwb-spinner
        v-if="!thumbnailsLoaded"
        size="12"
        class="self-center relative left-40"
      />
      
      <div class="col-start-2 col-end-8 pt-8 pb-4">
        <NineCardsGrid
          v-if="thumbnailsLoaded"
          :thumbnails="thumbnailURLs"
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
import { ref, onBeforeUnmount, onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useGameStore } from '@/stores/gameStore';
import { FwbTooltip, FwbSpinner, FwbProgress } from 'flowbite-vue';
import Ksamsok from '@/services/Ksamsok.js'; // Import the service class
import MullwardMemorizingImage from '@/assets/images/illustrations/game/mullward_memorize.png';
import BackpackOpenImage from '@/assets/images/placeholders/backpack-open.png';
import NineCardsGrid from '../components/ui/NineCardsGrid.vue';

const gameStore = useGameStore();

const items = ref([]);  // Use ref to create a reactive reference
const thumbnailURLs = ref([]);
const router = useRouter();
const route = useRoute();
let thumbnailsLoaded = false;

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

async function getThumbnails() {
  items.value.forEach((obj) => {
    thumbnailURLs.value.push(obj.image);
  });
  console.log("Items:", items.value);
  console.log("Thumbnails:", thumbnailURLs.value);
  thumbnailsLoaded = true;
}

// Fetch items when the route is entered
onMounted(() => {
  console.log("Chosen category:", gameStore.category);
    getItems();
    gameStore.startGame();
});

// Handle route updates (for example, navigating away and back to the page)
if (router && route) {
    watch(() => route.path, () => {
        if (route.name === 'game-play') {
            getItems();
        }
    });
}

onBeforeUnmount(() => {
  gameStore.resetGame();
});

</script>
