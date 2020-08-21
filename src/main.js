// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
// import { Popover, Dialog } from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import VueResource from 'vue-resource'
// import axios from 'axios'
// import $ from 'jquery'

Vue.use(ElementUI)
// Vue.use(Popover)
// Vue.use(Dialog)
Vue.use(VueResource)
// Vue.use(axios)
Vue.config.productionTip = false
// window.jquery = window.$ = $

// 每次跳转到页面顶部
// router.afterEach((to, from, next) => {
//   window.scrollTo(0, 0)
// })

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
