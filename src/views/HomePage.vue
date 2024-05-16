<!-- Page in the SPA -->

<!-- The outer div in the template should be a grid container that places items in its grid layout
Check out https://www.tailwindgen.com/ to generate grid code :) 
Use Tailwind CSS by applying classes to html elements in class="..."-->

<template>
  <div class="grid grid-cols-8 overflow-scroll">
    <div class="col-span-8 text-center">
      <h2 class="mt-14 mb-8">
        Hemma hos Mullward
      </h2>
    </div>
    <div class="flex justify-center items col-span-8">
      <figure>
        <img
          :src="mullwardSmallImage" 
          alt="Mullward sitter hemma i soffan"
        >
      </figure>
    </div>
  </div>
</template>

<script>
import mullwardSmallImage from '@/assets/images/illustrations/mullward_home-min.png'
import mullwardBigImage from '@/assets/images/illustrations/mullward_home-max.png'

export default {
  name: 'HomePage',
  data() {
    return {
      mullwardSmallImage,
      mullwardBigImage
    }
  }
};
</script>
