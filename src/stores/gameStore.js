import { defineStore } from 'pinia';
import Ksamsok from '@/services/Ksamsok.js';

export const useGameStore = defineStore('game', {
  state: () => ({
    category: null,
    difficulty: null,
    cards: [],
    gameState: 'memorize',
    memorizeTimeLeft: 15000,
    totalMemorizeTime: 15000,
    gameTimeLeft: 120000,
    totalGameTime: 120000,
    progressColor: 'indigo',
    memorizeTimer: null,
    playTimer: null,
  }),
  getters: {
    readyToPlay(state) {
      return state.gameState === 'memorize';
    },
    memorizeTimeLeftPercentage(state) {
      return state.totalMemorizeTime > 0 ? Math.round((state.memorizeTimeLeft / state.totalMemorizeTime) * 100).toString() : '0';
    },
    gameTimeLeftPercentage(state) {
      return state.totalGameTime > 0 ? Math.round((state.gameTimeLeft / state.totalGameTime) * 100).toString() : '0';
    }
  },
  actions: {
    setCategory(category) {
      console.log("gameStore setting category to:", category);
      const validCategories = Ksamsok.getValidCategories();
      if (!validCategories.includes(category)) {
        throw new Error(`Invalid category: ${category}`);
      }
      this.category = category;
    },
    setDifficulty(difficulty) {
      this.difficulty = difficulty;
    },
    setGameState(state) {
      this.gameState = state;
    },
    startGame() {
      this.setGameState('memorize');
      this.memorizeStartTime = Date.now();
      this.memorizeTimeLeft = this.totalMemorizeTime;
      this.memorizeTimer = setInterval(() => {
        this.updateCountDown();
      }, 1000);
    },
    playGame() {
      this.setGameState('play');
      this.gameStartTime = Date.now();
      this.gameTimeLeft = this.totalGameTime;
      this.updateCountDown();
      this.playTimer = setInterval(() => {
        this.updateCountDown();
      }, 1000);
    },
    updateCountDown() {
      if (this.gameState === 'memorize') {
        const elapsed = Date.now() - this.memorizeStartTime;
        this.memorizeTimeLeft = Math.max(0, this.totalMemorizeTime - elapsed);
        if (this.memorizeTimeLeft <= 0) {
          clearInterval(this.memorizeTimer);
          this.playGame();
        }
      } else if (this.gameState === 'play') {
        const elapsed = Date.now() - this.gameStartTime;
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
      switch (true) {
        case parseInt(progress) > 50:
          this.progressColor = 'indigo';
          break;
        case parseInt(progress) > 20:
          this.progressColor = 'yellow';
          break;
        default:
          this.progressColor = 'red';
          break;
      }
    },
    endGame() {
      this.gameState = 'finished';
      clearInterval(this.playTimer);
    },
    resetGame() {
      this.category = null;
      this.difficulty = null;
      this.cards = [];
      this.gameState = null;
      this.memorizeTimeLeft = this.totalMemorizeTime;
      this.gameTimeLeft = this.totalGameTime;
      this.progressColor = 'indigo';
      clearInterval(this.memorizeTimer);
      clearInterval(this.playTimer);
    }
  },
});
