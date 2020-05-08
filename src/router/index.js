import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import DreamSchool from '@/components/DreamSchool'
import SeedPlan from '@/components/SeedPlan'
import ApplicationGuide from '@/components/ApplicationGuide'
import News from '@/components/News'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/graduate',
      name: 'Home',
      component: Home
    },
    {
      path: '/news',
      name: 'News',
      component: News
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
    },
    {
      path: '/guide',
      name: 'ApplicationGuide',
      component: ApplicationGuide
    }
  ]
})
