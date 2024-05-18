<!-- A speech bubble that lets you add text on top of it -->

<template>
  <div
    :class="[bubbleClass, 'speech-bubble']"
    class="relative"
  >
    <img
      :src="bubbleImage"
      alt=""
      class="w-full h-auto"
    >
    <div class="content-container absolute inset-0 flex items-center justify-center my-1 mx-3">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { defineProps } from 'vue';
import speechBubbleLeft from '@/assets/images/illustrations/speechbubble-left.png';
import speechBubbleDown from '@/assets/images/illustrations/speechbubble-down.png';

const props = defineProps({
  left: {
    type: Boolean,
    required: true
  },
  reverse: {
    type: Boolean,
    default: false
  }
});

const bubbleImage = computed(() => {
  return props.left ? speechBubbleLeft : speechBubbleDown;
});

const bubbleClass = computed(() => {
  return props.reverse ? 'rotate-180' : '';
});
</script>

<style scoped>
.speech-bubble {
  @apply w-auto max-w-[60%] h-auto;
  position: relative;
  overflow: hidden;
}

.content-container {
  @apply flex flex-wrap select-none text-center;
  max-width: 100%;
  max-height: 80%; 
  z-index: 10;
}

.rotate-180 img {
  transform: rotate(180deg);
}
</style>

