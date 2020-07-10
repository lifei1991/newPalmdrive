<template>
  <div class="dream-school">
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
      <div class="title">梦校计划</div>
      <div class="title2">从零到一，指引留学小白成长成海外学习通。 </div>
      <div class="title2">覆盖申请关键节点，充分挖掘同学潜力，培养学生思辨和表达能力，圆梦理想学校，探索新可能。</div>
      <div class="school-div">
        <div class="each-school-div" v-for="item in dreams" :key="item.img" :style="{backgroundImage:'url(' + item.img + ')'}">
        </div>
      </div>
    </div>

    <div class="banner3-div">
        <div class="title">六大专享特权</div>
        <div class="power-div">
            <div class="each-power-div"  v-for="item in powers" :key="item.img">
                <div class="power-img" :style="{backgroundImage:'url(' + item.img + ')'}"></div>
                <div class="power-title">{{ item.title }}</div>
                <div class="power-text">{{ item.text }}</div>
            </div>
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
      <ul class="teacher-item-div" >
        <li v-for="(item, index) in teacherTypes" :key="item.name" v-html="item.name" @click="changeTeacherType(index)" v-bind:class="{ 'teacher-bg-colors' : index == currentType }"></li>
      </ul>
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

        <div class="more-teachers" @click="show = !show">
          <div>
            查看更多导师
          </div>
          <div class="open-ask"></div>
        </div>
      </div>
    </div>

    <transition name="slide-fade">
        <div v-if="show" class="banner6-div" :style="{backgroundImage:'url(' + banner6 + ')'}">
            <div class="ask-div">
                <div class="ercode" :style="{backgroundImage:'url(' + askErcode + ')'}"></div>
                <div class="ask-text">
                    <div class="text1">想要了解更多导师信息和留学服务内容，可扫码咨询留学小助手。</div>
                    <div class="text2">咨询暗号</div>
                    <div class="text3">梦 校</div>
                </div>
                <div class="close-ask" @click="show = !show"></div>
            </div>
            <div></div>
        </div>
    </transition>

    <div class="banner7-div">
      <div class="title">学员故事</div>
      <div class="story-div">
        <template v-for="(item, index) in stories" >
          <div class="each-story" v-if="index < maxNumber" :key="item.img" @click="goToDetail(1000, index)">
            <div class="story-img" :style="{backgroundImage:'url(' + item.img + ')'}"></div>
            <div class="story-info-div">
              <div class="story-text">{{ item.name }}</div>
            </div>
          </div>
        </template>

        <div class="more-teachers" @click="showMoreStories" v-if="!(maxNumber > 8 || stories.length <=8)">
          <div>
            查看更多案例<img src="../assets/img/home/more.png" class="more-img" />
          </div>
        </div>
      </div>
    </div>

    <div class="banner8-div">
      <div class="banner8" :style="{backgroundImage:'url(' + banner8 + ')'}">
          <div class="dream-school-div" :style="{backgroundImage:'url(' + dreamSchoolPlan + ')'}">
              <div class="title-div">
                <div class="title1">梦校计划</div>
                <div class="title2">专业匹配的申请指导、职业点拨、全程指引。</div>
                <div class="title3">￥ 39,800 - ￥ 99,800</div>
                <!-- <div class="plan-button" :style="{backgroundImage:'url(' + planButton + ')'}">我要咨询</div> -->
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
      stories: [
        {
          'img': './static/img/dreamSchool/stories/story1.jpg',
          'name': '包揽哈佛、耶鲁和全美专排Top1梦校offer，她是如何做到的？',
          'type': '理科'
        },
        {
          'img': './static/img/dreamSchool/stories/story2.jpg',
          'name': '6战托福，Gap一年，她一举拿下CMU带奖offer！',
          'type': '工科'
        },
        {
          'img': './static/img/dreamSchool/stories/story3.jpg',
          'name': '被中介坑申请全拒后，北航小姐姐gap一年转专业拿到剑桥offer！',
          'type': '文科'
        },
        {
          'img': './static/img/dreamSchool/stories/story4.jpg',
          'name': '英美欧混申，GRE两次考出335，她一举拿下世界顶尖商学院offer！',
          'type': '商科'
        },
        {
          'img': './static/img/dreamSchool/stories/story5.jpg',
          'name': '北理小姐姐冒着零科研风险退出实验室，GPA年级第一的她转专业申请拿下耶鲁带奖offer！',
          'type': '理科'
        },
        {
          'img': './static/img/dreamSchool/stories/story6.jpg',
          'name': 'GPA2.9，考研失败，“零背景”的我用半年拿下了心仪的offer……',
          'type': '工科'
        },
        {
          'img': './static/img/dreamSchool/stories/story7.jpg',
          'name': '双非文科生进击博士！放弃专业唯一保研名额，今拿下高难博士offer，每年录取不超10人！',
          'type': '文科'
        },
        {
          'img': './static/img/dreamSchool/stories/story8.jpg',
          'name': '低绩点转专业无语言成绩，重大小哥哥强势逆袭拿下G5offer！',
          'type': '工科'
        },
        {
          'img': './static/img/dreamSchool/stories/story9.jpg',
          'name': '从倒数第一到满绩4.0，川大小姐姐斩获就业率100%的梦校offer！',
          'type': '商科'
        },
        {
          'img': './static/img/dreamSchool/stories/story10.jpg',
          'name': '本科荒废两年，三维成绩低，看他如何一路逆风翻盘拿下梦校 offer！',
          'type': '理科'
        },
        {
          'img': './static/img/dreamSchool/stories/story11.jpg',
          'name': '从小语种走向大世界，学霸小姐姐拿下哈佛、芝大、LSE、JHU等名校offer！',
          'type': '文科'
        },
        {
          'img': './static/img/dreamSchool/stories/story12.jpg',
          'name': '放弃10万刀全奖Offer，被常春藤与G5宠爱的双非小姐姐，最后选择了……',
          'type': '文科'
        },
        {
          'img': './static/img/dreamSchool/stories/story13.jpg',
          'name': 'GPA2.88、实习平平还有救吗？这位小姐姐不仅申5中5，还斩获1万刀奖学金！',
          'type': '商科'
        },
        {
          'img': './static/img/dreamSchool/stories/story14.jpg',
          'name': '拿下KCL、爱大的律政俏佳人，也曾因表达困难而极度不自信……',
          'type': '文科'
        },
        {
          'img': './static/img/dreamSchool/stories/story15.jpg',
          'name': '6个Offer，2个带奖！普通211里的宝藏男孩非他莫属了！',
          'type': '商科'
        },
        {
          'img': './static/img/dreamSchool/stories/story16.jpg',
          'name': '大一创业大二建社团大三办TEDx，双非二本的她告诉你低标化如何赢得漂亮！',
          'type': '商科'
        },
        {
          'img': './static/img/dreamSchool/stories/story17.jpg',
          'name': 'GPA 3.1 到 3.9！为了提高成绩他的 final 真的太拼了！',
          'type': '商科'
        },
        {
          'img': './static/img/dreamSchool/stories/story18.jpg',
          'name': '曾被说申不上港大，现在我要去常春藤了',
          'type': '商科'
        },
        {
          'img': './static/img/dreamSchool/stories/story19.jpg',
          'name': '只用半年GPA 3.1 升到 3.9 ！ 她一周瘦 7 斤终换来耶鲁康奈尔等 8 所offer！',
          'type': '理科'
        },
        {
          'img': './static/img/dreamSchool/stories/story20.jpg',
          'name': '我从保底校一路逆袭专排Top2，和男友牵手上梦校！',
          'type': '商科'
        },
        {
          'img': './static/img/dreamSchool/stories/story21.jpg',
          'name': '2次考试大陆第一！GPA位列专业第2！看小姐姐如何逃离舒适圈！',
          'type': '商科'
        },
        {
          'img': './static/img/dreamSchool/stories/story22.jpg',
          'name': '硕博混申，最后我拒了耶鲁，连拿三个博士offer！',
          'type': '工科'
        },
        {
          'img': './static/img/dreamSchool/stories/story23.jpg',
          'name': '满绩大神：本以为只能去常春藤，结果拒了MIT去了这儿……',
          'type': '工科'
        },
        {
          'img': './static/img/dreamSchool/stories/story24.jpg',
          'name': '拒绝剑桥offer！大一GPA 3.9 的年级第一，直呼这 4 段经历对他影响太大！',
          'type': '理科'
        },
        {
          'img': './static/img/dreamSchool/stories/story25.jpg',
          'name': '无心插柳GRE首战334，申7中5，小姐姐最后为它放弃芝大9万刀！',
          'type': '文科'
        },
        {
          'img': './static/img/dreamSchool/stories/story26.jpg',
          'name': '关晓彤北电师哥：3个月赶8个DDL，藤校来电时差点把对方拉黑！',
          'type': '艺术'
        },
        {
          'img': './static/img/dreamSchool/stories/story27.jpg',
          'name': '你们羡慕不已的美本，竟成我申请时最大的障碍......',
          'type': '文科'
        },
        {
          'img': './static/img/dreamSchool/stories/story28.jpg',
          'name': '身材好嗓音苏颜值高！双非拿下 7 个offer，这是什么宝藏男孩？',
          'type': '文科'
        },
        {
          'img': './static/img/dreamSchool/stories/story29.jpg',
          'name': '他拿康奈尔做保底被拒！没想到后续惊现神反转剧情......',
          'type': '文科'
        },
        {
          'img': './static/img/dreamSchool/stories/story30.jpg',
          'name': '2 次考研失败，GPA 2.7、没有语言成绩的他终于······',
          'type': '商科'
        },
        {
          'img': './static/img/dreamSchool/stories/story31.jpg',
          'name': 'GPA3.9 的年级第一担心失学？看她如何战胜焦虑斩获耶鲁杜克等11所名校 offer！',
          'type': '理科'
        },
        {
          'img': './static/img/dreamSchool/stories/story32.jpg',
          'name': '曾经压力大到转学，数理全A佛系偏科的我终于拿下了哥大offer！',
          'type': '理科'
        },
        {
          'img': './static/img/dreamSchool/stories/story33.jpg',
          'name': '3次校奖，GPA3.92！她让理工男感受到了Girls power威胁......',
          'type': '理科'
        },
        {
          'img': './static/img/dreamSchool/stories/story34.jpg',
          'name': '放弃保研，普通211狂补实习的她如何低成本留美',
          'type': '商科'
        },
        {
          'img': './static/img/dreamSchool/stories/story35.jpg',
          'name': '北大降分录取、考神级别也被网申吓懵，他是如何拿下伯克利哥大 offer 的？',
          'type': '工科'
        },
        {
          'img': './static/img/dreamSchool/stories/story36.jpg',
          'name': '投实习全被拒，她为了翻盘一天只睡 2 小时，不服输最终带给她······',
          'type': '工科'
        },
        {
          'img': './static/img/dreamSchool/stories/story37.jpg',
          'name': '“双非”普本被歧视？她参加美赛、发明专利、名企实习，最后完美逆袭！',
          'type': '理科'
        }
      ],
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
      banner6: '',
      banner8: '',
      dreamSchoolPlan: '',
      planButton: '',
      askErcode: require('../assets/img/dreamSchool/askErcode.png'),
      maxNumber: 8,
      show: false,
      currentType: 0,
      selectedTeacher: []
    }
  },
  created () {
    // this.$nextTick(() => {
    //   const axios = require('axios')
    //   let that = this
    //   axios.get('http://www.palmdrive.cn/v2/static/json/dreamSchool.json').then(
    //   // axios.get('http://localhost:8080/static/json/dreamSchool.json').then(
    //     (res) => {
    //       that.stories = res.data
    //       // that.$set(that, 'guides', res.data)
    //       // that.changeGuideType(that.currentType)
    //     }
    //   )
    // }
    // )

    // this.stories = require('../../static/json/dreamSchool.json')
    this.banner1 = require('../assets/img/dreamSchool/banner1.png')
    this.banner6 = require('../assets/img/dreamSchool/banner6.png')
    this.banner8 = require('../assets/img/dreamSchool/banner8.png')
    this.dreamSchoolPlan = require('../assets/img/dreamSchool/plan/dreamSchoolPlan.png')
    this.planButton = require('../assets/img/dreamSchool/plan/plan-button.png')
    this.selectedTeacher = this.teachers[this.currentType]
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
    })
  },
  methods: {
    showMoreStories () {
      this.maxNumber = 100
    },
    changeTeacherType (index) {
      this.currentType = index
      this.selectedTeacher = this.teachers[index]
    },
    goToDetail (ind, index) {
      let routeUrl = this.$router.resolve({
        path: '/news',
        query: {
          index1: ind,
          index2: index,
          jsonName: 'dreamSchool.json'

        }
      })
      window.open(routeUrl.href, '_blank')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.dream-school {
  text-align: center;

  .banner1-div {
    width: 100%;
    padding: 59px 0 84px;
    background-color: #1BBEB2;

    .banner1 {
      width: 1079px;
      height: 443px;
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

  .banner2-div {
    background-color: #fff;
    padding: 63px 0 108px;

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
      line-height: 16px;
      color: rgba(85, 85, 85, 1);
      opacity: 1;
      margin-bottom: 8px;
    }

    .school-div {
    //   width: 1150px;
      margin: 54px auto 0;
      // align-items: center;
      // display: flex;
      // flex-direction: row;
      // justify-content: center;

      .each-school-div {
        width: 249px;
        height:313px;
        display: inline-block;
        margin: 0 13px;
        background-repeat: no-repeat;
        background-size: contain;
      }
    }
  }

  .banner3-div {
    padding: 73px 0 53px;
    background:rgba(243,246,251,0.64);

    .title {
      font-size: 24px;
      font-family: SourceHanSansCN;
      font-weight: bold;
      line-height: 24px;
      color: rgba(12,10,11,1);
      opacity: 1;
      margin: 0px auto 58px;
    }

    .power-div {
      text-align: center;
      width: 1200px;
      margin: 0 auto;

      .each-power-div {
        width: 120px;
        display: inline-block;
        margin: 0 100px 38px;

        .power-img {
            width: 86px;
            height: 85px;
            margin: 0 auto;
        }

        .power-title {
            margin: 19px auto 7px;
            font-size:18px;
            font-family:SourceHanSansCN;
            font-weight:bold;
            line-height:18px;
            color:rgba(74,74,74,1);
            opacity:1;
        }

        .power-text {
            font-size:14px;
            font-family:SourceHanSansCN;
            font-weight:500;
            line-height:14px;
            color:rgba(117,117,117,1);
        }
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
    padding: 75px 0 54px;
    background-color: #F3F6FB;

    .title {
      font-size:24px;
      font-family:SourceHanSansCN;
      font-weight:bold;
      line-height:24px;
      color:rgba(60,60,60,1);
      opacity:1;
      margin-bottom: 45px;
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

  .banner6-div {
      background-color: #21C3B6;
      background-repeat: no-repeat;
      background-size: cover;
      overflow: auto;

      .ask-div {
          margin: 77px auto 0;
          text-align: center;

          .ercode {
              width: 254px;
              height: 254px;
              background-repeat: no-repeat;
              background-size: contain;
              display: inline-block;
            //   border: 12px solid #fff;
            //   background-color: #fff;
          }

          .ask-text {
              display: inline-block;
              margin: 33px 0 0 61px;
              width: 433px;
              text-align: left;
              vertical-align: top;

              .text1 {
                font-size:24px;
                font-family:SourceHanSansCN;
                font-weight:bold;
                line-height:33px;
                color:rgba(255,255,255,1);
                opacity:1;
              }

              .text2 {
                margin-top: 45px;
                font-size:24px;
                font-family:SourceHanSansCN;
                font-weight:bold;
                line-height:41px;
                color:#FFFFFF;
                opacity:1;
                display: inline-block;
              }

              .text3 {
                display: inline-block;
                width:100px;
                height:35px;
                background:rgba(255,255,255,1);
                opacity:1;
                border-radius:20px;
                font-size:24px;
                font-family:SourceHanSansCN;
                font-weight:bold;
                line-height:35px;
                color: #36B2B3;
                text-align: center;
                margin-left: 20px;
              }
          }

          .close-ask {
              width: 26px;
              height: 10px;
              // background: #fff;
              margin: 43px auto 36px;
              cursor: pointer;
              background-image: url("../assets/img/dreamSchool/closeArrow.png");
              background-repeat: no-repeat;
              background-size: cover;
          }
      }
  }

  .banner7-div {
    padding: 78px 0 26px;
    background-color: #fff;

    .title {
      font-size:24px;
      font-family:SourceHanSansCN;
      font-weight:bold;
      line-height:24px;
      color:rgba(60,60,60,1);
      opacity:1;
      margin-bottom: 15px;
    }

    .story-div {
      width: 1130px;
      text-align: center;
      margin: 0 auto;

      .each-story {
        width: 233px;
        margin: 42px 24px 14px;
        display: inline-block;
        vertical-align: top;
        cursor: pointer;

        .story-img {
          width:100%;
          height:150px;
          background-repeat: no-repeat;
          background-size: cover;
        }

        .story-info-div {
          padding-top: 4px;
          text-align: left;
          overflow: hidden;

          .story-text {
            font-size:14px;
            font-family:PingFang SC;;
            font-weight:500;
            line-height:20px;
            color:rgba(61,57,57,1);
            opacity:1;
            margin-top: 7px;

            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
          }

          .story-text:hover {
            color: #2aa7aa
          }
        }
      }

      .more-teachers {
        font-size:13px;
        font-family:PingFang SC;
        font-weight:500;
        line-height:15px;
        color:rgba(51,51,51,1);
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

  .banner8-div {
    // padding: 58px 0 50px;
    background-color: #fff;
    text-align: center;
    font-size: 30px;

    .banner8 {
      height: 452px;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      position: relative;

      .dream-school-div {
        width:1078px;
        height:223px;
        box-shadow:6px 6px 6px rgba(0,0,0,0.15);
        opacity:1;
        border-radius:35px;
        position: absolute;
        top: 126px;
        left: 50%;
        margin-left: -539px;
        // padding: 51px 0 0 130px;
        text-align: left;
        background-repeat: no-repeat;

        .title-div {
            margin: 51px 0 0 130px;

            .title1 {
                font-size:35px;
                font-family:SourceHanSansCN;
                font-weight:bold;
                line-height:35px;
                color:rgba(255,255,255,1);
                opacity:1;
            }

            .title2 {
                margin: 17px 0 16px;
                font-size:20px;
                font-family:SourceHanSansCN;
                font-weight:500;
                line-height:20px;
                color:rgba(255,255,255,1);
                opacity:1;
            }

            .title3 {
                font-size:26px;
                font-family:Biko;
                font-weight:bold;
                line-height:32px;
                color:rgba(255,255,255,1);
                opacity:1;
                display: inline-block;
            }

            .plan-button {
                width:147px;
                height:41px;
                // background:rgba(255,255,255,1);
                // box-shadow:3px 3px 6px rgba(0,0,0,0.16);
                opacity:1;
                border-radius:23px;
                background-repeat: no-repeat;
                background-size: 100% 126%;
                display: inline-block;
                vertical-align: bottom;
                margin-left: 189px;

                font-size:17px;
                font-family:SourceHanSansCN;
                font-weight:bold;
                line-height:45px;
                color:rgba(42,42,45,1);
                padding-left: 22px;
                cursor: pointer;
            }
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
