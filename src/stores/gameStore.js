import { defineStore } from 'pinia';
import Ksamsok from '@/services/Ksamsok.js';

export const useGameStore = defineStore('game', {
  state: () => ({
    category: null,
    difficulty: null,
    gameState: 'memorize', // 1 memorize -> play -> 3 finished
    memorizeTimeLeft: 15000,
    totalMemorizeTime: 15000,
    gameTimeLeft: 120000,
    totalGameTime: 120000, // 2 min, default for difficulty 1 (easy)
    progressColor: 'indigo',
    memorizeTimer: null,
    playTimer: null,
    items: [], // array to store memory game items
    targetItem: null,
  }),

  getters: {
    memorizeTimeLeftPercentage(state) {
      const percentage = state.totalMemorizeTime > 0 ? Math.round((state.memorizeTimeLeft / state.totalMemorizeTime) * 100).toString() : '0';
      return percentage;
    },
    gameTimeLeftPercentage(state) {
      const percentage = state.totalGameTime > 0 ? Math.round((state.gameTimeLeft / state.totalGameTime) * 100).toString() : '0';
      return percentage;
    }
  },

  actions: {

    setTargetItem()
    {
      this.targetItem = this.items[Math.floor(Math.random() * 9)];
    },
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
      this.adjustGameTime(difficulty);
    },

    adjustGameTime(difficulty) {
      const baseTime = 120000;
      switch (difficulty) {
        case 1:
          this.totalGameTime = baseTime; // 2 min
          console.log('difficulty 1. ', this.totalGameTime)
          break;
        case 2:
          this.totalGameTime = baseTime * 0.5; // 1 min
          console.log('difficulty 2. ', this.totalGameTime)
          break;
        case 3:
          this.totalGameTime = 30000 // 30 sec
          console.log('difficulty 3. ', this.totalGameTime)
          break;
      }
      this.gameTimeLeft = this.totalGameTime; 
    },

    setGameState(state) {
      this.gameState = state;
    },

    addItems(newItems) {
      if (newItems && Array.isArray(newItems)) {
        this.items = newItems;
      } else {
        console.error('Invalid items array:', newItems);
      }
    },

    startGame() {
      console.log('startGame called, current state:', this.gameState);
      this.setGameState('memorize');
      this.startMemorizeTimerWithDelay();
    },

    startMemorizeTimerWithDelay() {
      if (this.memorizeTimerDelay) {
        clearTimeout(this.memorizeTimerDelay);
      }
      this.memorizeTimerDelay = setTimeout(() => {
        this.startMemorizeTimer();
      }, 2000); // 2s delay
    },

    startMemorizeTimer() {
      console.log('started timer for memorize');
      this.memorizeStartTime = Date.now();
      this.memorizeTimeLeft = this.totalMemorizeTime;
      this.memorizeTimer = setInterval(() => {
        this.updateCountDown();
      }, 1000);
    },

    playGame() {
      this.setGameState('play');
      this.startPlayTimerWithDelay();
    },

    startPlayTimerWithDelay() {
      if (this.playTimerDelay) {
        clearTimeout(this.playTimerDelay);
      } else {
        this.playTimerDelay = setTimeout(() => {
          this.startPlayTimer();
        }, 2000); // 2s delay
      }
    },

    startPlayTimer() {
      console.log('started timer for play');
      this.gameStartTime = Date.now();
      this.gameTimeLeft = this.totalGameTime;
      this.updateCountDown();
      this.playTimer = setInterval(() => {
        this.updateCountDown();
      }, 1000);
    },

    updateCountDown() {
      try {
        if (this.gameState === 'memorize' && this.memorizeTimer) {
          const elapsed = Date.now() - this.memorizeStartTime;
          this.memorizeTimeLeft = Math.max(0, this.totalMemorizeTime - elapsed);
          if (this.memorizeTimeLeft <= 0) {
            clearInterval(this.memorizeTimer);
            this.memorizeTimer = null;
            this.playGame(); // switch state to play game when countdown reaches
          }
        } else if (this.gameState === 'play' && this.playTimer) {
          const elapsed = Date.now() - this.gameStartTime;
          this.gameTimeLeft = Math.max(0, this.totalGameTime - elapsed);
          if (this.gameTimeLeft <= 0) {
            clearInterval(this.playTimer);
          this.playTimer = null;
          this.endGame();
        }
      }
      this.updateProgressBarColor();
    } catch (error) {
      console.error('Error in updateCountDown:', error);
    }
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
      console.log('game finished')
      this.gameState = 'finished';
      clearInterval(this.playTimer);
    },

    clearItems() {
      this.items = [];
    },

    resetGame() {
      console.log('called resetGame()')
      this.category = null;
      this.difficulty = null;
      this.gameState = 'memorize';
      this.memorizeTimeLeft = this.totalMemorizeTime;
      this.gameTimeLeft = this.totalGameTime;
      this.progressColor = 'indigo';
      clearInterval(this.memorizeTimerDelay);
      clearInterval(this.memorizeTimer);
      clearInterval(this.playTimerDelay);
      clearInterval(this.playTimer);
      this.memorizeTimerDelay = null;
      this.memorizeTimer = null;
      this.playTimerDelay = null;
      this.playTimer = null;
      this.clearItems();
    }
  },
});
