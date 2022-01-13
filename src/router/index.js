import Vue from 'vue'
import Router from 'vue-router'

import DashboardPage from '../pages/DashboardPage'

Vue.use(Router)

// routes
const routes = [
  { path: '/', component: DashboardPage, name: 'home' }
]

export default new Router({
  mode: 'history',
  routes
})