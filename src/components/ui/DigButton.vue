<template>
  <NavButton
    :nav-path="'/choose-category'"
    :active-img="activeImage"
    :hover-img="hoverImage"
    :enabled-img="enabledImage"
    :is-active="isActive"
    :is-enabled="isEnabled"
  />
</template>
  
  <script setup>
  import { computed, ref } from 'vue';
  import NavButton from './NavButton.vue';
  import activeImage from '@/assets/images/navmenu/icon_dig-active.png';
  import hoverImage from '@/assets/images/navmenu/icon_dig-hoverclick.png';
  import enabledImage from '@/assets/images/navmenu/icon_dig-enabled.png';
  import { useRoute } from 'vue-router';
  
  console.log("Active Image URL: ", activeImage);
  console.log("Hover Image URL: ", hoverImage);
  console.log("Enabled Image URL: ", enabledImage);
  
  const route = useRoute();
  const isActive = computed(() => route.path === '/choose-category' || route.path === '/choose-difficulty' || route.path === '/game-play');
  const isEnabled = ref(true);
  </script>
  