<!-- Page in the SPA -->

<!--This view will allow the user to choose the game
     difficulty after selecting a category -->

<template>
  <div
    class="grid grid-cols-8 overflow-scroll"
  >
    <div 
      class="flex col-start-2 col-end-8 flex-col content-between justify-center items-center gap-y-6 mt-16 mb-24"
    >
      <CategoryCard
        :image-source="images[0]"
        :category="'Snabb'"
        :category-path="'/game-play'"
        @click="chooseDifficulty(1)"
      />

      <CategoryCard
        :image-source="images[1]"
        :category="'Snabbare'"
        :category-path="'/game-play'"
        @click="chooseDifficulty(2)"
      />

      <CategoryCard
        :image-source="images[2]"
        :category="'Snabbast'"
        :category-path="'/game-play'"
        @click="chooseDifficulty(3)"
      />
    </div>
  </div>
</template>

<script>
import { useGameStore } from '@/stores/gameStore';
import CategoryCard from "@/components/CategoryCard.vue";
import EasyImage from "@/assets/images/illustrations/easy-difficulty.png";
import MediumImage from "@/assets/images/illustrations/medium-difficulty.png";
import HardImage from "@/assets/images/illustrations/hard-difficulty.png";


export default {
  name: 'DifficultySelectionPage',
  components: {
    CategoryCard,
  },

  data() {
    return {
      images: [EasyImage, MediumImage, HardImage]
    };
  },

  methods: {
    chooseDifficulty(difficulty) {
      const gameStore = useGameStore();
      gameStore.setDifficulty(difficulty);
    },
  }
};
</script>