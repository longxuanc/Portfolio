import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage
    },

    {
      path: '/academic/storyvision',
      name: 'StoryVision',
      component: () => import('../views/Academic/StoryVision.vue')
    },

    {
      path: '/academic/course-a',
      name: 'CourseA',
      component: () => import('../views/Academic/CourseA.vue')
    },

    {
      path: '/academic/course-b',
      name: 'CourseB',
      component: () => import('../views/Academic/CourseB.vue')
    },

    {
      path: '/research/publication',
      name: 'Publication',
      component: () => import('../views/Research/Publication.vue')
    },

    {
      path: '/work/smart-factory',
      name: 'SmartFactory',
      component: () => import('../views/Professional/SmartFactory.vue')
    },

    {
      path: '/work/data-gov',
      name: 'DataGov',
      component: () => import('../views/Professional/DataGov.vue')
    },

    {
      path: '/work/media-ops',
      name: 'MediaOps',
      component: () => import('../views/Professional/MediaOps.vue')
    },

    {
      path: '/about/gameplay',
      name: 'GamePlay',
      component: () => import('../views/About/GamePlay.vue')
    }
  ],

  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
