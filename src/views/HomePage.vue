<!-- Page in the SPA -->

<template>
  <div class="grid grid-cols-8 overflow-auto lg:px-32 lg:pb-2">
    <div class="col-span-8 text-center">
      <h2 class="mt-14 mb-16 lg:mt-10 lg:mb-8">
        Hemma hos Mullward
      </h2>
    </div>
    <div class="flex justify-center items-center col-span-8">
      <div class="lg:aspect-ratio-box">
        <figure>
          <img
            class="max-h-[60vh]"
            :src="image"
            alt="Mullward sitter hemma i soffan"
          >
        </figure>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, onUnmounted } from 'vue';
import mullwardSmallImage from '@/assets/images/illustrations/mullward_home-min.png';
import mullwardBigImage from '@/assets/images/illustrations/mullward_home-max.png';

const image = computed(() =>
  screenWidth.value > 768 ? mullwardBigImage : mullwardSmallImage
);

const screenWidth = ref(window.innerWidth);
const updateScreenWidth = () => {
  screenWidth.value = window.innerWidth;
};

onMounted(() => {
  window.addEventListener('resize', updateScreenWidth);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateScreenWidth);
});
</script>

<style scoped>
.aspect-ratio-box {
  position: relative;
  width: 100%;
  padding-top: 76.239%;
}
.aspect-ratio-box img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
}
</style>