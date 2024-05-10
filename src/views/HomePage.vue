<!-- Page in the SPA -->

<!-- The outer div in the template should be a grid container that places items in its grid layout
Check out https://www.tailwindgen.com/ to generate grid code :) 
Use Tailwind CSS by applying classes to html elements in class="..."-->

<template>
  <div class="col-start-1 col-end-9 row-start-4 row-end-24 overflow-auto text-center">
    <h2>Hemma hos Mullward</h2>
    <p class="mt-8">
      [bild]
    </p>
  </div>
</template>

<script>
import CategoryCard from "@/components/CategoryCard.vue";
import StoryImage from "@/assets/images/illustrations/mullward.png";
import BackpackImage from "@/assets/images/illustrations/start/start-backpack.png";
import BookImage from "@/assets/images/illustrations/start/start-write.png";
import GameImage from "@/assets/images/illustrations/start/start-dig.png";

export default {
  name: 'HomePage',
  components: {
    CategoryCard
  },

  data() {
    return {
      images: [StoryImage, BookImage, BackpackImage, GameImage]
    };
  }
};
</script>

<style scoped>
.adjusted-width {
  width: calc(50% - 0.75rem); /* Adjust the 12px to whatever half your gap-x value is */
}
</style>
