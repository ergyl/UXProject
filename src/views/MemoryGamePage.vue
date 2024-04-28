<!-- Page in the SPA -->

<!-- This is the main game view, which will handle 
    displaying the memory cards, flipping them, '
    and the game logic -->

<template>
  <!-- Use the defined grid lines from MainLayout to position the content -->
  <!-- Ensure that the column numbers here match the lines in the MainLayout grid -->
  <div class="col-start-3 col-end-7 row-start-1 row-end-1 bg-red-200 flex flex-col items-center justify-center">
    <!-- Content here will be placed within the MainLayout grid -->
    <img
      class="w-28 h-auto object-contain my-0 mx-auto"
      :src="BackpackOpenImage"
      alt="Ryggsäck öppen"
    >
  </div>
  <div class="col-start-1 col-end-9 row-start-2 row-end-2 flex justify-center items-center bg-green-200">
    <h2 class="pt-1 pb-1">
      Vilket föremål vill du läsa mer om?
    </h2>
  </div>
      
  <div class="col-start-1 col-end-9 row-start-3 row-end-24 text-center bg-blue-500 overflow-scroll">
    <div class="grid grid-cols-8">
      <div class="col-start-2 col-end-8 pt-8 pb-4">
        <NineCardsGrid />
      </div>
    </div>
      
    <!-- Flex container wrapper positioned in the grid -->
    <div class="flex justify-center gap-4 py-2 px-16">
      <fwb-button
        color="default"
        size="xl"
        @click="goBack"
      >
        <template #prefix>
          <span class="icon-[material-symbols-light--close] w-5 h-5 inline-block align-middle" />
        </template>
        Stäng
      </fwb-button>
      <fwb-button
        color="purple"
        size="xl"
      >
        <template #prefix>
          <span class="icon-[material-symbols-light--handshake-outline] w-5 h-5 inline-block align-middle" />
        </template>
        Donera
      </fwb-button>
    </div>
  </div>
</template>
          
          <script setup>
      
          import NineCardsGrid from '../components/ui/NineCardsGrid.vue';
          import BackpackOpenImage from '../assets/images/placeholders/backpack-open.png'
          import { FwbButton } from 'flowbite-vue';
          import { useRouter } from 'vue-router';
      
          const router = useRouter();
      
          const goBack = () => {
            router.back();
          }
          </script>