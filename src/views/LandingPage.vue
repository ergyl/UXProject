<script setup>
import { RouterLink } from 'vue-router'

import LandingLayout from '@/components/layout/LandingLayout.vue'
import AppLogo from '../components/AppLogo.vue'
</script>

<template>
  <LandingLayout>
    <RouterLink to="/introduction"><AppLogo></AppLogo></RouterLink>
  </LandingLayout>
</template>