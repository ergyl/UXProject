<!--
    This component is the wrapper used for all our routes.
    Each route renders its content inside the layout.
-->

<script>
export default {
  name: "MainLayout",
};
</script>

<template>
  <div class="grid grid-cols-8 grid-rows-24 min-h-screen relative">
    <!-- Top padding rows -->
    <div class="col-span-2 row-span-3 bg-transparent" />
    <div class="col-span-4 row-span-3 bg-red-400" />
    <div class="col-span-2 row-span-3 bg-transparent" />
    <!-- Header / Top content row -->
    <div class="col-span-8 row-span-2 bg-gray-400" />

    <!-- Main content grid -->
    <div class="col-span-8 row-span-18 bg-blue-200">
      <!-- Creating a subgrid inside the main content area -->
      <div class="grid grid-cols-8 grid-rows-18 h-full">
        <RouterView v-slot="{ Component }">
          <component
            :is="Component"
            v-bind="$route.params"
          />
        </RouterView>
      </div>
    </div>

    <!-- Footer row -->
    <div class="col-span-8 row-span-1 bg-gray-400">
      <footer class="flex items-center justify-center w-full h-ful">
        &copy;Dörrhandtagshopporna 2024
      </footer>
    </div>
  </div>
</template>


