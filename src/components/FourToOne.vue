<template>
  <div class="four-to-one">
    <!-- <remote-css rel="stylesheet" href="../assets/third/carousel/owl.theme.css"></remote-css>
    <remote-css rel="stylesheet" href="../assets/third/carousel/owl.carousel.css"></remote-css> -->

    <div class="banner1-div">
      <div class="banner1" :style="{backgroundImage:'url(' + banner1 + ')'}">
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
      <div class="title">导师团队</div>

      <ul class="guide-item-div" >
        <li v-for="(item, index) in teacherTypes" :key="item.name" @click="changeTeacherType(index)" :class="{ 'guide-bg-colors' : index == currentType }">
          <div class="img" :style="{backgroundImage:'url(' + (index == currentType ? item.img1 : item.img) + ')'}"></div>
          <div class="text">{{ item.name }}</div>
        </li>
      </ul>

      <div class="teachers-div">
        <template v-for="(item, index) in selectedTeacher" >
          <div class="each-teacher" v-if="index < maxNumber" :key="item.img">
            <div class="teacher-img" :style="{backgroundImage:'url(' + item.img + ')'}"></div>
            <div class="teacher-info-div">
              <div class="teacher-name">{{ item.name }}</div>
              <div class="teacher-school">{{ item.school }}</div>
            </div>
          </div>
        </template>

        <div class="more-teachers" @click="showMoreTeacher" v-if="selectedTeacher.length > 8 && maxNumber != 100">
          <div>
            查看更多导师
          </div>
          <div class="open-ask"></div>
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
      dreams: [
        {
          img: require('../assets/img/dreamSchool/dreams/dreams1.png')
        },
        {
          img: require('../assets/img/dreamSchool/dreams/dreams2.png')
        },
        {
          img: require('../assets/img/dreamSchool/dreams/dreams3.png')
        },
        {
          img: require('../assets/img/dreamSchool/dreams/dreams4.png')
        }
      ],
      powers: [
        {
          img: require('../assets/img/dreamSchool/powers/powers1.png'),
          title: '素材挖掘器',
          text: '启发文书简历思路'
        },
        {
          img: require('../assets/img/dreamSchool/powers/powers2.png'),
          title: '提纲蓝图 ',
          text: '梳理文书脉络逻辑'
        },
        {
          img: require('../assets/img/dreamSchool/powers/powers3.png'),
          title: '文书宝库 ',
          text: '阅读同专业范文'
        },
        {
          img: require('../assets/img/dreamSchool/powers/powers4.png'),
          title: '申请季面试库 ',
          text: '掌握海量面试真题'
        },
        {
          img: require('../assets/img/dreamSchool/powers/powers5.png'),
          title: '棕榈专业手册',
          text: '解读项目细分选择'
        },
        {
          img: require('../assets/img/dreamSchool/powers/powers6.png'),
          title: '海外飞跃指南 ',
          text: '领取海外留学优惠'
        }
      ],
      teachers: [
        [
          {
            img: require('../assets/img/teachers/graduate/Claire.png'),
            name: 'Claire',
            school: '香港中文大学 视觉文化研究专业'
          },
          {
            img: require('../assets/img/teachers/graduate/Hailey.png'),
            name: 'Hailey',
            school: '宾夕法尼亚大学 跨文化传播专业'
          },
          {
            img: require('../assets/img/teachers/graduate/Tangning.png'),
            name: 'Tangning',
            school: '乔治城大学 公共政策专业'
          },
          {
            img: require('../assets/img/teachers/graduate/Elio.png'),
            name: 'Elio',
            school: '帝国理工学院 创新创业与管理学专业'
          },
          {
            img: require('../assets/img/teachers/graduate/Cookie.png'),
            name: 'Cookie',
            school: '美国埃默里大学 公共卫生硕士 – 医疗政策与管理专业'
          },
          {
            img: require('../assets/img/teachers/graduate/Sarah.png'),
            name: 'Sarah',
            school: '香港大学 环境管理专业 '
          },
          {
            img: require('../assets/img/teachers/graduate/Xiaohan.png'),
            name: 'Xiaohan',
            school: '哥伦比亚大学 公共管理专业'
          },
          {
            img: require('../assets/img/teachers/graduate/June.png'),
            name: 'June',
            school: '香港大学 TESOL专业'
          }
        ],
        [
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
          },
          {
            img: require('../assets/img/home/teachers/Z4.png'),
            name: 'Z 导师',
            school: '耶鲁大学 生物医学工程博士'
          },
          {
            img: require('../assets/img/home/teachers/C3.png'),
            name: 'C 导师',
            school: '密歇根大学安娜堡分校 化学工程硕士'
          },
          {
            img: require('../assets/img/home/teachers/X.png'),
            name: 'X 导师',
            school: '加州大学洛杉矶分校 地球物理和空间物理博士'
          },
          {
            img: require('../assets/img/home/teachers/S.png'),
            name: 'S 导师',
            school: '麻省理工学院 物理学博士'
          },
          {
            img: require('../assets/img/home/teachers/O.png'),
            name: 'O 导师',
            school: '南加州大学 数据分析硕士'
          },
          {
            img: require('../assets/img/home/teachers/O2.png'),
            name: 'O 导师',
            school: '斯坦福大学 材料科学与工程硕士'
          },
          {
            img: require('../assets/img/home/teachers/Q.png'),
            name: 'Q 导师',
            school: '西北大学 传播学硕士'
          },
          {
            img: require('../assets/img/home/teachers/S2.png'),
            name: 'S 导师',
            school: '加州大学伯克利分校  运筹学硕士'
          },
          {
            img: require('../assets/img/home/teachers/R.png'),
            name: 'R 导师',
            school: '艾默里大学 生物统计博士'
          },
          {
            img: require('../assets/img/home/teachers/W2.png'),
            name: 'W 导师',
            school: '圣母大学 会计学硕士'
          },
          {
            img: require('../assets/img/home/teachers/W3.png'),
            name: 'W 导师',
            school: '麻省理工学院 金融硕士'
          },
          {
            img: require('../assets/img/home/teachers/Z5.png'),
            name: 'Z 导师',
            school: '哥伦比亚大学 数据分析硕士'
          }
        ],
        [
          {
            img: require('../assets/img/teachers/foreigners/RachelCrovello.png'),
            name: 'Rachel Crovello',
            school: '斯坦福大学 语言学及翻译专业'
          },
          {
            img: require('../assets/img/teachers/foreigners/KristenPierce.png'),
            name: 'Kristen Pierce',
            school: '哥伦比亚大学 英语教育专业'
          },
          {
            img: require('../assets/img/teachers/foreigners/JakeIngrassia.png'),
            name: 'Jake Ingrassia',
            school: '南加州大学 新闻专业'
          },
          {
            img: require('../assets/img/teachers/foreigners/ElizabethPollack.png'),
            name: 'Elizabeth Pollack',
            school: '卓克索大学 剧本创作专业'
          },
          {
            img: require('../assets/img/teachers/foreigners/AlexandraNichipor.png'),
            name: 'Alexandra Nichipor',
            school: '哈佛大学 神学专业'
          },
          {
            img: require('../assets/img/teachers/foreigners/WaheedGardezi.png'),
            name: 'Waheed Gardezi ',
            school: '哈佛大学 中东研究专业'
          },
          {
            img: require('../assets/img/teachers/foreigners/VictoriaGaffney.png'),
            name: 'Victoria Gaffney ',
            school: '约翰·霍普金斯大学 写作专业'
          },
          {
            img: require('../assets/img/teachers/foreigners/NoahTeachy.png'),
            name: 'Noah Teachy',
            school: '哥伦比亚大学 音乐教育专业'
          }
        ],
        [
          {
            img: require('../assets/img/teachers/master/Sherry.png'),
            name: 'Sherry',
            school: '有的人面对压力时会失控，而有的人却会茁壮成长'
          },
          {
            img: require('../assets/img/teachers/master/Wenhui.png'),
            name: 'Wenhui',
            school: ' 好风凭借力，送尔上青云'
          },
          {
            img: require('../assets/img/teachers/master/Jie.png'),
            name: 'Jie',
            school: '教育的目的是增进知识和传播真理'
          },
          {
            img: require('../assets/img/teachers/master/Icy.png'),
            name: 'Icy',
            school: '一起经历申请季的酸甜，也一起收获美好的offer吧'
          },
          {
            img: require('../assets/img/teachers/master/Xiaoxue.png'),
            name: 'Xiaoxue',
            school: '每棵希望的种子都会发芽，每颗善良的心灵都会开花'
          },
          {
            img: require('../assets/img/teachers/master/Pengcheng.png'),
            name: 'Pengcheng',
            school: '申请之路上，愿我们的陪伴助你披荆斩棘'
          },
          {
            img: require('../assets/img/teachers/master/Qiaoling.png'),
            name: 'Qiaoling',
            school: '不管过程有多艰辛，都要朝着梦想坚持到底'
          },
          {
            img: require('../assets/img/teachers/master/Echo.png'),
            name: 'Echo',
            school: '博观而约取,厚积而薄发'
          }
        ]
      ],
      teacherTypes: [
        {
          name: '全能主导师',
          img: require('../assets/img/fourToOne/guides/menu1.png'),
          img1: require('../assets/img/fourToOne/guides/menu1-1.png')
        },
        {
          name: '同专业主导师',
          img: require('../assets/img/fourToOne/guides/menu2.png'),
          img1: require('../assets/img/fourToOne/guides/menu2-1.png')
        },
        {
          name: '名校外籍语言导师',
          img: require('../assets/img/fourToOne/guides/menu3.png'),
          img1: require('../assets/img/fourToOne/guides/menu3-1.png')
        },
        {
          name: '资深班主任',
          img: require('../assets/img/fourToOne/guides/menu4.png'),
          img1: require('../assets/img/fourToOne/guides/menu4-1.png')
        }
      ],
      banner1: '',
      maxNumber: 8,
      show: false,
      currentType: 0,
      selectedTeacher: []
    }
  },
  created () {
    this.banner1 = require('../assets/img/fourToOne/banner1.png')
    this.selectedTeacher = this.teachers[this.currentType]
  },
  mounted () {

  },
  methods: {
    showMoreTeacher () {
      this.maxNumber = 100
    },
    changeTeacherType (index) {
      this.currentType = index
      this.selectedTeacher = this.teachers[index]
    },
    goToDetail (content) {
      let routeUrl = this.$router.resolve({
        path: '/news',
        query: {
          content: content
        }
      })
      window.open(routeUrl.href, '_blank')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.four-to-one {
  text-align: center;

  .banner1-div {
    width: 100%;
    padding: 92px 0 0px;
    background-color: #1BBEB2;

    .banner1 {
      width: 1108px;
      height: 430px;
      margin: 0 auto;
      position: relative;
      text-align: left;
      background-repeat: no-repeat;
      background-size: cover;
    }
  }

  .banner4-div {
    padding: 91px 0 97px;
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
      margin: 18px auto 71px;
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
    padding: 85px 0 54px;
    background-color: #F6FAFB;

    .title {
      font-size:24px;
      font-family:SourceHanSansCN;
      font-weight:bold;
      line-height:24px;
      color:rgba(60,60,60,1);
      opacity:1;
      margin-bottom: 45px;
    }

    .guide-item-div {
      list-style: none;
      text-align: center;
      padding: 0;
      margin: 36px auto 85px;
      width: 822px;
      background:#FFFFFF;
      box-shadow:-2px 3px 15px rgba(91,98,97,0.16);
      opacity:1;
      border-radius:83px;

      li {
        // width: 150px;
        height: 51px;
        opacity: 1;
        margin-right: 10px;
        display: inline-block;
        color: rgba(57,60,61,1);
        cursor: pointer;
        text-align: center;
        padding: 0 28px;

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
          background-color: #FFFFFF;
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
        color:rgba(57,60,61,1);
        opacity:1;
        cursor: pointer;

        width: 142px;
        text-align: center;
        margin: 0 auto;
        height: 36px;
        line-height: 36px;
        border: 1px solid rgba(151,151,151,1);
        border-radius: 21px;

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

        .open-ask {
            width: 26px;
            height: 10px;
            // background: #21C3B6;
            margin: 13px auto 36px;
            cursor: pointer;
            background-image: url("../assets/img/dreamSchool/openArrow.png");
            background-repeat: no-repeat;
            background-size: cover;
        }
      }
    }
  }

    /* 可以设置不同的进入和离开动画 */
    /* 设置持续时间和动画函数 */
    .slide-fade-enter-active {
    transition: all .3s ease;
    }
    .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
    }
}
</style>
