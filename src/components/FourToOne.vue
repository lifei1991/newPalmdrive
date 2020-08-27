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
          <div class="each-teacher" v-if="index < maxNumber" :key="item.img" @click="handleOpenDialog(item)">
            <div class="teacher-img" :style="{backgroundImage:'url(' + item.img + ')'}"></div>
            <div class="teacher-info-div">
              <div class="teacher-name">{{ item.name }}</div>
              <div class="teacher-school">{{ item.phdSchool ? item.phdSchool : item.school }}</div>
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

    <!-- <el-dialog
      :visible.sync="dialogVisible"
      width="1000px">
      <div class="teacher-detail-div">
        <div class="logo" :style="{backgroundImage:'url(' + teacherDetailLogo + ')'}"></div>
        <div class="logo-text">棕榈大道</div>

        <div class="teacher-div">
          <div class="teacher-img-div">
            <div class="teacher-img" :style="{backgroundImage:'url(' + selectTeacher.img + ')'}"></div>
            <div class="name">{{ selectTeacher.name }}</div>

            <div v-if="selectTeacher.foreignSchool">
              <div class="title">教育背景</div>
              <div class="school">{{ selectTeacher.foreignSchool }}</div>
            </div>

            <div v-if="selectTeacher.phdSchool">
              <div class="title">博士背景</div>
              <div class="school">{{ selectTeacher.phdSchool }}</div>
            </div>

            <div v-if="selectTeacher.school">
              <div class="title">研究生背景</div>
              <div class="school">{{ selectTeacher.school }}</div>
            </div>

            <div v-if="selectTeacher.baSchool != ''">
              <div class="title">本科背景</div>
              <div class="school">{{ selectTeacher.baSchool }}</div>
            </div>
          </div>
          <div class="teacher-info-div">
            <div>
              <span class="dot"></span>
              <span class="each-section">个人经历：</span>
              <div class="each-section-detail" v-html="selectTeacher.experience"></div>
            </div>

            <div v-if="selectTeacher.expertise != ''">
              <span class="dot"></span>
              <span class="each-section">擅长领域：</span>
              <div class="each-section-detail">{{ selectTeacher.expertise }}</div>
            </div>

            <div v-if="selectTeacher.demo != ''">
              <span class="dot"></span>
              <span class="each-section">辅导案例：</span>
              <div class="each-section-detail" v-html="selectTeacher.demo"></div>
            </div>
          </div>
        </div>
      </div>
    </el-dialog> -->
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
          {
            img: require('../assets/img/teachers/graduate/Hanyun.png'),
            name: 'Hanyun',
            school: '爱尔兰都柏林圣三一学院 金融风险管理专业',
            baSchool: '',
            experience: '本科在天普大学学习风险管理与保险专业，研究生就读于都柏林圣三一学院金融风险管理专业。本科在校时期获得美国公众风险控制联合组织（PRIMA）年度学生奖学金以及学校多项纪念奖学金。大三暑假以突出的学业成绩被推荐到纽约州萨拉托加市政府实习，积极参与风险研究，并成功构思起草新的风险登记表，并且被多个部门采用。<br/><br/> 本科毕业后 DIY 申请到成功申请到澳洲悉尼大学，德国慕尼黑大学，都柏林圣三一学院，最后选择进入圣三一学院学习金融风险管理知识，并将以一等荣誉毕业。',
            expertise: '城市规划，药学，工商管理',
            demo: '伦敦大学学院 药物发现与开发硕士<br/伦敦大学学院 能源与环境材料硕士<br/>蒙特雷国际研究学院 笔译，口译和语言教育硕士<br/>爱丁堡大学 城市规划与设计硕士<br/>伦敦国王学院 制药技术理学硕士<br/>伦敦国王学院 药物分析与质量管理理学硕士<br/>华威大学  行为经济理学硕士<br/>巴斯大学 口译与笔译硕士<br/>德国慕尼黑大学 工商管理硕士'
          },
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
          },
          {
            img: require('../assets/img/home/teachers/Z4.png'),
            name: 'Z 导师',
            phdSchool: '耶鲁大学，生物医学工程博士',
            school: '哥伦比亚大学，生物医学工程硕士',
            baSchool: '北京理工大学，生物医学工程',
            experience: '哥伦比亚大学骨生物工程实验室，研究生研究助理；耶鲁大学生物力学实验室，博士生。',
            expertise: '生物医学工程',
            demo: '哥伦比亚大学，生物医学工程博士<br/>康奈尔大学，生物医学工程硕士'
          },
          {
            img: require('../assets/img/home/teachers/C3.png'),
            name: 'C 导师',
            phdSchool: '',
            school: '密歇根大学安娜堡分校，化学工程硕士',
            baSchool: '华东理工大学，环境工程',
            experience: '华东理工大学学术部干事；2013-2014德国吕贝克应用技术大学自然科学系交换生；2012DAAD优秀留德学生奖学金获得者；现在Microsoft做软件工程',
            expertise: '计算机科学，化学工程，环境工程',
            demo: '芝加哥大学，计算机科学硕士<br/>乔治·华盛顿大学，计算机科学硕士<br/>匹兹堡大学，计算机科学硕士<br/>约翰霍普金斯大学，电子与计算机工程硕士<br/>马里兰大学帕克分校，电信硕士<br/>哥伦比亚大学，环境工程硕士<br/>伊利诺伊大学厄巴纳-香槟分校，土木与环境工程硕士<br/>香港科技大学，环境管理硕士'
          },
          {
            img: require('../assets/img/home/teachers/X.png'),
            name: 'X 导师',
            phdSchool: '加州大学洛杉矶分校，地球物理和空间物理博士',
            school: '',
            baSchool: '威斯康星大学麦迪逊分校，应用数学，工程和物理',
            experience: '高中创办科幻社，本科参加过物理社，天文社，帆船水上运动社团；参与加州大学洛杉矶理学院"ExploreYourUniverse"科普活动两届，威斯康辛大学"WonderofPhysics"科普活动全州巡演；热爱音乐创作，担任前卫金属乐队主唱，吉他手；加州大学洛杉矶分校模拟行星内部实验室(SPINlab),博士生',
            expertise: '物理，天体物理，行星物理，空间物理，地球物理',
            demo: '弗吉尼亚理工大学，航天工程博士'
          },
          {
            img: require('../assets/img/home/teachers/S.png'),
            name: 'S 导师',
            phdSchool: '麻省理工学院，物理学博士',
            school: '',
            baSchool: '康奈尔大学，工程物理',
            experience: '美国阿贡国家实验室LeeTeng加速器物理实习项目；大二的时候DIY申请本科转学进入康奈尔大学就读，并在两年后获得包括麻省理工学院和哈佛在内的12所学校的物理系博士项目offer；从事实验凝聚态物理研究。',
            expertise: '物理学',
            demo: '哈佛大学，物理学博士<br/>普林斯顿大学，物理学博士<br/>加州大学伯克利分校，物理学博士<br/>加州理工学院，物理学博士<br/>伊利诺伊大学厄巴纳-香槟分校，物理学博士<br/>加州大学圣塔芭芭拉分校，物理学博士<br/>密歇根大学安娜堡分校，物理学博士<br/>约翰霍普金斯大学，物理学博士<br/>加州大学圣迭戈分校，物理学博士<br/>马里兰大学帕克分校，物理学博士'
          },
          {
            img: require('../assets/img/home/teachers/Z5.png'),
            name: 'Z 导师',
            phdSchool: '',
            school: '哥伦比亚大学，数据分析硕士',
            baSchool: '上海大学，金融学',
            experience: '瑞银集团数据科学顾问；海通证券基金托管部；怡安翰威特咨询',
            expertise: '数据分析，金融学',
            demo: '加州大学圣迭戈分校，金融学硕士<br/>罗切斯特大学，金融学硕士<br/>布兰迪斯大学，金融学硕士'
          },
          {
            img: require('../assets/img/home/teachers/O2.png'),
            name: 'O 导师',
            phdSchool: '',
            school: '斯坦福大学，材料科学与工程硕士',
            baSchool: '中南大学，材料科学与工程',
            experience: '微芯科技，工程师',
            expertise: '材料科学与工程，能源材料',
            demo: '波士顿大学，材料科学硕士<br/>卡内基梅隆大学，材料科学硕士<br/>华盛顿大学圣路易斯分校，材料科学与工程硕士<br/>罗切斯特大学，材料科学硕士<br/>哥伦比亚大学，材料科学与工程硕士<br/>华盛顿大学，材料科学与工程应用硕士'
          },
          {
            img: require('../assets/img/home/teachers/Q.png'),
            name: 'Q 导师',
            phdSchool: '',
            school: '西北大学，传播学硕士',
            baSchool: '密歇根州立大学，传播学吉林艺术学院，广播主持专业',
            experience: '目前就职于世界最大广告集团WPP旗下子公司Wavemaker芝加哥分部任高级付费搜索咨询师,曾任美国西北大学国际学生办公室咨询委员会首批成员，密歇根州立大学国际学生学者办公室秘书、密歇根州立大学传播学院学生助理',
            expertise: '整合营销传播，传播学，市场学',
            demo: '西北大学，整合营销传播硕士<br/>南加州大学，传播学硕士<br/>纽约大学，传播学硕士'
          },
          {
            img: require('../assets/img/home/teachers/S2.png'),
            name: 'S 导师',
            phdSchool: '',
            school: '加州大学伯克利分校，运筹学硕士',
            baSchool: '普渡大学，工业工程',
            experience: '八年美国生活学习工作经验，深刻了解全美不同地区的人文社交；独立完成高中，本科，研究生申请，细致研究各个学校项目，并对申请关键有独到的见解；能根据各个学生的特点与强项对学校项目进行合理的选择推荐，提高申请效率和成功率；美国工作求职经验丰富，能针对性地对工作简历进行修改，并对面试准备提供完善的建议与策划。现就职于旧金山科技公司Stitcher,职位为大数据工程师',
            expertise: '工业工程，运筹学，数据分析，数据科学',
            demo: '罗格斯大学，量化金融硕士<br/>华盛顿大学圣路易斯分校，金融学硕士（量化金融）<br/>迈阿密大学，金融数学硕士<br/>马里兰大学帕克分校，量化金融硕士<br/>哥伦比亚大学，统计学硕士'
          },
          {
            img: require('../assets/img/home/teachers/R.png'),
            name: 'R 导师',
            phdSchool: '艾默里大学，生物统计博士',
            school: '',
            baSchool: '中国人民大学，统计学',
            experience: '加州大学戴维斯分校统计系研究助理',
            expertise: '生物统计，统计学',
            demo: '耶鲁大学，统计学硕士<br/>约翰霍普金斯大学，生物统计学硕士<br/>密歇根安娜堡大学，统计学硕士<br/>乔治华盛顿大学，统计学博士<br/>罗格斯大学，统计学博士'
          },
          {
            img: require('../assets/img/home/teachers/W2.png'),
            name: 'W 导师',
            phdSchool: '',
            school: '圣母大学，会计学硕士',
            baSchool: '阿拉巴马大学塔斯卡卢分校，会计学',
            experience: '任职于普华永道（休斯顿办公室）',
            expertise: '会计学',
            demo: '德克萨斯大学达拉斯分校，会计学硕士<br/>明尼苏达双城大学，金融学硕士<br/>罗切斯特大学，会计学硕士<br/>维克森林大学，会计学硕士<br/>南加州大学，会计学硕士<br/>波士顿学院，会计学硕士<br/>伊利诺伊大学香槟分校，会计学硕士<br/>威廉玛丽大学，会计学硕士<br/>圣母大学，会计学硕士<br/>密歇根安娜堡大学，会计学硕士'
          },
          {
            img: require('../assets/img/home/teachers/W3.png'),
            name: 'W 导师',
            phdSchool: '',
            school: '麻省理工学院，金融硕士',
            baSchool: '清华大学，数学/金融',
            experience: '曾在花旗集团，DDEX，美国先锋集团，光大证券工作及实习，拥有丰富的面试及量化研究交易工作经验',
            expertise: '金融，金融工程，金融数学',
            demo: '卡内基梅隆大学，金融工程硕士<br/>纽约大学，金融工程硕士<br/>芝加哥大学，金融工程硕士<br/>康奈尔大学，金融工程硕士'
          },
          {
            img: require('../assets/img/home/teachers/O.png'),
            name: 'O 导师',
            phdSchool: '',
            school: '南加州大学，数据分析硕士',
            baSchool: '广东外语外贸大学，国际商务与贸易',
            experience: '广州安永气候变化与可持续发展部门实习生；现任职欧特克做数据分析师',
            expertise: '数据分析，会计',
            demo: '康奈尔大学，管理学硕士（会计学分支）<br/>伊利诺伊大学香槟分校，会计学硕士<br/>圣母大学，会计学硕士<br/>迈阿密大学，会计学硕士<br/>布兰迪斯大学，会计学硕士<br/>密歇根安娜堡大学，会计学硕士'
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
            school: '有的人面对压力时会失控，而有的人却会茁壮成长',
            baSchool: '',
            experience: '',
            expertise: '',
            demo: ''
          },
          {
            img: require('../assets/img/teachers/master/Wenhui.png'),
            name: 'Wenhui',
            school: ' 好风凭借力，送尔上青云',
            baSchool: '',
            experience: '',
            expertise: '',
            demo: ''
          },
          {
            img: require('../assets/img/teachers/master/Jie.png'),
            name: 'Jie',
            school: '教育的目的是增进知识和传播真理',
            baSchool: '',
            experience: '',
            expertise: '',
            demo: ''
          },
          {
            img: require('../assets/img/teachers/master/Icy.png'),
            name: 'Icy',
            school: '一起经历申请季的酸甜，也一起收获美好的offer吧',
            baSchool: '',
            experience: '',
            expertise: '',
            demo: ''
          },
          {
            img: require('../assets/img/teachers/master/Xiaoxue.png'),
            name: 'Xiaoxue',
            school: '每棵希望的种子都会发芽，每颗善良的心灵都会开花',
            baSchool: '',
            experience: '',
            expertise: '',
            demo: ''
          },
          {
            img: require('../assets/img/teachers/master/Pengcheng.png'),
            name: 'Pengcheng',
            school: '申请之路上，愿我们的陪伴助你披荆斩棘',
            baSchool: '',
            experience: '',
            expertise: '',
            demo: ''
          },
          {
            img: require('../assets/img/teachers/master/Qiaoling.png'),
            name: 'Qiaoling',
            school: '不管过程有多艰辛，都要朝着梦想坚持到底',
            baSchool: '',
            experience: '',
            expertise: '',
            demo: ''
          },
          {
            img: require('../assets/img/teachers/master/Echo.png'),
            name: 'Echo',
            school: '博观而约取,厚积而薄发',
            baSchool: '',
            experience: '',
            expertise: '',
            demo: ''
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
          name: '同专业导师',
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
      selectedTeacher: [],
      dialogVisible: false,
      teacherDetailLogo: '',
      selectTeacher: {
        img: require('../assets/img/teachers/foreigners/RachelCrovello.png'),
        name: 'Rachel Crovello',
        school: '斯坦福大学 语言学及翻译专业',
        baSchool: '',
        experience: '',
        expertise: '',
        demo: ''
      }
    }
  },
  created () {
    this.banner1 = require('../assets/img/fourToOne/banner1.png')
    this.teacherDetailLogo = require('../assets/img/logo.png')
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
      this.dialogVisible = false
    },
    goToDetail (content) {
      let routeUrl = this.$router.resolve({
        path: '/news',
        query: {
          content: content
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
      width: 805px;
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
