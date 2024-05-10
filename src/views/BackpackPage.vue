<!-- Page in the SPA -->

<!--The MainLayout has defined a grid with 8 columns and 24 rows, 
  which means the grid lines for columns are numbered from 1 to 9 
  (since there are 8 columns, there will be 9 lines including 
  the start and end lines), and for rows, the lines are from 1 to 25.

  @col-start & end should be between 1-9, @col-start & end should be between 1-25-->

<template>
  <div class="col-start-2 col-end-8 row-start-1 row-end-6 flex justify-start items-end pt-8">
    <div class="flex justify-start items-end">
      <img
        class="w-24 h-auto ml-3"
        :src="MullwardCloseUpImage"
        alt="closeup"
      >
    </div>
    <div class="flex items-center justify-center w-full">
      <SpeechBubble
        class="mb-4"
        :left="true"
      >
        Vilket föremål vill du veta mer om?
      </SpeechBubble>
    </div>
  </div>

  <div class="col-start-1 col-end-9 row-start-6 row-end-24 text-center overflow-scroll">
    <div class="grid grid-cols-8">
      <div class="col-start-2 col-end-8 pb-4">
        <BackpackCardsGrid
          :items="backpackStore.itemsObjects"
          @select-item="selectedItem = $event"
        />
      </div>
    </div>

    <!-- Flex container wrapper positioned in the grid -->
    <div class="flex justify-center gap-4 py-2 px-16">
      <BasicButton
        text="Senaste utgrävning"
        disabled="true"
      />
      <BasicButton text="Donera" />
    </div>
  </div>
</template>

<script setup>

import { useBackpackStore } from '@/stores/backpackStore';
import SpeechBubble from '@/components/SpeechBubble.vue'
import BackpackCardsGrid from '@/components/backpack/BackpackCardsGrid.vue';
import MullwardCloseUpImage from '@/assets/images/illustrations/characters/mullward-backpack-closeup.png'
import BasicButton from '@/components/ui/BasicButton.vue';

const backpackStore = useBackpackStore();

console.log(`Backpack contains ${backpackStore.items.size} items.`)

backpackStore.items.forEach((value, key) => {
  console.log(`Item ID: ${key}, value: `, value)
});
</script>