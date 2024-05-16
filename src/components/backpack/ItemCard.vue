<!-- Image card to be put in BackpackCardsGrid -->

<template>
  <div
    class="overlay flex items-center justify-center h-full w-full object-cover bg-cover bg-center"
    :class="{ active: isActive, 'cursor-pointer': isClickable }"
    :style="{ backgroundImage: `url(${frontImage})` }"
    @click="toggle"
  />
</template>

<script>
export default {
  name: 'ItemCard',
  props: {
    item: {
      type: Object,
      required: false,
      default: null
    },
    frontImage: {
      type: String,
      required: true
    },
    slotImage: {
      type: String,
      required: true
    }
  },
  emits: ['select-item'],
  data() {
    return {
      isActive: false
    };
  },
  computed: {
    isClickable() {
      return this.frontImage !== this.slotImage && this.item;
    }
  },
  methods: {
    toggle() {
      if (this.isClickable) {
        this.isActive = !this.isActive;
        this.$emit('select-item', this.item);
      }
    }
  }
};
</script>

<style scoped>
.overlay {
  position: relative;
}

.overlay::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(119, 158, 75, 0.7);
  pointer-events: none;
  display: none;
}

.overlay.active::after {
  display: block;
}
</style>
