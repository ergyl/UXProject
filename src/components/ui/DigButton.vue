<template>
  <div class="flex w-full h-full">
    <NavButton
      :nav-path="'/choose-category'"
      :active-img="activeImage"
      :hover-img="hoverImage"
      :enabled-img="enabledImage"
      :is-active="isActive"
      :is-enabled="isEnabled"
      :class="{ 'bg-beigebrun': isActive, 'bg-transparent': !isActive }"
    />
  </div>
</template>
  
  <script setup>
  import { computed, ref } from 'vue';
  import NavButton from './NavButton.vue';
  import activeImage from '@/assets/images/navmenu/icon_dig-active.png';
  import hoverImage from '@/assets/images/navmenu/icon_dig-hoverclick.png';
  import enabledImage from '@/assets/images/navmenu/icon_dig-enabled.png';
  import { useRoute } from 'vue-router';
  
  const route = useRoute();
  const isActive = computed(() => route.path === '/choose-category' || route.path === '/choose-difficulty' || route.path === '/game-play');
  const isEnabled = ref(true);
  </script>
  