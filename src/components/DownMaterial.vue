<template>
  <div class="material">
    <!-- <remote-css rel="stylesheet" href="../assets/third/carousel/owl.theme.css"></remote-css>
    <remote-css rel="stylesheet" href="../assets/third/carousel/owl.carousel.css"></remote-css> -->

    <div class="banner1-div">
      <div class="banner1" :style="{backgroundImage:'url(' + banner1 + ')'}">
      </div>
    </div>

    <div class="menu">
      <ul class="guide-item-div" >
        <li v-for="(item, index) in dynamicTypes" :key="item.name" @click="changeGuideType(index)" :class="{ 'guide-bg-colors' : index == currentType }">
          <div class="img" :style="{backgroundImage:'url(' + (index == currentType ? item.img1 : item.img) + ')'}"></div>
          <div class="text">{{ item.name }}</div>
        </li>
      </ul>
    </div>

    <div>
      <div class="banner2-div" v-for="(eachArray, ind) in selectedGuide" :key="ind" v-if="ind < maxNumber">

        <div class="carousel-div">
          <div class="each-dynamic" v-for="(item, index) in eachArray" :key="index">
            <div class="logo">PALMDRIVE</div>
            <!-- <div class="dynamic-img" :style="{backgroundImage:'url(' + require(item.img) + ')'}"></div> -->
            <img class="dynamic-img" :src="item.img"/>
            <div class="title" @click="goToDetail(item.content)">{{ item.title }}</div>
            <div class="text">{{ item.text }}</div>
            <div class="more" @click="goToDetail(item.content)">阅读全文 <img src="../assets/img/home/more-green.png" class="more-img" /></div>
            <div class="bottom-green"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="more-guides" @click="loadMoreGuide" v-if="!(maxNumber > 2 || selectedGuide.length <=2)">
      <span>查看更多</span>
      <div class="open-more-img"></div>
    </div>

    <div class="banner3-div">
      <div class="img1" @click="goUrl('/guide')" ></div>
      <div class="img2" @click="goUrl('/major')"></div>
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
  name: 'DownMaterial',
  data () {
    return {
      guides: [[]],
      dynamicTypes: [
        {
          name: '英文',
          img: require('../assets/img/downMaterial/guides/menu1.png'),
          img1: require('../assets/img/downMaterial/guides/menu1-1.png')
        },
        {
          name: '论文',
          img: require('../assets/img/downMaterial/guides/menu2.png'),
          img1: require('../assets/img/downMaterial/guides/menu2-1.png')
        },
        {
          name: '演讲',
          img: require('../assets/img/downMaterial/guides/menu3.png'),
          img1: require('../assets/img/downMaterial/guides/menu3-1.png')
        },
        {
          name: '背景提升',
          img: require('../assets/img/downMaterial/guides/menu4.png'),
          img1: require('../assets/img/downMaterial/guides/menu4-1.png')
        }
      ],
      banner1: '',
      maxNumber: 2,
      currentType: 0,
      selectedGuide: []
    }
  },
  created () {
    this.guides = require('../../static/json/downMaterial.json')
    this.banner1 = require('../assets/img/downMaterial/banner1.png')
    // this.selectedGuide = this.guides[this.currentType]
    this.changeGuideType(this.currentType)
  },
  mounted () {
    window.scrollTo(0, 0)
  },
  methods: {
    changeGuideType (index) {
      this.currentType = index
      this.maxNumber = 2
      this.selectedGuide = []

      for (var i = 0; i < this.guides[index].length; i += 4) {
        this.selectedGuide.push(this.guides[index].slice(i, i + 4))
      }

      // this.selectedGuide = this.guides[index]
    },
    loadMoreGuide () {
      this.maxNumber = 100
    },
    goUrl (url) {
      this.showMenus = false
      this.$router.push({
        path: url
      })
    },
    goToDetail (content) {
      let routeUrl = this.$router.resolve({
        path: '/news',
        query: {
          content: content
        }
      })
      window.open(routeUrl.href, '_blank')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.material {
  text-align: center;

  .banner1-div {
    width: 100%;
    padding: 41px 0 8px;
    background-color: #21C3B6;

    .banner1 {
      width: 1070px;
      height: 432px;
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

  .menu {
    .guide-item-div {
      list-style: none;
      text-align: center;
      padding: 0;
      margin: 66px auto 89px;
      width: 630px;
      background:rgba(250,255,255,1);
      box-shadow:-2px 3px 15px rgba(91,98,97,0.16);
      opacity:1;
      border-radius:83px;

      li {
        width: 150px;
        height: 51px;
        opacity: 1;
        margin-right: 10px;
        display: inline-block;
        color: rgba(57,60,61,1);
        cursor: pointer;
        text-align: center;

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
  }

  .banner2-div {
    // padding: 42px 0 40px;
    background-color: #F8F8F8;
    text-align: center;
    margin-bottom: 25px;

    .carousel-div {
      width: 1200px;
      margin: 0 auto;
      text-align: center;

      .each-dynamic {
        padding: 20px 19px 0;
        background:rgba(255,255,255,1);
        box-shadow:5px 5px 6px rgba(47,47,47,0.21);
        opacity:1;
        width: 218px;
        margin-bottom: 25px;
        display: inline-block;
        margin: 42px 10px 39px;
        text-align: left;

        .logo {
          font-size:13px;
          font-family:Campton;
          font-weight:bold;
          line-height:13px;
          color:rgba(190,190,190,1);
          opacity:1;
        }

        .dynamic-img {
          margin: 11px 0 17px;
          width: 218px;
          height: 141px;
        }

        .title {
          font-size:16px;
          font-family:SourceHanSansCN;
          font-weight:bold;
          line-height:24px;
          color:rgba(0,0,0,1);
          opacity:1;
          cursor: pointer;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
          height: 48px;
        }

        .title:hover {
          color: #2aa7aa;
        }

        .text {
          font-family:SourceHanSansCN, CamptonLight;
          font-size:12px;
          font-weight:400;
          line-height:18px;
          color:rgba(82,82,82,1);
          opacity:1;
          margin: 12px 0 12px;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
          overflow: hidden;
          height: 54px;
        }

        .more {
          font-size:9px;
          font-family:SourceHanSansCN;
          font-weight:500;
          line-height:16px;
          color:rgba(65,64,64,1);
          opacity:1;
          margin-bottom: 28px;
          cursor: pointer;

          .more-img {
            width: 10px;
            height: 10px;
            display: inline-block;
            margin-left: 8px;
          }
        }

        .more:hover {
          color: #2aa7aa;
        }

        .bottom-green {
          height:5px;
          background:rgba(34,195,182,1);
          opacity:1;
          margin: 0 -18px;
        }
      }
    }
  }

  .banner2-div:last-child {
    margin-bottom: 0 !important;
  }

  .more-guides {
    font-size:14px;
    font-family:SourceHanSansCN;
    font-weight:400;
    line-height:14px;
    color:rgba(72,72,72,1);
    opacity:1;
    padding: 32px 0 51px;
    background-color: #F8F8F8;
    cursor: pointer;

    .open-more-img {
      width: 26px;
      height: 10px;
      display: inline-block;
      margin-left: 8px;
      cursor: pointer;
      background-image: url("../assets/img/dreamSchool/openArrow.png");
      background-repeat: no-repeat;
      background-size: cover;
    }
  }

  .banner3-div {
    padding: 34px 0 68px;
    background-color: #FFF;
    text-align: center;

    .img1 {
      width: 478px;
      height: 236px;
      display: inline-block;
      margin:0 21px;
      background-image: url("../assets/img/applicationGuide/applicationGuide.png");
      background-repeat: no-repeat;
      background-size: cover;
      box-shadow:5px 5px 6px rgba(47,47,47,0.21);
      border-radius: 18px;
      cursor: pointer;
    }

    .img2 {
      width: 478px;
      height: 236px;
      display: inline-block;
      margin:0 21px;
      background-image: url("../assets/img/applicationGuide/majorIntro.png");
      background-repeat: no-repeat;
      background-size: cover;
      box-shadow:5px 5px 6px rgba(47,47,47,0.21);
      border-radius: 18px;
      cursor: pointer;
    }
  }
}
</style>
