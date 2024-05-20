<!-- This is used to display a popup in endgame of the
  memory game if the player succeeds to flip all cards.
  Uses item properties 'image' for image URL, 'itemName' and
'description' from the object passed to this component -->

<template>
  <ItemDetailsPopup
    :item="item"
    @close="closePopup"
  >
    <!-- Conditionally display the warning or success toast -->
    <FwbToast
      v-if="backpackIsFull"
      divide
      type="warning"
      class="rounded-b-none"
    >
      <span class="text-base">Din ryggsäck är full.</span>
    </FwbToast>

    <!-- Button changes based on backpack status -->
    <AddToBackpackButton :item="item" />
  </ItemDetailsPopup>
</template>

<script>
import { useBackpackStore } from '@/stores/backpackStore';
import { useRouter } from 'vue-router';
import { FwbToast } from 'flowbite-vue';
import ItemDetailsPopup from '@/components/ui/ItemDetailsPopUp.vue';
import AddToBackpackButton from '@/components/ui/AddToBackpackButton.vue'

export default {
  components: {
    ItemDetailsPopup,
    AddToBackpackButton,
    FwbToast
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
      itemAlreadyExists: false
    }
  },
  
  computed: {
    backpackIsFull() {
      const backpackStore = useBackpackStore();
      return backpackStore.isFull;
    }
  },

  methods: {
    closePopup() {
      this.$emit('close');
    },

    goToBackpack() {
      this.router.push('/backpack');
    },
  }
  };
</script>

