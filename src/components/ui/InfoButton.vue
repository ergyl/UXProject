<template>
  <NavButton
    :nav-path="'/info'"
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
    import activeImage from '@/assets/images/navmenu/icon_info-active.png';
    import hoverImage from '@/assets/images/navmenu/icon_info-hoverclick.png';
    import enabledImage from '@/assets/images/navmenu/icon_info-enabled.png';
    import { useRoute } from 'vue-router';
 
    const route = useRoute();
    const isActive = computed(() => route.path === '/info');
    const isEnabled = ref(true);
    </script>