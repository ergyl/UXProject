<template>
  <div class="flex w-full h-full">
    <NavButton
      :nav-path="'/choose-category'"
      :active-img="activeImage"
      :hover-img="hoverImage"
      :enabled-img="enabledImage"
      :is-active="isActive"
      :is-enabled="isEnabled"
      :class="buttonClasses"
    />
  </div>
</template>
  
  <script setup>
  import { useBackpackStore } from '@/stores/backpackStore';
  import { computed, ref } from 'vue';
  import { useRoute } from 'vue-router';
  import NavButton from './NavButton.vue';
  import activeImage from '@/assets/images/navmenu/icon_dig-active.png';
  import hoverImage from '@/assets/images/navmenu/icon_dig-hoverclick.png';
  import enabledImage from '@/assets/images/navmenu/icon_dig-enabled.png';
  
  const route = useRoute();
  const backpackStore = useBackpackStore();

  const isInEmptyBackpack = computed(() => {
  return route.path === '/backpack' && backpackStore.spaceLeft === 9;
});

  const isActive = computed(() => route.path === '/choose-category' || route.path === '/choose-difficulty' || route.path === '/game-play');
  const isEnabled = ref(true);

  const buttonClasses = computed(() => ({
  'bg-beigebrun': isActive.value,
  'bg-transparent': !isActive.value,
  'motion-safe:animate-bounce': isInEmptyBackpack.value,
  'animate-none': !isInEmptyBackpack.value,
}));
  </script>
  
  