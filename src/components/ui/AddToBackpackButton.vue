<!-- Custom button component for adding item to backpack. -->

<template>
  <button
    class="flex justify-center items-center select-none"
    :class="[
      'text-vit focus:ring-4',
      'min-h-14 w-full rounded-b-lg',
      'text-2xl focus:outline-none',
      buttonClasses,
      'px-5 py-2.5 inline-flex items-center',
    ]"
    :disabled="isDisabled"
    @click="handleClick"
    @mousedown="isPressed = true"
    @mouseup="isPressed = false"
    @mouseleave="isPressed = false"
    @touchstart="isPressed = true"
    @touchend="isPressed = false"
    @touchcancel="isPressed = false"
  >
    <TransitionGroup name="fade">
      <span
        v-if="itemAlreadyExists"
        class="icon-[material-symbols-light--check-rounded] mr-1"
        style="width: 2rem; height: 2rem;"
      />
      <span
        key="text"
        class="leading-none"
      >{{ buttonTextUpdate }}</span>
    </TransitionGroup>
  </button>
</template>
  
  <script>
  import { useBackpackStore } from '@/stores/backpackStore';
  
  export default {
      props: {
          item: {
              type: Object,
              required: true
          }
      },
      data() {
          return {
              isPressed: false
          };
      },
      computed: {
          backpackStore() {
              return useBackpackStore();
          },
          itemAlreadyExists() {
              return this.backpackStore.itemExists(this.item.id);
          },
          isDisabled() {
              return this.itemAlreadyExists || this.backpackStore.isFull;
          },
          buttonClasses() {
              if (this.itemAlreadyExists) {
                  return 'bg-ljusgron';
              } else if (this.isPressed) {
                  return 'bg-morkTerracotta';
              } else if (this.isDisabled) {
                  return 'bg-beigebrun';
              }
              else {
                  return 'bg-terracotta hover:bg-ljusTerracotta';
              }
          },
          buttonTextUpdate() {
              return this.itemAlreadyExists ? 'I ryggsäcken' : 'Lägg i ryggsäcken';
          }
      },
      methods: {
          handleClick(event) {
              event.preventDefault();
              if (!this.isDisabled) {
                  this.backpackStore.addItem(this.item);
              }
          },
      }
  };
  </script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 1.5s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
