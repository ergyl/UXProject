<!-- Page in the SPA -->

<template>
  <div
    class="grid grid-cols-8 overflow-scroll mb-8"
  >
    <div
      class="flex col-span-8 h-48"
    >
      <div class="flex ml-10 mr-5 w-full gap-5">
        <img
          class="w-24 h-auto self-end"
          :src="MullwardCloseUpImage"
          alt="closeup"
        >
        <SpeechBubble
          class="mt-6 mb-8 self-center relative right-2"
          :left="true"
        >
          <span v-if="!backpackStore.isEmpty"><br>Vilket föremål<br>
            vill du veta mer om?</span>
          <span v-else><strong>Inga fyllda fack!</strong><br>
            Tryck på hackan för att gräva fram nya föremål.</span>
        </SpeechBubble>
      </div>
    </div>

    <div
      class="col-span-8 mx-5"
    >
      <BackpackCardsGrid
        :items="backpackStore.itemsObjects"
        @select-item="selectedItem = $event"
      />
    </div>
  </div>
</template>

<script setup>
import { useBackpackStore } from '@/stores/backpackStore';
import SpeechBubble from '@/components/SpeechBubble.vue';
import BackpackCardsGrid from '@/components/backpack/BackpackCardsGrid.vue';
import MullwardCloseUpImage from '@/assets/images/illustrations/characters/mullward-backpack-closeup.png';

const backpackStore = useBackpackStore();
</script>