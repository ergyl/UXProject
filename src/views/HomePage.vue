<!-- Page in the SPA -->

<template>
  <main class="col-span-8 row-span-18 bg-beigebrun overflow-scroll">
    <div class="col-span-8 text-center">
      <h2 class="mt-14 mb-8">
        Hemma hos Mullward
      </h2>
    </div>
    <div class="flex justify-center items col-span-8">
      <figure>
        <img
          :src="mullwardSmalImage" 
          alt="Mullward sitter hemma i soffan"
        >
      </figure>
    </div>
    </div>
  </main>
</template>

<script>
import mullwardSmalImage from '@/assets/images/illustrations/mullward_home-min.png'
import mullwardBigImage from '@/assets/images/illustrations/mullward_home-max.png'

export default {
  name: 'HomePage',
  data() {
    return {
      mullwardSmalImage,
      mullwardBigImage
    }
  }
};
</script>
