<!-- To display a category or difficulty to choose from -->

<template>
  <div
    class="category-card"
    @click="navigateToCategory"
  >
    <img
      :src="imageSource"
      :alt="category"
      class="category-image"
    >
    <h2 class="category-title">
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
  @apply flex flex-col items-center justify-start border border-black p-0 bg-white w-44 h-32;
  box-shadow: 5px 5px 4px rgba(0, 0, 0, 0.2);
}

.category-card:active,
.category-card:focus {
  @apply border-none;
  transform: translateY(5px);
  box-shadow: none;
}

.category-image {
  width: 100%;
  height: 75%;
  object-fit: contain;
}

.category-title {
  @apply text-center w-full;
}
</style>
