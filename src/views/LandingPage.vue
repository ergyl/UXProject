<template>
  <div class="flex flex-col min-h-screen max-h-screen justify-center items-center px-16 pt-2 pb-4">
    <AppLogo class="h-16 w-auto pb-6" />
    <ProgressBar :progress="progress" :height="'5'" />
  </div>  
</template>

<script setup>
  import ProgressBar from '@/components/ProgressBar.vue';
  import { useRouter } from 'vue-router';
  import { ref } from 'vue';
  import AppLogo from '@/components/AppLogo.vue';

  const progress = ref('0');
  const height = '8';
  const router = useRouter();

  const simulateProgress = () => {
    let count = 0;
    const interval = setInterval(() => {
      count++;
      progress.value = String(count * 5);
      if (count === 20) {
        clearInterval(interval);
        setTimeout(() => {
          router.push('/story');
        }, 100);
      }
    }, 150);
  };

  simulateProgress();
</script>
