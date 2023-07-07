import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from "../layouts/HomePage.vue";
import MenuPage from "../views/MenuPage.vue";
import CrudPage from "../views/CrudPage.vue";
import SearchPage from "../views/SearchPage.vue";
import PageChart from '../views/PageChart.vue'
import SignUp from '../views/SignUp.vue'
import PhotoView from "../views/PhotoView.vue";
import EventBus from "../views/EventBus.vue";
import RealtimeSocket from "../views/RealtimeSocket.vue";



Vue.use(VueRouter)

const routes = [
  {
    path: "/home",
    name: "Menu",
    component: MenuPage,
  },
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/crud",
    name: "Crud",
    component: CrudPage,
  },
  {
    path: "/search",
    name: "Search",
    component: SearchPage,
  },
  {
    path: "/chart",
    name: "Chart",
    component: PageChart,
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/photo",
    name: "PhotoView",
    component: PhotoView,
  },
  {
    path: "/event",
    name: "EventBus",
    component: EventBus,
  },
  {
    path: "/socket",
    name: "RealtimeSocket",
    component: RealtimeSocket,
  },
 
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
