<!-- Page in the SPA -->

<!--This view will allow the user to choose the game
     difficulty after selecting a category -->

     <!-- Page in the SPA -->

<!--This view will allow the user to choose a category
  for the memory game -->

<template>
  <div class="col-start-1 col-end-9 row-start-2 row-end-28 overflow-auto">
    <div class="flex flex-col content-between justify-center items-center gap-y-6 mt-9 mb-24">
      <CategoryCard
        :width="'w-48'"
        :height="'h-54'"
        :image-source="images[0]"
        :category="'Nivå: 1'"
        :category-path="'/home'" 
        :button-color="'green'"
      />
     
      <CategoryCard
        :width="'w-48'"
        :height="'h-54'"
        :image-source="images[1]"
        :category="'Nivå: 2'"
        :category-path="'/home'"
        :button-color="'yellow'"
      />
     
      <CategoryCard
        :width="'w-48'"
        :height="'h-54'"
        :image-source="images[0]"
        :category="'Nivå: 3'"
        :category-path="'/home'"
        :button-color="'red'"
      />
   
      <!-- Bo back -->
    </div>
  </div>
</template>
     
     <script>
     import CategoryCard from "@/components/CategoryCard.vue";
     import MullwardPictureLeft from "@/assets/images/illustrations/mullward_left.png"
     import MullwardPictureRight from "@/assets/images/illustrations/mullward_right.png";

     
     export default {
       name: 'DifficultySelectionPage',
       components: {
         CategoryCard
       },
     
       data() {
         return {
           images: [ MullwardPictureLeft, MullwardPictureRight]
         };
       }
     };
     </script>