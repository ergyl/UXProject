<template>
  <div class="flex flex-wrap gap-2 border border-black bg-semi-transparent p-2">
    <button
      v-for="item in items"
      :key="item.id"
      class="square border-2 border-black"
      @click="logItemId(item)"
    >
      <div class="content flex items-center justify-center">
        {{ item }}
      </div>
    </button>
  </div>
</template>

<script>
export default 
{
  name: 'NineCardsGrid',
  props: 
  {
    items: 
    {
      type: Array,
      default: function() 
      {
        return [];
      }
    }
  },
  methods: 
  {
    logItemId(id) 
    {
      console.log(id);
    }
  }
};
</script>

<style scoped>
.square 
{
  flex: 1 0 31%; /* slightly less than 1/3 to accommodate the gap */
  height: 0;
  padding-bottom: 31%; /* the same as width for maintaining aspect ratio */
  position: relative;
}
.content 
{
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

  