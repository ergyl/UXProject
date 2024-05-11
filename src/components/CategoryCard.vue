<template>
  <div
    class="category-card"
    @click="navigateToCategory"
    @mousedown="isPressed = true"
    @mouseup="isPressed = false"
    @mouseleave="isPressed = false"
    @touchstart="isPressed = true"
    @touchend="isPressed = false"
    @touchcancel="isPressed = false"
  >
    <img
      :src="imageSource"
      :alt="category"
      class="object-contain"
    >
    <h2 class="whitespace-nowrap">
      {{ category }}
    </h2>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const props = defineProps({
  imageSource: {
    type: String,
    default: '',
  },
  category: {
    type: String,
    default: '',
  },
  categoryPath: {
    type: String,
    default: '',
  },
});

const router = useRouter();

const navigateToCategory = () => {
  router.push(props.categoryPath)
}
</script>

<style scoped>
.category-card {
  @apply flex flex-col items-center justify-center border border-black p-6 bg-vit w-40 h-32;
  box-shadow:
    5px 5px 4px rgba(0, 0, 0, 0.2);
  /* X: 5, Y: 5, Blur: 4 */
}

.category-card:active,
.category-card:focus {
  @apply border-terracotta;
  transform: translateY(5px);
  box-shadow: none;
}
</style>