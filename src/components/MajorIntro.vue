<template>
  <div class="major">
    <!-- <remote-css rel="stylesheet" href="../assets/third/carousel/owl.theme.css"></remote-css>
    <remote-css rel="stylesheet" href="../assets/third/carousel/owl.carousel.css"></remote-css> -->

    <div v-if="!isMobile" class="web-div">
      <div class="banner1-div">
        <div class="banner1" :style="{backgroundImage:'url(' + banner1 + ')'}">
        </div>
      </div>

      <div class="menu">
        <ul class="guide-item-div" >
          <li v-for="(item, index) in dynamicTypes" :key="item.name" @click="changeGuideType(index)" :class="{ 'guide-bg-colors' : index == currentType }">
            <div class="img" :style="{backgroundImage:'url(' + (index == currentType ? item.img1 : item.img) + ')'}"></div>
            <div class="text">{{ item.name }}</div>
          </li>
        </ul>
      </div>

      <div>
        <div class="banner2-div" v-for="(eachArray, ind) in selectedGuide" :key="ind" v-if="ind < maxNumber">

          <div class="carousel-div">
            <div class="each-dynamic" v-for="(item, index) in eachArray" :key="index">
              <div class="logo">PALMDRIVE</div>
              <div class="dynamic-img" :style="{backgroundImage:'url(' + item.img + ')'}"></div>
              <div class="title" @click="goToDetail(currentType, 4 * ind + index)">{{ item.title }}</div>
              <div class="text">{{ item.text }}</div>
              <div class="more" @click="goToDetail(currentType, 4 * ind + index)">阅读全文 <img src="../assets/img/home/more-green.png" class="more-img" /></div>
              <div class="bottom-green"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="more-guides" @click="loadMoreGuide" v-if="!(maxNumber > 2 || selectedGuide.length <=2)">
        <span>查看更多</span>
        <div class="open-more-img"></div>
      </div>

      <div class="banner3-div">
        <div class="img1" @click="goUrl('/guide')" ></div>
        <div class="img2" @click="goUrl('/material')"></div>
      </div>
    </div>

    <div v-if="isMobile" class="mobile-div">
      <div class="banner1-div">
        <div class="banner1" :style="{backgroundImage:'url(' + banner1 + ')'}">
        </div>
      </div>

      <div class="menu">
        <ul class="guide-item-div" >
          <li v-for="(item, index) in dynamicTypes" :key="item.name" @click="changeGuideType(index)" :class="{ 'guide-bg-colors' : index == currentType }">
            <div class="img" :style="{backgroundImage:'url(' + (index == currentType ? item.img1 : item.img) + ')'}"></div>
            <div class="text">{{ item.name }}</div>
          </li>
        </ul>
      </div>

      <div>
        <div class="banner2-div" v-for="(eachArray, ind) in selectedGuide" :key="ind" v-if="ind < maxNumber">

          <div class="carousel-div">
            <div class="each-dynamic" v-for="(item, index) in eachArray" :key="index">
              <div class="logo">PALMDRIVE</div>
              <div class="dynamic-img" :style="{backgroundImage:'url(' + item.img + ')'}"></div>
              <div class="title" @click="goToDetail(currentType, 4 * ind + index)">{{ item.title }}</div>
              <div class="text">{{ item.text }}</div>
              <div class="more" @click="goToDetail(currentType, 4 * ind + index)">阅读全文 <img src="../assets/img/home/more-green.png" class="more-img" /></div>
              <div class="bottom-green"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="more-guides" @click="loadMoreGuide" v-if="!(maxNumber > 2 || selectedGuide.length <=2)">
        <span>查看更多</span>
        <div class="open-more-img"></div>
      </div>

      <div class="banner3-div">
        <div class="img1" @click="goUrl('/guide')" ></div>
        <div class="img2" @click="goUrl('/material')"></div>
      </div>
    </div>

  </div>
</template>

<script>
// import ca from require('../assets/third/carousel/owl.carousel.min.js'
import Common from './common/common'

export default {
  components: {
    'remote-css': {
      render (createElement) {
        return createElement('link', { attrs: { rel: 'stylesheet', href: this.href } })
      },
      props: {
        href: { type: String, required: true }
      }
    },
    'remote-js': {
      render (createElement) {
        return createElement('script', { attrs: { type: 'text/javascript', src: this.src } })
      },
      props: {
        src: { type: String, required: true }
      }
    }
  },
  name: 'Home',
  data () {
    return {
      isMobile: Common.isMobile,
      guides: [
        [
          {
            'img': './static/img/majorIntro/wk/2.jpg',
            'title': '在哈佛学反恐丨藤校中东研究真面目',
            'text': '听说这里的中东没有恐怖主义和战乱',
            'type': '文科'
          },
          {
            'img': './static/img/majorIntro/wk/3.jpg',
            'title': '开放又谨慎，老师比学生还多丨哥大东亚研究真面目',
            'text': '你一定没有见过这样的常春藤',
            'type': '文科'
          },
          {
            'img': './static/img/majorIntro/wk/4.jpg',
            'title': '连新垣结衣都喜欢的专业长啥样？ | 伦敦政治经济学院LLM项目真面目',
            'text': 'LSE的教授都怎么样？申请LLM项目有哪些限制？点进来，满足你的好奇心',
            'type': '文科'
          },
          {
            'img': './static/img/majorIntro/wk/5.jpg',
            'title': '你们的老公是我校友 | 伦敦大学学院经济、国家和社会研究专业真面目',
            'text': '伦敦大学学员经济、国家和社会专业研究',
            'type': '文科'
          },
          {
            'img': './static/img/majorIntro/wk/6.jpg',
            'title': '交一份学费 竟然能读到两个学位 | 哥伦比亚大学公共管理学真面目',
            'text': '哥大公共管理专业大揭秘',
            'type': '文科'
          },
          {
            'img': './static/img/majorIntro/wk/7.jpg',
            'title': '碧昂斯、蕾哈娜都不算啥，经手的巨星一把抓 | 伦敦国王学院文化创意专业真面目',
            'text': '伦敦国王学院文化创意专业项目大揭秘~',
            'type': '文科'
          },
          {
            'img': './static/img/majorIntro/wk/8.jpg',
            'title': '集老师、网红、卖煎饼于一身的专业究竟长啥样？ | 纽约大学对外英语教学真面目',
            'text': '纽约大学对外英语教学大揭秘',
            'type': '文科'
          },
          {
            'img': './static/img/majorIntro/wk/9.jpg',
            'title': '申请难度低、好移民、能打工的澳洲到底怎么样？| 麦考瑞大学国际传播专业真面目',
            'text': '麦考瑞大学国际传播专业揭秘',
            'type': '文科'
          },
          {
            'img': './static/img/majorIntro/wk/10.jpg',
            'title': '本科交流交换助力背景提升 | 加州大学洛杉矶分校本科交换项目真面目',
            'text': '加州大学洛杉矶分校交换项目大揭秘',
            'type': '文科'
          }
        ],
        [
          {
            'img': './static/img/majorIntro/lgk/2.jpg',
            'title': '美国总统的摇篮、图书馆孤本众多、斗牛犬是吉祥物丨耶鲁统计学真面目',
            'text': '这大概是耶鲁大学统计学项目最全全全全全全的揭秘了',
            'type': '理工科'
          },
          {
            'img': './static/img/majorIntro/lgk/3.jpg',
            'title': '被硅谷追着发offer是种什么体验？ | 斯坦福机械工程真面目',
            'text': '斯坦福机械工程专业到底有多牛？棕榈给你全解析',
            'type': '理工科'
          },
          {
            'img': './static/img/majorIntro/lgk/4.jpg',
            'title': '电锯杀人狂没碰上 石油倒是挖了一大把 | 德克萨斯石油工程真面目',
            'text': '德克萨斯石油专业大起底~',
            'type': '理工科'
          },
          {
            'img': './static/img/majorIntro/lgk/5.jpg',
            'title': '藏在湖光山色里的高贵 | 康奈尔大学经济学真面目',
            'text': '康奈尔大学经济学大揭秘',
            'type': '理工科'
          },
          {
            'img': './static/img/majorIntro/lgk/6.jpg',
            'title': '在美国顶尖会计名校就读是怎样一种体验？ | 美国大学会计专业真面目',
            'text': '美国顶级会计名校推荐~',
            'type': '理工科'
          },
          {
            'img': './static/img/majorIntro/lgk/7.jpg',
            'title': '就业万金油专业，金融、科研、咨询通通收入囊中 |哥伦比亚大学运筹学真面目',
            'text': '哥伦比亚大学运筹学',
            'type': '理工科'
          },
          {
            'img': './static/img/majorIntro/lgk/8.jpg',
            'title': '在“中西部哈佛”和耶鲁读生物统计是什么体验？ | 生物统计专业真面目',
            'text': '生物统计项目大揭秘',
            'type': '理工科'
          },
          {
            'img': './static/img/majorIntro/lgk/9.jpg',
            'title': '水校、网红扎堆？在哥大读DS的真实体验很颠覆！|哥大DS项目揭秘',
            'text': '哥大读DS是一种怎样的体验？',
            'type': '理工科'
          }
        ],
        [
          {
            'img': './static/img/majorIntro/sk/2.jpg',
            'title': '全美排名第四的MBA项目大揭秘 | 西北大学MBA项目真面目',
            'text': '西北大学MBA项目揭秘',
            'type': '商科'
          },
          {
            'img': './static/img/majorIntro/sk/3.jpg',
            'title': '谁说巴黎高商party多 也就一周一次而已嘛 | 巴黎高商国际商务专业真面目',
            'text': '巴黎高商国际商务专业大揭秘',
            'type': '商科'
          },
          {
            'img': './static/img/majorIntro/sk/4.jpg',
            'title': '毕业不需要写论文，毕业后还有三年OPT | 罗切斯特大学市场营销分析专业真面目',
            'text': '罗切斯特大学 市场营销分析专业',
            'type': '商科'
          },
          {
            'img': './static/img/majorIntro/sk/5.jpg',
            'title': '打败牛津剑桥 威廉王子最爱的学校长啥样 | 圣安德鲁斯大学市场营销真面目',
            'text': '圣诞德鲁斯市场营销专业大起底',
            'type': '商科'
          },
          {
            'img': './static/img/majorIntro/sk/6.jpg',
            'title': '被称为“南方哈佛”的学校到底有多牛？ | 杜克大学管理学真面目',
            'text': '杜克大学管理学大揭秘',
            'type': '商科'
          },
          {
            'img': './static/img/majorIntro/sk/7.jpg',
            'title': '​一年修完三学期课，毕业就职麦肯锡、高盛是什么神仙项目？ | JHU金融项目',
            'text': '在 JHU读金融是一种什么体验？',
            'type': '商科'
          },
          {
            'img': './static/img/majorIntro/sk/8.jpg',
            'title': '双非如何跨专业申请全美Top 30大学的BA项目？| 罗彻斯特大学商业分析项目',
            'text': '从双非到全美top30大学，就读罗哒BA项目的一手体验是？',
            'type': '商科'
          },
          {
            'img': './static/img/majorIntro/sk/9.jpg',
            'title': '全美前十商学院，毕业就业“包分配”？丨杜克 MQM 就读体验',
            'text': '全美Top的真“南方哈佛”，头号商科热门项目的真实就读体验！',
            'type': '商科'
          }
        ],
        []
      ],
      dynamicTypes: [
        {
          name: '文科',
          img: require('../assets/img/majorIntro/guides/menu1.png'),
          img1: require('../assets/img/majorIntro/guides/menu1-1.png')
        },
        {
          name: '理工科',
          img: require('../assets/img/majorIntro/guides/menu2.png'),
          img1: require('../assets/img/majorIntro/guides/menu2-1.png')
        },
        {
          name: '商科',
          img: require('../assets/img/majorIntro/guides/menu3.png'),
          img1: require('../assets/img/majorIntro/guides/menu3-1.png')
        }
        // {
        //   name: '艺术类',
        //   img: require('../assets/img/majorIntro/guides/menu4.png'),
        //   img1: require('../assets/img/majorIntro/guides/menu4-1.png')
        // }
      ],
      banner1: '',
      maxNumber: 2,
      currentType: 0,
      selectedGuide: []
    }
  },
  created () {
    // this.$nextTick(() => {
    //   const axios = require('axios')
    //   let that = this
    //   axios.get('http://www.palmdrive.cn/v2/static/json/majorIntro.json').then(
    //   // axios.get('http://localhost:8080/static/json/majorIntro.json').then(
    //     (res) => {
    //       that.guides = res.data
    //       // that.$set(that, 'guides', res.data)
    //       that.changeGuideType(that.currentType)
    //     }
    //   )
    // }
    // )

    // this.guides = require('../../static/json/majorIntro.json')
    this.banner1 = this.isMobile ? require('../assets/img/majorIntro/mobile/banner1.png') : require('../assets/img/majorIntro/banner1.png')
    this.changeGuideType(this.currentType)
  },
  mounted () {
    window.scrollTo(0, 0)
  },
  methods: {
    changeGuideType (index) {
      this.currentType = index
      this.maxNumber = 2
      this.selectedGuide = []

      for (var i = 0; i < this.guides[index].length; i += 4) {
        this.selectedGuide.push(this.guides[index].slice(i, i + 4))
      }

      // this.selectedGuide = this.guides[index]
    },
    loadMoreGuide () {
      this.maxNumber = 100
    },
    goUrl (url) {
      this.showMenus = false
      this.$router.push({
        path: url
      })
    },
    goToDetail (ind, index) {
      let routeUrl = this.$router.resolve({
        path: '/news',
        query: {
          index1: ind,
          index2: index,
          jsonName: 'majorIntro.json'

        }
      })
      window.open(routeUrl.href, '_blank')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.major {
  text-align: center;

  .web-div {
    .banner1-div {
      width: 100%;
      padding: 32px 0 32px;
      background-color: #21C3B6;

      .banner1 {
        width: 1071px;
        height: 417px;
        margin: 0 auto;
        position: relative;
        text-align: left;
        background-repeat: no-repeat;
        background-size: cover;

        .info1-div {
          position: absolute;
          top: 296px;
          left: 59px;
        }

        .info2-div {
          position: absolute;
          top: 357px;
          left: 59px;
        }

        .info3-div {
          position: absolute;
          top: 418px;
          left: 59px;
        }

        .info-number {
          width: 75px;
          font-size:28px;
          font-family:Biko;
          font-weight:bold;
          line-height:35px;
          color:rgba(40,167,169,1);
          opacity:1;
          margin-right: 12px;
          display: inline-block;
          height: 28px;
        }

        .info-text {
          width: 93px;
          font-size:12px;
          font-family:SourceHanSansCN;
          font-weight:bold;
          line-height:14px;
          color:rgba(57,60,61,1);
          opacity:1;
          display: inline-block;
          height: 28px;
          vertical-align: top;
        }

        .text {
          position: absolute;
          top: 468px;
          left: 24px;

          font-size:12px;
          font-family:Biko;
          font-weight:400;
          line-height:12px;
          color:rgba(255,255,255,1);
          opacity:1;
        }
      }
    }

    .menu {
      .guide-item-div {
        list-style: none;
        text-align: center;
        padding: 0;
        margin: 66px auto 89px;
        width: 470px;
        // width: 630px;
        background:rgba(250,255,255,1);
        box-shadow:-2px 3px 15px rgba(91,98,97,0.16);
        opacity:1;
        border-radius:83px;

        li {
          width: 150px;
          height: 51px;
          opacity: 1;
          margin-right: 10px;
          display: inline-block;
          color: rgba(57,60,61,1);
          cursor: pointer;
          text-align: center;

          .img {
            width:24px;
            height:24px;
            // background:rgba(255,255,255,1);
            box-shadow:3px 3px 6px rgba(0,0,0,0.16);
            border-radius:50%;
            opacity:1;
            margin-top: 13px;
            background-repeat: no-repeat;
            background-size: cover;
            display: inline-block;
            margin-right: 10px;
          }

          .text {
            display: inline-block;
            font-size: 18px;
            font-family: SourceHanSansCN;
            font-weight: 500;
            line-height: 24px;
            margin-top: 13px;
            vertical-align: top;
            height: 24px;
          }
        }

        li:last-child {
            margin-right: 0;
        }

        .guide-bg-colors {
          color:#FFFFFF;
          font-weight:bold;
          background:rgba(29,195,182,1);
          box-shadow:0px 3px 6px rgba(0,0,0,0.16);
          opacity:1;
          border-radius:83px;
        }
      }
    }

    .banner2-div {
      // padding: 42px 0 40px;
      background-color: #F8F8F8;
      text-align: center;
      margin-bottom: 25px;

      .carousel-div {
        width: 1200px;
        margin: 0 auto;
        text-align: center;

        .each-dynamic {
          padding: 20px 19px 0;
          background:rgba(255,255,255,1);
          box-shadow:5px 5px 6px rgba(47,47,47,0.21);
          opacity:1;
          width: 218px;
          margin-bottom: 25px;
          display: inline-block;
          margin: 42px 10px 39px;
          text-align: left;

          .logo {
            font-size:13px;
            font-family:Campton;
            font-weight:bold;
            line-height:13px;
            color:rgba(190,190,190,1);
            opacity:1;
          }

          .dynamic-img {
            margin: 11px 0 17px;
            width: 218px;
            height: 141px;
            background-repeat: no-repeat;
            background-size: cover;
          }

          .title {
            font-size:16px;
            font-family:SourceHanSansCN;
            font-weight:bold;
            line-height:24px;
            color:rgba(0,0,0,1);
            opacity:1;
            cursor: pointer;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
            height: 48px;
          }

          .title:hover {
            color: #2aa7aa;
          }

          .text {
            font-family:SourceHanSansCN, CamptonLight;
            font-size:12px;
            font-weight:400;
            line-height:18px;
            color:rgba(82,82,82,1);
            opacity:1;
            margin: 12px 0 12px;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
            overflow: hidden;
            height: 54px;
          }

          .more {
            font-size:9px;
            font-family:SourceHanSansCN;
            font-weight:500;
            line-height:16px;
            color:rgba(65,64,64,1);
            opacity:1;
            margin-bottom: 28px;
            cursor: pointer;

            .more-img {
              width: 10px;
              height: 10px;
              display: inline-block;
              margin-left: 8px;
            }
          }

          .more:hover {
            color: #2aa7aa;
          }

          .bottom-green {
            height:5px;
            background:rgba(34,195,182,1);
            opacity:1;
            margin: 0 -18px;
          }
        }

        .each-dynamic:hover {
          transform: scale(1.1);
          transition-duration: 0.5s;
        }
      }
    }

    .banner2-div:last-child {
      margin-bottom: 0 !important;
    }

    .more-guides {
      font-size:14px;
      font-family:SourceHanSansCN;
      font-weight:400;
      line-height:14px;
      color:rgba(72,72,72,1);
      opacity:1;
      padding: 32px 0 51px;
      background-color: #F8F8F8;
      cursor: pointer;

      .open-more-img {
        width: 26px;
        height: 10px;
        display: inline-block;
        margin-left: 8px;
        cursor: pointer;
        background-image: url("../assets/img/dreamSchool/openArrow.png");
        background-repeat: no-repeat;
        background-size: cover;
      }
    }

    .banner3-div {
      padding: 34px 0 68px;
      background-color: #FFF;
      text-align: center;

      .img1 {
        width: 478px;
        height: 236px;
        display: inline-block;
        margin:0 21px;
        background-image: url("../assets/img/applicationGuide/applicationGuide.png");
        background-repeat: no-repeat;
        background-size: cover;
        box-shadow:5px 5px 6px rgba(47,47,47,0.21);
        border-radius: 18px;
        cursor: pointer;
      }

      .img1:hover {
        transform: scale(1.1);
        transition-duration: 0.5s;
      }

      .img2 {
        width: 478px;
        height: 236px;
        display: inline-block;
        margin:0 21px;
        background-image: url("../assets/img/applicationGuide/downMaterial.png");
        background-repeat: no-repeat;
        background-size: cover;
        box-shadow:5px 5px 6px rgba(47,47,47,0.21);
        border-radius: 18px;
        cursor: pointer;
      }

      .img2:hover {
        transform: scale(1.1);
        transition-duration: 0.5s;
      }
    }
  }

  .mobile-div {
    .banner1-div {
      width: 100%;
      background-color: #21C3B6;
      padding-top: .826667rem;
      padding-bottom: 1.066667rem;

      .banner1 {
        width: 9.013333rem;
        height: 4.4rem;
        margin: 0 auto;
        position: relative;
        text-align: left;
        background-repeat: no-repeat;
        background-size: cover;
      }
    }

    .menu {
      .guide-item-div {
        list-style: none;
        text-align: center;
        padding: 0;
        margin: .88rem auto .506667rem;
        width: 8rem;
        // background:rgba(250,255,255,1);
        // box-shadow:0px 3px 15px rgba(91,98,97,0.16);
        opacity:1;
        // border-radius:83px;

        li {
          width: 1.84rem;
          height: .586667rem;
          opacity: 1;
          margin: 0 .186667rem;
          display: inline-block;
          color: rgba(57,60,61,1);
          cursor: pointer;
          text-align: center;
          background: #E8E8EE;
          border-radius: .346667rem;
          margin-bottom: .373333rem;

          .img {
            width:.373333rem;
            height:.373333rem;
            // background:rgba(255,255,255,1);
            box-shadow:3px 3px 6px rgba(0,0,0,0.16);
            border-radius:50%;
            opacity:1;
            margin-top: .106667rem;
            background-repeat: no-repeat;
            background-size: cover;
            display: inline-block;
            margin-right: .106667rem;
          }

          .text {
            display: inline-block;
            font-size: .32rem;
            font-family: SourceHanSansCN;
            font-weight: 500;
            line-height: .586667rem;
            // margin-top: 13px;
            vertical-align: top;
            height: .586667rem;
          }
        }

        // li:last-child {
        //     margin-right: 0;
        // }

        .guide-bg-colors {
          color:#FFFFFF;
          font-weight:bold;
          background:rgba(29,195,182,1);
          box-shadow:0px 3px 6px rgba(0,0,0,0.16);
          opacity:1;
          border-radius:83px;
        }
      }
    }

    .banner2-div {
      // padding: 42px 0 40px;
      background-color: #F8F8F8;
      text-align: center;
      // margin-bottom: 25px;

      .carousel-div {
        // width: 1200px;
        margin: 0 auto;
        text-align: center;

        .each-dynamic {
          padding: .32rem .32rem 0;
          background:rgba(255,255,255,1);
          box-shadow:5px 5px 6px rgba(47,47,47,0.21);
          opacity:1;
          width: 3.68rem;
          margin-bottom: .666667rem;
          display: inline-block;
          margin: .666667rem .133333rem .666667rem;
          text-align: left;
          vertical-align: top;

          .logo {
            font-size:.293333rem;
            font-family:Campton;
            font-weight:bold;
            line-height:.293333rem;
            color:rgba(190,190,190,1);
            opacity:1;
          }

          .dynamic-img {
            margin: .213333rem 0 .16rem;
            width: 3.626667rem;
            height: 2.346667rem;
            background-size: cover;
            background-repeat: no-repeat;
          }

          .title {
            font-size:.373333rem;
            font-family:SourceHanSansCN;
            font-weight:bold;
            line-height:.48rem;
            color:rgba(0,0,0,1);
            opacity:1;
            cursor: pointer;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
            overflow: hidden;
            height: 1.466667rem;
          }

          .title:hover {
            color: #2aa7aa;
          }

          .text {
            font-family:SourceHanSansCN, CamptonLight;
            font-size:.32rem;
            font-weight:400;
            line-height:.426667rem;
            color:rgba(82,82,82,1);
            opacity:1;
            margin: .266667rem 0 .293333rem;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 4;
            overflow: hidden;
            height: 1.733333rem;
          }

          .more {
            font-size:.266667rem;
            font-family:SourceHanSansCN;
            font-weight:500;
            line-height:.32rem;
            color:rgba(65,64,64,1);
            opacity:1;
            margin-bottom: .506667rem;
            cursor: pointer;

            .more-img {
              width: .24rem;
              height: .24rem;
              display: inline-block;
              margin-left: .08rem;
            }
          }

          .more:hover {
            color: #2aa7aa;
          }

          .bottom-green {
            height:5px;
            background:rgba(34,195,182,1);
            opacity:1;
            margin: 0 -.293333rem;
          }
        }
      }
    }

    .banner2-div:last-child {
      margin-bottom: 0 !important;
    }

    .more-guides {
      font-size:.32rem;
      font-family:SourceHanSansCN;
      font-weight:400;
      line-height:.533333rem;
      color:rgba(72,72,72,1);
      opacity:1;
      // padding: 32px 0 51px;
      cursor: pointer;
      width:1.866667rem;
      border:2px solid rgba(42,168,154,1);
      border-radius:21px;
      margin: .746667rem auto 0;
      padding: 0px .213333rem;

      .open-more-img {
        width: .32rem;
        height: .133333rem;
        display: inline-block;
        margin-left: .16rem;
        cursor: pointer;
        background-image: url("../assets/img/dreamSchool/openArrow.png");
        background-repeat: no-repeat;
        background-size: cover;
        opacity: .5;
        vertical-align: middle;
      }
    }

    .banner3-div {
      padding: .8rem 0 1.013333rem;
      background-color: #FFF;
      text-align: center;

      .img1 {
        width: 8rem;
        height: 4rem;
        // display: inline-block;
        margin:0 auto .4rem;
        background-image: url("../assets/img/applicationGuide/applicationGuide.png");
        background-repeat: no-repeat;
        background-size: cover;
        box-shadow:5px 5px 6px rgba(47,47,47,0.21);
        border-radius: 18px;
        cursor: pointer;
      }

      .img2 {
        width: 8rem;
        height: 4rem;
        // display: inline-block;
        margin:0 auto;
        background-image: url("../assets/img/applicationGuide/downMaterial.png");
        background-repeat: no-repeat;
        background-size: cover;
        box-shadow:5px 5px 6px rgba(47,47,47,0.21);
        border-radius: 18px;
        cursor: pointer;
      }
    }
  }
}
</style>
