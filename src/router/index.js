import HelloWorld from '@/components/HelloWorld'
import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/components/Home'
// import DreamSchool from '@/components/DreamSchool'
// import SeedPlan from '@/components/SeedPlan'
// import ApplicationGuide from '@/components/ApplicationGuide'
// import News from '@/components/News'
// import DownMaterial from '@/components/DownMaterial'
// import MajorIntro from '@/components/MajorIntro'
// import Ability from '@/components/Ability'
// import TeacherIntro from '@/components/TeacherIntro'
// import FourToOne from '@/components/FourToOne'
// import StudentStory from '@/components/StudentStory'
// import Offers from '@/components/Offers'
// import BgPromote from '@/components/BgPromote'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/graduate',
      name: 'Home',
      // component: Home,
      component: resolve => (require(['@/components/Home'], resolve)),
      meta: {
        title: '研究生服务介绍'
      }
    },
    {
      path: '/news',
      name: 'News',
      component: resolve => (require(['@/components/News'], resolve))
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/dream',
      name: 'DreamSchool',
      component: resolve => (require(['@/components/DreamSchool'], resolve)),
      meta: {
        title: '梦校计划'
      }
    },
    {
      path: '/seed',
      name: 'SeedPlan',
      component: resolve => (require(['@/components/SeedPlan'], resolve)),
      meta: {
        title: '种子计划'
      }
    },
    {
      path: '/guide',
      name: 'ApplicationGuide',
      component: resolve => (require(['@/components/ApplicationGuide'], resolve)),
      meta: {
        title: '申请指南'
      }
    },
    {
      path: '/major',
      name: 'MajorIntro',
      component: resolve => (require(['@/components/MajorIntro'], resolve)),
      meta: {
        title: '专业介绍'
      }
    },
    {
      path: '/material',
      name: 'DownMaterial',
      component: resolve => (require(['@/components/DownMaterial'], resolve)),
      meta: {
        title: '资料下载'
      }
    },
    {
      path: '/ability',
      name: 'Ability',
      component: resolve => (require(['@/components/Ability'], resolve)),
      meta: {
        title: '能力提升'
      }
    },
    {
      path: '/teachers',
      name: 'TeacherIntro',
      component: resolve => (require(['@/components/TeacherIntro'], resolve)),
      meta: {
        title: '导师介绍'
      }
    },
    {
      path: '/four_to_one',
      name: 'FourToOne',
      component: resolve => (require(['@/components/FourToOne'], resolve)),
      meta: {
        title: '四位一体'
      }
    },
    {
      path: '/story',
      name: 'StudentStory',
      component: resolve => (require(['@/components/StudentStory'], resolve)),
      meta: {
        title: '学员故事'
      }
    },
    {
      path: '/offers',
      name: 'Offers',
      component: resolve => (require(['@/components/Offers'], resolve)),
      meta: {
        title: '申请季offer'
      }
    },
    {
      path: '/bg_promote',
      name: 'BgPromote',
      component: resolve => (require(['@/components/BgPromote'], resolve)),
      meta: {
        title: '背景提升'
      }
    },
    {
      path: '/test',
      name: 'Test',
      component: resolve => (require(['@/components/Test'], resolve)),
      meta: {
        title: '测试页面'
      }
    },
    {
      path: '/high_school',
      name: 'HighSchool',
      component: resolve => (require(['@/components/HighSchool'], resolve)),
      meta: {
        title: '申请初高中'
      }
    },
    {
      path: '/walnut',
      name: 'Walnut',
      component: resolve => (require(['@/components/Walnut'], resolve)),
      meta: {
        title: '核桃英语'
      }
    }
  ]
})
