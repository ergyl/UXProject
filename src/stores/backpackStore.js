/**
 * State management for the backpack.
 * Used to store items in backpack and keep track of the state of the backpack.
 */

import { defineStore } from 'pinia';

export const useBackpackStore = defineStore('backpack', {
  state: () => ({
    maxCapacity: 9,
    items: new Map(), // Using Map to ensure all stored items have unique IDs
    selectedItemID: null,
  }),

  getters: {
    itemsObjects: (state) => {
      return Array.from(state.items.values());
    },

    spaceLeft(state) {
      return state.maxCapacity - state.items.size;
    },

    isEmpty(state) {
      return state.items.size === 0;
    },

    isFull(state) {
      return state.items.size >= state.maxCapacity;
    },

    itemExists: (state) => {
      return (itemId) => state.items.has(itemId);
    }
  },

  actions: {
    addItem(item) {
      // Check if backpack is not full and that the key (id value) doesnt already exist in the Map.
      if (!this.isFull && !this.items.has(item.id)) {
        this.items.set(item.id, item);
      }
    },

    setSelectedItemID(item) {
      this.selectedItemID = item;
    },

    removeItem() {
      for (let [key, value] of this.items) 
      {
        console.log("key: " + key + " value: " + value);
      }

      console.log("current selected item: " + this.selectedItemID);

      if (this.items.has(this.selectedItemID)) {
        this.items.delete(this.selectedItemID);
      }
      else {
        console.log("Item not found in backpack");
      }
    }
  },
});

