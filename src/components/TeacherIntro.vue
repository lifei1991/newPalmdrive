<template>
  <div class="teacher-intro">
    <!-- <remote-css rel="stylesheet" href="../assets/third/carousel/owl.theme.css"></remote-css>
    <remote-css rel="stylesheet" href="../assets/third/carousel/owl.carousel.css"></remote-css> -->

    <div class="banner1-div">
      <div class="banner1" :style="{backgroundImage:'url(' + banner1 + ')'}">
      </div>
    </div>

    <div class="banner5-div">
      <div class="title">导师团队</div>
      <!-- <ul class="teacher-item-div" >
        <li v-for="(item, index) in teacherTypes" :key="item.name" v-html="item.name" @click="changeTeacherType(index)" v-bind:class="{ 'teacher-bg-colors' : index == currentType }"></li>
      </ul> -->
      <div class="teachers-div">
        <template v-for="(item, index) in selectedTeacher" >
          <div class="each-teacher" v-if="index < maxNumber" :key="item.school">
            <div class="teacher-img" :style="{backgroundImage:'url(' + item.img + ')'}"></div>
            <div class="teacher-info-div">
              <div class="teacher-name">{{ item.name }}</div>
              <div class="teacher-school">{{ item.school }}</div>
            </div>
          </div>
        </template>

        <div class="more-teachers" @click="showMoreTeacher" v-if="maxNumber <= 8">
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
  },
  name: 'Home',
  data () {
    return {
      teachers: [
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
          name: '专业导师'
        },
        {
          name: '主导师'
        },
        {
          name: '外籍导师'
        },
        {
          name: '班主任'
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
    this.banner1 = require('../assets/img/teacherIntro/banner1.png')
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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.teacher-intro {
  text-align: center;

  .banner1-div {
    width: 100%;
    padding: 92px 0 0px;
    background-color: #1BBEB2;

    .banner1 {
      width: 1109px;
      height: 430px;
      margin: 0 auto;
      position: relative;
      text-align: left;
      background-repeat: no-repeat;
      background-size: cover;

      .info1-div {
        position: absolute;
        top: 282px;
        left: 59px;
      }

      .info2-div {
        position: absolute;
        top: 342px;
        left: 59px;
      }

      .info3-div {
        position: absolute;
        top: 401px;
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
        top: 450px;
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

  .banner5-div {
    padding: 87px 0 54px;
    background-color: #F3F6FB;

    .title {
      font-size:24px;
      font-family:SourceHanSansCN;
      font-weight:bold;
      line-height:24px;
      color:rgba(60,60,60,1);
      opacity:1;
      margin-bottom: 105px;
    }

    .teacher-item-div {
        list-style: none;
        text-align: center;
        padding: 0;
        margin-bottom: 64px;

        li {
          font-size: 18px;
          font-family: SourceHanSansCN;
          font-weight: 500;
          line-height: 18px;
          opacity: 1;
          margin: 0 40px;
          display: inline-block;
          color: rgba(175,175,175,1);
          padding: 0 8px 8px;
          cursor: pointer;
        }

        .teacher-bg-colors {
          color:rgba(60,60,60,1);
          font-weight:bold;
          border-bottom: 3px solid rgba(1,183,183,1);
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
