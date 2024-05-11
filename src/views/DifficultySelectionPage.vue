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
        :image-source="images[0]"
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
import MullwardPictureLeft from "@/assets/images/illustrations/mullward_left.png"
import MullwardPictureRight from "@/assets/images/illustrations/mullward_right.png";


export default {
  name: 'DifficultySelectionPage',
  components: {
    CategoryCard,
  },

  data() {
    return {
      images: [MullwardPictureLeft, MullwardPictureRight]
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