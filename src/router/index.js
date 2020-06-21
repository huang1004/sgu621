import Vue from 'vue'
import VueRouter from 'vue-router'
import Msite from '../pages/MSite/MSite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/login.vue'
Vue.use(VueRouter)
export default new VueRouter({
  routes: [
    {
      path: '/msite',
      component: Msite,
      meta: {
        FooterShow: true
      }
    },
    {
      path: '/search',
      component: Search,
      meta: {
        FooterShow: true
      }
    },
    {
      path: '/order',
      component: Order,
      meta: {
        FooterShow: true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        FooterShow: true
      }
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/',
      redirect: '/msite'
    }
  ]
})
