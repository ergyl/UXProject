<!--Uses item properties 'image' for image URL, 'itemName' and
'description' from the object passed to this component -->

<template>
  <div
    class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
    @click.self="closePopup"
  >
    <fwb-card
      class="max-w-lg"
      :img-src="item.image"
      img-alt="{{ item.itemName }}"
      variant="image"
      @click.stop
    >
      <div class="p-5">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {{ item.itemName }}
        </h5>
        <p class="font-normal text-gray-700 dark:text-gray-400 max-h-20 overflow-scroll">
          {{ item.description }} 
        </p>
        <button
          class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          @click="closePopup"
        >
          Stäng
        </button>
      </div>
    </fwb-card>
  </div>
</template>
  
<script setup>
import { FwbCard } from 'flowbite-vue'

defineProps({
  item: {
    type: Object,
    required: true  // Mark the prop as required
  }
});

const emit = defineEmits(['close']);

function closePopup() {
  emit('close');
}
</script>
  
  