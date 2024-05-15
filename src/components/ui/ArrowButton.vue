<!-- Button component for MainLayout-->

<template>
  <button
    class="w-full h-full"
    :class="buttonClasses"
    :style="buttonStyle"
    :disabled="!isEnabled"
    @click="navigateTo"
    @mouseover="handleMouseOver"
    @mouseout="handleMouseOut"
    @mousedown="handleMouseDown"
    @mouseup="handleMouseUp"
    @touchstart="handleMouseOver"
    @touchend="handleMouseUp"
    @touchdown="handleMouseDown"
  />
</template>
  
  <script setup>
  import ImageLeftActive from '@/assets/images/navmenu/Icon_arrow-left-active.png';
  import ImageLeftHover from '@/assets/images/navmenu/Icon_arrow-left-hover.png';
  import ImageLeftClicked from '@/assets/images/navmenu/Icon_arrow-left-clicked.png';
  import ImageRightClicked from '@/assets/images/navmenu/Icon_arrow-right-clicked.png';
  import ImageRightHover from '@/assets/images/navmenu/Icon_arrow-right-hover.png';
  import ImageRightActive from '@/assets/images/navmenu/Icon_arrow-right-active.png';

  import { computed, ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  const props = defineProps({
    left: {
        type: Boolean,
        default: false,
    },
      navPath: {
          type: String,
          default: ''
      },
      isActive:  {
        type: Boolean,
        default: false
      },
      isEnabled: {
        type: Boolean,
        default: true
      }
  });
  
  const router = useRouter();
  
  const isHovering = ref(false);
  const isMouseDown = ref(false);
  
  const buttonStyle = computed(() => {
      let bgImage;
      if (props.isActive) {
          bgImage = props.left ? ImageLeftActive : ImageRightActive;
      } else if (isMouseDown.value) {
          bgImage = props.left ? ImageLeftClicked : ImageRightClicked;
      } else if (isHovering.value) {
        bgImage = props.left ? ImageLeftHover : ImageRightHover; 
      } else {
        bgImage = props.left ? ImageLeftActive : ImageRightActive;
      }
      return { backgroundImage: `url(${bgImage})` };
  });
  
  const buttonClasses = computed(() => ({
      'bg-contain bg-center bg-no-repeat': true,
      'opacity-30 cursor-not-allowed': !props.isEnabled,
  }));
  
// Event handlers
const handleMouseOver = () => isHovering.value = true;
const handleMouseOut = () => {
    isHovering.value = false;
    isMouseDown.value = false;
};
const handleMouseDown = () => {
    if (props.isEnabled) {
        isMouseDown.value = true;
    }
};
const handleMouseUp = () => {
    isMouseDown.value = false;
};

// Navigate to a specific path
const navigateTo = () => {
    if (props.isEnabled && props.navPath) {
        router.push(props.navPath);
    }
};
  </script>