import ItemDataService from './services/ItemDataService.js';

const app = {
    data() {
        return {
            message: 'Exempeldata',
            worldItems: [],
            toyItems: [],
            artworkItems: [],
        };
    },

    async mounted() {
        try {
            this.worldItems = await ItemDataService.getWorldItems();
        } catch (error) {
            console.error('Error fetching world items:', error.message);
        }

        try {
            this.toyItems = await ItemDataService.getToys();
        } catch (error) {
            console.error('Error fetching toy items:', error.message);
        }


        try {
            this.artworkItems = await ItemDataService.getArtwork();
        } catch (error) {
            console.error('Error fetching artwork items:', error.message);
        }

    }
};

Vue.createApp(app).mount("#app");
