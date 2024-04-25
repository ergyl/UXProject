<!--
    This component is the wrapper used for all our routes.
    Each route renders its content inside the layout.
-->

<script>
export default {
  name: 'MainLayout'
}
</script>

<template>
  <div class="grid-container grid grid-cols-8 grid-rows-24 gap-y-0 gap-x-2 h-screen relative">
    <!-- Row 1-3: -->
    <!-- Empty space, spans 2 columns -->
    <div class="col-span-2 row-span-3 bg-transparent"></div>

    <!-- Container 1, spans 4 columns -->
    <div class="col-span-4 row-span-3 bg-pink-400"></div>

    <!-- Empty space, spans 2 columns -->
    <div class="col-span-2 row-span-3 bg-transparent"></div>

    <!-- Row 4-6: Container 2, spans 8 columns to maintain the full width -->
    <div class="col-span-8 row-span-2 bg-green-300"></div>

    <!-- Row 7-22: Container 3, spans 8 columns to maintain the full width -->
    <div class="col-span-8 row-span-18 bg-blue-200">
      <main>
        <RouterView v-slot="{ Component }">
          <component :is="Component" v-bind="$route.params" />
        </RouterView>
      </main>
    </div>

    <!-- Row 23-24: Container 4, spans 8 columns to maintain the full width -->
    <div class="col-span-8 row-span-1 bg-blue-700">
      <footer class="flex items-center justify-center w-full h-full bg-yellow-100">
        &copy;Dörrhandtagshopporna 2024
      </footer>
    </div>
  </div>
</template>

<style scoped>
/* Ensure the grid fills the height */
.grid {
  height: 100vh;
}
</style>
