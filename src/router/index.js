import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: () => import('../views/dashboard/Index')
  },
  {
    path: '/companies',
    name: 'companies',
    component: () => import('../views/companies/Index')
  },
  {
    path: '/cost_centers',
    name: 'cost_centers',
    component: () => import('../views/cost_centers/Index')
  },
  {
    path: '/collaborators',
    name: 'collaborators',
    component: () => import('../views/collaborators/Index')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
