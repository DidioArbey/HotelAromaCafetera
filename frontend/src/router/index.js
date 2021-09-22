import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '../views/Inicio.vue'
import HabitacionesView from '../views/HabitacionesView.vue'
import TarifasView from '../views/TarifasView.vue'
import ReservasView from '../views/ReservasView.vue'
import ContactoView from '../views/ContactoView.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/',
    name:'home',
    component: Inicio
  },
  {
    path:'/habitacionesview',
    name:'HabitacionesView',
    component:HabitacionesView
  },
  {
    path:'/tarifasview',
    name:'TarifasView',
    component:TarifasView
  },
  {
    path:'/reservasview',
    name:'ReservasView',
    component:ReservasView
  },
  {
    path:'/contactoview',
    name:'ContactoView',
    component:ContactoView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
