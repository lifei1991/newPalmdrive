import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import DreamSchool from '@/components/DreamSchool'
import SeedPlan from '@/components/SeedPlan'
import ApplicationGuide from '@/components/ApplicationGuide'
import News from '@/components/News'
import DownMaterial from '@/components/DownMaterial'
import MajorIntro from '@/components/MajorIntro'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/graduate',
      name: 'Home',
      component: Home,
      meta: {
        title: '研究生服务介绍'
      }
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
      component: DreamSchool,
      meta: {
        title: '梦校计划'
      }
    },
    {
      path: '/seed',
      name: 'SeedPlan',
      component: SeedPlan,
      meta: {
        title: '种子计划'
      }
    },
    {
      path: '/guide',
      name: 'ApplicationGuide',
      component: ApplicationGuide,
      meta: {
        title: '申请指南'
      }
    },
    {
      path: '/major',
      name: 'MajorIntro',
      component: MajorIntro,
      meta: {
        title: '专业介绍'
      }
    },
    {
      path: '/material',
      name: 'DownMaterial',
      component: DownMaterial,
      meta: {
        title: '资料下载'
      }
    }
  ]
})
