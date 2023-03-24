<template>
  <div class="walnut">
    <!-- <remote-css rel="stylesheet" href="../assets/third/carousel/owl.theme.css"></remote-css>
    <remote-css rel="stylesheet" href="../assets/third/carousel/owl.carousel.css"></remote-css> -->

    <div class='popContainer' v-if="showPopContainer" @click="closeERCode"></div>
    <img v-if="showPopContainer" src="../assets/img/walnut/web/erCode.png" class="code-img" />

    <div v-if="!isMobile" class="web-div">
      <div class="banner1-div">
        <div class="carousel-div">
          <div id="owl-demo1" class="owl-carousel  owl-theme">
            <div @click="openERCode(item.erCodeUrl)" class="banner1" :style="{backgroundImage:'url(' + item.img + ')'}" v-for="(item, index) in owlBanners" :key="index">
            </div>
          </div>
        </div>
      </div>

      <div class="banner2-div">
        <span class="text_10">出分情况</span>

        <div class="content">
          <div class="grade-each-boder" v-for="grade in gradeList" :key="grade">
            <img :src="grade.img" class="class-img" />
            <!-- <div class="class-img" :style="{backgroundImage:'url(' + grade.img + ')'}"></div> -->
            <div class="text-wrapper_3 flex-col">
              <div class="text_12">最高出分</div>
              <div class="text_13">{{ grade.grade1 }}</div>
              <div class="text_14">平均出分</div>
              <div class="text_15">{{ grade.grade2 }}</div>
            </div>
            <div class="text-wrapper_3 flex-col">
              <div class="text_12">最高提分</div>
              <div class="text_13">{{ grade.grade3 }}</div>
              <div class="text_14">平均提分</div>
              <div class="text_15">{{ grade.grade4 }}</div>
            </div>
          </div>
        </div>
      </div>

      <div class="banner3-div">
        <div class="number-div">
          <div class="each-number-div" v-for="(item, index) in numbers" :key='item.logo'>
            <div class="number-logo" :style="{backgroundImage:'url(' + item.logo + ')'}"></div>
            <div class="number-into">
              <div class="number-name">{{ item.title }}</div>
              <animate-number class="number" from="1" :to="item.number" duration="3000"></animate-number>
              <div class="number">{{ item.number2 }}</div>
              <span class="number-text" v-if="index == 0 || index == 2">人次</span>
              <span class="number-text" v-if="index == 1">场</span>
            </div>
          </div>
          <!-- <div class="number-dataLine">*数据截止到2022年7月</div> -->
        </div>
      </div>

      <div class="banner12-div">
        <div class="carousel-div">
          <div class="each-product" v-for="(item, index) in products" :key="index">
            <div class="product-img" :style="{backgroundImage:'url(' + item.img + ')'}"></div>
            <div class="product-top-div" :style="{backgroundImage:'url(' + item.imgMB + ')'}">
              <div class="title">{{item.title}}</div>
              <div v-for="(item, index) in item.text" :key="index" class="text">{{item}}</div>
            </div>
          </div>
        </div>
      </div>

      <div class="banner4-div">
        <div class="title">三位一辅导模式</div>
        <div class="title2">授课老师直播授课、答疑老师课后解惑、班主任日常督学；明确分工，立体式学习体验，快速提升考试成绩。</div>
        <div class="four-to-one-div">
          <div class="each1 each">
            <div class="each-title">授课老师</div>
            <div class="each-text">均来自哥伦比亚大学、宾夕法尼亚大学、范德堡大学等海外Top院校，拥有多年授课经验与扎实的语言知识功底</div>
            <!-- <div class="each-text"> </div> -->
          </div>
          <div class="each2 each">
            <div class="each-title">答疑老师</div>
            <div class="each-text">超长课后答疑周期，课下不限次数答疑，帮助同学们实时巩固知识</div>
          </div>
          <div class="each3 each">
            <div class="each-title">资深班主任</div>
            <div class="each-text">兼顾管理服务与督学，让同学告别拖延症</div>
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
        <div class="title">导师团队精选</div>
        <div class="teachers-div">
          <template v-for="(item, index) in teachers">
            <div class="each-teacher" v-if="index < maxNumber" :key="item.school">
              <div class="teacher-img" :style="{backgroundImage:'url(' + item.img + ')'}"></div>
              <div class="teacher-info-div">
                <div class="teacher-name">{{ item.name }}</div>
                <div class="teacher-school">{{ item.phdSchool ? item.phdSchool : item.school }}</div>
              </div>
            </div>
          </template>
        </div>
      </div>

      <div class="banner7-div">
        <div class="title">辅导科目</div>
        <div>
          <a :href="item.url" target="_blank" v-for="item in programs" :key="item.img">
            <div class="each-program" :style="{backgroundImage:'url(' + item.img + ')'}"></div>
          </a>
        </div>
      </div>

      <div class="banner9-div">
        <div class="title">备考信息</div>
        <div class="title2">扫描下图二维码，获取更多备考干货</div>
        <div class="carousel-div">
          <div id="owl-demo2" class="owl-carousel  owl-theme">
            <div class="each-dynamic" v-for="(item, index) in dynamics" :key="index">
              <!-- <div class="logo">PALMDRIVE</div> -->
              <div class="dynamic-img" :style="{backgroundImage:'url(' + item.img + ')'}"></div>
              <div class="title">{{ item.title }}</div>
              <div class="text" v-html="item.text"></div>
              <div class="more"><img src="../assets/img/walnut/web/箭头.png" class="more-img" /></div>
              <div class="bottom-green"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="isMobile" class="mobile-div">
      <!-- <div class="banner1-div">
        <div class="banner1" :style="{backgroundImage:'url(' + banner1 + ')'}">
        </div>
      </div> -->
      <div class="banner1-div">
        <div class="carousel-div">
          <div id="owl-demo1" class="owl-carousel  owl-theme">
            <div @click="openERCode(item.erCodeUrl)" class="banner1" :style="{backgroundImage:'url(' + item.imgMobile + ')'}" v-for="(item, index) in owlBanners" :key="index">
            </div>
          </div>
        </div>
      </div>

      <div class="banner2-div">
        <span class="text_10">出分情况</span>

        <div class="content">
          <div class="grade-each-boder" v-for="grade in gradeList" :key="grade">
            <img :src="grade.img" class="class-img" />
            <!-- <div class="class-img" :style="{backgroundImage:'url(' + grade.img + ')'}"></div> -->
            <div class="text-wrapper_3 flex-col">
              <div class="text_12">最高出分</div>
              <div class="text_13">{{ grade.grade1 }}</div>
              <div class="text_14">平均出分</div>
              <div class="text_15">{{ grade.grade2 }}</div>
            </div>
            <div class="text-wrapper_3 flex-col">
              <div class="text_12">最高提分</div>
              <div class="text_13">{{ grade.grade3 }}</div>
              <div class="text_14">平均提分</div>
              <div class="text_15">{{ grade.grade4 }}</div>
            </div>
          </div>
        </div>
      </div>

      <div class="banner3-div">
        <div class="number-div">
          <div class="each-number-div" v-for="(item, index) in numbers" :key='item.logo'>
            <div class="number-logo" :style="{backgroundImage:'url(' + item.logo + ')'}"></div>
            <div class="number-into">
              <div class="number-name">{{ item.title }}</div>
              <animate-number class="number" from="1" :to="item.number" duration="3000"></animate-number>
              <div class="number">{{ item.number2 }}</div>
              <span class="number-text" v-if="index == 0">位</span>
              <span class="number-text" v-if="index == 1">份</span>
            </div>
          </div>
          <!-- <div class="number-dataLine">*数据截止到2022年7月</div> -->
        </div>
      </div>

      <div class="banner12-div">
        <div class="carousel-div">
          <div class="each-product" v-for="(item, index) in products" :key="index">
            <div class="product-img" :style="{backgroundImage:'url(' + item.imgMobile + ')'}"></div>
            <div class="product-top-div" :style="{backgroundImage:'url(' + item.imgMB + ')'}">
              <div class="title">{{item.title}}</div>
              <div v-for="(item, index) in item.text" :key="index" class="text">{{item}}</div>
            </div>
          </div>
        </div>
      </div>

      <div class="banner4-div">
        <div class="title">三位一体辅导模式</div>
        <div class="title2">授课老师直播授课、答疑老师课后解惑、班主任日常督学；
          明确分工，立体式学习体验，快速提升考试成绩。</div>
        <div class="four-to-one-div"></div>
        <div class="four-to-one-div2">
          <div class="each1 each">
            <div class="each-title">授课老师</div>
            <div class="each-text">均来自哥伦比亚大学、宾夕法尼亚大学、范德堡大学等海外Top院校，拥有多年授课经验与扎实的语言知识功底</div>
            <!-- <div class="each-text"> </div> -->
          </div>
          <div class="each2 each">
            <div class="each-title">答疑老师</div>
            <div class="each-text">超长课后答疑周期，课下不限次数答疑，帮助同学们实时巩固知识</div>
          </div>
          <div class="each3 each">
            <div class="each-title">资深班主任</div>
            <div class="each-text">兼顾管理服务与督学，让同学告别拖延症</div>
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
        <div class="title">导师团队精选</div>
        <div class="teachers-div">
          <template v-for="item in teachers">
            <div class="each-teacher" :key="item.school">
              <div class="teacher-img" :style="{backgroundImage:'url(' + item.img + ')'}"></div>
              <div class="teacher-info-div">
                <div class="teacher-name">{{ item.name }}</div>
                <div class="teacher-school">{{ item.phdSchool ? item.phdSchool : item.school }}</div>
              </div>
            </div>
          </template>
        </div>
      </div>

      <div class="banner7-div">
        <div class="title">辅导科目</div>
        <div>
          <a :href="item.url" target="_blank" v-for="item in programs" :key="item.img">
            <div class="each-program" :style="{backgroundImage:'url(' + item.imgMB + ')'}"></div>
          </a>
        </div>
      </div>

      <div class="banner9-div">
        <div class="title">备考信息</div>
        <div class="title2">扫描下图二维码，获取更多备考干货</div>
        <div class="carousel-div">
          <div id="owl-demo3" class="">
            <div class="each-dynamic" v-for="(item, index) in dynamics" :key="index">
              <!-- <div class="logo">PALMDRIVE</div> -->
              <div class="dynamic-img" :style="{backgroundImage:'url(' + item.img + ')'}"></div>
              <div class="title">{{ item.title }}</div>
              <div class="text" v-html="item.text"></div>
              <div class="more"><img src="../assets/img/walnut/web/箭头.png" class="more-img" /></div>
              <div class="bottom-green"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="acticityInfoDialog">
        <el-dialog customClass="customDialog" :visible.sync="dialogActivity" width="8.4rem">
          <div class="activity-detail-div">
            <div class="left-div">
              <div class="each-title-div" v-for="(item, index) in selectedActivityTheme" :key="index">
                <div :style="{backgroundImage:'url(' + item.img + ')'}" class="theme-logo"></div>
                <span class="title">{{item.title}}</span>
                <div class="title2">{{item.title2}}</div>
              </div>
            </div>
            <div class="right-div">
              <div class="div1">
                <img src="../assets/img/home/activity/activity-code.png" class="more-img" />
              </div>
              <div class="div2">
                <div class="way">方式一</div>
                <div class="way-text">扫描二维码添加</div>
                <div class="way-text">小助手咨询</div>

                <div class="way way2">方式二</div>
                <div class="way-text">输入微信号添加小助手</div>
                <div class="way-text">微信号：pdpr19</div>
                <div class="way-text">或 18026424935</div>
              </div>
            </div>
          </div>
        </el-dialog>
      </div>

      <div class="mask" v-if="dialogActivity || dialogVisible"></div>

    </div>
  </div>
</template>

<script>
// import ca from require('../assets/third/carousel/owl.carousel.min.js'
import Common from './common/common'
import TeacherDialog from './common/teacherInfoDialog'
export default {
  components: {
    TeacherDialog
  },
  name: 'Home',
  data () {
    return {
      isMobile: Common.isMobile,
      schools: [
        {
          logo: require('../assets/img/home/school/hf.png'),
          name: '哈佛大学',
          offer: 47
        },
        {
          logo: require('../assets/img/home/school/stf.png'),
          name: '斯坦福大学',
          offer: 41
        },
        {
          logo: require('../assets/img/home/school/yl.png'),
          name: '耶鲁大学',
          offer: 65
        },
        {
          logo: require('../assets/img/home/school/zjg.png'),
          name: '芝加哥大学',
          offer: 177
        },
        {
          logo: require('../assets/img/home/school/bxfny.png'),
          name: '宾夕法尼亚大学',
          offer: 278
        },
        {
          logo: require('../assets/img/home/school/dk.png'),
          name: '杜克大学',
          offer: 218
        },
        {
          logo: require('../assets/img/home/school/kne.png'),
          name: '康奈尔大学',
          offer: 242
        },
        {
          logo: require('../assets/img/home/school/glby.png'),
          name: '哥伦比亚大学',
          offer: 744
        },
        {
          logo: require('../assets/img/home/school/nj.png'),
          name: '牛津大学',
          offer: 43
        },
        {
          logo: require('../assets/img/home/school/jq.png'),
          name: '剑桥大学',
          offer: 53
        },
        {
          logo: require('../assets/img/home/school/dglg.png'),
          name: '帝国理工学院',
          offer: 172
        },
        {
          logo: require('../assets/img/home/school/ldzzjj.png'),
          name: '伦敦政治经济学院',
          offer: 266
        },
        {
          logo: require('../assets/img/home/school/lddx.png'),
          name: '伦敦大学学院',
          offer: 468
        },
        {
          logo: require('../assets/img/home/school/xjpgl.png'),
          name: '新加坡国立大学',
          offer: 238
        },
        {
          logo: require('../assets/img/home/school/xg.png'),
          name: '香港大学',
          offer: 304
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
      activities2: [
        {
          img: require('../assets/img/home/activity/activity2-1.png')
        },
        {
          img: require('../assets/img/home/activity/activity2-2.png')
        },
        {
          img: require('../assets/img/home/activity/activity2-3.png')
        },
        {
          img: require('../assets/img/home/activity/activity2-4.png')
        },
        {
          img: require('../assets/img/home/activity/activity2-5.png')
        },
        {
          img: require('../assets/img/home/activity/activity2-6.png')
        },
        {
          img: require('../assets/img/home/activity/activity2-7.png')
        },
        {
          img: require('../assets/img/home/activity/activity2-8.png')
        }
      ],
      productsDetail: [
        [
          {
            index: '01',
            title: '全程专业的细致辅导',
            text: [
              '从选校定位，申请规划，实习科研，交流交换，再到最后的文书和网申，棕榈通过海量成功经验为你总结出最优道路',
              '文书精细打磨：导师团队，督导及外教层层把关',
              '棕榈内部每年针对辅导团队进行严格考核培训，确保高辅导质量'
            ]
          },
          {
            index: '02',
            title: '强大全面的数据库',
            text: [
              '案例库：追踪每位学生标化、经历和录取，海量数据辅助精准定位',
              '导师库：涵盖导师学历、录取院校、就业等海量数据',
              '选校库：助力硕博定位',
              '文书素材挖掘器：启发写作思路',
              '文书宝库：过来人授权公开的文书样例',
              '申请进度管理器：提升申请效率',
              '背景提升资源库：常规申请和内推实习科研资源查找',
              '专业手册：各专业项目深度介绍'
            ]
          },
          {
            index: '03',
            title: '真诚负责的辅导态度',
            text: [
              '棕榈的导师经过严格的培训，会在与学生沟通的过程中做到及时高效、真诚可靠',
              '棕榈承诺所有申请信息完全透明',
              '棕榈承诺做到平等对待每一位同学，个性化辅导'
            ]
          }
        ],
        [
          {
            index: '01',
            title: '费用透明',
            text: [
              '清楚地告诉消费者每一笔钱的去向，不花冤枉钱',
              '成本结构透明，确保导师团队劳有所获',
              '产品费用透明，后期无隐形费用加收'
            ]
          },
          {
            index: '02',
            title: '合同透明',
            text: [
              '申请结果不达标立即退费，无霸王条款',
              '尊重甲方权益，不强制保校',
              '严格履行乙方义务，悉数履行合同承诺',
              '辅导分阶段，退费比例合理清晰'
            ]
          },
          {
            index: '03',
            title: '师资透明',
            text: [
              '所有全职主导师和专业导师的各项资质均可追溯，包括学历背景、工作经验、申请战绩等'
            ]
          },
          {
            index: '04',
            title: '流程透明',
            text: [
              '申请信息绝对共享，无任何暗箱操作，申请进度随时可查看',
              '申请过程确保学员参与度，不做留学小白',
              '申请院校自主透明选择，所申即所想'
            ]
          },
          {
            index: '05',
            title: '数据透明',
            text: [
              '棕榈承诺将后台数据库前台化，案例库中所有案例均保证真实可追溯',
              '不删网络差评，保留公开反馈通道，保证正面回应问题'
            ]
          }
        ],
        [
          {
            index: '01',
            title: '订制化留学套餐',
            text: [
              '业内首创四位一体模式，根据每位同学的实际需求制定留学套餐，每一分钱都花在能实际提升录取概率的服务上',
              '棕榈承诺前期咨询师提供的承诺和后期服务一致',
              '申请季服务时间和文书修改次数均不设上限，全方位保障学生申请质量'
            ]
          },
          {
            index: '02',
            title: '及时的反馈机制',
            text: [
              '完善的监督和反馈体系。导师24小时内回复，不会无故失联超过 3 天。同学对服务团队中的任何人或者服务产生不满，可以随时向第三方（树洞君）进行反馈。督导团队会第一时间解决问题并给出客户满意的解决方案。'
            ]
          },
          {
            index: '03',
            title: '一站式留学辅导平台',
            text: [
              '核桃英语高质量语言线上班课，留学语培一把抓',
              '棕榈学院 Project Based Learning 课程，学术公开课，科研论文辅导，为提升研究背景铺路',
              '专职背景提升部门，开发高性价比实习科研项目，建立高质量内推合作安置，助力解决背景提升资源难题',
              '种子计划—业内首创专职种子导师团队辅导大一到大三非当季同学，融合以上所有资源，一站式解决留学所有问题'
            ]
          },
          {
            index: '04',
            title: '干货分享-信诚则立',
            text: [
              '棕榈大道生产超过 5000+ 篇微信、知乎留学干货文章',
              '线上线下讲座超过1200场',
              '活动参与人数累积超过30000人次',
              '生产 110 万+字绝密资料，超过 100 万人领取',
              '通过棕榈干货输出，打破行业信息不对称，每年直接或间接助力 20 万人申请'
            ]
          }
        ]
      ],
      activityThemes: [
        [
          {
            img: require('../assets/img/home/activity/theme-logo1.png'),
            title: '活动主题',
            title2: '专业定位报告活动'
          },
          {
            img: require('../assets/img/home/activity/theme-logo2.png'),
            title: '报名时间',
            title2: '4月7日'
          },
          {
            img: require('../assets/img/home/activity/theme-logo3.png'),
            title: '针对人群',
            title2: '对专业选择有犹豫和迷茫的学生'
          },
          {
            img: require('../assets/img/home/activity/theme-logo4.png'),
            title: '活动形式',
            title2: '填写表单，回复个人定制化报告'
          },
          {
            img: require('../assets/img/home/activity/theme-logo5.png'),
            title: '活动简介',
            title2:
              '集合棕榈文理工商主导师，对专业选择有犹豫、迷茫的同学进行背景分析、专业定位、匹配度的客观分析，给学生的后续选择提出参考意见，同时给出提升的锦囊。'
          }
        ],
        [
          {
            img: require('../assets/img/home/activity/theme-logo1.png'),
            title: '活动主题',
            title2: 'gap year 专场直播课'
          },
          {
            img: require('../assets/img/home/activity/theme-logo2.png'),
            title: '报名时间',
            title2: '4月14日'
          },
          {
            img: require('../assets/img/home/activity/theme-logo3.png'),
            title: '针对人群',
            title2: '大四准备gap及大三下晚申党'
          },
          {
            img: require('../assets/img/home/activity/theme-logo4.png'),
            title: '活动形式',
            title2: '讲座分享'
          },
          {
            img: require('../assets/img/home/activity/theme-logo5.png'),
            title: '活动简介',
            title2:
              'gap适合那些人？怎么让gap year 价值最大化？gap、晚申党如何冲刺今年秋季申请？'
          }
        ],
        [
          {
            img: require('../assets/img/home/activity/theme-logo1.png'),
            title: '活动主题',
            title2: '中外合办院校学生留学申请讲座'
          },
          {
            img: require('../assets/img/home/activity/theme-logo2.png'),
            title: '报名时间',
            title2: '4月14日'
          },
          {
            img: require('../assets/img/home/activity/theme-logo3.png'),
            title: '针对人群',
            title2: '中外合办院校、学院、项目的同学'
          },
          {
            img: require('../assets/img/home/activity/theme-logo4.png'),
            title: '活动形式',
            title2: '线上讲座+答疑'
          },
          {
            img: require('../assets/img/home/activity/theme-logo5.png'),
            title: '活动简介',
            title2:
              '邀请西浦本科、UCL 研究生毕业的 Yimei 导师，教大家利用“先天”优势，准确定位，为冲刺名校做针对性提升。'
          }
        ],
        [
          {
            img: require('../assets/img/home/activity/theme-logo1.png'),
            title: '活动主题',
            title2: '盲盒活动2.0'
          },
          {
            img: require('../assets/img/home/activity/theme-logo2.png'),
            title: '报名时间',
            title2: '4月16日'
          },
          {
            img: require('../assets/img/home/activity/theme-logo3.png'),
            title: '针对人群',
            title2: '申请规划期的学生'
          },
          {
            img: require('../assets/img/home/activity/theme-logo4.png'),
            title: '活动形式',
            title2: '线上门诊'
          },
          {
            img: require('../assets/img/home/activity/theme-logo5.png'),
            title: '活动简介',
            title2:
              '多专业导师门诊合集，以趣味SVG的形式展现导师个人特色和专业特点。'
          }
        ],
        [
          {
            img: require('../assets/img/home/activity/theme-logo1.png'),
            title: '活动主题',
            title2: '港新+美国混申讲座'
          },
          {
            img: require('../assets/img/home/activity/theme-logo2.png'),
            title: '报名时间',
            title2: '4月18日'
          },
          {
            img: require('../assets/img/home/activity/theme-logo3.png'),
            title: '针对人群',
            title2: '意向混申港新+美国的学生'
          },
          {
            img: require('../assets/img/home/activity/theme-logo4.png'),
            title: '活动形式',
            title2: '线上讲座'
          },
          {
            img: require('../assets/img/home/activity/theme-logo5.png'),
            title: '活动简介',
            title2:
              '邀请有美国+港新混申经历的导师分享个人经历，讲述混申的优势、规划提升重点、需要避雷的地方。'
          }
        ],
        [
          {
            img: require('../assets/img/home/activity/theme-logo1.png'),
            title: '活动主题',
            title2: '专业导师分享讲座'
          },
          {
            img: require('../assets/img/home/activity/theme-logo2.png'),
            title: '报名时间',
            title2: '4月19日'
          },
          {
            img: require('../assets/img/home/activity/theme-logo3.png'),
            title: '针对人群',
            title2: '对文转商或入职金融行业感兴趣的同学'
          },
          {
            img: require('../assets/img/home/activity/theme-logo4.png'),
            title: '活动形式',
            title2: '线上讲座+答疑'
          },
          {
            img: require('../assets/img/home/activity/theme-logo5.png'),
            title: '活动简介',
            title2:
              '导师纯文科本科出身，硕士毕业后转行去了金融投资领域，拥有文商复合实习经历，他将分享自己的文转商经历、针对不同同学的情况提供转专业申请或转行的可行性分析、给到一些针对性找实习的攻略。'
          }
        ],
        [
          {
            img: require('../assets/img/home/activity/theme-logo1.png'),
            title: '活动主题',
            title2: '套磁技巧大公开'
          },
          {
            img: require('../assets/img/home/activity/theme-logo2.png'),
            title: '报名时间',
            title2: '4月20日'
          },
          {
            img: require('../assets/img/home/activity/theme-logo3.png'),
            title: '针对人群',
            title2: '准备申请科研项目及想要尝试套磁博士项目的同学'
          },
          {
            img: require('../assets/img/home/activity/theme-logo4.png'),
            title: '活动形式',
            title2: '讲座分享'
          },
          {
            img: require('../assets/img/home/activity/theme-logo5.png'),
            title: '活动简介',
            title2:
              '如何套磁科研项目、博士申请，套磁该如何准备，套磁邮件又应该怎么写。'
          }
        ],
        [
          {
            img: require('../assets/img/home/activity/theme-logo1.png'),
            title: '活动主题',
            title2: '晚申冲刺报告'
          },
          {
            img: require('../assets/img/home/activity/theme-logo2.png'),
            title: '报名时间',
            title2: '4月23日'
          },
          {
            img: require('../assets/img/home/activity/theme-logo3.png'),
            title: '针对人群',
            title2: '即将步入申请季的大三人群'
          },
          {
            img: require('../assets/img/home/activity/theme-logo4.png'),
            title: '活动形式',
            title2: '定制类报告'
          },
          {
            img: require('../assets/img/home/activity/theme-logo5.png'),
            title: '活动简介',
            title2:
              '在即将步入申请季的关键关头，导师天团将根据大家目前的申请背景，为你定制适合自己的提升规划方案，帮助大家在紧凑的时间内冲刺提升，更好地向梦校进击！'
          }
        ]
      ],
      banner1: '',
      banner13: '',
      maxNumber: 8,
      dialogVisible: false,
      selectTeacher: {},
      showDetailDiv: false,
      currentShowDot: 99,
      selectProductDetail: [],
      activityShowNumber: 3,
      activityShowNumberMB: 4,
      dialogActivity: false,
      selectedActivityTheme: [],

      owlBanners: [
        {
          img: require('../assets/img/walnut/web/b1-1.png'),
          imgMobile: require('../assets/img/walnut/mobile/b1.png'),
          erCodeUrl: require('../assets/img/walnut/web/erCode.png')
        },
        {
          img: require('../assets/img/walnut/web/b2-1.png'),
          imgMobile: require('../assets/img/walnut/mobile/b2.png'),
          erCodeUrl: require('../assets/img/walnut/web/erCode.png')
        },
        {
          img: require('../assets/img/walnut/web/b3-1.png'),
          imgMobile: require('../assets/img/walnut/mobile/b3.png'),
          erCodeUrl: require('../assets/img/walnut/web/erCode.png')
        }
      ],
      gradeList: [
        {
          img: require('../assets/img/walnut/web/编组 9.png'),
          grade1: 8.5,
          grade2: 7.07,
          grade3: 2.0,
          grade4: 0.8
        },
        {
          img: require('../assets/img/walnut/web/编组 10.png'),
          grade1: 118,
          grade2: 100.4,
          grade3: 46,
          grade4: 10.23
        },
        {
          img: require('../assets/img/walnut/web/编组 13.png'),
          grade1: 340,
          grade2: 321.8,
          grade3: 28,
          grade4: 9.43
        },
        {
          img: require('../assets/img/walnut/web/编组 14.png'),
          grade1: 740,
          grade2: 680,
          grade3: 120,
          grade4: 60
        }
      ],
      numbers: [
        {
          logo: require('../assets/img/walnut/web/编组 15.png'),
          title: '服务学生总数',
          number: '8000',
          number2: '+'
        },
        {
          logo: require('../assets/img/walnut/web/编组 16.png'),
          title: '累积举办线上英语学习活动',
          number: '500',
          number2: '+'
        },
        {
          logo: require('../assets/img/walnut/web/编组 17.png'),
          title: '累积参与线上学习活动',
          number: '10',
          number2: 'w+'
        }
      ],
      products: [
        {
          img: require('../assets/img/walnut/web/编组 27.png'),
          title: '专 业',
          text: [
            '全程专业的细致辅导',
            '强大全面的数据库',
            '真诚负责的辅导态度'
          ],
          color: '#3980D3',
          imgMB: require('../assets/img/walnut/web/编组18.png'),
          imgMobile: require('../assets/img/walnut/mobile/编组7.png')
        },
        {
          img: require('../assets/img/walnut/web/编组.png'),
          title: '透 明',
          text: ['费用透明   合同透明', '师资透明   流程透明', '数据透明'],
          color: '#A9C669',
          imgMB: require('../assets/img/walnut/web/编组 19.png'),
          imgMobile: require('../assets/img/walnut/mobile/编组8.png')
        },
        {
          img: require('../assets/img/walnut/web/045-university.png'),
          title: '全心为你',
          text: [
            '定制化留学套餐',
            '及时的反馈机制',
            '一站式留学辅导平台',
            '干货分享 信诚则立'
          ],
          color: '#23D0C9',
          imgMB: require('../assets/img/walnut/web/编组28.png'),
          imgMobile: require('../assets/img/walnut/mobile/编组9.png')
        }
      ],
      intros: [
        {
          logo: require('../assets/img/walnut/web/013-college.png'),
          title: '课程礼包免费赠送',
          text:
            '班课开课前，班主任给每位学员免费寄送课程礼包，包含：精编课程讲义，核桃专属学习用品（笔记本、签字笔等）'
        },
        {
          logo: require('../assets/img/walnut/web/007-folder.png'),
          title: '独家原创提分资料',
          text:
            '由宾大、哥大、范德堡大学等英语教育专业的老师专门整理，编辑，涵盖了各个科目的资料，'
        },
        {
          logo: require('../assets/img/walnut/web/编组8.png'),
          title: '全程无忧退费',
          text:
            '开课后如对课程不满意，或时间安排有变动，按照课表已开课课时比例进行退费。'
        },
        {
          logo: require('../assets/img/walnut/web/diploma-1.png'),
          title: '千元奖学金',
          text:
            '课程结束半年内，考出分数的同学均可以根据分数进行【高分奖】、【提分奖】的评选，最高可达1000元。'
        }
      ],
      teachers: [
        {
          img: require('../assets/img/teachers/walnut/Fiona.png'),
          name: 'Fiona',
          school: '宾夕法尼亚大学 TESOL专业'
        },
        {
          img: require('../assets/img/teachers/walnut/Alexa.png'),
          name: 'Alexa',
          school: '哥伦比亚大学 TESOL专业'
        },
        {
          img: require('../assets/img/teachers/walnut/Valerie.png'),
          name: 'Valerie',
          school: '哥伦比亚大学 TESOL专业'
        },
        {
          img: require('../assets/img/teachers/walnut/Julie.png'),
          name: 'Julie',
          school: '范德堡大学 ELL专业'
        },
        {
          img: require('../assets/img/teachers/walnut/Hellin.png'),
          name: 'Hellin',
          school: '爱丁堡大学 语言教育专业硕士'
        },
        {
          img: require('../assets/img/teachers/walnut/Bella.png'),
          name: 'Bella',
          school: '加利福尼亚大学洛杉矶分校 硕士'
        }
      ],
      programs: [
        {
          img: require('../assets/img/walnut/web/雅思课程.png'),
          url:
            'https://mp.weixin.qq.com/s?__biz=MzU0NTA3NDU3MA==&mid=2247803682&idx=1&sn=39325bd6927041b5d90accd8908e99a0&chksm=fb7c1fc7cc0b96d13982627b9bf7a25675ad6b8921a10b1bb691e0d117e155f3f97d0c8afa5d#rd',
          imgMB: require('../assets/img/walnut/web/雅思课程.png')
        },
        {
          img: require('../assets/img/walnut/web/托福课程.png'),
          url:
            'https://mp.weixin.qq.com/s?__biz=MzU0NTA3NDU3MA==&mid=2247803682&idx=2&sn=4a3c4ae8bf59ad30cc54109159e04c74&chksm=fb7c1fc7cc0b96d1e1347fe49f8d95359a65c5611d3a8ff815e8345c7258d5a4265d1157f6fa#rd',
          imgMB: require('../assets/img/walnut/web/托福课程.png')
        },
        {
          img: require('../assets/img/walnut/web/系统课程.png'),
          url:
            'https://mp.weixin.qq.com/s?__biz=MzU0NTA3NDU3MA==&mid=2247803682&idx=3&sn=86ae3b25a5bc94ece4f52af941023fa3&chksm=fb7c1fc7cc0b96d1b0567ec53f62582177712e7a9cf6e3f109679faeacd06d34711d0d4a3da9#rd',
          imgMB: require('../assets/img/walnut/web/系统课程.png')
        },
        {
          img: require('../assets/img/walnut/web/GMAT.png'),
          url:
            'https://mp.weixin.qq.com/s?__biz=MzU0NTA3NDU3MA==&mid=2247803682&idx=4&sn=7ac2af0a57e302f73d9621e31e546ff3&chksm=fb7c1fc7cc0b96d1efe8c7eff2227757019e7cd9b03dc3c66367891106b4b7d148597c99c2ea#rd',
          imgMB: require('../assets/img/walnut/web/GMAT.png')
        }
      ],
      dynamics: [
        {
          img: require('../assets/img/walnut/web/位图.png'),
          title: '核桃英语全套课程计划',
          text: '雅思、托福、GRE、GMAT<br/>为不同的同学量身定制'
        },
        {
          img: require('../assets/img/walnut/web/位图1.png'),
          title: '学霸附体 高分不愁',
          text: '来自核桃家族学员的<br/>真实备考经验'
        },
        {
          img: require('../assets/img/walnut/web/位图2.png'),
          title: '核桃独家备考指南',
          text: '雅思、托福、GRE、GMAT<br/>你想了解的都在这里'
        },
        {
          img: require('../assets/img/walnut/web/位图3.png'),
          title: '核桃王牌老师专访',
          text: '这批老师，多少带点<br/>“内卷”的意思'
        }
      ],
      showPopContainer: false
    }
  },
  created () {
    this.banner1 = this.isMobile
      ? require('../assets/img/walnut/mobile/b1.png')
      : require('../assets/img/walnut/web/b1.png')
    this.banner13 = require('../assets/img/home/banner13.png')
    this.selectProductDetail = this.productsDetail[0]
  },
  mounted () {
    this.$nextTick(function () {
      $('#owl-demo1').owlCarousel({
        items: 1,
        margin: 0,
        lazyLoad: true,
        nav: false,
        dots: false,
        autoplay: true,
        loop: true,
        autoplayHoverPause: true,
        navText: [
          "<i class='left-arrow home-activity-left-arrow'></i>",
          "<i class='right-arrow home-activity-right-arrow'></i>"
        ]
      })

      $('#owl-demo2').owlCarousel({
        items: 4,
        margin: 14,
        lazyLoad: true,
        nav: true,
        dots: false,
        autoplay: true,
        loop: false,
        autoplayHoverPause: true,
        navText: [
          "<i class='left-arrow home-dynamic-left-arrow'></i>",
          "<i class='right-arrow home-dynamic-right-arrow'></i>"
        ]
      })
    })
  },
  methods: {
    openERCode (url) {
      // let temp = "<div class='code-img'></div>"
      // this.$confirm(temp, {
      //   dangerouslyUseHTMLString: true,
      //   showConfirmButton: false,
      //   showCancelButton: false
      // })

      this.showPopContainer = true
    },

    closeERCode () {
      this.showPopContainer = false
    },

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
    },

    handleOpenDialog (item) {
      this.dialogVisible = true
      this.selectTeacher = item
    },

    showProductDetail (index) {
      if (this.currentShowDot === index) {
        this.showDetailDiv = !this.showDetailDiv
      } else {
        this.currentShowDot = index
        this.showDetailDiv = true
      }
      this.selectProductDetail = this.productsDetail[index]
    },

    handleOpenActivityDialog (index) {
      this.dialogActivity = true
      this.selectedActivityTheme = this.activityThemes[index]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.walnut {
  text-align: center;

  .code-img {
    width: 235px;
    height: 235px;
    background-image: url('../assets/img/walnut/web/erCode.png');
    position: absolute;
    z-index: 101;
    left: 50%;
    margin-left: -116px;
    top: 210px;
  }
  .popContainer {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    z-index: 100;
  }

  .web-div {
    .banner1-div {
      width: 100%;
      // padding: 16px 0 33px;
      background-color: #1bbeb2;

      .banner1 {
        width: 1080px;
        height: 480px;
        margin: 0 auto;
        position: relative;
        text-align: left;
        background-repeat: no-repeat;
        background-size: contain;
        cursor: pointer;
        background-position: center;
      }
    }

    .banner2-div {
      background-color: #fff;

      .text_10 {
        width: 160px;
        height: 56px;
        display: inline-block;
        overflow-wrap: break-word;
        color: rgba(0, 0, 0, 1);
        font-size: 40px;
        font-family: Helvetica-BoldOblique;
        white-space: nowrap;
        line-height: 56px;
        text-align: center;
        margin-top: 50px;
        margin-bottom: 28px;
      }

      .content {
        width: 1080px;
        text-align: center;
        margin: 0 auto 4px;

        .grade-each-boder {
          display: inline-block;
          width: 437px;
          height: 151px;
          background: #ffffff;
          border: 1px solid #eeeeee;
          margin: 0 11px 21px 0;
          text-align: left;

          .class-img {
            width: 131px;
            height: 125px;
            margin: 14px 47px 0 41px;
            float: left;
          }

          .text-wrapper_3 {
            width: 61px;
            // height: 188px;
            margin: 23px 46px 0 0px;
            display: inline-block;
            float: left;

            .text_12 {
              width: 61px;
              height: 17px;
              font-size: 12px;
              font-family: Helvetica-Bold, Helvetica;
              font-weight: bold;
              color: #000000;
              line-height: 15px;
            }
            .text_13 {
              width: 35px;
              height: 24px;
              font-size: 20px;
              font-family: Helvetica-Bold, Helvetica;
              font-weight: bold;
              color: #2fada1;
              line-height: 24px;
              margin-top: 5px;
              margin-bottom: 13px;
            }
            .text_14 {
              width: 61px;
              height: 17px;
              font-size: 12px;
              font-family: Helvetica-BoldOblique, Helvetica;
              font-weight: normal;
              color: #000000;
              line-height: 15px;
            }
            .text_15 {
              width: 49px;
              height: 24px;
              font-size: 20px;
              font-family: Helvetica-Bold, Helvetica;
              font-weight: bold;
              color: #2fada1;
              line-height: 24px;
              margin-top: 6px;
            }
          }
        }
      }

      // .box_4 {
      //   width: 1080px;
      //   height: 269px;
      //   margin: 50px 0 0 171px;
      //   .box_5 {
      //     height: 151px;
      //     border: 2px solid rgba(238, 238, 238, 1);
      //     background-color: rgba(255, 255, 255, 1);
      //     width: 437px;
      //     .section_1 {
      //       width: 614px;
      //       height: 221px;
      //       margin: 14px 0 0 41px;
      //       .text-wrapper_2 {
      //         height: 125px;
      //         background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng69dce54f0b8f9d6bf28bcb0a08ec306a2c16a4d25353d8a9be134f5b3ab4befa)
      //           0px 0px no-repeat;
      //         background-size: 232px 222px;
      //         width: 131px;
      //         .text_11 {
      //           width: 136px;
      //           height: 95px;
      //           display: inline-block;
      //           overflow-wrap: break-word;
      //           color: rgba(40, 177, 164, 1);
      //           font-size: 68px;
      //           font-family: Helvetica-Bold;
      //           white-space: nowrap;
      //           line-height: 95px;
      //           text-align: left;
      //           margin: 66px 0 0 47px;
      //         }
      //       }
      //       .text-wrapper_3 {
      //         width: 109px;
      //         height: 188px;
      //         margin: 16px 0 0 84px;
      //         .text_12 {
      //           width: 109px;
      //           height: 30px;
      //           display: inline-block;
      //           overflow-wrap: break-word;
      //           color: rgba(0, 0, 0, 1);
      //           font-size: 22px;
      //           font-family: Helvetica-Bold;
      //           white-space: nowrap;
      //           line-height: 30px;
      //           text-align: left;
      //         }
      //         .text_13 {
      //           width: 63px;
      //           height: 43px;
      //           display: inline-block;
      //           overflow-wrap: break-word;
      //           color: rgba(47, 173, 161, 1);
      //           font-size: 36px;
      //           font-family: Helvetica-Bold;
      //           white-space: nowrap;
      //           line-height: 43px;
      //           text-align: left;
      //           margin-top: 9px;
      //         }
      //         .text_14 {
      //           width: 109px;
      //           height: 30px;
      //           display: inline-block;
      //           overflow-wrap: break-word;
      //           color: rgba(0, 0, 0, 1);
      //           font-size: 22px;
      //           font-family: Helvetica-BoldOblique;
      //           white-space: nowrap;
      //           line-height: 30px;
      //           text-align: left;
      //           margin-top: 24px;
      //         }
      //         .text_15 {
      //           width: 88px;
      //           height: 43px;
      //           display: inline-block;
      //           overflow-wrap: break-word;
      //           color: rgba(47, 173, 161, 1);
      //           font-size: 36px;
      //           font-family: Helvetica-Bold;
      //           white-space: nowrap;
      //           line-height: 43px;
      //           text-align: left;
      //           margin-top: 9px;
      //         }
      //       }
      //       .text-wrapper_4 {
      //         width: 109px;
      //         height: 188px;
      //         margin: 16px 0 0 81px;
      //         .text_16 {
      //           width: 109px;
      //           height: 30px;
      //           display: inline-block;
      //           overflow-wrap: break-word;
      //           color: rgba(0, 0, 0, 1);
      //           font-size: 22px;
      //           font-family: Helvetica-Bold;
      //           white-space: nowrap;
      //           line-height: 30px;
      //           text-align: left;
      //         }
      //         .text_17 {
      //           width: 63px;
      //           height: 43px;
      //           display: inline-block;
      //           overflow-wrap: break-word;
      //           color: rgba(47, 173, 161, 1);
      //           font-size: 36px;
      //           font-family: Helvetica-Bold;
      //           white-space: nowrap;
      //           line-height: 43px;
      //           text-align: left;
      //           margin: 9px 0 0 1px;
      //         }
      //         .text_18 {
      //           width: 109px;
      //           height: 30px;
      //           display: inline-block;
      //           overflow-wrap: break-word;
      //           color: rgba(0, 0, 0, 1);
      //           font-size: 22px;
      //           font-family: Helvetica-Bold;
      //           white-space: nowrap;
      //           line-height: 30px;
      //           text-align: left;
      //           margin-top: 24px;
      //         }
      //         .text_19 {
      //           width: 88px;
      //           height: 43px;
      //           display: inline-block;
      //           overflow-wrap: break-word;
      //           color: rgba(47, 173, 161, 1);
      //           font-size: 36px;
      //           font-family: Helvetica-Bold;
      //           white-space: nowrap;
      //           line-height: 43px;
      //           text-align: left;
      //           margin: 9px 0 0 1px;
      //         }
      //       }
      //     }
      //   }
      // }
    }

    .banner3-div {
      padding: 63px 0 62px;
      background-color: #28a7a9;

      .number-div {
        text-align: center;
        width: 1200px;
        margin: 0 auto;

        .each-number-div {
          height: 71px;
          width: 330px;
          display: inline-block;
          margin: 0 25px;

          .number-logo {
            width: 71px;
            height: 100%;
            display: inline-block;
            background-size: contain;
          }

          .number-into {
            display: inline-block;
            margin-left: 25px;
            text-align: left;
            vertical-align: top;

            .number-name {
              font-size: 18px;
              font-family: PingFangHK-Regular, PingFangHK;
              font-weight: 400;
              line-height: 18px;
              color: #fff;
              opacity: 1;
              margin: 1px 0 5px;
              line-height: 25px;
            }

            .number {
              font-size: 33px;
              font-family: Biko;
              font-weight: Bold;
              line-height: 45px;
              color: #fff;
              opacity: 1;
              display: inline-block;
            }

            .number-text {
              font-size: 20px;
              display: inline-block;
              color: #eeeeee;
              font-family: SourceHanSansCN;
            }
          }
        }

        .number-dataLine {
          height: 17px;
          font-size: 12px;
          font-family: PingFang SC;
          font-weight: 400;
          line-height: 17px;
          color: rgba(0, 124, 118, 1);
          opacity: 1;
          margin-top: 20px;
          text-align: right;
          margin-right: 45px;
        }
      }
    }

    .banner4-div {
      padding: 61px 0 34px;
      background-color: #fff;

      .title {
        font-size: 24px;
        font-family: SourceHanSansCN;
        font-weight: bold;
        line-height: 24px;
        color: rgba(60, 60, 60, 1);
        opacity: 1;
      }

      .title2 {
        width: 500px;
        font-size: 16px;
        font-family: SourceHanSansCN;
        font-weight: 400;
        line-height: 23px;
        color: rgba(60, 60, 60, 1);
        opacity: 1;
        margin: 12px auto 13px;
      }

      .four-to-one-div {
        width: 1008px;
        height: 472px;
        margin: 0 auto;
        background-image: url('../assets/img/walnut/web/编组20.png');
        position: relative;
        text-align: left;
        background-repeat: no-repeat;
        background-size: cover;

        .each {
          width: 300px;
          text-align: left;
          position: absolute;
          right: 76px;
        }

        .each1 {
          top: 105px;
        }

        .each2 {
          top: 218px;
        }

        .each3 {
          top: 333px;
        }

        .each-title {
          font-size: 16px;
          font-family: SourceHanSansCN;
          font-weight: bold;
          line-height: 20px;
          color: rgba(60, 60, 60, 1);
          opacity: 1;
          margin-bottom: 8px;
        }

        .each-text {
          font-size: 9px;
          font-family: SourceHanSansCN, Biko;
          font-weight: 500;
          line-height: 20px;
          color: rgba(117, 117, 117, 1);
          opacity: 1;
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
        font-size: 18px;
        font-family: SourceHanSansCN;
        font-weight: bold;
        line-height: 18px;
        color: rgba(60, 60, 60, 1);
        opacity: 1;
      }

      .title4 {
        font-size: 14px;
        font-family: SourceHanSansCN;
        font-weight: 400;
        line-height: 14px;
        color: rgba(148, 148, 148, 1);
        opacity: 1;
        margin-top: 8px;
      }
    }

    .banner5-div {
      padding: 68px 0 68px;
      background-color: #f6fafc;
      text-align: center;

      .intos-div {
        width: 1100px;
        margin: 0 auto;

        .each-into-div {
          margin: 0 16px;
          width: 219px;
          display: inline-block;
          text-align: center;
          vertical-align: top;

          .intro-logo {
            width: 53px;
            height: 53px;
            background-repeat: no-repeat;
            background-size: contain;
            margin: 0 auto;
          }

          .intro-title {
            margin: 16px 0 10px;
            font-size: 14px;
            font-family: Helvetica-BoldOblique, Helvetica, SourceHanSansCN;
            font-weight: bold;
            line-height: 16px;
            color: #454545;
            opacity: 1;
          }

          .intro-text {
            font-size: 10px;
            font-family: SourceHanSansCN-Normal, SourceHanSansCN;
            font-weight: 400;
            line-height: 16px;
            color: #454545;
            opacity: 1;
          }
        }
      }
    }

    .banner6-div {
      padding: 32px 0 29px;
      background-color: #fff;

      .title {
        font-size: 24px;
        font-family: SourceHanSansCN;
        font-weight: bold;
        line-height: 24px;
        color: rgba(60, 60, 60, 1);
        opacity: 1;
        margin-bottom: 35px;
      }

      .teachers-div {
        width: 1130px;
        text-align: center;
        margin: 0 auto;

        .each-teacher {
          width: 289px;
          margin: 0 20px 33px;
          display: inline-block;
          vertical-align: top;
          cursor: pointer;

          .teacher-img {
            width: 100%;
            height: 357px;
            background-repeat: no-repeat;
            background-size: cover;
          }

          .teacher-info-div {
            height: 96px;
            background-color: #f4f4f4;
            padding: 17px 20px 0 21px;
            text-align: left;

            .teacher-name {
              font-size: 18px;
              font-family: Campton;
              font-weight: bold;
              line-height: 18px;
              color: rgba(51, 51, 51, 1);
              opacity: 1;
            }

            .teacher-school {
              font-size: 15px;
              font-family: SourceHanSansCN;
              font-weight: 400;
              line-height: 20px;
              color: rgba(51, 51, 51, 1);
              opacity: 1;
              margin-top: 7px;
            }
          }
        }

        .each-teacher:hover {
          transform: scale(1.1);
          transition-duration: 0.5s;
        }

        .more-teachers {
          font-size: 15px;
          font-family: PingFang SC;
          font-weight: 500;
          line-height: 15px;
          color: rgba(57, 60, 61, 1);
          opacity: 1;
          text-align: right;
          margin-right: 20px;
          cursor: pointer;

          a {
            text-decoration: none;
            color: rgba(57, 60, 61, 1);
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
      padding: 37px 0 53px;
      background-color: #f6fafc;

      .title {
        font-size: 24px;
        font-family: SourceHanSansCN;
        font-weight: bold;
        line-height: 24px;
        color: rgba(60, 60, 60, 1);
        opacity: 1;
        margin-bottom: 27px;
      }

      .each-program {
        width: 224px;
        height: 143px;
        box-shadow: 0px 5px 6px rgba(189, 189, 189, 1);
        border-radius: 15px;
        opacity: 1;
        display: inline-block;
        margin: 0 8px;
        background-repeat: no-repeat;
        background-size: cover;
      }

      .each-program:hover {
        transform: scale(1.1);
        transition-duration: 0.5s;
      }
    }

    .banner8-div {
      padding: 58px 0 50px;
      background-color: #fff;
      text-align: center;
      font-size: 30px;
      display: none;

      .title {
        font-size: 24px;
        font-family: SourceHanSansCN;
        font-weight: bold;
        line-height: 24px;
        color: rgba(60, 60, 60, 1);
        opacity: 1;
      }

      .title2 {
        font-size: 18px;
        font-family: PingFang SC;
        font-weight: 400;
        line-height: 18px;
        color: rgba(85, 85, 85, 1);
        opacity: 1;
        margin: 11px 0 52px;
      }

      .carousel-div {
        width: 985px;
        margin: 0 auto;
        text-align: left;

        .activity-img {
          width: 222px;
          height: 116px;
        }

        .title {
          font-size: 13px;
          font-family: SourceHanSansCN;
          font-weight: bold;
          line-height: 13px;
          color: rgba(85, 85, 85, 1);
          opacity: 1;
          margin: 19px 0 11px;
        }

        .time {
          font-size: 11px;
          font-family: SourceHanSansCN;
          font-weight: 500;
          line-height: 19px;
          color: rgba(85, 85, 85, 1);
          opacity: 1;
        }
      }
    }

    .banner8-2-div {
      padding: 70px 0 87px;
      background-color: #fff;

      .title {
        font-size: 24px;
        font-family: SourceHanSansCN;
        font-weight: bold;
        line-height: 24px;
        color: rgba(60, 60, 60, 1);
        opacity: 1;
      }

      .title2 {
        font-size: 18px;
        font-family: PingFang SC;
        font-weight: 400;
        line-height: 18px;
        color: rgba(85, 85, 85, 1);
        opacity: 1;
        margin: 12px 0 61px;
      }

      .activity-div {
        width: 880px;
        margin: 0 auto;

        .each-program {
          width: 249px;
          height: 129px;
          // box-shadow: 0px 5px 6px rgba(189,189,189,1);
          // border-radius: 15px;
          opacity: 1;
          display: inline-block;
          margin: 0 21px 54px;
          background-repeat: no-repeat;
          background-size: cover;
          cursor: pointer;
        }

        .each-program:hover {
          transform: scale(1.1);
          transition-duration: 0.5s;
        }
      }

      .more-activity {
        font-size: 15px;
        font-family: PingFang SC;
        font-weight: 500;
        line-height: 15px;
        color: rgba(57, 60, 61, 1);
        opacity: 1;
        text-align: right;
        margin-right: 20px;
        cursor: pointer;
        margin-right: -120px;

        .more-img {
          width: 17px;
          height: 17px;
          margin-left: 15px;
          display: inline-block;
          vertical-align: bottom;
        }
      }
    }

    .banner9-div {
      padding: 65px 0 70px;
      background-color: #f1f7fa;
      text-align: center;

      .title {
        font-size: 24px;
        font-family: SourceHanSansCN;
        font-weight: bold;
        line-height: 24px;
        color: rgba(51, 51, 51, 1);
        opacity: 1;
      }

      .title2 {
        margin: 13px 0 51px;
        font-size: 16px;
        font-family: SourceHanSansCN-Regular, SourceHanSansCN;
        font-weight: 400;
        line-height: 22px;
        color: #2fada1;
        opacity: 1;
      }

      .carousel-div {
        width: 950px;
        margin: 0 auto;
        text-align: left;

        .each-dynamic {
          padding: 14px 14px 0;
          background: rgba(255, 255, 255, 1);
          box-shadow: 5px 5px 6px rgba(47, 47, 47, 0.21);
          opacity: 1;
          width: 190px;

          .logo {
            font-size: 12px;
            font-family: Campton;
            font-weight: bold;
            line-height: 14px;
            color: rgba(190, 190, 190, 1);
            opacity: 1;
          }

          .dynamic-img {
            // margin: 11px 0 18px;
            width: 188px;
            height: 188px;
            background-repeat: no-repeat;
            background-size: cover;
          }

          .title {
            font-size: 19px;
            font-family: PingFangHK-Semibold, PingFangHK, SourceHanSansCN;
            font-weight: 600;
            line-height: 27px;
            color: rgba(0, 0, 0, 1);
            opacity: 1;
            cursor: pointer;
          }

          .text {
            font-family: CamptonLight, SourceHanSansCN;
            font-size: 12px;
            font-weight: 400;
            line-height: 18px;
            color: #656565;
            opacity: 1;
            margin: 12px 0 12px;
          }

          .more {
            font-size: 9px;
            font-family: SourceHanSansCN;
            font-weight: 500;
            line-height: 16px;
            color: rgba(65, 64, 64, 1);
            opacity: 1;
            margin-bottom: 18px;
            cursor: pointer;
            position: absolute;
            bottom: 0px;
            left: 175px;

            .more-img {
              width: 20px;
              height: 20px;
              display: inline-block;
              margin-left: 8px;
            }
          }

          .bottom-green {
            height: 5px;
            background: rgba(34, 195, 182, 1);
            opacity: 1;
            margin: 0 -14px;
          }
        }

        .each-dynamic:hover {
          transform: scale(1.1);
          transition-duration: 0.5s;
        }
      }
    }

    .banner10-div {
      padding: 0px 0 38px;
      background-color: #f1f7fa;
      text-align: center;
      background-image: url('../assets/img/home/foot/foot-bg.png');
      background-repeat: no-repeat;
      background-size: cover;
      min-height: 330px;

      .left-div {
        width: 627px;
        display: inline-block;
        margin-top: 48px;
        text-align: left;

        .link {
          font-size: 15px;
          font-family: SourceHanSansCN;
          font-weight: bold;
          line-height: 15px;
          color: rgba(255, 255, 255, 1);
          opacity: 1;

          .link-img {
            width: 13px;
            height: 20px;
            vertical-align: sub;
            margin-right: 5px;
          }
        }

        .heng-line {
          width: 31px;
          height: 0px;
          border: 1px solid rgba(1, 183, 183, 1);
          opacity: 1;
          margin: 8px 0 9px;
        }

        .link-item-div {
          list-style: none;
          text-align: left;
          padding: 0;
          margin-bottom: 46px;

          li {
            font-size: 14px;
            font-family: SourceHanSansCN;
            font-weight: 500;
            line-height: 14px;
            opacity: 1;
            margin-right: 36px;
            display: inline-block;
            color: #fff;

            a {
              text-decoration: none;
              color: #fff;
            }

            a:hover {
              color: rgba(1, 183, 183, 1);
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
            color: rgba(1, 183, 183, 1);
            border-bottom: 3px solid rgba(1, 183, 183, 1);
          }
        }

        .place {
          .text,
          .number {
            font-size: 11px;
            font-family: PingFangSC-Regular, Biko;
            font-weight: 400;
            line-height: 16px;
            color: rgba(255, 255, 255, 1);
            opacity: 1;
          }

          .place-line {
            width: 124px;
            height: 0px;
            border: 1px solid rgba(154, 154, 154, 1);
            opacity: 1;
            margin: 17px 0;
          }
        }
      }

      .middle-div {
        height: 237px;
        border: 1px solid rgba(255, 255, 255, 1);
        opacity: 1;
        display: inline-block;
        vertical-align: top;
        margin-top: 73px;
      }

      .right-div {
        margin: 32px 0 0 57px;
        display: inline-block;
        vertical-align: top;

        .contact {
          width: 338px;
          height: 141px;
          background-image: url('../assets/img/home/foot/contact-us.png');
          background-repeat: no-repeat;
          background-size: cover;
        }

        .wechat-div {
          margin: 23px 0 0 35px;
          text-align: left;

          .title {
            font-size: 15px;
            font-family: PingFang SC;
            // font-weight:600;
            line-height: 15px;
            color: rgba(255, 255, 255, 1);
            opacity: 1;

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
              margin-right: 31px;
              font-size: 14px;
              font-family: SourceHanSansCN;
              font-weight: 500;
              line-height: 14px;
              color: rgba(255, 255, 255, 1);
              opacity: 1;
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
      background-color: #25c3b6;
      text-align: left;

      .content {
        width: 1100px;
        margin: 0 auto;

        .content-title {
          margin-bottom: 6px;
          font-size: 12px;
          font-family: SourceHanSansCN, Biko;
          font-weight: 500;
          line-height: 12px;
          color: rgba(255, 255, 255, 1);
          opacity: 1;
        }

        .content-title2 {
          span {
            margin-right: 38px;
            font-size: 12px;
            font-family: SourceHanSansCN, Biko;
            font-weight: 500;
            line-height: 12px;
            color: rgba(255, 255, 255, 1);
            opacity: 1;
          }
        }
      }
    }

    .banner12-div {
      padding: 58px 0 42px;
      background-color: #eff3f4;
      text-align: center;
      font-size: 30px;
      // display: none;

      .carousel-div {
        // width: 1200px;
        margin: 0 auto;
        text-align: center;
        display: inline-block;

        .each-product {
          width: 257px;
          // height: 283px;
          display: inline-block;
          margin: 0 35px;
          cursor: pointer;
          vertical-align: top;

          .product-img {
            width: 119px;
            height: 118px;
            background-repeat: no-repeat;
            background-size: contain;
            // box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.07);
            // border-radius: 50%;
            margin: 0 auto;
            position: relative;
            // background-color: #fff;
            z-index: 10;
          }

          .product-top-div {
            width: 100%;
            height: 249px;
            // background: rgba(57, 128, 211, 1);
            // box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.1);
            opacity: 1;
            border-radius: 11px;
            margin-top: -83px;
            position: relative;
            background-size: contain;

            .title {
              font-size: 25px;
              font-family: SourceHanSansCN;
              font-weight: bold;
              line-height: 35px;
              color: #333;
              opacity: 1;
              padding-top: 97px;
              background-size: cover;
              margin-bottom: 10px;
            }

            .text {
              font-family: SourceHanSansCN-Regular, SourceHanSansCN;
              font-weight: 400;
              color: #333333;
              line-height: 20px;
              font-size: 15px;
            }
          }
        }

        .each-product:hover {
          transform: scale(1.1);
          transition-duration: 0.5s;
        }
      }
    }

    .banner13-div {
      padding: 113px 0 45px;
      background-color: #e3f3f3;
      text-align: center;
      background-repeat: no-repeat;
      background-size: cover;

      .detail-div {
        // width: 950px;
        margin: 0 auto;

        .each-program-detail {
          margin-bottom: 45px;
          width: 216px;
          display: inline-block;
          vertical-align: top;
          margin: 0 26px;

          .detail-index {
            font-size: 52px;
            font-family: Biko;
            font-weight: bold;
            line-height: 62px;
            color: rgba(255, 255, 255, 1);
            opacity: 1;
          }

          .detail-title {
            font-size: 24px;
            font-family: SourceHanSansCN;
            font-weight: 800;
            line-height: 41px;
            color: rgba(255, 255, 255, 1);
            opacity: 1;
            margin: 11px 0 26px;
          }

          .detail-text {
            font-size: 16px;
            font-family: SourceHanSansCN;
            font-weight: 500;
            line-height: 24px;
            color: #fff;
            margin-bottom: 21px;
            text-align: left;
          }
        }
      }
    }

    .acticityInfoDialog {
      .activity-detail-div {
        text-align: left;
        padding: 29px 0 29px 73px;

        .left-div {
          width: 55%;
          display: inline-block;

          .each-title-div:first-child .theme-logo {
            width: 29px;
          }

          .each-title-div {
            width: 49%;
            display: inline-block;
            margin-bottom: 18px;
            vertical-align: top;

            .theme-logo {
              width: 21px;
              height: 21px;
              background-repeat: no-repeat;
              background-size: cover;
              display: inline-block;
            }

            .title {
              font-size: 18px;
              font-family: SourceHanSansCN;
              font-weight: bold;
              color: #25c2b5;
              margin-left: 5px;
              vertical-align: super;
            }

            .title2 {
              font-size: 14px;
              font-family: SourceHanSansCN;
              font-weight: 500;
              margin-left: 30px;
              width: 60%;
            }
          }

          .each-title-div:last-child {
            width: 128%;
          }
        }

        .right-div {
          display: inline-block;
          width: 39%;
          vertical-align: top;

          .div1 {
            display: inline-block;
            margin-top: 47px;
          }

          .div2 {
            display: inline-block;
            margin-left: 18px;
            vertical-align: top;
            margin-top: 24px;

            .way {
              color: #fff;
              width: 68px;
              height: 20px;
              background: #25c2b5;
              opacity: 1;
              border-radius: 10px;
              text-align: center;
            }

            .way-text {
              margin-top: 8px;
              font-size: 12px;
              font-family: Source Han Sans CN;
              font-weight: 500;
              line-height: 12px;
              color: #333333;
              opacity: 1;
              margin-left: 14px;
            }

            .way2 {
              margin-top: 29px;
            }
          }
        }
      }
    }
  }

  .mobile-div {
    .banner1-div {
      width: 100%;
      // padding: 0.533333rem 0 0.213333rem;
      background-color: #1bbeb2;

      .banner1 {
        width: 9.2rem;
        height: 5.6rem;
        margin: 0 auto;
        position: relative;
        text-align: left;
        background-repeat: no-repeat;
        background-size: cover;

        .info1-div {
          position: absolute;
          top: 2.62rem;
          left: 0.75rem;
        }

        .info2-div {
          position: absolute;
          top: 3.44rem;
          left: 0.75rem;
        }

        .info3-div {
          position: absolute;
          top: 4.266667rem;
          left: 0.75rem;
        }

        .info-number {
          width: 1.066667rem;
          font-size: 0.426667rem;
          font-family: Biko;
          font-weight: bold;
          line-height: 0.746667rem;
          color: rgba(40, 167, 169, 1);
          opacity: 1;
          margin-right: 0.15rem;
          display: inline-block;
          height: 0.746667rem;
        }

        .info-text {
          width: 1.866667rem;
          font-size: 0.186667rem;
          font-family: SourceHanSansCN;
          font-weight: bold;
          line-height: 0.3rem;
          color: rgba(57, 60, 61, 1);
          opacity: 1;
          display: inline-block;
          height: 0.746667rem;
          vertical-align: top;
        }

        .text {
          position: absolute;
          top: 468px;
          left: 24px;

          font-size: 12px;
          font-family: Biko;
          font-weight: 400;
          line-height: 12px;
          color: rgba(255, 255, 255, 1);
          opacity: 1;
        }
      }
    }

    .banner2-div {
      background-color: #fff;
      margin-bottom: 8px;

      .text_10 {
        width: 160px;
        height: 56px;
        display: inline-block;
        overflow-wrap: break-word;
        color: rgba(0, 0, 0, 1);
        font-size: 17px;
        font-family: Helvetica-BoldOblique;
        white-space: nowrap;
        line-height: 56px;
        text-align: center;
        margin-top: 13px;
        margin-bottom: 11px;
      }

      .content {
        width: 100%;
        text-align: center;
        margin: 0 auto 0.1067rem;

        .grade-each-boder {
          display: inline-block;
          width: 4.4rem;
          height: 5.7067rem;
          background: #ffffff;
          border: 1px solid #eeeeee;
          margin: 0 0.2667rem 0.2667rem;
          text-align: left;

          .class-img {
            width: 2.2933rem;
            height: 2.1867rem;
            margin: 16px auto 14px;
            display: block;
            // float: left;
          }

          .text-wrapper_3 {
            width: 1.4667rem;
            // height: 188px;
            margin: 0 0 0 0.5333rem;
            display: inline-block;
            float: left;

            .text_12 {
              width: 61px;
              height: 17px;
              font-size: 12px;
              font-family: Helvetica-Bold, Helvetica;
              font-weight: bold;
              color: #000000;
              line-height: 15px;
            }
            .text_13 {
              width: 35px;
              height: 24px;
              font-size: 20px;
              font-family: Helvetica-Bold, Helvetica;
              font-weight: bold;
              color: #2fada1;
              line-height: 24px;
              margin-top: 5px;
              margin-bottom: 13px;
            }
            .text_14 {
              width: 61px;
              height: 17px;
              font-size: 12px;
              font-family: Helvetica-BoldOblique, Helvetica;
              font-weight: normal;
              color: #000000;
              line-height: 15px;
            }
            .text_15 {
              width: 49px;
              height: 24px;
              font-size: 20px;
              font-family: Helvetica-Bold, Helvetica;
              font-weight: bold;
              color: #2fada1;
              line-height: 24px;
              margin-top: 6px;
            }
          }
        }
      }

      // .box_4 {
      //   width: 1080px;
      //   height: 269px;
      //   margin: 50px 0 0 171px;
      //   .box_5 {
      //     height: 151px;
      //     border: 2px solid rgba(238, 238, 238, 1);
      //     background-color: rgba(255, 255, 255, 1);
      //     width: 437px;
      //     .section_1 {
      //       width: 614px;
      //       height: 221px;
      //       margin: 14px 0 0 41px;
      //       .text-wrapper_2 {
      //         height: 125px;
      //         background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng69dce54f0b8f9d6bf28bcb0a08ec306a2c16a4d25353d8a9be134f5b3ab4befa)
      //           0px 0px no-repeat;
      //         background-size: 232px 222px;
      //         width: 131px;
      //         .text_11 {
      //           width: 136px;
      //           height: 95px;
      //           display: inline-block;
      //           overflow-wrap: break-word;
      //           color: rgba(40, 177, 164, 1);
      //           font-size: 68px;
      //           font-family: Helvetica-Bold;
      //           white-space: nowrap;
      //           line-height: 95px;
      //           text-align: left;
      //           margin: 66px 0 0 47px;
      //         }
      //       }
      //       .text-wrapper_3 {
      //         width: 109px;
      //         height: 188px;
      //         margin: 16px 0 0 84px;
      //         .text_12 {
      //           width: 109px;
      //           height: 30px;
      //           display: inline-block;
      //           overflow-wrap: break-word;
      //           color: rgba(0, 0, 0, 1);
      //           font-size: 22px;
      //           font-family: Helvetica-Bold;
      //           white-space: nowrap;
      //           line-height: 30px;
      //           text-align: left;
      //         }
      //         .text_13 {
      //           width: 63px;
      //           height: 43px;
      //           display: inline-block;
      //           overflow-wrap: break-word;
      //           color: rgba(47, 173, 161, 1);
      //           font-size: 36px;
      //           font-family: Helvetica-Bold;
      //           white-space: nowrap;
      //           line-height: 43px;
      //           text-align: left;
      //           margin-top: 9px;
      //         }
      //         .text_14 {
      //           width: 109px;
      //           height: 30px;
      //           display: inline-block;
      //           overflow-wrap: break-word;
      //           color: rgba(0, 0, 0, 1);
      //           font-size: 22px;
      //           font-family: Helvetica-BoldOblique;
      //           white-space: nowrap;
      //           line-height: 30px;
      //           text-align: left;
      //           margin-top: 24px;
      //         }
      //         .text_15 {
      //           width: 88px;
      //           height: 43px;
      //           display: inline-block;
      //           overflow-wrap: break-word;
      //           color: rgba(47, 173, 161, 1);
      //           font-size: 36px;
      //           font-family: Helvetica-Bold;
      //           white-space: nowrap;
      //           line-height: 43px;
      //           text-align: left;
      //           margin-top: 9px;
      //         }
      //       }
      //       .text-wrapper_4 {
      //         width: 109px;
      //         height: 188px;
      //         margin: 16px 0 0 81px;
      //         .text_16 {
      //           width: 109px;
      //           height: 30px;
      //           display: inline-block;
      //           overflow-wrap: break-word;
      //           color: rgba(0, 0, 0, 1);
      //           font-size: 22px;
      //           font-family: Helvetica-Bold;
      //           white-space: nowrap;
      //           line-height: 30px;
      //           text-align: left;
      //         }
      //         .text_17 {
      //           width: 63px;
      //           height: 43px;
      //           display: inline-block;
      //           overflow-wrap: break-word;
      //           color: rgba(47, 173, 161, 1);
      //           font-size: 36px;
      //           font-family: Helvetica-Bold;
      //           white-space: nowrap;
      //           line-height: 43px;
      //           text-align: left;
      //           margin: 9px 0 0 1px;
      //         }
      //         .text_18 {
      //           width: 109px;
      //           height: 30px;
      //           display: inline-block;
      //           overflow-wrap: break-word;
      //           color: rgba(0, 0, 0, 1);
      //           font-size: 22px;
      //           font-family: Helvetica-Bold;
      //           white-space: nowrap;
      //           line-height: 30px;
      //           text-align: left;
      //           margin-top: 24px;
      //         }
      //         .text_19 {
      //           width: 88px;
      //           height: 43px;
      //           display: inline-block;
      //           overflow-wrap: break-word;
      //           color: rgba(47, 173, 161, 1);
      //           font-size: 36px;
      //           font-family: Helvetica-Bold;
      //           white-space: nowrap;
      //           line-height: 43px;
      //           text-align: left;
      //           margin: 9px 0 0 1px;
      //         }
      //       }
      //     }
      //   }
      // }
    }

    .banner3-div {
      padding: 0.48rem 0 0.4rem;
      background-color: #28a7a9;

      .number-div {
        text-align: center;
        width: 100%;
        margin: 0 auto;

        .each-number-div {
          height: 0.8533rem;
          width: 32%;
          display: inline-block;
          // margin: 0 0.6133rem;

          .number-logo {
            width: 0.8533rem;
            height: 100%;
            display: inline-block;
            background-size: contain;
          }

          .number-into {
            display: inline-block;
            margin-left: 0.1067rem;
            text-align: left;
            vertical-align: top;

            .number-name {
              font-size: 0.1867rem;
              font-family: PingFangHK-Regular, PingFangHK;
              font-weight: 400;
              line-height: 0.2667rem;
              color: #fff;
              opacity: 1;
              margin: 1px 0 0.0533rem;
            }

            .number {
              font-size: 0.4rem;
              font-family: Biko;
              font-weight: Bold;
              line-height: 0.48rem;
              color: #fff;
              opacity: 1;
              display: inline-block;
            }

            .number-text {
              font-size: 0.24rem;
              display: inline-block;
              color: #eeeeee;
              font-family: SourceHanSansCN;
            }
          }
        }

        .number-dataLine {
          height: 17px;
          font-size: 12px;
          font-family: PingFang SC;
          font-weight: 400;
          line-height: 17px;
          color: rgba(0, 124, 118, 1);
          opacity: 1;
          margin-top: 20px;
          text-align: right;
          margin-right: 45px;
        }
      }
    }

    .banner12-div {
      padding: 58px 0 42px;
      background-color: #eff3f4;
      text-align: center;
      font-size: 30px;
      // display: none;

      .carousel-div {
        // width: 1200px;
        margin: 0 auto;
        text-align: center;
        display: inline-block;

        .each-product {
          width: 7.6533rem;
          // height: 283px;
          height: 2.56rem;
          display: inline-block;
          margin: 0.5067rem 0 0.5067rem 1.7333rem;
          cursor: pointer;
          vertical-align: top;
          position: relative;

          .product-img {
            width: 3.4933rem;
            height: 3.4933rem;
            background-repeat: no-repeat;
            background-size: contain;
            margin: 0 auto;
            position: absolute;
            bottom: -0.2667rem;
            left: -1.6rem;
            z-index: 10;
          }

          .product-top-div {
            width: 7.6533rem;
            height: 2.56rem;
            opacity: 1;
            border-radius: 0.2933rem;
            // margin-top: -83px;
            position: relative;
            background-size: cover;
            background-repeat: no-repeat;

            .title {
              font-size: 0.48rem;
              font-family: SourceHanSansCN;
              font-weight: bold;
              line-height: 0.7467rem;
              color: #333;
              opacity: 1;
              // padding-top: 97px;
              background-size: cover;
              margin-bottom: 0.0533rem;
            }

            .text {
              font-family: SourceHanSansCN-Regular, SourceHanSansCN;
              font-weight: 400;
              color: #333333;
              line-height: 0.4267rem;
              font-size: 0.32rem;
            }
          }
        }

        .each-product:hover {
          transform: scale(1.1);
          transition-duration: 0.5s;
        }
      }
    }

    .banner4-div {
      // background-color: #f8f2f2;
      padding: 0.8rem 0 0.88rem;

      .title {
        font-size: 0.426667rem;
        font-family: Campton, SourceHanSansCN;
        font-weight: bold;
        line-height: 0.426667rem;
        color: rgba(57, 60, 61, 1);
        opacity: 1;
        margin: 0px auto 0.266667rem;
      }

      .title2 {
        font-size: 0.32rem;
        font-family: Biko, SourceHanSansCN;
        font-weight: 500;
        line-height: 0.4rem;
        color: rgba(85, 85, 85, 1);
        opacity: 1;
        margin-bottom: 0.266667rem;
        width: 8.506667rem;
        margin: 0 auto;
      }

      .four-to-one-div {
        width: 8.88rem;
        height: 8.8267rem;
        margin: 0.6667rem auto 0.5067rem;
        background-image: url('../assets/img/walnut/mobile/fourtoone.png');
        position: relative;
        text-align: left;
        background-repeat: no-repeat;
        background-size: contain;
      }

      .four-to-one-div2 {
        width: 9.0667rem;
        height: 9.146667rem;
        margin: 0 auto;
        background-image: url('../assets/img/walnut/mobile/fourtoone2.png');
        text-align: left;
        background-repeat: no-repeat;
        background-size: contain;
        position: relative;

        .each {
          position: absolute;
          left: 1.0133rem;
          width: 6.56rem;
        }

        .each1 {
          top: 1.4rem;
        }

        .each2 {
          top: 3.9rem;
        }

        .each3 {
          top: 6.5rem;
        }

        .each-title {
          font-size: 0.4rem;
          font-family: Helvetica;
          color: #000000;
          line-height: 0.48rem;
          margin-bottom: 0.16rem;
        }

        .each-text {
          font-size: 0.24rem;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #666666;
          line-height: 0.3467rem;
          letter-spacing: 0.0267rem;
        }
      }

      .title3 {
        margin-top: 2px;
        font-size: 18px;
        font-family: SourceHanSansCN;
        font-weight: bold;
        line-height: 18px;
        color: rgba(60, 60, 60, 1);
        opacity: 1;
      }

      .title4 {
        font-size: 14px;
        font-family: SourceHanSansCN;
        font-weight: 400;
        line-height: 14px;
        color: rgba(148, 148, 148, 1);
        opacity: 1;
        margin-top: 8px;
      }
    }

    .banner5-div {
      padding: 1.333333rem 0 0.8rem;
      background-color: #eff3f4;

      .intos-div {
        // width: 1100px;
        margin: 0 auto;

        .each-into-div {
          margin: 0 0.533333rem 0.773333rem;
          width: 3.2rem;
          display: inline-block;
          text-align: left;
          vertical-align: top;

          .intro-logo {
            width: 1.2rem;
            height: 1.2rem;
            background-repeat: no-repeat;
            background-size: contain;
          }

          .intro-title {
            margin: 0.426667rem 0 0.346667rem;
            font-size: 0.373333rem;
            font-family: SourceHanSansCN;
            font-weight: bold;
            line-height: 0.373333rem;
            color: rgba(98, 98, 98, 1);
            opacity: 1;
          }

          .intro-text {
            font-size: 0.293333rem;
            font-family: SourceHanSansCN;
            font-weight: 500;
            line-height: 0.426667rem;
            color: rgba(94, 94, 94, 1);
            opacity: 1;
          }
        }
      }
    }

    .banner6-div {
      padding: 1.173333rem 0 0.8rem;
      background-color: #fff;

      .title {
        font-size: 0.426667rem;
        font-family: SourceHanSansCN;
        font-weight: bold;
        line-height: 24px;
        color: rgba(60, 60, 60, 1);
        opacity: 1;
        margin-bottom: 0.8rem;
      }

      .teachers-div {
        // width: 1130px;
        text-align: center;
        margin: 0 auto;

        .each-teacher {
          width: 4.2933rem;
          margin: 0 0.3467rem 0.16rem;
          display: inline-block;
          vertical-align: top;
          cursor: pointer;

          .teacher-img {
            width: 100%;
            height: 5.6rem;
            background-repeat: no-repeat;
            background-size: cover;
          }

          .teacher-info-div {
            height: 1.626667rem;
            background-color: #35c4c4;
            padding: 0.346667rem 0.426667rem 0;
            text-align: left;

            .teacher-name {
              font-size: 0.373333rem;
              font-family: Campton;
              font-weight: bold;
              line-height: 0.32rem;
              color: #f6fbfb;
              opacity: 1;
            }

            .teacher-school {
              font-size: 0.32rem;
              font-family: SourceHanSansCN;
              font-weight: 400;
              line-height: 0.453333rem;
              color: #f6fbfb;
              opacity: 1;
              margin-top: 0.106667rem;
            }
          }
        }

        // .each-teacher:hover {
        //   transform: scale(1.1);
        //   transition-duration: 0.5s;
        // }

        .more-teachers {
          font-size: 0.266667rem;
          font-family: PingFang SC;
          font-weight: 500;
          line-height: 0.64rem;
          color: #16b4b4;
          opacity: 1;
          text-align: center;
          margin: 0 auto;
          width: 2.64rem;
          height: 0.64rem;
          background: rgba(53, 185, 196, 0.14);
          border-radius: 15px;

          a {
            text-decoration: none;
            color: #16b4b4;
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
      padding: 0.533333rem 0 0;
      background-color: #fff;

      .title {
        font-size: 0.426667rem;
        font-family: SourceHanSansCN;
        font-weight: bold;
        line-height: 0.426667rem;
        color: rgba(60, 60, 60, 1);
        opacity: 1;
        margin-bottom: 0.4rem;
      }

      .each-program {
        width: 4.64rem;
        height: 2.9867rem;
        // box-shadow: 0px 5px 6px rgba(189,189,189,1);
        // border-radius: 15px;
        opacity: 1;
        margin: 0.16rem;
        background-repeat: no-repeat;
        background-size: cover;
        display: inline-block;
      }
    }

    .banner8-2-div {
      padding: 0.8rem 0 0.8rem;
      background-color: #fff;

      .title {
        font-size: 0.426667rem;
        font-family: SourceHanSansCN;
        font-weight: bold;
        line-height: 0.426667rem;
        color: #3c3c3c;
        opacity: 1;
      }

      .title2 {
        font-size: 0.32rem;
        font-family: PingFang SC;
        font-weight: 400;
        line-height: 0.32rem;
        color: #555555;
        opacity: 1;
        margin: 0.16rem 0 0.426667rem;
      }

      .activity-div {
        // width: 880px;
        margin: 0 auto;

        .each-program {
          width: 3.973333rem;
          height: 2.16rem;
          // box-shadow: 0px 5px 6px rgba(189,189,189,1);
          // border-radius: 15px;
          opacity: 1;
          display: inline-block;
          margin: 0 0.133333rem 0.533333rem;
          background-repeat: no-repeat;
          background-size: cover;
          cursor: pointer;
        }
      }

      .more-activity {
        font-size: 0.266667rem;
        font-family: PingFang SC;
        font-weight: 500;
        line-height: 0.64rem;
        color: #16b4b4;
        opacity: 1;
        text-align: center;
        margin: 0 auto;
        width: 2.64rem;
        height: 0.64rem;
        background: rgba(53, 185, 196, 0.14);
        border-radius: 15px;

        .more-img {
          width: 17px;
          height: 17px;
          margin-left: 15px;
          display: inline-block;
          vertical-align: bottom;
        }
      }
    }

    .banner9-div {
      padding: 0.8rem 0 0.666667rem;
      background-color: #f1f7fa;
      text-align: center;

      .title {
        font-size: 0.426667rem;
        font-family: SourceHanSansCN;
        font-weight: bold;
        line-height: 0.426667rem;
        color: rgba(51, 51, 51, 1);
        opacity: 1;
      }

      .title2 {
        margin: 0.213333rem 0 0.533333rem;
        font-size: 0.32rem;
        font-family: SourceHanSansCN-Regular, SourceHanSansCN;
        font-weight: 400;
        line-height: 0.32rem;
        color: #2fada1;
        opacity: 1;
      }

      .carousel-div {
        // width: 8.8rem;
        width: 100%;
        margin: 0 auto;
        text-align: center;

        .each-dynamic {
          padding: 0.266667rem 0.266667rem 0;
          background: rgba(255, 255, 255, 1);
          box-shadow: 5px 5px 6px rgba(47, 47, 47, 0.21);
          opacity: 1;
          width: 4rem;
          display: inline-block;
          margin: 0.24rem 0.1867rem;
          text-align: left;
          position: relative;
          // height: 5.866667rem;

          .logo {
            font-size: 0.16rem;
            font-family: Campton;
            font-weight: bold;
            line-height: 0.16rem;
            color: rgba(190, 190, 190, 1);
            opacity: 1;
          }

          .dynamic-img {
            // margin: 0.2667rem 0.3733rem;
            width: 100%;
            height: 3.9467rem;
            background-repeat: no-repeat;
            background-size: cover;
          }

          .title {
            font-size: 0.4rem;
            font-family: PingFangHK-Semibold, PingFangHK;
            font-weight: 600;
            color: #333333;
            line-height: 0.4533rem;
            margin-bottom: 0.1333rem;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
            overflow: hidden;
            // height: 1.146667rem;
          }

          .text {
            font-family: CamptonLight, SourceHanSansCN;
            font-size: 0.32rem;
            font-weight: 400;
            line-height: 0.4rem;
            color: rgba(82, 82, 82, 1);
            opacity: 1;
            margin: 0.213333rem 0 15px;
            // height: 1.2rem;

            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
            height: 0.746667rem;
          }

          .more {
            font-size: 0.32rem;
            font-family: SourceHanSansCN;
            font-weight: 500;
            line-height: 0.186667rem;
            color: rgba(65, 64, 64, 1);
            opacity: 1;
            margin-bottom: 0.8rem;

            .more-img {
              width: 0.4267rem;
              height: 0.4533rem;
              display: inline-block;
              margin-left: 0.106667rem;
              position: absolute;
              bottom: 0.8rem;
              right: 0.4533rem;
            }
          }

          .bottom-green {
            height: 5px;
            background: rgba(34, 195, 182, 1);
            opacity: 1;
            margin: 0 -10px;
          }
        }
      }
    }

    .acticityInfoDialog {
      .activity-detail-div {
        text-align: left;
        // padding: 29px 0 29px 73px;

        .left-div {
          // width: 55%;
          // display: inline-block;

          .each-title-div:first-child .theme-logo {
            width: 0.773333rem;
          }

          .each-title-div {
            // width: 49%;
            // display: inline-block;
            margin-bottom: 0.48rem;
            vertical-align: top;

            .theme-logo {
              width: 0.56rem;
              height: 0.56rem;
              background-repeat: no-repeat;
              background-size: cover;
              display: inline-block;
            }

            .title {
              font-size: 0.373333rem;
              font-family: SourceHanSansCN;
              font-weight: bold;
              color: #25c2b5;
              margin-left: 0.133333rem;
              vertical-align: super;
            }

            .title2 {
              font-size: 0.346667rem;
              font-family: SourceHanSansCN;
              font-weight: 500;
              margin-left: 30px;
              width: 85%;
            }
          }

          .each-title-div:last-child {
            // width: 128%;
          }
        }

        .right-div {
          // display: inline-block;
          // width: 39%;
          vertical-align: top;

          .div1 {
            display: inline-block;
            margin-top: 0.48rem;

            .more-img {
              width: 2.56rem;
            }
          }

          .div2 {
            display: inline-block;
            margin-left: 0.266667rem;
            vertical-align: top;
            margin-top: 0.64rem;
            margin-bottom: 0.533333rem;

            .way {
              color: #fff;
              width: 1.52rem;
              height: 0.533333rem;
              background: #25c2b5;
              opacity: 1;
              border-radius: 0.266667rem;
              text-align: center;
            }

            .way-text {
              margin-top: 0.213333rem;
              font-size: 0.32rem;
              font-family: Source Han Sans CN;
              font-weight: 500;
              line-height: 0.32rem;
              color: #333333;
              opacity: 1;
              margin-left: 0.266667rem;
            }

            .way2 {
              margin-top: 0.32rem;
            }
          }
        }
      }
    }

    .mask {
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      opacity: 0.5;
      background: #000;
    }
  }

  /* 可以设置不同的进入和离开动画 */
  /* 设置持续时间和动画函数 */
  .slide-fade-enter-active {
    transition: all 0.3s ease;
  }
  .slide-fade-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
  }
  .slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }

  // 呼吸灯效果
  .my-container {
    // background: #ff5c33;
    color: #018a8d !important;
    width: 300px;
    text-align: center;
    // height: 28px;
    // line-height: 31px !important;
    border-radius: 32px;
    margin: 0 auto;
    animation: myBreath 1s linear infinite;
    -webkit-animation: myBreath 0.5s linear infinite alternate; /*Webkit内核的浏览器（如 Safari、Chrome）*/
    -moz-animation: myBreath 1s linear infinite alternate; /*gecko内核的浏览器（如 Firefox）*/
    -o-animation: myBreath 1s linear infinite alternate; /*Opera 浏览器*/
    -ms-animation: myBreath 1s linear infinite alternate; /*IE8+*/

    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    -ms-backface-visibility: hidden;
    backface-visibility: hidden;
    perspective: 500;
    -webkit-perspective: 500;
    -moz-perspective: 500;
    -ms-perspective: 500;
    perspective: 500;
  }
  @keyframes myBreath {
    // 0%{
    //     transform: scale(0.88);
    // }
    // 50%{
    //     transform: scale(100%);
    // }
    // 100%{
    //     transform: scale(0.88);
    // }

    from {
      transform: scale(0.88);
    }
    to {
      transform: scale(1);
    }
  }

  @-webkit-keyframes myBreath {
    from {
      transform: scale(0.88);
    }
    to {
      transform: scale(1);
    }
  }

  @-moz-keyframes myBreath {
    from {
      transform: scale(0.88);
    }
    to {
      transform: scale(1);
    }
  }

  @-o-keyframes myBreath {
    from {
      transform: scale(0.88);
    }
    to {
      transform: scale(1);
    }
  }

  @-ms-keyframes myBreath {
    from {
      transform: scale(0.88);
    }
    to {
      transform: scale(1);
    }
  }
}
</style>

<style>
.customDialog {
  border-radius: 14px !important;
  width: 1000px;
}
</style>
