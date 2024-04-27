<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <button 
v-bind="$attrs"
  :class="['light', 'baseButton']"> {{ buttonText }}</button>
</template>

<script>
export default {
    props: {
        buttonText: {
            type: String,
            default: () => "Label",
        }
    },
  
};
</script>

<style scoped>
.baseButton {
    padding: 20px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
}
.light {
    background: white;
    color: black;
    border: 1px solid gray;
}

.dark {
    background: black;
    color: white;
}

</style>