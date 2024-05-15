<!--
    This component is the wrapper used for all our routes.
    Each route renders its content inside the layout.
-->

<template>
  <div class="grid grid-cols-8 grid-rows-24 min-h-screen max-h-screen relative overflow-hidden">
    <!-- Top Nav -->
    <div class="col-span-8 row-span-4 bg-vit">
      <nav
        class="flex h-full items-center"
        aria-label="Huvudmeny"
      >
        <BackpackButton />
        <HomeButton />
        <DigButton />
      </nav>
    </div>
 
    <!-- Main content grid -->
    <main
      :class="{'row-span-20': !displayFooter, 'row-span-16': displayFooter}"
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
      class="col-span-8 row-span-4 bg-vit"
    >
      <nav
        v-if="currentPath === '/story'"
        class="flex w-full h-full justify-between items-center"
        aria-label="Meny för story"
      >
        <ArrowButton
          :left="true"
          :is-enabled="!storyStore.firstPage"
          @click="storyStore.showPrevious"
        />
        <StoryButton />
        <ArrowButton
          :left="false"
          @click="storyStore.showNext"
        />
      </nav>
      
      <nav
        v-else
        class="flex w-full h-full justify-between items-center"
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

