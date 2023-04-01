import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import OverView from '../views/OverView.vue'
import BijsluitersView from '../views/BijsluitersView.vue'
import HillsVoordeelView from '../views/HillsVoordeelView.vue'
import DuivenView from '../views/DuivenView.vue'
import ContactView from '../views/ContactView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/over',
    name: 'over',
    component: OverView
  },
  {
    path: '/bijsluiters',
    name: 'bijsluiters',
    component: BijsluitersView
  },
  {
    path: '/hillsvoordeel',
    name: 'hillsvoordeel',
    component: HillsVoordeelView
  },
  {
    path: '/duiven',
    name: 'duiven',
    component: DuivenView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
