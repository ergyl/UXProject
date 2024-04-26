import { createRouter, createWebHistory } from 'vue-router'
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
          component: () => import('../views/LandingPage.vue')
        },
        {
          path: '/home',
          name: 'home',
          component: () => import('../views/HomePage.vue')
        },
        {
          path: '/introduction',
          name: 'introduction',
          // Route level code-splitting
          component: () => import('../views/StoryPage.vue')
        },
        {
          path: '/tips',
          name: 'tips',
          component: () => import('../views/BackpackPage.vue')
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
          path: '/game-finished',
          name: 'game-finished',
          component: () => import('../views/GameFinishedPage.vue')
        },
      ]
    }
  ]
})

export default router
