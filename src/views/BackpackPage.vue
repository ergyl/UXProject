<!-- Page in the SPA -->

<!--The MainLayout has defined a grid with 8 columns and 24 rows, 
  which means the grid lines for columns are numbered from 1 to 9 
  (since there are 8 columns, there will be 9 lines including 
  the start and end lines), and for rows, the lines are from 1 to 25.

  @col-start & end should be between 1-9, @col-start & end should be between 1-25-->

<template>
  <div class="col-start-2 col-end-8 row-start-1 row-end-6 bg-red-200 flex justify-start items-end">
    <div class="flex">
      <img
        class="w-10 h-10"
        src="https://mullvad.net/press/MullvadVPN_logo_Round_RGB_Color_negative.png"
        alt="hej"
      >
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
    
    import { useBackpackStore } from '@/stores/backpackStore';
    import SpeechBubble from '@/components/SpeechBubble.vue'
    import BackpackCardsGrid from '@/components/backpack/BackpackCardsGrid.vue';
    import { FwbButton } from 'flowbite-vue';
    import { useRouter } from 'vue-router';

    const backpackStore = useBackpackStore();

    console.log(`Backpack contains ${backpackStore.items.size} items.`)

    backpackStore.items.forEach((value, key) => {
      console.log(`Item ID: ${key}, value: `, value)
    });

    const router = useRouter();

    const goBack = () => {
      router.back();
    }
    </script>
    