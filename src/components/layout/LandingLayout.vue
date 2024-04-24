
<template>
  <div class="h-full grid grid-cols-6 grid-rows-[repeat(10,minmax(0,1fr))] gap-4">
    <div class="col-span-4 row-span-4 col-start-2 row-start-2">
      <slot></slot>
    </div>
  </div>
</template>
  

<script>
export default {
  name: 'LandingLayout'
}
</script>

    