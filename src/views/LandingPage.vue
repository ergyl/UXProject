<!-- Page in the SPA -->

<!--The MainLayout has defined a grid with 8 columns and 24 rows, 
  which means the grid lines for columns are numbered from 1 to 9 
  (since there are 8 columns, there will be 9 lines including 
  the start and end lines), and for rows, the lines are from 1 to 25.

  @col-start & end should be between 1-9, @col-start & end should be between 1-25-->

<template>
  <div class="flex flex-row min-h-screen max-h-screen justify-center items-center">
    <RouterLink
      to="/story"
    >
      <AppLogo />
    </RouterLink>
  </div>
</template>
  
  <script setup>
  import { RouterLink } from 'vue-router';
  import AppLogo from '../components/AppLogo.vue';
  </script>
  
