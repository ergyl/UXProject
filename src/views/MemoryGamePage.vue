<!-- Page in the SPA -->

<!-- This is the main game view, which will 
    displaying the memory game with all its components -->

<template>
  <div class="grid grid-cols-8 overflow-scroll mb-8">
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
      class="flex flex-col justify-end col-span-8 h-48"
    >
      <!-- Content for the first div -->
    
      <div
        v-if="gameStore.gameState === 'loaded' || gameStore.gameState === 'memorize'"
        :style="{ visibility: gameStore.gameState === 'memorize' ? 'hidden' : 'visible' }"
        class="flex mx-5"
      >
        <img
          class="w-32 h-auto object-contain self-end pb-4 ml-2"
          :src="MullwardMemorizingImage"
          alt="Mullward memorerar bilder"
          @load="mullwardMemorizingImageLoaded"
        >
        <SpeechBubble
          class="mt-6 mb-8 self-center"
          :left="true"
        >
          <span><strong>Memorera de historiska skatterna!</strong><br>
            Tryck på jorden för att starta.</span>
        </SpeechBubble>
      </div>
    
      <div
        v-if="gameStore.gameState === 'play'"
        class="flex items-end justify-end"
      >
        <!--- Target item -->
        <img
          v-if="gameStore.gameState === 'play'"
          class="mt-20 w-28 h-28 object-cover my-0 mx-auto border border-black mb-4"
          :src="gameStore.targetItem?.image"
          alt="Föremål att hitta"
        >
      </div>
    
      <div
        v-if="gameStore.gameState === 'finished' && gameStore.allItemsGuessed === true"
        class="mx-5 flex justify-center items-center p-4 bg-no-repeat bg-bottom bg-contain"
        :style="{ backgroundImage: `url('${MullwardDigSuccessImage}')` }"
      >
        <SpeechBubble
          class="relative left-10 bottom-5"
          :left="true"
        >
          <span><strong>WOW, vilka föremål!</strong><br>
            Tryck på ett för att läsa mer och lägga i ryggsäcken.</span>
        </SpeechBubble>
      </div>
    </div>
        
    <div
      class="col-span-8"
    >
      <!-- Content for the second div -->
    
      <!-- Game loaded / memorize -->
      <div
        v-if="gameStore.gameState === 'loaded' || gameStore.gameState === 'memorize'"
        class="mx-5"
      >
        <MemoryCardsGrid
          :items="gameStore.items"
          :back-images="tileImages"
          @click="checkStartConditions"
        />
      </div>
    
      <div v-if="gameStore.gameState === 'play' || gameStore.gameState === 'finished'">
        <div
          v-if="thumbnailsLoaded && mullwardLoaded"
          class="mx-5"
        >
          <MemoryCardsGrid
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
    
    
    <div
      class="col-span-8"
    >
      <!-- Content for the third div -->
    
      <!-- Game memorize & thumbnailsloaded -->
      <div
        v-if="gameStore.gameState === 'memorize' || gameStore.gameState === 'play'"
        class="px-16 pt-6 pb-4"
      >
        <ProgressBar
          v-if="gameStore.gameState === 'memorize'"
          :progress="gameStore.memorizeTimeLeftPercentage"
          :color-change="true"
          :height="'8'"
        />
    
        <ProgressBar
          v-else-if="gameStore.gameState === 'play'"
          :progress="gameStore.gameTimeLeftPercentage"
          :color-change="true"
          :height="'8'"
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
    import { FwbSpinner, FwbProgress } from 'flowbite-vue';
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
      if (thumbnailsLoaded.value && mullwardLoaded.value) {
          gameStore.startGame();
        }
      }
    
    onBeforeUnmount(() => {
      console.log(`gameStore object: ${gameStore}`);
      console.log('resetGame method:', gameStore.resetGame);
      gameStore.resetGame();
    });
    </script>
    