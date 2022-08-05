// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
// import { Popover, Dialog } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueResource from 'vue-resource'
// import axios from 'axios'
// import $ from 'jquery'
import VueAnimateNumber from 'vue-animate-number'

// import i18n from './old/lang/index'
// import { createI18n } from 'vue-i18n'

Vue.use(ElementUI)
// Vue.use(Popover)
// Vue.use(Dialog)
Vue.use(VueResource)
// Vue.use(axios)
Vue.config.productionTip = false
// window.jquery = window.$ = $
Vue.use(VueAnimateNumber)

// Vue.use(createI18n)

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

// eslint-disable-next-line new-cap
// const i18n = new createI18n({
//   locale: 'zh-CN', // 语言标识
//   messages: {
//     'zh': require('./old/lang/zh'), // 通过require引入中文语言包
//     'en': require('./old/lang/en') // 通过require引入英文语言包
//   }
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // i18n,
  components: { App },
  template: '<App/>'
})
