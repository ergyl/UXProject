/**
 * State management for the story.
 * Used to keep track of the current index of story via ArrowButtons in
 * MainLayout and feeds the state to StoryPage.
 */

import { defineStore } from 'pinia';

export const useStoryStore = defineStore('story', {
  state: () => ({
    currentIndex: 0,
    maximumIndex: 10
  }),

  getters: {
    firstPage: (state) => state.currentIndex === 0,
    lastPage: (state) => state.currentIndex === state.maximumIndex - 1
  },

  actions: {
    showPrevious() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      }
    },
    showNext() {
      if (this.currentIndex < this.maximumIndex - 1) {
        this.currentIndex++
      }
    },
    reset() {
      this.currentIndex = 0;
    }
  },
});

