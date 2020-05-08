<template>
  <div class="dream-school">
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
          <div class="each-teacher" v-if="index < maxNumber" :key="item.school">
            <div class="teacher-img" :style="{backgroundImage:'url(' + item.img + ')'}"></div>
            <div class="teacher-info-div">
              <div class="teacher-name">{{ item.name }}</div>
              <div class="teacher-school">{{ item.school }}</div>
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
          <div class="each-story" v-if="index < maxNumber" :key="item.img" @click="goToDetail(item.content)">
            <div class="story-img" :style="{backgroundImage:'url(' + item.img + ')'}"></div>
            <div class="story-info-div">
              <div class="story-text">{{ item.name }}</div>
            </div>
          </div>
        </template>

        <div class="more-teachers" @click="showMoreStories" v-if="maxNumber <= 8">
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
                <div class="plan-button" :style="{backgroundImage:'url(' + planButton + ')'}">我要咨询</div>
              </div>
          </div>
      </div>
    </div>

  </div>
</template>

<script>
// import ca from require('../assets/third/carousel/owl.carousel.min.js'

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
          img: require('../assets/img/dreamSchool/stories/story1.png'),
          name: '为梦想而实现横扫，因横扫而点亮梦想，为梦想而实现横扫，因横扫…',
          content: '<h2 class="rich_media_title" id="activity-name" style="text-align: center; margin: 0px 0px 14px; padding: 0px; font-weight: 400; font-size: 22px; line-height: 1.4; color: rgb(51, 51, 51); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; letter-spacing: 0.544px; white-space: normal;">    北理小姐姐冒着零科研风险退出实验室，GPA年级第一的她转专业申请拿下耶鲁带奖offer！</h2><p>    <br/></p><p>    <br/></p><p>    <strong style="margin: 0px; padding: 0px; max-width: 100%; color: rgb(255, 255, 255); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 17px; letter-spacing: 0.544px; text-align: justify; white-space: normal; box-sizing: border-box !important; overflow-wrap: break-word !important;"><span style="margin: 0px; padding: 0px; max-width: 100%; font-size: 16px; letter-spacing: 1.5px; background-color: rgb(40, 167, 169); box-sizing: border-box !important; overflow-wrap: break-word !important;">&nbsp;前言&nbsp;</span></strong></p><p>    <span style="margin: 0px; padding: 0px; max-width: 100%; font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 14px; text-align: justify; white-space: normal; color: rgb(89, 89, 89); letter-spacing: 1px; box-sizing: border-box !important; overflow-wrap: break-word !important;">我们今天的主人公是一位手握</span><span style="margin: 0px; padding: 0px; max-width: 100%; font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 14px; text-align: justify; white-space: normal; letter-spacing: 1px; color: rgb(40, 167, 169); box-sizing: border-box !important; overflow-wrap: break-word !important;">耶鲁、密歇根、哥大、康奈尔、杜克等名校 offer</span><span style="margin: 0px; padding: 0px; max-width: 100%; font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 14px; text-align: justify; white-space: normal; color: rgb(89, 89, 89); letter-spacing: 1px; box-sizing: border-box !important; overflow-wrap: break-word !important;">&nbsp;的小姐姐，她说收到 offer 的时候正是疫情严峻的时期，当时心情很平静。但是回头看大学的一路，却是充满坎坷：</span><span style="margin: 0px; padding: 0px; max-width: 100%; font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 14px; text-align: justify; white-space: normal; letter-spacing: 1px; color: rgb(40, 167, 169); box-sizing: border-box !important; overflow-wrap: break-word !important;">与心仪的大学无缘、中途改变留学目标国家、零科研情况下退出实验室、转专业申请……</span><span style="margin: 0px; padding: 0px; max-width: 100%; font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 14px; text-align: justify; white-space: normal; color: rgb(89, 89, 89); letter-spacing: 1px; box-sizing: border-box !important; overflow-wrap: break-word !important;">我们往下读，看她是如何走出困境，一步步向梦校靠近的。</span></p><p>    <span style="margin: 0px; padding: 0px; max-width: 100%; font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 14px; text-align: justify; white-space: normal; color: rgb(89, 89, 89); letter-spacing: 1px; box-sizing: border-box !important; overflow-wrap: break-word !important;"><br/></span></p><p style="text-align: center;">    <span style="margin: 0px; padding: 0px; max-width: 100%; font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 14px; text-align: justify; white-space: normal; color: rgb(89, 89, 89); letter-spacing: 1px; box-sizing: border-box !important; overflow-wrap: break-word !important;"><br/></span></p><p style="text-align: center;">    <span style="margin: 0px; padding: 0px; max-width: 100%; font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 14px; text-align: justify; white-space: normal; color: rgb(89, 89, 89); letter-spacing: 1px; box-sizing: border-box !important; overflow-wrap: break-word !important;"><strong style="margin: 0px; padding: 0px; max-width: 100%; color: rgb(51, 51, 51); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 17px; letter-spacing: 1px; text-align: center; white-space: normal; box-sizing: border-box !important; overflow-wrap: break-word !important;"><span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(40, 167, 169);">棕榈学员 Viola</span></strong></span></p><p style="text-align: center;">    <span style="margin: 0px; padding: 0px; max-width: 100%; font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 14px; text-align: justify; white-space: normal; color: rgb(89, 89, 89); letter-spacing: 1px; box-sizing: border-box !important; overflow-wrap: break-word !important;"><strong style="margin: 0px; padding: 0px; max-width: 100%; color: rgb(51, 51, 51); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 17px; letter-spacing: 1px; text-align: center; white-space: normal; box-sizing: border-box !important; overflow-wrap: break-word !important;"><span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(40, 167, 169);"><img src="http://cms.palmdrive.cn/file/5ea67d1b8f8b796a9621c04b" style="width: 218px; height: 212px;"/></span></strong></span></p><p style="text-align: center;">    <br/></p><p style="text-align: center;">    <br/></p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px 0.5em; max-width: 100%; clear: both; min-height: 1em; color: rgb(51, 51, 51); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 17px; text-align: justify; white-space: normal; line-height: 1.75em; letter-spacing: 1px; box-sizing: border-box !important; overflow-wrap: break-word !important;">    <strong style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important;"><span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(89, 89, 89);">本科：</span></strong><span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(89, 89, 89);">北京理工大学 生物工程专业</span></p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px 0.5em; max-width: 100%; clear: both; min-height: 1em; color: rgb(51, 51, 51); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 17px; text-align: justify; white-space: normal; line-height: 1.75em; letter-spacing: 1px; box-sizing: border-box !important; overflow-wrap: break-word !important;">    <strong style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important;"><span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(89, 89, 89);">GPA：</span></strong><span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(89, 89, 89);">91/100</span></p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px 0.5em; max-width: 100%; clear: both; min-height: 1em; color: rgb(51, 51, 51); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 17px; text-align: justify; white-space: normal; line-height: 1.75em; letter-spacing: 1px; box-sizing: border-box !important; overflow-wrap: break-word !important;">    <strong style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important;"><span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(89, 89, 89);">雅思：</span></strong><span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(89, 89, 89);">7.5</span></p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px 0.5em; max-width: 100%; clear: both; min-height: 1em; color: rgb(51, 51, 51); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 17px; text-align: justify; white-space: normal; line-height: 1.75em; letter-spacing: 1px; box-sizing: border-box !important; overflow-wrap: break-word !important;">    <strong style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important;"><span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(89, 89, 89);">托福：</span></strong><span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(89, 89, 89);">112</span></p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px 0.5em; max-width: 100%; clear: both; min-height: 1em; color: rgb(51, 51, 51); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 17px; text-align: justify; white-space: normal; line-height: 1.75em; letter-spacing: 1px; box-sizing: border-box !important; overflow-wrap: break-word !important;">    <strong style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important;"><span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(89, 89, 89);">即将就读：</span></strong><span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(89, 89, 89);">耶鲁大学 生物统计专业（奖学金 32,000 刀）</span></p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px 0.5em; max-width: 100%; clear: both; min-height: 1em; color: rgb(51, 51, 51); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 17px; text-align: justify; white-space: normal; line-height: 1.75em; letter-spacing: 1px; box-sizing: border-box !important; overflow-wrap: break-word !important;">    <strong style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important;"><span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(89, 89, 89);">其他 offer：</span></strong><span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(89, 89, 89);">杜克大学、密歇根大学安娜堡分校、埃默里大学、华盛顿大学圣路易斯分校、加州大学洛杉矶分校、康奈尔大学、哥伦比亚大学</span></p><p style="text-align: center;">    <br/></p><p style="text-align: center;">    <br/></p><p style="text-align: center;">    <strong style="margin: 0px; padding: 0px; max-width: 100%; color: rgb(40, 167, 169); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; letter-spacing: 1px; text-align: center; white-space: normal; box-sizing: border-box !important; overflow-wrap: break-word !important;">我的留学之路，从转折开始</strong></p><p style="text-align: center;">    <strong style="margin: 0px; padding: 0px; max-width: 100%; color: rgb(40, 167, 169); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; letter-spacing: 1px; text-align: center; white-space: normal; box-sizing: border-box !important; overflow-wrap: break-word !important;"><br/></strong></p><p style="text-align: center;">    <strong style="margin: 0px; padding: 0px; max-width: 100%; color: rgb(40, 167, 169); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; letter-spacing: 1px; text-align: center; white-space: normal; box-sizing: border-box !important; overflow-wrap: break-word !important;"></strong></p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px 0.5em; max-width: 100%; clear: both; min-height: 1em; color: rgb(51, 51, 51); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 17px; text-align: justify; white-space: normal; line-height: 1.75em; letter-spacing: 1px; box-sizing: border-box !important; overflow-wrap: break-word !important;">    <span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(89, 89, 89);">我是一个很典型的理工生，</span><span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(40, 167, 169);">我希望做什么事情都喜欢先做规划，有条有理的。</span><span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(89, 89, 89);">但是有一点不好的就是，过程中总会遇到一些打乱规划的意外，当事情没有往我预想的方向发展的时候，我就会慌乱、迷茫，直到重新找到方向，步入正轨。</span></p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px 0.5em; max-width: 100%; clear: both; min-height: 1em; color: rgb(51, 51, 51); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 17px; text-align: justify; white-space: normal; line-height: 1.75em; letter-spacing: 1px; box-sizing: border-box !important; overflow-wrap: break-word !important;">    <span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(89, 89, 89);">&nbsp;</span></p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px 0.5em; max-width: 100%; clear: both; min-height: 1em; color: rgb(51, 51, 51); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 17px; text-align: justify; white-space: normal; line-height: 1.75em; letter-spacing: 1px; box-sizing: border-box !important; overflow-wrap: break-word !important;">    <span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(89, 89, 89);">大学还没开始，我就遭遇了一次人生的转折。</span></p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px 0.5em; max-width: 100%; clear: both; min-height: 1em; color: rgb(51, 51, 51); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 17px; text-align: justify; white-space: normal; line-height: 1.75em; letter-spacing: 1px; box-sizing: border-box !important; overflow-wrap: break-word !important;">    <span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(89, 89, 89);">&nbsp;</span></p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px 0.5em; max-width: 100%; clear: both; min-height: 1em; color: rgb(51, 51, 51); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 17px; text-align: justify; white-space: normal; line-height: 1.75em; letter-spacing: 1px; box-sizing: border-box !important; overflow-wrap: break-word !important;">    <span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(89, 89, 89);">上大学之前，其实我根本没有想过会来学生物，因为</span><span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(40, 167, 169);">我高中的时候一直都想去学临床医学，但是高考的时候没有考好，我想去的医学院全部都上不</span><span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; color: rgb(40, 167, 169); font-size: 14px;">了。</span><span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(89, 89, 89);">冲着北理985的头衔，我来到这里学生物专业。</span></p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px 0.5em; max-width: 100%; clear: both; min-height: 1em; color: rgb(51, 51, 51); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 17px; text-align: justify; white-space: normal; line-height: 1.75em; letter-spacing: 1px; box-sizing: border-box !important; overflow-wrap: break-word !important;">    <span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(89, 89, 89);">&nbsp;</span></p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px 0.5em; max-width: 100%; clear: both; min-height: 1em; color: rgb(51, 51, 51); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 17px; text-align: justify; white-space: normal; line-height: 1.75em; letter-spacing: 1px; box-sizing: border-box !important; overflow-wrap: break-word !important;">    <span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(89, 89, 89);">这对我来说是一个很大的挫折，以至于我大一挺迷茫的，然后大一上结束的时候，偶然发现可以考虑去德国留学，有了这个目标，我开始学雅思、学德语。</span></p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px 0.5em; max-width: 100%; clear: both; min-height: 1em; color: rgb(51, 51, 51); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 17px; text-align: justify; white-space: normal; line-height: 1.75em; letter-spacing: 1px; box-sizing: border-box !important; overflow-wrap: break-word !important;">    <span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(89, 89, 89);">&nbsp;</span></p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px 0.5em; max-width: 100%; clear: both; min-height: 1em; color: rgb(51, 51, 51); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 17px; text-align: justify; white-space: normal; line-height: 1.75em; letter-spacing: 1px; box-sizing: border-box !important; overflow-wrap: break-word !important;">    <span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(89, 89, 89);">第二次转折又打破了留学德国的计划。</span></p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px 0.5em; max-width: 100%; clear: both; min-height: 1em; color: rgb(51, 51, 51); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 17px; text-align: justify; white-space: normal; line-height: 1.75em; letter-spacing: 1px; box-sizing: border-box !important; overflow-wrap: break-word !important;">    <span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(89, 89, 89);">&nbsp;</span></p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px 0.5em; max-width: 100%; clear: both; min-height: 1em; color: rgb(51, 51, 51); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 17px; text-align: justify; white-space: normal; line-height: 1.75em; letter-spacing: 1px; box-sizing: border-box !important; overflow-wrap: break-word !important;">    <span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(89, 89, 89);">大三的时候，我进入了学校某个老师的生物科研实验室，</span><span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(40, 167, 169);">发现自己真的不喜欢做实验，于是就萌生了转专业的想法。</span><span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(89, 89, 89);">通过一些调研之后发现，在可选范围内，我对生物统计学更感兴趣。而如果要转专业留学，相比于德国、英国、加拿大，美国对转专业的容忍度更高，而且很多生统名校都在美国。</span><span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(40, 167, 169);">所以在大三上学期，我才确定要申请美国的生物统计专业的名校。</span></p><p style="text-align: center;">    <strong style="margin: 0px; padding: 0px; max-width: 100%; color: rgb(40, 167, 169); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; letter-spacing: 1px; text-align: center; white-space: normal; box-sizing: border-box !important; overflow-wrap: break-word !important;"><br/></strong></p><p style="text-align: center;">    <strong style="margin: 0px; padding: 0px; max-width: 100%; color: rgb(40, 167, 169); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; letter-spacing: 1px; text-align: center; white-space: normal; box-sizing: border-box !important; overflow-wrap: break-word !important;"><br/></strong></p><p style="text-align: center;">    <strong style="margin: 0px; padding: 0px; max-width: 100%; color: rgb(40, 167, 169); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; letter-spacing: 1px; text-align: center; white-space: normal; box-sizing: border-box !important; overflow-wrap: break-word !important;"><img src="http://cms.palmdrive.cn/file/5ea67d688f8b796a9621c05a" style="width: 648px; height: 722px;"/></strong><br/></p><p style="text-align: center;">    <strong style="margin: 0px; padding: 0px; max-width: 100%; color: rgb(40, 167, 169); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; letter-spacing: 1px; text-align: center; white-space: normal; box-sizing: border-box !important; overflow-wrap: break-word !important;"></strong></p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px 0.5em; max-width: 100%; clear: both; min-height: 1em; line-height: 1.75em; letter-spacing: 1px; text-align: center; box-sizing: border-box !important; overflow-wrap: break-word !important;">    <span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 12px; color: rgb(136, 136, 136);">（北理的秋。图片由学员提供，未经允许不得转载）</span><br/></p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px 0.5em; max-width: 100%; clear: both; min-height: 1em; line-height: 1.75em; letter-spacing: 1px; box-sizing: border-box !important; overflow-wrap: break-word !important;">    <br/></p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px 0.5em; max-width: 100%; clear: both; min-height: 1em; color: rgb(51, 51, 51); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 17px; text-align: justify; white-space: normal; line-height: 1.75em; letter-spacing: 1px; box-sizing: border-box !important; overflow-wrap: break-word !important;">    <span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(89, 89, 89);">在这里用我的亲身经历，给不喜欢所学专业的同学一些</span><strong style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important;"><span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(40, 167, 169);">转专业 tips：</span></strong></p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px 0.5em; max-width: 100%; clear: both; min-height: 1em; color: rgb(51, 51, 51); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 17px; text-align: justify; white-space: normal; line-height: 1.75em; letter-spacing: 1px; box-sizing: border-box !important; overflow-wrap: break-word !important;">    <span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; color: rgb(89, 89, 89); font-size: 14px;"><br/></span></p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px 0.5em; max-width: 100%; clear: both; min-height: 1em; color: rgb(51, 51, 51); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 17px; text-align: justify; white-space: normal; line-height: 1.75em; letter-spacing: 1px; box-sizing: border-box !important; overflow-wrap: break-word !important;">    <span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(40, 167, 169);">1. 尽早确定自己到底喜不喜欢本专业，如果不喜欢就不要抱着得过且过的心态再继续下去。</span><span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; color: rgb(89, 89, 89); font-size: 14px;">很多大学大一结束之后是可以转专业的，这是一条路，另一条路就是像我一样转专业申请留学。</span></p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px 0.5em; max-width: 100%; clear: both; min-height: 1em; color: rgb(51, 51, 51); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 17px; text-align: justify; white-space: normal; line-height: 1.75em; letter-spacing: 1px; box-sizing: border-box !important; overflow-wrap: break-word !important;">    <span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; color: rgb(89, 89, 89); font-size: 14px;"><br/></span></p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px 0.5em; max-width: 100%; clear: both; min-height: 1em; color: rgb(51, 51, 51); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 17px; text-align: justify; white-space: normal; line-height: 1.75em; letter-spacing: 1px; box-sizing: border-box !important; overflow-wrap: break-word !important;">    <span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(40, 167, 169);">2. 选修与目标专业相近的课程，</span><span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; color: rgb(89, 89, 89); font-size: 14px;">本校的最好，因为这些课的成绩会出现在你的成绩单上；如果条件不允许，可以上网课，我当时是在 cousera 上选了一些统计类的课程。</span></p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px 0.5em; max-width: 100%; clear: both; min-height: 1em; color: rgb(51, 51, 51); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 17px; text-align: justify; white-space: normal; line-height: 1.75em; letter-spacing: 1px; box-sizing: border-box !important; overflow-wrap: break-word !important;">    <span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; color: rgb(89, 89, 89); font-size: 14px;"><br/></span></p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px 0.5em; max-width: 100%; clear: both; min-height: 1em; color: rgb(51, 51, 51); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 17px; text-align: justify; white-space: normal; line-height: 1.75em; letter-spacing: 1px; box-sizing: border-box !important; overflow-wrap: break-word !important;">    <span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(40, 167, 169);">3. 从实习、科研、竞赛中增加背景经历</span><span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; color: rgb(89, 89, 89); font-size: 14px;">，我当时确定要转专业之后，就找了一份 CRO 公司的实习，做生物统计师的助手；大三的暑假参加了我们学校和 UCI 合作的一个暑期科研，自己独立承担的一个生物统计相关的项目；紧接着又参加了一个数据挖掘相关的比赛。</span></p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px 0.5em; max-width: 100%; clear: both; min-height: 1em; color: rgb(51, 51, 51); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 17px; text-align: justify; white-space: normal; line-height: 1.75em; letter-spacing: 1px; box-sizing: border-box !important; overflow-wrap: break-word !important;">    <span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; color: rgb(89, 89, 89); font-size: 14px;"><br/></span></p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px 0.5em; max-width: 100%; clear: both; min-height: 1em; color: rgb(51, 51, 51); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 17px; text-align: justify; white-space: normal; line-height: 1.75em; letter-spacing: 1px; box-sizing: border-box !important; overflow-wrap: break-word !important;">    <span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(40, 167, 169);">4. 一定要去把您想转的项目上的先修课程要求看清楚，建议可以去看专排 Top 的学校官网，</span><span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; color: rgb(89, 89, 89); font-size: 14px;">你可以按照那个要求去准备自己，比如我当时是看 Harvard 的官网，它明确要求你要学线代、概率论、微积分这三门基本的数学课，还需要时间序列分析、随机过程等高阶统计课，还必须至少在 R、python、C 里面至少会一门编程语言。</span></p><p style="text-align: center;">    <strong style="margin: 0px; padding: 0px; max-width: 100%; color: rgb(40, 167, 169); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; letter-spacing: 1px; text-align: center; white-space: normal; box-sizing: border-box !important; overflow-wrap: break-word !important;"><br/></strong></p><p style="text-align: center;">    <strong style="margin: 0px; padding: 0px; max-width: 100%; color: rgb(40, 167, 169); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; letter-spacing: 1px; text-align: center; white-space: normal; box-sizing: border-box !important; overflow-wrap: break-word !important;"><br/></strong></p><p style="text-align: center;">    <strong style="margin: 0px; padding: 0px; max-width: 100%; color: rgb(40, 167, 169); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; letter-spacing: 1px; text-align: center; white-space: normal; box-sizing: border-box !important; overflow-wrap: break-word !important;"><img src="http://cms.palmdrive.cn/file/5ea67d9a8f8b796a9621c060" style="width: 730px; height: 209px;"/></strong><br/></p><p style="text-align: center;">    <strong style="margin: 0px; padding: 0px; max-width: 100%; color: rgb(40, 167, 169); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; letter-spacing: 1px; text-align: center; white-space: normal; box-sizing: border-box !important; overflow-wrap: break-word !important;"><span style="color: rgb(136, 136, 136); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 12px; letter-spacing: 1px; text-align: center; white-space: normal;">（申请相关时间轴）</span></strong></p><p style="text-align: center;">    <strong style="margin: 0px; padding: 0px; max-width: 100%; color: rgb(40, 167, 169); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; letter-spacing: 1px; text-align: center; white-space: normal; box-sizing: border-box !important; overflow-wrap: break-word !important;"><span style="color: rgb(136, 136, 136); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 12px; letter-spacing: 1px; text-align: center; white-space: normal;"><br/></span></strong></p><p style="text-align: center;">    <strong style="margin: 0px; padding: 0px; max-width: 100%; color: rgb(40, 167, 169); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; letter-spacing: 1px; text-align: center; white-space: normal; box-sizing: border-box !important; overflow-wrap: break-word !important;"><span style="color: rgb(136, 136, 136); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 12px; letter-spacing: 1px; text-align: center; white-space: normal;"><br/></span></strong></p><p style="text-align: center;">    <strong style="margin: 0px; padding: 0px; max-width: 100%; color: rgb(40, 167, 169); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; letter-spacing: 1px; text-align: center; white-space: normal; box-sizing: border-box !important; overflow-wrap: break-word !important;"><span style="color: rgb(136, 136, 136); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; letter-spacing: 1px; text-align: center; white-space: normal;"><strong style="margin: 0px; padding: 0px; max-width: 100%; color: rgb(40, 167, 169); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; letter-spacing: 1px; text-align: center; white-space: normal; box-sizing: border-box !important; overflow-wrap: break-word !important;"><span style="font-size:18px">最煎熬的日子，悬崖勒马后找到新出路</span></strong></span></strong></p><p style="text-align: center;">    <strong style="margin: 0px; padding: 0px; max-width: 100%; color: rgb(40, 167, 169); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; letter-spacing: 1px; text-align: center; white-space: normal; box-sizing: border-box !important; overflow-wrap: break-word !important;"><span style="color: rgb(136, 136, 136); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; letter-spacing: 1px; text-align: center; white-space: normal;"><strong style="margin: 0px; padding: 0px; max-width: 100%; color: rgb(40, 167, 169); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; letter-spacing: 1px; text-align: center; white-space: normal; box-sizing: border-box !important; overflow-wrap: break-word !important;"><span style="font-size:18px"><br/></span></strong></span></strong></p><p style="text-align: center;">    <strong style="margin: 0px; padding: 0px; max-width: 100%; color: rgb(40, 167, 169); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; letter-spacing: 1px; text-align: center; white-space: normal; box-sizing: border-box !important; overflow-wrap: break-word !important;"><span style="color: rgb(136, 136, 136); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; letter-spacing: 1px; text-align: center; white-space: normal;"><strong style="margin: 0px; padding: 0px; max-width: 100%; color: rgb(40, 167, 169); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; letter-spacing: 1px; text-align: center; white-space: normal; box-sizing: border-box !important; overflow-wrap: break-word !important;"><span style="font-size:18px"><br/></span></strong></span></strong></p><p style="text-align: center;">    <strong style="margin: 0px; padding: 0px; max-width: 100%; color: rgb(40, 167, 169); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; letter-spacing: 1px; text-align: center; white-space: normal; box-sizing: border-box !important; overflow-wrap: break-word !important;"><span style="color: rgb(136, 136, 136); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; letter-spacing: 1px; text-align: center; white-space: normal;"><strong style="margin: 0px; padding: 0px; max-width: 100%; color: rgb(40, 167, 169); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; letter-spacing: 1px; text-align: center; white-space: normal; box-sizing: border-box !important; overflow-wrap: break-word !important;"><span style="font-size:18px"></span></strong></span></strong></p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px 0.5em; max-width: 100%; clear: both; min-height: 1em; color: rgb(51, 51, 51); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 17px; text-align: justify; white-space: normal; line-height: 1.75em; letter-spacing: 1px; box-sizing: border-box !important; overflow-wrap: break-word !important;">    <span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(40, 167, 169);">当我有了转专业的想法之后，我就在知乎上搜索经验帖，我发现有个回答写得对我很有启发，作者是棕榈大道，</span><span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(89, 89, 89);">于是我加了棕榈的小助手，又到棕榈的北京办公室去实地了解，发现我有什么疑惑他们都能帮我解答，尤其在转专业申请这方面，我了解到棕榈帮助过很多化学、药学等不同专业背景的学员转专业到生物统计，考量之后，我决定和棕榈签约。</span></p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px 0.5em; max-width: 100%; clear: both; min-height: 1em; color: rgb(51, 51, 51); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 17px; text-align: justify; white-space: normal; line-height: 1.75em; letter-spacing: 1px; box-sizing: border-box !important; overflow-wrap: break-word !important;">    <span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(89, 89, 89);"><strong style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important;">&nbsp;</strong></span></p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px 0.5em; max-width: 100%; clear: both; min-height: 1em; color: rgb(51, 51, 51); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 17px; text-align: justify; white-space: normal; line-height: 1.75em; letter-spacing: 1px; box-sizing: border-box !important; overflow-wrap: break-word !important;">    <span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(89, 89, 89);">前文说到</span><span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(40, 167, 169);">我在大三的时候进入了一个实验室，才发现自己不喜欢做实验，这个过程，其实很煎熬。</span></p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px 0.5em; max-width: 100%; clear: both; min-height: 1em; color: rgb(51, 51, 51); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 17px; text-align: justify; white-space: normal; line-height: 1.75em; letter-spacing: 1px; box-sizing: border-box !important; overflow-wrap: break-word !important;">    <span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(89, 89, 89);">&nbsp;</span></p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px 0.5em; max-width: 100%; clear: both; min-height: 1em; color: rgb(51, 51, 51); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 17px; text-align: justify; white-space: normal; line-height: 1.75em; letter-spacing: 1px; box-sizing: border-box !important; overflow-wrap: break-word !important;">    <span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(89, 89, 89);">我不喜欢做生物实验，是因为生物实验本来就是不定因素非常大的实验，而且又很累，一个实验可能要四五个小时，甚至更久，很多时候忙活了一天，发现什么结果都没有，但是又不知道问题出在哪里，就好像不停地重复劳动，但是没有正向回馈。</span></p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px 0.5em; max-width: 100%; clear: both; min-height: 1em; color: rgb(51, 51, 51); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 17px; text-align: justify; white-space: normal; line-height: 1.75em; letter-spacing: 1px; box-sizing: border-box !important; overflow-wrap: break-word !important;">    <span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(89, 89, 89);">&nbsp;</span></p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px 0.5em; max-width: 100%; clear: both; min-height: 1em; color: rgb(51, 51, 51); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 17px; text-align: justify; white-space: normal; line-height: 1.75em; letter-spacing: 1px; box-sizing: border-box !important; overflow-wrap: break-word !important;">    <span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(89, 89, 89);">也可能是我个人的性格不适合，而且我特别讨厌生物实验其实真正动脑子的时间很少，基本上可能两个小时里只有十分钟动脑子，把其他的时间都是在机械化无脑地重复一些实验操作。在实验室那段时间，我的心态很不平和，非常难受。</span></p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px 0.5em; max-width: 100%; clear: both; min-height: 1em; color: rgb(51, 51, 51); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 17px; text-align: justify; white-space: normal; line-height: 1.75em; letter-spacing: 1px; box-sizing: border-box !important; overflow-wrap: break-word !important;">    <span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(89, 89, 89);">&nbsp;</span></p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px 0.5em; max-width: 100%; clear: both; min-height: 1em; color: rgb(51, 51, 51); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 17px; text-align: justify; white-space: normal; line-height: 1.75em; letter-spacing: 1px; box-sizing: border-box !important; overflow-wrap: break-word !important;">    <strong style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important;"><span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(40, 167, 169);">后来有人拉了我一把。</span></strong></p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px 0.5em; max-width: 100%; clear: both; min-height: 1em; color: rgb(51, 51, 51); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 17px; text-align: justify; white-space: normal; line-height: 1.75em; letter-spacing: 1px; box-sizing: border-box !important; overflow-wrap: break-word !important;">    <span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(89, 89, 89);">&nbsp;</span></p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px 0.5em; max-width: 100%; clear: both; min-height: 1em; color: rgb(51, 51, 51); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 17px; text-align: justify; white-space: normal; line-height: 1.75em; letter-spacing: 1px; box-sizing: border-box !important; overflow-wrap: break-word !important;">    <span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(89, 89, 89);">虽然我在实验室里面很难受，而且继续下去对我申请生物统计并没有什么作用，但是我割舍不下，因为这算是我现在手上的唯一一个科研，</span><span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(40, 167, 169);">如果放弃，我就属于零科研状态。</span></p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px 0.5em; max-width: 100%; clear: both; min-height: 1em; color: rgb(51, 51, 51); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 17px; text-align: justify; white-space: normal; line-height: 1.75em; letter-spacing: 1px; box-sizing: border-box !important; overflow-wrap: break-word !important;">    <span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(89, 89, 89);">&nbsp;</span></p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px 0.5em; max-width: 100%; clear: both; min-height: 1em; color: rgb(51, 51, 51); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 17px; text-align: justify; white-space: normal; line-height: 1.75em; letter-spacing: 1px; box-sizing: border-box !important; overflow-wrap: break-word !important;">    <span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(89, 89, 89);">当时我的专业导师就以她的经验来告诉我：</span><span style="margin: 0px; padding: 0px; max-width: 100%; font-size: 14px; color: rgb(40, 167, 169); text-decoration-line: underline; box-sizing: border-box !important; overflow-wrap: break-word !important;">只有舍得放弃，你才有时间去找生物统计相关的经历，不然会影响到你将来对于机会的抓取。</span></p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px 0.5em; max-width: 100%; clear: both; min-height: 1em; color: rgb(51, 51, 51); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 17px; text-align: justify; white-space: normal; line-height: 1.75em; letter-spacing: 1px; box-sizing: border-box !important; overflow-wrap: break-word !important;">    <span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(89, 89, 89);">&nbsp;</span></p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px 0.5em; max-width: 100%; clear: both; min-height: 1em; color: rgb(51, 51, 51); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 17px; text-align: justify; white-space: normal; line-height: 1.75em; letter-spacing: 1px; box-sizing: border-box !important; overflow-wrap: break-word !important;">    <span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(89, 89, 89);">跟她谈完了之后，我就去跟老师说我想退出这个实验室。</span><span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(40, 167, 169);">退出了这个实验室之后，我终于有了时间去准备我的实习申请、暑研申请。</span></p><p style="text-align: center;">    <strong style="margin: 0px; padding: 0px; max-width: 100%; color: rgb(40, 167, 169); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; letter-spacing: 1px; text-align: center; white-space: normal; box-sizing: border-box !important; overflow-wrap: break-word !important;"><span style="color: rgb(136, 136, 136); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; letter-spacing: 1px; text-align: center; white-space: normal;"><strong style="margin: 0px; padding: 0px; max-width: 100%; color: rgb(40, 167, 169); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; letter-spacing: 1px; text-align: center; white-space: normal; box-sizing: border-box !important; overflow-wrap: break-word !important;"><span style="font-size:18px"><br/></span></strong></span></strong></p><p style="text-align: center;">    <strong style="margin: 0px; padding: 0px; max-width: 100%; color: rgb(40, 167, 169); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; letter-spacing: 1px; text-align: center; white-space: normal; box-sizing: border-box !important; overflow-wrap: break-word !important;"><span style="color: rgb(136, 136, 136); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; letter-spacing: 1px; text-align: center; white-space: normal;"><strong style="margin: 0px; padding: 0px; max-width: 100%; color: rgb(40, 167, 169); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; letter-spacing: 1px; text-align: center; white-space: normal; box-sizing: border-box !important; overflow-wrap: break-word !important;"><span style="font-size:18px"><br/></span></strong></span></strong></p><p style="text-align: center;">    <strong style="margin: 0px; padding: 0px; max-width: 100%; color: rgb(40, 167, 169); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; letter-spacing: 1px; text-align: center; white-space: normal; box-sizing: border-box !important; overflow-wrap: break-word !important;"><span style="color: rgb(136, 136, 136); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; letter-spacing: 1px; text-align: center; white-space: normal;"><strong style="margin: 0px; padding: 0px; max-width: 100%; color: rgb(40, 167, 169); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; letter-spacing: 1px; text-align: center; white-space: normal; box-sizing: border-box !important; overflow-wrap: break-word !important;"><span style="font-size:18px"><img src="http://cms.palmdrive.cn/file/5ea67de58f8b796a9621c077"/></span></strong></span></strong><br/></p><p style="text-align: center;">    <br/></p><p style="text-align: center;">    <br/></p><p style="text-align: center;">    <strong style="margin: 0px; padding: 0px; max-width: 100%; color: rgb(40, 167, 169); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; letter-spacing: 1px; text-align: center; white-space: normal; box-sizing: border-box !important; overflow-wrap: break-word !important;">懵懵懂懂种子期，我拿下了 UCI 暑研</strong></p><p style="text-align: center;">    <strong style="margin: 0px; padding: 0px; max-width: 100%; color: rgb(40, 167, 169); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; letter-spacing: 1px; text-align: center; white-space: normal; box-sizing: border-box !important; overflow-wrap: break-word !important;"><br/></strong></p><p style="text-align: center;">    <strong style="margin: 0px; padding: 0px; max-width: 100%; color: rgb(40, 167, 169); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; letter-spacing: 1px; text-align: center; white-space: normal; box-sizing: border-box !important; overflow-wrap: break-word !important;"><br/></strong></p><p style="text-align: center;">    <strong style="margin: 0px; padding: 0px; max-width: 100%; color: rgb(40, 167, 169); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; letter-spacing: 1px; text-align: center; white-space: normal; box-sizing: border-box !important; overflow-wrap: break-word !important;"></strong></p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px 0.5em; max-width: 100%; clear: both; min-height: 1em; color: rgb(51, 51, 51); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 17px; text-align: justify; white-space: normal; line-height: 1.75em; letter-spacing: 1px; box-sizing: border-box !important; overflow-wrap: break-word !important;">    <span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(89, 89, 89);">当时正是大三刚开始，因为还没有到申请，棕榈就给我配备一个种子主导师 Xiaoxuan 导师。我和 Xiaoxuan 导师说了我们的学校跟 UCI 有一个合作的暑研，12 月份到 1 月份是申请时间，但是我特别没有自信，因为在这之前我并没有科研经历。</span></p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px 0.5em; max-width: 100%; clear: both; min-height: 1em; color: rgb(51, 51, 51); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 17px; text-align: justify; white-space: normal; line-height: 1.75em; letter-spacing: 1px; box-sizing: border-box !important; overflow-wrap: break-word !important;">    <span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(89, 89, 89);">&nbsp;</span></p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px 0.5em; max-width: 100%; clear: both; min-height: 1em; color: rgb(51, 51, 51); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 17px; text-align: justify; white-space: normal; line-height: 1.75em; letter-spacing: 1px; box-sizing: border-box !important; overflow-wrap: break-word !important;">    <span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(89, 89, 89);">在种子期间，</span><span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(40, 167, 169);">Xiaoxuan 导师帮我改了简历和文书，模拟了暑研的面试，还指导我申请实习、科研。</span></p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px 0.5em; max-width: 100%; clear: both; min-height: 1em; color: rgb(51, 51, 51); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 17px; text-align: justify; white-space: normal; line-height: 1.75em; letter-spacing: 1px; box-sizing: border-box !important; overflow-wrap: break-word !important;">    <span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(89, 89, 89);">&nbsp;</span></p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px 0.5em; max-width: 100%; clear: both; min-height: 1em; color: rgb(51, 51, 51); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 17px; text-align: justify; white-space: normal; line-height: 1.75em; letter-spacing: 1px; box-sizing: border-box !important; overflow-wrap: break-word !important;">    <span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(89, 89, 89);">对我很有启发一点就是，我的种子主导师</span><span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(40, 167, 169);">对简历讲得非常细致</span><span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(89, 89, 89);">，她教我逻辑结构框架怎么打之后，我就自己写出来一版简历，种子主导师再帮我修改，这份简历的结构我在申请季都在用。</span></p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px 0.5em; max-width: 100%; clear: both; min-height: 1em; color: rgb(51, 51, 51); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 17px; text-align: justify; white-space: normal; line-height: 1.75em; letter-spacing: 1px; box-sizing: border-box !important; overflow-wrap: break-word !important;">    <span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(89, 89, 89);">&nbsp;</span></p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px 0.5em; max-width: 100%; clear: both; min-height: 1em; color: rgb(51, 51, 51); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 17px; text-align: justify; white-space: normal; line-height: 1.75em; letter-spacing: 1px; box-sizing: border-box !important; overflow-wrap: break-word !important;">    <span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(40, 167, 169);">申请提交了，我却错过了第一次面试邀请。</span><span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(89, 89, 89);">那时我还没有养成天天查邮箱的习惯，面试邀请躺在我的邮箱很多天我才看到，我当时特别特别慌乱，就给我的种子主导师发消息，她各种安慰我，告诉我其实第一封邮件是询问性的邮件，让我赶紧去回一封邮件，说明一下理由，回复一个可面试的时间。</span></p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px 0.5em; max-width: 100%; clear: both; min-height: 1em; color: rgb(51, 51, 51); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 17px; text-align: justify; white-space: normal; line-height: 1.75em; letter-spacing: 1px; box-sizing: border-box !important; overflow-wrap: break-word !important;">    <span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(89, 89, 89);">&nbsp;</span></p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px 0.5em; max-width: 100%; clear: both; min-height: 1em; color: rgb(51, 51, 51); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 17px; text-align: justify; white-space: normal; line-height: 1.75em; letter-spacing: 1px; box-sizing: border-box !important; overflow-wrap: break-word !important;">    <span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(89, 89, 89);">面试之前，导师把暑研常见的问题整理成一个 list，我先自己根据 list 准备，我们再模拟一遍。</span><span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(40, 167, 169);">真正到面试的时候，面试官问的问题我们基本都准备过了，于是顺利拿下暑研的资格。</span></p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px 0.5em; max-width: 100%; clear: both; min-height: 1em; color: rgb(51, 51, 51); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 17px; text-align: justify; white-space: normal; line-height: 1.75em; letter-spacing: 1px; box-sizing: border-box !important; overflow-wrap: break-word !important;">    <span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(89, 89, 89);">&nbsp;</span></p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px 0.5em; max-width: 100%; clear: both; min-height: 1em; color: rgb(51, 51, 51); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 17px; text-align: justify; white-space: normal; line-height: 1.75em; letter-spacing: 1px; box-sizing: border-box !important; overflow-wrap: break-word !important;">    <span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(89, 89, 89);">后来回头看，</span><span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(40, 167, 169);">我觉得含金量最大的经历就是暑研，</span><span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(89, 89, 89);">因为这是一个完完全全由我自己一个人承担、不是小组合作的一个生统相关的项目，而且我拿到了导师的推荐信，并且我的导师对我的评价很好。</span></p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px 0.5em; max-width: 100%; clear: both; min-height: 1em; color: rgb(51, 51, 51); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 17px; text-align: justify; white-space: normal; line-height: 1.75em; letter-spacing: 1px; box-sizing: border-box !important; overflow-wrap: break-word !important;">    <span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(89, 89, 89);">&nbsp;</span></p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px 0.5em; max-width: 100%; clear: both; min-height: 1em; color: rgb(51, 51, 51); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 17px; text-align: justify; white-space: normal; line-height: 1.75em; letter-spacing: 1px; box-sizing: border-box !important; overflow-wrap: break-word !important;">    <span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(89, 89, 89);">也是参加暑研之后，我才慢慢了解到， 其实不是我不适合搞科研，而是我的方向没有选对而已。</span><span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(40, 167, 169);">我选对了方向，如果我感兴趣的话，我一样可以做得很好。所以我很感激我的专业导师拉了我一把，让我重新找到方向。</span></p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px 0.5em; max-width: 100%; clear: both; min-height: 1em; color: rgb(51, 51, 51); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 17px; text-align: justify; white-space: normal; line-height: 1.75em; letter-spacing: 1px; box-sizing: border-box !important; overflow-wrap: break-word !important;">    <span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(40, 167, 169);"><br/></span></p><p style="text-align: center;">    <strong style="margin: 0px; padding: 0px; max-width: 100%; color: rgb(40, 167, 169); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; letter-spacing: 1px; text-align: center; white-space: normal; box-sizing: border-box !important; overflow-wrap: break-word !important;"><br/></strong></p><p style="text-align: center;">    <strong style="margin: 0px; padding: 0px; max-width: 100%; color: rgb(40, 167, 169); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; letter-spacing: 1px; text-align: center; white-space: normal; box-sizing: border-box !important; overflow-wrap: break-word !important;"><br/></strong></p><p style="text-align: center;">    <strong style="margin: 0px; padding: 0px; max-width: 100%; color: rgb(40, 167, 169); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; letter-spacing: 1px; text-align: center; white-space: normal; box-sizing: border-box !important; overflow-wrap: break-word !important;"><img src="http://cms.palmdrive.cn/file/5ea67e1b8f8b796a9621c083" style="width: 717px; height: 394px;"/></strong><br/></p><p style="text-align: center;">    <strong style="margin: 0px; padding: 0px; max-width: 100%; color: rgb(40, 167, 169); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; letter-spacing: 1px; text-align: center; white-space: normal; box-sizing: border-box !important; overflow-wrap: break-word !important;"><span style="margin: 0px; padding: 0px; max-width: 100%; font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; text-align: center; white-space: normal; color: rgb(136, 136, 136); font-size: 12px; letter-spacing: 1px; box-sizing: border-box !important; overflow-wrap: break-word !important;">（UCI 的中心花园。</span><span style="margin: 0px; padding: 0px; max-width: 100%; font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; text-align: center; white-space: normal; color: rgb(136, 136, 136); font-size: 12px; letter-spacing: 1px; box-sizing: border-box !important; overflow-wrap: break-word !important;">图片由学员提供</span><span style="margin: 0px; padding: 0px; max-width: 100%; font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; text-align: center; white-space: normal; color: rgb(136, 136, 136); font-size: 12px; letter-spacing: 1px; box-sizing: border-box !important; overflow-wrap: break-word !important;">，未经允许不得转载</span><span style="margin: 0px; padding: 0px; max-width: 100%; font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; text-align: center; white-space: normal; color: rgb(136, 136, 136); font-size: 12px; letter-spacing: 1px; box-sizing: border-box !important; overflow-wrap: break-word !important;">）</span></strong></p><p style="text-align: center;">    <strong style="margin: 0px; padding: 0px; max-width: 100%; color: rgb(40, 167, 169); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; letter-spacing: 1px; text-align: center; white-space: normal; box-sizing: border-box !important; overflow-wrap: break-word !important;"><span style="margin: 0px; padding: 0px; max-width: 100%; font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; text-align: center; white-space: normal; color: rgb(136, 136, 136); font-size: 12px; letter-spacing: 1px; box-sizing: border-box !important; overflow-wrap: break-word !important;"><br/></span></strong></p><p style="text-align: center;">    <strong style="margin: 0px; padding: 0px; max-width: 100%; color: rgb(40, 167, 169); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; letter-spacing: 1px; text-align: center; white-space: normal; box-sizing: border-box !important; overflow-wrap: break-word !important;"><span style="margin: 0px; padding: 0px; max-width: 100%; font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; text-align: center; white-space: normal; color: rgb(136, 136, 136); font-size: 12px; letter-spacing: 1px; box-sizing: border-box !important; overflow-wrap: break-word !important;"><br/></span></strong></p><p style="text-align: center;">    <strong style="margin: 0px; padding: 0px; max-width: 100%; color: rgb(40, 167, 169); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; letter-spacing: 1px; text-align: center; white-space: normal; box-sizing: border-box !important; overflow-wrap: break-word !important;"><span style="margin: 0px; padding: 0px; max-width: 100%; font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; text-align: center; white-space: normal; color: rgb(136, 136, 136); font-size: 12px; letter-spacing: 1px; box-sizing: border-box !important; overflow-wrap: break-word !important;"></span></strong></p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px 0.5em; max-width: 100%; clear: both; min-height: 1em; color: rgb(51, 51, 51); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 17px; white-space: normal; line-height: 1.75em; letter-spacing: 1px; text-align: center; box-sizing: border-box !important; overflow-wrap: break-word !important;">    <span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; color: rgb(40, 167, 169); font-size: 16px;"><strong style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important;">申请季选校、写文书、网申，</strong></span></p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px 0.5em; max-width: 100%; clear: both; min-height: 1em; color: rgb(51, 51, 51); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 17px; white-space: normal; line-height: 1.75em; letter-spacing: 1px; text-align: center; box-sizing: border-box !important; overflow-wrap: break-word !important;">    <span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; color: rgb(40, 167, 169); font-size: 16px;"><strong style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important;">我不是一个人在战斗</strong></span></p><p style="text-align: center;">    <strong style="margin: 0px; padding: 0px; max-width: 100%; color: rgb(40, 167, 169); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; letter-spacing: 1px; text-align: center; white-space: normal; box-sizing: border-box !important; overflow-wrap: break-word !important;"><span style="margin: 0px; padding: 0px; max-width: 100%; font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; text-align: center; white-space: normal; color: rgb(136, 136, 136); font-size: 12px; letter-spacing: 1px; box-sizing: border-box !important; overflow-wrap: break-word !important;"><br/></span></strong></p><p style="text-align: center;">    <strong style="margin: 0px; padding: 0px; max-width: 100%; color: rgb(40, 167, 169); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; letter-spacing: 1px; text-align: center; white-space: normal; box-sizing: border-box !important; overflow-wrap: break-word !important;"><span style="margin: 0px; padding: 0px; max-width: 100%; font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; text-align: center; white-space: normal; color: rgb(136, 136, 136); font-size: 12px; letter-spacing: 1px; box-sizing: border-box !important; overflow-wrap: break-word !important;"><br/></span></strong></p><p style="text-align: left;">    <span style="color: rgb(89, 89, 89); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 14px; font-weight: 700; letter-spacing: 0.544px; text-align: justify; white-space: normal;">梦校耶鲁</span></p><p style="text-align: left;">    <br/></p><p style="text-align: left;">    <span style="color: rgb(89, 89, 89); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 14px; font-weight: 700; letter-spacing: 0.544px; text-align: justify; white-space: normal;"></span></p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px 0.5em; max-width: 100%; clear: both; min-height: 1em; color: rgb(51, 51, 51); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 17px; text-align: justify; white-space: normal; line-height: 1.75em; letter-spacing: 1px; box-sizing: border-box !important; overflow-wrap: break-word !important;">    <span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(40, 167, 169);">我选校的原则基本上是结合 U.S.news 上 public health school 的专排和&nbsp;<span style="margin: 0px; padding: 0px; max-width: 100%; font-family: Arial, sans-serif; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; box-sizing: border-box !important; overflow-wrap: break-word !important;">Biostatistics&nbsp;</span><span style="margin: 0px; padding: 0px; max-width: 100%; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; box-sizing: border-box !important; overflow-wrap: break-word !important;">的</span>专排，</span><span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(89, 89, 89);">从里面摘了 20 多所学校出来，因为我自己转专业出身，就排除了对数理要求特别高的一些学校，比如华盛顿大学和<span style="margin: 0px; padding: 0px; max-width: 100%; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; box-sizing: border-box !important; overflow-wrap: break-word !important;">北卡罗来纳州大学教堂山分校</span>；</span><span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(40, 167, 169);">再排除一年制的项目，结合综排，再上这些学校的官网，去看课程设置和选修课范围，</span><span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(89, 89, 89);">我更偏向可以自由选课或者跨学院选课的学院，自己先排出了一份 list。</span></p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px 0.5em; max-width: 100%; clear: both; min-height: 1em; color: rgb(51, 51, 51); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 17px; text-align: justify; white-space: normal; line-height: 1.75em; letter-spacing: 1px; box-sizing: border-box !important; overflow-wrap: break-word !important;">    <span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(89, 89, 89);">&nbsp;</span></p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px 0.5em; max-width: 100%; clear: both; min-height: 1em; color: rgb(51, 51, 51); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 17px; text-align: justify; white-space: normal; line-height: 1.75em; letter-spacing: 1px; box-sizing: border-box !important; overflow-wrap: break-word !important;">    <span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(89, 89, 89);">8 月份申请季开始的时候，我的主导师发给我一份他选出来的list，里面有70%左右和我的 list 是一致的，剩下的 30%，我们对学校和项目做了更充分的了解，讨论出了一份最终的 list。</span></p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px 0.5em; max-width: 100%; clear: both; min-height: 1em; color: rgb(51, 51, 51); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 17px; text-align: justify; white-space: normal; line-height: 1.75em; letter-spacing: 1px; box-sizing: border-box !important; overflow-wrap: break-word !important;">    <span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(89, 89, 89);">&nbsp;</span></p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px 0.5em; max-width: 100%; clear: both; min-height: 1em; color: rgb(51, 51, 51); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 17px; text-align: justify; white-space: normal; line-height: 1.75em; letter-spacing: 1px; box-sizing: border-box !important; overflow-wrap: break-word !important;">    <span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(40, 167, 169);">其中的最想去的学校是 JHU 和耶鲁，</span><span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(89, 89, 89);">所有在耶鲁的这个系待过的人都说这个系虽然小，但是很精致，大家联系很紧密，你想做什么课题，导师、前辈、校友都会给你支持和帮助，还有一点就是耶鲁所在的地理位置很好，综排也比较 Top，对以后找工作有一定的帮助。</span></p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px 0.5em; max-width: 100%; clear: both; min-height: 1em; color: rgb(51, 51, 51); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 17px; text-align: justify; white-space: normal; line-height: 1.75em; letter-spacing: 1px; box-sizing: border-box !important; overflow-wrap: break-word !important;">    <span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(89, 89, 89);"><br/></span></p><p style="text-align: center; margin-top: 0px; margin-bottom: 0px; padding: 0px 0.5em; max-width: 100%; clear: both; min-height: 1em; color: rgb(51, 51, 51); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 17px; white-space: normal; line-height: 1.75em; letter-spacing: 1px; box-sizing: border-box !important; overflow-wrap: break-word !important;">    <span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(89, 89, 89);"><img src="http://cms.palmdrive.cn/file/5ea67e718f8b796a9621c08a" style="width: 749px; height: 530px;"/></span></p><p style="text-align: center; margin-top: 0px; margin-bottom: 0px; padding: 0px 0.5em; max-width: 100%; clear: both; min-height: 1em; color: rgb(51, 51, 51); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 17px; white-space: normal; line-height: 1.75em; letter-spacing: 1px; box-sizing: border-box !important; overflow-wrap: break-word !important;">    <span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(89, 89, 89);"><span style="margin: 0px; padding: 0px; max-width: 100%; font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; letter-spacing: 1px; text-align: center; white-space: normal; color: rgb(136, 136, 136); font-size: 12px; box-sizing: border-box !important; overflow-wrap: break-word !important;">（选校 list 部分截图。</span><span style="margin: 0px; padding: 0px; max-width: 100%; font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; letter-spacing: 1px; text-align: center; white-space: normal; color: rgb(136, 136, 136); font-size: 12px; box-sizing: border-box !important; overflow-wrap: break-word !important;">图片由学员提供</span><span style="margin: 0px; padding: 0px; max-width: 100%; font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; letter-spacing: 1px; text-align: center; white-space: normal; color: rgb(136, 136, 136); font-size: 12px; box-sizing: border-box !important; overflow-wrap: break-word !important;">，未经允许不得转载</span><span style="margin: 0px; padding: 0px; max-width: 100%; font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; letter-spacing: 1px; text-align: center; white-space: normal; color: rgb(136, 136, 136); font-size: 12px; box-sizing: border-box !important; overflow-wrap: break-word !important;">）</span></span></p><p style="text-align: center; margin-top: 0px; margin-bottom: 0px; padding: 0px 0.5em; max-width: 100%; clear: both; min-height: 1em; color: rgb(51, 51, 51); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 17px; white-space: normal; line-height: 1.75em; letter-spacing: 1px; box-sizing: border-box !important; overflow-wrap: break-word !important;">    <span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(89, 89, 89);"><span style="margin: 0px; padding: 0px; max-width: 100%; font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; letter-spacing: 1px; text-align: center; white-space: normal; color: rgb(136, 136, 136); font-size: 12px; box-sizing: border-box !important; overflow-wrap: break-word !important;"><br/></span></span></p><p style="text-align: center; margin-top: 0px; margin-bottom: 0px; padding: 0px 0.5em; max-width: 100%; clear: both; min-height: 1em; color: rgb(51, 51, 51); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 17px; white-space: normal; line-height: 1.75em; letter-spacing: 1px; box-sizing: border-box !important; overflow-wrap: break-word !important;">    <span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(89, 89, 89);"><span style="margin: 0px; padding: 0px; max-width: 100%; font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; letter-spacing: 1px; text-align: center; white-space: normal; color: rgb(136, 136, 136); font-size: 12px; box-sizing: border-box !important; overflow-wrap: break-word !important;"><br/></span></span></p><p style="text-align: center; margin-top: 0px; margin-bottom: 0px; padding: 0px 0.5em; max-width: 100%; clear: both; min-height: 1em; color: rgb(51, 51, 51); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 17px; white-space: normal; line-height: 1.75em; letter-spacing: 1px; box-sizing: border-box !important; overflow-wrap: break-word !important;">    <span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(89, 89, 89);"><span style="margin: 0px; padding: 0px; max-width: 100%; font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; letter-spacing: 1px; text-align: center; white-space: normal; color: rgb(136, 136, 136); font-size: 12px; box-sizing: border-box !important; overflow-wrap: break-word !important;"></span></span></p><section>    <section>        <section>            <section>                <span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(89, 89, 89);"><strong>非常清晰的文书框架</strong></span>            </section>        </section>    </section></section><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px 0.5em; max-width: 100%; clear: both; min-height: 1em; color: rgb(51, 51, 51); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 17px; text-align: justify; white-space: normal; line-height: 1.75em; letter-spacing: 1px; box-sizing: border-box !important; overflow-wrap: break-word !important;">    <br/></p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px 0.5em; max-width: 100%; clear: both; min-height: 1em; color: rgb(51, 51, 51); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 17px; text-align: justify; white-space: normal; line-height: 1.75em; letter-spacing: 1px; box-sizing: border-box !important; overflow-wrap: break-word !important;">    <span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(89, 89, 89);">拟文书框架的时候，我们上了一节文书辅导课，</span><span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(40, 167, 169);">我的专业导师把文书怎么写给我捋得非常清楚，逻辑上基本就一步到位了，后面的修改基本上都是语言润色方面。</span></p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px 0.5em; max-width: 100%; clear: both; min-height: 1em; color: rgb(51, 51, 51); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 17px; text-align: justify; white-space: normal; line-height: 1.75em; letter-spacing: 1px; box-sizing: border-box !important; overflow-wrap: break-word !important;">    <span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(89, 89, 89);">&nbsp;</span></p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px 0.5em; max-width: 100%; clear: both; min-height: 1em; color: rgb(51, 51, 51); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 17px; text-align: justify; white-space: normal; line-height: 1.75em; letter-spacing: 1px; box-sizing: border-box !important; overflow-wrap: break-word !important;">    <span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(40, 167, 169);">在前几版的时候，我的导师会要求我将经历尽可能地细化再细化，</span><span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(89, 89, 89);">比如暑研的经历，导师让我尽可能地添加暑研具体做出了什么成果，以及表达清楚为什么这个成果能让我更加确定我申请生物统计这个项目。</span><span style="margin: 0px; padding: 0px; max-width: 100%; font-size: 14px; color: rgb(40, 167, 169); text-decoration-line: underline; box-sizing: border-box !important; overflow-wrap: break-word !important;">他强调：不要干瘪瘪地写经历，而是挖掘亮点，突出为什么这些经历让我选择了生物统计条路。</span></p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px 0.5em; max-width: 100%; clear: both; min-height: 1em; color: rgb(51, 51, 51); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 17px; text-align: justify; white-space: normal; line-height: 1.75em; letter-spacing: 1px; box-sizing: border-box !important; overflow-wrap: break-word !important;">    <span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(89, 89, 89);">&nbsp;</span></p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px 0.5em; max-width: 100%; clear: both; min-height: 1em; color: rgb(51, 51, 51); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 17px; text-align: justify; white-space: normal; line-height: 1.75em; letter-spacing: 1px; box-sizing: border-box !important; overflow-wrap: break-word !important;">    <span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(89, 89, 89);">以下是我的文书框架一览：</span></p><p style="text-align: center; margin-top: 0px; margin-bottom: 0px; padding: 0px 0.5em; max-width: 100%; clear: both; min-height: 1em; color: rgb(51, 51, 51); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 17px; white-space: normal; line-height: 1.75em; letter-spacing: 1px; box-sizing: border-box !important; overflow-wrap: break-word !important;">    <span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(89, 89, 89);"><span style="margin: 0px; padding: 0px; max-width: 100%; font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; letter-spacing: 1px; text-align: center; white-space: normal; color: rgb(136, 136, 136); font-size: 12px; box-sizing: border-box !important; overflow-wrap: break-word !important;"><br/></span></span></p><section>    <p style="margin-top: 0px; margin-bottom: 0px; padding: 0px 0.5em; max-width: 100%; clear: both; min-height: 1em; line-height: 1.75em; box-sizing: border-box !important; overflow-wrap: break-word !important;">        <span style="background-color: rgb(238, 236, 225);"><strong style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important;"><span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(40, 167, 169);">从我的兴趣出发点开始讲——</span></strong><span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(89, 89, 89);">我从大二下的那个暑假参加了一个社会实践，是对于胃癌高发地区的一个公共卫生类的调查，跟我申请的生物统计学其实有一定的关系。通过实践的经历，我萌生了对公共卫生事业的兴趣，有了想接触这个行业的想法。</span></span>    </p>    <p style="margin-top: 0px; margin-bottom: 0px; padding: 0px 0.5em; max-width: 100%; clear: both; min-height: 1em; line-height: 1.75em; box-sizing: border-box !important; overflow-wrap: break-word !important;">        <br/>    </p>    <p style="margin-top: 0px; margin-bottom: 0px; padding: 0px 0.5em; max-width: 100%; clear: both; min-height: 1em; line-height: 1.75em; box-sizing: border-box !important; overflow-wrap: break-word !important;">        <span style="background-color: rgb(238, 236, 225);"><strong style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important;"><span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(40, 167, 169);">兴趣出发点过后，我为了这个兴趣做了哪些努力——</span></strong><span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(89, 89, 89);">选修了相关的统计课程、自学了 R 和 python。</span></span>    </p>    <p style="margin-top: 0px; margin-bottom: 0px; padding: 0px 0.5em; max-width: 100%; clear: both; min-height: 1em; line-height: 1.75em; box-sizing: border-box !important; overflow-wrap: break-word !important;">        <br/>    </p>    <p style="margin-top: 0px; margin-bottom: 0px; padding: 0px 0.5em; max-width: 100%; clear: both; min-height: 1em; line-height: 1.75em; box-sizing: border-box !important; overflow-wrap: break-word !important;">        <span style="background-color: rgb(238, 236, 225);"><span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; color: rgb(40, 167, 169);"><strong style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important;"><span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px;">理论如何运用到实践——</span></strong></span><span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(89, 89, 89);">我把我所学的知识用到了我寒假的一份实习上。寒假的实习，其实跟生物统计是非常相关的，我直接就是一个生物统计师的助手。通过这个寒假学习，我更加了解到统计师就是在药品研发临床试验中起到的巨大的重要的作用，我对于这个职业充满了向往，所以就定下了我要学生物统计师这个专业。</span></span>    </p>    <p style="margin-top: 0px; margin-bottom: 0px; padding: 0px 0.5em; max-width: 100%; clear: both; min-height: 1em; line-height: 1.75em; box-sizing: border-box !important; overflow-wrap: break-word !important;">        <br/>    </p>    <p style="margin-top: 0px; margin-bottom: 0px; padding: 0px 0.5em; max-width: 100%; clear: both; min-height: 1em; line-height: 1.75em; box-sizing: border-box !important; overflow-wrap: break-word !important;">        <span style="background-color: rgb(238, 236, 225);"><strong style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important;"><span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(40, 167, 169);">重点的完整经历——</span></strong><span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(89, 89, 89);">我带着我要去学生物统计的心态，申请了一个生物统计相关的暑研，在其中我干了什么事情、学到了什么，我认识到生物统计在公共卫生方向的应用是一个真的造福于人类健康的一个应用。我就更加确定要学这个方向。</span></span>    </p>    <p style="margin-top: 0px; margin-bottom: 0px; padding: 0px 0.5em; max-width: 100%; clear: both; min-height: 1em; line-height: 1.75em; box-sizing: border-box !important; overflow-wrap: break-word !important;">        <br/>    </p>    <p style="margin-top: 0px; margin-bottom: 0px; padding: 0px 0.5em; max-width: 100%; clear: both; min-height: 1em; line-height: 1.75em; box-sizing: border-box !important; overflow-wrap: break-word !important;">        <span style="background-color: rgb(238, 236, 225);"><strong style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important;"><span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(40, 167, 169);">收尾——</span></strong><span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(89, 89, 89);">根据学校的要求，表达为什么选这个学校、这个项目。</span></span>    </p>    <p>        <span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(89, 89, 89);"><br/></span>    </p>    <p>        <span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(89, 89, 89);"><br/></span>    </p>    <p>        <span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(89, 89, 89);"></span>    </p>    <p style="margin-top: 0px; margin-bottom: 0px; padding: 0px 0.5em; max-width: 100%; clear: both; min-height: 1em; color: rgb(51, 51, 51); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 17px; text-align: justify; white-space: normal; line-height: 1.75em; letter-spacing: 1px; box-sizing: border-box !important; overflow-wrap: break-word !important;">        <span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(89, 89, 89);">申请过程中我最大的收获就是写文书。虽然文书是申请必备，但是</span><span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(40, 167, 169);">写文书的过程更像是我从大三确定转专业以来的心路写照，是对于自己努力的总结。</span>    </p>    <p>        <span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(89, 89, 89);"><br/></span>    </p>    <p style="text-align: center;">        <span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(89, 89, 89);"><img src="http://cms.palmdrive.cn/file/5ea67eea8f8b796a9621c094"/></span><br/>    </p>    <p style="text-align: center;">        <span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(89, 89, 89);"><span style="margin: 0px; padding: 0px; max-width: 100%; font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; text-align: center; white-space: normal; letter-spacing: 1px; color: rgb(136, 136, 136); font-size: 12px; box-sizing: border-box !important; overflow-wrap: break-word !important;">（导师文书修改截图。</span><span style="margin: 0px; padding: 0px; max-width: 100%; font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; text-align: center; white-space: normal; letter-spacing: 1px; color: rgb(136, 136, 136); font-size: 12px; box-sizing: border-box !important; overflow-wrap: break-word !important;">图片由学员提供</span><span style="margin: 0px; padding: 0px; max-width: 100%; font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; text-align: center; white-space: normal; letter-spacing: 1px; color: rgb(136, 136, 136); font-size: 12px; box-sizing: border-box !important; overflow-wrap: break-word !important;">，未经允许不得转载</span><span style="margin: 0px; padding: 0px; max-width: 100%; font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; text-align: center; white-space: normal; letter-spacing: 1px; color: rgb(136, 136, 136); font-size: 12px; box-sizing: border-box !important; overflow-wrap: break-word !important;">）</span></span>    </p>    <p style="text-align: center;">        <span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(89, 89, 89);"><span style="margin: 0px; padding: 0px; max-width: 100%; font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; text-align: center; white-space: normal; letter-spacing: 1px; color: rgb(136, 136, 136); font-size: 12px; box-sizing: border-box !important; overflow-wrap: break-word !important;"><br/></span></span>    </p>    <p style="text-align: center;">        <span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(89, 89, 89);"><span style="margin: 0px; padding: 0px; max-width: 100%; font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; text-align: center; white-space: normal; letter-spacing: 1px; color: rgb(136, 136, 136); font-size: 12px; box-sizing: border-box !important; overflow-wrap: break-word !important;"><br/></span></span>    </p>    <p style="text-align: center;">        <span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(89, 89, 89);"><span style="margin: 0px; padding: 0px; max-width: 100%; font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; text-align: center; white-space: normal; letter-spacing: 1px; color: rgb(136, 136, 136); font-size: 12px; box-sizing: border-box !important; overflow-wrap: break-word !important;"></span></span>    </p>    <section>        <section>            <section>                <section>                    <span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(89, 89, 89);"><strong>自己先搞懂网申</strong></span>                </section>            </section>        </section>    </section>    <p style="margin-top: 0px; margin-bottom: 0px; padding: 0px 0.5em; max-width: 100%; clear: both; min-height: 1em; color: rgb(51, 51, 51); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 17px; text-align: justify; white-space: normal; line-height: 1.75em; letter-spacing: 1px; box-sizing: border-box !important; overflow-wrap: break-word !important;">        <span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; color: rgb(89, 89, 89); font-size: 14px;">&nbsp;</span><br/>    </p>    <p style="margin-top: 0px; margin-bottom: 0px; padding: 0px 0.5em; max-width: 100%; clear: both; min-height: 1em; color: rgb(51, 51, 51); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 17px; text-align: justify; white-space: normal; line-height: 1.75em; letter-spacing: 1px; box-sizing: border-box !important; overflow-wrap: break-word !important;">        <span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(40, 167, 169);">虽然我跟棕榈签的是全包的服务，但是我也有自己把握申请的节奏。</span>    </p>    <p style="margin-top: 0px; margin-bottom: 0px; padding: 0px 0.5em; max-width: 100%; clear: both; min-height: 1em; color: rgb(51, 51, 51); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 17px; text-align: justify; white-space: normal; line-height: 1.75em; letter-spacing: 1px; box-sizing: border-box !important; overflow-wrap: break-word !important;">        <span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(89, 89, 89);">&nbsp;</span>    </p>    <p style="margin-top: 0px; margin-bottom: 0px; padding: 0px 0.5em; max-width: 100%; clear: both; min-height: 1em; color: rgb(51, 51, 51); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 17px; text-align: justify; white-space: normal; line-height: 1.75em; letter-spacing: 1px; box-sizing: border-box !important; overflow-wrap: break-word !important;">        <span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(89, 89, 89);">比如网申系统，我在十月初就把网申系统摸索了一遍，把能填的信息都填了，这一点对我比较重要。</span>    </p>    <p style="margin-top: 0px; margin-bottom: 0px; padding: 0px 0.5em; max-width: 100%; clear: both; min-height: 1em; color: rgb(51, 51, 51); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 17px; text-align: justify; white-space: normal; line-height: 1.75em; letter-spacing: 1px; box-sizing: border-box !important; overflow-wrap: break-word !important;">        <span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(89, 89, 89);">&nbsp;</span>    </p>    <p style="margin-top: 0px; margin-bottom: 0px; padding: 0px 0.5em; max-width: 100%; clear: both; min-height: 1em; color: rgb(51, 51, 51); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 17px; text-align: justify; white-space: normal; line-height: 1.75em; letter-spacing: 1px; box-sizing: border-box !important; overflow-wrap: break-word !important;">        <span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(89, 89, 89);">有人说</span><strong style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important;"><span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(40, 167, 169);">“千里之行，死于网申”，</span></strong><span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(89, 89, 89);">这句话有一定道理。</span><span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(40, 167, 169);">我在摸索网申的时候发现不是每个学校都是传统套路：</span><span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(89, 89, 89);">让你上传文书、CV，有的学校不会在官网把申请细节写出来，但是在网申系统里面会写文书的内容要求是什么，可能除了文书，还需要 personal statement。还有包括像杜克的文书，就完全不走寻常路。它就是在网申系统里面设置了 3 个小问题，然后那些三个小问题都还挺怪怪的，如果你只在最后一天看你的网上系统，以为只需要一些基本信息的话，这三个小文章是绝对弄不出来的。</span>    </p>    <p style="margin-top: 0px; margin-bottom: 0px; padding: 0px 0.5em; max-width: 100%; clear: both; min-height: 1em; color: rgb(51, 51, 51); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 17px; text-align: justify; white-space: normal; line-height: 1.75em; letter-spacing: 1px; box-sizing: border-box !important; overflow-wrap: break-word !important;">        <span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(89, 89, 89);"><br/></span>    </p>    <p style="margin-top: 0px; margin-bottom: 0px; padding: 0px 0.5em; max-width: 100%; clear: both; min-height: 1em; color: rgb(51, 51, 51); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 17px; text-align: justify; white-space: normal; line-height: 1.75em; letter-spacing: 1px; box-sizing: border-box !important; overflow-wrap: break-word !important;">        <span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(89, 89, 89);"><br/></span>    </p>    <p style="text-align: center; margin-top: 0px; margin-bottom: 0px; padding: 0px 0.5em; max-width: 100%; clear: both; min-height: 1em; color: rgb(51, 51, 51); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 17px; white-space: normal; line-height: 1.75em; letter-spacing: 1px; box-sizing: border-box !important; overflow-wrap: break-word !important;">        <span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(89, 89, 89);"><img src="http://cms.palmdrive.cn/file/5ea67f2f8f8b796a9621c09d" style="width: 707px; height: 390px;"/></span>    </p>    <p style="text-align: center; margin-top: 0px; margin-bottom: 0px; padding: 0px 0.5em; max-width: 100%; clear: both; min-height: 1em; color: rgb(51, 51, 51); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 17px; white-space: normal; line-height: 1.75em; letter-spacing: 1px; box-sizing: border-box !important; overflow-wrap: break-word !important;">        <span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(89, 89, 89);"><br/></span>    </p>    <p style="text-align: center; margin-top: 0px; margin-bottom: 0px; padding: 0px 0.5em; max-width: 100%; clear: both; min-height: 1em; color: rgb(51, 51, 51); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 17px; white-space: normal; line-height: 1.75em; letter-spacing: 1px; box-sizing: border-box !important; overflow-wrap: break-word !important;">        <span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(89, 89, 89);"><br/></span>    </p>    <p style="text-align: left; margin-top: 0px; margin-bottom: 0px; padding: 0px 0.5em; max-width: 100%; clear: both; min-height: 1em; color: rgb(51, 51, 51); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 17px; white-space: normal; line-height: 1.75em; letter-spacing: 1px; box-sizing: border-box !important; overflow-wrap: break-word !important;">        <span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(89, 89, 89);"><strong style="background-color: rgb(146, 205, 220);">结尾：不打没有准备的仗</strong><br/></span>    </p>    <p style="text-align: left; margin-top: 0px; margin-bottom: 0px; padding: 0px 0.5em; max-width: 100%; clear: both; min-height: 1em; color: rgb(51, 51, 51); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 17px; white-space: normal; line-height: 1.75em; letter-spacing: 1px; box-sizing: border-box !important; overflow-wrap: break-word !important;">        <span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(89, 89, 89);"><strong><br/></strong></span>    </p>    <p style="text-align: left; margin-top: 0px; margin-bottom: 0px; padding: 0px 0.5em; max-width: 100%; clear: both; min-height: 1em; color: rgb(51, 51, 51); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 17px; white-space: normal; line-height: 1.75em; letter-spacing: 1px; box-sizing: border-box !important; overflow-wrap: break-word !important;">        <span style="text-align: justify; margin: 0px; padding: 0px; max-width: 100%; font-size: 14px; color: rgb(89, 89, 89); box-sizing: border-box !important; overflow-wrap: break-word !important;">回头看为留学做准备的一路，我对于自己可能比较满意的地方是</span><span style="text-align: justify; margin: 0px; padding: 0px; max-width: 100%; font-size: 14px; color: rgb(40, 167, 169); box-sizing: border-box !important; overflow-wrap: break-word !important;">虽然时间紧促，但是还是完成了那么多份经历，而且每份经历都有收获。</span><br/>    </p>    <p style="margin-top: 0px; margin-bottom: 0px; padding: 0px 0.5em; max-width: 100%; clear: both; min-height: 1em; color: rgb(51, 51, 51); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 17px; text-align: justify; white-space: normal; line-height: 1.75em; letter-spacing: 1px; box-sizing: border-box !important; overflow-wrap: break-word !important;">        <span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(89, 89, 89);">&nbsp;</span>    </p>    <p style="margin-top: 0px; margin-bottom: 0px; padding: 0px 0.5em; max-width: 100%; clear: both; min-height: 1em; color: rgb(51, 51, 51); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 17px; text-align: justify; white-space: normal; line-height: 1.75em; letter-spacing: 1px; box-sizing: border-box !important; overflow-wrap: break-word !important;">        <span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(89, 89, 89);">其实我们学校的生命学院非常小，与生物统计相关的资源很少，所以我基本上是通过各种渠道去争取，但凡跟生物统计沾点边的经历，我都去争取参加。</span><span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(40, 167, 169);">唯一的遗憾是大一大二的时候没有确定方向和做好规划，不然我的经历会更丰富一些。</span>    </p>    <p style="margin-top: 0px; margin-bottom: 0px; padding: 0px 0.5em; max-width: 100%; clear: both; min-height: 1em; color: rgb(51, 51, 51); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 17px; text-align: justify; white-space: normal; line-height: 1.75em; letter-spacing: 1px; box-sizing: border-box !important; overflow-wrap: break-word !important;">        <span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(89, 89, 89);">&nbsp;</span>    </p>    <p style="margin-top: 0px; margin-bottom: 0px; padding: 0px 0.5em; max-width: 100%; clear: both; min-height: 1em; color: rgb(51, 51, 51); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 17px; text-align: justify; white-space: normal; line-height: 1.75em; letter-spacing: 1px; box-sizing: border-box !important; overflow-wrap: break-word !important;">        <span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(89, 89, 89);">但是我觉得</span><strong style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important;"><span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(40, 167, 169);">后悔过去不如奋斗将来，</span></strong><span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(89, 89, 89);">如果大家正处在迷茫期、焦虑期，</span><strong style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; color: rgb(89, 89, 89); font-size: 14px;">尽量从现在开始规划，朝前看，做好准备迎接未来的机会，过程可能有挫折和煎熬，但我相信你会离梦校越来越近！</strong>    </p>    <p style="margin-top: 0px; margin-bottom: 0px; padding: 0px 0.5em; max-width: 100%; clear: both; min-height: 1em; color: rgb(51, 51, 51); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 17px; text-align: justify; white-space: normal; line-height: 1.75em; letter-spacing: 1px; box-sizing: border-box !important; overflow-wrap: break-word !important;">        <strong style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; color: rgb(89, 89, 89); font-size: 14px;"><br/></strong>    </p>    <p style="text-align: center; margin-top: 0px; margin-bottom: 0px; padding: 0px 0.5em; max-width: 100%; clear: both; min-height: 1em; color: rgb(51, 51, 51); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 17px; white-space: normal; line-height: 1.75em; letter-spacing: 1px; box-sizing: border-box !important; overflow-wrap: break-word !important;">        <strong style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; color: rgb(89, 89, 89); font-size: 14px;"><br/></strong>    </p>    <p style="text-align: center; margin-top: 0px; margin-bottom: 0px; padding: 0px 0.5em; max-width: 100%; clear: both; min-height: 1em; color: rgb(51, 51, 51); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 17px; white-space: normal; line-height: 1.75em; letter-spacing: 1px; box-sizing: border-box !important; overflow-wrap: break-word !important;">        <strong style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; color: rgb(89, 89, 89); font-size: 14px;"><br/></strong>    </p>    <p style="text-align: center; margin-top: 0px; margin-bottom: 0px; padding: 0px 0.5em; max-width: 100%; clear: both; min-height: 1em; color: rgb(51, 51, 51); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 17px; white-space: normal; line-height: 1.75em; letter-spacing: 1px; box-sizing: border-box !important; overflow-wrap: break-word !important;">        <strong style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; color: rgb(89, 89, 89); font-size: 14px;"><br/></strong>    </p>    <p style="text-align: center; margin-top: 0px; margin-bottom: 0px; padding: 0px 0.5em; max-width: 100%; clear: both; min-height: 1em; color: rgb(51, 51, 51); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 17px; white-space: normal; line-height: 1.75em; letter-spacing: 1px; box-sizing: border-box !important; overflow-wrap: break-word !important;">        <strong style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; color: rgb(89, 89, 89); font-size: 14px;"><img src="http://cms.palmdrive.cn/file/5ea67fb28f8b796a9621c0b8"/></strong>    </p>    <p style="text-align: center; margin-top: 0px; margin-bottom: 0px; padding: 0px 0.5em; max-width: 100%; clear: both; min-height: 1em; color: rgb(51, 51, 51); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 17px; white-space: normal; line-height: 1.75em; letter-spacing: 1px; box-sizing: border-box !important; overflow-wrap: break-word !important;">        <strong style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; color: rgb(89, 89, 89); font-size: 14px;"><br/></strong>    </p>    <p style="text-align: center; margin-top: 0px; margin-bottom: 0px; padding: 0px 0.5em; max-width: 100%; clear: both; min-height: 1em; color: rgb(51, 51, 51); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 17px; white-space: normal; line-height: 1.75em; letter-spacing: 1px; box-sizing: border-box !important; overflow-wrap: break-word !important;">        <strong style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; color: rgb(89, 89, 89); font-size: 14px;"><span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box; color: rgb(51, 51, 51); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; letter-spacing: 1px; text-align: center; white-space: normal; font-size: 14px; overflow-wrap: break-word !important;">想像小姐姐</span><span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box; font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; letter-spacing: 1px; text-align: center; white-space: normal; font-size: 14px; color: rgb(89, 89, 89); overflow-wrap: break-word !important;">那样<strong style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important;">规划留学<strong style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box; overflow-wrap: break-word !important;">、</strong></strong><strong style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box; overflow-wrap: break-word !important;">斩获名校</strong>？<br/><span style="color: rgb(51, 51, 51); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 14px; letter-spacing: 1px; text-align: center; white-space: normal;">想要 get &nbsp;同款贴心导师辅导？<br/><span style="color: rgb(51, 51, 51); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 14px; letter-spacing: 1px; text-align: center; white-space: normal;">扫描二维码添加助教<br/><span style="color: rgb(51, 51, 51); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 14px; letter-spacing: 1px; text-align: center; white-space: normal;">回复关键词</span><strong style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box; color: rgb(51, 51, 51); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 14px; letter-spacing: 1px; text-align: center; white-space: normal; overflow-wrap: break-word !important;"><span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box; overflow-wrap: break-word !important; color: rgb(40, 167, 169);">“进步”</span></strong><span style="color: rgb(51, 51, 51); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 14px; letter-spacing: 1px; text-align: center; white-space: normal;">咨询<br/><br/></span></span></span></span></strong>    </p>    <p style="text-align: center; margin-top: 0px; margin-bottom: 0px; padding: 0px 0.5em; max-width: 100%; clear: both; min-height: 1em; color: rgb(51, 51, 51); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 17px; white-space: normal; line-height: 1.75em; letter-spacing: 1px; box-sizing: border-box !important; overflow-wrap: break-word !important;">        <strong style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; color: rgb(89, 89, 89); font-size: 14px;"><span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box; font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; letter-spacing: 1px; text-align: center; white-space: normal; font-size: 14px; color: rgb(89, 89, 89); overflow-wrap: break-word !important;"><span style="color: rgb(51, 51, 51); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 14px; letter-spacing: 1px; text-align: center; white-space: normal;"><span style="color: rgb(51, 51, 51); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 14px; letter-spacing: 1px; text-align: center; white-space: normal;"><span style="color: rgb(51, 51, 51); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 14px; letter-spacing: 1px; text-align: center; white-space: normal;"><img src="http://cms.palmdrive.cn/file/5ea67ff58f8b796a9621c0c7"/></span></span></span></span></strong>    </p>    <p style="text-align: center; margin-top: 0px; margin-bottom: 0px; padding: 0px 0.5em; max-width: 100%; clear: both; min-height: 1em; color: rgb(51, 51, 51); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 17px; white-space: normal; line-height: 1.75em; letter-spacing: 1px; box-sizing: border-box !important; overflow-wrap: break-word !important;">        <span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(89, 89, 89);"><br/></span><br/>    </p>    <p style="text-align: center;">        <span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(89, 89, 89);"><span style="margin: 0px; padding: 0px; max-width: 100%; font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; text-align: center; white-space: normal; letter-spacing: 1px; color: rgb(136, 136, 136); font-size: 12px; box-sizing: border-box !important; overflow-wrap: break-word !important;"><br/></span></span><br/>    </p>    <p>        <span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; font-size: 14px; color: rgb(89, 89, 89);"><br/></span>    </p></section><p style="text-align: center; margin-top: 0px; margin-bottom: 0px; padding: 0px 0.5em; max-width: 100%; clear: both; min-height: 1em; color: rgb(51, 51, 51); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 17px; white-space: normal; line-height: 1.75em; letter-spacing: 1px; box-sizing: border-box !important; overflow-wrap: break-word !important;">    <br/></p><p style="text-align: left;">    <span style="color: rgb(89, 89, 89); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 14px; font-weight: 700; letter-spacing: 0.544px; text-align: justify; white-space: normal;"><br/></span><br/></p><p style="text-align: left;">    <strong style="margin: 0px; padding: 0px; max-width: 100%; color: rgb(40, 167, 169); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; letter-spacing: 1px; text-align: center; white-space: normal; box-sizing: border-box !important; overflow-wrap: break-word !important;"><br/></strong></p><p style="text-align: center;">    <strong style="margin: 0px; padding: 0px; max-width: 100%; color: rgb(40, 167, 169); font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; letter-spacing: 1px; text-align: center; white-space: normal; box-sizing: border-box !important; overflow-wrap: break-word !important;"><br/></strong></p>'
        },
        {
          img: require('../assets/img/dreamSchool/stories/story2.png'),
          name: '为梦想而实现横扫，因横扫而点亮梦想，为梦想而实现横扫，因横扫…',
          content: ''
        },
        {
          img: require('../assets/img/dreamSchool/stories/story3.png'),
          name: '为梦想而实现横扫，因横扫而点亮梦想，为梦想而实现横扫，因横扫…',
          content: ''
        },
        {
          img: require('../assets/img/dreamSchool/stories/story4.png'),
          name: '为梦想而实现横扫，因横扫而点亮梦想，为梦想而实现横扫，因横扫…',
          content: ''
        },
        {
          img: require('../assets/img/dreamSchool/stories/story5.png'),
          name: '为梦想而实现横扫，因横扫而点亮梦想，为梦想而实现横扫，因横扫…',
          content: ''
        },
        {
          img: require('../assets/img/dreamSchool/stories/story6.png'),
          name: '为梦想而实现横扫，因横扫而点亮梦想，为梦想而实现横扫，因横扫…',
          content: ''
        },
        {
          img: require('../assets/img/dreamSchool/stories/story7.png'),
          name: '为梦想而实现横扫，因横扫而点亮梦想，为梦想而实现横扫，因横扫…',
          content: ''
        },
        {
          img: require('../assets/img/dreamSchool/stories/story8.png'),
          name: '为梦想而实现横扫，因横扫而点亮梦想，为梦想而实现横扫，因横扫…',
          content: ''
        }
      ],
      teachers: [
        [
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
      banner6: '',
      banner8: '',
      dreamSchoolPlan: '',
      planButton: '',
      askErcode: require('../assets/img/dreamSchool/askErcode.png'),
      maxNumber: 8,
      show: false,
      currentType: 0,
      selectedTeacher: []
    }
  },
  created () {
    this.banner1 = require('../assets/img/dreamSchool/banner1.png')
    this.banner6 = require('../assets/img/dreamSchool/banner6.png')
    this.banner8 = require('../assets/img/dreamSchool/banner8.png')
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
    goToDetail (content) {
      this.$router.push({
        path: '/news',
        query: {
          content: content
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.dream-school {
  text-align: center;

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
