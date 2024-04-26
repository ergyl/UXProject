<!-- Page ? in the SPA -->

<!--The MainLayout has defined a grid with 8 columns and 24 rows, 
  which means the grid lines for columns are numbered from 1 to 9 
  (since there are 8 columns, there will be 9 lines including 
  the start and end lines), and for rows, the lines are from 1 to 25.

  @col-start & end should be between 1-9, @col-start & end should be between 1-25-->

<template>
  <!-- Use the defined grid lines from MainLayout to position the content -->
  <!-- Ensure that the column numbers here match the lines in the MainLayout grid -->
  <div class="col-start-3 col-end-7 row-start-1 row-end-3 bg-red-200">
    <!-- Content here will be placed within the MainLayout grid -->
    Open backpack
  </div>
  <div class="col-start-1 col-end-9 row-start-3 row-end-3 text-center bg-green-200">
    <p>Vilket föremål vill du läsa mer om?</p>
  </div>

  <div class="col-start-1 col-end-9 row-start-4 row-end-18 text-center bg-blue-500">
    <p class="text-white">
      Ryggsäck
    </p>

    <!-- Flex container wrapper positioned in the grid -->
    <div class="grid grid-cols-8">
      <div class="col-start-2 col-end-8">
        <div class="flex">
          <div class="w-1/2 bg-gray-400 h-12">
            One
          </div>
          <div class="w-1/2 bg-gray-500 h-12">
            Two
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
    
    <script setup>
    import { RouterLink } from 'vue-router';
    import AppLogo from '../components/AppLogo.vue';
    </script>
    