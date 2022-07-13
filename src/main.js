import Vue from 'vue'

import 'normalize.css/normalize.css' // 让不同的浏览器标签渲染结果一样，第三方css库

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' // 国际化/英文

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'

import '@/icons' // icon
import '@/permission' // 路由守卫，权限控制

/**
 * If you don't want to use mock-server      mock模拟后台数据，不需要就可以注释禁用
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
// if (process.env.NODE_ENV === 'production') {
//   const { mockXHR } = require('../mock')
//   mockXHR()
// }

// set ElementUI lang to EN
Vue.use(ElementUI, { locale })
// 如果想要中文版 element-ui，按如下方式声明
// Vue.use(ElementUI)

Vue.config.productionTip = false // 控制台有白色提示，禁掉

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
