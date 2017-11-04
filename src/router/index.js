import Vue from 'vue'
import Router from 'vue-router'

import NavBar from '../components/NavBar.vue'

import CanOrder from '../views/CanOrder.vue'
import Progress from '../views/Progress.vue'
import Completed from '../views/Completed.vue'
import OrderDetail from '../views/OrderDetail.vue'
import Login from '../views/Login.vue'
import Step1 from '../views/Step1.vue'
import Step2 from '../views/Step2.vue'
import Step3 from '../views/Step3.vue'
import Forget from '../views/Forget.vue'

import NotFound from '../views/NotFound.vue'

Vue.use(Router)

const routes = [
  {
    path: '/canOrder',
    name: ' 我要接单',
    components: {
      default: CanOrder,
      nav: NavBar
    }
  },
  {
    path: '/progress',
    components: {
      default: Progress,
      nav: NavBar
    }
  },
  {
    path: '/completed',
    components: {
      default: Completed,
      nav: NavBar
    }
  },
  {
    path: '/order/detail/:id',
    name: 'detail',
    component: OrderDetail
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/registered/step1',
    name: 'step1',
    component: Step1
  },
  {
    path: '/registered/step2',
    name: 'step2',
    component: Step2
  },
  {
    path: '/registered/step3',
    name: 'step3',
    component: Step3
  },
  {
    path: '/forget',
    name: 'forget',
    component: Forget
  },
  {
    path: '*',
    component: NotFound
  }
]

const router = new Router({
  mode: 'history',
  routes
})

router.afterEach(to => {
  switch (to.path) {
    case '/canOrder':
      document.title = '我要接单'
      break
    case '/not-found':
      document.title = '404'
      break
    default:
      break
  }
})

export default router
