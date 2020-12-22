<template>
  <div class="teacherInfoDialog">
    <el-dialog
      :visible="dialogVisible"
      :width="isMobile ? '8.4rem' : '1000px'"
      :custom-class="isMobile ? 'my-mobile': ''"
      :before-close="handleClose">
      <div :class="isMobile ?'teacher-detail-div-mobile' : 'teacher-detail-div'">
        <div class="logo" :style="{backgroundImage:'url(' + teacherDetailLogo + ')'}"></div>
        <div class="logo-text">棕榈大道</div>

        <div class="teacher-div">
          <div class="teacher-img-div">
            <div class="teacher-img" :style="{backgroundImage:'url(' + selectTeacher.img + ')'}"></div>
            <div class="teacher-name-div">
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
    </el-dialog>
  </div>
</template>

<script>
import Common from './common'

export default {
  name: 'teacherInfoDialog',
  props: {
    dialogVisible: Boolean,
    selectTeacher: Object
  },
  data () {
    return {
      isMobile: Common.isMobile,
      teacherDetailLogo: require('../../assets/img/logo.png')
    }
  },
  methods: {
    handleClose () {
      this.$emit('childEvent', false)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .teacher-detail-div {
    text-align: left;
    margin: -30px 20px 30px;

    .logo {
      width: 60px;
      height: 60px;
      background-repeat: no-repeat;
      background-size: cover;
      display: inline-block;
    }

    .logo-text {
      display: inline-block;
      height: 60px;
      line-height: 60px;
      vertical-align: top;
      margin-left: 17px;
      font-size: 25px;
    }

    .teacher-div {
      margin: 33px 0 0 20px;

      .teacher-img-div {
        display: inline-block;
        width: 261px;

        .teacher-img {
          width: 261px;
          height: 321px;
          background-repeat: no-repeat;
          background-size: cover;
        }

        .name {
          font-size:24px;
          font-family:Campton, SourceHanSansCN;
          font-weight:bold;
          line-height:24px;
          color:rgba(57,60,61,1);
          opacity:1;
          margin: 25px 0 15px;
        }

        .title {
          font-size: 14px;
          color: #262626;
          line-height: 14px;
          font-weight:bold;
          font-family: Campton, SourceHanSansCN;
        }

        .school {
          font-size: 12px;
          color: #262626;
          margin-top: 5px;
          font-family: Campton, SourceHanSansCN;
          margin-bottom: 15px;
          line-height: 15px;
        }
      }

      .teacher-info-div {
        display: inline-block;
        margin-left: 45px;
        width: 65%;
        vertical-align: top;

        .dot {
          display: inline-block;
          width:10px;
          height:10px;
          background:rgba(216,216,216,1);
          opacity:1;
          margin-right: 10px;
        }

        .each-section {
          font-size:14px;
          font-family:SourceHanSansCN;
          font-weight:bold;
          line-height:14px;
          color:rgba(57,60,61,1);
          opacity:1;
        }

        .each-section-detail {
          margin: 15px 0 21px 10px;
          font-size:16px;
          font-family:SourceHanSansCN;
          font-weight:400;
          line-height:25px;
          color:rgba(57,60,61,1);
          opacity:1;
        }
      }
    }
  }

  .teacher-detail-div-mobile {
    text-align: left;
    margin: -30px 0px 30px;

    .logo {
      width: .8rem;
      height: .8rem;
      background-repeat: no-repeat;
      background-size: cover;
      display: inline-block;
    }

    .logo-text {
      display: inline-block;
      height: .8rem;
      line-height: .8rem;
      vertical-align: top;
      margin-left: .266667rem;
      font-size: .426667rem;
    }

    .teacher-div {
      // margin: 33px 0 0 20px;

      .teacher-img-div {
        // display: inline-block;
        // width: 6.026667rem;
        margin: .133333rem auto .666667rem;
        box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
        opacity: 1;
        border-radius: 10px;
        padding: .426667rem;

        .teacher-img {
          width: 2.933333rem;
          height: 3.626667rem;
          background-repeat: no-repeat;
          background-size: cover;
          display: inline-block;
          vertical-align: top;
        }

        .teacher-name-div {
          display: inline-block;
          width: 2.72rem;
          margin-left: .25rem;

          .name {
            font-size:.426667rem;
            font-family:Campton, SourceHanSansCN;
            font-weight:bold;
            line-height:.426667rem;
            color:#35C4C4;
            opacity:1;
            margin: .053333rem 0 .4rem;
          }

          .title {
            font-size: .373333rem;
            color: #262626;
            line-height: .373333rem;
            font-weight:bold;
            font-family: Campton, SourceHanSansCN;
          }

          .school {
            font-size: .266667rem;
            color: #262626;
            margin: .213333rem 0;
            font-family: Campton, SourceHanSansCN;
            // margin-bottom: 15px;
            line-height: .373333rem;
          }
        }
      }

      .teacher-info-div {
        display: inline-block;
        // margin-left: 45px;
        // width: 65%;
        vertical-align: top;

        .dot {
          display: inline-block;
          width:.186667rem;
          height:.186667rem;
          background:rgba(216,216,216,1);
          opacity:1;
          margin-right: .133333rem;
          vertical-align: middle;
        }

        .each-section {
          font-size:.373333rem;
          font-family:SourceHanSansCN;
          font-weight:bold;
          line-height:.373333rem;
          color:rgba(57,60,61,1);
          opacity:1;
        }

        .each-section-detail {
          margin: .4rem 0 .64rem .45rem;
          font-size:.32rem;
          font-family:SourceHanSansCN;
          font-weight:400;
          line-height:.426667rem;
          color:#393C3D;
          opacity:1;
        }
      }
    }
  }

  .my-mobile {
    border-radius: .4rem;
  }
</style>
