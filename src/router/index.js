import Vue from 'vue'
import Router from 'vue-router'
import Home from "../components/Home";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/home/searchPopup',
          name: 'SearchPopup',
          component: () => import('@/views/SearchPopup.vue')
        },
      ]
    },
  ]
})
