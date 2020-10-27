<template>
  <div class="seed-plan">
    <!-- <remote-css rel="stylesheet" href="../assets/third/carousel/owl.theme.css"></remote-css>
    <remote-css rel="stylesheet" href="../assets/third/carousel/owl.carousel.css"></remote-css> -->

    <div class="banner1-div">
      <div class="banner1" :style="{backgroundImage:'url(' + banner1 + ')'}">
        <div class="info1-div">
          <div class="info-number">1800+</div>
          <div class="info-text" style="line-height:28px">种子学生</div>
        </div>
        <div class="info2-div">
          <div class="info-number">95%</div>
          <div class="info-text" style="line-height:28px">背景提升率</div>
        </div>
        <div class="info3-div">
          <div class="info-number">3200+</div>
          <div class="info-text"  style="text-align: center"> 背景提升<br/>Offer</div>
        </div>

        <div class="text">数据解释权归棕榈大道</div>
      </div>
    </div>

    <div class="banner2-div">
      <div class="seed-plan-intro1">
        <div class="intro1-title1">
            <span class="green">种子</span>计划
        </div>
        <div class="intro1-title2">1800+同学的选择，多年背景提升，申请水到渠成。</div>
        <div class="intro1-title3">
            相较于申请季一锤定音的选校和文书辅导，种子计划先行一步，引导同学认识自己、挑战自己，长线培养和提升学生的学术能力、实践能力和英语能力。通过一到两年的背景提升指导，种子主导师为同学进行优劣势分析，量身定制学业计划，明确专业定位、辅导实习/科研/交流交换等，结合棕榈学院项目和核桃英语课程，全方位提升同学升学和职场竞争力。
        </div>
      </div>
      <div class="seed-plan-intro2">
        <div class="each-plan-div"  v-for="item in seedPlanIntros" :key="item.img">
            <div class="plan-img" :style="{backgroundImage:'url(' + item.img + ')'}"></div>
            <div class="plan-title">{{ item.title }}</div>
        </div>
      </div>
    </div>

    <div class="banner3-div">
      <div class="title">核心种子力量</div>
      <div class="title2">1800+同学的选择，多年背景提升，申请水到渠成。</div>
      <ul class="teacher-item-div" >
        <li v-for="(item, index) in teacherTypes" :key="item.name" @click="changeTeacherType(index)" :class="{ 'teacher-bg-colors' : index == currentType }">
          <div class="img" :style="{backgroundImage:'url(' + item.img + ')'}"></div>
          <div>{{ item.name }}</div>
        </li>
      </ul>
      <div class="teachers-div">
        <template v-for="(item, index) in selectedTeacher" >
          <div class="each-teacher" v-if="index < maxNumber" :key="index" @click="handleOpenDialog(item)">
            <div class="teacher-img" :style="{backgroundImage:'url(' + item.img + ')'}"></div>
            <div class="teacher-info-div" :style="{'background-color':(currentType == 2 ? '#FEE51F':'#F1FAFA')}">
              <div class="teacher-name">{{ item.name }}</div>
              <div class="teacher-school">{{ item.phdSchool ? item.phdSchool : item.school }}</div>
            </div>
          </div>
        </template>
      </div>

      <div class="more-teachers" @click="show = !show" v-if="currentType == 0 || currentType == 1">
        <div>
          查看更多
        </div>
        <div class="open-ask"></div>
      </div>
    </div>

    <transition name="slide-fade">
        <div v-if="show" class="banner6-div" :style="{backgroundImage:'url(' + banner6 + ')'}">
            <div class="ask-div">
                <div class="ercode" :style="{backgroundImage:'url(' + askErcode + ')'}"></div>
                <div class="ask-text">
                    <div class="text1">想要了解更多导师信息和留学服务内容，可扫码咨询留学小助手。</div>
                    <div class="text2">咨询暗号</div>
                    <div class="text3">种 子</div>
                </div>
                <div class="close-ask" @click="show = !show"></div>
            </div>
            <div></div>
        </div>
    </transition>

    <div class="banner4-div">
        <div class="title">种子计划优势</div>
        <div class="power-div">
            <div class="each-power-div"  v-for="item in advantages" :key="item.img">
                <div class="power-img" :style="{backgroundImage:'url(' + item.img + ')'}"></div>
                <div class="power-title">{{ item.title }}</div>
                <div class="power-text">{{ item.text }}</div>
            </div>
        </div>
    </div>

    <div class="banner5-div">
        <div class="title">背景提升方案</div>
        <div class="title2">实习领域覆盖广，科研专业覆盖全，海外交流辅导经验丰富。</div>
        <div class="demo-div1">
            <div class="each-demo-div1"  v-for="item in demos" :key="item.img">
                <div class="demo-img" :style="{backgroundImage:'url(' + item.img + ')'}"></div>
                <div class="demo-title">{{ item.title }}</div>
                <div class="demo-intro">{{ item.intro }}</div>
                <div class="demo-text">{{ item.text }}</div>
            </div>
        </div>
        <div class="demo-div2">
            <div class="each-demo-div2"  v-for="item in demos2" :key="item.img">
                <div class="demo-img" :style="{backgroundImage:'url(' + item.img + ')'}"></div>
                <div class="demo-title">{{ item.title }}</div>
                <div class="demo-text">{{ item.text }}</div>
            </div>
        </div>
    </div>

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
                <div class="title1">种子计划</div>
                <div class="title2">大一至大三，从背景提升到出国申请，一步到位</div>
                <div class="title3">￥ 49,800 - ￥ 109,800</div>
                <!-- <div class="plan-button" :style="{backgroundImage:'url(' + planButton + ')'}">我要咨询</div> -->
              </div>
          </div>
      </div>
    </div>

    <teacher-dialog :dialogVisible="dialogVisible" :selectTeacher="selectTeacher" @childEvent="dialogVisible = $event"></teacher-dialog>

  </div>
</template>

<script>
// import ca from require('../assets/third/carousel/owl.carousel.min.js'
import TeacherDialog from './common/teacherInfoDialog'
export default {
  components: {
    TeacherDialog
  },
  name: 'Home',
  data () {
    return {
      seedPlanIntros: [
        {
          img: require('../assets/img/seedPlan/seedPlanIntros/plan1.png'),
          title: '学业规划'
        },
        {
          img: require('../assets/img/seedPlan/seedPlanIntros/plan2.png'),
          title: '背景提升'
        },
        {
          img: require('../assets/img/seedPlan/seedPlanIntros/plan3.png'),
          title: '申请辅导'
        },
        {
          img: require('../assets/img/seedPlan/seedPlanIntros/plan4.png'),
          title: '能力提升'
        },
        {
          img: require('../assets/img/seedPlan/seedPlanIntros/plan5.png'),
          title: '模拟面试'
        },
        {
          img: require('../assets/img/seedPlan/seedPlanIntros/plan6.png'),
          title: '文书辅导 '
        }
      ],
      stories: [
        {
          'img': './static/img/seedPlan/stories/story1.jpg',
          'name': '文科生杀到商科成年级第一，她一个月拿下两个BA offer !',
          'type': '商科'
        },
        {
          'img': './static/img/seedPlan/stories/story2.jpg',
          'name': '藤校最难申请季！宾大 DS offer 却被才华横溢的中大小哥收入囊中？',
          'type': '理科'
        },
        {
          'img': './static/img/seedPlan/stories/story3.jpg',
          'name': '托福四连跪的北师学姐，亲述放弃保研、转专业斩获宾大offer的心路历程！',
          'type': '文科'
        },
        {
          'img': './static/img/seedPlan/stories/story4.jpg',
          'name': '面试时断网，语言成绩越刷越低，双非小姐姐凭什么斩获哥大offer？',
          'type': '商科'
        },
        {
          'img': './static/img/seedPlan/stories/story5.jpg',
          'name': '颜值高又会玩，这个学艺术的武汉理工小姐姐成绩还很好！我酸了...',
          'type': '艺术'
        },
        {
          'img': './static/img/seedPlan/stories/story6.jpg',
          'name': '逆转三维弱势，她如何凭5段实习斩获全美排名第一的传媒offer？',
          'type': '文科'
        },
        {
          'img': './static/img/seedPlan/stories/story7.jpg',
          'name': 'GPA 3.9！每周 2 场考试！看中大小姐姐如何靠合理规划战胜迷茫期！',
          'type': '商科'
        }
      ],
      teachers: [
        [
          {
            img: require('../assets/img/teachers/graduate/Jasmine.png'),
            name: 'Jasmine 老师',
            phdSchool: '',
            school: '纽约州立大学奥尔巴尼分校 公共管理 硕士',
            baSchool: '',
            experience: '研究生毕业后在纽约州政府担任商业分析员，之后到大型NGO担任会计经理；回国以后致力于留学行业担任留学导师和职业导师。',
            expertise: '文商科同学背景提升',
            demo: '辅导同学拿到安永、宽奇资产、国观智库、经纬创投、ABC美好社会咨询社、北京生命科学研究所、京东金融等实习/科研offer：辅导学生成功申请包括哈佛大学、加州大学伯克利分校以及哥伦比亚大学等美国TOP30高校的暑期课程。'
          },
          {
            img: require('../assets/img/teachers/graduate/Serena.png'),
            name: 'Serena 老师',
            phdSchool: '',
            school: ' 爱丁堡大学 教育学硕士',
            baSchool: '',
            experience: '毕业后在上交大高教院担任RA，协助进行世界一流大学排名研究和对外咨询。之后在英语教学机构从事教学及教研。后加入棕榈大道，成为全职种子主导师。',
            expertise: '理工科同学背景提升',
            demo: ' 辅导同学拿到平安产险、银河证券、GEC助教、西门子、MITACS、Global Ladder等实习/科研offer；拿到包括哥伦比亚大学、加州大学洛杉矶分校、伦敦政治经济学院在内的英美TOP50高校交换交流机会。'
          },
          {
            img: require('../assets/img/teachers/graduate/Xiaohan.png'),
            name: 'Xiaohan 老师',
            phdSchool: '',
            school: '哥伦比亚大学 公共管理硕士',
            baSchool: '',
            experience: '本科和硕士时期都在研究国际发展/反贫困事务，非洲、东南亚都留下了实践的足迹。自己当年申请遇见了坑，今天一定要让学弟学妹们避雷脱坑~',
            expertise: '理工科同学背景提升',
            demo: '辅导学生拿到BCG PTA 、罗兰贝格PTA 、安永、毕马威、国观智库、招商银行、字节跳动、环球时报等的实习offer。辅导学生成功申请到慕尼黑工业大学、卡内基梅隆大学、卡迪夫大学、香港科技大学、芝加哥大学、加州大学圣迭戈分校等校的暑期科研offer，加州大学伯克利分校、剑桥大学、南洋理工大学等校的交换交流机会。'
          },
          {
            img: require('../assets/img/teachers/graduate/Ruitao.png'),
            name: 'Ruitao 老师',
            phdSchool: '',
            school: '广东外语外贸大学 翻译硕士',
            baSchool: '',
            experience: '本硕连读期间做过英语教学、自由译者、报社编辑、新媒体运营、猎头等相关实习和工作。一路走来，体验过不同行业的工作环境，也不断在寻找和靠近自己理想的工作和生活。作为一名种子主导师，希望把自己这一路走来的所思所想分享给大家，帮助和陪伴同学在大学期间筑梦、逐梦和圆梦！',
            expertise: '文商科同学背景提升',
            demo: '辅导同学拿到四大、滴滴出行、爱奇艺、雅培、施耐德、久谦咨询、海国图智、欧盟商会等多个实习offer，以及美国TOP50交换交流机会。'
          },
          {
            img: require('../assets/img/teachers/graduate/ShuYang.png'),
            name: 'ShuYang 老师',
            phdSchool: '',
            school: '河北工业大学 英语学士',
            baSchool: '',
            experience: '从事留学工作8年，曾担任文书顾问和申请顾问，拥有丰富的留学申请经验。加入棕榈大道担任种子主导师后，希望能借助自己多年的积累，帮助同学们更早明确申请意向，更精准规划自己的留学之路。',
            expertise: '文商科同学背景提升',
            demo: '辅导同学拿到京东、西门子、字节跳动、腾讯、电通安吉斯、麦肯光明、凤凰网、罗德公关等多个实习offer，以及英国G5院校和美国TOP50院校的交流交换机会。'
          },
          {
            img: require('../assets/img/teachers/graduate/Lulu.png'),
            name: 'Lulu 老师',
            phdSchool: '',
            school: '伦敦大学学院 教育学硕士',
            baSchool: '',
            experience: '本科和硕士期间积累第二语言教学经验（汉语/英语），毕业后曾在国际学校A-level课程中心全职任教，此后加入棕榈，为学生提供个性化的背景提升方案与辅导。',
            expertise: '文商科同学背景提升',
            demo: ' 辅导同学拿到安永、强生、社科院、中国发展基金会、广发银行、海国图智、伟达公关、搜狐等实习offer，以及全球TOP50院校交流交换、暑研机会。'
          },
          {
            img: require('../assets/img/teachers/graduate/Vicky.png'),
            name: 'Vicky 老师',
            phdSchool: '',
            school: '俄亥俄州立大学 营养学学士',
            baSchool: '',
            experience: '6年教育及留学行业工作经验，曾担任国际部升学指导老师，成功指导学生申请到世界名校。后加入棕榈大道成为全职种子主导师，辅导同学在种子阶段做好各项背景提升任务，冲刺理想的彼岸。',
            expertise: '理工科同学背景提升',
            demo: '辅导同学拿到MITACS、方正证券、万博宣伟、拜耳、ABC美好社会咨询社、中科院地理科学与资源研究所等多个实习/科研offer，以及美国TOP50院校的交换交流机会。'
          },
          {
            img: require('../assets/img/teachers/graduate/Sophie.png'),
            name: 'Sophie 老师',
            phdSchool: '',
            school: '杜伦大学 教育学硕士',
            baSchool: '',
            experience: '在英国完成教育学研究生学业，回国后曾在世界500强公司担任管培生，后加入棕榈大道担任种子主导师，希望给予留学路上迷茫的孩子专业的指导，精细的规划，留学的路上你不再孤单。',
            expertise: '理工科同学背景提升',
            demo: '辅导同学拿到耶鲁大学、香港科技大学、腾讯、人民在线、四大、天风证券、中国太平洋保险等实习/科研offer，以及全球TOP50院校交换交流机会。'
          }
        ],
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
            img: require('../assets/img/teachers/walnut/Sharon.png'),
            name: 'Sharon 老师',
            school: '宾夕法尼亚大学 TESOL专业'
          },
          {
            img: require('../assets/img/teachers/walnut/Wally.png'),
            name: 'Wally 老师',
            school: '宾夕法尼亚大学 TESOL专业'
          },
          {
            img: require('../assets/img/teachers/walnut/Fiona.png'),
            name: 'Fiona 老师',
            school: '宾夕法尼亚大学 TESOL专业'
          },
          {
            img: require('../assets/img/teachers/walnut/Alexa.png'),
            name: 'Alexa 老师',
            school: '哥伦比亚大学 TESOL专业'
          },
          {
            img: require('../assets/img/teachers/walnut/Julie.png'),
            name: 'Julie 老师',
            school: '范德堡大学 ELL专业'
          },
          {
            img: require('../assets/img/teachers/walnut/Valerie.png'),
            name: 'Valerie 老师 ',
            school: '哥伦比亚大学 TESOL专业'
          },
          {
            img: require('../assets/img/teachers/walnut/Jacka.png'),
            name: 'Jacka 老师 ',
            school: '纽约大学 TESOL专业'
          }
        ],
        [
          {
            img: require('../assets/img/teachers/palmdriveSchool/palmdrive1.png'),
            name: '',
            school: '人脸识别教授博士/博士后/副教授IEE/ACM会员，IEEE审稿人'
          },
          {
            img: require('../assets/img/teachers/palmdriveSchool/palmdrive2.png'),
            name: '',
            school: '心理学教授知名211院校副教授，美国名校博士后多篇SCI/SSCI文章'
          },
          {
            img: require('../assets/img/teachers/palmdriveSchool/palmdrive3.png'),
            name: '',
            school: '分析化学教授双一流大学教授，国际知名SCI期刊50篇'
          },
          {
            img: require('../assets/img/teachers/palmdriveSchool/palmdrive4.png'),
            name: '',
            school: '大数据治霾教授，大数据与环境、健康专业委员会委员，SCI论文20余篇'
          },
          {
            img: require('../assets/img/teachers/palmdriveSchool/palmdrive5.png'),
            name: '',
            school: '金融学教授，双一流高校教授、博导，博士后，SSCI期刊论文近50篇，知名期刊匿名审稿人'
          },
          {
            img: require('../assets/img/teachers/palmdriveSchool/palmdrive6.png'),
            name: '',
            school: '大数据教授国内TOP2顶尖院校教授北大博士，200多篇期刊与会议论文'
          },
          {
            img: require('../assets/img/teachers/palmdriveSchool/palmdrive7.png'),
            name: '',
            school: '财务分析教授双一流高校副教授，管理学博士，领域内知名期刊审稿人'
          },
          {
            img: require('../assets/img/teachers/palmdriveSchool/palmdrive8.png'),
            name: '',
            school: '机器学习导师，哈佛大学计算机科学博士'
          }
        ]
      ],
      teacherTypes: [
        {
          name: '种子主导师',
          img: require('../assets/img/seedPlan/teacherMenu/menu1.png')
        },
        {
          name: '专业导师',
          img: require('../assets/img/seedPlan/teacherMenu/menu2.png')
        },
        {
          name: '核桃英语',
          img: require('../assets/img/seedPlan/teacherMenu/menu3.png')
        },
        {
          name: '棕榈学院',
          img: require('../assets/img/seedPlan/teacherMenu/menu4.png')
        }
      ],
      advantages: [
        {
          img: require('../assets/img/seedPlan/advantage/advantage1.png'),
          title: '学业规划',
          text: '开学、期中、期末、假期规划，助力同学明确目标，完成出国先修课，提升GPA。'
        },
        {
          img: require('../assets/img/seedPlan/advantage/advantage2.png'),
          title: '英语报考 & 培训',
          text: '名师讲解 GRE / GMAT / IELTS / TOEFL 题型和方法，真题演练和点评。'
        },
        {
          img: require('../assets/img/seedPlan/advantage/advantage3.png'),
          title: '背景提升',
          text: '实习、科研、志愿者、竞赛、交流交换，海量辅导经验和资源，加强同学背景。'
        },
        {
          img: require('../assets/img/seedPlan/advantage/advantage4.png'),
          title: '能力锤炼',
          text: '督促打卡，提升同学自律性；学术指导，培养同学严谨治学、独立思辨性。'
        }
      ],
      demos: [
        {
          img: require('../assets/img/seedPlan/demo/demo1.png'),
          title: '中英实习简历修改',
          intro: '约一周',
          text: '简历录课收听 / 素材结构搭建 / 专业内容精改  / 逐句语言修订/'
        },
        {
          img: require('../assets/img/seedPlan/demo/demo2.png'),
          title: '科研实习申请指导',
          intro: '按需',
          text: '实习岗位推送  / 科研资源引荐 / 课外活动分享   / 套瓷面试辅导/'
        },
        {
          img: require('../assets/img/seedPlan/demo/demo3.png'),
          title: '交流交换申请指导',
          intro: '按需',
          text: '交换项目筛选  / 申请流程答疑 / 文书沟通修改  / 材料语言润色 /'
        }
      ],
      demos2: [
        {
          img: require('../assets/img/seedPlan/demo/demo4.png'),
          title: '企业实习',
          text: '提升目标专业相关背景，培养职业素养，锻造职场技能。'
        },
        {
          img: require('../assets/img/seedPlan/demo/demo5.png'),
          title: '海内外科研',
          text: '深入认识目标专业，了解科研项目运作，提升学术科研能力。'
        },
        {
          img: require('../assets/img/seedPlan/demo/demo6.png'),
          title: '交流交换',
          text: '开拓跨文化视野，提前适应海外学业生活，加强国际化背景。'
        },
        {
          img: require('../assets/img/seedPlan/demo/demo7.png'),
          title: '志愿活动',
          text: '参与公共服务，提升软背景，培养社会责任感和使命感。'
        },
        {
          img: require('../assets/img/seedPlan/demo/demo8.png'),
          title: '竞赛 & 社团',
          text: '提升领导力、团队协作力，提高执行力，结交同道中人。'
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
    //   axios.get('http://www.palmdrive.cn/v2/static/json/seedPlan.json').then(
    //   // axios.get('http://localhost:8080/static/json/seedPlan.json').then(
    //     (res) => {
    //       that.stories = res.data
    //       // that.$set(that, 'guides', res.data)
    //       // that.changeGuideType(that.currentType)
    //     }
    //   )
    // }
    // )

    // this.stories = require('../../static/json/seedPlan.json')
    this.banner1 = require('../assets/img/seedPlan/banner1.png')
    this.banner6 = require('../assets/img/dreamSchool/banner6.png')
    this.banner8 = require('../assets/img/seedPlan/banner8.png')
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
          jsonName: 'seedPlan.json'

        }
      })
      window.open(routeUrl.href, '_blank')
    },
    handleOpenDialog (item) {
      this.dialogVisible = false
      if (this.currentType !== 3 && this.currentType !== 2) {
        this.dialogVisible = true
        this.selectTeacher = item
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.seed-plan {
  text-align: center;

  .banner1-div {
    width: 100%;
    padding: 74px 0 54px;
    background-color: #1BBEB2;

    .banner1 {
      width: 1116px;
      height: 458px;
      margin: 0 auto;
      position: relative;
      text-align: left;
      background-repeat: no-repeat;
      background-size: cover;

      .info1-div {
        position: absolute;
        top: 264px;
        left: 66px;
      }

      .info2-div {
        position: absolute;
        top: 326px;
        left: 66px;
      }

      .info3-div {
        position: absolute;
        top: 387px;
        left: 66px;
      }

      .info-number {
        width: 75px;
        font-size:28px;
        font-family:Biko;
        font-weight:bold;
        line-height:35px;
        color:rgba(40,167,169,1);
        opacity:1;
        margin-right: 8px;
        display: inline-block;
        height: 28px;
      }

      .info-text {
        width: 66px;
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
        top: 435px;
        left: 35px;

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
    background-color: #F3F6FB;
    padding: 110px 0 111px;
    text-align: center;

    .green {
        color: #21C3B6;
    }

    .seed-plan-intro1 {
        display: inline-block;
        width: 465px;
        margin-top: 3px;
        text-align: left;
        margin-right: 115px;

        .intro1-title1 {
            font-size:28px;
            font-family:SourceHanSansCN;
            font-weight:bold;
            line-height:28px;
            color:rgba(60,60,60,1);
            opacity:1;
        }

        .intro1-title2 {
            margin: 14px 0 24px;
            font-size:16px;
            font-family:Biko, SourceHanSansCN;
            font-weight:bold;
            line-height:16px;
            color:rgba(93,93,93,1);
            opacity:1;
        }

        .intro1-title3 {
            font-size:14px;
            font-family:SourceHanSansCN;
            font-weight:400;
            line-height:20px;
            color:rgba(102,102,103,1);
            opacity:1;
        }
    }

    .seed-plan-intro2 {
        display: inline-block;
        vertical-align: top;
        width: 550px;

        .each-plan-div {
            margin: 0 35px 35px;
            width: 99px;
            display: inline-block;

            .plan-img {
                width: 100%;
                height: 66px;
                margin-bottom: 18px;
                background-repeat: no-repeat;
                background-size: cover;
            }

            .plan-title {
                font-size:16px;
                font-family:SourceHanSansCN;
                font-weight:bold;
                line-height:16px;
                color:rgba(80,82,83,1);
                opacity:1;
            }
        }
    }
  }

  .banner3-div {
    padding: 78px 0 54px;
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
        font-size:16px;
        font-family:SourceHanSansCN;
        font-weight:500;
        line-height:16px;
        color:rgba(60,60,60,1);
        opacity:1;
        margin: 18px 0 35px;
    }

    .teacher-item-div {
        list-style: none;
        text-align: center;
        padding: 0;
        margin: 0 auto 98px;
        width: 812px;
        background:rgba(250,255,255,1);
        box-shadow:0px 3px 15px rgba(91,98,97,0.16);
        opacity:1;
        border-radius:83px;

        li {
          width: 161px;
          height: 123px;
          font-size: 16px;
          font-family: SourceHanSansCN;
          font-weight: bold;
          line-height: 16px;
          opacity: 1;
          margin-right: 56px;
          display: inline-block;
          color: rgba(57,60,61,1);
          cursor: pointer;
          text-align: center;

          .img {
            width:51px;
            height:51px;
            background:rgba(255,255,255,1);
            box-shadow:3px 3px 6px rgba(0,0,0,0.16);
            border-radius:50%;
            opacity:1;
            margin: 22px auto 9px;
            background-repeat: no-repeat;
            background-size: cover;
          }
        }

        li:last-child {
            margin-right: 0;
        }

        .teacher-bg-colors {
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

      .teacher-type-title1 {
        font-size:16px;
        font-family:SourceHanSansCN;
        font-weight:bold;
        line-height:px;
        color:rgba(57,60,61,1);
        opacity:1;
      }

      .teacher-type-title2 {
        margin: 25px 0 59px;
        font-size:16px;
        font-family:SourceHanSansCN;
        font-weight:400;
        line-height:16px;
        color:rgba(60,60,60,1);
        opacity:1;
      }

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

      .each-teacher:hover {
        transform: scale(1.1);
        transition-duration: 0.5s;
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

  .banner4-div {
    padding: 88px 0 109px;
    background:#DCEAFF;

    .title {
      font-size: 24px;
      font-family: SourceHanSansCN;
      font-weight: bold;
      line-height: 24px;
      color: rgba(60,60,60,1);
      opacity: 1;
      margin: 0px auto 65px;
    }

    .power-div {
      text-align: center;
      // width: 1200px;
      margin: 0 auto;

      .each-power-div {
        width: 195px;
        display: inline-block;
        margin: 0 37px;
        text-align: left;
        vertical-align: top;

        .power-img {
            width: 138px;
            height: 129px;
            background-size: cover;
            background-repeat: no-repeat;
        }

        .power-title {
            margin: 28px 0 15px 21px;
            font-size:18px;
            font-family:SourceHanSansCN;
            font-weight:bold;
            line-height:18px;
            color:rgba(60,60,60,1);
            opacity:1;
        }

        .power-text {
            font-size:14px;
            font-family:SourceHanSansCN, Campton;
            font-weight:400;
            line-height:20px;
            color:rgba(81,81,81,1);
            margin-left: 21px;
        }
      }
    }
  }

  .banner5-div {
    padding: 104px 0 92px;
    background:#FFFFFF;

    .title {
      font-size: 24px;
      font-family: SourceHanSansCN;
      font-weight: bold;
      line-height: 24px;
      color: rgba(60,60,60,1);
      opacity: 1;
      text-align: center;
    }

    .title2 {
      font-size:16px;
      font-family:SourceHanSansCN;
      font-weight:500;
      line-height:16px;
      color:rgba(60,60,60,1);
      opacity:1;
      margin: 20px auto 154px;
    }

    .demo-div1 {
      text-align: center;
      // width: 1200px;
      margin: 0 auto 70px;

      .each-demo-div1 {
        width: 321px;
        display: inline-block;
        margin: 0 33px;
        vertical-align: top;
        background:rgba(243,246,251,1);
        box-shadow:0px 3px 6px rgba(0,0,0,0.16);
        border-radius:15px;

        .demo-img {
            width: 168px;
            height: 170px;
            background-size: cover;
            background-repeat: no-repeat;
            margin: -95px auto 0;
        }

        .demo-title {
            margin: 29px 0 12px;
            font-size:20px;
            font-family:SourceHanSansCN;
            font-weight:bold;
            line-height:20px;
            color:rgba(86,86,86,1);
            opacity:1;
        }

        .demo-text {
            width: 203px;
            margin: 18px auto 45px;
            font-size:14px;
            font-family:SourceHanSansCN, Campton;
            font-weight:400;
            line-height:20px;
            color:rgba(81,81,81,1);
        }

        .demo-intro {
          font-size:15px;
          font-family:SourceHanSansCN;
          font-weight:400;
          line-height:15px;
          color:rgba(119,119,119,1);
          opacity:1;
        }
      }
    }

    .demo-div2 {
      text-align: center;
      // width: 1200px;
      margin: 0 auto;

      .each-demo-div2 {
        width: 303px;
        display: inline-block;
        margin: 0 20px 31px;
        vertical-align: top;
        background:rgba(243,246,251,1);
        box-shadow:0px 3px 6px rgba(0,0,0,0.16);
        border-radius:15px;

        .demo-img {
            width: 120px;
            height: 92px;
            background-size: contain;
            background-repeat: no-repeat;
            margin: 36px auto 0;
            background-position: center;
        }

        .demo-title {
            margin: 15px 0 14px;
            font-size:20px;
            font-family:SourceHanSansCN;
            font-weight:bold;
            line-height:20px;
            color:rgba(67,91,92,1);
            opacity:1;
        }

        .demo-text {
            width: 229px;
            margin: 18px auto 45px;
            font-size:16px;
            font-family:SourceHanSansCN, Campton;
            font-weight:400;
            line-height:20px;
            color:rgba(41,41,41,1);
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
    background-color: #F3F6FB;

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
            color: #2aa7aa;
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
