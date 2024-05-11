<!--
    This component is the wrapper used for all our routes.
    Each route renders its content inside the layout.
-->

<template>
  <div class="grid grid-cols-8 grid-rows-24 min-h-screen max-h-screen relative">
    <!-- Top Nav -->
    <div class="col-span-8 row-span-3 bg-vit">
      <nav
        class="grid grid-cols-3 h-full"
        aria-label="Huvudmeny"
      >
        <BackpackButton />
        <HomeButton />
        <DigButton />
      </nav>
    </div>
 
    <!-- Main content grid -->
    <main
      :class="{'row-span-21': !isHome, 'row-span-18': isHome}"
      class="col-span-8 bg-beigebrun"
    >
      <RouterView v-slot="{ Component }">
        <component
          :is="Component"
          v-bind="$route.params"
        />
      </RouterView>
    </main>

    <!-- Footer row -->
    <footer
      v-if="isHome"
      class="col-span-8 row-span-3 bg-vit flex justify-center items-center"
    >
      <nav
        class="grid grid-cols-3 w-full h-full"
        aria-label="Sidomeny"
      >
        <InfoButton />
        <StoryButton />
        <WriteButton />
      </nav>
    </footer>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useNavigationStore } from '@/stores/navigationStore';
import BackpackButton from '@/components/ui/BackpackButton.vue';
import HomeButton from '@/components/ui/HomeButton.vue';
import DigButton from '@/components/ui/DigButton.vue';
import InfoButton from '@/components/ui/InfoButton.vue';
import StoryButton from '@/components/ui/StoryButton.vue';
import WriteButton from '@/components/ui/WriteButton.vue';

const navStore= useNavigationStore();
const isHome = computed(() => navStore.isHome);
</script>

