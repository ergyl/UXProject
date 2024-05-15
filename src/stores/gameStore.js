import { defineStore } from 'pinia';
import { useBackpackStore } from '@/stores/backpackStore';
import Ksamsok from '@/services/Ksamsok.js';
import JSConfetti from 'js-confetti';

export const useGameStore = defineStore('game', {
  state: () => ({
    category: null,
    difficulty: null,
    gameState: 'start', // 1 start -> 2 loaded -> 3 memorize -> 4 play -> 5 finished
    memorizeTimeLeft: 15000,
    totalMemorizeTime: 15000,
    gameTimeLeft: 120000,
    totalGameTime: 120000, // 2 min, default for difficulty 1 (easy)
    progressColor: 'indigo',
    memorizeTimer: null,
    playTimer: null,
    items: [], // array to store memory game items
    guessedItems: [],
    targetItem: null,
    onCooldown: false,
    allItemsGuessed: false,
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

    guessItem(item) {
      this.guessedItems.push(item);
    },

    startCooldown(time) {
      this.onCooldown = true;

      setTimeout(() => {
        this.onCooldown = false;
      }, time);
    },

    setTargetItem() {
      if (this.items.length === this.guessedItems.length) {
        console.log('all items guessed')
        this.allItemsGuessed = true;
        this.endGame();
        return;
      }

      let selectedItem = this.items[Math.floor(Math.random() * 9)];
      if (this.guessedItems.includes(selectedItem)) {
        this.setTargetItem(); // try again
        return;
      }
      this.targetItem = selectedItem;
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
      console.log('and now current state:', this.gameState);
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
      if (this.memorizeTimeLeft < this.totalMemorizeTime) return; // Dont restart timer if already running
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
      console.log('playGame called, current state:', this.gameState);

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
            this.playGame(); // switch state to play game when countdown reaches 0
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
      const jsConfetti = new JSConfetti();

      // If all the cards have been guessed, emit confetti. Otherwise, throw worms.
      if (this.items.length === this.guessedItems.length) {
        jsConfetti.addConfetti({
          emojis: ['🎉', '🎊', '🎈', '💫', '✨', '🧨'],
        }).then(() => { jsConfetti.addConfetti() });
      }
      /* else {
        jsConfetti.addConfetti({

          emojis: ['🪱', '🪱', '🪱', '🪱', '🪱', '🪱'],
        })
      } */
    },

    sendItemToBackpack(item) {
      const backpackStore = useBackpackStore();

      if (!this.items.some(gameItem => gameItem.id === item.id)) {
        console.log('This item is not part of the current game.');
        return 'not_in_game';
      }
      else if (backpackStore.items.has(item.id)) {
        console.log('This item is already in your backpack.');
        return 'already_exists';
      } else {
        backpackStore.addItem(item);
        console.log('Item transferred to backpack:', item);
        return 'success';
      }
    },

    clearItems() {
      this.items = [];
      this.guessedItems = [];
      this.targetItem = null;
      this.onCooldown = false;
      this.allItemsGuessed = false;
    },

    resetGame() {
      console.log('called resetGame()')
      this.category = null;
      this.difficulty = null;
      this.gameState = 'start';
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
