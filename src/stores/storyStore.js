/**
 * State management for the story.
 * Used to keep track of the current index of story via ArrowButtons in
 * MainLayout and feeds the state to StoryPage.
 */

import { defineStore } from 'pinia';

export const useStoryStore = defineStore('story', {
  state: () => ({
    currentIndex: 0,
    maximumIndex: 10,
    showLastTransition: false
  }),

  getters: {
    firstPage: (state) => state.currentIndex === 0,
    lastPage: (state) => state.currentIndex === state.maximumIndex - 1
  },

  actions: {
    showPrevious() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
        console.log('current index:', this.currentIndex);
      }
    },
    showNext() {
      if (this.currentIndex < this.maximumIndex - 1) {
        this.currentIndex++;
        console.log('current index:', this.currentIndex);
      }
      // Check if the new currentIndex is the last page after increment
      if (this.currentIndex === this.maximumIndex - 1) {
        this.showLastTransition = true;
        console.log('Reached last page, show transition:', this.showLastTransition);
      }
    },
    reset() {
      this.currentIndex = 0;
      this.showLastTransition = false;
      console.log('reset called');
    },
  },
});

