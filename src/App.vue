<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <div class="head">
      <div class="logo"></div>

      <ul>
        <li><a href="http://palmdrive.cn/" target="_blank">首页</a></li>
        <li><a href="http://palmdrive.cn/highschool_services" target="_blank">申请初高中</a></li>
        <li><a href="http://palmdrive.cn/undergrad_services" target="_blank">申请本科</a></li>
        <li><a href="http://palmdrive.cn/services" target="_blank">申请研究生</a></li>
        <li><a href="http://palmdrive.cn/mentors" target="_blank">导师团队</a></li>
        <li><a href="http://palmdrive.cn/graduate_showcase" target="_blank">成功案例</a></li>
        <li><a href="http://palmdrive.cn/news-all?type=graduate" target="_blank">最新动态</a></li>
        <li><a href="http://palmdrive.cn/about" target="_blank">关于我们</a></li>
      </ul>

      <div class="register" >
        <a href="http://cms.palmdrive.cn/signin" target="_blank">注 册</a>
        <el-popover
          placement="right"
          width="100"
          trigger="hover">
          <div>4000-062-153</div>
          <div slot="reference" class="phone"></div>
        </el-popover>

        <el-popover
          placement="right"
          width="100"
          trigger="hover">
            <img class="link-img" src="./assets/img/head/ercode-detail.png"
            style="
              width: 100px;
              height: 100px;
              background-image: url('./assets/img/head/ercode-detail.png');
              background-repeat: no-repeat;
              background-size: cover;"/>
          <div class="ercode" slot="reference"></div>
        </el-popover>
      </div>
    </div>

    <router-view/>

    <div class="foot">
      <div class="left-div">
        <div class="link">
          <img class="link-img" src="./assets/img/home/foot/lianjie.png"/>
          站内链接
        </div>
        <div class="heng-line"></div>
        <ul class="link-item-div">
          <li><a href="http://palmdrive.cn/undergrad_services" target="_blank">本科服务介绍</a></li>
          <li><a href="http://palmdrive.cn/highschool_services" target="_blank">初高中服务介绍</a></li>
          <li><a href="http://palmdrive.cn/undergrad_services" target="#">研究生服务介绍</a></li>
          <li><a href="http://palmdrive.cn/graduate_showcase" target="_blank">成功案例</a></li>
          <li><a href="http://palmdrive.cn/mentors" target="_blank">导师团队</a></li>
        </ul>

        <div class="link">
          <img class="link-img" src="./assets/img/home/foot/location.png"/>
          公司地址
        </div>
        <div class="heng-line"></div>
        <ul class="location-item-div" >
          <li v-for="(item, index) in cities" :key="item.name" v-html="item.name" @click="addClass(index)" v-bind:class="{ 'bg-colors' : index == current }"></li>
        </ul>

        <div class="place" v-for="(item, index) in selectedCity.place" :key="index" >
          <div class="text">{{ item.text }}</div>
          <div class="number">{{ item.number }}</div>
          <div class="place-line" v-if="selectedCity.place.length - 1 != index "></div>
        </div>

      </div>

      <div class="middle-div"></div>

      <div class="right-div">
        <div class="contact">
          <div class="title">
            <img src="./assets/img/home/foot/contact1.png" class="more-img" />联系我们
          </div>
          <div class="text">
            <img src="./assets/img/home/foot/contact2.png" class="contact2-img" />全国客服: 4000-062-153
          </div>
          <div class="text">
            <img src="./assets/img/home/foot/contact3.png" class="contact2-img" />留学辅导咨询微信：pdpr19
          </div>
          <div class="text">
            <img src="./assets/img/home/foot/contact4.png" class="contact2-img" />邮箱：suggestions@palmdrive.cn
          </div>
        </div>
        <div class="wechat-div">
          <div class="title">
            <img src="./assets/img/home/foot/wechat.png"/>
            关注我们
          </div>
          <div class="code-div">
            <div v-for="(item, index) in codes" :key="index" class="each-code">
              <img :src="item.img" />
              <div>{{ item.name }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="copy-right">
      <div class="content">
        <div class="content-title">隐私协议&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;关于我们&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;加入我们</div>
        <div class="content-title2">
          <span>CopyRight©2017 棕榈大道教育科技(北京)有限公司</span>
          <span>增值电信业务经营许可证：京B2-20191218</span>
          <span>京ICP备14009960号</span>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      cities: [
        {
          name: '北&nbsp;&nbsp;&nbsp;京',
          place: [
            {
              text: '北京市海淀区北四环西路66号中国技术交易大厦A座1501室（总部）',
              number: '010-6268 0655'
            },
            {
              text: '北京市朝阳区朝外大街甲6号万通中心D座505室',
              number: '010-6268 0655'
            }
          ]
        },
        {
          name: '上&nbsp;&nbsp;&nbsp;海',
          place: [
            {
              text: '上海市黄浦区马当路388号 SOHO复兴广场A座1001',
              number: '021-6331 0108'
            }
          ]
        },
        {
          name: '广&nbsp;&nbsp;&nbsp;州',
          place: [
            {
              text: '广州市天河区花城大道85号高德置地春广场A座2801室',
              number: '020-8981 9380'
            }
          ]
        },
        {
          name: '深&nbsp;&nbsp;&nbsp;圳',
          place: [
            {
              text: '深圳市福田区中心区益田路与福华路交汇处卓越时代广场1401',
              number: '0755-8891 2010'
            }
          ]
        },
        {
          name: '武&nbsp;&nbsp;&nbsp;汉',
          place: [
            {
              text: '武汉市洪山区珞瑜路10号群光中心写字楼16楼1606',
              number: '027-87876788'
            }
          ]
        },
        {
          name: '成&nbsp;&nbsp;&nbsp;都',
          place: [
            {
              text: '成都市锦江区红星路三段99号银石广场2311室',
              number: '028-8675 8946'
            }
          ]
        },
        {
          name: '沈&nbsp;&nbsp;&nbsp;阳',
          place: [
            {
              text: '沈阳市沈河区青年大街125号企业广场B座805',
              number: '024-8338 3577'
            }
          ]
        },
        {
          name: '硅&nbsp;&nbsp;&nbsp;谷',
          place: [
            {
              text: '2381 Zanker Rd, Ste 110, San Jose, CA, 95131',
              number: '814-580-5786'
            },
            {
              text: '156 2nd St, San Francisco, CA 94105',
              number: '814-580-5786'
            }
          ]
        }
      ],
      codes: [
        {
          img: require('./assets/img/home/foot/zldd-code.png'),
          name: '棕榈大道'
        },
        {
          img: require('./assets/img/home/foot/zlxy-code.png'),
          name: '棕榈学院'
        },
        {
          img: require('./assets/img/home/foot/htyy-code.png'),
          name: '核桃英语'
        }
      ],
      selectedCity: {},
      current: 0
    }
  },
  mounted () {
    this.$nextTick(function () {
      this.selectedCity = this.cities[0]
    })
  },
  methods: {
    addClass: function (index) {
      this.current = index
      this.selectedCity = this.cities[index]
    }
  }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  /* -webkit-font-smoothing: antialiased; */
  -webkit-font-smoothing: subpixel-antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  font-size: 0;
}

body {
  margin: 0;
  min-width: 1200px;
  font-family: SourceHanSansCN;
}

.left-arrow {
  width: 14px;
  height: 23px;
  background-image: url("assets/img/home/left-arrow.png");
  background-repeat: no-repeat;
  background-size: cover;
  display: block;
  cursor: pointer;
}

.right-arrow {
  width: 14px;
  height: 23px;
  background-image: url("assets/img/home/right-arrow.png");
  background-repeat: no-repeat;
  background-size: cover;
  display: block;
  cursor: pointer;
}

.home-activity-left-arrow {
  position: absolute;
  top: 20%;
  left: -58px;
}

.home-activity-right-arrow {
  position: absolute;
  top: 20%;
  right: -58px;
}

.home-dynamic-left-arrow {
  position: absolute;
  top: 42%;
  left: -38px;
}

.home-dynamic-right-arrow {
  position: absolute;
  top: 42%;
  right: -38px;
}

@media not all and (min-resolution:.001dpcm) {
  body {
    letter-spacing: -1px;
  }
}

@font-face {
  font-family:'Biko';
  src:url('./assets/font/biko.otf') format('truetype');
}

@font-face {
  font-family:'SourceHanSansCN';
  src:url('./assets/font/NotoSansHans-Regular.otf') format('truetype');
}

@font-face {
  font-family:'Campton';
  src:url('./assets/font/campton.otf') format('truetype');
}

@font-face {
  font-family:'CamptonLight';
  src:url('./assets/font/Campton-LightDEMO.otf') format('truetype');
}

.head {
  height:87px;
  width: 100%;
  // background:rgba(33,195,182,1);
  opacity:1;
  text-align: center;
  overflow: hidden;
  position: relative;
  background:rgba(31,195,181,1);
  box-shadow:5px 5px 7px rgba(0,0,0,0.08);

  .logo {
    width: 113px;
    height: 36px;
    background-image: url("assets/img/head/logo.png");
    background-repeat: no-repeat;
    background-size: cover;
    margin: 38px 129px 0 0;
    display: inline-block;
  }

  ul {
    display: inline-block;
    width: auto;
    list-style-type: none;
    white-space:nowrap;
    overflow: hidden;
    padding: 0;

    li {
      float:left;
      margin-right:36px;
      position: relative;
      overflow: hidden;
      font-size:16px;
      font-family:SourceHanSansCN;
      font-weight:bold;
      line-height:36px;
      color:rgba(255,255,255,1);
      opacity:1;
      height: 36px;

      a {
        display: block;
        color:white;
        text-align: center;
        padding: 3px 0px;
        overflow: hidden;
        text-decoration: none;
      }
    }
  }

  .register {
    display: inline-block;
    width:88px;
    height:30px;
    background:rgba(255,255,255,1);
    opacity:1;
    border-radius:17px;
    font-size:13px;
    font-family:SourceHanSansCN;
    font-weight:bold;
    line-height:30px;
    color:rgba(34,195,182,1);
    opacity:1;
    vertical-align: bottom;
    margin-left: 46px;
    position: relative;
    cursor: pointer;

    a {
      text-decoration: none;
      color: rgba(34,195,182,1);
    }

    .phone {
      width: 23px;
      height: 23px;
      position: absolute;
      top: -32px;
      left: 7px;
      background-image: url("assets/img/head/phone.png");
      background-repeat: no-repeat;
      background-size: cover;
    }

    .ercode {
      width: 23px;
      height: 23px;
      position: absolute;
      top: -32px;
      right: 7px;
      background-image: url("assets/img/head/ercode.png");
      background-repeat: no-repeat;
      background-size: cover;
    }

    .ercode-detail {
      background: chocolate;
    }
  }
}

.foot {
    padding: 0px 0 38px;
    background-color: #F1F7FA;
    text-align: center;
    background-image: url("assets/img/home/foot/foot-bg.png");
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 330px;

    .left-div {
      width: 627px;
      display: inline-block;
      margin-top: 48px;
      text-align: left;

      .link {
        font-size:15px;
        font-family:SourceHanSansCN;
        font-weight:bold;
        line-height:15px;
        color:rgba(255,255,255,1);
        opacity:1;

        .link-img {
          width: 13px;
          height: 20px;
          vertical-align: sub;
          margin-right: 5px;
        }
      }

      .heng-line {
        width:31px;
        height:0px;
        border:1px solid rgba(1,183,183,1);
        opacity:1;
        margin: 8px 0 9px;
      }

      .link-item-div {
        list-style: none;
        text-align: left;
        padding: 0;
        margin-bottom: 46px;

        li {
          font-size:14px;
          font-family:SourceHanSansCN;
          font-weight:500;
          line-height:14px;
          opacity:1;
          margin-right: 38px;
          display: inline-block;
          color: #fff;

          a {
            text-decoration: none;
            color: #fff;
          }

          a:hover {
            color:rgba(1,183,183,1);
          }
        }
      }

      .location-item-div {
        list-style: none;
        text-align: left;
        padding: 0;
        margin-bottom: 21px;

        li {
          font-size: 14px;
          font-family: SourceHanSansCN;
          font-weight: 500;
          line-height: 14px;
          opacity: 1;
          margin-right: 35px;
          display: inline-block;
          color: #fff;
          padding-bottom: 3px;
          margin-top: 3px;
          cursor: pointer;
        }

        .bg-colors {
          color:rgba(1,183,183,1);
          border-bottom: 3px solid rgba(1,183,183,1);
        }
      }

      .place {
        .text, .number {
          font-size:14px;
          font-family:PingFangSC-Regular, Biko;
          font-weight:400;
          line-height:20px;
          color:rgba(255,255,255,1);
          opacity:1;
        }

        .place-line {
          width:124px;
          height:0px;
          border:1px solid rgba(154,154,154,1);
          opacity:1;
          margin: 9px 0;
        }
      }
    }

    .middle-div {
      height:237px;
      border:1px solid rgba(255,255,255,1);
      opacity:1;
      display: inline-block;
      vertical-align: top;
      margin-top: 73px;
    }

    .right-div {
      margin: 32px 0 0 57px;
      display: inline-block;
      vertical-align: top;

      .contact {
        width:338px;
        height:122px;
        background:rgba(36,195,182, 0.83);
        border-radius:13px;
        padding: 19px 0 0 38px;
        text-align: left;
        // background-image: url("assets/img/home/foot/contact-us.png");
        // background-repeat: no-repeat;
        // background-size: cover;

        .title {
          font-size:15px;
          font-family:PingFang SC;
          font-weight:600;
          line-height:20px;
          color:rgba(255,255,255,1);
          opacity:1;
          margin-bottom: 18px;

          .more-img {
            margin-right: 8px;
            vertical-align: top;
            width: 25px;
            height: 20px;
          }
        }

        .text {
          margin-bottom: 5px;
          font-size:13px;
          font-family:SourceHanSansCN, Biko;
          font-weight:400;
          line-height:19px;
          color:rgba(255,255,255,1);
          opacity:1;

          .contact2-img {
            width: 19px;
            height: 19px;
            margin-right: 9px;
            vertical-align: top;
          }
        }
      }

      .wechat-div {
        margin: 23px 0 0 35px;
        text-align: left;

        .title {
          font-size:15px;
          font-family:PingFang SC;
          // font-weight:600;
          line-height:15px;
          color:rgba(255,255,255,1);
          opacity:1;

          img {
            width: 19px;
            height: 17px;
            margin-right: 8px;
            vertical-align: sub;
          }
        }

        .code-div {
          margin: 11px 0 0 27px;

          .each-code {
            display: inline-block;
            margin-right:31px;
            font-size:14px;
            font-family:SourceHanSansCN;
            font-weight:500;
            line-height:14px;
            color:rgba(255,255,255,1);
            opacity:1;
            text-align: center;

            img {
              width: 66px;
              height: 66px;
              margin-bottom: 9px;
            }
          }
        }
      }
    }
  }

  .copy-right {
    padding: 31px 0 30px;
    background-color: #25C3B6;
    text-align: left;

    .content {
      width: 1100px;
      margin: 0 auto;

      .content-title {
        margin-bottom: 6px;
        font-size:12px;
        font-family:SourceHanSansCN, Biko;
        font-weight:500;
        line-height:12px;
        color:rgba(255,255,255,1);
        opacity:1;
      }

      .content-title2 {
        span {
          margin-right: 38px;
          font-size:12px;
          font-family: SourceHanSansCN, Biko;
          font-weight:500;
          line-height:12px;
          color:rgba(255,255,255,1);
          opacity:1;
        }
      }
    }
  }

</style>
