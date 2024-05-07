<!-- Page in the SPA -->

<template>
  <div class="col-start-2 col-end-2 row-start-4 row-end-4 flex items-center justify-center">
    <!-- Left arrow button -->
    <fwb-button
      v-if="currentIndex > 0"
      color="default"
      pill
      square
      size="md"
    >
      <span
        class="icon-[material-symbols-light--navigate-before] text-4xl cursor-pointer"
        @click="goToPrevious"
      />
    </fwb-button>
  </div>

  <div class="col-start-3 col-end-7 row-start-3 row-end-10 flex flex-col items-center">
    <!-- Image -->
    <img
      :src="images[currentIndex]"
      alt="Museum Building"
      class="max-w-full h-auto"
    >
    <p class="text-center mt-4 pb-5">
      {{ storyText[currentIndex] }}
    </p>

    <RouterLink to="/home">
      <fwb-button
        v-if="currentIndex === images.length - 1"
        color="default"
        size="lg"
      >
        Gå tillbaka
      </fwb-button>
    </RouterLink>
  </div>
  <div class="col-start-7 col-end-7 row-start-4 row-end-4 flex items-center justify-center">
    <!-- Right arrow button -->
    <fwb-button
      v-if="currentIndex < images.length - 1"

      color="default"
      pill
      square
      size="md"
    >
      <span
        class="icon-[material-symbols-light--navigate-next] text-4xl cursor-pointer"
        @click="goToNext"
      />
    </fwb-button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import firstImage from "@/assets/images/illustrations/story/musem-sq-b.png";
import secondImage from "@/assets/images/illustrations/story/visitors-sq.png";
import thirdImage from "@/assets/images/illustrations/story/mullward-newspaper.png";
import { FwbButton } from 'flowbite-vue';

const images = [firstImage, secondImage, thirdImage];
const storyText = [
  "En dag, när Mullward bläddrade igenom morgontidingen, upptäckte han den chockerande nyheten.",
  
  "hejsan bacon"
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
