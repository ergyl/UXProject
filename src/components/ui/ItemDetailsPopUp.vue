<!--Uses item properties 'image' for image URL, 'itemName' and
'description' from the object passed to this component -->

<template>
  <div
    class="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center"
    @click.self="closePopup"
  >
    <div 
      class="max-w-72 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center"
    >
      <img
        :src="item.image"
        :alt="item.itemName"
        class="rounded-t-lg w-full max-h-72 object-cover"
      >
      <div class="p-5">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {{ item.itemName }}
        </h5>
        <p class="font-normal text-gray-700 dark:text-gray-400 max-h-20 overflow-scroll">
          {{ item.description }} 
        </p>
        <div>
          <button
            class="mt-4 mr-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            @click="closePopup"
          >
            Stäng
          </button>
          <button
            class="mt-4 px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-700"
            @click="closePopup"
          >
            Lägg i ryggsäck
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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

<style scoped>
/* Add any scoped styles if needed */
</style>
