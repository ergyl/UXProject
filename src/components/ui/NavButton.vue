<!-- Button component for MainLayout-->

<template>
  <button
    class="w-20 h-20"
    :class="buttonClasses"
    :style="buttonStyle"
    :disabled="!isEnabled"
    @click="navigateTo"
    @mouseover="handleMouseOver"
    @mouseout="handleMouseOut"
  />
</template>

<script setup>
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps({
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

const buttonStyle = computed(() => {
    console.log("Recalculating style");
    let backgroundImage = props.enabledImg; // Default state
    if (props.isActive) {
        backgroundImage = props.activeImg;
    } else if (isHovering.value) {
        backgroundImage = props.hoverImg;
    }
    return { backgroundImage: `url(${backgroundImage})` };
});

// Computed classes for styling
const buttonClasses = computed(() => ({
    'bg-cover bg-center bg-no-repeat': true,
    'opacity-50 cursor-not-allowed': !props.isEnabled,
    'hover:opacity-75': props.isEnabled
}));

// Handling hover states
const handleMouseOver = () => {
    if (props.isEnabled) {
        isHovering.value = true;
    }
};
const handleMouseOut = () => {
    isHovering.value = false;
};

// Emitting click events
const navigateTo = () => {
    if (props.isEnabled && props.navPath) {
        router.push(props.navPath);
    }
};
</script>