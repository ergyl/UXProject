<!-- Page in the SPA -->

<template>
  <div class="flex h-full flex-col gap-8 justify-center items-center">
    <BasicButton
      :text="'För lärare'"
      :route="'/for-teachers'"
    />
    <BasicButton
      :text="'Om spelet'"
      :route="'/about-game'"
    />
  </div>
</template>
    
    <script setup>
    import BasicButton from '@/components/ui/BasicButton.vue';
    </script>