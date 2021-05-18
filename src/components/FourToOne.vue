<template>
  <div class="four-to-one">
    <!-- <remote-css rel="stylesheet" href="../assets/third/carousel/owl.theme.css"></remote-css>
    <remote-css rel="stylesheet" href="../assets/third/carousel/owl.carousel.css"></remote-css> -->

    <div v-if="!isMobile" class="web-div">
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
    </div>

    <div v-if="isMobile" class="mobile-div">
      <div class="banner1-div">
        <div class="banner1" :style="{backgroundImage:'url(' + banner1 + ')'}">
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
      teachers: [
        [
          {
            img: require('../assets/img/teachers/graduate/Evelyn.png'),
            name: 'Evelyn',
            school: '曼彻斯特大学 供应链管理硕士',
            baSchool: '',
            experience: '本科在对外经济贸易大学修读物流管理与金融双学位，对进出口贸易的物流支持及绿色供应链领域有比较深入的研究。大四下学期，全DIY成功申请英国知名院校多个供应链相关硕士项目。研究生就读于曼彻斯特大学商学院，主要研究方向为绿色供应链及运输路径规划。就读期间为曾两位教授担任助教，曾于曼彻斯特大学语言中心协助语言班学生完成academic writing培训，有海外Manchester Airport Group供应链管理岗实习。<br/>毕业后于顺丰速运集团总部就职数年，从事运筹规划相关工作。在一次对外合作项目中意识到跨文化交际日益频繁，各行业对海外背景人才需求非常广泛，由此决定加入棕榈、主要辅导商科学生。曾经的助教经历让她游刃有余、和不同背景性格的学生相处融洽，出色的写作能力帮助棕榈学生完成有信服力且富有个人特质的文书，丰富的实习和行业工作经验也帮助棕榈学生更好的开展背景提升和求职规划。',
            expertise: '选择出国留学，在一个全新的环境中开拓视野，深耕专业对每位同学来说都是意义重大的一步，需要审慎的考虑与专业的支持。对我来说，主导师能够提供的不只是技术层面的辅导，也是心理层面的支持。我希望陪伴同学们在申请过程中不断发现自身的闪光点，不断挖掘未来职业道路的可能性，一步一个脚印地向梦想的彼岸迈进。',
            demo: ''
          },
          {
            img: require('../assets/img/teachers/graduate/Ruoyi.png'),
            name: 'Ruoyi',
            school: '波士顿大学 电视制作硕士',
            baSchool: '',
            experience: '本科就读于四川外国语大学国际关系学院，对跨文化交流的热情使她产生了用影像表现文化诉求的愿望。自学剧本创作并跨专业DIY申请影视硕士专业，收获包括雪城大学，俄亥俄州立等数枚带奖offer。毕业后在美国洛杉矶从事影视工作近四年。工作内容涵盖好莱坞原创剧本开发和影视后期制作统筹，服务客户包括六大Studios，美国主流电视网络和流媒体平台（CBS, Netflix, Amazon Studio），日本及欧洲影视公司等。担任国内多条出海广告片制片人及国际客户经理。前期为棕榈大道艺术作品集专业导师，全职加入棕榈大家庭后担任申请季主导师，拥有丰富的行业经验，优秀的文化交流能力和独到的文书写作心得。',
            expertise: '申请季就像雨中爬山：一眼望不到峰顶，你却知道它始终就在那里。拨云见日，相信直觉，不为纷扰所困，方能登顶而览众山。我会在山脚等你，和你一起走走泥泞小径，看看沿途风景。',
            demo: ''
          },
          {
            img: require('../assets/img/teachers/graduate/Joey.png'),
            name: 'Joey',
            school: '德州理工大学 石油工程硕士',
            baSchool: '',
            experience: '她本科期间连续四年获得四川大学校级奖学金，大二开始进入国家重点实验室参与多项科研，成功完成论文发表及专利申请。研究生申请阶段，同时申请材料专业和石油工程专业的硕士项目，收获了南加州大学、伍斯特理工学院、特拉华大学等多所学校的录取通知，最终选择德克萨斯理工大学就读石油工程专业。硕士学习期间，通过TA资格考试，连续两年担任博士生导师的RA职位并获得奖学金。毕业后顺利获得贝克休斯（四大油服之一）Offer。出于对教育的热情，她加入留学行业，有着多年各国申请和辅导的经验，收获了数百个辅导案例。她不仅帮助同学们更好的规划申请安排和背景提升，更利用自己扎实的理工背景知识和丰富的经验帮助硕士和博士申请的同学选择适合他们的申请学校和项目，深挖学生学业和经历素材，更多突出学生个人背景的亮点，对专业和未来的思考，并最终帮助同学申请到他们的梦校offer，获得同学和家长的好评。',
            expertise: '鼓起勇气，告别海岸，才能发现新的海洋！<br/>面对大海，唯有以理想织起风帆，以毅力架好龙骨，才能到达梦想的彼岸！<br/>经历过一个个申请季，我熟悉理工科专业方向，积累了扎实的申请经验。针对学校项目喜好，提供最实用的背景提升建议；通过精准的学校项目难度定位，合理制定项目方案；运用理工科文书写作技巧，斩获梦校的青睐，实现人生的跨越。',
            demo: ''
          },
          {
            img: require('../assets/img/teachers/graduate/Kevin.png'),
            name: 'Kevin',
            school: '伦敦大学学院 电影研究硕士',
            baSchool: '',
            experience: '本科就读于南开大学社会学系，“公能”特别奖学金获得者，曾参与中国人民大学、西安交通大学等组织的全国性社会调查。本科毕业后出于对电影和学术的热情，经过周密调查与准备，成功收获伦敦大学学院电影研究专业offer，并以专业第一的优异成绩毕业（graduated with distinction, dean\'s list）。他关注文本分析、电影理论和媒介考古学，对社会学、传播学、文化研究，以及广义的人文社科领域有独到见解，并具有扎实的中英文学术写作功底。他回国后加入棕榈，擅长以留学亲历者和跨专业申请者的身份帮助同学们发掘自身亮点、迈向广阔世界。',
            expertise: '认识你自己，放眼全世界。追梦旅途上，我与你并肩。',
            demo: ''
          },
          {
            img: require('../assets/img/teachers/graduate/April.png'),
            name: 'April',
            school: '南加州大学 对外英语教学文学硕士',
            baSchool: '',
            experience: '本科毕业于上海外国语大学广告学专业，并在此期间赴澳交换半年，攻读市场营销课程。秉持对于教育事业的热忱，积累了多段英语培训工作经历，而后赴美就读于南加州大学教育学院获得TESOL硕士学位。在研究生期间，April导师在洛杉矶当地公立学校担任兼职ESL老师，教授墨西哥裔为主的国际学生英语阅读和写作，与此同时其加入edX某线上课程开发团队，负责设计并录制中文双语教学视频课程。毕业后即投身于留学行业，加入棕榈大道，擅长个性化的素材挖掘与亮点提炼、高效的辅导沟通与进度把控、针对性的模拟面试辅导，其文书专业度和辅导细致度一直广受学生好评。April导师已帮助多位同学低三维逆袭申请季。',
            expertise: '申请之路亦是成长之路，而成功的结果则是水到渠成。世界并不在你的地图与笔记里…当你回来时，你从此与众不同。而作为棕榈主导师，申请之路的引路人，愿凭借我的专业度、经验值和责任心助你一路披荆斩棘，拥有更自由的选择，发掘更强大的自己，看到更美妙的世界！Fight on! ',
            demo: ''
          },
          {
            img: require('../assets/img/teachers/graduate/Yu.png'),
            name: 'Yu',
            school: '伦敦大学学院 化学硕士',
            baSchool: '',
            experience: '她本科以Top20％的成绩毕业与吉林大学化学基地班，在校期间曾多次被授予学术奖学金，获得硕博连读保送资格，毕业时被授予优秀学术毕业生。之后赴University College London攻读Master,专业Chemical research,研究方向是电化学（物理化学与分析化学交叉领域）。回国后曾就职于Chevron Oronite的产品研发部，先后担任发动机油配方工程师和机油配方项目经理；为壳牌(shell),埃克森美孚，英国石油(British Petroleum),中石油，中石化设计完成发动机油相关产品。获得过阿姆斯特丹大学和哥本哈根大学化学专业Master offer,加拿大英属哥伦比亚大学(UBC)电化学方向PHD offer（四年全额奖学金）。她有丰富的套磁经验和各个国家理工科申请经验，为同学在材料准备、时间规划和专业度提升方面帮助良多。',
            expertise: '全面了解每一位学生的诉求，将心比心，在传授技能与制定规划的过程中密切关注学生心理的变化，因为技能上的指导和心理上的关怀同等重要。全力帮助学生战胜申请过程中的每一个困难，给出专业的帮助与建议从而完成学生能力的提升，协助学生最终收获满意的offer。在帮助学生提升自我能力的同时跟学生一起成长，互帮互助。',
            demo: ''
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
            experience: '研究生从伦敦政治经济学院毕业后全职加入棕榈并负责英联邦文商科的申请，具有丰富的海外名校申请指导及文书攥写经历。他曾在人民日报，发改委，财政部，新浪微博等大型部位企业进行过多段实习，也曾获得国家留学基金委全额奖学金赴海外求学，丰富的校内和课外经历让他更了解学生，并善于挖掘学生的闪光点，已辅导多位学生成功申请到各国名校。',
            expertise: '我认为体验是最好的学习方式，而棕榈的模式就是和同学一起在这个过程中不断的提高和学习，申请是一个发现自己和认清自己的过程，我欣赏脚踏实地的心态，喜欢感想敢做的勇气，我希望和你一起探索这个世界的边界。',
            demo: ''
          },
          {
            img: require('../assets/img/teachers/graduate/Xiaoxiao.png'),
            name: 'Xiaoxiao',
            school: '爱丁堡大学 教育学硕士',
            baSchool: '',
            experience: '本科毕业于伯明翰大学教育专业，就读期间走访观察了许多当地以不同教育理念和方式进行教学的教育机构，并热心公益教育与特殊教育。随后以优秀的成绩和丰富的实践经历成功申请到爱丁堡大学教育学硕士，主要研究中英教育政策与发展。毕业后在知名英语教育机构从事语言教育，用不同的教育方法和方式帮助学生达到英语学习效益最大化。加入棕榈后，先后辅导了教育学，心理学，传媒，公共政策，经济学，法学，市场营销，金融学等专业的学生，凭借优秀的沟通效率，针对不同背景学生制定辅导计划的能力，精准定位，以及优秀的文书修改质量，广受学生好评。',
            expertise: '每个人都是不同的个体，所面临的问题也是形形色色。因此，对于不同的个体如何进行协作，从而帮助他们发挥个人最佳的成长，适应，改变或者发展，也应该各有不同的观点，主张或方式。了解每个学生的特点和需求，为他们进行最适合他们的规划和辅导，并针对每个学校的喜好和要求，层层把关，精益求精，才能帮助学生贏得胜利。在这个过程中，学生也会得到成长和脱变，在未来梦想的道路上斩荆披棘。',
            demo: ''
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
    this.banner1 = this.isMobile ? require('../assets/img/fourToOne/mobile/banner1.png') : require('../assets/img/fourToOne/banner1.png')
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

  .web-div {
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
  }

  .mobile-div {
    .banner1-div {
      width: 100%;
      padding: 1.066667rem 0 0;
      background-color: #1BBEB2;

      .banner1 {
        width: 8.826667rem;
        height: 5.52rem;
        margin: 0 auto;
        position: relative;
        text-align: left;
        background-repeat: no-repeat;
        background-size: cover;
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
      padding: 1.413333rem 0 .533333rem;
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

      .guide-item-div {
        list-style: none;
        text-align: center;
        padding: 0;
        margin: .133333rem auto;
        // width: 805px;
        // background:#FFFFFF;
        // box-shadow:-2px 3px 15px rgba(91,98,97,0.16);
        opacity:1;
        border-radius:83px;

        li {
          width: 3.5rem;
          height: .8rem;
          opacity: 1;
          margin: .133333rem .106667rem;
          display: inline-block;
          color: rgba(57,60,61,1);
          cursor: pointer;
          text-align: left;
          padding: 0 0 0 .4rem;
          background-color: #fff;
          box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.16);
          border-radius: 23px;

          .img {
            width:.453333rem;
            height:.453333rem;
            // background:rgba(255,255,255,1);
            box-shadow:3px 3px 6px rgba(0,0,0,0.16);
            border-radius:50%;
            opacity:1;
            margin-top: .186667rem;
            background-repeat: no-repeat;
            background-size: cover;
            display: inline-block;
            margin-right: .186667rem;
          }

          .text {
            display: inline-block;
            font-size: .32rem;
            font-family: SourceHanSansCN;
            font-weight: 500;
            line-height: .453333rem;
            margin-top: .186667rem;
            vertical-align: top;
            height: .453333rem;
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
        // width: 1130px;
        text-align: center;
        margin: .986667rem auto 0;

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
            min-height: 1.626667rem;
            background-color: #35C4C4;
            padding: 0.346667rem 0.426667rem .133333rem;
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
