<template>
  <div class="flex flex-wrap gap-2 border border-black bg-semi-transparent p-2">
    <button
      v-for="(thumbnail, index) in thumbnails"
      :key="thumbnail.id"
      class="square border-2 border-black"
      @click="logIndex(index)"
    >
      <div 
        class="content flex items-center justify-center cover-image"
        :style="clickedIndex === index || gameStore.gameState === 'memorize' ? {} : { backgroundImage: `url(${images[index]})` }"
      >
        <img
          v-if="clickedIndex === index || gameStore.gameState === 'memorize'"
          :key="index"
          :src="thumbnail"
          alt="Föremål"
          class="h-full w-auto object-cover"
        >
        <div v-else class="h-full w-full object-cover"></div>
      </div>
    </button>
  </div>
</template>

<script>
import { useGameStore } from '@/stores/gameStore';
import image1 from '@/assets/images/illustrations/game/tile1.png';
import image2 from '@/assets/images/illustrations/game/tile2.png';
import image3 from '@/assets/images/illustrations/game/tile3.png';
import image4 from '@/assets/images/illustrations/game/tile4.png';
import image5 from '@/assets/images/illustrations/game/tile5.png';
import image6 from '@/assets/images/illustrations/game/tile6.png';
import image7 from '@/assets/images/illustrations/game/tile7.png';
import image8 from '@/assets/images/illustrations/game/tile8.png';
import image9 from '@/assets/images/illustrations/game/tile9.png';

const gameStore = useGameStore();

export default {
  name: 'NineCardsGrid',
  props: {
    thumbnails: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  data() {
    return {
      clickedIndex: null,
      images: [image1, image2, image3, image4, image5, image6, image7, image8, image9],
      gameStore: gameStore
    }
  },
  methods: {
    logIndex(index) {
      this.clickedIndex = index;
      console.log(index);

      console.log("Gamestore state: " + this.gameStore.gameState);
    }
  }
};
</script>
<style scoped>
.square {
  flex: 1 0 31%; /* slightly less than 1/3 to accommodate the gap */
  height: 0;
  padding-bottom: 31%; /* the same as width for maintaining aspect ratio */
  position: relative;
}
.content {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.cover-image {
  background-size: cover;
  background-position: center;
}
</style>