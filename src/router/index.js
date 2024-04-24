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
          component: () => import('../views/LandingView.vue')
        },
        {
          path: '/introduction',
          name: 'introduction',
          // Route level code-splitting
          component: () => import('../views/IntroductionView.vue')
        },
        {
          path: '/home',
          name: 'home',
          component: () => import('../views/HomeView.vue')
        },
        {
          path: '/about',
          name: 'about',
          component: () => import('../views/AboutView.vue')
        }
      ]
    }
  ]
})

export default router;
