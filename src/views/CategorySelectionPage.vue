<!-- Page in the SPA -->

<!--This view will allow the user to choose a category
  for the memory game -->

<template>
  <div
    class="grid grid-cols-8 overflow-scroll"
  >
    <div 
      class="flex col-start-2 col-end-8 flex-col content-between justify-center items-center gap-y-6 mt-16 mb-24"
    >
      <CategoryCard
        :image-source="images[1]"
        :category="'Världen runt'"
        :category-path="'/choose-difficulty'"
        @click="chooseCategory('world')"
      />

      <CategoryCard
        :image-source="images[0]"
        :category="'Leksaker'"
        :category-path="'/choose-difficulty'"
        @click="chooseCategory('toys')"
      />

      <CategoryCard
        :image-source="images[2]"
        :category="'Inramat'"
        :category-path="'/choose-difficulty'"
        @click="chooseCategory('artwork')"
      />
    </div>
    <!-- Bo back -->
  </div>
</template>

<script>
import { useGameStore } from '@/stores/gameStore';
import CategoryCard from "@/components/CategoryCard.vue";
import Inramat from "@/assets/images/illustrations/categories/Inramat.png";
import Leksaker from "@/assets/images/illustrations/categories/Leksaker.png";
import Runtom from "@/assets/images/illustrations/categories/Runtom.png";

const gameStore = useGameStore();

export default {
  name: 'CategorySelectionPage',
  components: {
    CategoryCard,
  },

  data() {
    return {
      images: [Leksaker, Runtom, Inramat]
    };
  },
  methods: {
    goBack() {
      this.$router.back();
    },
    chooseCategory(category) {
      console.log("Setting category from", this.category, "to", category);
      gameStore.setCategory(category);
    },
  }
};
</script>