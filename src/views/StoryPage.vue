<!-- Page 2 in the SPA -->

<template>
  <div class="col-start-2 col-end-2 row-start-4 row-end-4 flex items-center justify-center">
    <!-- Left arrow -->
    <span
      v-if="currentIndex > 0"
      class="icon-[material-symbols-light--navigate-before] text-4xl cursor-pointer"
      @click="goToPrevious"
    />  
  </div>

  <div class="col-start-3 col-end-7 row-start-3 row-end-10 flex flex-col items-center">
    <!-- Image -->
    <img
      :src="images[currentIndex]"
      alt="Museum Building"
      class="max-w-full h-auto"
    >
    <p class="text-center mt-4">
      {{ storyText[currentIndex] }}
    </p>

    <RouterLink to="/home">
      <button
        v-if="currentIndex === images.length - 1"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4"
      >
        Spela
      </button>
    </RouterLink>
  </div>
  <div class="col-start-7 col-end-7 row-start-4 row-end-4 flex items-center justify-center">
    <!-- Right arrow -->
    <span
      v-if="currentIndex < images.length - 1"
      class="icon-[material-symbols-light--navigate-next] text-4xl cursor-pointer"
      @click="goToNext"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import firstImage from "@/assets/images/illustrations/story-musem-building.png";
import secondImage from "@/assets/images/illustrations/story-musem-visitors-border.png";
import thirdImage from "@/assets/images/illustrations/mullward_left.png";

const images = [firstImage, secondImage, thirdImage];
const storyText = [
  "Det var en gång ett fantastiskt museum...",
  "..fullt av fascinerande historiska föremål och nyfikna besökare.",
  "Nu är det din tur att utforska. Mullward behöver din hjälp!",
];
const currentIndex = ref(0);

const goToPrevious = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  }
};

const goToNext = () => {
  if (currentIndex.value < images.length - 1) {
    currentIndex.value++;
  }
};
</script>
