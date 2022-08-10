import { createRouter, createWebHistory } from 'vue-router'
import ProductsView from '../views/ProductsView.vue'
import CartView from '../views/CartView.vue'
import ThanksView from '../views/ThanksView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: ProductsView
  },

  {
    path: '/products',
    name: 'products',
    component: ProductsView
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartView
  },

  {
    path: '/thanks',
    name: 'thanks',
    component: ThanksView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
