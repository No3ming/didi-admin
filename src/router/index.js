import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'

import NavBar from '../components/NavBar.vue'

import CanOrder from '../views/CanOrder.vue'
import Progress from '../views/Progress.vue'
import Completed from '../views/Completed.vue'
import OrderDetail from '../views/OrderDetail.vue'
import OrderDetailStep from '../views/OrderDetailStep.vue'
import Login from '../views/Login.vue'
import Step1 from '../views/Step1.vue'
import Step2 from '../views/Step2.vue'
import Step3 from '../views/Step3.vue'
import Step4 from '../views/Step4.vue'
import Certification from '../views/Certification.vue'
import Amount from '../views/Amount.vue'
import PersonalCenter from '../views/PersonalCenter.vue'
import MyInfo from '../views/MyInfo.vue'
import Forget from '../views/Forget.vue'

import NotFound from '../views/NotFound.vue'

Vue.use(Router)

const routes = [
  {
    path: '/accountant/canOrder',
    name: ' 我要接单',
    components: {
      default: CanOrder,
      nav: NavBar
    }
  },
  {
    path: '/accountant/progress',
    components: {
      default: Progress,
      nav: NavBar
    }
  },
  {
    path: '/accountant/completed',
    components: {
      default: Completed,
      nav: NavBar
    }
  },
  {
    path: '/accountant/order/detail',
    name: 'detail',
    component: OrderDetail
  },
  {
    path: '/accountant/order-detail-step',
    name: 'orderDetailStep',
    component: OrderDetailStep
  },
  {
    path: '/accountant/',
    name: 'login',
    component: Login
  },
  {
    path: '/accountant/login',
    name: 'login',
    component: Login
  },
  {
    path: '/accountant/step1',
    name: 'step1',
    component: Step1
  },
  {
    path: '/accountant/step2',
    name: 'step2',
    component: Step2
  },
  {
    path: '/accountant/step3',
    name: 'step3',
    component: Step3
  },
  {
    path: '/accountant/step4',
    name: 'step4',
    component: Step4
  },
  {
    path: '/accountant/certification',
    name: 'certification',
    component: Certification
  },
  {
    path: '/accountant/forget',
    name: 'forget',
    component: Forget
  },
  {
    path: '/accountant/personal/amount/:id',
    name: 'amount',
    component: Amount
  },
  {
    path: '/accountant/personal',
    name: 'personal',
    component: PersonalCenter
  },
  {
    path: '/accountant/personal/my-info',
    name: 'myInfo',
    component: MyInfo
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

router.beforeEach((to, from, next) => {
  let path = to.query['path'] || 'order'
  let flag
  switch (to.path) {
    case '/accountant/login':
    case '/accountant/':
    case '/accountant':
    case '/':
    case '/accountant/step1':
    case '/accountant/step2':
    case '/accountant/step3':
    case '/accountant/step4':
    case '/accountant/certification':
    case '/accountant/forget':
      flag = true
      break
    case '/accountant/personal':
    case '/accountant/personal/my-info':
      break
    default:
      flag = false
      break
  }
  if (!store.getters.token && !flag) {
    next({ path: '/accountant/login?path=' + path })
  } else if (!store.getters.token && flag) {
    if (to.path === '/accountant/' || to.path === '/accountant') {
      next({path: '/accountant/login?path=' + path})
    } else {
      next()
    }
  } else {
    if ((to.path === '/accountant/' || to.path === '/accountant') && path !== 'center') {
      next({path: '/accountant/canOrder'})
    } else if ((to.path === '/accountant/' || to.path === '/accountant') && path === 'center') {
      next({path: '/accountant/personal'})
    } else {
      next()
    }
  }
})

router.afterEach(to => {
  switch (to.path) {
    case '/accountant/':
    case '/':
    case '/accountant':
    case '/accountant/login':
    case '/accountant/canOrder':
      document.title = '我要接单'
      break
    case '/accountant/progress':
      document.title = '进行中的订单'
      break
    case '/accountant/completed':
      document.title = '完成的订单'
      break
    case '/accountant/order/detail':
      document.title = '订单详情'
      break
    case '/accountant/step1':
    case '/accountant/step2':
    case '/accountant/step3':
    case '/accountant/certification':
      document.title = '进行认证'
      break
    case '/personal':
      document.title = '个人中心'
      break
    case '/not-found':
      document.title = '404'
      break
    default:
      break
  }
})

export default router
