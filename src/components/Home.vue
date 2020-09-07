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
      <div class="title2">6000+ 世界名校毕业生导师，涵盖200+专业</div>
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
          <a href="http://www.palmdrive.cn/v2/graduate.html#/offers" target="_blank">
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

    <div class="banner12-div">
      <div class="carousel-div">
        <div class="each-product" v-for="(item, index) in products" :key="index" @click="showProductDetail(index)">
          <div class="product-img" :style="{backgroundImage:'url(' + item.img + ')'}"></div>
          <div class="product-top-div" :style="{background: item.color}">
            <div>{{item.title}}</div>
          </div>
          <div class="product-bottom-div">
            <div v-for="(item, index) in item.text" :key="index">{{item}}</div>
          </div>
          <div v-show="(currentShowDot == index) && showDetailDiv" class="dot" :style="{background: item.color}"></div>
        </div>
      </div>
    </div>

    <transition name="slide-fade">
      <div class="banner13-div" v-if="showDetailDiv" :style="{backgroundImage:'url(' + banner13 + ')'}">
        <div class="detail-div">
          <div class="each-program-detail" v-for="(item, index) in selectProductDetail" :key="index" :style="{'width':(currentShowDot == 1 ? '148px':'225px'), 'margin': (currentShowDot == 0 ? '0 55px':'0 26px')}" >
            <div class="detail-index">{{ item.index }}</div>
            <div class="detail-title">{{ item.title }}</div>
            <div class="detail-text" v-for="(one, index) in item.text" :key="index">{{ one }}</div>
          </div>
        </div>
      </div>
    </transition>

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
      <div class="title">导师团队精选</div>
      <div class="teachers-div">
        <template v-for="(item, index) in teachers" >
          <div class="each-teacher" v-if="index < maxNumber" :key="item.school" @click="handleOpenDialog(item)">
            <div class="teacher-img" :style="{backgroundImage:'url(' + item.img + ')'}"></div>
            <div class="teacher-info-div">
              <div class="teacher-name">{{ item.name }}</div>
              <div class="teacher-school">{{ item.phdSchool ? item.phdSchool : item.school }}</div>
            </div>
          </div>
        </template>

        <!-- <div class="more-teachers" @click="showMoreTeachers" v-if="maxNumber <= 8"> -->
        <div class="more-teachers" v-if="maxNumber <= 8">
          <div>
            <a href="http://www.palmdrive.cn/v2/graduate.html#/teachers" target="_blank">
              查看更多导师<img src="../assets/img/home/more.png" class="more-img" />
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="banner7-div">
      <div class="title">辅导项目</div>
      <div>
        <a :href="item.url" target="_blank" v-for="item in programs" :key="item.img">
          <div class="each-program"  :style="{backgroundImage:'url(' + item.img + ')'}"></div>
        </a>
      </div>
    </div>

    <!-- <div class="banner8-div">
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
    </div> -->

    <div class="banner8-2-div">
      <div class="title">近期活动</div>
      <div class="title2">右下角扫码关注公众号，及时获得活动信息。</div>
      <div class="activity-div">
        <div v-show="index < activityShowNumber" v-for="(item, index) in activities2" :key="item.img" class="each-program"  :style="{backgroundImage:'url(' + item.img + ')'}" @click="handleOpenActivityDialog(index)"></div>

        <div class="more-activity" v-if="activityShowNumber <= 3">
          <div>
            <div @click="activityShowNumber = 100">
              查看更多讲座<img src="../assets/img/home/more.png" class="more-img" />
            </div>
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

    <teacher-dialog :dialogVisible="dialogVisible" :selectTeacher="selectTeacher" @childEvent="dialogVisible = $event"></teacher-dialog>

    <div class="acticityInfoDialog">
      <el-dialog
        customClass="customDialog"
        :visible.sync="dialogActivity"
        width="892px">
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
              <img src="../assets/img/home/activity/activity-code.png" class="more-img" width="132px"/>
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
          number: '5000+'
        },
        {
          logo: require('../assets/img/home/number/number2.png'),
          title: '硕博Top100 offer',
          number: '10000+'
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
          text: '6000+ 世界名校毕业生导师，精准辅导200+多个专业， 专业标准化管理，半年度导师培训'
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
        },
        {
          img: require('../assets/img/home/teachers/C2.png'),
          name: 'C 导师',
          phdSchool: '',
          school: '卡耐基梅隆大学，电子工程硕士',
          baSchool: '电子科技大学，通信工程',
          experience: '转专业+转学拿到卡耐基梅隆大学和加州大学圣迭戈分校计算机专业的录取，有丰富的低GT选校经验。曾在阿里巴巴，腾讯，豌豆荚实习，现在Facebook做软件工程师',
          expertise: '计算机科学，电子工程',
          demo: '卡耐基梅隆大学，信息技术硕士<br/>卡耐基梅隆大学，信息网络硕士<br/>南加州大学，计算机科学硕士<br/>德克萨斯大学达拉斯分校，计算机科学硕士<br/>纽约大学，计算机科学硕士'
        },
        {
          img: require('../assets/img/home/teachers/Y2.png'),
          name: 'Y 导师',
          phdSchool: '',
          school: '范德堡大学，电子工程硕士',
          baSchool: '上海交通大学，电子工程',
          experience: '喜爱体育，篮球国家二级运动员，足球乒乓球大学院队成员。曾热衷于电竞，上海大学生dota2比赛冠军队队长，后金盆洗手，出国读研，努力挣钱。学着并不是最火的电子工程专业，拿到了带薪实习，并且在毕业前就拿到了多个全职工作offer。研究生期间，担任中国学生会主席，组织大小型活动十多场。热爱旅游，游遍美西美东加勒比。现在亚特兰大的ReedElsevier做软件工程师，希望能把自己的经验与学弟学妹分享！',
          expertise: '电子工程，计算机科学，管理信息系统',
          demo: '德克萨斯大学达拉斯分校，电子工程硕士<br/>华盛顿大学，信息科学硕士<br/>亚利桑那州立大学，电子工程博士<br/>加州大学河滨分校，电子工程硕士<br/>南加州大学，计算机科学硕士<br/>范德堡大学，电子工程硕士<br/>纽约大学，电子工程硕士<br/>罗彻斯特大学，电子与计算机工程硕士<br/>佛罗里达大学，电子工程硕士<br/>瑞尔森大学，应用数学硕士<br/>加州大学伯克利分校，工业工程与运筹学硕士'
        },
        {
          img: require('../assets/img/home/teachers/D.png'),
          name: 'D 导师',
          phdSchool: '',
          school: '多伦多大学，航空工程',
          baSchool: '北京航空航天大学，飞行器动力工程，辅修应用数学',
          experience: '从飞机发动机这种传统的机械行业，转到目前最火的人工智能与机器人结合的方向，可以说我的经历是大部分目前机械相关专业学生申请的期望轨迹',
          expertise: '航空工程，机器人',
          demo: '苏黎世联邦理工学院，机器人系统与控制硕士<br/>伊利诺伊大学厄巴纳-香槟分校，航空工程硕士<br/>瑞典皇家理工学院，可再生能源硕士<br/>香港大学，能源工程硕士<br/>曼彻斯特大学，可再生能源与清洁技术硕士<br/>丹麦科技大学，可持续能源硕士'
        },
        {
          img: require('../assets/img/home/teachers/L2.png'),
          name: 'L 导师',
          phdSchool: '',
          school: '哥伦比亚大学，电子工程硕士',
          baSchool: '南京大学，电子工程',
          experience: '曾为南京大学校合唱团和舞蹈团成员。现在Uber做软件工程师',
          expertise: '电子工程，电子与计算机工程',
          demo: '卡耐基梅隆大学，电子与计算机工程硕士<br/>康奈尔大学，电子与计算机工程硕士<br/>宾夕法尼亚大学，电子工程硕士<br/>西北大学，电子工程硕士<br/>莱斯大学，电子工程硕士<br/>威斯康星大学麦迪逊分校，电子工程硕士<br/>南加州大学，电子工程硕士<br/>约翰霍普金斯大学，电子工程硕士<br/>纽约大学，电子工程硕士<br/>杜克大学，电子与计算机工程硕士<br/>范德堡大学，电子工程硕士<br/>英属哥伦比亚大学，电子工程硕士<br/>曼彻斯特大学，通信和信号处理硕士<br/>帝国理工大学，通信和信号处理硕士<br/>俄亥俄州立大学，电子与计算机工程硕士'
        }
      ],
      products: [
        {
          img: require('../assets/img/home/product/product1.png'),
          title: '专 业',
          text: ['全程专业的细致辅导', '强大全面的数据库', '真诚负责的辅导态度'],
          color: '#3980D3'
        },
        {
          img: require('../assets/img/home/product/product2.png'),
          title: '透 明',
          text: ['费用透明   合同透明', '师资透明   流程透明', '数据透明'],
          color: '#A9C669'
        },
        {
          img: require('../assets/img/home/product/product3.png'),
          title: '全心为你',
          text: ['订制化留学套餐', '及时的反馈机制', '一站式留学辅导平台', '干货分享-信诚则立'],
          color: '#23D0C9'
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
        },
        {
          img: require('../assets/img/home/activity/activity2-9.png')
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
      productsDetail: [
        [
          {
            index: '01',
            title: '全程专业的细致辅导',
            text: ['从选校定位，申请规划，实习科研，交流交换，再到最后的文书和网申，棕榈通过海量成功经验为你总结出最优道路', '文书精细打磨：导师团队，督导及外教层层把关', '棕榈内部每年针对辅导团队进行严格考核培训，确保高辅导质量']
          },
          {
            index: '02',
            title: '强大全面的数据库',
            text: ['案例库：追踪每位学生标化、经历和录取，海量数据辅助精准定位', '导师库：涵盖导师学历、录取院校、就业等海量数据', '选校库：助力硕博定位', '文书素材挖掘器：启发写作思路', '文书宝库：过来人授权公开的文书样例', '申请进度管理器：提升申请效率', '背景提升资源库：常规申请和内推实习科研资源查找', '专业手册：各专业项目深度介绍']
          },
          {
            index: '03',
            title: '真诚负责的辅导态度',
            text: ['棕榈的导师经过严格的培训，会在与学生沟通的过程中做到及时高效、真诚可靠', '棕榈承诺所有申请信息完全透明', '棕榈承诺做到平等对待每一位同学，个性化辅导']
          }
        ],
        [
          {
            index: '01',
            title: '费用透明',
            text: ['清楚地告诉消费者每一笔钱的去向，不花冤枉钱', '成本结构透明，确保导师团队劳有所获', '产品费用透明，后期无隐形费用加收']
          },
          {
            index: '02',
            title: '合同透明',
            text: ['申请结果不达标立即退费，无霸王条款', '尊重甲方权益，不强制保校', '严格履行乙方义务，悉数履行合同承诺', '辅导分阶段，退费比例合理清晰']
          },
          {
            index: '03',
            title: '师资透明',
            text: ['所有全职主导师和专业导师的各项资质均可追溯，包括学历背景、工作经验、申请战绩等']
          },
          {
            index: '04',
            title: '流程透明',
            text: ['申请信息绝对共享，无任何暗箱操作，申请进度随时可查看', '申请过程确保学员参与度，不做留学小白', '申请院校自主透明选择，所申即所想']
          },
          {
            index: '05',
            title: '数据透明',
            text: ['棕榈承诺将后台数据库前台化，案例库中所有案例均保证真实可追溯', '不删网络差评，保留公开反馈通道，保证正面回应问题']
          }
        ],
        [
          {
            index: '01',
            title: '订制化留学套餐',
            text: ['业内首创四位一体模式，根据每位同学的实际需求制定留学套餐，每一分钱都花在能实际提升录取概率的服务上', '棕榈承诺前期咨询师提供的承诺和后期服务一致', '申请季服务时间和文书修改次数均不设上限，全方位保障学生申请质量']
          },
          {
            index: '02',
            title: '及时的反馈机制',
            text: ['完善的监督和反馈体系。导师24小时内回复，不会无故失联超过 3 天。同学对服务团队中的任何人或者服务产生不满，可以随时向第三方（树洞君）进行反馈。督导团队会第一时间解决问题并给出客户满意的解决方案。']
          },
          {
            index: '03',
            title: '一站式留学辅导平台',
            text: ['核桃英语高质量语言线上班课，留学语培一把抓', '棕榈学院 Project Based Learning 课程，学术公开课，科研论文辅导，为提升研究背景铺路', '专职背景提升部门，开发高性价比实习科研项目，建立高质量内推合作安置，助力解决背景提升资源难题', '种子计划—业内首创专职种子导师团队辅导大一到大三非当季同学，融合以上所有资源，一站式解决留学所有问题']
          },
          {
            index: '04',
            title: '干货分享-信诚则立',
            text: ['棕榈大道生产超过 5000+ 篇微信、知乎留学干货文章', '线上线下讲座超过1200场', '活动参与人数累积超过30000人次', '生产 110 万+字绝密资料，超过 100 万人领取', '通过棕榈干货输出，打破行业信息不对称，每年直接或间接助力 20 万人申请']
          }
        ]
      ],
      programs: [
        {
          img: require('../assets/img/home/programs/program1.png'),
          url: 'http://www.palmdrive.cn/v2/graduate.html#/dream'
        },
        {
          img: require('../assets/img/home/programs/program2.png'),
          url: 'http://www.palmdrive.cn/v2/graduate.html#/seed'
        },
        {
          img: require('../assets/img/home/programs/program3.png'),
          url: 'http://www.palmdrive.cn/v2/graduate.html#/ability'
        }
      ],
      activityThemes: [
        [
          {
            img: require('../assets/img/home/activity/theme-logo1.png'),
            title: '活动主题',
            title2: '法学专业讲座'
          },
          {
            img: require('../assets/img/home/activity/theme-logo2.png'),
            title: '报名时间',
            title2: '9月1日'
          },
          {
            img: require('../assets/img/home/activity/theme-logo3.png'),
            title: '针对人群',
            title2: '申请法学的学生'
          },
          {
            img: require('../assets/img/home/activity/theme-logo4.png'),
            title: '活动形式',
            title2: '线上讲座+答疑'
          },
          {
            img: require('../assets/img/home/activity/theme-logo5.png'),
            title: '活动简介',
            title2: '邀请拥有英美硕士、藤校博士经历的导师来讲述法学的纵横申请对比，包括法学学位科普、英美与其他小众国家法学项目科普、出国读硕士的动机和优势分析、未来职业规划的内容。'
          }
        ],
        [
          {
            img: require('../assets/img/home/activity/theme-logo1.png'),
            title: '活动主题',
            title2: '背景提升配对馆'
          },
          {
            img: require('../assets/img/home/activity/theme-logo2.png'),
            title: '报名时间',
            title2: '9月2日'
          },
          {
            img: require('../assets/img/home/activity/theme-logo3.png'),
            title: '针对人群',
            title2: '大一至大三（非申请季）、有留学意向的学生'
          },
          {
            img: require('../assets/img/home/activity/theme-logo4.png'),
            title: '活动形式',
            title2: '门诊 + 背景提升资料礼包'
          },
          {
            img: require('../assets/img/home/activity/theme-logo5.png'),
            title: '活动简介',
            title2: '本次活动为同学匹配对应的文、商、理工的导师，与同学进行在线的一对一咨询，针对每位同学关于背景提升的疑问给出相应的解答及对应的建议。咨询结束后，同学们将获得棕榈精心准备的留学背提大礼包。'
          }
        ],
        [
          {
            img: require('../assets/img/home/activity/theme-logo1.png'),
            title: '活动主题',
            title2: '商科申请规划'
          },
          {
            img: require('../assets/img/home/activity/theme-logo2.png'),
            title: '报名时间',
            title2: '9月6日'
          },
          {
            img: require('../assets/img/home/activity/theme-logo3.png'),
            title: '针对人群',
            title2: '申请商科的学生'
          },
          {
            img: require('../assets/img/home/activity/theme-logo4.png'),
            title: '活动形式',
            title2: '留学规划手册（PDF）'
          },
          {
            img: require('../assets/img/home/activity/theme-logo5.png'),
            title: '活动简介',
            title2: '本次活动会针对每位学生的背景以及之后的申请方向针对性制作规划表 。大一至大三的学生主要以留学申请规划的建议以及学校推荐的留学规划手册，针对大四即将申请的同学主要是给申请季的准备建议以及学校推荐。'
          }
        ],
        [
          {
            img: require('../assets/img/home/activity/theme-logo1.png'),
            title: '活动主题',
            title2: '转专业避雷讲座'
          },
          {
            img: require('../assets/img/home/activity/theme-logo2.png'),
            title: '报名时间',
            title2: '9月7日'
          },
          {
            img: require('../assets/img/home/activity/theme-logo3.png'),
            title: '针对人群',
            title2: '大三想要转专业的学生和大四转专业申请的学生'
          },
          {
            img: require('../assets/img/home/activity/theme-logo4.png'),
            title: '活动形式',
            title2: '线上讲座+答疑'
          },
          {
            img: require('../assets/img/home/activity/theme-logo5.png'),
            title: '活动简介',
            title2: '针对大三转专业同学给出：常见转专业策略、转专业背景提升策略、申请季转专业申请流程和技巧、转专业的常见误区和雷区'
          }
        ],
        [
          {
            img: require('../assets/img/home/activity/theme-logo1.png'),
            title: '活动主题',
            title2: '大学规划锦囊'
          },
          {
            img: require('../assets/img/home/activity/theme-logo2.png'),
            title: '报名时间',
            title2: '9月8日'
          },
          {
            img: require('../assets/img/home/activity/theme-logo3.png'),
            title: '针对人群',
            title2: '大一至大三（非申请季）、有留学意向的学生'
          },
          {
            img: require('../assets/img/home/activity/theme-logo4.png'),
            title: '活动形式',
            title2: '线上讲座 + 规划报告福利（限量）'
          },
          {
            img: require('../assets/img/home/activity/theme-logo5.png'),
            title: '活动简介',
            title2: '在新学期开始之初，邀请经验丰富的导师为同学们带来大学各阶段的规划建议。按照时间线划分，锁定大一至大四的重点提升规划，包括找实习、做科研的时间节点、先修课的补充等。除此之外，大牛导师还将分享个人的大学规划经历，以供学生借鉴参考。'
          }
        ],
        [
          {
            img: require('../assets/img/home/activity/theme-logo1.png'),
            title: '活动主题',
            title2: '小文书讲座'
          },
          {
            img: require('../assets/img/home/activity/theme-logo2.png'),
            title: '报名时间',
            title2: '9月15日'
          },
          {
            img: require('../assets/img/home/activity/theme-logo3.png'),
            title: '针对人群',
            title2: '申请专业需要写小文书的同学'
          },
          {
            img: require('../assets/img/home/activity/theme-logo4.png'),
            title: '活动形式',
            title2: '线上讲座+答疑+一对一门诊'
          },
          {
            img: require('../assets/img/home/activity/theme-logo5.png'),
            title: '活动简介',
            title2: '讲座思路从RP和phs外，文理工商，突出要写小文书的有哪些项目case?小文书的重要性，学校设置小文书的目的，小文书的类型，什么样的小文书是优秀的？如何写好小文书？'
          }
        ],
        [
          {
            img: require('../assets/img/home/activity/theme-logo1.png'),
            title: '活动主题',
            title2: 'Dream school Pass Card'
          },
          {
            img: require('../assets/img/home/activity/theme-logo2.png'),
            title: '报名时间',
            title2: '9月17日'
          },
          {
            img: require('../assets/img/home/activity/theme-logo3.png'),
            title: '针对人群',
            title2: '当季申请者，正在筹备PS的同学'
          },
          {
            img: require('../assets/img/home/activity/theme-logo4.png'),
            title: '活动形式',
            title2: '（290元）获取45分钟导师一对一咨询+文书大礼包'
          },
          {
            img: require('../assets/img/home/activity/theme-logo5.png'),
            title: '活动简介',
            title2: '活动针对同学目前的文书写作进度，匹配文书写作水准超高的专业导师，给到同学一对一指导，教同学写出好文书。给同学专业度高、干货性强、拒绝模板套路的文书辅导体验。注意，还有超值福利大礼包回馈哦！'
          }
        ],
        [
          {
            img: require('../assets/img/home/activity/theme-logo1.png'),
            title: '活动主题',
            title2: '传媒大神养成计划'
          },
          {
            img: require('../assets/img/home/activity/theme-logo2.png'),
            title: '报名时间',
            title2: '9月22日'
          },
          {
            img: require('../assets/img/home/activity/theme-logo3.png'),
            title: '针对人群',
            title2: '意向申请传媒类专业的同学'
          },
          {
            img: require('../assets/img/home/activity/theme-logo4.png'),
            title: '活动形式',
            title2: '线上讲座'
          },
          {
            img: require('../assets/img/home/activity/theme-logo5.png'),
            title: '活动简介',
            title2: '本次活动将邀请兼具传媒申请与就业经验的导师，结合个人的申请经历与就读院校的资源讲解，与大家分享传媒申请的核心知识，涵盖：具体项目分析、背景提升路径、选校定位指南等内容。'
          }
        ],
        [
          {
            img: require('../assets/img/home/activity/theme-logo1.png'),
            title: '活动主题',
            title2: '大学课外活动主题讲座'
          },
          {
            img: require('../assets/img/home/activity/theme-logo2.png'),
            title: '报名时间',
            title2: '9月24日'
          },
          {
            img: require('../assets/img/home/activity/theme-logo3.png'),
            title: '针对人群',
            title2: '开学大二大三、有留学背景提升要求的同学'
          },
          {
            img: require('../assets/img/home/activity/theme-logo4.png'),
            title: '活动形式',
            title2: '线上讲座'
          },
          {
            img: require('../assets/img/home/activity/theme-logo5.png'),
            title: '活动简介',
            title2: '针对开学大二大三准备留学的人群，解答如何在未来的一道两年安排好软背景提升。比如：不同课外活动对申请的帮助？不同时间段应该如何安排课外活动？不同专业应当如何取舍课外活动？'
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
      dialogActivity: false,
      selectedActivityTheme: []
    }
  },
  created () {
    // this.$nextTick(() => {
    // }
    // )

    this.banner1 = require('../assets/img/home/banner1.png')
    this.banner13 = require('../assets/img/home/banner13.png')
    this.selectProductDetail = this.productsDetail[0]
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

  .banner8-2-div {
    padding: 70px 0 87px;
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
      font-size:18px;
      font-family:PingFang SC;
      font-weight:400;
      line-height:18px;
      color:rgba(85,85,85,1);
      opacity:1;
      margin: 12px 0 61px;
    }

    .activity-div {
      width: 880px;
      margin: 0 auto;

      .each-program {
        width:249px;
        height:129px;
        // box-shadow: 0px 5px 6px rgba(189,189,189,1);
        // border-radius: 15px;
        opacity:1;
        display: inline-block;
        margin: 0 21px 54px;
        background-repeat: no-repeat;
        background-size: cover;
      }
    }

    .more-activity {
        font-size:15px;
        font-family:PingFang SC;
        font-weight:500;
        line-height:15px;
        color:rgba(57,60,61,1);
        opacity:1;
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

  .banner12-div {
    padding: 58px 0 42px;
    background-color: #EFF3F4;
    text-align: center;
    font-size: 30px;
    // display: none;

    .carousel-div {
      // width: 1200px;
      margin: 0 auto;
      text-align: center;
      display: inline-block;

      .each-product {
        width: 296px;
        // height: 283px;
        display: inline-block;
        margin: 0 35px;
        cursor: pointer;
        vertical-align: top;

        .product-img {
          width: 130px;
          height:130px;
          background-repeat: no-repeat;
          background-size: cover;
          // box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.07);
          border-radius: 50%;
          margin: 0 auto;
          position: relative;
          // background-color: #fff;
          z-index: 10;
        }

        .product-top-div {
          width:100%;
          height:53px;
          background:rgba(57,128,211,1);
          box-shadow:6px 6px 12px rgba(0,0,0,0.16);
          opacity:1;
          border-radius:15px;
          margin-top: -67px;
          position: relative;

          font-size:24px;
          font-family:SourceHanSansCN;
          font-weight:bold;
          line-height:41px;
          color:rgba(255,255,255,1);
          opacity:1;
          padding-top: 65px;
        }

        .product-bottom-div {
          width:100%;
          height:133px;
          background:#fff;
          box-shadow:6px 6px 12px rgba(0,0,0,0.16);
          opacity:1;
          border-radius:15px;
          margin-top: -67px;
          margin-top: -30px;
          text-align: center;

          font-size:18px;
          font-family:SourceHanSansCN;
          font-weight:500;
          line-height:24px;
          color:rgba(75,75,75,1);
          opacity:1;
          padding-top: 70px;
        }

        .dot {
          width:42px;
          height:11px;
          opacity:1;
          border-radius:6px;
          margin: 44px auto 0px;
        }
      }
    }
  }

  .banner13-div {
    padding: 113px 0 45px;
    background-color: #E3F3F3;
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
          font-size:52px;
          font-family:Biko;
          font-weight:bold;
          line-height:62px;
          color:rgba(255,255,255,1);
          opacity:1;
        }

        .detail-title {
          font-size:24px;
          font-family:SourceHanSansCN;
          font-weight:800;
          line-height:41px;
          color:rgba(255,255,255,1);
          opacity:1;
          margin: 11px 0 26px;
        }

        .detail-text {
          font-size:16px;
          font-family:SourceHanSansCN;
          font-weight:500;
          line-height:24px;
          color:#fff;
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
            font-size:18px;
            font-family:SourceHanSansCN;
            font-weight:bold;
            color: #25C2B5;
            margin-left: 5px;
            vertical-align: super;
          }

          .title2 {
            font-size:14px;
            font-family:SourceHanSansCN;
            font-weight:500;
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
            background: #25C2B5;
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

<style>
  .customDialog {
    border-radius: 14px !important;
    width: 1000px;
  }
</style>
