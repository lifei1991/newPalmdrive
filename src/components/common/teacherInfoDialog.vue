<template>
  <div class="teacherInfoDialog">
    <el-dialog
      :visible="dialogVisible"
      width="1000px"
      :before-close="handleClose">
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
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'teacherInfoDialog',
  props: {
    dialogVisible: Boolean,
    selectTeacher: Object
  },
  data () {
    return {
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
</style>
