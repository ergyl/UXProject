import ItemDataService from './services/ItemDataService.js';

const app = {
    data() {
        return {
            message: 'A fun welcome message!',
            jewelryItems: [],
            ceramicItems: [],
            weaponItems: [],
        };
    },

    async mounted() {
        try {
            this.jewelryItems = await ItemDataService.getJewelry();
        } catch (error) {
            console.error('Error fetching jewelry items:', error.message);
        }

        try {
            this.ceramicItems = await ItemDataService.getCeramics();
        } catch (error) {
            console.error('Error fetching jewelry items:', error.message);
        }


        try {
            this.weaponItems = await ItemDataService.getWeapons();
        } catch (error) {
            console.error('Error fetching jewelry items:', error.message);
        }

    }
};

Vue.createApp(app).mount("#app");
