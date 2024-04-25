<!-- Page 2 in the SPA -->

<template>
  <div class="h-full grid grid-cols-[1fr,3fr,1fr] items-center justify-items-center">
    <div>
      <!-- Left arrow -->
      <span
        v-if="currentIndex > 0"
        class="icon-[material-symbols-light--navigate-before] text-4xl cursor-pointer"
        @click="goToPrevious"
      />
    </div>
    <div>
      <!-- Image -->
      <img
        :src="images[currentIndex]"
        alt="Museum Building"
        class="max-w-full h-auto"
      >
      <p class="text-center mt-4">
        {{ storyText[currentIndex] }}
      </p>
    </div>
    <div>
      <!-- Right arrow -->
      <span
        v-if="currentIndex < images.length - 1"
        class="icon-[material-symbols-light--navigate-next] text-4xl cursor-pointer"
        @click="goToNext"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
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