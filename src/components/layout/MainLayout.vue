<!--
    This component is the wrapper used for all our routes.
    Each route renders its content inside the layout.
-->

<template>
  <div class="grid grid-cols-8 grid-rows-24 min-h-screen max-h-screen relative">
    <!-- Top padding row -->
    <div
      class="col-span-8 row-span-3 bg-vit"
    >
      <div class="grid grid-cols-3 grid-rows-1 gap-0 border border-black justify-center items-center">
        <div class="border border-black">
          <BackpackButton />
        </div>
        <div class="border border-black">
          <HomeButton />
        </div>
        <div class="border border-black">
          <DigButton />
        </div>
      </div>
    </div>
 
    <!-- Main content grid -->
    <main class="col-span-8 row-span-18 bg-beigebrun">
      <!-- Creating a subgrid inside the main content area -->
      <div class="grid grid-cols-8 grid-rows-18 h-full">
        <RouterView v-slot="{ Component }">
          <component
            :is="Component"
            v-bind="$route.params"
          />
        </RouterView>
      </div>
    </main>

    <!-- Footer row -->
    <footer class="col-span-8 row-span-3 bg-vit flex justify-center items-center">
      <div class="grid grid-cols-3 grid-rows-1 gap-0 border border-black justify-center items-center">
        <div class="border border-black">
          <InfoButton />
        </div>
        <div class="border border-black">
          <StoryButton />
        </div>
        <div class="border border-black">
          <WriteButton />
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import BackpackButton from '@/components/ui/BackpackButton.vue'
import HomeButton from '@/components/ui/HomeButton.vue'
import DigButton from '@/components/ui/DigButton.vue'
import InfoButton from '@/components/ui/InfoButton.vue'
import StoryButton from '@/components/ui/StoryButton.vue'
import WriteButton from '@/components/ui/WriteButton.vue'
</script>

