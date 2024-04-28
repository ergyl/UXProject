import { defineStore } from 'pinia';

export const useGameStore = defineStore('game', {
  state: () => ({
    category: null,
    difficulty: null,
    cards: [],
    gameState: 'memorize',  // can be 'memorize', 'play' or 'finished'
    memorizeTimeLeft: 15000, // 15s in ms
    totalMemorizeTime: 15000, // To start countdown from
    gameTimeLeft: 120000, // 120s in ms
    totalGameTime: 120000,
    progressColor: 'indigo',
  }),
  getters: {
    readyToPlay(state) {
      return state.gameState === 'memorize';
    },
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
      this.memorizeStartTime = Date.now(); // Set start timer to let player memorize the cards
      this.memorizeTimeLeft = this.totalMemorizeTime;
      this.memorizeTimer = setInterval(() => {
        this.updateCountDown();
      }, 1000); // update every second
    },
    playGame() {
      this.setGameState('play'); 
      this.gameStartTime = Date.now(); 
      this.gameTimeLeft = this.totalGameTime;
      this.updateCountDown();
      this.playTimer = setInterval(() => {
        this.updateCountDown();
      }, 1000); // update every second
    },
    updateCountDown() {
      const now = Date.now();
      if (this.gameState === 'memorize') {
        const elapsed = (now - this.memorizeStartTime);
        this.memorizeTimeLeft = Math.max(0, this.totalMemorizeTime - elapsed);
        if (this.memorizeTimeLeft <= 0) {
          clearInterval(this.memorizeTimer);
          this.playGame(); // Transition to play when memorization time is over
        }
      } else if (this.gameState === 'play') {
        const elapsed = (now - this.gameStartTime);
        this.gameTimeLeft = Math.max(0, this.totalGameTime - elapsed);
        if (this.gameTimeLeft <= 0) {
          clearInterval(this.playTimer);
          this.endGame();
        }
      }
      this.updateProgressBarColor();
    },
    updateProgressBarColor() {
      const progress = this.gameState === 'memorize' ? this.memorizeTimeLeftPercentage : this.gameTimeLeftPercentage;
      if (parseInt(progress) > 50) {
        this.progressColor = 'indigo';
      } else if (parseInt(progress) > 20) {
        this.progressColor = 'yellow';
      } else {
        this.progressColor = 'red';
      }
    },
    endGame() {
      this.gameState = 'finished';
      if (this.playTimer) clearInterval(this.playTimer);
    },
  },
});
