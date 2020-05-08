<template>
  <div class="news">

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

    <!-- <iframe name="midFraim" id="midFraim" ref="iframe" src="http://cms.palmdrive.cn/file/5ea153b67bab207e954baa8c" frameborder="0" scrolling="no" width="100%"></iframe> -->

    <div class="content" v-html="content"></div>
  </div>
</template>

<script>
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
  name: 'News',
  data () {
    return {
      banner1: '',
      content: ''
    }
  },
  created () {
    this.banner1 = require('../assets/img/home/banner1.png')
    this.content = this.$route.query.content
  },
  mounted () {
    window.scrollTo(0, 0)
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.news {
  // text-align: center;

  .banner1-div {
    width: 100%;
    padding: 16px 0 33px;
    background-color: #1BBEB2;

    .banner1 {
      width: 1073px;
      height: 510px;
      margin: 0 auto;
      position: relative;
      text-align: left;
      background-repeat: no-repeat;
      background-size: cover;

      .info1-div {
        position: absolute;
        top: 296px;
        left: 59px;
      }

      .info2-div {
        position: absolute;
        top: 357px;
        left: 59px;
      }

      .info3-div {
        position: absolute;
        top: 418px;
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

  .content {
    width: 900px;
    margin: 0 auto;
    text-align: left;
    // white-space: pre-wrap;
    font-size: 16px;
    margin-top: 50px;
  }
}
</style>
