<template>
  <div class='home'>

    <div class='banner1-div'>
      <div class='banner1' :style="{backgroundImage:'url(' + banner1 + ')'}">
        <div class='info1-div'>
          <div class='info-number'>1350<span> 个</span></div>
          <div class='info-text'>棕榈种子学员共拿到 背景提升 offer</div>
        </div>
        <div class='info2-div'>
          <div class='info-number'>95%</div>
          <div class='info-text'>棕榈种子学员拿到 背景提升 offer </div>
        </div>
        <div class='info3-div'>
          <div class='info-number'>85%</div>
          <div class='info-text'>棕榈种子学员申请季 拿到世界 Top50 的 offer</div>
        </div>

        <!-- <div class='text'>数据解释权归棕榈大道</div> -->
      </div>
    </div>

    <div class='banner2-div'>
      <!-- <div class='title'>成功案例</div> -->

      <ul class='guide-item-div'>
        <li v-for='(item, index) in demoTypes' :key='index' @click='changeDemoType(index)' :class="{ 'guide-bg-colors' : index == currentType }">
          <div class='text'>{{ item.name }}</div>
        </li>
      </ul>

      <div class='demos-div'>
        <template v-for='(item, index) in selectedDemo' >
          <div class='each-demo' v-if='index < maxNumber' :key='index' :style="{background: item.bgColor}">
            <div>
              <div class='demo-img' :style="{backgroundImage:'url(' + item.img + ')'}"></div>
            </div>
            <div class='demo-info-div'>
              <div class='demo-number'>{{ item.number }} <span>份</span></div>
              <div class='demo-text' :title='item.admissionMajor'>{{ item.text }}</div>
            </div>
          </div>
        </template>

        <div class='more-demos' @click='showMoreDemo' v-if='selectedDemo.length > 4 && maxNumber != 100'>
          <div>
            查看更多
            <span class='open-ask'></span>
          </div>
        </div>
      </div>
    </div>

    <div class="banner3-div">
      <div class="title">成功案例</div>
      <div class="story-div">
        <template v-for="(item, index) in stories" >
          <div class="each-story" :key="index">
            <div class="story-img" :style="{backgroundImage:'url(' + item.img + ')'}">
              <div class="company">{{ item.company }}</div>
            </div>
            <div class="story-info-div">
              <div class="story-text">岗&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;位：{{ item.position }}</div>
              <div class="story-text">实习亮点：{{ item.light }}</div>
              <div class="story-text time-div">持续时间：{{ item.time }}</div>
              <div class="story-text">获得offer的年级：{{ item.grade }}</div>
            </div>
          </div>
        </template>

        <!-- <div class="more-teachers" @click="showMoreStories" v-if="!(maxStoryNumber > 8 || stories.length <=8)">
          <div>
            查看更多案例<img src="../assets/img/home/more.png" class="more-img" />
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
// import ca from require('../assets/third/carousel/owl.carousel.min.js'

export default {
  components: {
  },
  name: 'Home',
  data () {
    return {
      schools: [
        [
          {
            logo: require('../assets/img/home/school/hf.png'),
            name: '哈佛大学',
            offer: 29
          },
          {
            logo: require('../assets/img/home/school/mslg.png'),
            name: '麻省理工',
            offer: 9
          },
          {
            logo: require('../assets/img/home/school/stf.png'),
            name: '斯坦福大学',
            offer: 26
          },
          {
            logo: require('../assets/img/home/school/jzdxbkl.png'),
            name: '加州大学伯克利分校',
            offer: 69
          },
          {
            logo: require('../assets/img/home/school/bxfny.png'),
            name: '宾夕法尼亚大学',
            offer: 168
          },
          {
            logo: require('../assets/img/home/school/dk.png'),
            name: '杜克大学',
            offer: 145
          },
          {
            logo: require('../assets/img/home/school/kne.png'),
            name: '康奈尔大学',
            offer: 137
          },
          {
            logo: require('../assets/img/home/school/glby.png'),
            name: '哥伦比亚大学',
            offer: 439
          },
          {
            logo: require('../assets/img/home/school/plsd.png'),
            name: '普林斯顿大学',
            offer: 24
          },
          {
            logo: require('../assets/img/home/school/zjg.png'),
            name: '芝加哥大学',
            offer: 101
          },
          {
            logo: require('../assets/img/home/school/yl.png'),
            name: '耶鲁大学',
            offer: 41
          },
          {
            logo: require('../assets/img/home/school/xbdx.png'),
            name: '西北大学',
            offer: 81
          },
          {
            logo: '',
            name: '英属哥伦比亚大学',
            offer: 21
          },
          {
            logo: '',
            name: '麦吉尔大学',
            offer: 12
          },
          {
            logo: '',
            name: '多伦多大学',
            offer: 44
          }
        ],
        [
          {
            logo: require('../assets/img/home/school/jq.png'),
            name: '剑桥大学',
            offer: 24
          },
          {
            logo: require('../assets/img/home/school/nj.png'),
            name: '牛津大学',
            offer: 23
          },
          {
            logo: require('../assets/img/home/school/dglg.png'),
            name: '帝国理工学院',
            offer: 78
          },
          {
            logo: require('../assets/img/home/school/lddx.png'),
            name: '伦敦大学学院',
            offer: 152
          },
          {
            logo: require('../assets/img/home/school/ldzzjj.png'),
            name: '伦敦政治经济学院',
            offer: 133
          },
          {
            logo: require('../assets/img/home/school/ldgw.png'),
            name: '伦敦国王学院',
            offer: 157
          },
          {
            logo: require('../assets/img/home/school/adb.png'),
            name: '爱丁堡大学',
            offer: 128
          },
          {
            logo: require('../assets/img/home/school/lds.png'),
            name: '伦敦商学院',
            offer: 11
          },
          {
            logo: '',
            name: '澳大利亚国立大学',
            offer: 39
          },
          {
            logo: '',
            name: '墨尔本大学',
            offer: 58
          },
          {
            logo: '',
            name: '悉尼大学',
            offer: 176
          },
          {
            logo: '',
            name: '昆士兰大学',
            offer: 72
          }
        ],
        [
          {
            logo: '',
            name: '巴黎高等商学院',
            offer: 5
          },
          {
            logo: '',
            name: 'Esade 商学院',
            offer: 6
          },
          {
            logo: '',
            name: '苏黎世联邦理工学院',
            offer: 7
          },
          {
            logo: '',
            name: 'ESCP 商学院',
            offer: 9
          },
          {
            logo: '',
            name: '里昂商学院',
            offer: 7
          },
          {
            logo: '',
            name: '代尔夫特理工大学',
            offer: 15
          },
          {
            logo: '',
            name: '海德堡大学',
            offer: 1
          },
          {
            logo: '',
            name: '巴黎政治学院',
            offer: 3
          },
          {
            logo: '',
            name: '柏林自由大学',
            offer: 1
          },
          {
            logo: '',
            name: '鹿特丹伊拉斯姆斯大学',
            offer: 6
          },
          {
            logo: '',
            name: '日内瓦高级国际关系学院',
            offer: 9
          }
        ],
        [
          {
            logo: require('../assets/img/home/school/xg.png'),
            name: '香港大学',
            offer: 60
          },
          {
            logo: '',
            name: '香港科技大学',
            offer: 54
          },
          {
            logo: '',
            name: '香港中文大学 ',
            offer: 84
          },
          {
            logo: '',
            name: '南洋理工大学',
            offer: 31
          },
          {
            logo: '',
            name: '新加坡国立大学',
            offer: 74
          }
        ]
      ],
      numbers: [
        {
          logo: require('../assets/img/offers/number/number1.png'),
          title: '学生总数',
          number: '4000+'
        },
        {
          logo: require('../assets/img/offers/number/number2.png'),
          title: '硕博Top100 offer',
          number: '5000+'
        },
        {
          logo: require('../assets/img/offers/number/number3.png'),
          title: '背景提升率',
          number: '95%'
        },
        {
          logo: require('../assets/img/offers/number/number4.png'),
          title: '奖学金总额',
          number: '12亿+'
        }
      ],
      places: [
        {
          img: require('../assets/img/offers/place/place1.png'),
          title: '北美 Offer',
          number: '6778'
        },
        {
          img: require('../assets/img/offers/place/place2.png'),
          title: '英国/澳洲 Offer',
          number: '3364'
        },
        {
          img: require('../assets/img/offers/place/place3.png'),
          title: '欧洲 Offer',
          number: '172'
        },
        {
          img: require('../assets/img/offers/place/place4.png'),
          title: '中国香港/新加坡 Offer',
          number: '505'
        }
      ],
      demoTypes: [
        {
          name: '实习'
        },
        {
          name: '科研'
        },
        {
          name: '夏校交换'
        },
        {
          name: '志愿者'
        }
      ],
      demos: [
        [
          {
            img: require('../assets/img/bgPromote/demo/1.png'),
            number: '120+',
            text: '德勤、普华永道、安永、毕马威等顶级会计审计 offer',
            bgColor: 'rgba(119,183,235,.19)'
          },
          {
            img: require('../assets/img/bgPromote/demo/2.png'),
            number: '80+',
            text: 'JP Morgen、Morgan Stanley、中金、中信等顶级投行券商 offer',
            bgColor: 'rgba(107,219,210,.19)'
          },
          {
            img: require('../assets/img/bgPromote/demo/3.png'),
            number: '20+',
            text: '中伦、金杜等八大红圈律所 offer',
            bgColor: 'rgba(221,175,103,.19)'
          },
          {
            img: require('../assets/img/bgPromote/demo/4.png'),
            number: '100+',
            text: '麦肯锡、贝恩等顶级咨询公司 offer ',
            bgColor: 'rgba(239,223,104,.19)'
          },
          {
            img: require('../assets/img/bgPromote/demo/5.png'),
            number: '200+',
            text: '阿里巴巴、腾讯等 BAT 互联网公司 offer',
            bgColor: 'rgba(89,157,149,.19)'
          },
          {
            img: require('../assets/img/bgPromote/demo/6.png'),
            number: '60+',
            text: '汇丰银行、平安保险等银行保险类公司 offer',
            bgColor: 'rgba(239,223,104,.19)'
          },
          {
            img: require('../assets/img/bgPromote/demo/7.png'),
            number: '130+',
            text: '联合国、世界贸易组织、商务部等国际组织政府高校智库等 offer',
            bgColor: 'rgba(224,117,65,.19)'
          },
          {
            img: require('../assets/img/bgPromote/demo/8.png'),
            number: '190+',
            text: '联合利华、欧莱雅、奥美、中央电视台等快消广告公关传媒类 offer',
            bgColor: 'rgba(221,175,103,.19)'
          },
          {
            img: require('../assets/img/bgPromote/demo/9.png'),
            number: '50+',
            text: '华为、IBM 等硬件 IT 公司 offer',
            bgColor: 'rgba(119,183,235,.19)'
          },
          {
            img: require('../assets/img/bgPromote/demo/10.png'),
            number: '350+',
            text: '外研社、ABC 美好社会公益、SEED 等教育、NGO/GO offer',
            bgColor: 'rgba(107,219,210,.19)'
          },
          {
            img: require('../assets/img/bgPromote/demo/11.png'),
            number: '15+',
            text: '伦敦博物馆、广州大剧院艺术类 offer',
            bgColor: 'rgba(221,175,103,.19)'
          }
        ],
        [
          {
            img: require('../assets/img/bgPromote/demo/12.png'),
            number: '100+',
            text: '麻省理工大学、哈佛大学等世界知名高校科研类 offer',
            bgColor: 'rgba(119,183,235,.19)'
          },
          {
            img: require('../assets/img/bgPromote/demo/13.png'),
            number: '135+',
            text: '清华大学，北京大学等国内知名高校科研类 offer',
            bgColor: 'rgba(107,219,210,.19)'
          },
          {
            img: require('../assets/img/bgPromote/demo/14.png'),
            number: '30+',
            text: '中国科学院、欧洲核子研究院等知名研究所项目科研 offer',
            bgColor: 'rgba(221,175,103,.19)'
          }
        ],
        [
          {
            img: require('../assets/img/bgPromote/demo/15.png'),
            number: '120+',
            text: '剑桥大学、哥伦比亚大学等世界知名高校海外交换 offer',
            bgColor: 'rgba(119,183,235,.19)'
          },
          {
            img: require('../assets/img/bgPromote/demo/16.png'),
            number: '15+',
            text: '清华大学、中国科学院大学等国内高校研究所交换 offer',
            bgColor: 'rgba(107,219,210,.19)'
          }
        ],
        [
          {
            img: require('../assets/img/bgPromote/demo/17.png'),
            number: '155+',
            text: '达沃斯经济论坛、联合国志愿者等公益类 offer',
            bgColor: 'rgba(119,183,235,.19)'
          }
        ]
      ],
      intros: [
        {
          logo: require('../assets/img/home/intros/intro1.png'),
          title: '全球专业导师网络',
          text: '5000+世界名校毕业生导师，精准辅导200+多个专业， 专业标准化管理，半年度导师培训'
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
      programs: [
        {
          img: require('../assets/img/home/programs/program1.png')
        },
        {
          img: require('../assets/img/home/programs/program2.png')
        },
        {
          img: require('../assets/img/home/programs/program3.png')
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
      dynamics: [
        {
          img: require('../assets/img/home/activity/activity1.png'),
          title: '同学你心真大，竟然想一篇文书“走天下”',
          text: '文书就像是不见面的interview。因为文书中会提到个人的各项成绩、学术成就、实践经历等，就是向招生官展示自己的绝佳途径。',
          url: ''
        },
        {
          img: require('../assets/img/home/activity/activity2.png'),
          title: '同学你心真大，竟然想一篇文书“走天下”',
          text: '文书就像是不见面的interview。因为文书中会提到个人的各项成绩、学术成就、实践经历等，就是向招生官展示自己的绝佳途径。',
          url: ''
        },
        {
          img: require('../assets/img/home/activity/activity3.png'),
          title: '同学你心真大，竟然想一篇文书“走天下”',
          text: '文书就像是不见面的interview。因为文书中会提到个人的各项成绩、学术成就、实践经历等，就是向招生官展示自己的绝佳途径。',
          url: ''
        },
        {
          img: require('../assets/img/home/activity/activity4.png'),
          title: '同学你心真大，竟然想一篇文书“走天下”',
          text: '文书就像是不见面的interview。因为文书中会提到个人的各项成绩、学术成就、实践经历等，就是向招生官展示自己的绝佳途径。',
          url: ''
        },
        {
          img: require('../assets/img/home/activity/activity1.png'),
          title: '同学你心真大，竟然想一篇文书“走天下”',
          text: '文书就像是不见面的interview。因为文书中会提到个人的各项成绩、学术成就、实践经历等，就是向招生官展示自己的绝佳途径。',
          url: ''
        }
      ],
      stories: [
        {
          img: require('../assets/img/bgPromote/story/story1.png'),
          company: '德勤实习',
          position: '财务审核',
          light: '北理小姐姐冒着零科研风险退出实验室，GPA年级第一的她转专业申请拿下耶鲁带奖offer！',
          time: '2020.06 —— 2021.05',
          grade: '大学三年级'
        },
        {
          img: require('../assets/img/bgPromote/story/story2.png'),
          company: '德勤实习',
          position: '财务审核',
          light: '北理小姐姐冒着零科研风险退出实验室，GPA年级第一的她转专业申请拿下耶鲁带奖offer！',
          time: '2020.06 —— 2021.05',
          grade: '大学三年级'
        },
        {
          img: require('../assets/img/bgPromote/story/story3.png'),
          company: '德勤实习',
          position: '财务审核',
          light: '北理小姐姐冒着零科研风险退出实验室，GPA年级第一的她转专业申请拿下耶鲁带奖offer！',
          time: '2020.06 —— 2021.05',
          grade: '大学三年级'
        },
        {
          img: require('../assets/img/bgPromote/story/story4.png'),
          company: '德勤实习',
          position: '财务审核',
          light: '北理小姐姐冒着零科研风险退出实验室，GPA年级第一的她转专业申请拿下耶鲁带奖offer！',
          time: '2020.06 —— 2021.05',
          grade: '大学三年级'
        },
        {
          img: require('../assets/img/bgPromote/story/story5.png'),
          company: '德勤实习',
          position: '财务审核',
          light: '北理小姐姐冒着零科研风险退出实验室，GPA年级第一的她转专业申请拿下耶鲁带奖offer！',
          time: '2020.06 —— 2021.05',
          grade: '大学三年级'
        },
        {
          img: require('../assets/img/bgPromote/story/story6.png'),
          company: '德勤实习',
          position: '财务审核',
          light: '北理小姐姐冒着零科研风险退出实验室，GPA年级第一的她转专业申请拿下耶鲁带奖offer！',
          time: '2020.06 —— 2021.05',
          grade: '大学三年级'
        },
        {
          img: require('../assets/img/bgPromote/story/story7.png'),
          company: '德勤实习',
          position: '财务审核',
          light: '北理小姐姐冒着零科研风险退出实验室，GPA年级第一的她转专业申请拿下耶鲁带奖offer！',
          time: '2020.06 —— 2021.05',
          grade: '大学三年级'
        },
        {
          img: require('../assets/img/bgPromote/story/story8.png'),
          company: '德勤实习',
          position: '财务审核',
          light: '北理小姐姐冒着零科研风险退出实验室，GPA年级第一的她转专业申请拿下耶鲁带奖offer！',
          time: '2020.06 —— 2021.05',
          grade: '大学三年级'
        }
      ],
      banner1: '',
      maxNumber: 4,
      maxStoryNumber: 8,
      currentPlace: 0,
      selectSchool: [],
      currentType: 0,
      selectedDemo: []
    }
  },
  created () {
    this.banner1 = require('../assets/img/bgPromote/banner1.png')
    this.selectSchool = this.schools[0]
    this.selectedDemo = this.demos[0]
  },
  mounted () {
  },
  methods: {
    changePlace (index) {
      this.currentPlace = index
      this.selectSchool = this.schools[this.currentPlace]
    },
    changeDemoType (index) {
      this.currentType = index
      this.selectedDemo = this.demos[index]
    },
    showMoreDemo () {
      this.maxNumber = 100
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped lang='less'>
.home {
  text-align: center;

  .banner1-div {
    width: 100%;
    // padding: 16px 0 33px;
    background-color: #1BBEB2;
    height: 586px;
    position: relative;

    .banner1 {
      width: 1085px;
      height: 599px;
      margin: 0 auto;
      position: relative;
      text-align: left;
      background-repeat: no-repeat;
      background-size: cover;
      position: absolute;
      top: 67px;
      left: 50%;
      margin-left: -535px;

      .info1-div {
        position: absolute;
        bottom: 65px;
        left: 26px;
        text-align: center;
      }

      .info2-div {
        position: absolute;
        bottom: 65px;
        left: 203px;
        text-align: center;
      }

      .info3-div {
        position: absolute;
        bottom: 65px;
        left: 381px;
        text-align: center;
      }

      .info-number {
        // width: 75px;
        font-size:35px;
        font-family:Biko;
        font-weight:bold;
        line-height:35px;
        color:rgba(33,33,33,1);
        opacity:1;
        // margin-right: 12px;
        // display: inline-block;
        height: 28px;

        span {
            font-size:18px;
            font-family:SourceHanSansCN;
            font-weight:bold;
            line-height:35px;
            color:rgba(33,33,33,1);
            opacity:1;
        }
      }

      .info-text {
        width: 120px;
        font-size:13px;
        font-family:SourceHanSansCN;
        font-weight:bold;
        line-height:16px;
        color:rgba(54,136,132,1);
        opacity:1;
        // display: inline-block;
        height: 28px;
        vertical-align: top;
        margin-top: 15px;
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
    padding: 102px 0 41px;
    background-color: #fff;

    .title {
      font-size:24px;
      font-family:SourceHanSansCN;
      font-weight:bold;
      line-height:24px;
      color:rgba(0,0,0,1);
      opacity:1;
    }

    .guide-item-div {
      list-style: none;
      text-align: center;
      padding: 0;
      margin: 26px auto 47px;
      width: 573px;
      background:#F7FFFE;
      box-shadow:-2px 3px 15px rgba(91,98,97,0.16);
      opacity:1;
      border-radius:83px;

      li {
        opacity: 1;
        display: inline-block;
        color: rgba(57,60,61,1);
        cursor: pointer;
        text-align: center;
        padding: 0 28px;
        width: 77px;
        height: 37px;
        margin: 5px;

        .img {
          width:24px;
          height:24px;
          // background:rgba(255,255,255,1);
          box-shadow:3px 3px 6px rgba(0,0,0,0.16);
          border-radius:50%;
          opacity:1;
          // margin-top: 13px;
          background-repeat: no-repeat;
          background-size: cover;
          display: inline-block;
          margin-right: 10px;
        }

        .text {
          display: inline-block;
          font-size: 16px;
          font-family: SourceHanSansCN;
          font-weight: 500;
          line-height: 37px;
          // margin-top: 13px;
          vertical-align: top;
          height: 24px;
        }
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

    .demos-div {
      width: 900px;
      text-align: center;
      margin: 0 auto;

      .each-demo {
        width: 190px;
        margin: 18px 15px;
        display: inline-block;
        vertical-align: top;
        padding: 28px 0;
        background: #FFFFFF;
        opacity:1;
        border-radius:34px;
        text-align: left;
        height: 296px;

        .demo-img {
          width:125px;
          height:125px;
          background-repeat: no-repeat;
          background-size: contain;
          margin: 0 auto 25px;
        }

        .demo-info-div {
          text-align: center;

          .demo-number {
            font-size:35px;
            font-family:Biko, SourceHanSansCN;
            font-weight:bold;
            line-height:35px;
            color:#212121;
            opacity:1;
            margin: 25px 0 20px;
          }

          .demo-text {
            width: 130px;
            text-align: left;
            font-size:13px;
            font-family:SourceHanSansCN, Campton;
            font-weight:400;
            line-height:20px;
            color:rgba(51,51,51,1);
            opacity:1;
            margin: 0 auto;
          }

          .line3 {
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
            overflow: hidden;
          }
        }
      }

      .more-demos {
        font-size:15px;
        font-family:PingFang SC;
        font-weight:500;
        color:rgba(57,60,61,1);
        opacity:1;
        cursor: pointer;

        width: 142px;
        text-align: center;
        margin: 17px auto 0;
        height: 36px;
        line-height: 36px;
        border: 1px solid #2aa7aa;
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
            width: 18px;
            height: 8px;
            display: inline-block;
            cursor: pointer;
            background-image: url('../assets/img/dreamSchool/openArrow.png');
            background-repeat: no-repeat;
            background-size: contain;
        }
      }
    }
  }

  .banner3-div {
    padding: 54px 0 33px;
    background-color: #EDEFF4;

    .title {
      font-size:24px;
      font-family:SourceHanSansCN;
      font-weight:bold;
      line-height:24px;
      color:rgba(60,60,60,1);
      opacity:1;
      margin-bottom: 41px;
    }

    .story-div {
      width: 1130px;
      text-align: center;
      margin: 0 auto;

      .each-story {
        width: 245px;
        margin: 42px 15px;
        display: inline-block;
        vertical-align: top;

        .story-img {
          width:100%;
          height:157px;
          background-repeat: no-repeat;
          background-size: cover;
          margin-bottom: 20px;
          position: relative;

          .company {
            font-size:14px;
            font-family:SourceHanSansCN;
            font-weight:bold;
            line-height:33px;
            color:rgba(255,255,255,1);
            opacity:1;
            height:33px;
            background:rgba(40,173,162,.86);
            position: absolute;
            bottom: 0;
            width: 100%;
          }
        }

        .story-info-div {
          padding-top: 4px;
          text-align: left;
          overflow: hidden;

          .story-text {
            font-size:15px;
            font-family:SourceHanSansCN;
            font-weight:500;
            line-height:23px;
            color:rgba(0,0,0,1);
            opacity:1;
            margin-top: 2px;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
            overflow: hidden;
          }

          .time-div {
            margin-top: 20px;
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
}
</style>
