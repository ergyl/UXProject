<!-- Page in the SPA -->

<!--The MainLayout has defined a grid with 8 columns and 24 rows, 
  which means the grid lines for columns are numbered from 1 to 9 
  (since there are 8 columns, there will be 9 lines including 
  the start and end lines), and for rows, the lines are from 1 to 25.

  @col-start & end should be between 1-9, @col-start & end should be between 1-25-->

<template>
  <div class="col-start-3 col-end-7 row-start-1 row-end-1 bg-red-200 flex flex-col items-center justify-center">
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
        <NineCardsGrid :items="placeHolderArray" />
      </div>
    </div>

    <!-- Flex container wrapper positioned in the grid -->
    <div class="flex justify-center gap-4 py-2 px-16">
      <fwb-button
        color="default"
        size="lg"
        @click="goBack"
      >
        <template #prefix>
          <span class="icon-[material-symbols-light--close] w-5 h-5 inline-block align-middle" />
        </template>
        Stäng
      </fwb-button>
      <fwb-button
        color="purple"
        size="lg"
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

    const placeHolderArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    const router = useRouter();

    const goBack = () => {
      router.back();
    }
    </script>
    