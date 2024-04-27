<template>
  <div class="card flex flex-wrap items-center justify-center w-42 h-52">
    <div class="p-2">
      <img
        :src="imageSource"
        :alt="category"
        class="w-36 h-auto border border-black"
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