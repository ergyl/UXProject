<!-- A generic popup -->

<template>
  <div
    class="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center"
  >
    <div 
      class="min-w-64 max-w-72 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center text-center relative py-8"
    >
      <h3 class="mb-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {{ text }}
      </h3>
      <!-- Slot for custom content -->
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: ''
    }
  },
}
</script>
