<!-- Page in the SPA -->

<!--This view will allow the user to choose a category
  for the memory game -->

<!-- The outer div in the template should be a grid container that places items in its grid layout
Check out https://www.tailwindgen.com/ to generate grid code :) 
Use Tailwind CSS by applying classes to html elements in class="..."-->

<template>
  <div class="col-start-2 col-end-8 row-start-2 row-end-28 overflow-auto">
    <div class="flex flex-wrap content-between justify-center gap-y-3 gap-x-3 m-1">
      <CategoryCard
        :image-source="images[0]"
        :category="'Leksaker och spel'"
        :category-path="'/home'" 
        :button-color="'default'"
      />
  
      <CategoryCard
        :image-source="images[1]"
        :category="'Världen runt'"
        :category-path="'/home'"
        :button-color="'default'"
      />
  
      <CategoryCard
        :image-source="images[2]"
        :category="'Inramat'"
        :category-path="'/home'"
        :button-color="'default'"
      />

      <!--
            <CategoryCard
            :image-source="images[3]"
            :category="'Tillbaka'"
            :category-path="'/home'"
            :button-color="'default'"
              />
        -->
    </div>
  </div>
</template>
  
  <script>
  import CategoryCard from "@/components/CateGoryOptions.vue";
  import Inramat from "@/assets/images/illustrations/categories/Inramat.png";
  import Leksaker from "@/assets/images/illustrations/categories/Leksaker.png";
  import Runtom from "@/assets/images/illustrations/categories/Runtom.png";
  import Logo from "@/assets/images/logo/mullward-logo.png";
  
  export default {
    name: 'HomePage',
    components: {
      CategoryCard
    },
  
    data() {
      return {
        images: [ Leksaker, Runtom, Inramat, Logo]
      };
    }
  };
  </script>
  