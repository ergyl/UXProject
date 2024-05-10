<!-- A speech bubble that lets you add text on top of it -->


<template>
  <div
    :class="[bubbleClass, 'speech-bubble']"
    class="relative flex items-center justify-center text-center"
  >
    <!-- Slot for custom text to be added, with constraints -->
    <div class="content-container p-2">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { defineProps } from 'vue';

const props = defineProps({
  left: {
    type: Boolean,
    required: true
  }
});

const bubbleClass = computed(() => {
  return props.left ? 'bg-speech-left' : 'bg-speech-down';
});
</script>

<style scoped>

  .speech-bubble {
    @apply inline-flex w-auto max-w-[300px] min-h-[100px];
  }
  .content-container {
    @apply max-w-48 text-center p-8;
  }
  .bg-speech-left {
    @apply bg-no-repeat bg-center bg-contain;
    background-image: url('@/assets/images/illustrations/speechbubble-left.png');
  }
  .bg-speech-down {
    @apply bg-no-repeat bg-center bg-contain;
    background-image: url('@/assets/images/illustrations/speechbubble-down.png');
  }
</style>
