<!-- This is used to display a popup in endgame of the
  memory game if the player succeeds to flip all cards.
  Uses item properties 'image' for image URL, 'itemName' and
'description' from the object passed to this component -->

<template>
  <ItemDetailsPopup
    :item="item"
    @close="closePopup"
  >
    <BasicButton
      @click="handleClick()"
      class="px-10"
      text="Donera"
    /> 
  </ItemDetailsPopup>
</template>

<script>
import { useRouter } from 'vue-router';
import ItemDetailsPopup from '@/components/ui/ItemDetailsPopUp.vue';
import BasicButton from '@/components/ui/BasicButton.vue';
import { useBackpackStore } from '@/stores/backpackStore';

export default {
  components: {
    ItemDetailsPopup,
    BasicButton,
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  emits: ['close'],
  
  setup() {
    const router = useRouter();
    return { router };
  },
  
  data() {
    return {
      warningMessage: '',
      backpackStore: useBackpackStore()
    }
  },

  methods: {
      closePopup() {
        this.$emit('close');
      },

      goToBackpack() {
        this.router.push('/backpack');
      },

      handleClick()
      {
        this.backpackStore.removeItem();
        this.backpackStore.activateOwl();
        this.$emit('close');
      }
    }
  };
</script>

