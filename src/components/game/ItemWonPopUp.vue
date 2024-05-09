<!--Uses item properties 'image' for image URL, 'itemName' and
'description' from the object passed to this component -->

<template>
  <ItemDetailsPopup
    :item="item"
    @close="closePopup"
  >
    <FwbToast
      v-if="showWarning"
      divide
      type="warning"
    >
      {{ warningMessage }}
    </FwbToast>

    <FwbToast
      v-if="showSuccess"
      divide
      type="success"
    >
      Föremålet har sparats.
    </FwbToast>
    
    <button
      class="w-full px-4 py-2 bg-purple-500 text-white rounded-b-lg hover:bg-purple-700"
      @click="transferItemToBackpack"
    >
      Lägg i ryggsäck
    </button>
  </ItemDetailsPopup>
</template>
  
  <script>
  import { useGameStore } from '@/stores/gameStore';
  import { FwbToast } from 'flowbite-vue'
  import ItemDetailsPopup from '@/components/ui/ItemDetailsPopUp.vue'

  
  export default {
    components: {
      ItemDetailsPopup,
      FwbToast
    },
    props: {
      item: {
        type: Object,
        required: true
      }
    },
    emits: ['close'],

    data() {
        return {
            showSuccess: false,
            showWarning: false,
            warningMessage: ''
        }
    },

    methods: {
      closePopup() {
        this.$emit('close');
      },
      transferItemToBackpack() {
        const gameStore = useGameStore();
        const result = gameStore.sendItemToBackpack(this.item);
        this.handleResult(result);
      },

      handleResult(result) {
        switch (result) {
            case 'success':
            this.showSuccess = true;
            break;
            case 'full':
            this.showWarning = true;
            this.warningMessage = 'Ryggsäcken är full.';
            break;
            case 'already_exists':
            this.showWarning = true;
            this.warningMessage = 'Föremålet finns redan i din ryggsäck.'
            break;
            case 'not_in_game':
                this.showWarning = true;
                this.warningMessage = 'Föremålet finns inte i spelet.'
                break;
            default:
                this.showWarning = true;
                this.warningMessage = 'Ett fel har uppstått. '

        }
      }
    }
  }
  </script>

<style scoped>
.custom-toast {
    background-color: blue;
}
</style>