<!-- Page in the SPA -->

<template>
  <div
    class="grid grid-cols-8 overflow-scroll mb-8"
  >
    <div
      class="flex justify-end col-span-8 sm:col-span-8 md:col-span-3 lg:col-span-3 xl:col-span-3 h-48"
    >
      <div class="flex mx-5">
        <img
          class="w-20 h-auto object-contain self-end"
          :src="MullwardCloseUpImage"
          alt="closeup"
        >
        <SpeechBubble
          class="mt-6 mb-8 self-center"
          :left="true"
        >
          <span>Vilket föremål<br>
            vill du veta mer om?</span>
        </SpeechBubble>
      </div>
    </div>

    <div
      class="col-span-8 sm:col-span-8 md:col-span-4 lg:col-span-4 xl:col-span-4"
    >
      <BackpackCardsGrid
        class="mx-5"
        :items="backpackStore.itemsObjects"
        @select-item="selectedItem = $event"
      />
    </div>

    <div
      class="col-span-8 sm:col-span-8 md:col-span-1 lg:col-span-1 xl:col-span-1"
    >
      <div class="flex justify-center px-16 py-8">
        <BasicButton
          class="px-10"
          text="Donera"
        />
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