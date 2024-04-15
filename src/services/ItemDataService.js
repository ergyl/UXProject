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

  async fetchItems(url) {
    try {
      const data = await this.fetchData(url);
  
      if (data && data.result && data.result.totalHits > 0) {
        const totalHits = data.result.totalHits;
        const fetchIndicesCount = 9;
        const randomIndices = [];
  
        // Generate random indices
        while (randomIndices.length < fetchIndicesCount) {
          const randomIndex = Math.floor(Math.random() * totalHits);
          if (!randomIndices.includes(randomIndex)) {
            randomIndices.push(randomIndex);
          }
        }
  
        // Fetch data for each random index
        const fetchPromises = randomIndices.map(async index => {
          const fetchUrl = `${url}&startRecord=${index}&maximumRecords=1`;
          const fetchData = await this.fetchData(fetchUrl);
          return fetchData.result.records[0];
        });
  
        // Wait for all fetch requests to complete
        const fetchedRecords = await Promise.all(fetchPromises);
  
        // Process fetched records
        const items = fetchedRecords.map(record => {
          const graph = record.record["@graph"];
          const itemName = graph.find(item => item["@type"] === "ns1:ItemName");
          const thumbnail = graph.find(item => item["@type"] === "ns1:Image");
          const itemDescription = graph.find(item => item["@type"] === "ns1:ItemDescription");
  
          const itemNameText = itemName ? itemName["ns1:name"] : null;
          const thumbnailSource = thumbnail ? (thumbnail.lowresSource || thumbnail.thumbnailSource) : null;
          const descText = itemDescription ? itemDescription.desc : "Beskrivning saknas";
  
          return {
            id: record.record["@id"],
            image: thumbnailSource,
            description: descText
          };
        });
  
        console.log('Random items:', items);
        return items;
      } else {
        throw new Error('No items found');
      }
    } catch (error) {
      console.error('Error fetching items:', error.message);
      throw error;
    }
  },
  
  async getJewelry() {
    const url = `${BASE_URL}?method=search&version=1.1&query=itemClassName%3D%22Smycken%20(OU%20301)%22%20AND%20thumbnailExists%3Dj`;
    return await this.fetchItems(url);
  },
  
  async getCeramics() {
    const url = `${BASE_URL}?method=search&version=1.1&hitsPerPage=9&query=itemClassName%3D%22Servering%20och%20f%C3%B6rt%C3%A4ring%20(OU%20264)%22%20AND%20thumbnailExists%3Dj`;
    return await this.fetchItems(url);
  },
  
  async getWeapons() {
    const url = `${BASE_URL}?method=search&version=1.1&query=itemClassName%3D%22Vapen%20(OU%20411)%22%20AND%20thumbnailExists%3Dj`;
    return await this.fetchItems(url);
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