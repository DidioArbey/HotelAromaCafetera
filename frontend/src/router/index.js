import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import VueRouter from 'vue-router'
import Inicio from '../views/Inicio.vue'
<<<<<<< HEAD
import Index2 from '../views/Index2.vue'
=======
import HotelView from '../views/hotelView.vue'
>>>>>>> master
import HabitacionesView from '../views/HabitacionesView.vue'
import TarifasView from '../views/TarifasView.vue'
import ReservasView from '../views/ReservasView.vue'
import ContactoView from '../views/ContactoView.vue'
<<<<<<< HEAD
import LoginView from '../views/LoginView.vue'

=======
import ReservasView2 from '../views/ReservasView2.vue'
>>>>>>> emmanuel


Vue.use(VueRouter)
Vue.use(Vuetify)

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
    path:'/index2',
    name:'Index2',
    component:Index2
  },
  {
    path:'/',
    name:'home',
    component: Inicio
  },
  {
    path:'/hotelView',
    name:'HotelView',
    component:HotelView
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
    path:'/reservasview2',
    name:'ReservasView2',
    component:ReservasView2
  },
  {
    path:'/contactoview',
    name:'ContactoView',
    component:ContactoView
  },
  {
    path:'/loginview',
    name:'loginview',
    component:LoginView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router