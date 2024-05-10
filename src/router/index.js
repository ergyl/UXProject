import { createRouter, createWebHistory } from 'vue-router'
import { useGameStore } from '@/stores/gameStore';
import MainLayout from '@/components/layout/MainLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: MainLayout, // Use MainLayout as the consistent layout
      children: [
        {
          path: '', // Default child path
          name: 'landing',
          component: () => import('../views/LandingPage.vue') // Route level code-splitting
        },
        {
          path: '/home',
          name: 'home',
          component: () => import('../views/HomePage.vue')
        },
        {
          path: '/story',
          name: 'story',
          component: () => import('../views/StoryPage.vue')
        },
        {
          path: '/tips',
          name: 'tips',
          component: () => import('../views/TipsPage.vue')
        },
        {
          path: '/backpack',
          name: 'backpack',
          component: () => import('../views/BackpackPage.vue')
        },
        {
          path: '/choose-category',
          name: 'choose-category',
          component: () => import('../views/CategorySelectionPage.vue')
        },
        {
          path: '/choose-difficulty',
          name: 'choose-difficulty',
          component: () => import('../views/DifficultySelectionPage.vue')
        },
        {
          path: '/game-play',
          name: 'game-play',
          component: () => import('../views/MemoryGamePage.vue')
        },
        {
          path: '/info',
          name: 'info',
          component: () => import('../views/AboutGamePage.vue')
        },
        {
          path: '/about-game',
          name: 'about-game',
          component: () => import('../views/AboutGamePage.vue')
        },
        {
          path: '/for-teachers',
          name: 'for-teachers',
          component: () => import('../views/ForTeachersPage.vue')
        },
      ]
    }
  ]
});

router.beforeEach((to, from, next) => {
  const gameStore = useGameStore();
  if (from.name === 'game-play') {
    gameStore.resetGame();
  }
  next();
});

export default router
