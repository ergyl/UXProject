<!-- Page 3 in the SPA -->

<!-- The outer div in the template should be a grid container that places items in its grid layout
Check out https://www.tailwindgen.com/ to generate grid code :) 
Use Tailwind CSS by applying classes to html elements in class="..."-->

<template>
  <div id="app" class="grid grid-cols-2 gap-4">
    <div class="col-start-10 col-end-16 row-start-5 row-end-2 ">
      <app-button @click="handleSeries" buttonText="Läs Serien  "/>
    </div>
    <div class="col-start-5 col-end-7 row-start-5 row-end-7">
      <app-button @click="handleTips" buttonText="Skrivtips"/>
    </div>
    <div class="col-start-10 col-end-16 row-start-5 row-end-7">
      <app-button @click="handleBackpack" buttonText="Ryggsäck"/>
    </div>
    <div class="col-start-5 col-end-6 row-start-5 row-end-2">
      <app-button @click="handleGame" buttonText="Gräv"/>
    </div>
  </div> 
</template>

<script>
import AppButton from '../components/Button.vue';

//import backpack from "@/assets/images/illustrations/backpack.png";
//import book from "@/assets/images/illustrations/book.png";
//import game from "@/assets/images/illustrations/mullward.png";
//import story from "@/assets/images/illustrations/story-museum-building-text.png";

// const images = [story, book, backpack, game];

export default {
  name: 'HomePage',
  components: {
    AppButton
  },

  // Här implementerar vi metoder för att hantera knapptryckningar
  methods: {
    handleSeries() {
      this.$router.push('/introduction');
    },
    handleTips() {
      console.log('Skrivtips');
    },
    handleBackpack() {
      this.$router.push('/backpack');
    },
    handleGame() {
      console.log('Gräv');
    }
  }

};


</script>

<style>
#app {
  display: grid;
  grid-gap: 1rem;
}
</style>

