<template>
  <div class="ability">
    <!-- <remote-css rel="stylesheet" href="../assets/third/carousel/owl.theme.css"></remote-css>
    <remote-css rel="stylesheet" href="../assets/third/carousel/owl.carousel.css"></remote-css> -->
    <div v-if="!isMobile" class="web-div">
      <div class="banner1-div">
        <div class="banner1" :style="{backgroundImage:'url(' + banner1 + ')'}">
        </div>
      </div>

      <div class="menu" style="margin: 72px auto 54px;">
        <ul class="guide-item-div" v-if="false">
          <li v-for="(item, index) in types" :key="item.name" @click="changeType(index)" :class="{ 'guide-bg-colors' : index == currentType }">
            <div class="img" :style="{backgroundImage:'url(' + (index == currentType ? item.img1 : item.img) + ')'}"></div>
            <div class="text">{{ item.name }}</div>
          </li>
        </ul>
      </div>

      <div class="walnut" v-show="currentType == 0">
        <div class="banner3-div">
          <div class="banner3" :style="{backgroundImage:'url(' + banner3 + ')'}">
            <div class="right-div">
              <div class="title1">专业提供雅思、托福、GRE、GMAT 分手服务</div>
              <div class="bg-teacher-div">
                <div class="number">100<span>%</span></div>
                <div class="number-text">海外背景老师</div>
              </div>
              <div class="all-student-div">
                <div class="number">7000+<span>名</span></div>
                <div class="number-text">海外背景老师</div>
              </div>
              <div class="title3"><span>三位一体</span> 全方位服务模式</div>
            </div>
          </div>
        </div>

        <div class="banner7-div">
          <div class="title">辅导成果</div>
          <div class="title2">截至目前为止，我们辅导人数高达 6000+ 人次，辅导成果如下：</div>
          <div v-for="item in results" :key="item.img" class="result-div">
            <div class="result-title">{{ item.title1 }}</div>
            <div class="result-title2">{{ item.title2 }}</div>
            <div class="each-result"  :style="{backgroundImage:'url(' + item.img + ')'}"></div>
          </div>
        </div>

        <div class="banner4-div">
          <div class="title">三位一体服务模式</div>
          <div class="title2">班级配有授课老师、答疑助教与班主任，从教学、课后解答、日常监督三方面，全方位陪伴同学完成备考。</div>
          <div class="three-to-one-div">
            <div class="each1 each">
              <div class="each-title">名校背景老师</div>
              <div class="each-text">提升学生英语能力</div>
              <div class="each-text">传授提分方法技巧</div>
              <div class="each-text">解答学生课堂疑问</div>
            </div>
            <div class="each2 each">
              <div class="each-title">答疑助教</div>
              <div class="each-text">每日定时群内答疑解惑</div>
              <div class="each-text">每周定期发送答疑集锦</div>
              <div class="each-text">解答学生备考课后问题</div>
            </div>
            <div class="each3 each">
              <div class="each-title">班主任</div>
              <div class="each-text">日常督促学生直播上课</div>
              <div class="each-text">每周回访学生课程体验</div>
              <div class="each-text">及时关怀学生备考状态</div>
            </div>
          </div>
        </div>

        <div class="banner6-div">
          <div class="title">专业的师资力量</div>
          <div class="title2">所有授课老师均为Top海外院校毕业，不仅具备优秀且扎实的专业英语教学能力，而且熟知真实的语音交流与学习环境，用前沿的教学理念实打实地提高每位学生的语言能力。</div>
          <div class="teachers-div">
            <template v-for="(item, index) in teachers" >
              <div class="each-teacher" v-if="index < maxNumber" :key="item.name">
                <div class="teacher-img" :style="{backgroundImage:'url(' + item.img + ')'}"></div>
                <div class="teacher-info-div">
                  <div class="teacher-name">{{ item.name }}</div>
                  <div class="teacher-school">{{ item.school }}</div>
                </div>
              </div>
            </template>
          </div>
        </div>

        <div class="banner8-div">
          <div class="title">辅导项目</div>
          <div class="title2">根据学生不同的英语水平、备考阶段、实际需求，核桃英语设有三大类课程，希望帮助每一位学生顺利取得满意成绩。</div>
          <div class="carousel-div">
            <div id="owl-demo" class="owl-carousel  owl-theme">
                <div class="each-activity" v-for="(item, index) in programs" :key="index" @click="showProgramDetail(index)">
                  <div class="activity-img" :style="{backgroundImage:'url(' + item.img + ')'}"></div>
                  <div v-show="currentShowDot == index" class="dot" :style="{background: item.color}"></div>
                </div>
            </div>
          </div>
        </div>

        <div class="banner9-div" v-if="showDetailDiv">
          <div class="detail-div">
            <div class="each-program-detail" v-for="item in selectProgramsDetail" :key="item.text">
              <div class="detail-img" :style="{backgroundImage:'url(' + item.img + ')'}"></div>
              <div class="detail-text">{{ item.text }}</div>
            </div>
          </div>
        </div>
      </div>

      <div class="palmdrive" v-show="currentType == 1">
        <div class="banner3-div">
          <div class="banner3" :style="{backgroundImage:'url(' + palmdriveBanner3 + ')'}">
            <div class="right-div">

              <div class="title1">棕榈学院是棕榈大道教育科技（北京）有限公司旗下子品牌，专注学员的背景提升、科研辅导和学术进阶。</div>
              <div class="title2">学院立足于学员需求，以推动教育公平为使命，借助互联网解决教育资源分配不均的问题，将国际最前沿的知识带给每一位学员。</div>
            </div>
          </div>
        </div>

        <div class="banner7-div">
          <div class="numbers-div">
            <div class="all-student-div" v-for="(item, index) in numbers" :key="item.text" >
              <div class="number" v-if="index != 2"><animate-number from="1" :to="item.title1" duration="3000" :formatValue="formatToPeople"></animate-number><span class="title2">{{ item.title2 }}</span></div>
              <div class="number" v-if="index == 2"><animate-number from="1" :to="item.title1" duration="3000" :formatValue="formatToPeople"></animate-number>.2<span class="title2">{{ item.title2 }}</span></div>
              <div class="number-text">{{ item.text }}</div>
            </div>
          </div>
        </div>

        <div class="banner4-div">
          <div class="title">四位一体辅导模式</div>
          <div class="title2">项目配有科研导师,助教, 外教与班主任，从教学、课后答疑、日常监督三方面，全方位为同学提供个性化辅导与陪伴。</div>
          <div class="four-to-one-div">
            <div class="each1 each">
              <div class="each-title">顶尖科研导师</div>
              <div class="each-text">夯实项目背景理论／辅导科研实战项目／规划</div>
              <div class="each-text">论文大纲思路／沟通修改论文成稿</div>
            </div>
            <div class="each2 each">
              <div class="each-title">资深班主任</div>
              <div class="each-text">贴心规划时间任务／安排线上课程教室／监督</div>
              <div class="each-text">研究项目进展／全程关怀答疑解惑</div>
            </div>
            <div class="each3 each">
              <div class="each-title">专业外籍导师（ws/rp 项目）</div>
              <div class="each-text">提升文章成稿水平／纠正中式英语逻辑／润色</div>
              <div class="each-text">语言表达规范／消除文化隔阂差异</div>
            </div>
            <div class="each4 each">
              <div class="each-title">学术咨询顾问</div>
              <div class="each-text">搜集学生背景信息／匹配适合导师项目／规划</div>
              <div class="each-text">升学求职方案／全程监督项目进展</div>
            </div>

            <div class="almightyMentor">
              <div class="title3">顶尖科研导师</div>
              <div class="title4"></div>
            </div>
            <div class="seniorMentor">
              <div class="title3">资深班主任</div>
              <div class="title4"></div>
            </div>
            <div class="sameMajorMentor">
              <div class="title3">学术咨询顾问</div>
              <div class="title4"></div>
            </div>
            <div class="foreignMentor">
              <div class="title3">专业外籍导师</div>
              <div class="title4">（ws/rp 项目）</div>
            </div>
          </div>
        </div>

        <div class="banner6-div">
          <div class="title">专业的师资力量</div>
          <div class="title2">优秀导师团队: 所有授课老师均为国内外 Top 院校教授或硕博，科研背景雄厚，授课经验丰富，立足于学生需求，理论与实践并重。</div>
          <div class="teachers-div">
            <template v-for="(item, index) in palmdriveTeachers" >
              <div class="each-teacher" v-if="index < maxNumber" :key="item.img">
                <div class="teacher-img" :style="{backgroundImage:'url(' + item.img + ')'}"></div>
                <div class="teacher-info-div">
                  <div class="teacher-name">{{ item.name }}</div>
                  <div class="teacher-school">{{ item.school }}</div>
                </div>
              </div>
            </template>
          </div>
        </div>

        <div class="banner8-div">
          <div class="title">辅导项目</div>
          <div class="title2">根据学生不同基础和需求，棕榈学院提供有针对性、有效的背景提升方案，做同学冲刺梦校路上的护航者。</div>
          <div class="carousel-div">
            <div id="owl-demo2" class="owl-carousel owl-theme">
                <div class="each-activity" v-for="(item, index) in palmdrivePrograms" :key="index" @click="showProgramDetail(index)">
                  <div class="activity-img" :style="{backgroundImage:'url(' + item.img + ')'}"></div>
                  <div v-show="currentShowDot == index" class="dot" :style="{background: item.color}"></div>
                </div>
            </div>
          </div>
        </div>

        <div class="banner9-div" v-if="showDetailDiv">
          <div class="content-div">
            <div class="tags-div">
              <div class="each-tag-div" v-for="tag in selectPDProgramsDetail.tags" :key="tag">
                <span class="spot" :style="{background: selectPDProgramsDetail.color}"></span>
                {{ tag }}
              </div>
            </div>
            <div v-if="selectPDProgramsDetail.tags.length > 0" class="ellipsis">......</div>
            <div class="detail-div">
              <div class="each-program-detail" v-for="item in selectPDProgramsDetail.details" :key="item.text">
                <div class="detail-img" :style="{backgroundImage:'url(' + item.img + ')'}"></div>
                <div class="detail-text">{{ item.text }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="isMobile" class="mobile-div">
      <div class="banner1-div">
        <div class="banner1" :style="{backgroundImage:'url(' + banner1 + ')'}">
        </div>
      </div>

      <div class="menu">
        <ul class="guide-item-div" >
          <li v-for="(item, index) in types" :key="item.name" @click="changeType(index)" :class="{ 'guide-bg-colors' : index == currentType }">
            <div class="img" :style="{backgroundImage:'url(' + (index == currentType ? item.img1 : item.img) + ')'}"></div>
            <div class="text">{{ item.name }}</div>
          </li>
        </ul>
      </div>

      <div class="walnut" v-show="currentType == 0">
        <div class="banner3-div">
          <div class="banner3" :style="{backgroundImage:'url(' + banner3 + ')'}"></div>
          <div class="right-div">
            <div class="title1">专业提供雅思、托福、GRE、GMAT 分手服务</div>
            <div class="bg-teacher-div">
              <div class="number">100<span>%</span></div>
              <div class="number-text">海外背景老师</div>
            </div>
            <div class="all-student-div">
              <div class="number">7000+<span>名</span></div>
              <div class="number-text">海外背景老师</div>
            </div>
            <div class="title3"><span>三位一体</span> 全方位服务模式</div>
          </div>
        </div>

        <div class="banner7-div">
          <div class="title">辅导成果</div>
          <div class="title2">截至目前为止，我们辅导人数高达 6000+ 人次，辅导成果如下：</div>
          <div v-for="item in results" :key="item.img" class="result-div">
            <div class="result-title">{{ item.title1MB }}</div>
            <div class="result-title2">{{ item.title2MB }}</div>
            <div class="each-result"  :style="{backgroundImage:'url(' + item.imgMB + ')'}"></div>
          </div>
        </div>

        <div class="banner4-div">
          <div class="title">三位一体服务模式</div>
          <div class="title2">班级配有授课老师、答疑助教与班主任，从教学、课后解答、日常监督三方面，全方位陪伴同学完成备考。</div>
          <div class="four-to-one-div"></div>
          <div class="four-to-one-div2">
            <div class="each1 each">
              <div class="each-title">名校背景老师</div>
              <div class="each-text">提升学生英语能力</div>
              <div class="each-text">传授提分方法技巧</div>
              <div class="each-text">解答学生课堂疑问</div>
            </div>
            <div class="each2 each">
              <div class="each-title">答疑助教</div>
              <div class="each-text">每日定时群内答疑解惑</div>
              <div class="each-text">每周定期发送答疑集锦</div>
              <div class="each-text">解答学生备考课后问题</div>
            </div>
            <div class="each3 each">
              <div class="each-title">班主任</div>
              <div class="each-text">日常督促学生直播上课</div>
              <div class="each-text">每周回访学生课程体验</div>
              <div class="each-text">及时关怀学生备考状态</div>
            </div>
          </div>
        </div>

        <div class="banner6-div">
          <div class="title2">所有授课老师均为Top海外院校毕业，不仅具备优秀且扎实的专业英语教学能力，而且熟知真实的语音交流与学习环境，用前沿的教学理念实打实地提高每位学生的语言能力。</div>
          <div class="teachers-div">
            <template v-for="(item, index) in teachers" >
              <div class="each-teacher" v-if="index < maxNumber" :key="item.name">
                <div class="teacher-img" :style="{backgroundImage:'url(' + item.img + ')'}"></div>
                <div class="teacher-info-div">
                  <div class="teacher-name">{{ item.name }}</div>
                  <div class="teacher-school">{{ item.school }}</div>
                </div>
              </div>
            </template>
          </div>
        </div>

        <div class="banner8-div">
          <div class="title">辅导项目</div>
          <div class="title2">根据学生不同的英语水平、备考阶段、实际需求，核桃英语设有三大类课程，希望帮助每一位学生顺利取得满意成绩。</div>
            <div class="each-activity" v-for="(item, index) in programs" :key="index" @click="showProgramDetail(index)">
              <div class="activity-img" :style="{backgroundImage:'url(' + item.imgMB + ')'}"></div>
              <!-- <div v-show="currentShowDot == index" class="dot" :style="{background: item.color}"></div> -->

              <div class="banner9-div" v-if="showDetailDiv && currentShowDot == index">
                <div class="detail-div">
                  <div class="each-program-detail" v-for="item in selectProgramsDetail" :key="item.text">
                    <div class="detail-img" :style="{backgroundImage:'url(' + item.img + ')'}"></div>
                    <div class="detail-text">{{ item.text }}</div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>

      <div class="palmdrive" v-show="currentType == 1">
        <div class="banner3-div">
          <div class="banner3" :style="{backgroundImage:'url(' + palmdriveBanner3 + ')'}"></div>
          <div class="right-div">
            <div class="title1">棕榈学院是棕榈大道教育科技（北京）有限公司旗下子品牌，专注学员的背景提升、科研辅导和学术进阶。</div>
            <div class="title2">学院立足于学员需求，以推动教育公平为使命，借助互联网解决教育资源分配不均的问题，将国际最前沿的知识带给每一位学员。</div>
          </div>
        </div>

        <div class="banner7-div">
          <div class="numbers-div">
            <div class="all-student-div" v-for="item in numbers" :key="item.text" >
              <div class="number">{{ item.title1 }}<span>{{ item.title2 }}</span></div>
              <div class="number-text">{{ item.text }}</div>
            </div>
          </div>
        </div>

        <div class="banner4-div">
          <div class="title">四位一体辅导模式</div>
          <div class="title2">项目配有科研导师,助教, 外教与班主任，从教学、课后答疑、日常监督三方面，全方位为同学提供个性化辅导与陪伴。</div>
          <div class="four-to-one-div"></div>
          <div class="four-to-one-div2">
            <div class="each1 each">
              <div class="each-title">顶尖科研导师</div>
              <div class="each-text">夯实项目背景理论／辅导科研实战项目／规划</div>
              <div class="each-text">论文大纲思路／沟通修改论文成稿</div>
            </div>
            <div class="each2 each">
              <div class="each-title">资深班主任</div>
              <div class="each-text">贴心规划时间任务／安排线上课程教室／监督</div>
              <div class="each-text">研究项目进展／全程关怀答疑解惑</div>
            </div>
            <div class="each3 each">
              <div class="each-title">专业外籍导师（ws/rp 项目）</div>
              <div class="each-text">提升文章成稿水平／纠正中式英语逻辑／润色</div>
              <div class="each-text">语言表达规范／消除文化隔阂差异</div>
            </div>
            <div class="each4 each">
              <div class="each-title">学术咨询顾问</div>
              <div class="each-text">搜集学生背景信息／匹配适合导师项目／规划</div>
              <div class="each-text">升学求职方案／全程监督项目进展</div>
            </div>
          </div>
        </div>

        <div class="banner6-div">
          <div class="title">专业的师资力量</div>
          <div class="title2">优秀导师团队: 所有授课老师均为国内外 Top 院校教授或硕博，科研背景雄厚，授课经验丰富，立足于学生需求，理论与实践并重。</div>
          <div class="teachers-div">
            <template v-for="(item, index) in palmdriveTeachers" >
              <div class="each-teacher" v-if="index < maxNumber" :key="item.name">
                <div class="teacher-img" :style="{backgroundImage:'url(' + item.img + ')'}"></div>
                <div class="teacher-info-div">
                  <div class="teacher-name">{{ item.name }}</div>
                  <div class="teacher-school">{{ item.school }}</div>
                </div>
              </div>
            </template>
          </div>
        </div>

        <div class="banner8-div">
          <div class="title">辅导项目</div>
          <div class="title2">根据学生不同基础和需求，棕榈学院提供有针对性、有效的背景提升方案，做同学冲刺梦校路上的护航者。</div>
          <div class="carousel-div">
            <div id="owl-demo3" class="owl-carousel owl-theme">
                <div class="each-activity" v-for="(item, index) in palmdrivePrograms" :key="index" @click="showProgramDetail(index)">
                  <div class="activity-img" :style="{backgroundImage:'url(' + item.img + ')'}"></div>
                  <div v-show="currentShowDot == index" class="dot" :style="{background: item.color}"></div>
                </div>
            </div>
          </div>
        </div>

        <div class="banner9-div" v-if="showDetailDiv">
          <div class="content-div">
            <div class="tags-div">
              <div class="each-tag-div" v-for="tag in selectPDProgramsDetail.tags" :key="tag">
                <span class="spot" :style="{background: selectPDProgramsDetail.color}"></span>
                {{ tag }}
              </div>
            </div>
            <div v-if="selectPDProgramsDetail.tags.length > 0" class="ellipsis">......</div>
            <div class="detail-div">
              <div class="each-program-detail" v-for="item in selectPDProgramsDetail.details" :key="item.text">
                <div class="detail-img" :style="{backgroundImage:'url(' + item.img + ')'}"></div>
                <div class="detail-text">{{ item.text }}</div>
              </div>
            </div>
          </div>
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
    'remote-css': {
      render (createElement) {
        return createElement('link', { attrs: { rel: 'stylesheet', href: this.href } })
      },
      props: {
        href: { type: String, required: true }
      }
    },
    'remote-js': {
      render (createElement) {
        return createElement('script', { attrs: { type: 'text/javascript', src: this.src } })
      },
      props: {
        src: { type: String, required: true }
      }
    }
  },
  name: 'Home',
  data () {
    return {
      isMobile: Common.isMobile,
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
      results: [
        {
          img: require('../assets/img/ability/results/result1.png'),
          title1: '托福学生出分',
          title2: '汇总',
          title1MB: '托福学生',
          title2MB: '出分汇总',
          imgMB: require('../assets/img/ability/mobile/results/result1.png')
        },
        {
          img: require('../assets/img/ability/results/result2.png'),
          title1: '雅思学生出分',
          title2: '汇总',
          title1MB: '雅思学生',
          title2MB: '出分汇总',
          imgMB: require('../assets/img/ability/mobile/results/result2.png')
        },
        {
          img: require('../assets/img/ability/results/result3.png'),
          title1: 'GRE 学生出分',
          title2: '汇总',
          title1MB: 'GRE 学生',
          title2MB: '出分汇总',
          imgMB: require('../assets/img/ability/mobile/results/result3.png')
        },
        {
          img: require('../assets/img/ability/results/result4.png'),
          title1: 'GMAT 学生出分',
          title2: '汇总',
          title1MB: 'GMAT 学生',
          title2MB: '出分汇总',
          imgMB: require('../assets/img/ability/mobile/results/result4.png')
        }
      ],
      programs: [
        {
          img: require('../assets/img/ability/programs/program1.png'),
          title: '',
          time: '',
          color: '#72E2D2',
          imgMB: require('../assets/img/ability/mobile/programs/program1.png')
        },
        {
          img: require('../assets/img/ability/programs/program2.png'),
          title: '',
          time: '',
          color: '#A8B7DF',
          imgMB: require('../assets/img/ability/mobile/programs/program2.png')
        },
        {
          img: require('../assets/img/ability/programs/program3.png'),
          title: '',
          time: '',
          color: '#97CBE2',
          imgMB: require('../assets/img/ability/mobile/programs/program3.png')
        }
      ],
      banner1: '',
      maxNumber: 8,
      types: [
        {
          name: '核桃英语',
          img: require('../assets/img/ability/type/menu1.png'),
          img1: require('../assets/img/ability/type/menu1-1.png')
        },
        {
          name: '棕榈学院',
          img: require('../assets/img/ability/type/menu2.png'),
          img1: require('../assets/img/ability/type/menu2-1.png')
        }
      ],
      currentType: 1,
      banner3: '',
      palmdriveBanner3: '',
      currentShowDot: 100,
      showDetailDiv: false,
      selectProgramsDetail: [],
      selectPDProgramsDetail: {},
      programsDetail: [
        [
          {
            img: require('../assets/img/ability/programs/program1-detail.png'),
            text: '系统学习方法与技巧内容，配合刷题、批改、答疑稳步提升'
          },
          {
            img: require('../assets/img/ability/programs/program1-detail.png'),
            text: '100% 名校背景授课老师、答疑助教与班主任，全方位陪伴备考'
          },
          {
            img: require('../assets/img/ability/programs/program1-detail.png'),
            text: '独家原创提分资料，课程礼包速递'
          },
          {
            img: require('../assets/img/ability/programs/program1-detail.png'),
            text: '小班精细辅导，足不出户，学习效率有效提升'
          },
          {
            img: require('../assets/img/ability/programs/program1-detail.png'),
            text: '千元奖学金计划'
          },
          {
            img: require('../assets/img/ability/programs/program1-detail.png'),
            text: '不满意可随时退课'
          },
          {
            img: '',
            text: '适宜托福/雅思/GRE/GMAT 备考，系统准备，与班级同学一起进步的同学'
          }
        ],
        [
          {
            img: require('../assets/img/ability/programs/program1-detail.png'),
            text: '根据学生英语水平、目标分数、考试时间、短板项目等多个维度定制化辅导方案'
          },
          {
            img: require('../assets/img/ability/programs/program1-detail.png'),
            text: '100% 名校背景授课老师一对一针对性教学，班主任跟踪督促'
          },
          {
            img: require('../assets/img/ability/programs/program1-detail.png'),
            text: '灵活时间约课，课后定制复习计划'
          },
          {
            img: require('../assets/img/ability/programs/program1-detail.png'),
            text: '独家原创提分资料'
          },
          {
            img: require('../assets/img/ability/programs/program1-detail.png'),
            text: '千元奖学金计划'
          },
          {
            img: require('../assets/img/ability/programs/program1-detail.png'),
            text: '不满意可随时退课'
          },
          {
            img: '',
            text: '适宜托福/雅思/GRE/GMAT 备考，有短板项目、需要针对性辅导的同学'
          }
        ],
        [
          {
            img: require('../assets/img/ability/programs/program1-detail.png'),
            text: '核心语法知识+听说读写技能全面学习'
          },
          {
            img: require('../assets/img/ability/programs/program1-detail.png'),
            text: '每日作业联系与答疑'
          },
          {
            img: require('../assets/img/ability/programs/program1-detail.png'),
            text: '班主任督促学习'
          },
          {
            img: require('../assets/img/ability/programs/program1-detail.png'),
            text: '独家资料，课程礼包速递'
          },
          {
            img: require('../assets/img/ability/programs/program1-detail.png'),
            text: '不满意可随时退课'
          },
          {
            img: require('../assets/img/ability/programs/program1-detail.png'),
            text: '真正提升英语基础能力'
          },
          {
            img: '',
            text: '适宜基础较弱，为托福雅思考试提升能力的同学'
          }
        ]
      ],
      numbers: [
        {
          title1: '150',
          title2: '场',
          text: '棕榈学院举办讲座活动超过'
        },
        {
          title1: '10',
          title2: '多万人',
          text: '参与活动'
        },
        {
          title1: '1.2',
          title2: '万多',
          text: '单场活动参与人数超过'
        },
        {
          title1: '200',
          title2: '多万',
          text: '公众号影响力覆盖人群'
        }
      ],
      palmdriveTeachers: [
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
      ],
      palmdrivePrograms: [
        {
          img: require('../assets/img/ability/palmdrive/programs/program1.png'),
          title: '',
          time: '',
          color: '#379964'
        },
        {
          img: require('../assets/img/ability/palmdrive/programs/program2.png'),
          title: '',
          time: '',
          color: '#21BD9A'
        },
        {
          img: require('../assets/img/ability/palmdrive/programs/program3.png'),
          title: '',
          time: '',
          color: '#FAAF0C'
        },
        {
          img: require('../assets/img/ability/palmdrive/programs/program4.png'),
          title: '',
          time: '',
          color: '#FC3B33'
        },
        {
          img: require('../assets/img/ability/palmdrive/programs/program5.png'),
          title: '',
          time: '',
          color: '#1C64A0'
        }
      ],
      palmdriveProgramsDetail: [
        {
          tags: ['金融投资管理', '机器学习', '大数据分析', 'Kaggle 数据科学', '机器人', '心理学', '传播学', '大数据治霾', '工业工程'],
          color: '#379964',
          details: [
            {
              img: require('../assets/img/ability/palmdrive/programs/program1-detail.png'),
              text: '优秀学员获教授推荐信',
              tags: ['金融投资管理']
            },
            {
              img: require('../assets/img/ability/palmdrive/programs/program1-detail.png'),
              text: '高含金量科研项目经历'
            },
            {
              img: require('../assets/img/ability/palmdrive/programs/program1-detail.png'),
              text: '产出学术报告/项目报告'
            },
            {
              img: require('../assets/img/ability/palmdrive/programs/program1-detail.png'),
              text: '学术思考与文献读写能力提升'
            }
          ]
        },
        {
          tags: ['文献综述', '英文论文速读', '问卷调查', '社科论文写作', '财 报', '理科论文写作', '市场营销', 'Excel入门', 'Prezi', 'Xmind', 'Python 入门', 'Python 进阶', 'R 语言入门', 'SQL', 'SPSS'],
          color: '#21BD9A',
          details: [
            {
              img: require('../assets/img/ability/palmdrive/programs/program1-detail.png'),
              text: '国际化教学模式+学习场景'
            },
            {
              img: require('../assets/img/ability/palmdrive/programs/program1-detail.png'),
              text: '相关案例模拟+高强度作业实战'
            },
            {
              img: require('../assets/img/ability/palmdrive/programs/program1-detail.png'),
              text: '线上直播授课+录播复习'
            }
          ]
        },
        {
          tags: ['量化金融', '商业分析', '数据科学', '机器人', '机器学习', '分析化学', '生物信息', '传 媒', '心理学', '教 育', '语言学', '英美文学', '工业工程', '神经科学', '生物统计', '社会学', '统 计'],
          color: '#FAAF0C',
          details: [
            {
              img: require('../assets/img/ability/palmdrive/programs/program1-detail.png'),
              text: '优秀学员获教授推荐信'
            },
            {
              img: require('../assets/img/ability/palmdrive/programs/program1-detail.png'),
              text: '高含金量科研项目经历'
            },
            {
              img: require('../assets/img/ability/palmdrive/programs/program1-detail.png'),
              text: '产出优质论文并冲刺发表'
            },
            {
              img: require('../assets/img/ability/palmdrive/programs/program1-detail.png'),
              text: '量身定制你的学术提升方案'
            }
          ]
        },
        {
          tags: ['教育学', '经济学', '金 融', '金融工程', '语言学', '会 计', '生物信息', '机器学习', '心理学', '传媒'],
          color: '#FC3B33',
          details: [
            {
              img: require('../assets/img/ability/palmdrive/programs/program1-detail.png'),
              text: '世界顶尖博士全程辅导'
            },
            {
              img: require('../assets/img/ability/palmdrive/programs/program1-detail.png'),
              text: '优质学术研究/分析报告'
            },
            {
              img: require('../assets/img/ability/palmdrive/programs/program1-detail.png'),
              text: '学术入门实战项目经历'
            },
            {
              img: require('../assets/img/ability/palmdrive/programs/program1-detail.png'),
              text: '学术思考与论文续写能力提升'
            }
          ]
        },
        {
          tags: [],
          color: '#1C64A0',
          details: [
            {
              img: require('../assets/img/ability/palmdrive/programs/program1-detail.png'),
              text: '冲击名校申请的Writing sample'
            },
            {
              img: require('../assets/img/ability/palmdrive/programs/program1-detail.png'),
              text: '3000+ 世界顶尖名校导师资源'
            },
            {
              img: require('../assets/img/ability/palmdrive/programs/program1-detail.png'),
              text: '逻辑思维与学术能力提升'
            },
            {
              img: require('../assets/img/ability/palmdrive/programs/program1-detail.png'),
              text: '英文文献读写能力提升'
            }
          ]
        }
      ]
    }
  },
  created () {
    this.banner1 = this.isMobile ? require('../assets/img/ability/mobile/banner1.png') : require('../assets/img/ability/banner1.png')
    this.banner3 = this.isMobile ? require('../assets/img/ability/mobile/banner3.png') : require('../assets/img/ability/banner3.png')
    this.palmdriveBanner3 = this.isMobile ? require('../assets/img/ability/mobile/banner3-2.png') : require('../assets/img/ability/banner3-2.png')
    this.selectProgramsDetail = this.programsDetail[0]
    this.selectPDProgramsDetail = this.palmdriveProgramsDetail[0]
  },
  mounted () {
    this.$nextTick(function () {
      this.creatOwl1()
      this.creatOwl2()
      this.creatOwl3()
    })
  },
  methods: {
    formatToPeople (value) {
      return value.toFixed(2)
    },
    showMoreTeachers () {
      this.maxNumber = 100
    },
    changeType (index) {
      this.currentType = index

      if (index === 0) {
        this.creatOwl1()
        this.selectProgramsDetail = []
      } else {
        this.creatOwl2()
        this.selectPDProgramsDetail = {}
      }

      this.showDetailDiv = false
      this.currentShowDot = 100
    },
    showProgramDetail (index) {
      if (this.currentShowDot === index) {
        this.showDetailDiv = !this.showDetailDiv
      } else {
        this.currentShowDot = index
        this.showDetailDiv = true
      }
      if (this.currentType === 0) {
        this.selectProgramsDetail = this.programsDetail[index]
      } else {
        this.selectPDProgramsDetail = this.palmdriveProgramsDetail[index]
      }
    },
    creatOwl1 () {
      $('#owl-demo').owlCarousel({
        items: 3,
        margin: 5,
        lazyLoad: true,
        nav: false,
        dots: false,
        autoplay: false,
        loop: false,
        autoplayHoverPause: false,
        navText: ["<i class='left-arrow left-arrow-circule ability-program-left-arrow'></i>", "<i class='right-arrow right-arrow-circule ability-program-right-arrow'></i>"]
      })
    },
    creatOwl2 () {
      $('#owl-demo2').owlCarousel({
        items: 3,
        margin: 5,
        lazyLoad: true,
        nav: true,
        dots: false,
        autoplay: false,
        loop: false,
        autoplayHoverPause: false,
        navText: ["<i class='left-arrow left-arrow-circule ability-program-left-arrow'></i>", "<i class='right-arrow right-arrow-circule ability-program-right-arrow'></i>"]
      })
    },
    creatOwl3 () {
      $('#owl-demo3').owlCarousel({
        items: 2.5,
        margin: 5,
        lazyLoad: true,
        nav: true,
        dots: false,
        autoplay: false,
        loop: false,
        autoplayHoverPause: false,
        navText: ["<i class='left-arrow left-arrow-circule ability-program-left-arrow-mobile'></i>", "<i class='right-arrow right-arrow-circule ability-program-right-arrow-mobile'></i>"]
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.ability {
  text-align: center;

  .web-div {
    .banner1-div {
      width: 100%;
      padding: 77px 0 73px;
      background-color: #1BBEB2;

      .banner1 {
        width: 1077px;
        height: 372px;
        margin: 0 auto;
        position: relative;
        text-align: left;
        background-repeat: no-repeat;
        background-size: cover;

      }
    }

    .menu {
      .guide-item-div {
        list-style: none;
        text-align: center;
        padding: 0;
        margin: 72px auto 54px;
        width: 466px;
        background:rgba(250,255,255,1);
        box-shadow:-2px 3px 15px rgba(91,98,97,0.16);
        opacity:1;
        border-radius:38px;
        border: 2px solid #20C1B5;

        li {
          width: 228px;
          height: 60px;
          opacity: 1;
          margin-right: 10px;
          display: inline-block;
          color: rgba(57,60,61,1);
          cursor: pointer;
          text-align: center;

          .img {
            width:36px;
            height:24px;
            // background:rgba(255,255,255,1);
            // box-shadow:3px 3px 6px rgba(0,0,0,0.16);
            // border-radius:50%;
            opacity:1;
            margin-top: 18px;
            background-repeat: no-repeat;
            background-size: contain;
            display: inline-block;
            margin-right: 10px;
          }

          .text {
            display: inline-block;
            font-size: 18px;
            font-family: SourceHanSansCN;
            font-weight: 500;
            line-height: 24px;
            margin-top: 18px;
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
          background:#20C1B5;
          box-shadow:0px 3px 6px rgba(0,0,0,0.16);
          opacity:1;
          border-radius:83px;
        }
      }
    }

    .walnut {
      .banner3-div {
        width: 100%;
        padding: 0 0 70px;
        background-color: #FFF;

        .banner3 {
          width: 1050px;
          height: 340px;
          margin: 0 auto;
          position: relative;
          text-align: left;
          background-repeat: no-repeat;
          background-size: cover;
          box-shadow:6px 0px 16px 8px rgba(0, 0, 0, 0.1);

          .right-div {
            position: absolute;
            width: 600px;
            right: 45px;
            top: 45px;
            text-align: center;

            .title1 {
              font-size:28px;
              font-family:SourceHanSansCN, Campton;
              font-weight:bold;
              line-height:28px;
              color:rgba(0,0,0,1);
              opacity:1;
              margin-bottom: 33px;
            }

            .bg-teacher-div {
              display: inline-block;
              margin-right: 59px;

              .number {
                font-size:110px;
                font-family:Biko;
                font-weight:bold;
                line-height:110px;
                color:rgba(255,196,0,1);
                opacity:1;
                letter-spacing: -3px;

                span {
                  font-size:24px;
                  font-family:SourceHanSansCN;
                  font-weight:bold;
                  line-height:24px;
                  color:rgba(255,196,0,1);
                  opacity:1;
                }
              }

              .number-text {
                font-size:20px;
                font-family:SourceHanSansCN;
                font-weight:bold;
                line-height:20px;
                color:rgba(51,51,51,1);
                opacity:1;
              }
            }

            .all-student-div {
              display: inline-block;

              .number {
                font-size:110px;
                font-family:Biko;
                font-weight:bold;
                line-height:110px;
                color:rgba(255,196,0,1);
                opacity:1;
                letter-spacing: -3px;

                span {
                  font-size:24px;
                  font-family:SourceHanSansCN;
                  font-weight:bold;
                  line-height:24px;
                  color:rgba(255,196,0,1);
                  opacity:1;
                  margin-left: 11px;
                }
              }

              .number-text {
                font-size:20px;
                font-family:SourceHanSansCN;
                font-weight:bold;
                line-height:20px;
                color:rgba(51,51,51,1);
                opacity:1;
              }
            }

            .title3 {
              font-size:28px;
              font-family:SourceHanSansCN;
              font-weight:bold;
              line-height:28px;
              color:rgba(0,0,0,1);
              opacity:1;
              margin-top: 36px;

              span {
                color: #FFC400;
              }
            }
          }
        }
      }

      .banner7-div {
        padding: 59px 0 64px;
        background-color: rgba(233,238,240,.31);;

        .title {
          font-size:28px;
          font-family:SourceHanSansCN;
          font-weight:bold;
          line-height:28px;
          color:rgba(60,60,60,1);
          opacity:1;
        }

        .title2 {
          font-size:18px;
          font-family:SourceHanSansCN, Biko;
          font-weight:400;
          line-height:18px;
          color:rgba(82,82,82,1);
          opacity:1;
          margin: 17px 0 66px;
        }

        .result-div {
          display: inline-block;

          .result-title {
            font-size:24px;
            font-family:SourceHanSansCN;
            font-weight:bold;
            line-height:24px;
            color:rgba(70,70,70,1);
            opacity:1;
          }

          .result-title2 {
            font-size:24px;
            font-family:SourceHanSansCN;
            font-weight:bold;
            line-height:24px;
            color:rgba(70,70,70,1);
            opacity:1;
            margin-top: 8px;
          }

          .each-result {
            width:235px;
            height:709px;
            box-shadow:5px 5px 8px rgba(0,0,0,0.07);
            border-radius: 15px;
            opacity:1;
            margin: 20px 24px 0;
            background-repeat: no-repeat;
            background-size: cover;
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
          font-size:16px;
          font-family:SourceHanSansCN;
          font-weight:400;
          line-height:23px;
          color:rgba(60,60,60,1);
          opacity:1;
          margin: 18px auto 86px;
        }

        .three-to-one-div {
          width: 1095px;
          height: 616px;
          margin: 0 auto;
          background-image: url("../assets/img/ability/threeToOne/threeToOne.png");
          position: relative;
          text-align: left;
          background-repeat: no-repeat;
          background-size: contain;

          .each {
            width: 266px;
            text-align: left;
            position: absolute;
            right: 66px;
          }

          .each1 {
            top: 65px;
          }

          .each2 {
            top: 265px;
          }

          .each3 {
            top: 460px;
          }

          .each-title {
            font-size:20px;
            font-family:SourceHanSansCN;
            font-weight:bold;
            line-height:20px;
            color:rgba(60,60,60,1);
            opacity:1;
            margin-bottom: 20px;
          }

          .each-text {
            font-size:14px;
            font-family:SourceHanSansCN, Biko;
            font-weight:500;
            line-height:20px;
            color:rgba(117,117,117,1);
            opacity:1;
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

      .banner6-div {
        padding: 103px 0 57px;
        background-color: #E9EEF0;

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
          font-weight:400;
          line-height:22px;
          color:rgba(82,82,82,1);
          opacity:1;
          width: 845px;
          margin: 20px auto 91px;
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

            .teacher-img {
              width:100%;
              height:308px;
              background-repeat: no-repeat;
              background-size: cover;
            }

            .teacher-info-div {
              height: 96px;
              background-color: #FEE51F;
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
        }
      }

      .banner8-div {
        padding: 88px 0 50px;
        background-color: #fff;
        text-align: center;
        font-size: 30px;
        // display: none;

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
          font-weight:400;
          line-height:16px;
          color:rgba(82,82,82,1);
          opacity:1;
          margin: 26px 0 67px;
        }

        .carousel-div {
          width: 985px;
          margin: 0 auto;
          text-align: center;

          .activity-img {
            width:300px;
            height:370px;
            background-repeat: no-repeat;
            background-size: cover;
            box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.07);
            border-radius: 38px;
            margin: 0 auto;
            cursor: pointer;
          }

          .dot {
            width:49px;
            height:12px;
            opacity:1;
            border-radius:6px;
            margin: 15px auto 0;
          }
        }
      }

      .banner9-div {
        padding: 88px 0 130px;
        background-color: #E3F3F3;
        text-align: left;

        .detail-div {
          width: 950px;
          margin: 0 auto;

          .each-program-detail {
            margin-bottom: 20px;

            .detail-img {
              display: inline-block;
              margin-right: 16px;
              width:19px;
              height:22px;
              background-repeat: no-repeat;
              background-size: cover;
              vertical-align: top;
            }

            .detail-text {
              display: inline-block;
              font-size:24px;
              font-family:SourceHanSansCN;
              font-weight:500;
              line-height:24px;
              color:rgba(82,82,82,1);
              opacity:1;
            }
          }

          .each-program-detail:last-child {
            margin-top: 9px;
            display: inline-block;
          }
        }
      }
    }

    .palmdrive {
      .banner3-div {
        width: 100%;
        padding: 0 0 70px;
        background-color: #FFF;

        .banner3 {
          width: 1050px;
          height: 340px;
          margin: 0 auto;
          position: relative;
          text-align: left;
          background-repeat: no-repeat;
          background-size: cover;
          box-shadow:6px 0px 16px 8px rgba(0, 0, 0, 0.1);

          .right-div {
            position: absolute;
            width: 600px;
            right: 45px;
            top: 0;
            text-align: center;

            .title1 {
              font-size:22px;
              font-family:SourceHanSansCN;
              font-weight:500;
              line-height:33px;
              color:rgba(82,82,82,1);
              opacity:1;
              margin: 80px 0 30px;
              text-align: left;
            }

            .title2 {
              font-size:22px;
              font-family:SourceHanSansCN;
              font-weight:500;
              line-height:33px;
              color:rgba(82,82,82,1);
              opacity:1;
              text-align: left;
            }
          }
        }
      }

      .banner7-div {
        padding: 59px 0 64px;
        background-color: #FFF;

        .all-student-div {
          display: inline-block;
          margin: 0 40px;

          .number {
            font-size:90px;
            font-family:Biko;
            font-weight:bold;
            line-height:90px;
            color:#1EA5A5;
            opacity:1;
            // letter-spacing: -3px;

            .title2 {
              font-size:24px;
              font-family:SourceHanSansCN;
              font-weight:bold;
              line-height:24px;
              color:#1EA5A5;
              opacity:1;
              margin-left: 10px;
            }
          }

          .number-text {
            font-size:20px;
            font-family:Biko, SourceHanSansCN;
            font-weight:bold;
            line-height:20px;
            color:rgba(51,51,51,1);
            opacity:1;
            margin-top: 10px;
          }
        }
      }

      .banner4-div {
        padding: 86px 0 114px;
        background-color: rgba(213,225,230, .31);;

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
          font-weight:400;
          line-height:23px;
          color:rgba(60,60,60,1);
          opacity:1;
          margin: 32px auto 75px;
          width: 625px;
        }

        .four-to-one-div {
          width: 1077px;
          height: 618px;
          margin: 0 auto;
          background-image: url("../assets/img/ability/palmdrive/fourToOne/fourtoone.png");
          position: relative;
          text-align: left;
          background-repeat: no-repeat;
          background-size: cover;

          .each {
            width: 335px;
            text-align: left;
            position: absolute;
            right: 33px;
          }

          .each1 {
            top: 31px;
          }

          .each2 {
            top: 192px;
          }

          .each3 {
            top: 350px;
          }

          .each4 {
            top: 510px;
          }

          .each-title {
            font-size:22px;
            font-family:SourceHanSansCN, Campton;
            font-weight:bold;
            line-height:22px;
            color:rgba(60,60,60,1);
            opacity:1;
            margin-bottom: 21px;
          }

          .each-text {
            font-size:16px;
            font-family:SourceHanSansCN, Biko;
            font-weight:500;
            line-height:22px;
            color:rgba(123,123,123,1);
            opacity:1;
          }

          .almightyMentor {
            position: absolute;
            top: 34px;
            left: 220px;
          }

          .seniorMentor {
            position: absolute;
            top: 102px;
            left: 465px;
          }

          .sameMajorMentor {
            position: absolute;
            top: 485px;
            left: 24px;
          }

          .foreignMentor {
            position: absolute;
            bottom: 18px;
            left: 465px;
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

      .banner6-div {
        padding: 85px 0 62px;
        background-color: #FFF;

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
          font-weight:400;
          line-height:22px;
          color:rgba(82,82,82,1);
          opacity:1;
          width: 668px;
          margin: 45px auto 67px;
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
        }
      }

      .banner8-div {
        padding: 88px 0 10px;
        background-color: #E9EEF0;
        text-align: center;
        font-size: 30px;
        // display: none;

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
          font-weight:400;
          line-height:16px;
          color:rgba(82,82,82,1);
          opacity:1;
          margin: 32px auto 44px;
          width: 630px;
        }

        .carousel-div {
          width: 985px;
          margin: 0 auto;
          text-align: center;

          .activity-img {
            width:300px;
            height:370px;
            background-repeat: no-repeat;
            background-size: cover;
            box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.07);
            border-radius: 38px;
            margin: 0 auto;
            cursor: pointer;
          }

          .dot {
            width:49px;
            height:12px;
            opacity:1;
            border-radius:6px;
            margin: 15px auto 0;
          }
        }
      }

      .banner9-div {
        padding: 75px 0 111px;
        background-color: #E3F3F3;
        text-align: left;

        .content-div {
          width: 950px;
          margin: 0 auto;

          .tags-div {
            text-align: center;

            .each-tag-div {
              display: inline-block;
              padding: 0 21px;
              background:rgba(255,255,255,1);
              box-shadow:3px 3px 6px rgba(0,0,0,0.16);
              opacity:1;
              border-radius:26px;
              font-size:24px;
              font-family:SourceHanSansCN, Campton;
              font-weight:500;
              line-height:51px;
              color:rgba(82,82,82,1);
              margin: 12px 15px;

              .spot {
                width: 10px;
                height: 10px;
                border-radius:50%;
                display: inline-block;
                vertical-align: middle;
                margin-right: 8px;
              }
            }
          }

          .ellipsis {
            font-size:24px;
            font-family:SourceHanSansCN;
            font-weight:500;
            line-height:24px;
            color:rgba(82,82,82,1);
            opacity:1;
            margin: 20px auto 40px;
            text-align: center;
          }

          .detail-div {
            width: 100%;
            margin: 0 auto;
            background:rgba(182,222,222,.77);
            border-radius:25px;
            padding: 48px 0px;
            text-align: center;

            .each-program-detail {
              margin: 10px 0;
              width: 40%;
              display: inline-block;
              text-align: left;
              padding-left: 5%;

              .detail-img {
                display: inline-block;
                margin-right: 16px;
                width:19px;
                height:22px;
                background-repeat: no-repeat;
                background-size: cover;
                vertical-align: top;
              }

              .detail-text {
                display: inline-block;
                font-size:24px;
                font-family:SourceHanSansCN;
                font-weight:500;
                line-height:24px;
                color:rgba(25,25,25,1);
                opacity:1;
              }
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
        width: 8.96rem;
        height: 5.093333rem;
        margin: 0 auto;
        position: relative;
        text-align: left;
        background-repeat: no-repeat;
        background-size: cover;
      }
    }

    .menu {
      .guide-item-div {
        list-style: none;
        text-align: center;
        padding: 0;
        margin: 0.533333rem auto 0.8rem;
        width: 7.2rem;
        background:rgba(250,255,255,1);
        // box-shadow:-2px 3px 15px rgba(91,98,97,0.16);
        opacity:1;
        border-radius:1.013333rem;
        border: 2px solid #20C1B5;
        vertical-align: bottom;

        li {
          width: 3.466667rem;
          height: 0.96rem;
          opacity: 1;
          margin-right: 0.266667rem;
          display: inline-block;
          color: rgba(57,60,61,1);
          cursor: pointer;
          text-align: center;

          .img {
            width:0.666667rem;
            height:0.453333rem;
            // background:rgba(255,255,255,1);
            // box-shadow:3px 3px 6px rgba(0,0,0,0.16);
            // border-radius:50%;
            opacity:1;
            margin-top: 0.266667rem;
            background-repeat: no-repeat;
            background-size: contain;
            display: inline-block;
            margin-right: 0.133333rem;
          }

          .text {
            display: inline-block;
            font-size: 0.32rem;
            font-family: SourceHanSansCN;
            font-weight: 500;
            line-height: 0.453333rem;
            margin-top: 0.266667rem;
            vertical-align: top;
            height: 0.453333rem;
          }
        }

        li:last-child {
            margin-right: 0;
        }

        li:last-child .img{
            margin-right: 0;
        }

        .guide-bg-colors {
          color:#FFFFFF;
          font-weight:bold;
          background:#20C1B5;
          box-shadow:1px 0px 1px 1px #20C1B5;
          opacity:1;
          border-radius:1.013333rem;
        }
      }
    }

    .walnut {
      .banner3-div {
        width: 100%;
        padding: 0 0 1.2rem;
        background-color: #FFF;

        .banner3 {
          width: 4.32rem;
          height: 4.32rem;
          margin: 0 auto 0.72rem;
          position: relative;
          text-align: left;
          background-repeat: no-repeat;
          background-size: cover;
          box-shadow:6px 0px 16px 8px rgba(0, 0, 0, 0.1);
        }

        .right-div {
          width: 7.733333rem;
          text-align: center;
          margin: 0 auto;

          .title1 {
            font-size:0.373333rem;
            font-family:SourceHanSansCN, Campton;
            font-weight:bold;
            line-height:0.373333rem;
            color:rgba(0,0,0,1);
            opacity:1;
            margin-bottom: 0.48rem;
          }

          .bg-teacher-div {
            display: inline-block;
            margin-right: 0.533333rem;

            .number {
              font-size:1.2rem;
              font-family:Biko;
              font-weight:bold;
              line-height:1.2rem;
              color:rgba(255,196,0,1);
              opacity:1;
              letter-spacing: -3px;

              span {
                font-size:24px;
                font-family:SourceHanSansCN;
                font-weight:bold;
                line-height:24px;
                color:rgba(255,196,0,1);
                opacity:1;
              }
            }

            .number-text {
              font-size:0.373333rem;
              font-family:SourceHanSansCN;
              font-weight:bold;
              line-height:0.373333rem;
              color:rgba(51,51,51,1);
              opacity:1;
            }
          }

          .all-student-div {
            display: inline-block;

            .number {
              font-size:1.2rem;
              font-family:Biko;
              font-weight:bold;
              line-height:1.2rem;
              color:rgba(255,196,0,1);
              opacity:1;
              letter-spacing: -3px;

              span {
                font-size:0.586667rem;
                font-family:SourceHanSansCN;
                font-weight:bold;
                line-height:0.586667rem;
                color:rgba(255,196,0,1);
                opacity:1;
                margin-left: 0.026667rem;
              }
            }

            .number-text {
              font-size:0.373333rem;
              font-family:SourceHanSansCN;
              font-weight:bold;
              line-height:0.373333rem;
              color:rgba(51,51,51,1);
              opacity:1;
            }
          }

          .title3 {
            font-size:0.426667rem;
            font-family:SourceHanSansCN;
            font-weight:bold;
            line-height:0.426667rem;
            color:rgba(0,0,0,1);
            opacity:1;
            margin-top: 0.666667rem;

            span {
              color: #FFC400;
            }
          }
        }
      }

      .banner7-div {
        padding: 1.173333rem 0 1.626667rem;
        background-color: rgba(233,238,240,.31);;

        .title {
          font-size:0.426667rem;
          font-family:SourceHanSansCN;
          font-weight:bold;
          line-height:0.426667rem;
          color:rgba(60,60,60,1);
          opacity:1;
        }

        .title2 {
          width: 7.466667rem;
          font-size:0.32rem;
          font-family:SourceHanSansCN, Biko;
          font-weight:400;
          line-height:0.426667rem;
          color:rgba(82,82,82,1);
          opacity:1;
          margin: 0.373333rem auto 0.853333rem;
        }

        .result-div {
          display: inline-block;

          .result-title {
            font-size:0.32rem;
            font-family:SourceHanSansCN;
            font-weight:bold;
            line-height:0.32rem;
            color:rgba(70,70,70,1);
            opacity:1;
          }

          .result-title2 {
            font-size:0.32rem;
            font-family:SourceHanSansCN;
            font-weight:bold;
            line-height:0.32rem;
            color:rgba(70,70,70,1);
            opacity:1;
            margin-top: 0.106667rem;
          }

          .each-result {
            width:2.133333rem;
            height:8.693333rem;
            // box-shadow:5px 5px 8px rgba(0,0,0,0.07);
            // border-radius: 0.4rem;
            opacity:1;
            margin: 0.4rem 0.08rem 0;
            background-repeat: no-repeat;
            background-size: cover;
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
          line-height: 0.48rem;
          color: rgba(85, 85, 85, 1);
          opacity: 1;
          margin-bottom: 0.266667rem;
          width: 8.053333rem;
          margin: 0 auto;
        }

        .four-to-one-div {
          width: 8.4rem;
          height: 8.373333rem;
          margin: 0.666667rem auto 0.906667rem;
          background-image: url("../assets/img/ability/mobile/threeToOne/threeToOne.png");
          position: relative;
          text-align: left;
          background-repeat: no-repeat;
          background-size: cover;
        }

        .four-to-one-div2 {
          width: 6.666667rem;
          height: 10.453333rem;
          margin: 0 auto;
          background-image: url("../assets/img/ability/mobile/threeToOne/threeToOne2.png");
          text-align: left;
          background-repeat: no-repeat;
          background-size: cover;
          position: relative;

          .each {
            width: 4rem;
            text-align: left;
            position: absolute;
            left: 1.2rem;
          }

          .each1 {
            top: 1.066667rem;
          }

          .each2 {
            top: 4.426667rem;
          }

          .each3 {
            top: 7.76rem;
          }

          .each-title {
            font-size:0.426667rem;
            font-family:SourceHanSansCN;
            font-weight:bold;
            line-height:0.426667rem;
            color:rgba(60,60,60,1);
            opacity:1;
            margin-bottom: 0.32rem;
          }

          .each-text {
            font-size:0.32rem;
            font-family:SourceHanSansCN, Biko;
            font-weight:500;
            line-height:0.426667rem;
            color:rgba(117,117,117,1);
            opacity:1;
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

      .banner6-div {
        padding: 1.173333rem 0 0.8rem;
        background-color: #E9EEF0;

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
              background-color: #FEE51F;
              padding: 0.346667rem 0.426667rem 0;
              text-align: left;

              .teacher-name {
                font-size:0.373333rem;
                font-family:Campton;
                font-weight:bold;
                line-height:0.32rem;
                color:#1A1A1A;
                opacity:1;
              }

              .teacher-school {
                font-size:0.32rem;
                font-family:SourceHanSansCN;
                font-weight:400;
                line-height:0.453333rem;
                color:#1A1A1A;
                opacity:1;
                margin-top: 0.106667rem;
              }
            }
          }

          // .each-teacher:hover {
          //   transform: scale(1.1);
          //   transition-duration: 0.5s;
          // }

        }
      }

      .banner8-div {
        background-color: #fff;
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
          line-height: 0.48rem;
          color: rgba(85, 85, 85, 1);
          opacity: 1;
          margin-bottom: 0.266667rem;
          width: 8.48rem;
          margin: 0 auto 0.88rem;
        }

        .each-activity {
          .activity-img {
            width: 8.693333rem;
            height: 3.466667rem;
            margin: 0 auto 0.266667rem;
            background-repeat: no-repeat;
            background-size: cover;
            box-shadow: 3px 3px 9px rgba(0, 0, 0, 0.16);
            border-radius: .266667rem;
          }

          .banner9-div {
            padding: 1.12rem 0 1.253333rem;
            background-color: #E3F3F3;
            text-align: center;
            margin-bottom: 44px;

            .detail-div {
              // width: 8rem;
              margin: 0 auto;

              .each-program-detail {
                margin-bottom: .266667rem;

                .detail-img {
                  display: inline-block;
                  margin-right: .213333rem;
                  width:.32rem;
                  height:.373333rem;
                  background-repeat: no-repeat;
                  background-size: cover;
                  vertical-align: top;
                }

                .detail-text {
                  display: inline-block;
                  font-size:.32rem;
                  font-family:SourceHanSansCN;
                  font-weight:500;
                  line-height:.426667rem;
                  color:rgba(82,82,82,1);
                  opacity:1;
                  width: 7.466667rem;
                  text-align: left;
                }
              }

              .each-program-detail:last-child {
                margin-top: 9px;
                display: inline-block;
              }
            }
          }
        }
      }
    }

    .palmdrive {
      .banner3-div {
        width: 100%;
        padding: 0 0 1.2rem;
        background-color: #FFF;

        .banner3 {
          width: 4.32rem;
          height: 4.32rem;
          margin: 0 auto 0.72rem;
          position: relative;
          text-align: left;
          background-repeat: no-repeat;
          background-size: cover;
          box-shadow:6px 0px 16px 8px rgba(0, 0, 0, 0.1);
        }

        .right-div {
          width: 6.8rem;
          text-align: left;
          margin: 0 auto;

          .title1 {
            font-size:.32rem;
            font-family:SourceHanSansCN, Campton;
            font-weight:bold;
            line-height:.426667rem;
            color:#525252;
            opacity:1;
            margin-bottom: .426667rem;
          }

          .title2 {
            font-size:.32rem;
            font-family:SourceHanSansCN, Campton;
            font-weight:bold;
            line-height:.426667rem;
            color:#525252;
            opacity:1;
            // margin-bottom: .rem;
          }
        }
      }

      .banner7-div {
        padding: 0 0 .266667rem;
        background-color: #FFF;

        .all-student-div {
          display: inline-block;
          margin: 0 .4rem .8rem;
          width: 3.6rem;
          vertical-align: top;

          .number {
            font-size:1.28rem;
            font-family:Biko;
            font-weight:bold;
            line-height:1.28rem;
            color:#1EA5A5;
            opacity:1;
            // letter-spacing: -3px;

            span {
              font-size:.533333rem;
              font-family:SourceHanSansCN;
              font-weight:bold;
              line-height:.533333rem;
              color:#1EA5A5;
              opacity:1;
              margin-left: .16rem;
              display: inline-block;
            }
          }

          .number-text {
            font-size:.32rem;
            font-family:Biko, SourceHanSansCN;
            font-weight:bold;
            line-height:.426667rem;
            color:rgba(51,51,51,1);
            opacity:1;
            margin: .266667rem auto .133333rem;
            width: 2.826667rem;
          }
        }
      }

      .banner4-div {
        background-color: rgba(213, 225, 230, .31);
        padding: 1.52rem 0 0.88rem;

        .title {
          font-size: 0.426667rem;
          font-family: Campton, SourceHanSansCN;
          font-weight: bold;
          line-height: 0.426667rem;
          color: rgba(57, 60, 61, 1);
          opacity: 1;
          margin: 0px auto .4rem;
        }

        .title2 {
          font-size: 0.32rem;
          font-family: Biko, SourceHanSansCN;
          font-weight: 500;
          line-height: 0.48rem;
          color: rgba(85, 85, 85, 1);
          opacity: 1;
          margin-bottom: 0.266667rem;
          width: 7.813333rem;
          margin: 0 auto;
        }

        .four-to-one-div {
          width: 7.893333rem;
          height: 9.706667rem;
          margin: 0.666667rem auto 0.906667rem;
          background-image: url("../assets/img/ability/mobile/fourToOne/fourtoone.png");
          position: relative;
          text-align: left;
          background-repeat: no-repeat;
          background-size: cover;
        }

        .four-to-one-div2 {
          width: 8.266667rem;
          height: 11.733333rem;
          margin: 0 auto;
          background-image: url("../assets/img/ability/mobile/fourToOne/fourToOne2.png");
          text-align: left;
          background-repeat: no-repeat;
          background-size: cover;
          position: relative;

          .each {
            width: 6.4rem;
            text-align: left;
            position: absolute;
            left: 1.066667rem;
          }

          .each1 {
            top: .506667rem;
          }

          .each2 {
            top: 3.6rem;
          }

          .each3 {
            top: 6.666667rem;
          }

          .each4 {
            top: 9.73rem;
          }

          .each-title {
            font-size:.426667rem;
            font-family:SourceHanSansCN;
            font-weight:bold;
            line-height:0.426667rem;
            color:rgba(60,60,60,1);
            opacity:1;
            margin-bottom: .373333rem;
          }

          .each-text {
            font-size:0.32rem;
            font-family:SourceHanSansCN, Biko;
            font-weight:500;
            line-height:0.426667rem;
            color:rgba(117,117,117,1);
            opacity:1;
          }
        }

        .title3 {
          margin-top: 2px;
          font-size:.48rem;
          font-family:SourceHanSansCN;
          font-weight:bold;
          line-height:.48rem;
          color:rgba(60,60,60,1);
          opacity:1;
        }

        .title4 {
          font-size:.373333rem;
          font-family:SourceHanSansCN;
          font-weight:400;
          line-height:.373333rem;
          color:rgba(148,148,148,1);
          opacity:1;
          margin-top: .213333rem;
        }
      }

      .banner6-div {
        padding: 1.173333rem 0 0.8rem;
        background-color: #fff;

        .title {
          font-size: 0.426667rem;
          font-family: Campton, SourceHanSansCN;
          font-weight: bold;
          line-height: 0.426667rem;
          color: rgba(57, 60, 61, 1);
          opacity: 1;
          margin: 0px auto .4rem;
        }

        .title2 {
          font-size: 0.32rem;
          font-family: Biko, SourceHanSansCN;
          font-weight: 500;
          line-height: 0.48rem;
          color: rgba(85, 85, 85, 1);
          opacity: 1;
          margin-bottom: 0.266667rem;
          width: 7.813333rem;
          margin: 0 auto .693333rem;
        }

        .teachers-div {
          // width: 1130px;
          text-align: center;
          margin: 0 auto;

          .each-teacher {
            width: 4.106667rem;
            margin: 0 0.1rem 0.8rem;
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
              // height: 1.626667rem;
              background-color: #F1FAFA;
              padding: 0.346667rem 0.426667rem;
              text-align: left;

              .teacher-name {
                font-size:0.373333rem;
                font-family:Campton;
                font-weight:bold;
                line-height:0.32rem;
                color:#1A1A1A;
                opacity:1;
              }

              .teacher-school {
                font-size:0.32rem;
                font-family:SourceHanSansCN;
                font-weight:400;
                line-height:0.453333rem;
                color:#1A1A1A;
                opacity:1;
                margin-top: 0.106667rem;
              }
            }
          }

          // .each-teacher:hover {
          //   transform: scale(1.1);
          //   transition-duration: 0.5s;
          // }

        }
      }

      .banner8-div {
        padding: 1.2rem 0 0;
        background-color: rgba(233, 238, 240, .31);
        text-align: center;
        font-size: 30px;
        // display: none;

        .title {
          font-size: 0.426667rem;
          font-family: Campton, SourceHanSansCN;
          font-weight: bold;
          line-height: 0.426667rem;
          color: rgba(57, 60, 61, 1);
          opacity: 1;
          margin: 0px auto .4rem;
        }

        .title2 {
          font-size: 0.32rem;
          font-family: Biko, SourceHanSansCN;
          font-weight: 500;
          line-height: 0.48rem;
          color: rgba(85, 85, 85, 1);
          opacity: 1;
          margin-bottom: 0.266667rem;
          width: 7.813333rem;
          margin: 0 auto .693333rem;
        }

        .carousel-div {
          width: 7.7rem;
          margin: 0 auto;
          text-align: center;

          .activity-img {
            width:3.013333rem;
            height:3.68rem;
            background-repeat: no-repeat;
            background-size: cover;
            box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.07);
            border-radius: .266667rem;
            margin: 0 auto;
            cursor: pointer;
          }

          .dot {
            width:.773333rem;
            height:.186667rem;
            opacity:1;
            border-radius:.16rem;
            margin: .266667rem auto 0;
          }
        }
      }

      .banner9-div {
        padding: .693333rem 0 1.253333rem;
        background-color: #E3F3F3;
        text-align: left;
        margin-top: -0.8rem;

        .content-div {
          width: 8.933333rem;
          margin: 0 auto;

          .tags-div {
            text-align: center;

            .each-tag-div {
              display: inline-block;
              padding: 0 .266667rem;
              background:rgba(255,255,255,1);
              box-shadow:3px 3px 6px rgba(0,0,0,0.16);
              opacity:1;
              border-radius:26px;
              font-size:.32rem;
              font-family:SourceHanSansCN, Campton;
              font-weight:500;
              line-height:.773333rem;
              color:rgba(82,82,82,1);
              margin: .133333rem .106667rem;

              .spot {
                width: .16rem;
                height: .16rem;
                border-radius:50%;
                display: inline-block;
                vertical-align: middle;
                margin-right: .186667rem;
              }
            }
          }

          .ellipsis {
            font-size:24px;
            font-family:SourceHanSansCN;
            font-weight:500;
            line-height:.32rem;
            color:rgba(82,82,82,1);
            opacity:1;
            margin: .133333rem auto .533333rem;
            text-align: center;
          }

          .detail-div {
            width: 100%;
            margin: 0 auto;
            background:rgba(182,222,222,.77);
            border-radius:25px;
            padding: .8rem 0px 1.066667rem;
            text-align: center;

            .each-program-detail {
              margin: .133333rem 0;
              width: 80%;
              display: inline-block;
              text-align: center;
              // padding-left: 5%;

              .detail-img {
                display: inline-block;
                margin-right: .32rem;
                width:.426667rem;
                height:.48rem;
                background-repeat: no-repeat;
                background-size: cover;
                vertical-align: top;
              }

              .detail-text {
                display: inline-block;
                font-size:.373333rem;
                font-family:SourceHanSansCN;
                font-weight:500;
                line-height:.48rem;
                color:rgba(25,25,25,1);
                opacity:1;
              }
            }
          }
        }
      }
    }
  }
}
</style>
