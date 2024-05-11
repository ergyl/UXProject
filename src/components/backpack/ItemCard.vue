<!-- Image card to be put in BackpackCardsGrid -->

<template>
  <div
    class="overlay flex items-center justify-center h-full w-full object-cover bg-cover bg-center cursor-pointer"
    :class="{ active: isActive }"
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
    }
  },
  emits: ['select-item'],
  data() {
    return {
      isActive: false
    };
  },
  methods: {
    toggle() {
      if (this.item) {
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
  /* Green color #779E4B with 50% opacity */
  pointer-events: none;
  display: none;
}

.overlay.active::after {
  display: block;
}
</style>
