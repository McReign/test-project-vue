import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
import HomePage from '@/components/HomePage'
import ManagePage from '@/components/ManagePage'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/home',
      name: 'ManagePage',
      component: ManagePage
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (store.state.currentUserState.token || to.path === '/') {
    next()
  } else {
    next('/')
  }
})

export default router
