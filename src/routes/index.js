import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView')
  },
  {
    path: '/services',
    name: 'services',
    component: () => import('../views/ServicesView')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
export default router