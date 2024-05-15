<!-- A speech bubble that lets you add text on top of it -->


<template>
  <div
    :class="[bubbleClass, 'speech-bubble']"
    class="relative flex items-center justify-center text-center leading-none select-none"
  >
    <!-- Slot for custom text to be added, with constraints -->
    <div class="content-container">
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
    @apply inline-flex w-auto max-w-[80%] min-h-[50%] py-6 px-3;
  }
  .content-container {
    @apply max-w-[80%] select-none relative -top-2 p-1 flex flex-row justify-center items-center;
  }
  .bg-speech-left {
    background-image: url('@/assets/images/illustrations/speechbubble-left.png');
  }
  .bg-speech-down {
    background-image: url('@/assets/images/illustrations/speechbubble-down.png');
  }

  .bg-speech-left, .bg-speech-down {
    @apply bg-no-repeat bg-center bg-contain;
}
</style>
