<template>
  <div class="h-full grid grid-cols-[1fr,3fr,1fr] items-center justify-items-center">
    <div>
      <!-- Left arrow slot -->
      <slot name="left-arrow"></slot>
    </div>
    <div>
      <!-- Main content slot for the image -->
      <slot></slot>
    </div>
    <div>
      <!-- Right arrow slot -->
      <slot name="right-arrow"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IntroductionLayout'
}
</script>
