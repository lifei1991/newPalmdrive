import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import DreamSchool from '@/components/DreamSchool'
import SeedPlan from '@/components/SeedPlan'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/dream',
      name: 'DreamSchool',
      component: DreamSchool
    },
    {
      path: '/seed',
      name: 'SeedPlan',
      component: SeedPlan
    }
  ]
})
