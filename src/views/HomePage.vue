<!-- Page in the SPA -->

<template>
  <div class="grid grid-cols-8 overflow-auto lg:px-32 lg:pb-12">
    <div class="col-span-8 text-center">
      <h2 class="mt-14 mb-8">
        Hemma hos Mullward
      </h2>
    </div>
    <div class="flex justify-center items col-span-8">
      <figure>
        <img
          :src="image"
          alt="Mullward sitter hemma i soffan"
        >
      </figure>
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