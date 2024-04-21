const extractDescription = (itemDescription) => {
  if (!itemDescription || itemDescription.type !== "Föremålsbeskrivning") {
    return "Beskrivning saknas";
  }
  if (itemDescription["@value"]) {
    // Structured description
    return itemDescription["@value"];
  } else if (itemDescription.desc || itemDescription.desc.value) {
    // Unstructured description
    return itemDescription.desc || itemDescription.desc.value;
  } else {
    return "Beskrivning saknas";
  }
};

const BASE_URL = 'https://kulturarvsdata.se/ksamsok/api';
const categories = ['world', 'toys', 'artwork'];

export default
  {
    async fetchData(url) {
      try {
        const response = await fetch(url, { headers: { 'Accept': 'application/json-ld' } });

        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.statusText}`);
        }

        return await response.json();
      }
      catch (error) {
        console.error('Error fetching data:', error.message);
        throw error;
      }
    },

    async fetchItems(url, category) {
      try {
        const data = await this.fetchData(url); // Get data as JSON

        // If data is null or no items were found, throw an error.
        if (data == null || data.result.totalHits <= 0) {
          throw new Error('No items found');
        }

        const numberOfItemsToGet = 9; // Amount of items (indices) to fetch.
        const randomIndices = []; // Array to store the random incides

        // Fill the array with random indices. Ensuring no duplicates.
        while (randomIndices.length < numberOfItemsToGet) {
          const randomIndex = Math.floor(Math.random() * data.result.totalHits); // Get random index based on total hits.

          // Push the index into the array if it doesn't already exist.
          if (!randomIndices.includes(randomIndex)) randomIndices.push(randomIndex);
        }

        // Fill every element in the array with data from API
        const fetchPromises = randomIndices.map(async index => {
          const fetchUrl = `${url}&startRecord=${index}&maximumRecords=1`;
          const fetchData = await this.fetchData(fetchUrl);
          console.log('Fetched record JSON data:', fetchData.result.records[0]); // <-- Print JSON data directly
          return fetchData.result.records[0];
        });

        const fetchedRecords = await Promise.all(fetchPromises); // Wait for all fetch requests to complete

        // Process fetched records
        let items = undefined;

        switch (category) {
          case 'world':
            items = extractDataFromWorldItems(fetchedRecords);
            break;
          case 'toys':
            items = extractDataFromToyItems(fetchedRecords);
            break;
          case 'artwork':
            items = extractDataFromArtworkItems(fetchedRecords);
            break;
          default:
            throw new Error('Invalid category');
        }

        console.log(`${numberOfItemsToGet} items in ${category}:`, items);
        return items;

      }
      catch (error) {
        console.error('Error fetching items:', error.message);
        throw error;
      }
    },

    /** Category 1 */
    async getWorldItems() {
      const url = `${BASE_URL}?method=search&version=1.1&query=itemType=%22objekt%2Ff%C3%B6rem%C3%A5l%22%20AND%20serviceOrganization=smvk-vkm%20AND%20thumbnailExists%3Dj%20AND%20itemKeyWord%3Detnografi`;
      return await this.fetchItems(url, 'world');
    },

    /** Category 2 */
    async getToys() {
      const url = `${BASE_URL}?method=search&version=1.1&query=itemClassName%3D%22Lekar%20och%20spel%20(OU%20524)%22%20AND%20itemType%3D%22objekt%2Ff%C3%B6rem%C3%A5l%22%20AND%20thumbnailExists%3Dj%20NOT%20itemKeyWord%3D%22Docksk%C3%A5p%22%20NOT%20itemKeyWord%3D%22Dockkl%C3%A4der%22%20NOT%20itemKeyWord%3D%22M%C3%B6bler%22%20AND%20produce_fromTime%3C=1800%20and%20produce_toTime%3E=1600`;
      return await this.fetchItems(url, 'toys');
    },

    /** Category 3 */
    async getArtwork() {
      const url = `${BASE_URL}?method=search&version=1.1&query=itemClassName%3D%22Bildkonst%20%28OU%20532%29%22%20AND%20itemType%3D%22konstverk%22%20AND%20thumbnailExists%3Dj%20AND%20create_fromTime%3C=1890%20AND%20create_toTime%3E=1500%20AND%20itemKeyWord%3DM%C3%A5lningar`;
      return await this.fetchItems(url, 'artwork');
    },

    /** Random category from category 1-3 */
    async getRandom() {
      try {
        const randomCategory = categories[Math.floor(Math.random() * categories.length)];
        switch (randomCategory) {
          case 'world':
            return await this.getWorldItems();
          case 'toys':
            return await this.getToys();
          case 'artwork':
            return await this.getArtwork();
          default:
            throw new Error('Invalid category');
        }
      }
      catch (error) {
        console.error('Error getting random items:', error.message);
        throw error;
      }
    }
  }

function extractDataFromWorldItems(fetchedRecords) {
  return fetchedRecords.map(record => {
    // Extracting the necessary elements from the record.
    const graph = record.record["@graph"];
    const itemNames = graph.filter(item => item["@type"] === "ItemName");
    const thumbnail = graph.find(item => item["@type"] === "ns1:Image" || item["@type"] === "Image");
    const itemDescriptions = graph.filter(item => item["@type"] === "ns1:ItemDescription" || item["@type"] === "ItemDescription");
    const contexts = graph.filter(item => item["@type"] === "ns1:Context");
    let origin = graph.find(item => item["country"]);

    let itemNameText = 'Föremål';
    itemNames.forEach(itemName => {
      if (itemName && itemName.name && itemName.name["@language"] === "sv") {
        itemNameText = itemName.name["@value"];
      } else if (itemName && itemName["http://kulturarvsdata.se/ksamsok#name"] && itemName["http://kulturarvsdata.se/ksamsok#name"]["@language"] === "sv") {
        itemNameText = itemName["http://kulturarvsdata.se/ksamsok#name"]["@value"];
      }
    });

    itemNameText = transformItemName(itemNameText);

    const thumbnailSource = thumbnail ? (thumbnail.lowresSource || thumbnail.thumbnailSource) : null;

    let descText = 'Beskrivning saknas'
    itemDescriptions.forEach(itemDesc => {
      if (itemDesc.type["@value"] === "Beskrivning, originalkort") {
        descText = itemDesc.desc["@value"];
      }
    })
   

    // Extracting origin information
    origin = {
      context: origin["contextLabel"] ? origin["contextLabel"]["@value"] : null,
      placeName: origin.placeName ? origin.placeName["@value"] : null,
      countryName: origin.countryName ? origin.countryName["@value"] : null,
      continentName: origin.continentName ? origin.continentName["@value"] : null,
    };


    // Creating a new object with the extracted properties and returning it
    return {
      id: record.record["@id"],
      itemName: itemNameText,
      image: thumbnailSource,
      description: descText,
      origin,
    };
  });
}

function extractDataFromToyItems(fetchedRecords) {
  return fetchedRecords.map(record => {
    // Extracting the necessary elements from the record.
    const graph = record.record["@graph"];
    const itemName = graph.find(item => item["@type"] === "ns1:ItemName" || item["@type"] === "ItemName");
    const thumbnail = graph.find(item => item["@type"] === "ns1:Image" || item["@type"] === "Image");
    const itemDescription = graph.find(item => item["@type"] === "ns1:ItemDescription" || item["@type"] === "ItemDescription");
    const context = graph.find(obj => obj["@type"] === "ns1:Context");

    // Extracting specific properties from those elements.
    const itemNameText = itemName ? itemName["ns1:name"] || itemName["name"] : null;
    const thumbnailSource = thumbnail ? (thumbnail.lowresSource || thumbnail.thumbnailSource) : null;
    const descText = extractDescription(itemDescription);
    // Extract data about context if object exists
    const contextLabel = context ? context.contextLabel : null;
    const fromTime = context ? context.fromTime : null;
    let toTime = context ? context.toTime : null;

    // If fromTime and toTime have the same value YYYY-mm-dd, return null in
    if (fromTime === toTime) {
      toTime = null;
    }

    // Creating a new object with the extracted properties and returning it
    return {
      id: record.record["@id"],
      itemName: itemNameText,
      image: thumbnailSource,
      description: descText,
      context: {
        contextLabel,
        fromTime,
        toTime
      }
    };
  });
}

function extractDataFromArtworkItems(fetchedRecords) {
  return fetchedRecords.map(record => {
    // Extracting the necessary elements from the record.
    const graph = record.record["@graph"];
    const itemName = graph.find(item => item["@type"] === "ns1:ItemName" || item["@type"] === "ItemName");
    const thumbnail = graph.find(item => item["@type"] === "ns1:Image" || item["@type"] === "Image");
    const itemDescription = graph.find(item => item["@type"] === "ns1:ItemDescription" || item["@type"] === "ItemDescription");
    const context = graph.find(obj => obj["@type"] === "ns1:Context");

    // Extracting specific properties from those elements.
    const itemNameText = itemName ? itemName["ns1:name"] || itemName["name"] : null;
    const thumbnailSource = thumbnail ? (thumbnail.lowresSource || thumbnail.thumbnailSource) : null;
    const descText = extractDescription(itemDescription);
    // Extract data about context if object exists
    const contextLabel = context ? context.contextLabel : null;
    const fromTime = context ? context.fromTime : null;
    let toTime = context ? context.toTime : null;

    // If fromTime and toTime have the same value YYYY-mm-dd, return null in
    if (fromTime === toTime) {
      toTime = null;
    }

    // Creating a new object with the extracted properties and returning it
    return {
      id: record.record["@id"],
      itemName: itemNameText,
      image: thumbnailSource,
      description: descText,
      context: {
        contextLabel,
        fromTime,
        toTime
      }
    };
  });
}

function transformItemName(itemName) {
  // Make the first character uppercase (if it's a letter)
  let res = itemName.charAt(0).toUpperCase() + itemName.slice(1);

  // Remove a period (.) if it's the final character of the string
  if (res.endsWith('.')) {
    res = res.slice(0, -1);
  }

  return res;
}