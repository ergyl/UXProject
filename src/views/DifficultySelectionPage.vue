<!-- Page in the SPA -->

<!--This view will allow the user to choose the game
     difficulty after selecting a category -->

     <!-- Page in the SPA -->

<!--This view will allow the user to choose a category
  for the memory game -->

<template>
  <div class="relative left-8 top-8">
    <fwb-button
      color="default"
      pill
      square
      size="l"
    >
      <span
        class="icon-[material-symbols-light--navigate-before] text-4xl cursor-pointer"
        @click="goBack"
      />
    </fwb-button>
  </div>
  <div class="col-start-1 col-end-9 row-start-2 row-end-28 overflow-auto">
    <div class="flex flex-col content-between justify-center items-center gap-y-6 mt-1 mb-24">
      <CategoryCard
        :width="'w-48'"
        :height="'h-54'"
        :image-source="images[0]"
        :category="'Nivå: 1'"
        :category-path="'/game-play'" 
        :button-color="'green'"
        @click="chooseDifficulty(1)"
      />
     
      <CategoryCard
        :width="'w-48'"
        :height="'h-54'"
        :image-source="images[1]"
        :category="'Nivå: 2'"
        :category-path="'/game-play'"
        :button-color="'yellow'"
        @click="chooseDifficulty(2)"
      />
     
      <CategoryCard
        :width="'w-48'"
        :height="'h-54'"
        :image-source="images[0]"
        :category="'Nivå: 3'"
        :category-path="'/game-play'"
        :button-color="'red'"
        @click="chooseDifficulty(3)"
      />
   
      <!-- Bo back -->
    </div>
  </div>
</template>
     
     <script>
       import { useGameStore } from '@/stores/gameStore';
     import { FwbButton } from 'flowbite-vue';
     import CategoryCard from "@/components/CategoryCard.vue";
     import MullwardPictureLeft from "@/assets/images/illustrations/mullward_left.png"
     import MullwardPictureRight from "@/assets/images/illustrations/mullward_right.png";

     
     export default {
       name: 'DifficultySelectionPage',
       components: {
         CategoryCard,
         FwbButton
       },
     
       data() {
         return {
           images: [ MullwardPictureLeft, MullwardPictureRight]
         };
       },
       
       methods: {
        goBack() {
          this.$router.back();
        },
        chooseDifficulty(difficulty) {
          const gameStore = useGameStore();
          gameStore.setDifficulty(difficulty);
        },
      }
     };
     </script>