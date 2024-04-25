<!-- Page 1 in the SPA -->

<template>
  <div class="grid grid-cols-6 gap-4">
    <div class="col-span-4 row-span-4 col-start-2 row-start-2">
      <RouterLink to="/introduction">
        <AppLogo />
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import AppLogo from '../components/AppLogo.vue'
</script>