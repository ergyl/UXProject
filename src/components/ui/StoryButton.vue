<template>
  <NavButton
    :nav-path="'/story'"
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
    import activeImage from '@/assets/images/navmenu/icon_story-active.png';
    import hoverImage from '@/assets/images/navmenu/icon_story-hoverclick.png';
    import enabledImage from '@/assets/images/navmenu/icon_story-enabled.png';
    import { useRoute } from 'vue-router';
    
    console.log("Active Image URL: ", activeImage);
    console.log("Hover Image URL: ", hoverImage);
    console.log("Enabled Image URL: ", enabledImage);
    
    const route = useRoute();
    const isActive = computed(() => route.path === '/story');
    const isEnabled = ref(true);
    </script>