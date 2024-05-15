<!-- Base component for navbutton for MainLayout 
This component is inserted into other buttons and not
used directly -->

<template>
  <button
    class="h-full w-full"
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
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps({
    left: {
        type: Boolean,
        default: false
    },
    navPath: {
        type: String,
        default: ''
    },
    activeImg: {
        type: String,
        required: true,
    },
    hoverImg: {
        type: String,
        required: true
    },
    enabledImg: {
        type: String,
        required: true
    },
    isActive: Boolean,
    isEnabled: Boolean
});

const router = useRouter();

const isHovering = ref(false);
const isMouseDown = ref(false);

const buttonStyle = computed(() => {
    let backgroundImage = props.enabledImg;
    if (props.isActive) {
        backgroundImage = props.activeImg;
    } else if (isHovering.value || isMouseDown.value) {
        backgroundImage = props.hoverImg;
    }
    return { backgroundImage: `url(${backgroundImage})` };
});

const buttonClasses = computed(() => ({
    'bg-contain bg-center bg-no-repeat': true,
    'opacity-50 cursor-not-allowed': !props.isEnabled,
    'hover:opacity-100': props.isEnabled && (isHovering.value || isMouseDown.value)
}));

const handleMouseOver = () => {
    if (props.isEnabled) {
        isHovering.value = true;
    }
};

const handleMouseOut = () => {
    isHovering.value = false;
};

const handleMouseDown = () => {
    if (props.isEnabled) {
        isMouseDown.value = true;
    }
};

const handleMouseUp = () => {
    isMouseDown.value = false;
    isHovering.value = false;
};

const navigateTo = () => {
    if (props.isEnabled && props.navPath) {
        router.push(props.navPath);
    }
};
</script>