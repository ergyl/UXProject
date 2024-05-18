<!-- Nav button for tips -->

<template>
  <div class="flex w-full h-full">
    <NavButton
      :nav-path="'/tips'"
      :active-img="activeImage"
      :hover-img="hoverImage"
      :enabled-img="enabledImage"
      :is-active="isActive"
      :is-enabled="isEnabled"
      :class="{ 'bg-beige': isActive, 'bg-transparent': !isActive }"
    />
  </div>
</template>
      
      <script setup>
      import { computed, ref } from 'vue';
      import NavButton from './NavButton.vue';
      import activeImage from '@/assets/images/navmenu/icon_write-active.png';
      import hoverImage from '@/assets/images/navmenu/icon_write-hoverclick.png';
      import enabledImage from '@/assets/images/navmenu/icon_write-enabled.png';
      import { useRoute } from 'vue-router';
      

      const route = useRoute();
      const isActive = computed(() => route.path === '/tips');
      const isEnabled = ref(true);
      </script>