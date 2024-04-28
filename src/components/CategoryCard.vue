<template>
  <div :class="['card', props.width, props.height]">
    <div class="w-full p-2">
      <img
        :src="imageSource"
        :alt="category"
        class="w-full h-auto object-cover border border-black"
      >
    </div>
    
    <fwb-button
      :color="buttonColor"
      size="xl"
      class="mb-2 ml-4 mr-4 whitespace-nowrap"
      @click="navigateToCategory"
    >
      {{ category }}
    </fwb-button>
  </div>
</template>

<script setup>
import { FwbButton } from 'flowbite-vue'
import { defineProps } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps({
  width: {
    type: String,
    default: 'w-40',
  },
  height: {
    type: String,
    default: 'h-30',
  },
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
    buttonColor: { 
        type: String,
        default: 'default',
        validator: (value) => {
            const validColors = ['default', 'alternative', 'dark', 'light', 'green', 'red', 'yellow', 'purple', 'pink'];
            return validColors.includes(value);
    },
}
});

const router = useRouter();

const navigateToCategory= () => {
    router.push(props.categoryPath)
}
</script>

<style>
  .card {
    @apply flex flex-col items-center justify-center;
    background-color: #f1f1f1;
    border-radius: 8px;
    border: 0.7px solid #eee;
    box-shadow:
      0 4px 10px -1px rgba(0, 0, 0, 0.1),
      0 2px 6px -2px rgba(0, 0, 0, 0.2);
  }
</style>