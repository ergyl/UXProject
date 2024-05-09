<!--
    This component is the wrapper used for all our routes.
    Each route renders its content inside the layout.
-->

<template>
  <div class="grid grid-cols-8 grid-rows-24 min-h-screen max-h-screen relative">
    <!-- Top padding row -->
    <div
      class="col-span-8 row-span-3 bg-vit"
    >
      <div class="grid grid-cols-3 grid-rows-1 gap-0 border border-black justify-center items-center">
        <div class="border border-black">
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
        <div class="border border-black">
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
        <div class="border border-black">
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
      </div>
    </div>
 
    <!-- Main content grid -->
    <main class="col-span-8 row-span-18 bg-beigebrun">
      <!-- Creating a subgrid inside the main content area -->
      <div class="grid grid-cols-8 grid-rows-18 h-full">
        <RouterView v-slot="{ Component }">
          <component
            :is="Component"
            v-bind="$route.params"
          />
        </RouterView>
      </div>
    </main>

    <!-- Footer row -->
    <footer class="col-span-8 row-span-3 bg-vit flex justify-center items-center">
      <div class="grid grid-cols-3 grid-rows-1 gap-0 border border-black justify-center items-center">
        <div class="border border-black">
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
        <div class="border border-black">
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
        <div class="border border-black">
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
      </div>
    </footer>
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

