const BASE_URL = 'https://kulturarvsdata.se/ksamsok/api';
const categories = ['jewelry', 'ceramics', 'weapons'];

export default {

  async fetchData(url) {
    try {
      const response = await fetch(url, {
        headers: {
          'Accept': 'application/json-ld'
        }
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error fetching data:', error.message);
      throw error;
    }
  },

  async getJewelry() {
    try {
      const url = `${BASE_URL}?method=search&version=1.1&hitsPerPage=9&query=itemName=smycke%20AND%20thumbnailExists=j`;
      const data = await this.fetchData(url);
  
      console.log('Raw data:', data); // Log the raw data received from the API
  
      // Check if data is present and if it contains records
      if (data && data.result && data.result.records) {
        // Access presentationdata for each item and extract image and description
        const jewelryItems = data.result.records.map(record => {
          // Access the '@graph' array within the record object
          const graph = record.record["@graph"];
          // Find the relevant properties within the '@graph' array
          const material = graph.find(item => item["@type"] === "ItemMaterial");
          const thumbnail = graph.find(item => item["@type"] === "Image");
          const description = graph.find(item => item["@type"] === "ItemDescription");
  
          // Extract specific values from the properties
          const materialType = material ? material.material : null;
          const thumbnailSource = thumbnail ? thumbnail.thumbnailSource : null;
          const descText = description ? description.desc : null;
  
          return {
            id: record.record["@id"], // Adjust based on actual structure
            image: thumbnailSource,
            description: descText
          };
        });
  
        console.log('Parsed jewelry items:', jewelryItems); // Log the parsed jewelry items
  
        return jewelryItems;
      } else {
        throw new Error('No jewelry data found');
      }
    } catch (error) {
      console.error('Error getting jewelry:', error.message);
      throw error;
    }
  },  
    
  async getCeramics() {
    try {
      const url = `${BASE_URL}?method=search&version=1.1&hitsPerPage=9&query=itemName=keramik%20AND%20thumbnailExists=j`;
      return await this.fetchData(url);
    } catch (error) {
      console.error('Error getting ceramics:', error.message);
      throw error;
    }
  },

  async getWeapons() {
    try {
      const url = `${BASE_URL}?method=search&version=1.1&hitsPerPage=9&query=itemName=vapen%20AND%20thumbnailExists=j`;
      return await this.fetchData(url);
    } catch (error) {
      console.error('Error getting weapons:', error.message);
      throw error;
    }
  },

  async getRandom() {
    try {
      const randomCategory = categories[Math.floor(Math.random() * categories.length)];
      switch (randomCategory) {
        case 'jewelry':
          return await this.getJewelry();
        case 'ceramics':
          return await this.getCeramics();
        case 'weapons':
          return await this.getWeapons();
        default:
          throw new Error('Invalid category');
      }
    } catch (error) {
      console.error('Error getting random items:', error.message);
      throw error;
    }
  }
}