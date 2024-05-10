<!-- Page in the SPA -->

<!--This view will allow the user to choose a category
  for the memory game -->

<template>
  <div class="col-start-1 col-end-9 row-start-2 row-end-28 overflow-auto">
    <div class="flex flex-col content-between justify-center items-center gap-y-6 mt-1 mb-24">
      <CategoryCard
        :width="'w-48'"
        :height="'h-54'"
        :image-source="images[0]"
        :category="'Leksaker och spel'"
        :category-path="'/choose-difficulty'"
        :button-color="'default'"
        :button-size="'md'"
        @click="chooseCategory('toys')"
      />

      <CategoryCard
        :width="'w-48'"
        :height="'h-54'"
        :image-source="images[1]"
        :category="'Världen runt'"
        :category-path="'/choose-difficulty'"
        :button-color="'default'"
        :button-size="'md'"
        @click="chooseCategory('world')"
      />

      <CategoryCard
        :width="'w-48'"
        :height="'h-54'"
        :image-source="images[2]"
        :category="'Inramat'"
        :category-path="'/choose-difficulty'"
        :button-color="'default'"
        :button-size="'md'"
        @click="chooseCategory('artwork')"
      />

      <!-- Bo back -->
    </div>
  </div>
</template>

<script>
import { useNavigationStore } from '@/stores/navigationStore';
import { useGameStore } from '@/stores/gameStore';
import { computed } from 'vue';
import CategoryCard from "@/components/CategoryCard.vue";
import Inramat from "@/assets/images/illustrations/categories/Inramat.png";
import Leksaker from "@/assets/images/illustrations/categories/Leksaker.png";
import Runtom from "@/assets/images/illustrations/categories/Runtom.png";

const gameStore = useGameStore();

const navStore = useNavigationStore();
const isHome = computed(() => navStore.isHome);


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