<!--Uses item properties 'image' for image URL, 'itemName' and
'description' from the object passed to this component -->

<template>
  <ItemDetailsPopup
    :item="item"
    @close="closePopup"
  >
    <!-- Conditionally display the warning or success toast -->
    <FwbToast
      v-if="backpackIsFull || showWarning"
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

    <!-- Buttons change based on backpack status -->
    <button
      v-if="backpackIsFull"
      class="w-full px-4 py-2 bg-yellow-500 text-white rounded-b-lg hover:bg-yellow-700"
      @click="goToBackpack"
    >
      Öppna ryggsäck
    </button>
    <button
      v-else
      class="w-full px-4 py-2 bg-purple-500 text-white rounded-b-lg hover:bg-purple-700"
      @click="transferItemToBackpack"
    >
      Lägg i ryggsäck
    </button>
  </ItemDetailsPopup>
</template>

<script>
import { useGameStore } from '@/stores/gameStore';
import { useBackpackStore } from '@/stores/backpackStore';
import { useRouter } from 'vue-router';
import { FwbToast } from 'flowbite-vue';
import ItemDetailsPopup from '@/components/ui/ItemDetailsPopUp.vue';

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
  
  setup() {
    const router = useRouter();
    return { router };
  },
  
  data() {
    return {
      showSuccess: false,
      showWarning: false,
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

  mounted() {
    const backpackStore = useBackpackStore();
    this.itemAlreadyExists = backpackStore.itemExists(this.item.id);
    if (this.itemAlreadyExists && !this.backpackIsFull) {
      this.showWarning = true;
      this.warningMessage = 'Föremålet är redan sparat i din ryggsäck.';
    } else if (this.itemAlreadyExists && this.backpackIsFull) {
      this.showWarning = true;
      this.warningMessage = 'Ryggsäcken är full och föremålet är redan sparat.'
    }
  },

  methods: {
    closePopup() {
      this.$emit('close');
    },

    goToBackpack() {
      this.router.push('/backpack');
    },

    transferItemToBackpack() {
      this.showSuccess = false;
      this.showWarning = false;

      if (this.backpackIsFull) {
        this.showWarning = true; // This line ensures that the warning state is always up-to-date
        return;
      }

      const gameStore = useGameStore();
      const result = gameStore.sendItemToBackpack(this.item);
      this.handleResult(result);
    },

    handleResult(result) {
      this.showSuccess = false;
      this.showWarning = false;
      
      console.log("Handling result:", result);

      switch (result) {
        case 'success':
          this.showSuccess = true;
          console.log("Set showSuccess to true");

          if (this.backpackIsFull) {
            this.showWarning = true;
            this.warningMessage = 'Ryggsäcken är full';
            console.log('And backpack is full.. set showWarning to true.')
          }
          break;
        case 'full':
          this.showWarning = true;
          this.warningMessage = 'Ryggsäcken är full';
          break;
        case 'already_exists':
          this.showWarning = true;
          this.warningMessage = 'Föremålet är redan sparat i din ryggsäck.';
          break;
        case 'not_in_game':
          this.showWarning = true;
          this.warningMessage = 'Föremålet finns inte i spelet.';
          break;
        case 'error':
          this.showWarning = true;
          this.warningMessage = 'Ett fel har uppstått.';
          break;
        }
        console.log("Warning State after switch:", this.showWarning, "Message:", this.warningMessage);
      }
    }
  };
</script>

