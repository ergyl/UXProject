<!-- Page 1 in the SPA -->

<!--The MainLayout has defined a grid with 8 columns and 24 rows, 
  which means the grid lines for columns are numbered from 1 to 9 
  (since there are 8 columns, there will be 9 lines including 
  the start and end lines), and for rows, the lines are from 1 to 25.

  @col-start & end should be between 1-9, @col-start & end should be between 1-25-->

<template>
  <!-- Use the defined grid lines from MainLayout to position the content -->
  <!-- Ensure that the column numbers here match the lines in the MainLayout grid -->
  <div class="col-start-2 col-end-8 row-start-2 row-end-5">
    <!-- Content here will be placed within the MainLayout grid -->
    <RouterLink to="/introduction">
      <AppLogo />
    </RouterLink>
  </div>
</template>
  
  <script setup>
  import { RouterLink } from 'vue-router';
  import AppLogo from '../components/AppLogo.vue';
  </script>
  
