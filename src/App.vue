<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="grid-container grid grid-cols-4 grid-rows-24 gap-x-2 h-screen relative">
    <!-- Row 1-3: -->
    <!-- Empty column -->
    <div class="col-span-1 row-span-3 bg-transparent"></div>
    <!--Container 1 -->
    <div class="col-span-2 row-span-3 bg-pink-200 aspect-w-2 aspect-h-1"></div>
    <!-- Empty column -->
    <div class="col-span-1 row-span-3 bg-transparent"></div>

    <!-- Row 4-6: Container 2 -->
    <div class="col-span-4 row-span-2 bg-green-300 aspect-w-4 aspect-h-1"></div>

    <!-- Row 7-21: Container 3 -->
    <div class="col-span-4 row-span-17 bg-gray-300 aspect-w-4 aspect-h-5">
      <main class="grid h-full">
        <RouterView></RouterView>
      </main>
    </div>

    <!-- Row 22-24: Container 4 -->
    <div class="col-span-4 row-span-2 bg-blue-700 aspect-w-4 aspect-h-10">
      <footer class="flex items-center justify-center w-full h-full bg-yellow-100">
        &copy;Dörrhandtagshopporna 2024
      </footer>
    </div>
  </div>
</template>


<style scoped>
.grid-container::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin-right: auto;
  margin-left: auto;
  width: calc(100% - (2 * var(--offset)));
  max-width: var(--max_width);
  min-height: 100vh;
  background-image: repeating-linear-gradient(
      to right,
      var(--color),
      var(--color) var(--line-thickness),
      transparent var(--line-thickness),
      transparent calc(var(--column-width) - var(--line-thickness)),
      var(--color) calc(var(--column-width) - var(--line-thickness)),
      var(--color) var(--column-width),
      transparent var(--column-width),
      transparent var(--repeating-width)
    ),
    repeating-linear-gradient(
      to bottom,
      var(--color),
      var(--color) 1px,
      transparent 1px,
      transparent var(--baseline)
    );
  background-size: calc(100% + var(--gutter)) 100%;
  background-position: 0 var(--baseline-shift);
  z-index: 1;
  pointer-events: none;
}
</style>
