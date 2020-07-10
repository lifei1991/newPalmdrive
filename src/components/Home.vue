<template>
  <div class="home">
    <!-- <remote-css rel="stylesheet" href="../assets/third/carousel/owl.theme.css"></remote-css>
    <remote-css rel="stylesheet" href="../assets/third/carousel/owl.carousel.css"></remote-css> -->

    <div class="banner1-div">
      <div class="banner1" :style="{backgroundImage:'url(' + banner1 + ')'}">
        <div class="info1-div">
          <div class="info-number">99.3%</div>
          <div class="info-text" style="line-height:28px">学校申请成功率</div>
        </div>
        <div class="info2-div">
          <div class="info-number">71.6%</div>
          <div class="info-text">世界排名前50名校</div>
        </div>
        <div class="info3-div">
          <div class="info-number">94.3%</div>
          <div class="info-text">世界排名前100名校录取offer比例</div>
        </div>

        <div class="text">数据解释权归棕榈大道</div>
      </div>
    </div>

    <div class="banner2-div">
      <div class="title">offer 战绩</div>
      <div class="title2">4000+世界名校毕业生导师，涵盖192+专业。</div>
      <div class="school-div">
        <div class="each-school-div" v-for="item in schools" :key="item.logo">
          <div class="school-logo" :style="{backgroundImage:'url(' + item.logo + ')'}"></div>
          <div class="school-into">
            <div class="school-name">{{ item.name }}</div>
            <div class="school-offer">{{ item.offer }}</div>
            <span class="offer-text">offer</span>
          </div>
        </div>
        <div class="more-offer">
          <a href="http://palmdrive.cn/graduate_showcase" target="_blank">
            查看更多offer<img src="../assets/img/home/more.png" class="more-img" />
          </a>
        </div>
      </div>
    </div>

    <div class="banner3-div">
      <div class="number-div">
        <div class="each-number-div"  v-for="(item, index) in numbers" :key='item.logo'>
          <div class="number-logo" :style="{backgroundImage:'url(' + item.logo + ')'}"></div>
          <div class="number-into">
            <div class="number-name">{{ item.title }}</div>
            <div class="number">{{ item.number }}</div>
            <span class="number-text" v-if="index == 0">位</span>
            <span class="number-text" v-if="index == 1">份</span>
          </div>
        </div>
        <div class="number-dataLine">*数据截止到2019年1月</div>
      </div>
    </div>

    <div class="banner4-div">
      <div class="title">四对一辅导模式</div>
      <div class="title2">主导师、同专业导师、班主任、外教，全方位“四位一体”师资，明确分工，高品质、高效率、精准、 专业辅导同学申请海外梦想硕士/博士项目。</div>
      <div class="four-to-one-div">
        <div class="each1 each">
          <div class="each-title">全能主导师</div>
          <div class="each-text">超越行业水平的师资团队， </div>
          <div class="each-text">丰富的辅导经验和海外学习经历</div>
        </div>
        <div class="each2 each">
          <div class="each-title">同专业导师</div>
          <div class="each-text">覆盖全球广泛的名校优秀校友资源</div>
          <div class="each-text">为学生提供独特的专业见解和职业建议</div>
        </div>
        <div class="each3 each">
          <div class="each-title">名校外籍导师</div>
          <div class="each-text">美国著名高校，修读专业为语言学、教育学</div>
          <div class="each-text">丰富的文书写作经验，辅导3000+文书</div>
        </div>
        <div class="each4 each">
          <div class="each-title">资深班主任</div>
          <div class="each-text">申请材料准备指导，堪称申请流程的百科</div>
          <div class="each-text">全书</div>
        </div>

        <div class="almightyMentor">
          <div class="title3">全能主导师</div>
          <div class="title4">深耕留学，申请专家</div>
        </div>
        <div class="seniorMentor">
          <div class="title3">资深班主任</div>
          <div class="title4">流程点拨，答疑百科</div>
        </div>
        <div class="sameMajorMentor">
          <div class="title3">同专业导师</div>
          <div class="title4">全球高校，精英网络</div>
        </div>
        <div class="foreignMentor">
          <div class="title3">名校外籍导师</div>
          <div class="title4">妙笔生花，纯正表达</div>
        </div>
      </div>
    </div>

    <div class="banner5-div">
      <div class="intos-div">
        <div class="each-into-div" v-for="item in intros" :key="item.logo">
          <div class="intro-logo" :style="{backgroundImage:'url(' + item.logo + ')'}"></div>
          <div class="intro-title">{{ item.title }}</div>
          <div class="intro-text">{{ item.text }}</div>
        </div>
      </div>
    </div>

    <div class="banner6-div">
      <div class="title">导师团队</div>
      <div class="teachers-div">
        <template v-for="(item, index) in teachers" >
          <div class="each-teacher" v-if="index < maxNumber" :key="item.school">
            <div class="teacher-img" :style="{backgroundImage:'url(' + item.img + ')'}"></div>
            <div class="teacher-info-div">
              <div class="teacher-name">{{ item.name }}</div>
              <div class="teacher-school">{{ item.school }}</div>
            </div>
          </div>
        </template>

        <div class="more-teachers" @click="showMoreTeachers" v-if="maxNumber <= 8">
          <div>
            查看更多导师<img src="../assets/img/home/more.png" class="more-img" />
          </div>
        </div>
      </div>
    </div>

    <div class="banner7-div">
      <div class="title">辅导项目</div>
      <div>
        <div class="each-program" v-for="item in programs" :key="item.img" :style="{backgroundImage:'url(' + item.img + ')'}"></div>
      </div>
    </div>

    <div class="banner8-div">
      <div class="title">近期活动</div>
      <div class="title2">右下角扫码关注公众号，及时获得活动信息。</div>
      <div class="carousel-div">
        <div id="owl-demo" class="owl-carousel  owl-theme">
            <div class="each-activity" v-for="(item, index) in activities" :key="index">
              <div class="activity-img" :style="{backgroundImage:'url(' + item.img + ')'}"></div>
              <div class="title">{{ item.title }}</div>
              <div class="time">{{ item.time }}</div>
            </div>
        </div>
      </div>
    </div>

    <div class="banner9-div">
      <div class="title">最新动态</div>
      <div class="title2">右下角扫码关注公众号，及时获得最新动态。</div>
      <div class="carousel-div">
        <div id="owl-demo2" class="owl-carousel  owl-theme">
            <div class="each-dynamic" v-for="(item, index) in dynamics" :key="index">
              <div class="logo">PALMDRIVE</div>
              <div class="dynamic-img" :style="{backgroundImage:'url(' + item.img + ')'}"></div>
              <div class="title" @click="goToDetail(1000, index)">{{ item.title }}</div>
              <div class="text">{{ item.text }}</div>
              <div class="more" @click="goToDetail(1000, index)">阅读全文 <img src="../assets/img/home/more-green.png" class="more-img" /></div>
              <div class="bottom-green"></div>
            </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
// import ca from require('../assets/third/carousel/owl.carousel.min.js'

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
      schools: [
        {
          logo: require('../assets/img/home/school/hf.png'),
          name: '哈佛大学',
          offer: 29
        },
        {
          logo: require('../assets/img/home/school/stf.png'),
          name: '斯坦福大学',
          offer: 25
        },
        {
          logo: require('../assets/img/home/school/yl.png'),
          name: '耶鲁大学',
          offer: 41
        },
        {
          logo: require('../assets/img/home/school/zjg.png'),
          name: '芝加哥大学',
          offer: 93
        },
        {
          logo: require('../assets/img/home/school/bxfny.png'),
          name: '宾夕法尼亚大学',
          offer: 154
        },
        {
          logo: require('../assets/img/home/school/dk.png'),
          name: '杜克大学',
          offer: 115
        },
        {
          logo: require('../assets/img/home/school/kne.png'),
          name: '康奈尔大学',
          offer: 95
        },
        {
          logo: require('../assets/img/home/school/glby.png'),
          name: '哥伦比亚大学',
          offer: 388
        },
        {
          logo: require('../assets/img/home/school/nj.png'),
          name: '牛津大学',
          offer: 11
        },
        {
          logo: require('../assets/img/home/school/jq.png'),
          name: '剑桥大学',
          offer: 13
        },
        {
          logo: require('../assets/img/home/school/dglg.png'),
          name: '帝国理工学院',
          offer: 39
        },
        {
          logo: require('../assets/img/home/school/ldzzjj.png'),
          name: '伦敦政治经济学院',
          offer: 70
        },
        {
          logo: require('../assets/img/home/school/lddx.png'),
          name: '伦敦大学学院',
          offer: 39
        },
        {
          logo: require('../assets/img/home/school/xjpgl.png'),
          name: '新加坡国立大学',
          offer: 36
        },
        {
          logo: require('../assets/img/home/school/xg.png'),
          name: '香港大学',
          offer: 32
        }
      ],
      numbers: [
        {
          logo: require('../assets/img/home/number/number1.png'),
          title: '学生总数',
          number: '4000+'
        },
        {
          logo: require('../assets/img/home/number/number2.png'),
          title: '硕博Top100 offer',
          number: '5000+'
        },
        {
          logo: require('../assets/img/home/number/number3.png'),
          title: '背景提升率',
          number: '95%'
        },
        {
          logo: require('../assets/img/home/number/number4.png'),
          title: '奖学金总额',
          number: '12亿+'
        }
      ],
      intros: [
        {
          logo: require('../assets/img/home/intros/intro1.png'),
          title: '全球专业导师网络',
          text: '5000+世界名校毕业生导师，精准辅导200+多个专业， 专业标准化管理，半年度导师培训'
        },
        {
          logo: require('../assets/img/home/intros/intro2.png'),
          title: '资深外籍语言导师',
          text: '累计修改文书篇幅10,000+，毕业于世界知名高校， 拥有学校招生、教育、语言学背景'
        },
        {
          logo: require('../assets/img/home/intros/intro3.png'),
          title: '全能主导师',
          text: '8,000+ Offer申请经历和案例，平均申请成功率99.3%，全程指导，答疑解惑'
        },
        {
          logo: require('../assets/img/home/intros/intro4.png'),
          title: '大数据资源库',
          text: '30,000+项目信息，2,000+文书宝库，申请大数据库，背景提升资源库'
        },
        {
          logo: require('../assets/img/home/intros/intro5.png'),
          title: '跨国技术团队',
          text: '链接硅谷和中国，24小时在线技术保障，独创文书素材挖掘系统，进度管理系统，选校小程序'
        },
        {
          logo: require('../assets/img/home/intros/intro6.png'),
          title: '陪伴式教学',
          text: '科学的时间安排和规划，长期和及时的进度追踪， 密切的沟通交流，干满满的学习课程'
        }
      ],
      teachers: [
        {
          img: require('../assets/img/home/teachers/Z.png'),
          name: 'Z 导师',
          school: '加州大学伯克利分校 计算机科学硕士'
        },
        {
          img: require('../assets/img/home/teachers/H.png'),
          name: 'H 导师',
          school: '卡耐基梅隆大学 计算机科学硕士'
        },
        {
          img: require('../assets/img/home/teachers/Y.png'),
          name: 'Y 导师',
          school: '斯坦福大学 物理学博士'
        },
        {
          img: require('../assets/img/home/teachers/C.png'),
          name: 'C 导师',
          school: '斯坦福大学 教育学硕士'
        },
        {
          img: require('../assets/img/home/teachers/L.png'),
          name: 'L 导师',
          school: '杜克大学 管理学硕士'
        },
        {
          img: require('../assets/img/home/teachers/Z2.png'),
          name: 'Z 导师',
          school: '麻省理工大学 政治科学博士'
        },
        {
          img: require('../assets/img/home/teachers/Z3.png'),
          name: 'Z 导师',
          school: '哥伦比亚大学 艺术管理硕士'
        },
        {
          img: require('../assets/img/home/teachers/W.png'),
          name: 'W 导师',
          school: '麻省理工学院 金融硕士'
        },
        {
          img: require('../assets/img/home/teachers/C2.png'),
          name: 'C 导师',
          school: '卡耐基梅隆大学 电子工程硕士'
        },
        {
          img: require('../assets/img/home/teachers/Y2.png'),
          name: 'Y 导师',
          school: '范德堡大学 电子工程硕士'
        },
        {
          img: require('../assets/img/home/teachers/D.png'),
          name: 'D 导师',
          school: '多伦多大学 航空工程'
        },
        {
          img: require('../assets/img/home/teachers/L2.png'),
          name: 'L 导师',
          school: '哥伦比亚大学 电子工程硕士'
        }
      ],
      programs: [
        {
          img: require('../assets/img/home/programs/program1.png')
        },
        {
          img: require('../assets/img/home/programs/program2.png')
        },
        {
          img: require('../assets/img/home/programs/program3.png')
        }
      ],
      activities: [
        {
          img: require('../assets/img/home/activity/activity1.png'),
          title: '关于CS硕博混申的那些事',
          time: '2019-08-18(周四) 16:00-17:00'
        },
        {
          img: require('../assets/img/home/activity/activity2.png'),
          title: '关于CS硕博混申的那些事',
          time: '2019-08-18(周四) 16:00-17:00'
        },
        {
          img: require('../assets/img/home/activity/activity3.png'),
          title: '关于CS硕博混申的那些事',
          time: '2019-08-18(周四) 16:00-17:00'
        },
        {
          img: require('../assets/img/home/activity/activity4.png'),
          title: '关于CS硕博混申的那些事',
          time: '2019-08-18(周四) 16:00-17:00'
        },
        {
          img: require('../assets/img/home/activity/activity3.png'),
          title: '关于CS硕博混申的那些事',
          time: '2019-08-18(周四) 16:00-17:00'
        },
        {
          img: require('../assets/img/home/activity/activity3.png'),
          title: '关于CS硕博混申的那些事',
          time: '2019-08-18(周四) 16:00-17:00'
        },
        {
          img: require('../assets/img/home/activity/activity3.png'),
          title: '关于CS硕博混申的那些事',
          time: '2019-08-18(周四) 16:00-17:00'
        },
        {
          img: require('../assets/img/home/activity/activity3.png'),
          title: '关于CS硕博混申的那些事',
          time: '2019-08-18(周四) 16:00-17:00'
        },
        {
          img: require('../assets/img/home/activity/activity3.png'),
          title: '关于CS硕博混申的那些事',
          time: '2019-08-18(周四) 16:00-17:00'
        }
      ],
      dynamics: [
        {
          img: require('../assets/img/home/activity/activity2.png'),
          title: '被GRE虐哭，暑研加持的她如何打怪升级，获取梦校offer？',
          text: '看小姐姐打怪升级，一路成长。'
        },
        {
          img: './static/img/graduateHome/activity/activity3.jpg',
          title: '北大考研失利，被迫gap后这位高颜值小姐姐如何完成华丽转身？',
          text: '这个转身很漂亮'
        },
        {
          img: './static/img/graduateHome/activity/activity4.jpg',
          title: '慕了！文转商的她居然横扫了法国前五高商的所有offer！',
          text: '大牛是怎么养成的？'
        },
        {
          img: './static/img/graduateHome/activity/activity5.jpg',
          title: 'GPA一度低至2.2的她靠什么收割专排top2的offer？',
          text: '低标化却全申请冲击的极限操作~'
        }
      ],
      banner1: '',
      maxNumber: 8
    }
  },
  created () {
    // this.$nextTick(() => {
    // }
    // )

    this.banner1 = require('../assets/img/home/banner1.png')
  },
  mounted () {
    this.$nextTick(function () {
      $('#owl-demo').owlCarousel({
        items: 4,
        margin: 31,
        lazyLoad: true,
        nav: true,
        dots: false,
        autoplay: true,
        loop: true,
        autoplayHoverPause: true,
        navText: ["<i class='left-arrow home-activity-left-arrow'></i>", "<i class='right-arrow home-activity-right-arrow'></i>"]
      })

      $('#owl-demo2').owlCarousel({
        items: 4,
        margin: 14,
        lazyLoad: true,
        nav: true,
        dots: false,
        autoplay: true,
        loop: true,
        autoplayHoverPause: true,
        navText: ["<i class='left-arrow home-dynamic-left-arrow'></i>", "<i class='right-arrow home-dynamic-right-arrow'></i>"]
      })

      // const axios = require('axios')
      // let that = this
      // // axios.get('http://www.palmdrive.cn/v2/static/json/graduateHomeDynamics.json').then(
      // axios.get('http://localhost:8080/static/json/graduateHomeDynamics.json').then(
      //   (res) => {
      //     that.dynamics = res.data
      //   }
      // )
    })
  },
  methods: {
    showMoreTeachers () {
      this.maxNumber = 100
    },

    goToDetail (ind, index) {
      let routeUrl = this.$router.resolve({
        path: '/news',
        query: {
          index1: ind,
          index2: index,
          jsonName: 'graduateHomeDynamics.json'

        }
      })
      window.open(routeUrl.href, '_blank')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.home {
  text-align: center;

  .banner1-div {
    width: 100%;
    padding: 16px 0 33px;
    background-color: #1BBEB2;

    .banner1 {
      width: 1073px;
      height: 510px;
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

  .banner2-div {
    background-color: #fff;
    padding: 50px 0 54px;

    .title {
      font-size: 24px;
      font-family: Campton, SourceHanSansCN;
      font-weight: bold;
      line-height: 24px;
      color: rgba(57, 60, 61, 1);
      opacity: 1;
      margin: 0px auto 10px;
    }

    .title2 {
      font-size: 16px;
      font-family: Biko, SourceHanSansCN;
      font-weight: 500;
      line-height: 27px;
      color: rgba(85, 85, 85, 1);
      opacity: 1;
      margin-bottom: 49px;
    }

    .school-div {
      width: 1150px;
      margin: 0 auto;
      // align-items: center;
      // display: flex;
      // flex-direction: row;
      // justify-content: center;

      .each-school-div {
        width: 189px;
        display: inline-block;
        margin: 0 20px 50px;

        .school-logo {
          width: 63px;
          height: 58px;
          display: inline-block;
          background-repeat: no-repeat;
          background-size: contain;
        }

        .school-into {
          display: inline-block;
          width: 112px;
          margin-left: 14px;
          text-align: left;
          vertical-align: top;

          .school-name {
            font-size:14px;
            font-family:SourceHanSansCN;
            font-weight:bold;
            line-height:14px;
            color:rgba(57,60,61,1);
            opacity:1;
            margin-bottom: 10px;
            margin-top: 7px;
          }

          .school-offer {
            font-size:25px;
            font-family:Biko;
            font-weight:bold;
            line-height:25px;
            color:rgba(1,138,141,1);
            opacity:1;
            display: inline-block;
          }

          .offer-text {
            font-size:15px;
            font-family:Avenir;
            font-weight:800;
            line-height:20px;
            color:rgba(117,117,117,1);
            opacity:1;
            margin-left: 9px;
          }
        }
      }

      .more-offer {
        margin-top: -11px;
        font-size:13px;
        font-family:PingFangSC-Medium, Avenir-Heavy;
        font-weight:800;
        line-height:13px;
        color:rgba(51,51,51,1);
        opacity:1;
        text-align: right;
        margin-right: 30px;

        a {
          text-decoration: none;
          color: rgba(51,51,51,1);
        }

        .more-img {
          width: 16px;
          height: 17px;
          margin-left: 15px;
          display: inline-block;
          vertical-align: bottom;
        }
      }
    }
  }

  .banner3-div {
    padding: 90px 0 77px;
    background-color: #25C3B6;

    .number-div {
      text-align: center;
      width: 1200px;
      margin: 0 auto;

      .each-number-div {
        height: 75px;
        width: 250px;
        display: inline-block;
        margin: 0 25px;

        .number-logo {
          width: 75px;
          height: 100%;
          display: inline-block;
        }

        .number-into {
          display: inline-block;
          margin-left: 25px;
          text-align: left;
          vertical-align: top;

          .number-name {
            font-size:18px;
            font-family:SourceHanSansCN;
            font-weight:bold;
            line-height:18px;
            color:rgba(0,106,101,1);
            opacity:1;
            margin: 7px 0 14px;
          }

          .number {
            font-size:40px;
            font-family:Biko;
            font-weight:Bold;
            line-height:40px;
            color:rgba(238,238,238,1);
            opacity:1;
            display: inline-block;
          }

          .number-text {
            font-size: 20px;
            display: inline-block;
            color: #EEEEEE;
            font-family: SourceHanSansCN;
          }
        }
      }

      .number-dataLine {
        height:17px;
        font-size:12px;
        font-family:PingFang SC;
        font-weight:400;
        line-height:17px;
        color:rgba(0,124,118,1);
        opacity:1;
        margin-top: 20px;
        text-align: right;
        margin-right: 45px;
      }
    }
  }

  .banner4-div {
    padding: 112px 0 97px;
    background-color: #fff;

    .title {
      font-size:24px;
      font-family:SourceHanSansCN;
      font-weight:bold;
      line-height:24px;
      color:rgba(60,60,60,1);
      opacity:1;
    }

    .title2 {
      width: 720px;
      font-size:16px;
      font-family:SourceHanSansCN;
      font-weight:400;
      line-height:23px;
      color:rgba(60,60,60,1);
      opacity:1;
      margin: 18px auto 86px;
    }

    .four-to-one-div {
      width: 1158px;
      height: 638px;
      margin: 0 auto;
      background-image: url("../assets/img/home/fourToOne/fourtoone.png");
      position: relative;
      text-align: left;

      .each {
        width: 266px;
        text-align: left;
        position: absolute;
        right: 126px;
      }

      .each1 {
        top: 126px;
      }

      .each2 {
        top: 255px;
      }

      .each3 {
        top: 385px;
      }

      .each4 {
        top: 518px;
      }

      .each-title {
        font-size:20px;
        font-family:SourceHanSansCN;
        font-weight:bold;
        line-height:20px;
        color:rgba(60,60,60,1);
        opacity:1;
        margin-bottom: 8px;
      }

      .each-text {
        font-size:14px;
        font-family:SourceHanSansCN, Biko;
        font-weight:500;
        line-height:20px;
        color:rgba(117,117,117,1);
        opacity:1;
      }

      .almightyMentor {
        position: absolute;
        top: 34px;
        left: 257px;
      }

      .seniorMentor {
        position: absolute;
        top: 102px;
        left: 527px;
      }

      .sameMajorMentor {
        position: absolute;
        top: 530px;
        left: 24px;
      }

      .foreignMentor {
        position: absolute;
        bottom: -44px;
        left: 520px;
      }
    }

    .title3 {
      margin-top: 2px;
      font-size:18px;
      font-family:SourceHanSansCN;
      font-weight:bold;
      line-height:18px;
      color:rgba(60,60,60,1);
      opacity:1;
    }

    .title4 {
      font-size:14px;
      font-family:SourceHanSansCN;
      font-weight:400;
      line-height:14px;
      color:rgba(148,148,148,1);
      opacity:1;
      margin-top: 8px;
    }
  }

  .banner5-div {
    padding: 69px 0 32px;
    background-color: #EFF3F4;

    .intos-div {
      width: 1100px;
      margin: 0 auto;

      .each-into-div {
        margin: 0 42px 47px;
        width: 273px;
        display: inline-block;
        text-align: left;

        .intro-logo {
          width: 29px;
          height: 28px;
          background-repeat: no-repeat;
          background-size: contain;
        }

        .intro-title {
          margin: 14px 0 12px;
          font-size:18px;
          font-family:SourceHanSansCN;
          font-weight:bold;
          line-height:18px;
          color:rgba(98,98,98,1);
          opacity:1;
        }

        .intro-text {
          font-size:13px;
          font-family:SourceHanSansCN;
          font-weight:500;
          line-height:20px;
          color:rgba(94,94,94,1);
          opacity:1;
        }
      }
    }
  }

  .banner6-div {
    padding: 75px 0 73px;
    background-color: #fff;

    .title {
      font-size:24px;
      font-family:SourceHanSansCN;
      font-weight:bold;
      line-height:24px;
      color:rgba(60,60,60,1);
      opacity:1;
      margin-bottom: 62px;
    }

    .teachers-div {
      width: 1130px;
      text-align: center;
      margin: 0 auto;

      .each-teacher {
        width: 240px;
        margin: 0 20px 45px;
        display: inline-block;
        vertical-align: top;

        .teacher-img {
          width:100%;
          height:308px;
          background-repeat: no-repeat;
          background-size: cover;
        }

        .teacher-info-div {
          height: 96px;
          background-color: #F1FAFA;
          padding: 17px 20px 0 21px;
          text-align: left;

          .teacher-name {
            font-size:18px;
            font-family:Campton;
            font-weight:bold;
            line-height:18px;
            color:rgba(51,51,51,1);
            opacity:1;
          }

          .teacher-school {
            font-size:15px;
            font-family:SourceHanSansCN;
            font-weight:400;
            line-height:20px;
            color:rgba(51,51,51,1);
            opacity:1;
            margin-top: 7px;
          }
        }
      }

      .more-teachers {
        font-size:15px;
        font-family:PingFang SC;
        font-weight:500;
        line-height:15px;
        color:rgba(57,60,61,1);
        opacity:1;
        text-align: right;
        margin-right: 20px;
        cursor: pointer;

        a {
          text-decoration: none;
          color:rgba(57,60,61,1);
        }

        .more-img {
          width: 17px;
          height: 17px;
          margin-left: 15px;
          display: inline-block;
          vertical-align: bottom;
        }
      }
    }
  }

  .banner7-div {
    padding: 70px 0 87px;
    background-color: #F1F7FA;

    .title {
      font-size:24px;
      font-family:SourceHanSansCN;
      font-weight:bold;
      line-height:24px;
      color:rgba(60,60,60,1);
      opacity:1;
      margin-bottom: 61px;
    }

    .each-program {
      width:324px;
      height:199px;
      box-shadow: 0px 5px 6px rgba(189,189,189,1);
      border-radius: 15px;
      opacity:1;
      display: inline-block;
      margin: 0 25px;
      background-repeat: no-repeat;
      background-size: cover;
    }
  }

  .banner8-div {
    padding: 58px 0 50px;
    background-color: #fff;
    text-align: center;
    font-size: 30px;
    display: none;

    .title {
      font-size:24px;
      font-family:SourceHanSansCN;
      font-weight:bold;
      line-height:24px;
      color:rgba(60,60,60,1);
      opacity:1;
    }

    .title2 {
      font-size:18px;
      font-family:PingFang SC;
      font-weight:400;
      line-height:18px;
      color:rgba(85,85,85,1);
      opacity:1;
      margin: 11px 0 52px;
    }

    .carousel-div {
      width: 985px;
      margin: 0 auto;
      text-align: left;

      .activity-img {
        width:222px;
        height:116px;
      }

      .title {
        font-size:13px;
        font-family:SourceHanSansCN;
        font-weight:bold;
        line-height:13px;
        color:rgba(85,85,85,1);
        opacity:1;
        margin: 19px 0 11px;
      }

      .time {
        font-size:11px;
        font-family:SourceHanSansCN;
        font-weight:500;
        line-height:19px;
        color:rgba(85,85,85,1);
        opacity:1;
      }
    }
  }

  .banner9-div {
    padding: 65px 0 70px;
    background-color: #F1F7FA;
    text-align: center;

    .title {
      font-size:24px;
      font-family:SourceHanSansCN;
      font-weight:bold;
      line-height:24px;
      color:rgba(51,51,51,1);
      opacity:1;
    }

    .title2 {
      margin: 13px 0 51px;
      font-size:18px;
      font-family:PingFang SC;
      font-weight:400;
      line-height:18px;
      color:rgba(85,85,85,1);
      opacity:1;
    }

    .carousel-div {
      width: 1100px;
      margin: 0 auto;
      text-align: left;

      .each-dynamic {
        padding: 18px 18px 0;
        background:rgba(255,255,255,1);
        box-shadow:5px 5px 6px rgba(47,47,47,0.21);
        opacity:1;
        width: 222px;

        .logo {
          font-size:12px;
          font-family:Campton;
          font-weight:bold;
          line-height:14px;
          color:rgba(190,190,190,1);
          opacity:1;
        }

        .dynamic-img {
          margin: 11px 0 18px;
          width: 222px;
          height: 143px;
          background-repeat: no-repeat;
          background-size: cover;
        }

        .title {
          font-size:20px;
          font-family:SourceHanSansCN;
          font-weight:bold;
          line-height:30px;
          color:rgba(0,0,0,1);
          opacity:1;
          cursor: pointer;
        }

        .text {
          font-family:CamptonLight, SourceHanSansCN;
          font-size:14px;
          font-weight:400;
          line-height:22px;
          color:rgba(82,82,82,1);
          opacity:1;
          margin: 12px 0 3px;
        }

        .more {
          font-size:9px;
          font-family:SourceHanSansCN;
          font-weight:500;
          line-height:16px;
          color:rgba(65,64,64,1);
          opacity:1;
          margin-bottom: 18px;
          cursor: pointer;

          .more-img {
            width: 10px;
            height: 10px;
            display: inline-block;
            margin-left: 8px;
          }
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

  .banner10-div {
    padding: 0px 0 38px;
    background-color: #F1F7FA;
    text-align: center;
    background-image: url("../assets/img/home/foot/foot-bg.png");
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 330px;

    .left-div {
      width: 627px;
      display: inline-block;
      margin-top: 48px;
      text-align: left;

      .link {
        font-size:15px;
        font-family:SourceHanSansCN;
        font-weight:bold;
        line-height:15px;
        color:rgba(255,255,255,1);
        opacity:1;

        .link-img {
          width: 13px;
          height: 20px;
          vertical-align: sub;
          margin-right: 5px;
        }
      }

      .heng-line {
        width:31px;
        height:0px;
        border:1px solid rgba(1,183,183,1);
        opacity:1;
        margin: 8px 0 9px;
      }

      .link-item-div {
        list-style: none;
        text-align: left;
        padding: 0;
        margin-bottom: 46px;

        li {
          font-size:14px;
          font-family:SourceHanSansCN;
          font-weight:500;
          line-height:14px;
          opacity:1;
          margin-right: 36px;
          display: inline-block;
          color: #fff;

          a {
            text-decoration: none;
            color: #fff;
          }

          a:hover {
            color:rgba(1,183,183,1);
          }
        }
      }

      .location-item-div {
        list-style: none;
        text-align: left;
        padding: 0;
        margin-bottom: 21px;

        li {
          font-size: 14px;
          font-family: SourceHanSansCN;
          font-weight: 500;
          line-height: 14px;
          opacity: 1;
          margin-right: 39px;
          display: inline-block;
          color: #fff;
          padding-bottom: 3px;
          margin-top: 3px;
          cursor: pointer;
        }

        .bg-colors {
          color:rgba(1,183,183,1);
          border-bottom: 3px solid rgba(1,183,183,1);
        }
      }

      .place {
        .text, .number {
          font-size:11px;
          font-family:PingFangSC-Regular, Biko;
          font-weight:400;
          line-height:16px;
          color:rgba(255,255,255,1);
          opacity:1;
        }

        .place-line {
          width:124px;
          height:0px;
          border:1px solid rgba(154,154,154,1);
          opacity:1;
          margin: 17px 0;
        }
      }
    }

    .middle-div {
      height:237px;
      border:1px solid rgba(255,255,255,1);
      opacity:1;
      display: inline-block;
      vertical-align: top;
      margin-top: 73px;
    }

    .right-div {
      margin: 32px 0 0 57px;
      display: inline-block;
      vertical-align: top;

      .contact {
        width:338px;
        height:141px;
        background-image: url("../assets/img/home/foot/contact-us.png");
        background-repeat: no-repeat;
        background-size: cover;
      }

      .wechat-div {
        margin: 23px 0 0 35px;
        text-align: left;

        .title {
          font-size:15px;
          font-family:PingFang SC;
          // font-weight:600;
          line-height:15px;
          color:rgba(255,255,255,1);
          opacity:1;

          img {
            width: 19px;
            height: 17px;
            margin-right: 8px;
            vertical-align: sub;
          }
        }

        .code-div {
          margin: 11px 0 0 27px;

          .each-code {
            display: inline-block;
            margin-right:31px;
            font-size:14px;
            font-family:SourceHanSansCN;
            font-weight:500;
            line-height:14px;
            color:rgba(255,255,255,1);
            opacity:1;
            text-align: center;

            img {
              width: 66px;
              height: 66px;
              margin-bottom: 9px;
            }
          }
        }
      }
    }
  }

  .banner11-div {
    padding: 31px 0 30px;
    background-color: #25C3B6;
    text-align: left;

    .content {
      width: 1100px;
      margin: 0 auto;

      .content-title {
        margin-bottom: 6px;
        font-size:12px;
        font-family:SourceHanSansCN, Biko;
        font-weight:500;
        line-height:12px;
        color:rgba(255,255,255,1);
        opacity:1;
      }

      .content-title2 {
        span {
          margin-right: 38px;
          font-size:12px;
          font-family: SourceHanSansCN, Biko;
          font-weight:500;
          line-height:12px;
          color:rgba(255,255,255,1);
          opacity:1;
        }
      }
    }
  }
}
</style>
