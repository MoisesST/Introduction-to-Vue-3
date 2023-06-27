import { createRouter, createWebHistory } from "vue-router"

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
  },
  {
    path: '/users/:id',
    name: 'edit-users',
    component: () => import('../views/UserEditView')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router