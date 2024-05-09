/**
 * State management for the backpack.
 * Used to store items in backpack and keep track of the state of the backpack.
 */

import { defineStore } from 'pinia';

export const useBackpackStore = defineStore('backpack', {
  state: () => ({
    maxCapacity: 9,
    items: new Map(), // Using Map to ensure all stored items have unique IDs
  }),

  getters: {
    spaceLeft(state) {
      return state.maxCapacity - state.items.size;
    },

    ifFull(state) {
        return state.items.size >= state.maxCapacity;
    }
  },

  actions: {
    addItem(item) {
        // Check if backpack is not full and that the key (id value) doesnt already exist in the Map.
      if (!this.ifFull && !this.items.has(item.id)) {
        this.items.set(item.id, item);
      }
    },

    removeItem(item) {
      if (this.items.has(item.id)) {
        this.items.delete(item.id);
      }
    }
  },
});

