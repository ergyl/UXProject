<!-- Page in the SPA -->

<!-- This view will show the results when the game is finished 
    or when the time is up -->

    <!-- Page in the SPA -->

<!--The MainLayout has defined a grid with 8 columns and 24 rows, 
  which means the grid lines for columns are numbered from 1 to 9 
  (since there are 8 columns, there will be 9 lines including 
  the start and end lines), and for rows, the lines are from 1 to 25.

  @col-start & end should be between 1-9, @col-start & end should be between 1-25-->

<template>
  <div class="col-start-1 col-end-9 row-start-2 row-end-2 flex justify-center items-center bg-green-200">
    <h2 class="pt-1 pb-1">
      Vilket föremål vill du läsa mer om?
    </h2>
  </div>
  
  <div class="col-start-1 col-end-9 row-start-3 row-end-24 text-center bg-blue-500 overflow-scroll">
    <p class="pt-4">
      Du måste titta på föremål och spara dem i ryggsäcken. Annars försvinner de!
    </p>
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
        @click="goHome"
      >
        <template #prefix>
          <span class="icon-[material-symbols-light--close] w-5 h-5 inline-block align-middle" />
        </template>
        Hem
      </fwb-button>
      <fwb-button
        color="purple"
        size="lg"
      >
        <template #prefix>
          <span class="icon-[material-symbols-light--backpack-outline] w-5 h-5 inline-block align-middle" />
        </template>
        Ryggsäck
      </fwb-button>
    </div>
  </div>
</template>
      
      <script setup>
  
      import NineCardsGrid from '../components/ui/NineCardsGrid.vue';
      import { FwbButton } from 'flowbite-vue';
      import { useRouter } from 'vue-router';
  
      const placeHolderArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  
      const router = useRouter();
  
      const goHome = () => {
        router.push('home');
      }
      </script>