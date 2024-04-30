/**
 * State management for the memory game
 */

import { defineStore } from 'pinia';
import Ksamsok from '@/services/Ksamsok.js'; // Import the service class

export const useGameStore = defineStore('game', {
  state: () => ({
    category: null, // can be 'toys', 'world' or 'artwork'
    difficulty: null, // 1-3
    gameState: 'memorize',  // can be 'memorize', 'play' or 'finished'

    totalMemorizeTime: 3000, // To start countdown from
    memorizeTimeLeft: 3000, // 15s in ms

    totalGameTime: 5000,
    gameTimeLeft: 5000, // 120s in ms

    
    progressColor: 'indigo',
    cards: [],
  }),
  getters: 
  {
    readyToPlay(state) {return state.gameState === 'memorize';},
    memorizeTimeLeftPercentage: (state) => {return state.totalMemorizeTime > 0 ? Math.round((state.memorizeTimeLeft / state.totalMemorizeTime) * 100).toString() : '0';},
    gameTimeLeftPercentage: (state) => {return state.totalGameTime > 0 ? Math.round((state.gameTimeLeft / state.totalGameTime) * 100).toString() : '0';}
  },
  actions: 
  {
    setCategory(category) 
    {
      if (!Ksamsok.getValidCategories().includes(category)) throw new Error(`Invalid category: ${category}`); // Verify that the category is valid
      this.category = category;
    },

    setDifficulty(difficulty) 
    {
      this.difficulty = difficulty;
    },
    setGameState(state) 
    {
      this.gameState = state;
    },

    startGame() 
    {
      this.setGameState('memorize');
      this.memorizeStartTime = Date.now(); // Set start timer to let player memorize the cards
      this.memorizeTimeLeft = this.totalMemorizeTime;
      this.memorizeTimer = setInterval(() => {
        this.updateCountDown();
      }, 1000); // update every second
    },

    playGame() 
    {
      this.setGameState('play'); 
      this.gameStartTime = Date.now(); 
      this.gameTimeLeft = this.totalGameTime;
      this.updateCountDown();
      this.playTimer = setInterval(() => 
      {
        this.updateCountDown();
      }, 1000); // update every second
    },
    updateCountDown() {
      const now = Date.now();
      
      if (this.gameState === 'memorize') {
      const elapsed = now - this.memorizeStartTime;
      this.memorizeTimeLeft = Math.max(0, this.totalMemorizeTime - elapsed);
      
      if (this.memorizeTimeLeft <= 0) {
        clearInterval(this.memorizeTimer);
        this.playGame(); // Transition to play when memorization time is over
      }
      } else if (this.gameState === 'play') {
      const elapsed = now - this.gameStartTime;
      this.gameTimeLeft = Math.max(0, this.totalGameTime - elapsed);
      
      if (this.gameTimeLeft <= 0) { 
        clearInterval(this.playTimer);
        this.endGame();
      }
      }
      
      this.updateProgressBarColor();
    },
    updateProgressBarColor() 
    {
      const progress = this.gameState === 'memorize' ? this.memorizeTimeLeftPercentage : this.gameTimeLeftPercentage; // Switch between memorize and play time
      switch (true) 
      {
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

    endGame() 
    {
      this.gameState = 'finished';
      if (this.playTimer) clearInterval(this.playTimer);
    },

    resetGame() {
      this.category = null;
      this.difficulty = null;
      this.gameState = null;

      this.memorizeTimeLeft = this.totalMemorizeTime;
      this.gameTimeLeft = this.totalGameTime;

      if (this.memorizeTimer) clearInterval(this.memorizeTimer);
      if (this.playTimer) clearInterval(this.playTimer);

      this.progressColor = 'indigo';

      this.cards = [];
    }
  },
});
