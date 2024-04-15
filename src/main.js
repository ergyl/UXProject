import ItemDataService from './services/ItemDataService.js';

const app = {
  data() {
    return {
      message: 'A fun welcome message!',
      jewelryItems: []
    };
  },
  async mounted() {
    try {
      this.jewelryItems = await ItemDataService.getJewelry();
    } catch (error) {
      console.error('Error fetching jewelry items:', error.message);
    }
  }
};

Vue.createApp(app).mount("#app");
