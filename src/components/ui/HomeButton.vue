<!-- Nav button for home -->

<template>
  <div class="flex w-full h-full">
    <NavButton
      :nav-path="'/home'"
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
import activeImage from '@/assets/images/navmenu/icon_home-active.png';
import hoverImage from '@/assets/images/navmenu/icon_home-hoverclick.png';
import enabledImage from '@/assets/images/navmenu/icon_home-enabled.png';
import { useRoute } from 'vue-router';

const route = useRoute();
const isActive = computed(() => route.path === '/home');
const isEnabled = ref(true);
</script>
