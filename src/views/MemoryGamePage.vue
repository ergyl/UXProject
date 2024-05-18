<!-- Page in the SPA -->

<!-- This is the main game view, which will 
    displaying the memory game with all its components -->

<template>
  <div class="grid grid-cols-8 overflow-scroll mb-8 lg:grid-cols-6 lg:mt-10 lg:gap-x-5 lg:magic-margin">
    <div
      v-if="gameStore.category === null"
      class="mx-5"
    >
      <PopUp :text="'Du behöver välja kategori för att spela.'">
        <BasicButton
          :text="'Gå tillbaka'"
          :route="'/choose-category'"
        />
      </PopUp>
    </div>

    <div
      v-else-if="!thumbnailsLoaded || !mullwardLoaded && gameStore.gameState === 'start'"
      class="col-span-8 my-32 flex flex-col justify-center items-center"
    >
      <fwb-spinner
        size="12"
        color="green"
        class="self-center"
      />
      <span class="pt-2">Slumpar fram föremål...</span>
    </div>

    <div
      v-else
      class="flex flex-col justify-end col-span-8 h-48 lg:flew-row lg:flex-wrap lg:col-start-1 lg:col-span-2 lg:h-fit"
    >
      <!-- Content for the first div -->

      <div
        v-if="gameStore.gameState === 'loaded' || gameStore.gameState === 'memorize'"
        :style="{ visibility: gameStore.gameState === 'memorize' ? 'hidden' : 'visible' }"
        class="flex mx-5 lg:flex-col lg:h-full lg:mx-0"
      >
        <img
          v-if="gameStore.gameState === 'loaded'"
          class="w-32 h-auto object-contain self-end pb-1 ml-2 lg:w-[60%] lg:h-auto lg:self-auto lg:p-0 lg:m-0 lg:sticky lg:top-56"
          :src="MullwardMemorizingImage"
          alt="Mullward memorerar bilder"
          @load="mullwardMemorizingImageLoaded"
        >
        <SpeechBubble
          v-if="gameStore.gameState === 'loaded'"
          class="p-6 mb-2 lg:self-center lg:absolute lg:left-44 lg:bottom-40 lg:p-0"
          :left="true"
        >
          <span><strong>Memorera de<br>historiska skatterna!</strong>
            <br> Tryck på jorden<br>för att starta.</span>
        </SpeechBubble>
      </div>

      <div
        v-if="gameStore.gameState === 'play'"
        class="flex items-end justify-end lg:justify-normal lg:items-start"
      >
        <!--- Target item -->
        <Transition
          name="slide-fade"
          mode="out-in"
        >
          <img
            v-if="gameStore.gameState === 'play'"
            :key="gameStore.targetItem.id"
            class="mt-20 w-28 h-28 object-cover my-0 mx-auto border border-black mb-4 lg:mt-0 lg:aspect-square lg:w-[40%] lg:h-auto"
            :src="gameStore.targetItem?.image"
            alt="Föremål att hitta"
          >
        </Transition>
      </div>

      <div
        v-if="gameStore.gameState === 'finished' && gameStore.allItemsGuessed === true"
        class="mx-5 flex justify-center items-center p-4 bg-no-repeat bg-bottom bg-contain"
        :style="{ backgroundImage: `url('${MullwardDigSuccessImage}')` }"
      >
        <SpeechBubble
          class="p-4 relative left-8 rotate-3 bottom-2 lg:left-10 lg:bottom-10 lg:mt-20 lg:p-0"
          :left="true"
        >
          <span><strong>WOW, vilka föremål!</strong><br>
            Tryck på ett för att läsa mer och lägga i ryggsäcken.</span>
        </SpeechBubble>
      </div>
    </div>

    <div class="col-span-8 lg:col-start-3 lg:col-span-4 lg:h-fit">
      <!-- Content for the second div -->

      <!-- Game loaded / memorize -->
      <div v-if="gameStore.gameState === 'loaded' || gameStore.gameState === 'memorize'">
        <MemoryCardsGrid
          class="mx-5 lg:mx-0 lg:max-w-[50%]"
          :items="gameStore.items"
          :back-images="tileImages"
          @click="checkStartConditions"
        />
      </div>

      <div v-if="gameStore.gameState === 'play' || gameStore.gameState === 'finished'">
        <div v-if="thumbnailsLoaded && mullwardLoaded">
          <MemoryCardsGrid
            class="mx-5 lg:mx-0 lg:max-w-[50%]"
            :items="gameStore.items"
            :back-images="tileImages"
            @select-item="selectedItem = $event"
          />
          <!-- Item Details Popup -->
          <ItemWonPopUp
            v-if="gameStore.allItemsGuessed === true && selectedItem"
            :item="selectedItem"
            @close="selectedItem = null"
          />
        </div>
      </div>

      <div
        v-if="gameStore.gameState === 'finished' && gameStore.allItemsGuessed === false"
        class="mx-5"
      >
        <PopUp :text="'Rutten daggmask också! Tiden tog slut.'">
          <img
            :src="DaggmaskImage"
            alt="Daggmask"
            class="w-44 h-auto absolute top-0 left-2/3 transform -translate-x-1/2 -translate-y-24"
          >
          <BasicButton
            :text="'Försök igen'"
            :route="'/choose-category'"
          />
        </PopUp>
      </div>
    </div>


    <div class="col-span-8 lg:col-start-1 lg:col-span-6 lg:h-fit">
      <!-- Content for the third div -->

      <!-- Game memorize & thumbnailsloaded -->
      <div
        v-if="gameStore.gameState === 'memorize' || gameStore.gameState === 'play'"
        class="px-16 pt-6 pb-4 lg:flex lg:justify-center"
      >
        <ProgressBar
          v-if="gameStore.gameState === 'memorize'"
          :progress="gameStore.memorizeTimeLeftPercentage"
          :color-change="true"
          :height="'8'"
          class="lg:w-[60%]"
        />

        <ProgressBar
          v-else-if="gameStore.gameState === 'play'"
          :progress="gameStore.gameTimeLeftPercentage"
          :color-change="true"
          :height="'8'"
          class="lg:w-[60%]"
        />
      </div>

      <div
        v-if="gameStore.gameState === 'finished' && gameStore.allItemsGuessed === true"
        class="text-center mx-5 my-4"
      >
        <p>
          Spara föremål från utgrävningen
          innan du öppnar ryggsäcken - annars försvinner de.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onBeforeUnmount, onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useGameStore } from '@/stores/gameStore';
import { FwbSpinner } from 'flowbite-vue';
import Ksamsok from '@/services/Ksamsok.js';
import MemoryCardsGrid from '@/components/game/MemoryCardsGrid.vue';
import ItemWonPopUp from '@/components/game/ItemWonPopUp.vue'
import PopUp from '@/components/ui/PopUp.vue'
import ProgressBar from '@/components/ProgressBar.vue'
import SpeechBubble from '@/components/SpeechBubble.vue';
import BasicButton from '@/components/ui/BasicButton.vue';
import MullwardMemorizingImage from '@/assets/images/illustrations/game/mullward_memorize.png';
import MullwardDigSuccessImage from '@/assets/images/illustrations/game/mullward_dig_success.png';
import DaggmaskImage from '@/assets/images/illustrations/game/worm.png';
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
        return;
    }
    console.log('API Returned Items:', items); // Check what the API returned
    if (items) {
      gameStore.addItems(items);
      gameStore.setTargetItem();
      console.log('Target item selected: ' + gameStore.targetItem);
      thumbnailsLoaded.value = true;
      gameStore.setGameState('loaded');
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

if (router && route) {
  watch(() => route.path, () => {
    if (route.name === 'game-play') {
      getItems();
    }
  });
}

function checkStartConditions() {
  if (thumbnailsLoaded.value && mullwardLoaded.value && gameStore.gameState !== 'memorize') {
    gameStore.startGame();
  }
}

onBeforeUnmount(() => {
  console.log(`gameStore object: ${gameStore}`);
  console.log('resetGame method:', gameStore.resetGame);
  gameStore.resetGame();
});
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(15px);
  opacity: 0;
}
</style>