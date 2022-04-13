import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import MainForum from './components/MainForum.vue'
import MainRepos from './components/MainRepos.vue'
import MainExplore from './components/MainExplore.vue'
import AccountInfo from './components/AccountInfo.vue'
import AddForum from './components/AddForum.vue'
import MainCards from './components/MainCards.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/MainForum',
    name: 'MainForum',
    component: MainForum,
  },
  {
    path: '/MainRepos',
    name: 'MainRepos',
    component: MainRepos,
  },
  {
    path: '/MainExplore',
    name: 'MainExplore',
    component: MainExplore,
  },
  {
    path: '/AccountInfo',
    name: 'AccountInfo',
    component: AccountInfo,
  },
  {
    path: '/AddForum',
    name: 'AddForum',
    component: AddForum,
  },
  {
    path: '/MainCards',
    name: 'MainCards',
    component: MainCards,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
