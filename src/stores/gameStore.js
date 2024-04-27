import { defineStore } from 'pinia';

export const useGameStore = defineStore('game', {
  state: () => ({
    category: null,
    difficulty: null,
    cards: [],
    gameTime: null,
  }),
  getters: {
    // getters can be added here for computations based on state
  },
  actions: {
    setCategory(category) {
      this.category = category;
    },
    setDifficulty(difficulty) {
      this.difficulty = difficulty;
    },
    initializeCards(cards) {
      this.cards = cards;
    },
    startGame() {
      // Initialize gameTime and any other game setup logic
    },
    endGame() {
      // Handle game ending logic, such as clearing timers
    },
    // ... other actions like flipping cards, checking for a match, etc.
  },
});
