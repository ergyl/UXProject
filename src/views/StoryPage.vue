<!-- Page in the SPA -->

<template>
  <div class="flex flex-col items-center mx-8 mt-8">
    <!-- Image -->
    <img
      :src="images[currentIndex]"
      alt="Museum Building"
      class="max-w-full h-auto"
    >
  </div>
</template>

<script setup>
import { ref } from "vue";
import firstImage from "@/assets/images/illustrations/story/new/1_1.png";
import secondImage from "@/assets/images/illustrations/story/new/1_2.png";
import thirdImage from "@/assets/images/illustrations/story/new/1_3.png";
import fourthImage from "@/assets/images/illustrations/story/new/1_4.png";
import fifthImage from "@/assets/images/illustrations/story/new/1_5.png";
import sixthImage from "@/assets/images/illustrations/story/new/2_1.png";
import seventhImage from "@/assets/images/illustrations/story/new/2_2.png";
import eighthImage from "@/assets/images/illustrations/story/new/2_3.png";
import ninthImage from "@/assets/images/illustrations/story/new/2_4.png";
import tenthImage from "@/assets/images/illustrations/story/new/2_5.png";

const images = [firstImage, secondImage, thirdImage, fourthImage, fifthImage, sixthImage, seventhImage, eighthImage, ninthImage, tenthImage];

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
