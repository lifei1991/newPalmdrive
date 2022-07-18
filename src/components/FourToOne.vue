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
            expertise: '',
            demo: '',
            concept: '选择出国留学，在一个全新的环境中开拓视野，深耕专业对每位同学来说都是意义重大的一步，需要审慎的考虑与专业的支持。对我来说，主导师能够提供的不只是技术层面的辅导，也是心理层面的支持。我希望陪伴同学们在申请过程中不断发现自身的闪光点，不断挖掘未来职业道路的可能性，一步一个脚印地向梦想的彼岸迈进。'
          },
          // {
          //   img: require('../assets/img/teachers/graduate/Ruoyi.png'),
          //   name: 'Ruoyi',
          //   school: '波士顿大学 电视制作硕士',
          //   baSchool: '',
          //   experience: '本科就读于四川外国语大学国际关系学院，对跨文化交流的热情使她产生了用影像表现文化诉求的愿望。自学剧本创作并跨专业DIY申请影视硕士专业，收获包括雪城大学，俄亥俄州立等数枚带奖offer。毕业后在美国洛杉矶从事影视工作近四年。工作内容涵盖好莱坞原创剧本开发和影视后期制作统筹，服务客户包括六大Studios，美国主流电视网络和流媒体平台（CBS, Netflix, Amazon Studio），日本及欧洲影视公司等。担任国内多条出海广告片制片人及国际客户经理。前期为棕榈大道艺术作品集专业导师，全职加入棕榈大家庭后担任申请季主导师，拥有丰富的行业经验，优秀的文化交流能力和独到的文书写作心得。',
          //   expertise: '',
          //   demo: '',
          //   concept: '申请季就像雨中爬山：一眼望不到峰顶，你却知道它始终就在那里。拨云见日，相信直觉，不为纷扰所困，方能登顶而览众山。我会在山脚等你，和你一起走走泥泞小径，看看沿途风景。'
          // },
          // {
          //   img: require('../assets/img/teachers/graduate/Joey.png'),
          //   name: 'Joey',
          //   school: '德州理工大学 石油工程硕士',
          //   baSchool: '',
          //   experience: '她本科期间连续四年获得四川大学校级奖学金，大二开始进入国家重点实验室参与多项科研，成功完成论文发表及专利申请。研究生申请阶段，同时申请材料专业和石油工程专业的硕士项目，收获了南加州大学、伍斯特理工学院、特拉华大学等多所学校的录取通知，最终选择德克萨斯理工大学就读石油工程专业。硕士学习期间，通过TA资格考试，连续两年担任博士生导师的RA职位并获得奖学金。毕业后顺利获得贝克休斯（四大油服之一）Offer。出于对教育的热情，她加入留学行业，有着多年各国申请和辅导的经验，收获了数百个辅导案例。她不仅帮助同学们更好的规划申请安排和背景提升，更利用自己扎实的理工背景知识和丰富的经验帮助硕士和博士申请的同学选择适合他们的申请学校和项目，深挖学生学业和经历素材，更多突出学生个人背景的亮点，对专业和未来的思考，并最终帮助同学申请到他们的梦校offer，获得同学和家长的好评。',
          //   expertise: '',
          //   demo: '',
          //   concept: '鼓起勇气，告别海岸，才能发现新的海洋！<br/>面对大海，唯有以理想织起风帆，以毅力架好龙骨，才能到达梦想的彼岸！<br/>经历过一个个申请季，我熟悉理工科专业方向，积累了扎实的申请经验。针对学校项目喜好，提供最实用的背景提升建议；通过精准的学校项目难度定位，合理制定项目方案；运用理工科文书写作技巧，斩获梦校的青睐，实现人生的跨越。'
          // },
          // {
          //   img: require('../assets/img/teachers/graduate/Kevin.png'),
          //   name: 'Kevin',
          //   school: '伦敦大学学院 电影研究硕士',
          //   baSchool: '',
          //   experience: '本科就读于南开大学社会学系，“公能”特别奖学金获得者，曾参与中国人民大学、西安交通大学等组织的全国性社会调查。本科毕业后出于对电影和学术的热情，经过周密调查与准备，成功收获伦敦大学学院电影研究专业offer，并以专业第一的优异成绩毕业（graduated with distinction, dean\'s list）。他关注文本分析、电影理论和媒介考古学，对社会学、传播学、文化研究，以及广义的人文社科领域有独到见解，并具有扎实的中英文学术写作功底。他回国后加入棕榈，擅长以留学亲历者和跨专业申请者的身份帮助同学们发掘自身亮点、迈向广阔世界。',
          //   expertise: '',
          //   demo: '',
          //   concept: '认识你自己，放眼全世界。追梦旅途上，我与你并肩。'
          // },
          // {
          //   img: require('../assets/img/teachers/graduate/April.png'),
          //   name: 'April',
          //   school: '南加州大学 对外英语教学文学硕士',
          //   baSchool: '',
          //   experience: '本科毕业于上海外国语大学广告学专业，并在此期间赴澳交换半年，攻读市场营销课程。秉持对于教育事业的热忱，积累了多段英语培训工作经历，而后赴美就读于南加州大学教育学院获得TESOL硕士学位。在研究生期间，April导师在洛杉矶当地公立学校担任兼职ESL老师，教授墨西哥裔为主的国际学生英语阅读和写作，与此同时其加入edX某线上课程开发团队，负责设计并录制中文双语教学视频课程。毕业后即投身于留学行业，加入棕榈大道，擅长个性化的素材挖掘与亮点提炼、高效的辅导沟通与进度把控、针对性的模拟面试辅导，其文书专业度和辅导细致度一直广受学生好评。April导师已帮助多位同学低三维逆袭申请季。',
          //   expertise: '',
          //   demo: '',
          //   concept: '申请之路亦是成长之路，而成功的结果则是水到渠成。世界并不在你的地图与笔记里…当你回来时，你从此与众不同。而作为棕榈主导师，申请之路的引路人，愿凭借我的专业度、经验值和责任心助你一路披荆斩棘，拥有更自由的选择，发掘更强大的自己，看到更美妙的世界！Fight on!'
          // },
          // {
          //   img: require('../assets/img/teachers/graduate/Yu.png'),
          //   name: 'Yu',
          //   school: '伦敦大学学院 化学硕士',
          //   baSchool: '',
          //   experience: '她本科以Top20％的成绩毕业与吉林大学化学基地班，在校期间曾多次被授予学术奖学金，获得硕博连读保送资格，毕业时被授予优秀学术毕业生。之后赴University College London攻读Master,专业Chemical research,研究方向是电化学（物理化学与分析化学交叉领域）。回国后曾就职于Chevron Oronite的产品研发部，先后担任发动机油配方工程师和机油配方项目经理；为壳牌(shell),埃克森美孚，英国石油(British Petroleum),中石油，中石化设计完成发动机油相关产品。获得过阿姆斯特丹大学和哥本哈根大学化学专业Master offer,加拿大英属哥伦比亚大学(UBC)电化学方向PHD offer（四年全额奖学金）。她有丰富的套磁经验和各个国家理工科申请经验，为同学在材料准备、时间规划和专业度提升方面帮助良多。',
          //   expertise: '',
          //   demo: '',
          //   concept: '全面了解每一位学生的诉求，将心比心，在传授技能与制定规划的过程中密切关注学生心理的变化，因为技能上的指导和心理上的关怀同等重要。全力帮助学生战胜申请过程中的每一个困难，给出专业的帮助与建议从而完成学生能力的提升，协助学生最终收获满意的offer。在帮助学生提升自我能力的同时跟学生一起成长，互帮互助。'
          // },
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
            expertise: '',
            demo: '',
            concept: '我认为体验是最好的学习方式，而棕榈的模式就是和同学一起在这个过程中不断的提高和学习，申请是一个发现自己和认清自己的过程，我欣赏脚踏实地的心态，喜欢感想敢做的勇气，我希望和你一起探索这个世界的边界。'
          },
          {
            img: require('../assets/img/teachers/graduate/Sheery.png'),
            name: 'Sherry',
            school: '马里兰大学 植物科学硕士',
            baSchool: '',
            experience: '本科在四川农业大学2年内完成所有课程学习后跳级进入密歇根州立大学农学院学习草坪管理专业，毕业时因成绩优异得到密歇根州立大学的荣誉学生称号，并拿到四川农业大学以及密歇根州立大学学位证书。研究生以全奖申请到马里兰大学植物科学专业继续深造，期间担任研究助理以及助教工作。毕业后前期在百词斩担任英语编辑和老师，参与上千词条以及付费课程的录制工作。进入留学咨询行业多年，在申请辅导过程中，尤其擅长沟通，能够帮助同学充分挖掘自身亮点，更有信心面对申请过程中的挑战。',
            expertise: '',
            demo: '',
            concept: '我们的目的不仅仅是让你收获满意的Offer，还能让你学会以后学习中甚至是工作中必备的各项技能。Nothing in the world is impossible if you set up your mind to do it! 这句话也送给求学路上的你！'
          },
          {
            img: require('../assets/img/teachers/graduate/Yue.png'),
            name: 'Yue',
            school: '杜克大学 东亚人文批判硕士',
            baSchool: '',
            experience: 'Yue 老师本科连续三年获得校综合奖学金，大三时被选拔为公派交流项目的成员，赴瑞士的苏黎世大学法学院交换学习，并获得国家留学基金委员会的资助。她还曾作为核心成员，参与华东政法大学重点立项的调研项目。课堂之外，她担任校话剧社副社长，有多次剧目创作、演出制作的经历。虽然早已通过了中国司法考试，但她勇敢听从内心，追寻文艺梦想。Yue 老师自主申请并入读杜克大学人文硕士项目，潜心钻研文学、电影、文化、表演、性别理论等，并获得学院奖学金。她还曾在杜克的亚洲与中东研究系担任中文助教，并在影视行业积累多段实习经历，深入了解传媒行业。<br/>加入棕榈以后，Yue 老师主要负责文科申请，辅导学生成功申请到哥伦比亚大学、芝加哥大学、纽约大学、康奈尔大学、宾夕法尼亚大学、加州大学伯克利分校、南加州大学、伦敦政治经济学院、波士顿大学等世界知名高校研究生项目。',
            expertise: '',
            demo: '',
            concept: '留学申请其实就像人生中的很多环节一样，是一个在茫茫信息海中筛选信息、找寻自己的可能、做出抉择、再到达目的地的过程。在缺乏恰当的引导和判断的能力时，人就容易迷失或者绕远。我希望在申请季中，用我的专业能力和经验，帮助每一个独特的个体确定合适的方向，做出准确的选择，再直接地达到彼岸。'
          },
          {
            img: require('../assets/img/teachers/graduate/Yaojia.png'),
            name: 'Yaojia',
            school: '宾夕法尼亚大学 行为与决策硕士',
            baSchool: '',
            experience: 'Yaojia老师在校期间成绩出众，不仅专业排名第一，还曾连续获得一等奖学金，最终成功拿到美国宾夕法尼亚大学硕士项目录取。在申请海外院校这一过程中，她努力研究各国教育体系，目标项目课程与申请流程，同时深挖自己的背景优势。也正因为此，Yaojia老师在进入留学教育行业后，极为擅长商科申请的整体策略与细节把控。同时，她能够洞悉广大学生的申请痛点，很好地启发学生认识自己，帮助大家打造个性化申请材料，并帮助学生匹配适合的项目。<br/>截至目前，在Yaojia老师的帮助下，学员们已经成功录取哥伦比亚大学，康奈尔大学，宾夕法尼亚大学，布朗大学，芝加哥大学，杜克大学，西北大学，加州大学伯克利分校，约翰斯霍普金斯大学，乔治城大学，纽约大学，罗切斯特大学，伦敦商学院，伦敦政治经济学院，华威大学，伦敦国王学院，新加坡国立大学，新加坡南洋理工大学，香港大学，香港中文大学，香港科技大学等世界名校项目。',
            expertise: '',
            demo: '',
            concept: '留学是人生的一大步，我愿做你申请路上的指引者，用我的专业和用心，助力你选择最适合的路，挖掘你最亮眼的风采，陪伴你一路披荆斩棘。当你收获满意录取结果的同时，也收获了成长，成为最耀眼的自己。'
          },
          {
            img: require('../assets/img/teachers/graduate/Candice.png'),
            name: 'Candice',
            school: '牛津大学 社会政策硕士<br/>伦敦大学学院 教育学硕士',
            baSchool: '',
            experience: 'Candice老师拥有丰富的留学经历和海外高校申请经验。她在上学期间就曾利用课余时间无偿帮助有需要的同学进行文书修改及留学辅导。作为全英学联文化推广部的一员，Candice老师拥有极强的文字功底和英语能力，曾参与《英伦学人》杂志的编辑和发表。同时，她也热衷于教育事业，不仅在上海教育电视台参与栏目“升职与就业”栏目的制作，还积极参与了英文教育的各项志愿活动，有极强的服务意识和教育家精神。她认为每个孩子都应该拥有获得更优质教育的机会。<br/>截至目前，Candice老师已帮助学生成功录取哈佛大学，哥伦比亚大学，宾夕法尼亚大学，康奈尔大学，西北大学，约翰斯霍普金斯大学，范德堡大学，加州大学洛杉矶分校，卡耐基梅隆大学，南加州大学，密歇根大学，乔治城大学，纽约大学，伦敦政治经济学院，伦敦大学学院，爱丁堡大学，及其他国家与地区的世界顶级院校项目。她擅长多地区院校混合申请，专业横跨传媒，教育，法学，区域研究，公共政策与管理等各大文科热门领域。',
            expertise: '',
            demo: '',
            concept: '不做机械化模式化的文书机器，做有灵魂有温度的教育伙伴！'
          },
          {
            img: require('../assets/img/teachers/graduate/Lingyan.png'),
            name: 'Lingyan',
            school: '布兰迪斯大学 金融硕士',
            baSchool: '',
            experience: 'Lingyan 老师曾先后在安永审计部及德勤风险咨询部实习和工作，积累了丰富的会计和金融行业实战经验。她在美国就读期间即作为棕榈大道专业导师辅导多位学员进行研究生申请。Lingyan 老师深深体会了留学教育所带来的成就感与使命感。她也因此转为棕榈大道全职主导师，利用自己积累的商科知识，丰富的行业经历，多元化的海外视角，独特的行业见解来帮助更多学员解决困惑，做出长远细致的职业规划。她总是不遗余力地把商科的申请经验和行业经验分享给学员们，不仅体现在申请材料和面试准备，也在于对学员们未来道路的探索。她的专业与热情广受学员与家长好评。<br/>在Lingyan 老师的帮助下，学员们已陆续收获世界知名院校项目的录取，其中包括哥伦比亚大学，康奈尔大学，芝加哥大学，杜克大学，约翰斯霍普金斯大学，纽约大学，伦敦政治经济学院，香港大学，香港科技大学等。',
            expertise: '',
            demo: '',
            concept: '以专业经验为柴，热情态度为火，点燃学生的梦想烈焰。'
          },
          {
            img: require('../assets/img/teachers/graduate/Siwei.png'),
            name: 'Siwei',
            school: '香港中文大学 地理信息系统硕士',
            baSchool: '',
            experience: 'Siwei老师大学期间曾代表学校赴泰国皇家理工大学进行交流访问，期间接受泰国电视台采访；参加中联办在香港举办的中国梦复兴之路大型展览，为港澳同胞讲解国家历史发展峥嵘岁月;曾多次获一等奖学金，义工先进个人等称号，研究生申请获香港中文大学，香港大学，香港理工大学等。<br/>曾就职于国际五大行及上市券商，最终在留学教育行业找到属于自己的工作意义，目前已有4年行业从业经验积累，成功帮助学生获取众多名校录取，擅长以亲切幽默的辅导方式走近学生，从而更好的帮助和陪伴。<br/>在Siwei老师的帮助下，学员们已陆续收获世界知名院校项目的录取，其中包括哈佛大学，耶鲁大学，康奈尔大学，哥伦比亚大学，宾夕法尼亚大学，加州大学伯克利分校，苏黎世联邦理工大学，麦吉尔大学，滑铁卢大学，伦敦大学学院等。',
            expertise: '',
            demo: '',
            concept: '教育和眼界对于一个人的成长举足轻重，未来也势必会有更多的孩子走向全世界，去充分感知和接受多元化的教育。留学咨询也不会再是传统意义上简单扮演"中介"的角色，而是在这个过程中，有温度地陪伴并帮助他们发现以及成为更好的自己。'
          },
          {
            img: require('../assets/img/teachers/graduate/Song.png'),
            name: 'Song',
            school: '南加州大学 对外英语教育&文学 双学位硕士',
            baSchool: '',
            experience: 'Song 老师一直热心教育和公益事业，凭借优秀的成绩和丰富的教育实践经历成果申请到南加州大学教育学院对外英语教育项目。在读期间，Song老师曾于洛杉矶当地公立小学担任研究助教，进行了英语学习辅导和二语习得行为研究。基于丰富的学术及实践经历，Song老师不仅擅长文理工商科学生的背景提升和时间规划工作，还对辅导计算机科学，电子电气工程，运筹学，统计学，数据科学，生物学，生物统计等相关专业的申请颇有建树。她善于帮助学员明确目标，精准定位，同时启发学员更好地挖掘背景亮点。她的沟通效率和文书修改质量方面广受学员及家长好评。<br/>截至目前，Song 老师已多次帮助学员们斩获世界知名院校项目录取，如耶鲁大学，哥伦比亚大学，宾夕法尼亚大学，芝加哥大学，杜克大学，西北大学，康奈尔大学，加州大学伯克利分校，卡耐基梅隆大学，南加州大学，纽约大学，帝国理工学院，伦敦政治经济学院，新加坡国立大学，南洋理工大学，香港大学，香港中文大学，香港科技大学等。',
            expertise: '',
            demo: '',
            concept: '申请海外名校是对申请者从专业知识到语言能力再到实践经验积累的全面考验，我愿意作为你的"同行者"，全面地了解你，利用自己的专业知识和经验积需，为你制订个性化方案，陪伴你在通往梦校的道路上披荆斩辣。'
          },
          {
            img: require('../assets/img/teachers/graduate/Helena.png'),
            name: 'Helena',
            school: '爱丁堡大学 对外英语教育硕士',
            baSchool: '',
            experience: 'Helena 老师学术成绩优异，曾担任专业内的学姐导师，有丰富的辅导经验。本科毕业后，她自主申请研究生并获得9 份录取。最终，她选择了在自己最喜欢的城市一一爱丁堡，继续攻读硕士学位。Helena 老师曾就职于国内外私立院校和教育机构，并长期坚持帮助曾经的教授进行科研，最终获得教授的主动推荐与语言学专业心理语言学方向博士项目录取。业余生活中，她喜欢各种有趣的事物，如艺术展，，阅读，音乐等。作为基督徒，她也热衷于志愿者服务，希望将自己所获得的优质教育成果回馈社会。<br/>截至目前，Helena 老师凭借出众的专业能力与积极的辅导态度助力学员们收获包括哈佛大学、哥伦比亚大学、宾夕法尼亚大学、康奈尔大学、布朗大学、芝加哥大学、杜克大学、约翰斯霍普金斯大学、加州大学伯克利分校、卡耐基梅隆大学、帝国理工学院、伦敦政治经济学院、伦敦大学学院、新加坡国立大学、香港大学、香港中文大学、香港科技大学等知名院校项目录取。',
            expertise: '',
            demo: '',
            concept: '每位学员都是独立的个体，都有值得被看到的闪光点。因此，个性化的辅导非常重要，授之以渔远比授之以鱼更具价值。我希望能够真正助力学员们并和大家一起成长。'
          },
          {
            img: require('../assets/img/teachers/graduate/Jessie.png'),
            name: 'Jessie',
            school: '剑桥大学 语言学硕士',
            baSchool: '',
            experience: 'Jessie老师本科毕业于多伦多大学语言学与心理学双专业，期间连续获得三年最优秀学生名单。在大四获得导师提名的多伦多大学优秀毕业生奖，并获得了多伦多大学语言学实验室研究助理的职位，有丰富的学术经验以及学术会议经历。在校期间担任多伦多大学 Hear2Speak 俱乐部的活动总监。并从 2013 年起在加拿大多伦多的一所知名私立高中担任学术和行政协调员，帮助许多来自世界各地的高中毕业生完成他们的大学申请，成功拿到加拿大知名大学的 offer。多伦多大学毕业后，她自主申请加拿大多伦多大学，英属哥伦比亚大学，剑桥大学，香港大学以及西安大略大学的研究生并全部拿到 offer。其中多伦多大学，英属哥伦比亚大学以及西安大略大学获得全额奖学金。她的过往经验使她对北美、欧洲及香港的学制和申请要求有非常深刻的了解与解读。<br/>加入棕榈后，她在文科申请方面有着丰富的经验，帮助学生获得传媒、公共政策、语言学、心理学、社会学、人类学等专业的名校录取，包括哥伦比亚大学，宾夕法尼亚大学，康奈尔大学，芝加哥大学，卡内基梅隆大学，牛津大学，伦敦政治经济学院，伦敦大学学院，新加坡国立大学等。同时她也成功辅导了理工和商科同学获得他们的梦校offer。<br/>她时间管理能力强，善于因材施教，跟不同背景的同学辅导，引导学生深入思考，跟同学们都是亦师亦友的相处模式。',
            expertise: '',
            demo: '',
            concept: '“牵你手，帮你达成目标，送你去看世界。” 留学路上不仅仅是拿到 offer，更是人生的成长。希望通过自身的经历和经验.帮助更多优秀的同学进入他们梦想的学校;同时也希望在这条路上能给到同学指引，帮助他们找到真正的自己，拓宽眼界，最大挖掘自我潜质。'
          },
          {
            img: require('../assets/img/teachers/graduate/Gaohuan.png'),
            name: 'Gaohuan',
            school: '亚利桑那大学 金融硕士',
            baSchool: '',
            experience: 'Gaohuan老师本科就读于亚利桑那大学经济学专业，本科期间在学校的国际服务中心做助理工作，对于美国大学审核国际学生的标准和体系有全面的认识。本科毕业后以荣誉学生的身份获得Eller商学院的金融研究生项目奖学金，研究生期间担任运动经济学助教，并最终以项目前三的成绩毕业。拥有丰富市场、金融领域相关实习和全职工作经验。对教育充满热情，做事踏实认真，擅长挖掘学生的经历，凸显每个人独特的亮点，引导学生通过申请更深入了解自己和申请的目标专业，冲击自己的学术和职业目标。<br/>他有非常强的规划和时间管理能力，擅长辅导商科多轮次的申请，也熟悉多个国家地区的申请要求，包括美、加、英、港、新、澳等。他帮助学生获得了许多顶尖学校的录取，包括哥伦比亚大学、芝加哥大学、杜克大学、纽约大学、南加州大学、华盛顿圣路易斯大学、乔治城大学、多伦多大学、帝国理工大学、香港大学、香港中文大学、香港科技大学等。',
            expertise: '',
            demo: '',
            concept: '选择真的比努力更重要，做正确的选择的前提是做好适合自己的规划。我希望以自己在美国7年的留学、生活和工作经历给予学生最真诚的建议。协助他们做好最适合自己的规划，做出正确的选择，顺利实现自己的目标。'
          },
          {
            img: require('../assets/img/teachers/graduate/Seven.png'),
            name: 'Seven',
            school: '伦敦大学学院 比较文学硕士',
            baSchool: '',
            experience: 'Seven 老师毕业于伦敦大学学院（UCL），对英联邦教育系统、院校特色、课程设置、以及目标学生群体特点均有独到见解。在UCL 攻读硕士期间，她充分发挥自己跨学科背景的优势，对自然科学和人文社科领域均有涉猎。毕业后，Seven老师在留学教育行业深耕多年。“热情、专业、细致、耐心、负责”，是同学们对她的评价。Seven老师也希望借由她对于教育行业的热爱去点亮同学们探索未来无限可能的征途。<br/>Seven老师用她出色的行业知识，积极、热情的辅导，帮助棕榈学员们收获包括哥伦比亚大学、范德堡大学、约翰斯霍普金斯大学、卡耐基梅隆大学、纽约大学、帝国理工大学、伦敦大学学院、国王大学、爱丁堡大学、曼切斯特大学、华威大学等知名院校的录取。',
            expertise: '',
            demo: '',
            concept: '深度挖掘对目标专业的渴望，追寻心底那份热爱。'
          },
          {
            img: require('../assets/img/teachers/graduate/Lynn.png'),
            name: 'Lynn',
            school: '香港中文大学 生物医学工程硕士',
            baSchool: '',
            experience: 'Lynn老师本硕期间学习生物医学BME这样的交叉学科，使得我对理工科尤其是材料/生物/EE/ME 等专业都有比较熟悉的认识和理解。她热爱教育行业，曾经在某教育机构兼职担任托管老师，对如何引导学生也有一定的经验和方法。在进行研究生申请的过程中，她自主备考雅思和准备申请，成功收获香港中文大学、香港科技大学等 4 所港校录取，对香港和新加坡学校的申请也非常了解。在就读研究生的过程中，积累了一定的校友资源，掌握本专业的各港校实验室招生情况。<br/>Lynn老师加入棕榈后，她积累了丰富的多国浑申经验，擅长交叉学科的申请，尤其是在材料、EE、BME、生物、ME、金工金数、统计/生物统计等专业领域有深入的了解。申请案例涉及约翰斯霍普金斯大学，哥伦比亚大学，卡耐基梅隆大学，密歇根大学，北卡州立教堂山，芝加哥大学，杜克大学，加州大学洛杉矶分校，香港大学，香港科技大学，麦吉尔大学，牛津大学，帝国理工大学，新加坡国立大学，南洋理工大学等等。她喜欢也擅长引导学生发掘自己背景中的闪光点，为学生助力冲击自己的梦校。',
            expertise: '',
            demo: '',
            concept: '因为亲身经历过，所以更加能感同身受。留学申请就像陪伴同学挖掘宝藏的过程，同时自己也能收获不一样的体验。相信每个同学都有自己的潜力面，乐于挖掘学生的潜力，愿意陪伴学生经历申请的酸甜苦辣，从心理上和专业度上全面陪伴同学成长。'
          },
          {
            img: require('../assets/img/teachers/graduate/Leona.png'),
            name: 'Leona',
            school: '印第安纳大学布鲁明顿分校 艺术管理硕士',
            baSchool: '',
            experience: 'Leona老师本科就读于中国传媒大学传媒经济管理专业，研究生就读于印第安纳大学艺术管理专业。加入棕榈前一直从事文化产业工作，文艺脑+商业脑∶制作人、助理导演、编舞、舞台监督方面均有经验，既能和托尼奖得主探讨创意方向，也能谈合同、管预算。熟悉商科和传媒类各专业的申请流程，用自己对艺术的热情和对管理的严谨，帮助同学制定最为适合其背景和兴趣的留学深造计划。<br/>Leona老师加入棕榈后，一直深耕商科申请和传媒大类的申请，积累了丰富的辅导案例。她帮助学生申请到许多顶尖院校，包括哥伦比亚大学，宾夕法尼亚大学，约翰斯霍普金斯大学，加州大学洛杉矶分校，南加州大学，纽约大学，华盛顿圣路易斯大学，乔治城大学，帝国理工大学，新加坡国立大学，南洋理工大学等等。她非常自律，对于工作认真负责，性格开朗，能够和学生建立紧密而信任的关系，深挖学生的经历，向学校展现学生最为亮点的经历和想法。',
            expertise: '',
            demo: '',
            concept: '留学申请是你千里之行的第一步。在这里，你将收获对自己更深的了解、对未来更清楚的规划和对自己每一步前行更负责任的态度。我很开心能陪伴你迈出这一步，也会以我的专业与认真助你迈出最为坚实的一步，奔向更精彩的人生!'
          },
          {
            img: require('../assets/img/teachers/graduate/Rui.png'),
            name: 'Rui',
            school: '纽约大学 英语教育硕士',
            baSchool: '',
            experience: 'Rui老师大学时积极投身对外汉语教学，在中国人民大学汉语研修班为留学生教授中文，毕业后在辅导学生备战托福考试的过程中，找到自己对双语教学热爱后进入纽约大学英语教育硕士学位。在研究生期间进入哥伦比亚大学及纽约市立大学系统实习，采用基于各学科内容的沉浸式，支架式教学法教学。毕业后就职于纽约顶尖私立学校教学，参与设计教学课程，熟悉美国教育系统。<br/>Rui老师自从加入棕榈以来，深耕文社科申请，尤其在教育学、心理学、公共政策/公共管理、社科定量、社会工作等专业的申请上有独到的见解。她积极开朗，陪伴学生在申请季克服困难，努力前行。她的辅导案例也非常丰富，帮助学生拿下了很多世界名校的offer，如哈佛大学，哥伦比亚大学，康奈尔大学，杜克大学，约翰斯霍普金斯大学，伦敦政治经济学院，伦敦大学学院，新加坡国立大学，香港大学等。',
            expertise: '',
            demo: '',
            concept: '教育不仅仅是传授知识，而是传授终身学习的能力。辅导学校申请既是陪伴学生朝着梦校不断努力的过程，也是帮助学生认识自己，发掘潜力的探索之旅。结合同理心和丰富的专业知识，为你找到最合适的学校。在学生相处的时候，我始终把自己看作是一位 facilitator，帮助学生找到奋斗的方向，见证学生的成长。'
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
          // {
          //   img: require('../assets/img/teachers/master/Icy.png'),
          //   name: 'Icy',
          //   school: '一起经历申请季的酸甜，也一起收获美好的offer吧',
          //   baSchool: '',
          //   experience: '',
          //   expertise: '',
          //   demo: ''
          // },
          {
            img: require('../assets/img/teachers/master/Xiaoxue.png'),
            name: 'Xiaoxue',
            school: '每棵希望的种子都会发芽，每颗善良的心灵都会开花',
            baSchool: '',
            experience: '',
            expertise: '',
            demo: ''
          },
          // {
          //   img: require('../assets/img/teachers/master/Pengcheng.png'),
          //   name: 'Pengcheng',
          //   school: '申请之路上，愿我们的陪伴助你披荆斩棘',
          //   baSchool: '',
          //   experience: '',
          //   expertise: '',
          //   demo: ''
          // },
          {
            img: require('../assets/img/teachers/master/Qiaoling.png'),
            name: 'Qiaoling',
            school: '不管过程有多艰辛，都要朝着梦想坚持到底',
            baSchool: '',
            experience: '',
            expertise: '',
            demo: ''
          },
          // {
          //   img: require('../assets/img/teachers/master/Echo.png'),
          //   name: 'Echo',
          //   school: '博观而约取,厚积而薄发',
          //   baSchool: '',
          //   experience: '',
          //   expertise: '',
          //   demo: ''
          // },
          {
            img: require('../assets/img/teachers/master/Vivi.png'),
            name: 'Vivi',
            school: '一起经历申请季的酸甜，也一起收获美好的offer吧',
            baSchool: '',
            experience: '',
            expertise: '',
            demo: ''
          },
          {
            img: require('../assets/img/teachers/master/Flora.png'),
            name: 'Flora',
            school: '申请之路上，愿我们的陪伴助你披荆斩棘',
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
      maxNumber: 20,
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
            background-position: center;
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
