import { defineStore } from 'pinia';

export const useGameStore = defineStore('game', {
  state: () => ({
    category: null,
    difficulty: null,
    cards: [],
    gameState: null,  // 'memorize' or 'play'
    memorizeTimeLeft: 30, // Seconds
    totalMemorizeTime: 30, // To start countdown from
    gameTimeLeft: 120,
    totalGameTime: 120,
    progressColor: 'indigo',
  }),
  getters: {
    memorizeTimeLeftPercentage: (state) => {
      return state.totalMemorizeTime > 0 ? Math.round((state.memorizeTimeLeft / state.totalMemorizeTime) * 100).toString() : '0';
    },
    gameTimeLeftPercentage: (state) => {
      return state.totalGameTime > 0 ? Math.round((state.gameTimeLeft / state.totalGameTime) * 100).toString() : '0';
    }
  },
  actions: {
    setGameState(state) {
      this.gameState = state;
    },
    startGame() {
      this.setGameState('memorize');
      this.startTime = Date.now(); // Set the start time
      this.gameTimeLeft = this.totalGameTime;
    },
    playGame() {
      this.setGameState('play'); // Change state on game end
      
    },
    updateTimeAndColor() {
      const elapsed = (Date.now() - this.startTime) / 1000;
      this.gameTimeLeft = Math.max(0, this.totalGameTime - elapsed);
      
      const progress = this.gameTimeLeftPercentage;
      if (parseInt(progress) > 50) {
        this.progressColor = 'indigo';
      } else if (parseInt(progress) > 20) {
        this.progressColor = 'yellow';
      } else {
        this.progressColor = 'red';
      }
    },
    endGame() {
      // Handle game ending logic here
    },
  },
});
