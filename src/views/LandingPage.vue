<!-- Page 1 in the SPA -->

<template>
  <div class="grid h-full w-full">
    <!-- Use the defined grid lines from MainLayout to position the content -->
    <div class="col-start-1 col-end-9 row-start-2 row-end-10">
      <!-- Content here will be placed within lines 6 to 24 of the MainLayout grid -->
      <RouterLink to="/introduction">
        <AppLogo />
      </RouterLink>
      <!-- Additional content goes here -->
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import AppLogo from '../components/AppLogo.vue';
</script>
