<!--Uses item properties 'image' for image URL, 'itemName' and
'description' from the object passed to this component -->

<template>
  <div
    class="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center"
    @click.self="closePopup"
  >
    <div 
      class="min-w-64 max-w-72 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center text-center relative"
    >
      <img
        :src="item.image"
        :alt="item.itemName"
        class="w-full max-h-64 object-cover relative mt-12"
      >
      <div class="p-5 max-h-52 overflow-scroll">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {{ item.itemName }}
        </h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">
          {{ item.description }} 
        </p>

        <FwbButton
          class="absolute top-1 right-1 z-10"
          color="dark"
          pill
          square
          @click="closePopup"
        >
          <svg
            class="w-5 h-5"
            fill="currentColor"
            viewBox="3 3 17 17"
            xmlns="http://www.w3.org/2000/svg"
          >
            ><path
              fill="currentColor"
              d="m6.4 18.308l-.708-.708l5.6-5.6l-5.6-5.6l.708-.708l5.6 5.6l5.6-5.6l.708.708l-5.6 5.6l5.6 5.6l-.708.708l-5.6-5.6z"
            />
          </svg>
        </FwbButton>
      </div>
      <!-- Slot for custom content -->
      <slot />
    </div>
  </div>
</template>

<script>
import { FwbButton } from 'flowbite-vue'

export default {
  components: {
      FwbButton
    },

  props: {
    item: {
      type: Object,
      required: true
    }
  },

  emits: ['close'],

  methods: {
    closePopup() {
      this.$emit('close');
    }
  }
}
</script>
