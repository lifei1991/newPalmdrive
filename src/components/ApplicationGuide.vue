<template>
  <div class="guide">
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
        <div class="img1" @click="goUrl('/material')" ></div>
        <div class="img2" @click="goUrl('/major')"></div>
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
        <div class="img1" @click="goUrl('/material')" ></div>
        <div class="img2" @click="goUrl('/major')"></div>
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
            'img': './static/img/applicationGuide/gh/2.jpg',
            'title': '干货丨热门留学国家优势大盘点，明明白白做选择！',
            'text': '不知如何选择留学国家，或许这篇可以帮助你！',
            'type': '规划'
          },
          {
            'img': './static/img/applicationGuide/gh/3.jpg',
            'title': '去留学原来要花那么多钱？硬核版省钱攻略来了！',
            'text': '每位留学生都改Mark的留学省钱指南请注意查收！',
            'type': '规划'
          },
          {
            'img': './static/img/applicationGuide/gh/4.jpg',
            'title': '选专业干货秘籍！学会这个方法，选专业不再是难题',
            'text': '专业选择其实很简单，四个步骤就搞定。',
            'type': '规划'
          },
          {
            'img': './static/img/applicationGuide/gh/5.jpg',
            'title': '申请模式掌握这七点！留学规划比别人轻松好几倍...',
            'text': '如何掌握正确的申请模式？这些套路助力你轻松搞定！',
            'type': '规划'
          },
          {
            'img': './static/img/applicationGuide/gh/6.jpg',
            'title': '最新院校选择攻略已出，不知道这些操作的你可能连学都上不了了...',
            'text': '众多高校难以抉择？超详尽院校选择方法来啦！',
            'type': '规划'
          },
          {
            'img': './static/img/applicationGuide/gh/7.jpg',
            'title': 'UCLA交换、剑桥暑校、埃森哲实习……我用经历告诉你，本科阶段如何进行时间规划！',
            'text': '作为一个本科生，如何在求职大军中脱颖而出规划好自己的未来？',
            'type': '规划'
          },
          {
            'img': './static/img/applicationGuide/gh/8.jpg',
            'title': '如何在大学期间找到高质量实习？分享几点超级有用的方法',
            'text': '没有实习，何来offer？',
            'type': '规划'
          },
          {
            'img': './static/img/applicationGuide/gh/9.jpg',
            'title': '理工科＝难申请？快来 get 热门理工专业申请必杀技！丨理工科申请规划',
            'text': '理工科申请超全全程规划！照着走，offer到手！',
            'type': '规划'
          }
        ],
        [
          {
            'img': './static/img/applicationGuide/ws/2.jpg',
            'title': '不用钱的文书神器，请收下！',
            'text': '棕榈文书神器，面对疾风吧！',
            'type': '文书'
          },
          {
            'img': './static/img/applicationGuide/ws/3.jpg',
            'title': '你在出国留学文书里写过的最漂亮的句子是什么？',
            'text': '关于“转专业”的文书，我想这样写。',
            'type': '文书'
          },
          {
            'img': './static/img/applicationGuide/ws/4.jpg',
            'title': '同学你心真大，竟想一篇文书“走天下”……',
            'text': '没有重点的文书=没有offer，这是我听过最真的话~',
            'type': '文书'
          },
          {
            'img': './static/img/applicationGuide/ws/5.jpg',
            'title': '想当别人还在改文书时，你已名校 offer 到手？🤫来看看这个！丨绝密资料',
            'text': '回复【合集】你将免费体验“醍醐灌顶”数次，并受到一个别处难寻的无敌绝密资料',
            'type': '文书'
          }
        ],
        [
          {
            'img': './static/img/applicationGuide/jl/2.jpg',
            'title': '你的简历都不完整，还敢问学校为什么不录你？简历这样写才能拿 offer！丨讲座实录',
            'text': '如何打造属于你的发光简历（上）：简历和CV需要注意哪些细节？',
            'type': '简历'
          },
          {
            'img': './static/img/applicationGuide/jl/3.jpg',
            'title': '从申请萌新到圆梦名校！一份闪瞎招生官的简历应该长这样~',
            'text': '招生官：“啊啊啊啊我的眼睛”…',
            'type': '简历'
          },
          {
            'img': './static/img/applicationGuide/jl/4.jpg',
            'title': 'CV和Resume的具体区別在哪里？',
            'text': '万千疑问找谁解答？棕榈天团帮到你！',
            'type': '简历'
          },
          {
            'img': './static/img/applicationGuide/jl/5.jpg',
            'title': 'CV 写得好，offer 拿得早！这样“营销”个人背景让你更受名校青睐！',
            'text': '满分CV模书写法则~',
            'type': '简历'
          }
        ],
        [
          {
            'img': './static/img/applicationGuide/tjx/2.jpg',
            'title': '好的推荐信应该如何写？',
            'text': '是谁给你的勇气，敢说推荐信不重要？',
            'type': '推荐信'
          },
          {
            'img': './static/img/applicationGuide/tjx/3.jpg',
            'title': '推荐信的高级玩法！做到这些绝不踩雷丨讲座实录',
            'text': '为什么你的推荐信一看就是自己写的？',
            'type': '推荐信'
          },
          {
            'img': './static/img/applicationGuide/tjx/4.jpg',
            'title': '厉害了，我的推荐信 | 附优质推荐信模板',
            'text': '推荐信如何写？找谁写？怎样写？',
            'type': '推荐信'
          },
          {
            'img': './static/img/applicationGuide/tjx/5.jpg',
            'title': '和教授之间互动很少，那应该怎么求推荐信？',
            'text': '这是棕榈全新开设的一个固定栏目。在这里，棕榈天团（Service 团队的班主任和导师们）将会为你解答关于留学的所有疑惑',
            'type': '推荐信'
          }
        ],
        [
          {
            'img': './static/img/applicationGuide/ms/2.jpg',
            'title': '准备面试美国的大学，有哪些经验技巧值得参考？',
            'text': '这是棕榈全新开设的一个固定栏目。在这里，棕榈天团（Service 团队的班主任和导师们）将会为你解答关于留学的所有疑惑',
            'type': '面试'
          },
          {
            'img': './static/img/applicationGuide/ms/3.jpg',
            'title': '在面试官眼中，什么样的申请者才不会沦为“备胎”？',
            'text': '这是棕榈全新开设的一个固定栏目。在这里，棕榈天团（Service 团队的班主任和导师们）将会为你解答关于留学的所有疑惑',
            'type': '面试'
          },
          {
            'img': './static/img/applicationGuide/ms/4.jpg',
            'title': '如何敲开顶尖商学院的大门？',
            'text': '面试可滔滔不绝，信手拈来，绝地反击而非前功尽弃',
            'type': '面试'
          },
          {
            'img': './static/img/applicationGuide/ms/5.jpg',
            'title': '有三个学位也敌不过面试“翻船”，学霸小姐姐破釜沉舟捞回梦校offer！',
            'text': '鬼知道我经历了什么……',
            'type': '面试'
          }
        ]
      ],
      dynamicTypes: [
        {
          name: '规划',
          img: require('../assets/img/applicationGuide/guides/menu1.png'),
          img1: require('../assets/img/applicationGuide/guides/menu1-1.png')
        },
        {
          name: '文书',
          img: require('../assets/img/applicationGuide/guides/menu2.png'),
          img1: require('../assets/img/applicationGuide/guides/menu2-1.png')
        },
        {
          name: '简历',
          img: require('../assets/img/applicationGuide/guides/menu3.png'),
          img1: require('../assets/img/applicationGuide/guides/menu3-1.png')
        },
        {
          name: '推荐信',
          img: require('../assets/img/applicationGuide/guides/menu4.png'),
          img1: require('../assets/img/applicationGuide/guides/menu4-1.png')
        },
        {
          name: '面试',
          img: require('../assets/img/applicationGuide/guides/menu5.png'),
          img1: require('../assets/img/applicationGuide/guides/menu5-1.png')
        }
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
    //   axios.get('http://www.palmdrive.cn/v2/static/json/applicationGuide.json').then(
    //   // axios.get('http://localhost:8080/static/json/applicationGuide.json').then(
    //     (res) => {
    //       that.guides = res.data
    //       // that.$set(that, 'guides', res.data)
    //       that.changeGuideType(that.currentType)
    //     }
    //   )
    // }
    // )

    // this.guides = require('../../static/json/applicationGuide.json')
    this.banner1 = this.isMobile ? require('../assets/img/applicationGuide/mobile/banner1.png') : require('../assets/img/applicationGuide/banner1.png')
    this.changeGuideType(this.currentType)
    window.scrollTo(0, 0)
  },
  mounted () {
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
          jsonName: 'applicationGuide.json'

        }
      })
      window.open(routeUrl.href, '_blank')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.guide {
  text-align: center;

  .web-div {
    .banner1-div {
      width: 100%;
      padding: 20px 0 37px;
      background-color: #21C3B6;

      .banner1 {
        width: 1067px;
        height: 424px;
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
        width: 790px;
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
          vertical-align: top;

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
            background-size: cover;
            background-repeat: no-repeat;
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
      padding: 0 0 31px;
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
        background-image: url("../assets/img/applicationGuide/downMaterial.png");
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
        background-image: url("../assets/img/applicationGuide/majorIntro.png");
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
      padding-top: .8rem;
      padding-bottom: .453333rem;

      .banner1 {
        width: 8.746667rem;
        height: 5.04rem;
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
        background-image: url("../assets/img/applicationGuide/downMaterial.png");
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
        background-image: url("../assets/img/applicationGuide/majorIntro.png");
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
