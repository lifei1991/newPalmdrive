<template>
  <div class="material">
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
              <!-- <div class="dynamic-img" :style="{backgroundImage:'url(' + require(item.img) + ')'}"></div> -->
              <img class="dynamic-img" :src="item.img"/>
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
              <!-- <div class="dynamic-img" :style="{backgroundImage:'url(' + require(item.img) + ')'}"></div> -->
              <img class="dynamic-img" :src="item.img"/>
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
  name: 'DownMaterial',
  data () {
    return {
      isMobile: Common.isMobile,
      guides: [
        [
          {
            'img': './static/img/downMaterial/yw/2.jpg',
            'title': '快收下！69天后的四六级还有救！完整版陪跑资料免费领取中...丨绝密资料 ',
            'text': '四六级陪跑计划启动，一次通关不是梦~',
            'type': '英文'
          },
          {
            'img': './static/img/downMaterial/yw/3.jpg',
            'title': '叮！今夏必看高分剧单已送到！教你看剧练听力口语的正确方式！丨绝密资料 ',
            'text': '不仅能拯救你的剧荒，还能拯救你的听力和口语！回复【剧单】即刻get！',
            'type': '英文'
          },
          {
            'img': './static/img/downMaterial/yw/4.jpg',
            'title': '10 所顶尖名校教授推荐最多的 45 本原版书，让你在留学前追上美本党！丨绝密资料 ',
            'text': '美国大学惊人的阅读量对中国学生是多大的挑战？是时候送大家一个书单了…',
            'type': '英文'
          },
          {
            'img': './static/img/downMaterial/yw/6.jpg',
            'title': '「史上最全」托雅、双G资料限时免费领！助力暑假冲刺！|绝密资料',
            'text': '限时！免费领取托福/雅思/GRE/GMAT最全资料！',
            'type': '英文'
          },
          {
            'img': './static/img/downMaterial/yw/7.jpg',
            'title': '让你6步从无到有搞定论文，从选题到答辩的 2.0 保姆级论文资料包来啦！丨绝密资料 ',
            'text': '2019年毕业论文写作攻略大礼包来啦~回复【答辩】即可免费领取~',
            'type': '表达力提升'
          },
          {
            'img': './static/img/downMaterial/yw/8.jpg',
            'title': '告别演讲恐惧症，迈出自信表达第一步！54G 表达秘籍带你练就一副好口才！丨绝密资料 ',
            'text': '不夸张地说，这是一周练就演讲好口才的秘籍。',
            'type': '表达力提升'
          },
          {
            'img': './static/img/downMaterial/yw/9.jpg',
            'title': '多邻国七月要出单项小分？7 天提升 20 分备考经验送上！丨多邻国资料免费领',
            'text': '多邻国备考指南，扫码回复【多邻国】更能领取资料大礼包！',
            'type': '表达力提升'
          },
          {
            'img': './static/img/downMaterial/yw/10.jpg',
            'title': '雅思托福双“G”复考在即，毫无准备的你确定不来抱下佛脚？丨绝密资料',
            'text': '超全雅思/托福/GRE/GMAT复习资料一站式配齐！扫码回复【家考】免费领取！',
            'type': '表达力提升'
          }
        ],
        [
          {
            'img': './static/img/downMaterial/bjts/2.jpg',
            'title': '寒假逆袭的 N 种方案！冬季学校、大厂实习、交流课程……等背景提升利器已备好！丨绝密资料 ',
            'text': '2020寒校合集&实习内推&寒假课程……',
            'type': '背景提升'
          },
          {
            'img': './static/img/downMaterial/bjts/3.jpg',
            'title': '暑研=牛推+学术背景?🤐别傻了，申请之前看看这个！丨绝密资料 ',
            'text': '“暑研真实留学万能灵药啊！”醒醒了，同学，你知道怎么申请吗？',
            'type': '背景提升'
          },
          {
            'img': './static/img/downMaterial/bjts/4.jpg',
            'title': '200+暑期项目启动！海内外实习/暑期科研/国际义工/旅行攻略……走！这个夏天做点不一样的！丨绝密资料',
            'text': '扫码回复【暑假】领取2019海内外暑期实习/义工/科研项目资料……',
            'type': '背景提升'
          },
          {
            'img': './static/img/downMaterial/bjts/5.jpg',
            'title': '你还没穿秋裤，2019 年的暑研、夏校、实习已经开始申请了🤣丨绝密资料 ',
            'text': '暑期研究攻略、国内外summer school、暑期实习项目……回复【暑期】领取',
            'type': '背景提升'
          },
          {
            'img': './static/img/downMaterial/bjts/6.jpg',
            'title': '转专业没上先修课，成绩再高都白搭？防失学秘籍来了！丨绝密资料',
            'text': '先修课程弥补计划已开启！',
            'type': '背景提升'
          },
          {
            'img': './static/img/downMaterial/bjts/7.jpg',
            'title': '500+ 海外义工旅行项目 & 暑期实习资源大放送，这个夏天不虚度！丨绝密项目 ',
            'text': '嗨，你好呀~马上就要到暑假了，想不想在暑假干一些更有意义的项目',
            'type': '背景提升'
          },
          {
            'img': './static/img/downMaterial/bjts/8.jpg',
            'title': '那些科研背景过硬、拿下牛推、进入名校的同学都做了些什么？丨绝密资料 ',
            'text': '想提升个人学术背景？想为留学保研助力？回复【科研】限时免费领取',
            'type': '背景提升'
          },
          {
            'img': './static/img/downMaterial/bjts/9.jpg',
            'title': '留学、保研“大杀器”！数学建模了解一下？丨绝密资料 ',
            'text': '新手小白入门数学建模：数模论文、算法、软件、基本模型……回复【数模】限时免费领取',
            'type': '背景提升'
          }
        ],
        [
          {
            'img': './static/img/downMaterial/sqgh/1.jpg',
            'title': '好就业，高薪资，留美 STEM 专业大盘点丨绝密资料',
            'text': '如何确认就读的专业算不算STEM？回复【STEM】领取超全资料包！',
            'type': '申请干货资料'
          },
          {
            'img': './static/img/downMaterial/sqgh/2.jpg',
            'title': '清华排名超耶鲁、哥大？四大排行榜究竟谁更靠谱？ ∣ 绝密资料',
            'text': '世界大学排行榜大全。',
            'type': '申请干货资料'
          },
          {
            'img': './static/img/downMaterial/sqgh/3.jpg',
            'title': '英国香港新加坡这么早就发 offer 了？这里有一份全套申请材料必备 checklist 等待你查收！|绝密资料',
            'text': '揭秘英港新申请那些事~内附可打印申请材料清单！',
            'type': '申请干货资料'
          },
          {
            'img': './static/img/downMaterial/sqgh/4.jpg',
            'title': '我们整理了一个涵盖申请全程，从基础到进阶的超全留学资料包！限时免费送给你！丨绝密资料',
            'text': '留学资料，一次get！',
            'type': '申请干货资料'
          }
        ]
      ],
      dynamicTypes: [
        {
          name: '表达力提升',
          img: require('../assets/img/downMaterial/guides/menu1.png'),
          img1: require('../assets/img/downMaterial/guides/menu1-1.png')
        },
        // {
        //   name: '论文',
        //   img: require('../assets/img/downMaterial/guides/menu2.png'),
        //   img1: require('../assets/img/downMaterial/guides/menu2-1.png')
        // },
        // {
        //   name: '演讲',
        //   img: require('../assets/img/downMaterial/guides/menu3.png'),
        //   img1: require('../assets/img/downMaterial/guides/menu3-1.png')
        // },
        {
          name: '背景提升',
          img: require('../assets/img/downMaterial/guides/menu4.png'),
          img1: require('../assets/img/downMaterial/guides/menu4-1.png')
        },
        {
          name: '申请干货资料',
          img: require('../assets/img/downMaterial/guides/menu2.png'),
          img1: require('../assets/img/downMaterial/guides/menu2-1.png')
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
    //   // axios.get('http://www.palmdrive.cn/v2/static/json/downMaterial.json').then(
    //   axios.get('http://localhost:8080/static/json/downMaterial.json').then(
    //     (res) => {
    //       that.guides = res.data
    //       // that.$set(that, 'guides', res.data)
    //       that.changeGuideType(that.currentType)
    //     }
    //   )
    // }
    // )

    // this.guides = require('../../static/json/downMaterial.json')
    this.banner1 = this.isMobile ? require('../assets/img/downMaterial/mobile/banner1.png') : require('../assets/img/downMaterial/banner1.png')
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
          jsonName: 'downMaterial.json'
        }
      })
      window.open(routeUrl.href, '_blank')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.material {
  text-align: center;

  .web-div {
    .banner1-div {
      width: 100%;
      padding: 41px 0 8px;
      background-color: #21C3B6;

      .banner1 {
        width: 1070px;
        height: 432px;
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
        width: 560px;
        // width: 630px;
        background:rgba(250,255,255,1);
        box-shadow:-2px 3px 15px rgba(91,98,97,0.16);
        opacity:1;
        border-radius:83px;

        li {
          width: 180px;
          // width: 150px;
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
    }
  }

  .mobile-div {
    .banner1-div {
      width: 100%;
      background-color: #21C3B6;
      padding-top: .293333rem;
      padding-bottom: .613333rem;

      .banner1 {
        width: 8.693333rem;
        height: 5.386667rem;
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
        // width: 8rem;
        // background:rgba(250,255,255,1);
        // box-shadow:0px 3px 15px rgba(91,98,97,0.16);
        opacity:1;
        // border-radius:83px;

        li {
          width: 2.8rem;
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
