import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import Signup from '@/views/Signup.vue'
import ThreadsView from '@/views/ThreadsView.vue'
import HuddlesView from '@/views/HuddlesView.vue'
import DraftsView from '@/views/DraftsView.vue'
import Technology from '@/components/Technology.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/signup',
      name: 'signup',
      component:Signup
    },
    {
      path: '/home',
      name: 'home',
      component:HomeView,
      children:[
        {
          path: 'threads',
          name: 'threads',
          component: ThreadsView,
        },
        {
          path: 'huddles',
          name: 'huddles',
          component: HuddlesView,
        },
        {
          path: 'drafts',
          name: 'drafts',
          component: DraftsView,
        },
        {
          path:'technology/:channel',
          name:'technology',
          component:Technology
        },

  ],
    },
  ],
})

export default router
