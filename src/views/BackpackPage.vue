<!-- Page in the SPA -->

<!--The MainLayout has defined a grid with 8 columns and 24 rows, 
  which means the grid lines for columns are numbered from 1 to 9 
  (since there are 8 columns, there will be 9 lines including 
  the start and end lines), and for rows, the lines are from 1 to 25.

  @col-start & end should be between 1-9, @col-start & end should be between 1-25-->

<template>
  <div
    class="col-start-2 col-end-8 row-start-1"
    :class="isHome ? 'row-end-6' : 'row-end-7'"
  >
    <!-- Dynamically end at row 7 if footer is not displayed -->
    <div class="flex">
      <img
        class="w-24 h-auto object-contain ml-3 self-end"
        :src="MullwardCloseUpImage"
        alt="closeup"
      >
      <SpeechBubble
        class="my-8 self-center"
        :left="true"
      >
        Vilket föremål vill du veta mer om?
      </SpeechBubble>
    </div>
  </div>
  <div
    class="col-start-1 col-end-9 row-start-7"
    :class="isHome ? 'row-end-24' : 'row-end-25'"
  >
    <!-- Take the full available space when footer is not visible -->
    <div class="grid grid-cols-8">
      <div class="col-start-2 col-end-8 pb-4">
        <BackpackCardsGrid
          :items="backpackStore.itemsObjects"
          @select-item="selectedItem = $event"
        />
      </div>
    </div>
    <div class="flex justify-center gap-4 py-2 px-16">
      <BasicButton
        text="Senaste utgrävning"
        :disabled="true"
      />
      <BasicButton text="Donera" />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useNavigationStore } from '@/stores/navigationStore';
import { useBackpackStore } from '@/stores/backpackStore';
import SpeechBubble from '@/components/SpeechBubble.vue';
import BackpackCardsGrid from '@/components/backpack/BackpackCardsGrid.vue';
import MullwardCloseUpImage from '@/assets/images/illustrations/characters/mullward-backpack-closeup.png';
import BasicButton from '@/components/ui/BasicButton.vue';

const navStore = useNavigationStore();
const isHome = computed(() => navStore.isHome);

const backpackStore = useBackpackStore();
</script>