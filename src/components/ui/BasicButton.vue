<template>
  <button
    class="flex justify-center items-center select-none"
    :class="[
      'text-vit focus:ring-4',
      rounded ? 'rounded-lg' : 'rounded-none',
      rounded ? 'min-h-20' : 'min-h-14',
      'text-2xl focus:outline-none',
      buttonClasses,
      'px-5 py-2.5 inline-flex items-center',
    ]"
    :disabled="disabled"
    :style="{ boxShadow: boxShadow }"
    @click="handleClick"
    @mousedown="isPressed = true"
    @mouseup="isPressed = false"
    @mouseleave="isPressed = false"
    @touchstart="isPressed = true"
    @touchend="isPressed = false"
    @touchcancel="isPressed = false"
  >
    <span class="leading-none">{{ text }}</span>
  </button>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            required: true,
        },
        rounded: {
            type: Boolean,
            default: true,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        route: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            isPressed: false,
        };
    },
    computed: {
        boxShadow() {
            return this.rounded && !this.disabled && !this.isPressed ? '5px 5px 4px 0 rgba(0, 0, 0, 0.25)' : 'none';
        },
        buttonClasses() {
            if (this.disabled) {
                return 'bg-beigebrun cursor-not-allowed border';
            } else if (this.isPressed) {
                return 'bg-morkTerracotta';
            } else {
                return 'bg-terracotta hover:bg-ljusTerracotta';
            }
        }
    },
    methods: {
        handleClick(event) {
            event.preventDefault();
            if (this.route) {
                this.$router.push(this.route);
            }
        },
    },
};
</script>