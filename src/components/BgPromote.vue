<template>
  <div class='home'>

    <div v-if="!isMobile" class="web-div">
      <div class='banner1-div'>
        <div class='banner1' :style="{backgroundImage:'url(' + banner1 + ')'}">
          <div class='info1-div'>
            <div class='info-number'>
              <animate-number class='info-number' from="1" to="4800" duration="3000" style="font-size: 35px;"></animate-number>
              <span> 个</span></div>
            <div class='info-text'>棕榈种子学员共拿到 背景提升 offer</div>
          </div>
          <div class='info2-div'>
            <animate-number class="info-number" from="1" to="83" duration="3000" style="width: auto; display: inline-block"></animate-number>
            <div class='info-number' style="width: auto; display: inline-block;">%</div>
            <div class='info-text'>棕榈种子学员拿到 背景提升 offer </div>
          </div>
          <div class='info3-div'>
            <!-- <div class='info-number'>85%</div> -->
            <animate-number class="info-number" from="1" to="57" duration="3000" style="width: auto; display: inline-block"></animate-number>
            <div class='info-number' style="width: auto; display: inline-block;">%</div>
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
                <div class='demo-number'>
                  <animate-number class="number" from="1" :to="item.number" duration="3000" :key="item.number"></animate-number>
                  <span class="number">{{ item.number2 }}</span>
                  <span>份</span></div>
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
        <div class="title">部分成功案例</div>
        <div class="story-div">
          <template v-for="(item, index) in selectedStory" >
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

    <div v-if="isMobile" class="mobile-div">
      <div class='banner1-div'>
        <div class="banner1" :style="{backgroundImage:'url(' + banner1 + ')'}"></div>
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
        <div class="title">部分成功案例</div>
        <div class="story-div">
          <template v-for="(item, index) in selectedStory" >
            <div class="each-story" :key="index">
              <div class="story-img" :style="{backgroundImage:'url(' + item.img + ')'}">
                <div class="company">{{ item.company }}</div>
              </div>
              <div class="story-info-div">
                <div class="story-text">岗&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;位：{{ item.position }}</div>
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
          number: '5000+'
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
            number: '278',
            number2: '+',
            text: '德勤、普华永道、安永、毕马威等顶级会计审计 offer',
            bgColor: 'rgba(119,183,235,.19)'
          },
          {
            img: require('../assets/img/bgPromote/demo/2.png'),
            number: '164',
            number2: '+',
            text: 'JP Morgen、Morgan Stanley、中金、中信等顶级投行券商 offer',
            bgColor: 'rgba(107,219,210,.19)'
          },
          {
            img: require('../assets/img/bgPromote/demo/3.png'),
            number: '28',
            number2: '+',
            text: '中伦、金杜等八大红圈律所 offer',
            bgColor: 'rgba(221,175,103,.19)'
          },
          {
            img: require('../assets/img/bgPromote/demo/4.png'),
            number: '150',
            number2: '+',
            text: '麦肯锡、贝恩等顶级咨询公司 offer ',
            bgColor: 'rgba(239,223,104,.19)'
          },
          {
            img: require('../assets/img/bgPromote/demo/5.png'),
            number: '556',
            number2: '+',
            text: '阿里巴巴、腾讯等 BAT 互联网公司 offer',
            bgColor: 'rgba(89,157,149,.19)'
          },
          {
            img: require('../assets/img/bgPromote/demo/6.png'),
            number: '187',
            number2: '+',
            text: '汇丰银行、平安保险等银行保险类公司 offer',
            bgColor: 'rgba(239,223,104,.19)'
          },
          {
            img: require('../assets/img/bgPromote/demo/7.png'),
            number: '291',
            number2: '+',
            text: '联合国、世界贸易组织、商务部等国际组织政府高校智库等 offer',
            bgColor: 'rgba(224,117,65,.19)'
          },
          {
            img: require('../assets/img/bgPromote/demo/8.png'),
            number: '314',
            number2: '+',
            text: '联合利华、欧莱雅、奥美、中央电视台等快消广告公关传媒类 offer',
            bgColor: 'rgba(221,175,103,.19)'
          },
          {
            img: require('../assets/img/bgPromote/demo/9.png'),
            number: '80',
            number2: '+',
            text: '华为、IBM 等硬件 IT 公司 offer',
            bgColor: 'rgba(119,183,235,.19)'
          },
          {
            img: require('../assets/img/bgPromote/demo/10.png'),
            number: '455',
            number2: '+',
            text: '外研社、ABC 美好社会公益、SEED 等教育、NGO/GO offer',
            bgColor: 'rgba(107,219,210,.19)'
          },
          {
            img: require('../assets/img/bgPromote/demo/11.png'),
            number: '26',
            number2: '+',
            text: '伦敦博物馆、广州大剧院艺术类 offer',
            bgColor: 'rgba(221,175,103,.19)'
          }
        ],
        [
          {
            img: require('../assets/img/bgPromote/demo/12.png'),
            number: '173',
            number2: '+',
            text: '麻省理工大学、哈佛大学等世界知名高校科研类 offer',
            bgColor: 'rgba(119,183,235,.19)'
          },
          {
            img: require('../assets/img/bgPromote/demo/13.png'),
            number: '242',
            number2: '+',
            text: '清华大学，北京大学等国内知名高校科研类 offer',
            bgColor: 'rgba(107,219,210,.19)'
          },
          {
            img: require('../assets/img/bgPromote/demo/14.png'),
            number: '43',
            number2: '+',
            text: '中国科学院、欧洲核子研究院等知名研究所项目科研 offer',
            bgColor: 'rgba(221,175,103,.19)'
          }
        ],
        [
          {
            img: require('../assets/img/bgPromote/demo/15.png'),
            number: '188',
            number2: '+',
            text: '剑桥大学、哥伦比亚大学等世界知名高校海外交换 offer',
            bgColor: 'rgba(119,183,235,.19)'
          },
          {
            img: require('../assets/img/bgPromote/demo/16.png'),
            number: '53',
            number2: '+',
            text: '清华大学、中国科学院大学等国内高校研究所交换 offer',
            bgColor: 'rgba(107,219,210,.19)'
          }
        ],
        [
          {
            img: require('../assets/img/bgPromote/demo/17.png'),
            number: '280',
            number2: '+',
            text: '达沃斯经济论坛、联合国志愿者等公益类 offer',
            bgColor: 'rgba(119,183,235,.19)'
          }
        ]
      ],
      intros: [
        {
          logo: require('../assets/img/home/intros/intro1.png'),
          title: '全球专业导师网络',
          text: '7000+世界名校毕业生导师，精准辅导200+多个专业， 专业标准化管理，半年度导师培训'
        },
        {
          logo: require('../assets/img/home/intros/intro2.png'),
          title: '资深外籍语言导师',
          text: '累计修改文书篇幅10,000+，毕业于世界知名高校， 拥有学校招生、教育、语言学背景'
        },
        {
          logo: require('../assets/img/home/intros/intro3.png'),
          title: '全能主导师',
          text: '10,000+ Offer申请经历和案例，平均申请成功率99.3%，全程指导，答疑解惑'
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
        [
          {
            img: require('../assets/img/bgPromote/story/sx/1.jpg'),
            company: '波士顿咨询',
            position: '咨询助理实习生',
            light: 'Tier 1咨询公司，创立“波士顿矩阵“，四大业务职能是企业策略、信息技术、企业组织、营运效益，毕业生起薪25-30w/年。',
            time: '6个月',
            grade: '大三',
            type: '线下'
          },
          {
            img: require('../assets/img/bgPromote/story/sx/2.jpg'),
            company: '罗兰贝格',
            position: '咨询助理实习生',
            light: '来自德国的Tier 2咨询公司中的头部公司，战略管理咨询公司的全球5大顶级公司之一，毕业生起薪18-20w/年。',
            time: '2个月',
            grade: '大三',
            type: '线下'
          },
          {
            img: require('../assets/img/bgPromote/story/sx/3.jpg'),
            company: '安永',
            position: '审计实习生',
            light: '世界四大会计师事务所之一，提供审计、税务及财务交易咨询等服务，至今已有一百多年的历史。目前在北京、香港、上海、成都、武汉、深圳、广州、大连、苏州、青岛、杭州、天津、厦门、澳门、南京等15个城市设有办事处，共有员工超过9,000人。',
            time: '1个月',
            grade: '大三',
            type: '线下'
          },
          {
            img: require('../assets/img/bgPromote/story/sx/4.jpg'),
            company: '德勤',
            position: '德勤俱乐部学员',
            light: '专为大二、大三以及研一、研二在校学生设计的发展项目，通过导师计划、课堂培训和职场实习，培养学生相关职场技能，加入德勤俱乐部的学生，将在之后的寒暑假进入到世界四大会计事务所之一的德勤会计事务所实习。',
            time: '储备型项目，持续1-2年',
            grade: '大二',
            type: '线上+线下'
          },
          {
            img: require('../assets/img/bgPromote/story/sx/5.jpg'),
            company: '腾讯',
            position: '设计岗暑期实习生',
            light: '腾讯科技股份有限公司是中国大陆规模最大的互联网公司，腾讯业务拓展至社交、娱乐、金融、资讯、工具和平台等不同领域。目前，腾讯拥有中国大陆使用人数最多的社交软件腾讯QQ和微信，以及最大的网络游戏社区腾讯游戏',
            time: '2个月',
            grade: '大三',
            type: '线下'
          },
          {
            img: require('../assets/img/bgPromote/story/sx/6.jpg'),
            company: '百度',
            position: 'IDL算法实习生',
            light: '全球最大的中文搜索引擎、最大的中文网站，拥有数千名研发工程师，是中国乃至全球最为优秀的技术团队，掌握着世界上最为先进的搜索引擎技术，使百度成为中国掌握世界尖端科学核心技术的中国高科技企业',
            time: '8个月',
            grade: '大三',
            type: '线下'
          },
          {
            img: require('../assets/img/bgPromote/story/sx/7.jpg'),
            company: '网易游戏',
            position: '游戏运营实习生',
            light: '互联网大厂——网易的品牌价值已超过13亿美元，网易游戏已发展为中国自主研发第一网游公司，并跻身全球七大游戏公司之一。',
            time: '2个月',
            grade: '大三',
            type: '线下'
          },
          {
            img: require('../assets/img/bgPromote/story/sx/8.jpg'),
            company: '京东',
            position: '电商事业部实习生',
            light: '中国自营式电商企业，旗下设有京东商城、京东金融、拍拍网、京东智能、O2O及海外事业部等。',
            time: '6个月',
            grade: '大二',
            type: '线上 '
          },
          {
            img: require('../assets/img/bgPromote/story/sx/9.jpg'),
            company: '字节跳动',
            position: 'Android开发实习生',
            light: '字节跳动成立于2012年3月，打造了今日头条、火山小视频、抖音（其海外名称 Tik Tok）和西瓜视频等；公司的产品和服务已覆盖全球150个国家和地区，每天有超过6亿用户在使用字节跳动的产品。',
            time: '2个月',
            grade: '大三',
            type: '线下'
          },
          {
            img: require('../assets/img/bgPromote/story/sx/10.jpg'),
            company: '欧莱雅',
            position: '市场与数字营销实习生',
            light: '世界著名的化妆品生产厂商，创立于1907年。现各类化妆品畅销全世界，广受欢迎。除化妆品以外，该集团还经营高档的消费品，并从事制药和皮肤病研究。',
            time: '2个月',
            grade: '大三',
            type: '线下'
          },
          {
            img: require('../assets/img/bgPromote/story/sx/11.jpg'),
            company: '凤凰网',
            position: '内容运营实习生',
            light: '凤凰网是全球领先的跨平台网络新媒体公司，整合旗下综合门户凤凰网、手机凤凰网和凤凰视频三大平台，为主流华人提供互联网、无线通信、电视网的三网融合无缝衔接的新媒体优质内容与服务',
            time: '2个月',
            grade: '大二',
            type: '线下'
          },
          {
            img: require('../assets/img/bgPromote/story/sx/12.jpg'),
            company: '电通安吉斯',
            position: '媒介实习生',
            light: '安吉斯媒体是全球领先的以媒体和数字营销为核心的传播集团，2014年1月份，合并为电通安吉斯（上海）投资有限公司。总部位于伦敦，业务遍及全球145个国家和地区',
            time: '3个月',
            grade: '大二',
            type: '线下'
          },
          {
            img: require('../assets/img/bgPromote/story/sx/13.jpg'),
            company: '天风证券',
            position: '债券条线质量控制部实习生',
            light: '在全国重点区域和城市设有15家分公司及百余家证券营业部；拥有多家全资及控股一级子公司，包括一家境外子公司，员工人数超过3000人，提供立足全球视野、辐射全国的综合金融服务。',
            time: '3个月',
            grade: '大三',
            type: '线上'
          }
        ],
        [
          {
            img: require('../assets/img/bgPromote/story/ky/1.jpg'),
            company: '耶鲁大学',
            position: '科研助理实习',
            light: '世界著名私立研究型大学，全美第三古老的高等学府，也是常春藤联盟成员，在生物领域具备世界领先水平，耶鲁大学的教授阵容、课程安排、教学实施方面堪称世界一流，科研实力强劲，是不少学子心中的神圣学术殿堂。',
            time: '2个月',
            type: '线下',
            grade: '大三'
          },
          {
            img: require('../assets/img/bgPromote/story/ky/2.jpg'),
            company: '卡耐基梅隆大学',
            position: '科研助理实习',
            light: '美国25所新常春藤盟校之一。计算机、机器人科学、理学、美术及工业管理都是举世公认的一流专业。CMU位列2020U.S. News美国最佳大学排名第25名，包括最佳创新大学第7位，商科全美第5，工程院第6（本科），计算机学院第2',
            time: '12周',
            type: '线下',
            grade: '大三'
          },
          {
            img: require('../assets/img/bgPromote/story/ky/3.jpg'),
            company: '芝加哥大学',
            position: '暑期科研实习',
            light: '世界顶尖私立研究型大学，常年稳居多个世界大学排名前十。创办了美国第一所国家实验室阿贡国家实验室和著名的费米实验室，奠定了芝大在自然科学界的重要地位。诞生了芝加哥经济学派等众多知名的芝加哥学派，创立了法律经济学，是经济学、法学等社会科学学科的世界级学术重镇。',
            time: '12周',
            type: '线下',
            grade: '大三'
          },
          {
            img: require('../assets/img/bgPromote/story/ky/4.jpg'),
            company: '加州大学洛杉矶分校CSST项目',
            position: '暑期科研实习',
            light: 'CSST是由加州大学洛杉矶分校发起，和全国十几所顶尖大学合作的暑期本科生研究培训项目。入选该项目的学生可以接受为期十周的科研训练，是一段非常正式的科研经历。加州大学洛杉矶分校是世界著名的公立研究型大学，全美TOP20名校。',
            time: '10周',
            type: '线下',
            grade: '大三'
          },
          {
            img: require('../assets/img/bgPromote/story/ky/5.jpg'),
            company: '南加州大学',
            position: '科研助理实习',
            light: '陈博士实验室目前正在研究：（1）APOBEC系列细胞脱胺（DNA突变体），参与对病毒（艾滋病毒， HPV，HBV）和癌症，（2）病毒性肿瘤蛋白和细胞肿瘤抑制剂，（3）环状hexamer/双氧塞纳血吸血器（纳米机器），以及原始酶聚合酶和其他DNA复制和修复涉及基因组稳定性和细胞增殖的蛋白质，（4）纳米颗粒组装，用于靶向药物输送。',
            time: '暑假至毕业',
            type: '线下',
            grade: '大三'
          },
          {
            img: require('../assets/img/bgPromote/story/ky/6.jpg'),
            company: '加州大学欧文分校Inspire项目',
            position: '暑期科研实习',
            light: '加州大学欧文分校拥有优良的地理位置，极佳的学习生活环境，以及橘郡大量高科技企业的支持；该校成为加州大学系统中成长最快的分校，改校较强的研究实力也使它的研究生院进入全美最佳研院行列，在全美排名前50。',
            time: '10周',
            type: '线下',
            grade: '大三'
          },
          {
            img: require('../assets/img/bgPromote/story/ky/7.jpg'),
            company: '圣母大学iSURE项目',
            position: '暑期科研实习',
            light: '圣母大学建于1842年，历年来稳居全美20所最顶尖学府之列。在最新的2020年U.S. News美国最佳大学排名中，圣母大学与范德堡大学并列全美第15名。',
            time: '8周',
            type: '线下',
            grade: '大三'
          },
          {
            img: require('../assets/img/bgPromote/story/ky/8.jpg'),
            company: 'MITACS',
            position: '暑期科研实习',
            light: 'Mitacs项目的官方名称是“加拿大信息技术与综合系统数学组织”，是一个为期三个月的本科科研实习项目，申请成功者会获得加拿大政府和中国国家留学基金委提供全额资。加拿大有60多所高校都参与了这个项目，其中包括多伦多大学、麦吉尔大学以及哥伦比亚大不列颠等加拿大名校，提供了丰富的科研课题。',
            time: '12周',
            type: '线下',
            grade: '大三'
          },
          {
            img: require('../assets/img/bgPromote/story/ky/9.jpg'),
            company: '香港科技大学',
            position: '本科访问学生科研实习',
            light: '一所亚洲顶尖、国际知名的研究型大学。该校以科技和商业管理为主、人文及社会科学并重，尤以商科和工科见长。UGVIS项目走正式申请流程，学校提供赴港签注申请协助，申请时接受多种英语成绩证明（雅思、托福、四六级、PTE等）',
            time: '8周',
            type: '线下'
          },
          {
            img: require('../assets/img/bgPromote/story/ky/10.jpg'),
            company: '西澳大学Summer Down Under项目',
            position: '暑期科研实习',
            light: '西澳大学于1911年创校于珀斯，是澳大利亚八校联盟成员之一，也是澳大利亚最具历史、代表性和实力的著名顶尖研究型大学之一。',
            time: '8周',
            type: '线下',
            grade: '大三'
          },
          {
            img: require('../assets/img/bgPromote/story/ky/11.jpg'),
            company: '中国科学院神经科学研究所',
            position: '科研助理实习',
            light: '神经科学研究所致力于神经科学基础研究的各个领域，包括分子、细胞和发育神经生物学、系统和认知神经科学科学、以及脑疾病机理和诊治手段研发。',
            time: '暑假至毕业',
            type: '线下',
            grade: '大三'
          },
          {
            img: require('../assets/img/bgPromote/story/ky/12.jpg'),
            company: '西湖大学科研',
            position: '暑期科研助理实习',
            light: '借鉴美国加州理工学院的规模和斯坦福大学的办学理念，由杨振宁任西湖大学校董会名誉主席，钱颖一教授为校董会主席，施一公教授担任西湖大学首任校长。设有生命科学学院、理学院、工学院等3个学院。该学校教授皆为领域内具有影响力或者知名教授。',
            time: '12周',
            type: '线下',
            grade: '大三'
          }
        ],
        [
          {
            img: require('../assets/img/bgPromote/story/jljh/1.jpg'),
            company: '哈佛大学',
            position: '暑校课程',
            light: '哈佛大学坐落于美国马萨诸塞州波士顿都市区剑桥市，是一所享誉世界的私立研究型大学，是著名的常春藤盟校成员。',
            time: '暑期',
            type: '线下',
            grade: '大二'
          },
          {
            img: require('../assets/img/bgPromote/story/jljh/2.jpg'),
            company: '剑桥大学',
            position: '暑校课程',
            light: '英语世界中第二古老的大学，世界顶尖的公立研究型大学，英国G5超级精英大学，采用书院联邦制。',
            time: '暑假',
            type: '线下',
            grade: '大一'
          },
          {
            img: require('../assets/img/bgPromote/story/jljh/3.jpg'),
            company: '宾夕法尼亚大学',
            position: '学期交换',
            light: '位于宾夕法尼亚州最大城市费城，是一所全球顶尖的私立研究型大学，著名的八所常春藤盟校之一',
            time: '一学期',
            type: '线下',
            grade: '大三'
          },
          {
            img: require('../assets/img/bgPromote/story/jljh/4.jpg'),
            company: '哥伦比亚大学',
            position: '学期交换',
            light: '哥大，是一所位于美国纽约曼哈顿的世界顶级私立研究型大学，为美国大学协会的十四所创始院校之一，常春藤盟校之一。哥大名列2020U.S. News美国最佳大学排名第3（本硕博综合），2020U.S. News世界大学排名第7名。',
            time: '一学期',
            type: '线下',
            grade: '大二'
          },
          {
            img: require('../assets/img/bgPromote/story/jljh/5.jpg'),
            company: '加州大学伯克利分校',
            position: '学期交换',
            light: '坐落在美国旧金山湾区的伯克利市，是世界著名研究型大学和最顶尖公立大学，在学术界享有盛誉，2020年U.S. News世界大学排名第4位、世界大学学术排名第5位。',
            time: '一学期',
            type: '线下',
            grade: '大三'
          },
          {
            img: require('../assets/img/bgPromote/story/jljh/6.jpg'),
            company: '伦敦大学学院',
            position: '暑校课程',
            light: '伦敦大学学院是誉满全球的顶尖综合性研究型大学，G5超级精英大学，位于伦敦市中心。',
            time: '暑期',
            type: '线下',
            grade: '大二'
          },
          {
            img: require('../assets/img/bgPromote/story/jljh/7.jpg'),
            company: '伦敦政治经济学院',
            position: '暑校课程',
            light: '享誉全球的顶尖公立研究型大学，为伦敦大学联盟成员和罗素大学集团成员，被誉为金三角名校和G5超级精英大学',
            time: '暑期',
            type: '线下',
            grade: '大一'
          },
          {
            img: require('../assets/img/bgPromote/story/jljh/8.jpg'),
            company: '曼彻斯特大学 ',
            position: '学期交换',
            light: '曼彻斯特大学始建于1824年，是英国著名的六所红砖大学之首，也是英国罗素大学集团创始成员之一。曼大在2020QS世界大学排名中位居世界第27位，世界30强顶级名校。',
            time: '一学期',
            type: '线下',
            grade: '大三'
          },
          {
            img: require('../assets/img/bgPromote/story/jljh/9.jpg'),
            company: '康奈尔大学',
            position: '学期交换',
            light: '康奈尔大学坐落于纽约州的伊萨卡,是著名的常青藤盟校成员,世界20强顶级名校。',
            time: '一学期',
            type: '线下',
            grade: '大三'
          },
          {
            img: require('../assets/img/bgPromote/story/jljh/10.jpg'),
            company: '新加坡国立大学',
            position: '暑期工作坊',
            light: '新加坡国立大学是新加坡首屈一指的世界级顶尖大学。为项目制暑期学校，会有一个group project的成果',
            time: '暑期',
            type: '线下',
            grade: '大二'
          },
          {
            img: require('../assets/img/bgPromote/story/jljh/11.jpg'),
            company: '北京大学-芝加哥大学国际政策暑期项目',
            position: '暑校课程',
            light: '项目将由北京大学与芝加哥大学资深师资共同授课，致力于培养能够从全球视角开展政策分析与实证研究的优秀人才。',
            time: '暑期',
            type: '线上',
            grade: '大二'
          },
          {
            img: require('../assets/img/bgPromote/story/jljh/12.jpg'),
            company: '中国科学院',
            position: '夏令营',
            light: '中国自然科学最高学术机构，为期一周，适合自然科学相关专业大二的学生申请。',
            time: '一周',
            type: '线下',
            grade: '大二'
          }
        ],
        [
          {
            img: require('../assets/img/bgPromote/story/zyz/1.jpg'),
            company: 'ABC美好社会咨询社',
            position: '咨询志愿者',
            light: 'ABC汇聚、引领、发展专业志愿者为公益事业供咨询服务、解决社会组织人才匮乏的问题。志愿者来自顶尖咨询公司、国内外知名企业及著名高校。',
            time: '6个月',
            type: '线上+线下',
            grade: '大三'
          },
          {
            img: require('../assets/img/bgPromote/story/zyz/2.jpg'),
            company: '联合国气候变化大会Youth4Climate中国青年代表团',
            position: '志愿者',
            light: 'Youth4Climate气候变化青年行动是在联合国亚太经济与社会委员会(UN ESCAP)、联合国气候变化倡导与教育工作委员会, 以及中国民间气候变化行动网络(CCAN)等国内外机构指导和支持下，目前由中国青年发起的规模最大，影响力最大的关注气候变化的志愿者项目。',
            time: '4个月',
            type: '线上+线下',
            grade: '大二大三'
          },
          {
            img: require('../assets/img/bgPromote/story/zyz/3.jpg'),
            company: '联合国全球聚焦远程培养计划',
            position: '培训生',
            light: '由联合国协会世界联合会于2020年发起，是联合国首次集全球联合国机构之力打造的线上青年科研项目（原本为瑞士线下，受疫情影响改为线上）。UN Spotlight旨在全球140余个成员国中选拔优秀的青年学员代表，以可持续发展目标为主线，协同外交领导力与国际就业能力培养，在线接受来自联合国开发计划署、环境署、世贸组织、难民署、国际红十字会等热门国际组织现任官员的学术指导，针对可持续发展目标开展高强度浸入式科研，为世界贡献青年人的智慧。',
            time: '暑期',
            type: '线上',
            grade: '大二'
          },
          {
            img: require('../assets/img/bgPromote/story/zyz/4.jpg'),
            company: '美丽中国',
            position: '陪读项目导师',
            light: '通过招募陪读导师，和美丽中国项目老师学生进行一对一匹配，用一个月的时间，读一本书，每周一个电话，一封读书笔记，培养学生的阅读兴趣，拓宽学生的视野，和学生一起长大，很能体现社会责任感。',
            time: '1个月',
            type: '线上',
            grade: '大一'
          },
          {
            img: require('../assets/img/bgPromote/story/zyz/5.jpg'),
            company: '中南屋',
            position: '志愿者',
            light: '中南屋是一家致力于公民教育的社会企业，关注一带一路、全球可持续发展，以走进非洲为己任，志愿者有机会参与非洲环境，医疗，教育，女性权益等调研，了解并帮助非洲NGO的发展。',
            time: '6个月',
            type: '线上',
            grade: '大二'
          },
          {
            img: require('../assets/img/bgPromote/story/zyz/6.jpg'),
            company: 'C公益',
            position: '新媒体社群运营实习',
            light: '原称宁夏Change青年公益组织，是一家致力于通过朋辈教育和资源引进的方式陪伴宁夏乃至西北地区高中生及以上青年成长和发展的平台型教育公益组织。希望陪伴青年积极、独立、有担当地成长，让每一个宁夏乃至西北地区的青年都可以享有充分的发展机会。是在宁夏民政厅注册的首家以青年成长和发展领域为核心的社会组织。',
            time: '1个月',
            type: '线上',
            grade: '大二'
          },
          {
            img: require('../assets/img/bgPromote/story/zyz/7.jpg'),
            company: '健心家园',
            position: '心理训练营助理实习',
            light: '健心家园APP是一个心理咨询平台，致力于帮助抑郁症焦虑症患者提供及时、方便的心理咨询服务。志愿者将一线接触心理疗愈。',
            time: '6个月',
            type: '线上',
            grade: '大二'
          },
          {
            img: require('../assets/img/bgPromote/story/zyz/8.jpg'),
            company: '社会责任家',
            position: '设计推广部志愿者',
            light: '社会责任家是由一群关注中国社会责任与联合国可持续发展目标（SDGs）的海内外青年搭建的平台，有较多NGO项目实践合作机会。',
            time: '6个月',
            type: '线上',
            grade: '大二'
          }
        ]
      ],
      banner1: '',
      maxNumber: 4,
      maxStoryNumber: 8,
      currentPlace: 0,
      selectSchool: [],
      currentType: 0,
      selectedDemo: [],
      selectedStory: []
    }
  },
  created () {
    this.banner1 = this.isMobile ? require('../assets/img/bgPromote/mobile/banner1.png') : require('../assets/img/bgPromote/banner1.png')
    this.selectSchool = this.schools[0]
    this.selectedDemo = this.demos[0]
    this.selectedStory = this.stories[0]
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
      this.selectedDemo = []
      this.selectedDemo = this.demos[index]
      this.selectedStory = this.stories[index]
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

  .web-div {
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
      background-color: #fff;

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
              line-height:28px;
              color:rgba(255,255,255,1);
              opacity:1;
              // height:33px;
              height: auto;
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

  .mobile-div {
    .banner1-div {
      width: 100%;
      // padding: 16px 0 33px;
      background-color: #1BBEB2;
      height: 6.293333rem;
      position: relative;

      .banner1 {
        width: 8.986667rem;
        height: 6.8rem;
        margin: 0 auto;
        position: relative;
        text-align: left;
        background-repeat: no-repeat;
        background-size: cover;
        position: absolute;
        top: .8rem;
        left: 50%;
        margin-left: -4.48rem;

        .info1-div {
          position: absolute;
          bottom: 60px;
          left: 28px;
          text-align: center;
        }

        .info2-div {
          position: absolute;
          bottom: 60px;
          left: 203px;
          text-align: center;
        }

        .info3-div {
          position: absolute;
          bottom: 60px;
          left: 375px;
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
        }

        .info-text {
          width: 116px;
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
      padding: 1.146667rem 0 1.52rem;
      background-color: #fff;

      .title {
        font-size:.426667rem;
        font-family:SourceHanSansCN;
        font-weight:bold;
        line-height:.426667rem;
        color:rgba(0,0,0,1);
        opacity:1;
      }

      .guide-item-div {
        list-style: none;
        text-align: center;
        padding: 0;
        margin: .506667rem auto .506667rem;
        width: 8.933333rem;
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
          padding: 0 .4rem;
          width: 1.313333rem;
          height: .746667rem;
          margin: .053333rem;

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
            font-size: .32rem;
            font-family: SourceHanSansCN;
            font-weight: 500;
            line-height: .746667rem;
            // margin-top: 13px;
            vertical-align: top;
            height: .64rem;
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
        // width: 900px;
        text-align: center;
        margin: 0 auto;

        .each-demo {
          width: 3.546667rem;
          margin: .4rem .266667rem;
          display: inline-block;
          vertical-align: top;
          padding: .533333rem 0;
          background: #FFFFFF;
          opacity:1;
          border-radius:.906667rem;
          text-align: left;
          height: 5.52rem;

          .demo-img {
            width:2.346667rem;
            height:2.346667rem;
            background-repeat: no-repeat;
            background-size: contain;
            margin: 0 auto .453333rem;
          }

          .demo-info-div {
            text-align: center;

            .demo-number {
              font-size:.64rem;
              font-family:Biko, SourceHanSansCN;
              font-weight:bold;
              line-height:.64rem;
              color:#212121;
              opacity:1;
              margin: .453333rem 0 .32rem;
            }

            .demo-text {
              width: 2.746667rem;
              text-align: left;
              font-size:.32rem;
              font-family:SourceHanSansCN, Campton;
              font-weight:400;
              line-height:.426667rem;
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
          font-size:.32rem;
          font-family:PingFang SC;
          font-weight:500;
          color:rgba(57,60,61,1);
          opacity:1;
          cursor: pointer;

          width: 2.693333rem;
          text-align: center;
          margin: .213333rem auto 0;
          height: .746667rem;
          line-height: .746667rem;
          border: 1px solid #2aa7aa;
          border-radius: .56rem;

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
              width: .346667rem;
              height: .16rem;
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
      padding: 1.013333rem 0 33px;
      background-color: #EDEFF4;

      .title {
        font-size:24px;
        font-family:SourceHanSansCN;
        font-weight:bold;
        line-height:24px;
        color:rgba(60,60,60,1);
        opacity:1;
        margin-bottom: .346667rem;
      }

      .story-div {
        // width: 1130px;
        text-align: center;
        margin: 0 auto;

        .each-story {
          width: 4.16rem;
          margin: .366667rem .133333rem;
          display: inline-block;
          vertical-align: top;

          .story-img {
            width:100%;
            height:2.586667rem;
            background-repeat: no-repeat;
            background-size: cover;
            margin-bottom: .426667rem;
            position: relative;

            .company {
              font-size:.32rem;
              font-family:SourceHanSansCN;
              font-weight:bold;
              line-height:.533333rem;
              color:rgba(255,255,255,1);
              opacity:1;
              // height:33px;
              height: auto;
              background:rgba(40,173,162,.86);
              position: absolute;
              bottom: 0;
              width: 100%;
            }
          }

          .story-info-div {
            // padding-top: .106667rem;
            text-align: left;
            overflow: hidden;

            .story-text {
              font-size:.32rem;
              font-family:SourceHanSansCN;
              font-weight:500;
              line-height:.426667rem;
              color:rgba(0,0,0,1);
              opacity:1;
              margin-top: .053333rem;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 3;
              overflow: hidden;
            }

            .time-div {
              margin-top: .4rem;
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
}
</style>
