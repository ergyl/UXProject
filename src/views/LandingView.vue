<script setup>
import { RouterLink } from 'vue-router'

import AppLogo from '../components/AppLogo.vue'
</script>

<template>
  <main>
    <RouterLink to="/introduction"><AppLogo></AppLogo></RouterLink>
  </main>
</template>