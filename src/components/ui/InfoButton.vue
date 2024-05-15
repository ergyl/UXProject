<!-- Nav button for info -->

<template>
  <div class="flex w-full h-full">
    <NavButton
      :nav-path="'/info'"
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
    import activeImage from '@/assets/images/navmenu/icon_info-active.png';
    import hoverImage from '@/assets/images/navmenu/icon_info-hoverclick.png';
    import enabledImage from '@/assets/images/navmenu/icon_info-enabled.png';
    import { useRoute } from 'vue-router';
 
    const route = useRoute();
    const isActive = computed(() => route.path === '/info' || route.path === '/for-teachers' || route.path === '/about-game');
    const isEnabled = ref(true);
    </script>