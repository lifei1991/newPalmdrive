<template>
  <div class="student-story">
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
              <div class="title" @click="goToDetail(currentType, 4 * ind + index)">{{ item.name }}</div>
              <!-- <div class="dynamic-img" :style="{backgroundImage:'url(' + item.img + ')'}"></div> -->
              <img class="dynamic-img" :src="item.img"/>
              <div class="text">{{ item.text }}</div>
              <div class="more" @click="goToDetail(currentType, 4 * ind + index)">阅读全文 <img src="../assets/img/home/more-green.png" class="more-img" /></div>
              <!-- <div class="bottom-green"></div> -->
            </div>
          </div>
        </div>
      </div>

      <div class="more-guides" @click="loadMoreGuide" v-if="!(maxNumber > 2 || selectedGuide.length <=2)">
        <span>查看更多</span>
        <div class="open-more-img"></div>
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
              <div class="title" @click="goToDetail(currentType, 4 * ind + index)">{{ item.name }}</div>
              <!-- <div class="dynamic-img" :style="{backgroundImage:'url(' + item.img + ')'}"></div> -->
              <img class="dynamic-img" :src="item.img"/>
              <div class="text">{{ item.text }}</div>
              <div class="more" @click="goToDetail(currentType, 4 * ind + index)">阅读全文 <img src="../assets/img/home/more-green.png" class="more-img" /></div>
              <!-- <div class="bottom-green"></div> -->
            </div>
          </div>
        </div>
      </div>

      <div class="banner3-div">
        <div class="more-guides" @click="loadMoreGuide" v-if="!(maxNumber > 2 || selectedGuide.length <=2)">
          <span>查看更多</span>
          <div class="open-more-img"></div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
// import ca from require('../assets/third/carousel/owl.carousel.min.js'
import Common from './common/common'

export default {
  components: {
  },
  name: 'Home',
  data () {
    return {
      isMobile: Common.isMobile,
      guides: [
        [
          {
            'img': './static/img/seedPlan/stories/story3.jpg',
            'name': '托福四连跪的北师学姐，亲述放弃保研、转专业斩获宾大offer的心路历程！',
            'text': '语言考试“战五渣”的我，考了五次托福、两次 GRE 的我，最终“成功够线”，圆梦宾大。申请藤校的路，远没有其他人说得那么容易。',
            'type': '文科'
          },
          {
            'img': './static/img/seedPlan/stories/story6.jpg',
            'name': '逆转三维弱势，她如何凭5段实习斩获全美排名第一的传媒offer？',
            'text': '实习经历非常出彩的小姐姐带来申请经验！',
            'type': '文科'
          },
          {
            'img': './static/img/dreamSchool/stories/story2.jpg',
            'name': '6战托福，Gap一年，她一举拿下CMU带奖offer！',
            'text': '心态崩溃过后，小姐姐绝地反击！',
            'type': '工科'
          },
          {
            'img': './static/img/dreamSchool/stories/story3.jpg',
            'name': '被中介坑申请全拒后，北航小姐姐gap一年转专业拿到剑桥offer！',
            'text': '去年剑桥给我发拒信，今年给我发offer！',
            'type': '文科'
          },
          {
            'img': './static/img/dreamSchool/stories/story6.jpg',
            'name': 'GPA2.9，考研失败，“零背景”的我用半年拿下了心仪的offer……',
            'text': 'GPA2.9、雅思6的起点，挡不住收获offer的重点到来……',
            'type': '工科'
          },
          {
            'img': './static/img/dreamSchool/stories/story9.jpg',
            'name': '从倒数第一到满绩4.0，川大小姐姐斩获就业率100%的梦校offer！',
            'text': '学霸小姐姐带来了满满的干货',
            'type': '商科'
          },
          {
            'img': './static/img/dreamSchool/stories/story10.jpg',
            'name': '本科荒废两年，三维成绩低，看他如何一路逆风翻盘拿下梦校 offer！',
            'text': '申请之路几经波折，最终如愿拿下梦校offer！',
            'type': '理科'
          },
          {
            'img': './static/img/dreamSchool/stories/story13.jpg',
            'name': 'GPA2.88、实习平平还有救吗？这位小姐姐不仅申5中5，还斩获1万刀奖学金！',
            'text': '没有天赋至少还有勤能补拙',
            'type': '商科'
          },
          {
            'img': './static/img/dreamSchool/stories/story8.jpg',
            'name': '低绩点转专业无语言成绩，重大小哥哥强势逆袭拿下G5offer！',
            'text': '低绩点、转专业、无语言申请的强势逆袭',
            'type': '工科'
          },
          {
            'img': './static/img/dreamSchool/stories/story20.jpg',
            'name': '我从保底校一路逆袭专排Top2，和男友牵手上梦校！',
            'text': '申请季简直太魔幻~',
            'type': '商科'
          },
          {
            'img': './static/img/dreamSchool/stories/story25.jpg',
            'name': '无心插柳GRE首战334，申7中5，小姐姐最后为它放弃芝大9万刀！',
            'text': '北大小姐姐的申请指南新鲜出炉~',
            'type': '文科'
          },
          {
            'img': './static/img/dreamSchool/stories/story26.jpg',
            'name': '关晓彤北电师哥：3个月赶8个DDL，藤校来电时差点把对方拉黑！',
            'text': '“减去电影，我的生命为零。”——黑泽明',
            'type': '艺术'
          },
          {
            'img': './static/img/dreamSchool/stories/story30.jpg',
            'name': '2 次考研失败，GPA 2.7、没有语言成绩的他终于······',
            'text': '没有比他经历更曲折的了。',
            'type': '商科'
          },
          {
            'img': './static/img/dreamSchool/stories/story32.jpg',
            'name': '曾经压力大到转学，数理全A佛系偏科的我终于拿下了哥大offer！',
            'text': '申请这件事，除了努力，还需要策略……',
            'type': '理科'
          },
          {
            'img': './static/img/dreamSchool/stories/story34.jpg',
            'name': '放弃保研，普通211狂补实习的她如何低成本留美',
            'text': '行动力up!她为转专业申请早做准备。',
            'type': '商科'
          },
          {
            'img': './static/img/dreamSchool/stories/story38.jpg',
            'name': '双非的她两次逆袭：考研985，申请美国博士，迈向新阶段……',
            'text': '我的人生本是自卑的基主调，经历了两次转折，改变了我的命运……',
            'type': '逆袭'
          }
        ],
        [
          {
            'img': './static/img/seedPlan/stories/story4.jpg',
            'name': '面试时断网，语言成绩越刷越低，双非小姐姐凭什么斩获哥大offer？',
            'text': '申请路充满意外？来看她如何迎接挑战！',
            'type': '商科'
          },
          {
            'img': './static/img/dreamSchool/stories/story7.jpg',
            'name': '双非文科生进击博士！放弃专业唯一保研名额，今拿下高难博士offer，每年录取不超10人！',
            'text': '小姐姐来分享故事和干货啦~',
            'type': '文科'
          },
          {
            'img': './static/img/dreamSchool/stories/story12.jpg',
            'name': '放弃10万刀全奖Offer，被常春藤与G5宠爱的双非小姐姐，最后选择了……',
            'text': '申13中10，为何常春藤与G5都喜欢这个双非小姐姐？',
            'type': '文科'
          },
          {
            'img': './static/img/dreamSchool/stories/story16.jpg',
            'name': '大一创业大二建社团大三办TEDx，双非二本的她告诉你低标化如何赢得漂亮！',
            'text': 'GPA2.9 照样逆袭！',
            'type': '商科'
          },
          {
            'img': './static/img/dreamSchool/stories/story28.jpg',
            'name': '身材好嗓音苏颜值高！双非拿下 7 个offer，这是什么宝藏男孩？',
            'text': '别盯着青你创造营了！校园里也有优质小哥哥！',
            'type': '文科'
          },
          {
            'img': './static/img/dreamSchool/stories/story37.jpg',
            'name': '“双非”普本被歧视？她参加美赛、发明专利、名企实习，最后完美逆袭！',
            'text': '“不要把出国留学当成你的退路，而要当成唯一的路……”',
            'type': '理科'
          },
          {
            'img': './static/img/dreamSchool/stories/story21.jpg',
            'name': '2次考试大陆第一！GPA位列专业第2！看小姐姐如何逃离舒适圈！',
            'text': '学得好有玩得好！她太让人羡慕了！',
            'type': '商科'
          },
          {
            'img': './static/img/dreamSchool/stories/story42.jpg',
            'name': '双非理工男港校Offer斩获记：我是全年级唯一被港科大录取的人',
            'text': '当你全力以赴去争取，就会发现人生真的没有不可能。',
            'type': '双非'
          }
        ],
        [
          {
            'img': './static/img/dreamSchool/stories/story15.jpg',
            'name': '6个Offer，2个带奖！普通211里的宝藏男孩非他莫属了！',
            'text': '普通211男孩的逆流而上',
            'type': '商科'
          },
          {
            'img': './static/img/dreamSchool/stories/story39.jpg',
            'name': '北理小姐姐冒着零科研风险退出实验室，GPA年级第一的她转专业申请拿下耶鲁带奖offer！',
            'text': '学霸小姐姐，名校offer收割机~',
            'type': '奖学金'
          },
          {
            'img': './static/img/dreamSchool/stories/story40.jpg',
            'name': '颜值高又会玩，这个学艺术的武汉理工小姐姐成绩还很好！我酸了…',
            'text': '明明可以靠脸，偏偏要靠才华！',
            'type': '奖学金'
          },
          {
            'img': './static/img/dreamSchool/stories/story41.jpg',
            'name': '从小语种走向大世界，学霸小姐姐拿下哈佛、芝大、LSE、JHU等名校offer！',
            'text': '学霸小姐姐的曲折申请路',
            'type': '奖学金'
          }
        ],
        [
          {
            'img': './static/img/dreamSchool/stories/story1.jpg',
            'name': '包揽哈佛、耶鲁和全美专排Top1梦校offer，她是如何做到的？',
            'text': '这位热爱医学的小姐姐，是如何成为名校offer“收割机”的？',
            'type': '理科'
          },
          {
            'img': './static/img/dreamSchool/stories/story5.jpg',
            'name': '北理小姐姐冒着零科研风险退出实验室，GPA年级第一的她转专业申请拿下耶鲁带奖offer！',
            'text': '学霸小姐姐，名校offer“收割机”~',
            'type': '理科'
          },
          {
            'img': './static/img/dreamSchool/stories/story11.jpg',
            'name': '从小语种走向大世界，学霸小姐姐拿下哈佛、芝大、LSE、JHU等名校offer！',
            'text': '学霸小姐姐的曲折申请路',
            'type': '文科'
          },
          {
            'img': './static/img/dreamSchool/stories/story22.jpg',
            'name': '硕博混申，最后我拒了耶鲁，连拿三个博士offer！',
            'text': '“我一直觉得耶鲁离我很遥远，现在却要拒掉它了，想想好奇妙…”',
            'type': '工科'
          },
          {
            'img': './static/img/dreamSchool/stories/story29.jpg',
            'name': '他拿康奈尔做保底被拒！没想到后续惊现神反转剧情......',
            'text': '真.硬核申请者',
            'type': '文科'
          },
          {
            'img': './static/img/dreamSchool/stories/story31.jpg',
            'name': 'GPA3.9 的年级第一担心失学？看她如何战胜焦虑斩获耶鲁杜克等11所名校 offer！',
            'text': '不去图书馆在寝室都能学到 3.9 GPA的人居然怕失学？',
            'type': '理科'
          },
          {
            'img': './static/img/dreamSchool/stories/story35.jpg',
            'name': '北大降分录取、考神级别也被网申吓懵，他是如何拿下伯克利哥大 offer 的？',
            'text': '你所经历的迷茫和不知所措，北大学霸也经历过……',
            'type': '工科'
          },
          {
            'img': './static/img/dreamSchool/stories/story4.jpg',
            'name': '英美欧混申，GRE两次考出335，她一举拿下世界顶尖商学院offer！',
            'text': '原来申请是从“学生”到“社会人”的第一步……',
            'type': '商科'
          }
        ],
        [
          {
            'img': './static/img/seedPlan/stories/story7.jpg',
            'name': 'GPA 3.9！每周 2 场考试！看中大小姐姐如何靠合理规划战胜迷茫期！',
            'text': 'LSE、港大、南洋理工……5个名校offer一次集齐！',
            'type': '商科'
          },
          {
            'img': './static/img/seedPlan/stories/story5.jpg',
            'name': '颜值高又会玩，这个学艺术的武汉理工小姐姐成绩还很好！我酸了...',
            'text': '明明可以靠脸，偏偏要靠才华！',
            'type': '艺术'
          },
          {
            'img': './static/img/dreamSchool/stories/story17.jpg',
            'name': 'GPA 3.1 到 3.9！为了提高成绩他的 final 真的太拼了！',
            'text': '美本GPA居然都能提高这么多！厉害了！',
            'type': '商科'
          },
          {
            'img': './static/img/dreamSchool/stories/story19.jpg',
            'name': '只用半年GPA 3.1 升到 3.9 ！ 她一周瘦 7 斤终换来耶鲁康奈尔等 8 所offer！',
            'text': '一学期GPA就提升这么多！来看看她有多拼~',
            'type': '理科'
          },
          {
            'img': './static/img/dreamSchool/stories/story24.jpg',
            'name': '拒绝剑桥offer！大一GPA 3.9 的年级第一，直呼这 4 段经历对他影响太大！',
            'text': '他 4 年居然可以做这么多事，也太充实了吧！',
            'type': '理科'
          },
          {
            'img': './static/img/dreamSchool/stories/story33.jpg',
            'name': '3次校奖，GPA3.92！她让理工男感受到了Girls power威胁......',
            'text': '学霸Girl的申请故事',
            'type': '理科'
          }
        ],
        [
          {
            'img': './static/img/seedPlan/stories/story1.jpg',
            'name': '文科生杀到商科成年级第一，她一个月拿下两个BA offer !',
            'text': '从文科到商科，她杀到年级第一！拿下BA offer，只用了一个月',
            'type': '商科'
          },
          {
            'img': './static/img/seedPlan/stories/story2.jpg',
            'name': '藤校最难申请季！宾大 DS offer 却被才华横溢的中大小哥收入囊中？',
            'text': '中大小哥自述留学申请美国藤校经历，斩获offer的诀窍竟是……',
            'type': '理科'
          },
          {
            'img': './static/img/dreamSchool/stories/story14.jpg',
            'name': '拿下KCL、爱大的律政俏佳人，也曾因表达困难而极度不自信……',
            'text': '“原来我没有那么差的！”',
            'type': '文科'
          },
          {
            'img': './static/img/dreamSchool/stories/story18.jpg',
            'name': '曾被说申不上港大，现在我要去常春藤了',
            'text': '还是留学小白是我想去港大备受周围人大打击，最后做梦都没想到收到了哥大、港大的offer……',
            'type': '商科'
          },
          {
            'img': './static/img/dreamSchool/stories/story23.jpg',
            'name': '满绩大神：本以为只能去常春藤，结果拒了MIT去了这儿……',
            'text': 'GPA 3.95，他拒了麻神理工，去了这……',
            'type': '工科'
          },
          {
            'img': './static/img/dreamSchool/stories/story27.jpg',
            'name': '你们羡慕不已的美本，竟成我申请时最大的障碍......',
            'text': '别人拥有的优势，可能并不存在。',
            'type': '文科'
          },
          {
            'img': './static/img/dreamSchool/stories/story36.jpg',
            'name': '投实习全被拒，她为了翻盘一天只睡 2 小时，不服输最终带给她······',
            'text': '你随时都可以改变自己，别停滞不前！',
            'type': '工科'
          },
          {
            'img': './static/img/dreamSchool/stories/story42.jpg',
            'name': '零背景转专业，最后她拒了藤校上万刀奖学金，去了这里……',
            'text': '从初见梦校官网的憧憬，到收获offer一箩筐',
            'type': '转专业'
          },
          {
            'img': './static/img/dreamSchool/stories/story43.jpg',
            'name': '坚定拒掉耶鲁！江大小哥哥硕博混申+转专业，斩获6个名校offer后来到了这里……',
            'text': '当硕博混申和转专业的难度叠加，他如何突破重围，进击梦校？',
            'type': '转专业'
          },
          {
            'img': './static/img/dreamSchool/stories/story44.jpg',
            'name': '放弃保研、拿了两次国奖的她，6战托福后收到了哥大的offer',
            'text': '计算机专业小姐姐的申请之路',
            'type': '转专业'
          },
          {
            'img': './static/img/dreamSchool/stories/story45.jpg',
            'name': '转专业佛系还有“偶像包袱”，看武大小哥哥的别样爬藤路',
            'text': '谁的青春不迷茫，其实我们都一样',
            'type': '转专业'
          },
          {
            'img': './static/img/dreamSchool/stories/story46.jpg',
            'name': '“野鸡大学”毕业的我孤注一掷转申博物馆研究，终于逆袭澳国立！',
            'text': '奇迹会出现！',
            'type': '转专业'
          }
        ]
      ],
      dynamicTypes: [
        {
          name: '逆袭',
          img: require('../assets/img/studentStory/guides/menu1.png'),
          img1: require('../assets/img/studentStory/guides/menu1-1.png')
        },
        {
          name: '双非',
          img: require('../assets/img/studentStory/guides/menu2.png'),
          img1: require('../assets/img/studentStory/guides/menu2-1.png')
        },
        {
          name: '奖学金',
          img: require('../assets/img/studentStory/guides/menu3.png'),
          img1: require('../assets/img/studentStory/guides/menu3-1.png')
        },
        {
          name: '名校',
          img: require('../assets/img/studentStory/guides/menu4.png'),
          img1: require('../assets/img/studentStory/guides/menu4-1.png')
        },
        {
          name: 'Gpa',
          img: require('../assets/img/studentStory/guides/menu5.png'),
          img1: require('../assets/img/studentStory/guides/menu5-1.png')
        },
        {
          name: '转专业',
          img: require('../assets/img/studentStory/guides/menu6.png'),
          img1: require('../assets/img/studentStory/guides/menu6-1.png')
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
    //   axios.get('http://www.palmdrive.cn/v2/static/json/studentStory.json').then(
    //   // axios.get('http://localhost:8080/static/json/studentStory.json').then(
    //     (res) => {
    //       that.guides = res.data
    //       // that.$set(that, 'guides', res.data)
    //       that.changeGuideType(that.currentType)
    //     }
    //   )
    // }
    // )

    // this.guides = require('../../static/json/studentStory.json')
    this.banner1 = this.isMobile ? require('../assets/img/studentStory/mobile/banner1.png') : require('../assets/img/studentStory/banner1.png')
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
          jsonName: 'studentStory.json'

        }
      })
      window.open(routeUrl.href, '_blank')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.student-story {
  text-align: center;

  .web-div {
    .banner1-div {
      width: 100%;
      padding: 0;
      background-color: #21C3B6;

      .banner1 {
        width: 1070px;
        height: 486px;
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
        margin: 62px auto 78px;
        width: 950px;
        background:rgba(250,255,255,1);
        box-shadow:0px 3px 15px rgba(91,98,97,0.16);
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
      background-color: rgba(213,213,213,.19);;
      text-align: center;
      margin-bottom: 310px;
      height: 188px;

      .carousel-div {
        width: 1200px;
        margin: 0 auto;
        text-align: center;

        .each-dynamic {
          padding: 20px 19px 0;
          background:rgba(255,255,255,1);
          box-shadow:5px 5px 6px rgba(0,0,0,0.09);
          opacity:1;
          width: 221px;
          margin-bottom: 25px;
          display: inline-block;
          margin: 66px 10px 39px;
          text-align: left;
          border-radius:20px;

          .logo {
            font-size:13px;
            font-family:Campton;
            font-weight:bold;
            line-height:13px;
            color:rgba(190,190,190,1);
            opacity:1;
          }

          .dynamic-img {
            margin: 14px 0 18px -19px;
            width: 259px;
            height: 130px;
            background-repeat: no-repeat;
            background-size: cover;
          }

          .title {
            font-size:16px;
            font-family:SourceHanSansCN, Biko;
            font-weight:bold;
            line-height:22px;
            color:rgba(0,0,0,1);
            opacity:1;
            margin-top: 12px;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
            height: 44px;
            cursor: pointer;
          }

          .title:hover {
            color: #2aa7aa;
          }

          .text {
            font-family:SourceHanSansCN, CamptonLight;
            font-size:12px;
            font-weight:400;
            line-height:18px;
            color:rgba(51,51,51,1);
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
            line-height:15px;
            color:rgba(51,51,51,1);
            opacity:1;
            margin-bottom: 28px;
            cursor: pointer;
            width: 70px;
            border:2px solid rgba(42,168,154,1);
            opacity:1;
            border-radius:19px;
            padding: 0px 1px 0px 5px;

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

    .banner2-div:last-child {
      // margin-bottom: 0 !important;
    }

    .more-guides {
      font-size:14px;
      font-family:SourceHanSansCN;
      font-weight:400;
      line-height:34px;
      color:rgba(72,72,72,1);
      opacity:1;
      // padding: 32px 0 51px;
      cursor: pointer;
      width:110px;
      border:2px solid rgba(42,168,154,1);
      border-radius:21px;
      margin: -35px auto 40px;
      padding: 0px 8px;

      .open-more-img {
        width: 26px;
        height: 10px;
        display: inline-block;
        margin-left: 8px;
        cursor: pointer;
        background-image: url("../assets/img/dreamSchool/openArrow.png");
        background-repeat: no-repeat;
        background-size: cover;
        opacity: .5;
      }
    }
  }

  .mobile-div {
    .banner1-div {
      width: 100%;
      padding: 0;
      background-color: #21C3B6;

      .banner1 {
        width: 10rem;
        height: 6.186667rem;
        margin: 0 auto;
        position: relative;
        text-align: left;
        background-repeat: no-repeat;
        background-size: cover;
        padding-top: .106667rem;
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
      background-color: rgba(213,213,213,.19);
      text-align: center;
      // margin-bottom: 4.853333rem;
      // height: 3.306667rem;

      .carousel-div {
        // width: 1200px;
        margin: 0 auto;
        text-align: center;

        .each-dynamic {
          padding: .266667rem .266667rem 0;
          background:rgba(255,255,255,1);
          box-shadow:5px 5px 6px rgba(0,0,0,0.09);
          opacity:1;
          width: 3.76rem;
          // margin-bottom: .4rem;
          display: inline-block;
          margin: .533333rem .133333rem;
          text-align: left;
          border-radius:.266667rem;

          .logo {
            font-size:.266667rem;
            font-family:Campton;
            font-weight:bold;
            line-height:.266667rem;
            color:#BEBEBE;
            opacity:1;
          }

          .dynamic-img {
            margin: .186667rem 0 .266667rem -0.266667rem;
            width: 4.293333rem;
            height: 2.16rem;
            background-repeat: no-repeat;
            background-size: cover;
          }

          .title {
            font-size:.373333rem;
            font-family:SourceHanSansCN, Biko;
            font-weight:bold;
            line-height:.48rem;
            color:rgba(0,0,0,1);
            opacity:1;
            margin-top: .133333rem;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
            overflow: hidden;
            height: 1.413333rem;
            cursor: pointer;
          }

          .title:hover {
            color: #2aa7aa;
          }

          .text {
            font-family:SourceHanSansCN, CamptonLight;
            font-size: .346667rem;
            font-weight:400;
            line-height:.426667rem;
            color:rgba(51,51,51,1);
            opacity:1;
            margin: 0 0 .106667rem;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
            overflow: hidden;
            height: 1.253333rem;
          }

          .more {
            font-size:.266667rem;
            font-family:SourceHanSansCN;
            font-weight:500;
            line-height:.32rem;
            color:rgba(51,51,51,1);
            opacity:1;
            margin-bottom: 28px;
            cursor: pointer;
            width: 1.6rem;
            border:2px solid rgba(42,168,154,1);
            opacity:1;
            border-radius:.506667rem;
            padding: .08rem .08rem .06rem .12rem;

            .more-img {
              width: .266667rem;
              height: .266667rem;
              display: inline-block;
              margin-left: .08rem;
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

    .banner3-div {
      background-color: rgba(213,213,213,.19);
      padding: .24rem 0 .533333rem;

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
        margin: 0 auto ;
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
    }
  }
}
</style>
