<!-- Page in the SPA -->

<!-- The outer div in the template should be a grid container that places items in its grid layout
Check out https://www.tailwindgen.com/ to generate grid code :) 
Use Tailwind CSS by applying classes to html elements in class="..."-->

<template>
  <div class="grid grid-cols-8 grid-rows-2 overflow-scroll">
    <div class="col-span-8 text-center">
      <h2 class="mt-14 mb-2">
        Hemma hos Mullward
      </h2>
    </div>
    <div class="col-span-8 mt-6">
      <p class="text-center">
        [bild]
      </p>
    </div>
  </div>
</template>

<script>
import CategoryCard from "@/components/CategoryCard.vue";

export default {
  name: 'HomePage',
  components: {
    CategoryCard
  },
};
</script>

<style scoped>
.adjusted-width {
  width: calc(50% - 0.75rem); /* Adjust the 12px to whatever half your gap-x value is */
}
</style>
