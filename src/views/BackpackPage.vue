<!-- Page in the SPA -->

<template>
  <div
    class="grid grid-cols-8 overflow-scroll"
  >
    <div class="flex col-start-2 col-end-8">
      <img
        class="w-20 h-auto object-contain ml-3 self-end"
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
    <div class="col-start-2 col-end-8">
      <BackpackCardsGrid
        :items="backpackStore.itemsObjects"
        @select-item="selectedItem = $event"
      />
      <div class="flex justify-center gap-4 px-16 py-8">
        <BasicButton
          text="Senaste utgrävning"
          :disabled="true"
        />
        <BasicButton text="Donera" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useBackpackStore } from '@/stores/backpackStore';
import SpeechBubble from '@/components/SpeechBubble.vue';
import BackpackCardsGrid from '@/components/backpack/BackpackCardsGrid.vue';
import MullwardCloseUpImage from '@/assets/images/illustrations/characters/mullward-backpack-closeup.png';
import BasicButton from '@/components/ui/BasicButton.vue';

const backpackStore = useBackpackStore();
</script>