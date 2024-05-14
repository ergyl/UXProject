<template>
  <div class="flex w-full h-full">
    <NavButton
      :nav-path="'/story'"
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
    import activeImage from '@/assets/images/navmenu/icon_story-active.png';
    import hoverImage from '@/assets/images/navmenu/icon_story-hoverclick.png';
    import enabledImage from '@/assets/images/navmenu/icon_story-enabled.png';
    import { useRoute } from 'vue-router';

    const route = useRoute();
    const isActive = computed(() => route.path === '/story');
    const isEnabled = ref(true);
    </script>