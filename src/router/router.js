import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../components/home"
import community from "./community.js"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../components/about")
  },
  {
    path: "/community",
    name: "community",
    component: () => import("../components/community"),
    children: community
  },
  {
    path: "*",
    redirect: {
      name : "home"
    }
  }
]

export default new VueRouter({
  mode: 'hash',
  routes
})