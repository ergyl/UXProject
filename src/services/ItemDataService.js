const BASE_URL = 'https://kulturarvsdata.se/ksamsok/api';
const categories = ['jewelry', 'ceramics', 'weapons'];

export default 
{
  async fetchData(url) 
  {
    try 
    {
      const response = await fetch(url, {headers: {'Accept': 'application/json-ld'}});
      
      if (!response.ok) 
      {
        throw new Error(`Failed to fetch data: ${response.statusText}`);
      }

      return await response.json();
    } 
    catch (error) 
    {
      console.error('Error fetching data:', error.message);
      throw error;
    }
  },

  async fetchItems(url) 
  {
    try 
    {
      const data = await this.fetchData(url); // Get data as JSON
  
      // If data is null or no items were found, throw an error.
      if (data == null || data.result.totalHits <= 0)
      {
        throw new Error('No items found');
      }

      const fetchIndicesCount = 9; // Amount of total items (indices) to fetch.
      const randomIndices = []; // Array to store the random incides

      // Fill the array with random indices. Ensuring no duplicates.
      while (randomIndices.length < fetchIndicesCount) 
      {
        const randomIndex = Math.floor(Math.random() * data.result.totalHits); // Get random index based on total hits.

        // Push the index into the array if it doesn't already exist.
        if (!randomIndices.includes(randomIndex)) randomIndices.push(randomIndex);
      }

      // ...
      const fetchPromises = randomIndices.map(async index => 
      {
        const fetchUrl = `${url}&startRecord=${index}&maximumRecords=1`;
        const fetchData = await this.fetchData(fetchUrl);
        return fetchData.result.records[0];
      });
 
      const fetchedRecords = await Promise.all(fetchPromises); // Wait for all fetch requests to complete

        // Process fetched records
        const items = fetchedRecords.map(record => 
        {
          // Extracting the necessary elements from the record.
          const graph = record.record["@graph"];
          const itemName = graph.find(item => item["@type"] === "ns1:ItemName");
          const thumbnail = graph.find(item => item["@type"] === "ns1:Image");
          const itemDescription = graph.find(item => item["@type"] === "ns1:ItemDescription");
        
          // Extracting specific properties from those elements.
          const itemNameText = itemName ? itemName["ns1:name"] : null;
          const thumbnailSource = thumbnail ? (thumbnail.lowresSource || thumbnail.thumbnailSource) : null;
          const descText = itemDescription ? itemDescription.desc : "Beskrivning saknas";
        
          // Creating a new object with the extracted properties and returning it
          return {id: record.record["@id"], image: thumbnailSource, description: descText};
        });

        console.log('Random items:', items);
        return items;

      } 
      catch (error) 
      {
        console.error('Error fetching items:', error.message);
        throw error;
      }
  },
  
  async getJewelry() 
  {
    const url = `${BASE_URL}?method=search&version=1.1&query=itemClassName%3D%22Smycken%20(OU%20301)%22%20AND%20thumbnailExists%3Dj`;
    return await this.fetchItems(url);
  },
  
  async getCeramics()
   {
    const url = `${BASE_URL}?method=search&version=1.1&hitsPerPage=9&query=itemClassName%3D%22Servering%20och%20f%C3%B6rt%C3%A4ring%20(OU%20264)%22%20AND%20thumbnailExists%3Dj`;
    return await this.fetchItems(url);
  },
  
  async getWeapons() 
  {
    const url = `${BASE_URL}?method=search&version=1.1&query=itemClassName%3D%22Vapen%20(OU%20411)%22%20AND%20thumbnailExists%3Dj`;
    return await this.fetchItems(url);
  },

  async getRandom() 
  {
    try 
    {
      const randomCategory = categories[Math.floor(Math.random() * categories.length)];
      switch (randomCategory) 
      {
        case 'jewelry':
          return await this.getJewelry();
        case 'ceramics':
          return await this.getCeramics();
        case 'weapons':
          return await this.getWeapons();
        default:
          throw new Error('Invalid category');
      }
    } 
    catch (error) 
    {
      console.error('Error getting random items:', error.message);
      throw error;
    }
  }
}