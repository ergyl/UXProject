<!--
    This component is the wrapper used for all our routes.
    Each route renders its content inside the layout.
-->

<template>
  <div class="grid grid-cols-8 grid-rows-24 min-h-screen max-h-screen relative">
    <!-- Top padding rows -->
    <div
      class="col-span-2 row-span-3 bg-red-300"
    />
    <div
      class="col-span-4 row-span-3 bg-transparent"
    >
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
    <div
      class="col-span-2 row-span-3 bg-red-300"
    />
    <!-- Header / Top content row -->
    <div
      class="col-span-8 row-span-2 bg-gray-400 flex justify-center items-center"
    >
      <h1
        class="text-center"
      >
        {{ headerMessage }}
      </h1>
    </div>

    <!-- Main content grid -->
    <div class="col-span-8 row-span-18 bg-beigebrun">
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

    <div
      v-if="route.name === 'home'"
      class="col-span-8 row-span-1 bg-vit"
    >
      <footer class="flex justify-center items-center w-full h-full">
        <nav>
          <router-link
            to="/about-game"
            class="text-indigo-900 hover:text-green-900 font-bold"
          >
            Om spelet
          </router-link>
          <span class="mx-4" />
          <router-link
            to="/for-teachers"
            class="text-indigo-900 hover:text-green-900 font-bold"
          >
            För lärare
          </router-link>
        </nav>
      </footer>
    </div>

    <!-- Footer row -->
    <div class="col-span-8 row-span-1 bg-vit">
      <footer class="flex justify-center items-center w-full h-full">
        &copy;Dörrhandtagshopporna 2024
      </footer>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useGameStore } from '@/stores/gameStore';
import LogoImage from '@/assets/images/placeholders/logo/svg/logo-no-background.svg'

const route = useRoute();
const gameStore = useGameStore();

const headerMessage = computed(() => {
  if (route.name === 'game-play') {
    switch (gameStore.gameState) {
      case 'memorize':
        return 'Memorera';
      case 'play':
        return 'Hitta föremålet';
      case 'finished':
        return 'Utgrävningens fynd'
      default:
        return '';
    }
  }
  // If not in game-play, determine the message based on the route
  switch (route.name) {
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
    case 'about-game':
      return 'Om spelet';
    case 'for-teachers':
      return 'För lärare';
    default:
      return '';
  }
}); 
</script>

