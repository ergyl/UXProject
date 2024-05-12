<template>
  <NavButton
    :nav-path="'/home'"
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
import activeImage from '@/assets/images/navmenu/icon_home-active.png';
import hoverImage from '@/assets/images/navmenu/icon_home-hoverclick.png';
import enabledImage from '@/assets/images/navmenu/icon_home-enabled.png';
import { useRoute } from 'vue-router';

const route = useRoute();
const isActive = computed(() => route.path === '/home');
const isEnabled = ref(true);
</script>
