<!-- Page in the SPA -->

<template>
  <div class="col-start-1 col-end-9 overflow-auto row-start-1 row-end-24">
    <div class="flex flex-col justify-start mt-10 ml-8 mr-8 border border-black bg-white">
      <p class="ml-4 mt-4">
        Info page
      </p>
    </div>
  
    <div class="ml-5">
      <fwb-button
        color="default"
        size="lg"
        class="m-4"
        @click="goBack"
      >
        <template #prefix>
          <span class="icon-[material-symbols-light--close] w-5 h-5 inline-block align-middle" />
        </template>
        Stäng
      </fwb-button>
    </div>
  </div>
</template>
    
    <script setup>
    import { useRouter } from 'vue-router';
    import { FwbButton } from 'flowbite-vue'
  
      const router = useRouter();
  
      const goBack = () => {
        router.back();
      }
    </script>