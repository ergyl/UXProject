<!-- Page in the SPA -->

<template>
  <div class="flex flex-col w-full h-fit justify-start items-center my-8 lg:mt-10">
    <span class="self-end relative -top-4 -left-8 select-none lg:self-center lg:static lg:top-0 lg:left-0 lg:pb-8">{{ storyStore.currentIndex + 1 }}/9</span>
    <div
      v-if="storyStore.currentIndex < storyStore.maximumIndex - 1"
      class="flex mx-8"
    >
      <!-- Image -->
      <Transition
        name="fade"
        mode="out-in"
      >
        <img
          :key="currentImageDisplayed"
          :src="currentImageDisplayed"
          alt="Museum Building"
          class="max-h-[480px] w-auto"
        >
      </Transition>
    </div>
    <div
      v-show="storyStore.lastPage"
      class="fixed z-20 inset-0 bg-beige flex justify-center items-center"
    >
      <div class="flex mx-8">
        <!-- Last image with bounce transition -->
        <Transition
          name="bounce"
          mode="out-in"
        >
          <img
            :key="storyStore.showLastTransition"
            :src="currentImageDisplayed"
            alt="Muséet"
            class="max-h-[480px] w-auto"
            @load="timerOnLastImage"
          >
        </Transition>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStoryStore } from '@/stores/storyStore';
import { computed } from 'vue';
import { useRouter } from 'vue-router';
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
const router = useRouter();

const images = [firstImage, secondImage, thirdImage, fourthImage, fifthImage, sixthImage, seventhImage, eighthImage, ninthImage, tenthImage];

const currentImageDisplayed = computed(() => images[storyStore.currentIndex]);

function timerOnLastImage() {
  if (storyStore.lastPage) {
    setTimeout(() => {
      router.push('/home');
    }, 3000);
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.9s ease;
}

.fade-enter-from,
.fade-leave-to {
  transform: rotate3d(1, 1, 1, 20deg);
  opacity: 0;
}

.bounce-enter-active {
  animation: bounce-in 5.0s;
  animation: wiggle 1.5s;
}
.bounce-leave-active {
  animation: bounce-in 1.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes wiggle {
   0% { transform: skewX(9deg); } 
   10% { transform: skewX(-8deg); } 
   20% { transform: skewX(7deg); } 
   30% { transform: skewX(-6deg); } 
   40% { transform: skewX(5deg); } 
   50% { transform: skewX(-4deg); } 
   60% { transform: skewX(3deg); } 
   70% { transform: skewX(-2deg); } 
   80% { transform: skewX(1deg); } 
   90% { transform: skewX(0deg); } 
   100% { transform: skewX(0deg); } 
} 

</style>
