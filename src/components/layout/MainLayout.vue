<!--
    This component is the wrapper used for all our routes.
    Each route renders its content inside the layout.
-->

<template>
  <div class="grid grid-cols-8 grid-rows-24 min-h-screen max-h-screen relative">
    <!-- Top padding rows -->
    <div class="col-span-2 row-span-3 bg-transparent" />
    <div class="col-span-4 row-span-3 bg-red-400">
      <RouterLink to="/home">
        <figure class="h-full w-full">
          <img
            :src="LogoImage"
            alt="Logo"
            class="object-fit h-full w-full"
          >
        </figure>
      </RouterLink>
    </div>
    <div class="col-span-2 row-span-3 bg-transparent" />
    <!-- Header / Top content row -->
    <div class="col-span-8 row-span-2 bg-gray-400 flex justify-center items-center">
      <h1
        class="text-center"
      >
        {{ headerMessage }}
      </h1>
    </div>

    <!-- Main content grid -->
    <div class="col-span-8 row-span-18 bg-blue-200">
      <!-- Creating a subgrid inside the main content area -->
      <div class="grid grid-cols-8 grid-rows-18 h-full">
        <RouterView v-slot="{ Component }">
          <component
            :is="Component"
            v-bind="$route.params"
          />
        </RouterView>
      </div>
    </div>

    <!-- Footer row -->
    <div class="col-span-8 row-span-1 bg-gray-400">
      <footer class="flex justify-center items-center w-full h-full">
        &copy;Dörrhandtagshopporna 2024
      </footer>
    </div>
  </div>
</template>

<script setup>
import { computed, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useGameStore } from '@/stores/gameStore';
import LogoImage from '@/assets/images/placeholders/logo/svg/logo-no-background.svg'

const route = useRoute();
const gameStore = useGameStore();

watch(route, (to, from) => {
  if (to.name !== 'game-play') { // Assuming 'memory-game' is the route name for the MemoryGamePage
    gameStore.resetGame();
  }
}, { immediate: true });

const headerMessage = computed(() => {
  // If currently in game-mode
  switch (gameStore.gameState) {
    case 'memorize':
      return 'Memorera';
    case 'play':
      return 'Hitta föremålet';
    case 'finished':
      return 'Spelet är över';
  }

  // If not, determine the message based on the route
  switch (route.name) {
    case 'landing':
      return 'Välkommen!';
    case 'story':
      return 'Story';
    case 'home':
      return 'Vad vill du göra?';
    case 'backpack':
      return 'Din ryggsäck';
    case 'tips':
      return 'Skrivtips';
    case 'choose-category':
      return 'Välj kategori';
    case 'choose-difficulty':
      return 'Välj svårighet';
    default:
      return '';
  }
});
</script>

