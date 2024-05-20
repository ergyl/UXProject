<!-- Page in the SPA -->

<template>
  <div
    v-if="backpackStore.shouldShowOwl"
    class="col-span-8 mx-5 lg:mx-0 lg:w-[31.7%]"
  >
    <img
      class="w-128 h-auto absolute z-20 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
      :src="owlImage"
      alt="Ugglan tackar dig för din donation!"
    >
    <div class="fixed inset-0 bg-beige opacity-100 z-10" />
  </div>

  <div
    class="grid grid-cols-8 mb-8 lg:mt-0 lg:flex lg:flex-col lg:justify-center lg:items-center"
  >
    <div
      class="flex col-span-8 h-48 lg:h-auto lg:flex lg:justify-center lg:items-end"
    >
      <div class="flex ml-10 mr-5 w-full gap-5 lg:w-[30%] lg:gap-0">
        <img
          class="w-24 h-auto self-end lg:w-[30%] lg:h-auto"
          :src="MullwardCloseUpImage"
          alt="closeup"
        >
        <SpeechBubble
          class="p-4 mt-6 mb-8 self-center relative right-2 lg:self-auto lg:w-full lg:px-2 lg:mb-2"
          :left="true"
        >
          <span
            v-if="!backpackStore.isEmpty"
            class="lg:pb-4"
          ><br>Vilket föremål<br>
            vill du veta mer om?</span>
          <span v-else><strong>Inga fyllda fack!</strong><br>
            Tryck på hackan för att gräva fram nya föremål.</span>
        </SpeechBubble>
      </div>
    </div>

        

    <div
      class="col-span-8 mx-5 lg:mx-0 lg:w-[31.7%]"
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
import owlImage from "@/assets/images/illustrations/backpack/owl-speaking.png";

const backpackStore = useBackpackStore();
</script>