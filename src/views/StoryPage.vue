<!-- Page in the SPA -->

<template>
  <div class="flex flex-col w-full h-fit justify-start items-center my-8">
    <div class="flex mx-8">
      <!-- Image -->
      <img
        :src="currentImageDisplayed"
        alt="Museum Building"
        class="max-h-[480px] w-auto"
      >
    </div>
  </div>
</template>

<script setup>
import { useStoryStore } from '@/stores/storyStore';
import { computed } from 'vue';
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

const storyStore = useStoryStore();
const images = [firstImage, secondImage, thirdImage, fourthImage, fifthImage, sixthImage, seventhImage, eighthImage, ninthImage, tenthImage];
const currentImageDisplayed = computed(() => images[storyStore.currentIndex]);
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
