<template>
  <div class="dream-school">
    <!-- <remote-css rel="stylesheet" href="../assets/third/carousel/owl.theme.css"></remote-css>
    <remote-css rel="stylesheet" href="../assets/third/carousel/owl.carousel.css"></remote-css> -->

    <div v-if="!isMobile" class="web-div">
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
            <div class="each-teacher" v-if="index < maxNumber" :key="item.school" @click="handleOpenDialog(item)">
              <div class="teacher-img" :style="{backgroundImage:'url(' + item.img + ')'}"></div>
              <div class="teacher-info-div">
                <div class="teacher-name">{{ item.name }}</div>
                <div class="teacher-school">{{ item.phdSchool ? item.phdSchool : item.school }}</div>
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

    <div v-if="isMobile" class="mobile-div">
      <div class="banner1-div">
        <div class="banner1" :style="{backgroundImage:'url(' + banner1 + ')'}">
          <div class="info1-div">
            <div class="info-number">99.3%</div>
            <div class="info-text" style="line-height:28px ">学校申请成功率</div>
          </div>
          <div class="info2-div">
            <div class="info-number">71.6%</div>
            <div class="info-text">世界排名前50名校录取offer比例</div>
          </div>
          <div class="info3-div">
            <div class="info-number">94.3%</div>
            <div class="info-text">世界排名前100名校录取offer比例</div>
          </div>

          <!-- <div class="text">数据解释权归棕榈大道</div> -->
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
          <!-- <div class="title">六大专享特权</div> -->
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
        <div class="four-to-one-div"></div>
        <div class="four-to-one-div2"></div>
      </div>

      <div class="banner5-div">
        <div class="title">导师团队</div>
        <ul class="teacher-item-div" >
          <li v-for="(item, index) in teacherTypes" :key="item.name" v-html="item.name" @click="changeTeacherType(index)" v-bind:class="{ 'teacher-bg-colors' : index == currentType }"></li>
        </ul>
        <div class="teachers-div">
          <template v-for="(item, index) in selectedTeacher" >
            <div class="each-teacher" v-if="index < 8" :key="item.school" @click="handleOpenDialog(item)">
              <div class="teacher-img" :style="{backgroundImage:'url(' + item.img + ')'}"></div>
              <div class="teacher-info-div">
                <div class="teacher-name">{{ item.name }}</div>
                <div class="teacher-school">{{ item.phdSchool ? item.phdSchool : item.school }}</div>
              </div>
            </div>
          </template>

          <!-- <div class="more-teachers" @click="showMoreTeachers" v-if="maxNumber <= 8"> -->
          <div class="more-teachers" v-if="maxNumber <= 8" @click="show = !show">
            <div >
              查看更多导师
            </div>
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
              查看更多案例
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

      <div class="mask" v-if="dialogVisible"></div>
    </div>

    <teacher-dialog :dialogVisible="dialogVisible" :selectTeacher="selectTeacher" @childEvent="dialogVisible = $event"></teacher-dialog>
  </div>
</template>

<script>
// import ca from require('../assets/third/carousel/owl.carousel.min.js'
import TeacherDialog from './common/teacherInfoDialog'
import Common from './common/common'

export default {
  components: {
    TeacherDialog
  },
  name: 'Home',
  data () {
    return {
      isMobile: Common.isMobile,
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
            phdSchool: '',
            school: '加州大学伯克利分校，计算机科学硕士',
            baSchool: '北京航空航天大学，电子工程',
            experience: '曾在国内计算机视觉创业公司做算法实习生；国家留学基金委全额奖学金优秀本科生交换，意大利米兰理工大学；爱好篮球，排球；现在Oracle做软件工程师',
            expertise: '计算机科学，电子工程，电子与计算机工程',
            demo: '加州大学伯克利分校，电子工程与计算机科学硕士<br/>康奈尔大学，计算机科学硕士<br/>宾夕法尼亚大学，计算机图形学与游戏技术硕士<br/>布朗大学，计算机科学硕士<br/>哥伦比亚大学，计算机科学硕士<br/>南加州大学，计算机科学硕士（游戏开发）<br/>华盛顿大学，电子工程硕士<br/>南加州大学，电子工程硕士<br/>加州大学圣迭戈分校，电子与计算机工程硕士<br/>波士顿大学，电子工程硕士<br/>加州大学尔湾分校，电子与计算机工程硕士'
          },
          {
            img: require('../assets/img/home/teachers/H.png'),
            name: 'H 导师',
            phdSchool: '',
            school: '卡耐基梅隆大学，计算机科学硕士',
            baSchool: '复旦大学，计算机科学 ',
            experience: '考试+申请+准备材料+学习的三个月，完成了一场从零开始的申请；现在Pinterest做软件工程师',
            expertise: '计算机科学',
            demo: '布朗大学，计算机科学硕士<br/>加州大学圣迭戈分校, 计算机科学与工程硕士<br/>加州大学尔湾分校，计算机科学硕士<br/>佐治亚理工大学，计算机科学硕士<br/>伊利诺伊大学厄巴纳-香槟分校，计算机科学硕士<br/>哥伦比亚大学，计算机科学硕士<br/>华盛顿大学（圣路易斯），计算机科学硕士<br/>杜克大学，电子与计算机工程硕士<br/>南加州大学，计算机科学硕士<br/>莱斯大学，计算机科学硕士<br/>乔治·华盛顿大学，计算机科学硕士<br/>约翰霍普金斯大学，计算机科学硕士<br/>罗彻斯特大学，计算机科学硕士<br/>佛罗里达大学，计算机科学硕士<br/>雪城大学，计算机科学硕士<br/>匹兹堡大学，计算机科学硕士'
          },
          {
            img: require('../assets/img/home/teachers/Y.png'),
            name: 'Y 导师',
            phdSchool: '斯坦福大学，物理学博士',
            school: '',
            baSchool: '中国科学技术大学，应用物理',
            experience: '曾在微软做数据科学家岗位实习，之后曾就职于Adobe、Helios DataInc.，现在宽凳科技担任研发总监。',
            expertise: '物理学',
            demo: '耶鲁大学，电子工程博士<br/>芝加哥大学，物理学博士<br/>伊利诺伊大学厄巴纳-香槟分校，材料科学博士'
          },
          {
            img: require('../assets/img/home/teachers/C.png'),
            name: 'C 导师',
            phdSchool: '',
            school: '斯坦福大学，教育学硕士',
            baSchool: '中央民族大学，对外汉语',
            experience: 'HenryM.Gunn高中,中文老师',
            expertise: '教育学',
            demo: '哥伦比亚大学，教育心理硕士<br/>纽约大学，对比教育硕士'
          },
          {
            img: require('../assets/img/home/teachers/L.png'),
            name: 'L 导师',
            phdSchool: '',
            school: '杜克大学，管理学硕士',
            baSchool: '上海财经大学，会计学',
            experience: '高盛（香港）、波士顿咨询、国泰君安、安永',
            expertise: '管理学',
            demo: '香港大学，金融学硕士<br/>香港科技大学，商业管理硕士<br/>帝国理工大学，金融学硕士<br/>博科尼大学，会计学硕士'
          },
          {
            img: require('../assets/img/home/teachers/Z2.png'),
            name: 'Z 导师',
            phdSchool: '麻省理工大学，政治科学博士',
            school: '约翰霍普金斯大学&清华大学，国际关系',
            baSchool: '人民大学，国际关系',
            experience: '曾就职于清华·卡内基全球政策研究中心、国务院发展研究中心、国家能源局、旧金山奥杜邦环境保护组织等；曾获得留学基金委“国际区域研究与外语高层次人才”奖学金、中国人民大学校长奖学金等；发起创办清华大学青思智库',
            expertise: '政治科学，国际商务与贸易，国际关系，国际发展，东亚研究，数据科学，统计学',
            demo: '乔治华盛顿大学，统计学硕士<br/>纽约大学，社会科学应用统计学硕士<br/>加州大学圣迭戈分校，国际研究硕士<br/>华盛顿大学，国际研究硕士<br/>雪城大学，国际关系硕士<br/>华威大学，国际关系硕士<br/>伦敦大学亚非学院，太平洋亚洲研究硕士'
          },
          {
            img: require('../assets/img/home/teachers/Z3.png'),
            name: 'Z 导师',
            phdSchool: '',
            school: '哥伦比亚大学，艺术管理硕士',
            baSchool: '德雷赛尔大学，电视制作与媒体管理',
            experience: '曾在费城艺术联盟工作，协作宋东、尹秀珍的大型展览《筷道》;曾在费城艺术博物馆、古根海姆美术馆、ART21、豪瑟沃斯画廊等艺术机构工作。本科及研究生都是DIY申请拿到多所高校奖学金，坚信看透自己、理解自己、善用经历才是申请的关键。如果你也准备好献身美术馆、拍卖行、或是艺术教育，选择艺术管理项目将是你人生的转折点',
            expertise: '艺术管理，文化管理，数字媒体，电视制作，行为艺术，策展等',
            demo: '哥伦比亚大学，艺术管理硕士<br/>宾夕法尼亚大学，非营利组织领导管理硕士<br/>纽约大学，行为艺术管理硕士<br/>南加州大学，策展实践及公共领域硕士<br/>波士顿大学，电视制作硕士<br/>东北大学，音乐产业领导管理硕士<br/>伦敦大学学院，数字媒体硕士<br/>曼彻斯特大学，艺术管理硕士<br/>悉尼大学，艺术策展硕士<br/>阿姆斯特丹大学，艺术与文化硕士<br/>普瑞特艺术学院，艺术与文化管理硕士<br/>莱顿大学，全球艺术及现代艺术硕士'
          },
          {
            img: require('../assets/img/home/teachers/W.png'),
            name: 'W 导师',
            phdSchool: '',
            school: '麻省理工学院，金融硕士',
            baSchool: '波士顿学院，数学/哲学专业',
            experience: '在纽约资产管理公司任研究员，Cogitr.Inc联合创始人，热衷于马拉松长跑',
            expertise: '金融，金融工程，金融数学',
            demo: '纽约大学，金融数学硕士<br/>芝加哥大学，金融数学硕士'
          }
        ],
        [
          {
            img: require('../assets/img/teachers/graduate/Winnie.png'),
            name: 'Winnie',
            school: '伦敦政治经济学院 国际关系专业',
            baSchool: '',
            experience: '本科就读于密歇根大学安娜堡分校，主修历史并辅修亚洲研究，主要研究方向有英国现代史、中国政治和美国亚裔影视文化等。研究生 DIY 申请获得英国和加拿大多所名校的 offer，硕士就读期间的研究侧重建构主义、女权主义、民族主义和国际组织等方面。',
            expertise: '亚洲研究，公共政策，公共管理，国际政治，文学',
            demo: '哥伦比亚大学 东亚语言和文化<br/>杜克大学 分析政治经济学 <br/>清华-约翰斯霍普金斯大学双学位 全球政治和经济<br/> 宾夕法尼亚大学 国际公共管理 <br/>乔治城大学 公共管理 <br/>南加州大学 传播管理 <br/>牛津大学 传统东亚研究 <br/>伦敦政治经济学院 比较视角的中国研究 <br/>伦敦国王大学 国际争端研究'
          },
          {
            img: require('../assets/img/teachers/graduate/Tangning.png'),
            name: 'Tangning',
            school: '乔治城大学 公共政策专业',
            baSchool: '',
            experience: '能文能“舞”，英美德三国留学经历，曾参与 2014APEC 领导人峰会筹办，在世界自然保护联盟主席办公室实习。',
            expertise: '传媒，公共管理，政治学，国际发展',
            demo: '哥伦比亚大学 公共管理硕士<br/>约翰霍普金斯大学-清华 国际事务与法学双学位硕士<br/>乔治城大学 公共政策硕士<br/>宾夕法尼亚大学 社会政策硕士<br/>康奈尔大学 公共管理硕士<br/>布朗大学 公共管理硕士<br/>哈佛大学 人类发展与心理学硕士<br/>哥伦比亚大学 发展心理学硕士<br/>宾夕法尼亚大学 人类发展硕士<br/>南加州大学 战略公共关系硕士<br/>乔治城大学 传媒、文化和科技硕士<br/>华盛顿大学圣路易斯大学 东亚研究硕士<br/>伦敦政经学院-复旦大学 全球政治经济双学位硕士<br/>伦敦政经学院 性别、政策与不平等硕士<br/>伦敦政经学院 国际社会与公共政策硕士'
          },
          {
            img: require('../assets/img/teachers/graduate/Elio.png'),
            name: 'Elio',
            school: '帝国理工学院 创新创业与管理学专业',
            baSchool: '',
            experience: '6 年留学经验，去过 31 个国家参与商业比赛和志愿者项目。高考以远超录取线成绩选择宁波诺丁汉大学，大三在英国本部交换时获得院长奖学金、梦想奖学金。而后研究生选择在帝国理工商学院管理学创投方向深造，期间带领团队参与 LVMH 等商赛并获得名次。工作和实习经历涉足广泛，包括国内券商投行部、美资管理咨询、500 强快消市场和公关部、互联网产品部等。',
            expertise: '管理学，商业分析，金融，市场',
            demo: '牛津大学<br/>帝国理工大学<br/>伦敦政经学院<br/>伦敦大学学院<br/>哥伦比亚大学<br/>卡耐基梅隆大学<br/>圣路易斯华盛顿大学<br/>南加州大学、罗切斯特大学<br/>伊利诺伊香槟分校<br/>波士顿大学<br/>加州大学圣地亚哥分校'
          },
          {
            img: require('../assets/img/teachers/graduate/Xinyi.png'),
            name: 'Xinyi',
            school: '哥伦比亚大学 体育管理硕士',
            baSchool: '',
            experience: '本科毕业于曼荷莲女子学院，主修欧洲历史并辅修意大利语。在校期间一直不仅保持着专业 ',
            expertise: '商业分析，金融，市场，体育管理',
            demo: '麻省理工学院<br/>耶鲁大学<br/>哥伦比亚大学<br/>宾夕法尼亚大学<br/>芝加哥大学<br/>西北大学<br/>卡耐基梅隆大学<br/>杜克大学<br/>伦敦政经学院<br/>帝国理工<br/>香港科技大学<br/>南洋理工大学<br/>华盛顿圣路易斯大学<br/>范德堡大学'
          },
          {
            img: require('../assets/img/teachers/graduate/Cookie.png'),
            name: 'Cookie',
            school: '美国埃默里大学 公共卫生硕士 – 医疗政策与管理专业',
            baSchool: '',
            experience: '从广告圈到医疗产业，最终赴美前往 Emory University 攻读公共卫生政策及管理硕士。毕业设计成绩达到全班前五名，在读期间更是被健康经济学教授邀请成为研究生课程助教。',
            expertise: '生物统计，生物科学，公共卫生',
            demo: '哈佛大学 免疫医学硕士<br/>耶鲁大学 生物医学工程硕士 生物统计硕士<br/>哥伦比亚大学 生物医学工程硕士 生物统计硕士<br/>宾夕法尼亚大学 细胞与分子学博士，生物技术硕士，医学物理硕士<br/>西北大学 生物医学工程硕士，生物技术硕士<br/>杜克大学 生物医学工程硕士，生物统计硕士<br/>约翰斯.霍普金斯大学 生物医学工程硕士，公共卫生硕士<br/>康奈尔大学 航空和航天工程硕士，生物统计硕士，电子电器工程硕士<br/>莱斯大学 生物工程硕士<br/>圣路易斯华盛顿大学 生物医学工程博士，分子与细胞生物学博士<br/>加州大学洛杉矶分校 生物统计硕士<br/>南加州大学 计算机科学硕士，生物医学工程硕士<br/>密歇根大学-安娜堡分校 生物与生命科学，生物统计<br/>纽约大学 计算机科学硕士<br/>佛罗里达大学 公卫流行病学博士'
          },
          {
            img: require('../assets/img/teachers/graduate/Sarah.png'),
            name: 'Sarah',
            school: '香港大学 环境管理专业 ',
            baSchool: '',
            experience: '本硕期间交叉学习理工和商科课程，在食品质检院、英国 Vegware 公司和香港安永实习，在上海一家环境咨询公司工作。',
            expertise: '环境工程/环境管理/环境科学，土木工程，材料科学，生物医学工程，公共卫生，统计，食品与营养，计算机科学，电子电器工程',
            demo: '卡耐基梅隆 土木和环境工程硕士<br/>卡耐基梅隆 材料科学硕士<br/>卡耐基梅隆 生物医学工程硕士<br/>西北大学 土木和环境工程硕士<br/>芝加哥大学 计算机科学博士<br/>帝国理工学院 公共卫生硕士<br/>哥伦比亚大学 营养学硕士<br/>杜克大学 环境管理硕士<br/>宾夕法尼亚大学 环境科学与政策硕士<br/>康奈尔大学 土木工程硕士<br/>康奈尔大学 运筹学硕士<br/>加州大学伯克利分校 统计硕士<br/>加州大学伯克利分校 工业工程与运筹学硕士<br/>加州大学洛杉矶分校 生物工程硕士<br/>'
          },
          // {
          //   img: require('../assets/img/teachers/graduate/Hanyun.png'),
          //   name: 'Hanyun',
          //   school: '爱尔兰都柏林圣三一学院 金融风险管理专业',
          //   baSchool: '',
          //   experience: '本科在天普大学学习风险管理与保险专业，研究生就读于都柏林圣三一学院金融风险管理专业。本科在校时期获得美国公众风险控制联合组织（PRIMA）年度学生奖学金以及学校多项纪念奖学金。大三暑假以突出的学业成绩被推荐到纽约州萨拉托加市政府实习，积极参与风险研究，并成功构思起草新的风险登记表，并且被多个部门采用。<br/><br/> 本科毕业后 DIY 申请到成功申请到澳洲悉尼大学，德国慕尼黑大学，都柏林圣三一学院，最后选择进入圣三一学院学习金融风险管理知识，并将以一等荣誉毕业。',
          //   expertise: '城市规划，药学，工商管理',
          //   demo: '伦敦大学学院 药物发现与开发硕士<br/伦敦大学学院 能源与环境材料硕士<br/>蒙特雷国际研究学院 笔译，口译和语言教育硕士<br/>爱丁堡大学 城市规划与设计硕士<br/>伦敦国王学院 制药技术理学硕士<br/>伦敦国王学院 药物分析与质量管理理学硕士<br/>华威大学  行为经济理学硕士<br/>巴斯大学 口译与笔译硕士<br/>德国慕尼黑大学 工商管理硕士'
          // },
          {
            img: require('../assets/img/teachers/graduate/aofu.png'),
            name: '奥夫',
            school: '伦敦政治经济学院 中国比较研究',
            baSchool: '',
            experience: '在中央部委与大型媒体混迹多年的中英韩三语掌握者，喜欢倾听世界的北外人。',
            expertise: '国际关系，政治学，MPP，新闻，经济学',
            demo: '牛津大学 当代中国研究硕士 <br/>伦敦政治经济学院 经济学硕士 <br/>伦敦政治经济学院 复旦-LSE 全球政治经济学硕士 <br/>伦敦政治经济学院 环境经济学与气候变化硕士 <br/>伦敦政治经济学院 会计金融硕士 <br/>伦敦政治经济学院 中国比较研究硕士 <br/>伦敦政治经济学院 城市化与发展硕士 <br/>伦敦政治经济学院 国际社会与公共政策硕士 <br/>帝国理工学院 环境金融硕士 <br/>伦敦大学学院 数字人文硕士 <br/>伦敦大学学院 比较经济政策硕士 <br/>伦敦大学学院 比较商业经济硕士 <br/>伦敦国王学院 数字社会与文化硕士 <br/>伦敦国王学院 新兴市场与国际发展硕士 <br/>伦敦国王学院 国际政治经济学硕士'
          }
        ],
        [
          {
            img: require('../assets/img/teachers/foreigners/RachelCrovello.png'),
            name: 'Rachel Crovello',
            school: '斯坦福大学 语言学及翻译专业',
            experience: 'Rachel在斯坦福大学获得语言学学士学位。双辅修翻译研究和阿拉伯语的Rachel每天都会用到她的语言能力。Rachel多年来一直参与培训非英语母语的学生，这些经历让她能够有效地帮助学生熟练掌握英文写作流程，增强他们对英文写作的信心。她在棕榈工作中最开心的就是看到她的语言能力能对学生有所帮助，让他们可以迅速掌握新的语法概念。除了编辑，Rachel业余还会为Dalkey Archive Press翻译小说、演奏小提琴、或辅导斯坦福的学生。',
            baSchool: '',
            expertise: '',
            demo: ''
          },
          {
            img: require('../assets/img/teachers/foreigners/KristenPierce.png'),
            name: 'Kristen Pierce',
            school: '哥伦比亚大学 英语教育专业',
            baSchool: '',
            experience: 'Kristen在锡耶纳学院取得英语学士学位，在哥伦比亚大学教育学院取得英语教育硕士学位。作为美国学校七年级的教师，Kristen利用她的教育背景帮助她的学生成长为写作者，思考者和建立独立人格。很多不同年龄段的学生都对专业写作深感头疼，她希望帮助他们培养写作技能并获得成功。在棕榈大道，她很喜欢帮助学生润色写作，让学生们能够追求自己的学术目标或者事业发展。在编辑和教学之余，她喜欢阅读推理小说和环游世界。',
            expertise: '',
            demo: ''
          },
          {
            img: require('../assets/img/teachers/foreigners/JakeIngrassia.png'),
            name: 'Jake Ingrassia',
            school: '南加州大学 新闻专业',
            baSchool: '',
            experience: 'Jake在南加大取得了传媒硕士学位。他现在就职于ABC News，参与制作国际新闻和“早安美国”等节目。Jake在写作和新闻撰写方面有着出色的能力和经验。他期待用他的写作技巧为更多同学润色文章，让文章的表述更加自然地道。在编辑工作之余，Jake喜欢参加各种音乐会，不断追寻新的音乐灵感。Jake期待和大家一起工作！',
            expertise: '',
            demo: ''
          },
          {
            img: require('../assets/img/teachers/foreigners/ElizabethPollack.png'),
            name: 'Elizabeth Pollack',
            school: '卓克索大学 剧本创作专业',
            baSchool: '',
            experience: 'Elizabeth 在卓克索大学取得编剧学士学位，辅修英语，同时拥有写作与出版证书。她有两年的研究生申请文书和简历编辑经验。Elizabeth对书面文字的热情是她经手的文书和简历的质量保证，她确信每篇文章都能够完美展现出学生的经验和申请亮点。在编辑工作之余，Elizabeth会撰写剧本和文章，她也是塑形芭蕾健身课的老师。',
            expertise: '',
            demo: ''
          },
          {
            img: require('../assets/img/teachers/foreigners/AlexandraNichipor.png'),
            name: 'Alexandra Nichipor',
            school: '哈佛大学 神学专业',
            baSchool: '',
            experience: 'Alexandra是哈佛大学神学院的毕业生。她在本科时当过录取大使，因而很了解录取官看重什么。本科毕业之后，她曾经在中国河北省保定市的河北大学当英语教师，之后回到美国在哈佛进行研究生学习，并且为非英语母语的学生提供辅导，帮他们准备英语能力测试。除了目前在棕榈的工作之外，她还为大部头文学作品撰写导读。在她的空余时间，Alexandra喜欢阅读、烹饪和跳舞。',
            expertise: '',
            demo: ''
          },
          {
            img: require('../assets/img/teachers/foreigners/WaheedGardezi.png'),
            name: 'Waheed Gardezi ',
            school: '哈佛大学 中东研究专业',
            baSchool: '',
            experience: 'Waheed曾担任哈佛本科部的招生官，对名校申请有着一手的丰富经验。作为SAT满分（1600）获得者，他利用自己的学术能力帮助过许多同学实现梦想。无论是在Ernst & Young做咨询官，还是在亚洲教授英语，教育始终是他的激情所在，他享受帮助同学写出完美文书的过程。在棕榈，Waheed希望能帮助更多同学写出出色的文书。在他的空余时间，Waheed喜欢冲浪，爬山，参与社区志愿者活动。',
            expertise: '',
            demo: ''
          },
          {
            img: require('../assets/img/teachers/foreigners/VictoriaGaffney.png'),
            name: 'Victoria Gaffney ',
            school: '约翰·霍普金斯大学 写作专业',
            baSchool: '',
            experience: 'Victoria在JHU取得了写作专业的硕士学位。她对学术写作和创意写作都充满热情。她尤其喜爱个人文书的写作，这也是她加入棕榈最重要的原因。作为在语言学和句法领域有相当深造的写作者，她希望能够帮助更多国际学生写出优秀的文书。Victoria目前在一家非营利性机构工作，并教授儿童创意写作。',
            expertise: '',
            demo: ''
          },
          {
            img: require('../assets/img/teachers/foreigners/NoahTeachy.png'),
            name: 'Noah Teachy',
            school: '哥伦比亚大学 音乐教育专业',
            baSchool: '',
            experience: 'Jake在南加大取得了传媒硕士学位。他现在就职于ABC News，参与制作国际新闻和“早安美国”等节目。Jake在写作和新闻撰写方面有着出色的能力和经验。他期待用他的写作技巧为更多同学润色文章，让文章的表述更加自然地道。在编辑工作之余，Jake喜欢参加各种音乐会，不断追寻新的音乐灵感。Jake期待和大家一起工作！',
            expertise: '',
            demo: ''
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
      selectedTeacher: [],
      dialogVisible: false,
      selectTeacher: {}
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
    this.banner1 = this.isMobile ? require('../assets/img/dreamSchool/mobile/banner1.png') : require('../assets/img/dreamSchool/banner1.png')
    this.banner6 = require('../assets/img/dreamSchool/banner6.png')
    this.banner8 = require('../assets/img/dreamSchool/banner8.png')
    this.dreamSchoolPlan = this.isMobile ? require('../assets/img/dreamSchool/mobile/plan/dreamSchoolPlan.png') : require('../assets/img/dreamSchool/plan/dreamSchoolPlan.png')
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
    },
    handleOpenDialog (item) {
      this.dialogVisible = false
      if (this.currentType !== 3) {
        this.dialogVisible = true
        this.selectTeacher = item
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.dream-school {
  text-align: center;

  .web-div {
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
          cursor: pointer;

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

        .each-teacher:hover {
          transform: scale(1.1);
          transition-duration: 0.5s;
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
  }

  .mobile-div {
    .banner1-div {
      width: 100%;
      padding: 0.533333rem 0 0.213333rem;
      background-color: #1BBEB2;

      .banner1 {
        width: 9.04rem;
        height: 4.773333rem;
        margin: 0 auto;
        position: relative;
        text-align: left;
        background-repeat: no-repeat;
        background-size: cover;

        .info1-div {
          position: absolute;
          top: 2.15rem;
          left: 0.8rem;
        }

        .info2-div {
          position: absolute;
          top: 2.98rem;
          left: 0.8rem;
        }

        .info3-div {
          position: absolute;
          top: 3.8rem;
          left: 0.8rem;
        }

        .info-number {
          width: 1.066667rem;
          font-size:0.426667rem;
          font-family:Biko;
          font-weight:bold;
          line-height:0.746667rem;
          color:rgba(40,167,169,1);
          opacity:1;
          margin-right: 0.15rem;
          display: inline-block;
          height: 0.746667rem;
        }

        .info-text {
          width: 1.866667rem;
          font-size:0.186667rem;
          font-family:SourceHanSansCN;
          font-weight:bold;
          line-height:0.3rem;
          color:rgba(57,60,61,1);
          opacity:1;
          display: inline-block;
          height: 0.746667rem;
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
      padding: 1.066667rem 0 1.2rem;

      .title {
        font-size: 0.426667rem;
        font-family: Campton, SourceHanSansCN;
        font-weight: bold;
        line-height: 0.426667rem;
        color: rgba(57, 60, 61, 1);
        opacity: 1;
        margin: 0px auto 0.293333rem;
      }

      .title2 {
        margin: 0 auto;
        width: 7.493333rem;
        font-size: 0.32rem;
        font-family: Biko, SourceHanSansCN;
        font-weight: 500;
        line-height: 0.48rem;
        color: rgba(85, 85, 85, 1);
        opacity: 1;
        margin-bottom: 0.133333rem;
      }

      .school-div {
      //   width: 1150px;
        margin: 0.64rem auto 0;
        // align-items: center;
        // display: flex;
        // flex-direction: row;
        // justify-content: center;

        .each-school-div {
          width: 3.76rem;
          height:4.72rem;
          display: inline-block;
          margin: 0.213333rem;
          background-repeat: no-repeat;
          background-size: contain;
        }
      }
    }

    .banner3-div {
      padding: 0.773333rem 0;
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
        // width: 1200px;
        margin: 0 auto;

        .each-power-div {
          width: 2.346667rem;
          display: inline-block;
          margin: 0.32rem 0.4rem;
          vertical-align: top;

          .power-img {
              width: 1.333333rem;
              height: 1.333333rem;
              margin: 0 auto;
              background-repeat: no-repeat;
              background-size: cover;
          }

          .power-title {
              margin: 0.213333rem auto 0.106667rem;
              font-size:0.373333rem;
              font-family:SourceHanSansCN;
              font-weight:bold;
              line-height:0.373333rem;
              color:rgba(74,74,74,1);
              opacity:1;
          }

          .power-text {
              font-size:0.266667rem;
              font-family:SourceHanSansCN;
              font-weight:500;
              line-height:0.266667rem;
              color:rgba(117,117,117,1);
          }
        }
      }
    }

    .banner4-div {
      background-color: #F8F2F2;
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
        width: 8.16rem;
        height: 8.72rem;
        margin: 0.666667rem auto 0.906667rem;
        background-image: url("../assets/img/home/mobile/fourToOne/fourtoone.png");
        position: relative;
        text-align: left;
        background-repeat: no-repeat;
        background-size: cover;
      }

      .four-to-one-div2 {
        width: 6.853333rem;
        height: 9.146667rem;
        margin: 0 auto;
        background-image: url("../assets/img/home/mobile/fourToOne/fourtoone2.png");
        text-align: left;
        background-repeat: no-repeat;
        background-size: cover;
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
      padding: 1.12rem 0 0.8rem;
      background-color: #fff;

      .title {
        font-size:0.426667rem;
        font-family:SourceHanSansCN;
        font-weight:bold;
        line-height:0.426667rem;
        color:rgba(60,60,60,1);
        opacity:1;
        margin-bottom: 0.346667rem;
      }

      .teacher-item-div {
        list-style: none;
        text-align: center;
        padding: 0;
        margin-bottom: 0.666667rem;

        li {
          font-size: 0.32rem;
          font-family: SourceHanSansCN;
          font-weight: 500;
          line-height: 0.32rem;
          opacity: 1;
          margin: 0 0.133333rem;
          display: inline-block;
          color: rgba(175,175,175,1);
          padding: 0.106667rem 0.266667rem;
          cursor: pointer;
        }

        .teacher-bg-colors {
          font-weight:bold;
          background: #01b7b7;
          color: #fff;
          border-radius: 10px;
        }
      }

      .teachers-div {
        // width: 1130px;
        text-align: center;
        margin: 0 auto;

        .each-teacher {
          width: 4.106667rem;
          margin: 0 0.08rem 0.8rem;
          display: inline-block;
          vertical-align: top;
          cursor: pointer;

          .teacher-img {
            width:100%;
            height:4.933333rem;
            background-repeat: no-repeat;
            background-size: cover;
          }

          .teacher-info-div {
            height: 1.626667rem;
            background-color: #35C4C4;
            padding: 0.346667rem 0.426667rem 0;
            text-align: left;

            .teacher-name {
              font-size:0.373333rem;
              font-family:Campton;
              font-weight:bold;
              line-height:0.32rem;
              color:#F6FBFB;
              opacity:1;
            }

            .teacher-school {
              font-size:0.32rem;
              font-family:SourceHanSansCN;
              font-weight:400;
              line-height:0.453333rem;
              color:#F6FBFB;
              opacity:1;
              margin-top: 0.106667rem;
            }
          }
        }

        // .each-teacher:hover {
        //   transform: scale(1.1);
        //   transition-duration: 0.5s;
        // }

        .more-teachers {
          font-size:0.266667rem;
          font-family:PingFang SC;
          font-weight:500;
          line-height:0.64rem;
          color:#16B4B4;
          opacity:1;
          text-align: center;
          margin: 0 auto;
          width: 2.64rem;
          height: 0.64rem;
          background: rgba(53,185,196,0.14);
          border-radius: 15px;

          a {
            text-decoration: none;
            color: #16B4B4;
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

    .banner6-div {
      background-color: #21C3B6;
      background-repeat: no-repeat;
      background-size: cover;
      overflow: auto;

      .ask-div {
        margin: 1.093333rem auto 0;
        text-align: center;

        .ercode {
          width: 3.546667rem;
          height: 3.546667rem;
          background-repeat: no-repeat;
          background-size: contain;
          display: inline-block;
        //   border: 12px solid #fff;
        //   background-color: #fff;
        }

        .ask-text {
          // display: inline-block;
          margin: 0.613333rem auto 0.533333rem;
          width: 5.84rem;
          text-align: center;
          vertical-align: top;

          .text1 {
            font-size:0.32rem;
            font-family:SourceHanSansCN;
            font-weight:bold;
            line-height:0.48rem;
            color:rgba(255,255,255,1);
            opacity:1;
          }

          .text2 {
            margin-top: 0.4rem;
            font-size:0.32rem;
            font-family:SourceHanSansCN;
            font-weight:bold;
            line-height:0.373333rem;
            color:#FFFFFF;
            opacity:1;
            display: inline-block;
          }

          .text3 {
            display: inline-block;
            width:1.36rem;
            height:0.48rem;
            background:rgba(255,255,255,1);
            opacity:1;
            border-radius:0.32rem;
            font-size:0.32rem;
            font-family:SourceHanSansCN;
            font-weight:bold;
            line-height:0.48rem;
            color: #36B2B3;
            text-align: center;
            margin-left: 0.266667rem;
          }
        }

        .close-ask {
          width: 20px;
          height: 8px;
          // background: #fff;
          margin: 30px auto 30px;
          cursor: pointer;
          background-image: url("../assets/img/dreamSchool/closeArrow.png");
          background-repeat: no-repeat;
          background-size: cover;
        }
      }
    }

    .banner7-div {
      padding: 1.173333rem 0 0.533333rem;
      background-color: #fff;

      .title {
        font-size:0.426667rem;
        font-family:SourceHanSansCN;
        font-weight:bold;
        line-height:0.426667rem;
        color:rgba(60,60,60,1);
        opacity:1;
        margin-bottom: 0.72rem;
      }

      .story-div {
        // width: 1130px;
        text-align: center;
        margin: 0 auto;

        .each-story {
          width: 3.706667rem;
          margin: 0 0.293333rem 0.533333rem;
          display: inline-block;
          vertical-align: top;
          cursor: pointer;

          .story-img {
            width:100%;
            height:2.4rem;
            background-repeat: no-repeat;
            background-size: cover;
          }

          .story-info-div {
            padding-top: 4px;
            text-align: left;
            overflow: hidden;

            .story-text {
              font-size:0.32rem;
              font-family:PingFang SC;;
              font-weight:500;
              line-height:0.426667rem;
              color:rgba(61,57,57,1);
              opacity:1;
              margin-top: 7px;

              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 3;
            }

            .story-text:hover {
              color: #2aa7aa
            }
          }
        }

        .more-teachers {
          font-size:0.266667rem;
          font-family:PingFang SC;
          font-weight:500;
          line-height:0.64rem;
          color:#16B4B4;
          opacity:1;
          text-align: center;
          margin: 0 auto;
          width: 2.64rem;
          height: 0.64rem;
          background: rgba(53,185,196,0.14);
          border-radius: 15px;
        }
      }
    }

    .banner8-div {
      // padding: 58px 0 50px;
      background-color: #fff;
      text-align: center;
      font-size: 0.533333rem;

      .banner8 {
        height: 9.36rem;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;

        .dream-school-div {
          width:8.186667rem;
          height:6.293333rem;
          // box-shadow:6px 6px 6px rgba(0,0,0,0.15);
          opacity:1;
          border-radius:0.533333rem;
          position: absolute;
          top: 1.253333rem;
          left: 50%;
          margin-left: -4rem;
          // padding: 51px 0 0 130px;
          text-align: left;
          background-repeat: no-repeat;
          background-size: cover;

          .title-div {
              margin: 1.573333rem 0 0 1.786667rem;

              .title1 {
                  font-size:0.533333rem;
                  font-family:SourceHanSansCN;
                  font-weight:bold;
                  line-height:0.533333rem;
                  color: #434862;
                  opacity:1;
              }

              .title2 {
                width: 3.413333rem;
                margin: 0.32rem 0 0.426667rem;
                font-size:0.32rem;
                font-family:SourceHanSansCN;
                font-weight:500;
                line-height:0.426667rem;
                color:#79787B;
                opacity:1;
              }

              .title3 {
                  font-size:0.373333rem;
                  font-family:Biko;
                  font-weight:bold;
                  line-height:0.373333rem;
                  color:#EF7386;
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

    .mask {
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      opacity: .5;
      background: #000;
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
