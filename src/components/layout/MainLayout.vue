<!--
    This component is the wrapper used for all our routes.
    Each route renders its content inside the layout.
-->

<template>
  <div class="grid grid-cols-8 grid-rows-24 min-h-screen max-h-screen relative overflow-hidden">
    <!-- Top Nav -->
    <div class="col-span-8 row-span-4 bg-vit lg:row-span-3">
      <nav
        class="flex h-full items-center lg:justify-center lg:gap-10"
        aria-label="Huvudmeny"
      >
        <BackpackButton class="lg:w-24" />
        <HomeButton class="lg:w-24" />
        <DigButton class="lg:w-24" />
      </nav>
    </div>
 
    <!-- Main content grid -->
    <main
      :class="{'row-span-18': !displayFooter, 'row-span-15': displayFooter}"
      class="col-span-8 bg-beigebrun overflow-scroll"
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
      v-if="displayFooter"
      class="col-span-8 row-span-4 bg-vit lg:row-span-3"
    >
      <nav
        v-if="currentPath === '/story'"
        class="flex w-full h-full justify-between items-center lg:justify-center lg:gap-10"
        aria-label="Meny för story"
      >
        <ArrowButton
          class="lg:w-24"
          :left="true"
          :is-enabled="!storyStore.firstPage"
          @click="storyStore.showPrevious"
        />
        <StoryButton class="lg:w-24" />
        <ArrowButton
          class="lg:w-24"
          :left="false"
          @click="storyStore.showNext"
        />
      </nav>
      
      <nav
        v-else
        class="flex w-full h-full justify-between items-center lg:justify-center lg:gap-10"
        aria-label="Sidomeny"
      >
        <InfoButton class="lg:w-24" />
        <StoryButton class="lg:w-24" />
        <WriteButton class="lg:w-24" />
      </nav>
    </footer>
  </div>
</template>

<script setup>
import { useStoryStore } from '@/stores/storyStore';
import { computed, watch } from 'vue';
import { useRoute } from 'vue-router';
import BackpackButton from '@/components/ui/BackpackButton.vue';
import HomeButton from '@/components/ui/HomeButton.vue';
import DigButton from '@/components/ui/DigButton.vue';
import InfoButton from '@/components/ui/InfoButton.vue';
import StoryButton from '@/components/ui/StoryButton.vue';
import WriteButton from '@/components/ui/WriteButton.vue';
import ArrowButton from '@/components/ui/ArrowButton.vue';

const route = useRoute();
const storyStore = useStoryStore();

const currentPath = computed(() => route.path);

const displayFooter = computed(() => {
  const paths = ['/home', '/info', '/about-game', '/for-teachers', '/story', '/tips'];
  return paths.includes(route.path);
});

watch(() => route.path, (newPath, oldPath) => {
  if (oldPath === '/story' && newPath !== '/story') {
    storyStore.reset();
  }
});
</script>

