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

const buttonStyle = computed(() => {
    let backgroundImage = props.enabledImg;
    if (props.isActive) {
        backgroundImage = props.activeImg;
    } else if (isHovering.value) {
        backgroundImage = props.hoverImg;
    }
    return { backgroundImage: `url(${backgroundImage})` };
});

const buttonClasses = computed(() => ({
    'bg-contain bg-center bg-no-repeat': true,
    'opacity-50 cursor-not-allowed': !props.isEnabled,
    'hover:opacity-75': props.isEnabled
}));

const handleMouseOver = () => {
    if (props.isEnabled) {
        isHovering.value = true;
    }
};
const handleMouseOut = () => {
    isHovering.value = false;
};

const navigateTo = () => {
    if (props.isEnabled && props.navPath) {
        router.push(props.navPath);
    }
};
</script>