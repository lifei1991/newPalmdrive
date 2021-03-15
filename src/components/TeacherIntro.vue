<template>
  <div class="teacher-intro">
    <!-- <remote-css rel="stylesheet" href="../assets/third/carousel/owl.theme.css"></remote-css>
    <remote-css rel="stylesheet" href="../assets/third/carousel/owl.carousel.css"></remote-css> -->

    <div v-if="!isMobile" class="web-div">
      <div class="banner1-div">
        <div class="banner1" :style="{backgroundImage:'url(' + banner1 + ')'}">
          <div class="text1">6000+ 世界名校毕业导师</div>
          <div class="text2">精准辅导 200+ 多个专业，专业标准化管理，半年度导师培训， 导师筛选通过率仅 33.6%</div>
        </div>
      </div>

      <div class="banner5-div">
        <div class="title">导师团队精选</div>
        <!-- <ul class="teacher-item-div" >
          <li v-for="(item, index) in teacherTypes" :key="item.name" v-html="item.name" @click="changeTeacherType(index)" v-bind:class="{ 'teacher-bg-colors' : index == currentType }"></li>
        </ul> -->
        <div class="teachers-div">
          <template v-for="(item, index) in selectedTeacher" >
            <div class="each-teacher" v-if="index < maxNumber" :key="index" @click="handleOpenDialog(item)">
              <div class="teacher-img" :style="{backgroundImage:'url(' + item.img + ')'}"></div>
              <div class="teacher-info-div">
                <div class="teacher-name">{{ item.name }}</div>
                <div class="teacher-school">{{ item.phdSchool ? item.phdSchool : item.school }}</div>
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

    <div v-if="isMobile" class="mobile-div">
      <div class="banner1-div">
        <div class="banner1" :style="{backgroundImage:'url(' + banner1 + ')'}">
        </div>
      </div>

      <div class="banner6-div">
        <div class="title">导师团队精选</div>
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

          <!-- <div class="more-teachers" @click="showMoreTeachers" v-if="maxNumber <= 8"> -->
          <div class="more-teachers" v-if="maxNumber <= 8" @click="showMoreTeacher">
            <div>
              查看更多导师
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
      selectedTeacher: [],
      dialogVisible: false,
      selectTeacher: {}
    }
  },
  created () {
    this.banner1 = this.isMobile ? require('../assets/img/teacherIntro/mobile/banner1.png') : require('../assets/img/teacherIntro/banner1.png')
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
    handleOpenDialog (item) {
      this.dialogVisible = true
      this.selectTeacher = item
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.teacher-intro {
  text-align: center;

  .web-div {
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

        .text1 {
          font-size: 26px;
          font-family: Biko, SourceHanSansCN;
          font-weight: bold;
          line-height: 30px;
          color: rgba(255,255,255,1);
          opacity: 1;
          width: 555px;
          padding-top: 210px;
        }

        .text2 {
          font-size: 20px;
          font-family: Biko, SourceHanSansCN;
          font-weight: bold;
          line-height: 30px;
          color: rgba(255,255,255,1);
          opacity: 1;
          width: 555px;
          padding-top: 5px;
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
  }

  .mobile-div {
    .banner1-div {
      width: 100%;
      padding: 1.066667rem 0 0;
      background-color: #1BBEB2;

      .banner1 {
        width: 8.88rem;
        height: 5.253333rem;
        margin: 0 auto;
        position: relative;
        text-align: left;
        background-repeat: no-repeat;
        background-size: cover;
      }
    }

    .banner6-div {
      padding: 1.04rem 0 0.8rem;
      background-color: #fff;

      .title {
        font-size:0.426667rem;
        font-family:SourceHanSansCN;
        font-weight:bold;
        line-height:24px;
        color:rgba(60,60,60,1);
        opacity:1;
        margin-bottom: 0.8rem;
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
