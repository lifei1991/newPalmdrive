<template>
  <div class="home">

    <div class="banner1-div">
      <div class="banner1" :style="{backgroundImage:'url(' + banner1 + ')'}">
        <div class="info1-div">
          <div class="info-number">99.3%</div>
          <div class="info-text">学校申请成功率达</div>
        </div>
        <div class="info2-div">
          <div class="info-number">71.6%</div>
          <div class="info-text">世界排名前 50 名校录取 Offer 比例</div>
        </div>
        <div class="info3-div">
          <div class="info-number">99.1%</div>
          <div class="info-text">申请满意度</div>
        </div>

        <!-- <div class="text">数据解释权归棕榈大道</div> -->
      </div>
    </div>

    <div class="banner2-div">
      <div class="title">名校 offer</div>
      <div class="title2">棕榈大道学员斩获的名校 Offer</div>
      <div class="number-div">
        <div class="title3">数据汇总</div>
        <div class="each-number-div"  v-for="(item, index) in numbers" :key='item.logo'>
          <div class="number-logo" :style="{backgroundImage:'url(' + item.logo + ')'}"></div>
          <div class="number-into">
            <div class="number-name">{{ item.title }}</div>
            <div class="number">{{ item.number }}</div>
            <span class="number-text" v-if="index == 0">位</span>
            <span class="number-text" v-if="index == 1">份</span>
          </div>
        </div>
        <div class="number-dataLine">*数据截止到2019年1月</div>
      </div>

      <div class="school-div" :style="{backgroundImage:'url(' + banner2 + ')'}">
        <div class="places-div">
          <div class="each-place" :class="{ 'place-select-style' : index == currentPlace }" v-for="(item, index) in places" :key="item.img" :style="{backgroundImage:'url(' + item.img + ')'}" @click="changePlace(index)" >
            <div class="place-title">{{ item.title }}</div>
            <div class="place-number">{{ item.number }}</div>
            <div class="place-dot"></div>
          </div>
        </div>

        <div class="each-school-div" v-for="item in selectSchool" :key="item.logo">
          <div class="school-logo" :style="{backgroundImage:'url(' + item.logo + ')'}"></div>
          <div class="school-into">
            <div class="school-name">{{ item.name }}</div>
            <span class="offer-text">Offer 数量：</span>
            <div class="school-offer">{{ item.offer }}</div>
          </div>
        </div>
        <!-- <div class="more-offer">
          <a href="http://palmdrive.cn/graduate_showcase" target="_blank">
            查看更多offer<img src="../assets/img/home/more.png" class="more-img" />
          </a>
        </div> -->
      </div>
    </div>

    <div class="banner3-div">
      <div class="title">成功案例</div>

      <ul class="guide-item-div">
        <li v-for="(item, index) in demoTypes" :key="item.name" @click="changeDemoType(index)" :class="{ 'guide-bg-colors' : index == currentType }">
          <div class="text">{{ item.name }}</div>
        </li>
      </ul>

      <div class="demos-div">
        <template v-for="(item, index) in selectedDemo" >
          <div class="each-demo" v-if="index < maxNumber" :key="item.img">
            <div>
              <div class="demo-img" :style="{backgroundImage:'url(' + item.schoolLogo + ')'}"></div>
              <img src="../assets/img/offers/demo-right-img.png" class="right-img" />
            </div>
            <div class="demo-info-div">
              <div class="demo-admissionSchool">{{ item.admissionSchool }}</div>
              <div class="demo-admissionMajor">{{ item.admissionMajor }}</div>
              <div class="demo-name">{{ item.name }}  |  {{ item.year }}</div>
              <div class="demo-text">{{ item.collegeSchool }}</div>
              <div class="demo-text">{{ item.collegeMajor }}</div>
              <div class="demo-text">GPA：{{ item.gpa }}，{{ item.toeflOrIelts }}，{{ item.greOrGmat }}，{{ item.bg }}</div>
            </div>
          </div>
        </template>

        <div class="more-demos" @click="showMoreDemo" v-if="selectedDemo.length > 8 && maxNumber != 100">
          <div>
            查看更多
            <span class="open-ask"></span>
          </div>
          <div class="open-ask"></div>
        </div>
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
            logo: require('../assets/img/home/school/stf.png'),
            name: '斯坦福大学',
            offer: 25
          },
          {
            logo: require('../assets/img/home/school/yl.png'),
            name: '耶鲁大学',
            offer: 41
          },
          {
            logo: require('../assets/img/home/school/zjg.png'),
            name: '芝加哥大学',
            offer: 93
          },
          {
            logo: require('../assets/img/home/school/bxfny.png'),
            name: '宾夕法尼亚大学',
            offer: 154
          },
          {
            logo: require('../assets/img/home/school/dk.png'),
            name: '杜克大学',
            offer: 115
          },
          {
            logo: require('../assets/img/home/school/kne.png'),
            name: '康奈尔大学',
            offer: 95
          },
          {
            logo: require('../assets/img/home/school/glby.png'),
            name: '哥伦比亚大学',
            offer: 388
          },
          {
            logo: require('../assets/img/home/school/nj.png'),
            name: '牛津大学',
            offer: 11
          },
          {
            logo: require('../assets/img/home/school/jq.png'),
            name: '剑桥大学',
            offer: 13
          },
          {
            logo: require('../assets/img/home/school/dglg.png'),
            name: '帝国理工学院',
            offer: 39
          },
          {
            logo: require('../assets/img/home/school/ldzzjj.png'),
            name: '伦敦政治经济学院',
            offer: 70
          },
          {
            logo: require('../assets/img/home/school/lddx.png'),
            name: '伦敦大学学院',
            offer: 39
          },
          {
            logo: require('../assets/img/home/school/xjpgl.png'),
            name: '新加坡国立大学',
            offer: 36
          },
          {
            logo: require('../assets/img/home/school/xg.png'),
            name: '香港大学',
            offer: 32
          }
        ],
        [
          {
            logo: require('../assets/img/home/school/hf.png'),
            name: '哈佛大学',
            offer: 29
          }
        ],
        [
          {
            logo: require('../assets/img/home/school/hf.png'),
            name: '哈佛大学',
            offer: 29
          }
        ],
        [
          {
            logo: require('../assets/img/home/school/hf.png'),
            name: '哈佛大学',
            offer: 29
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
          title: '美国 Offer',
          number: '265'
        },
        {
          img: require('../assets/img/offers/place/place2.png'),
          title: '英国 Offer',
          number: '165'
        },
        {
          img: require('../assets/img/offers/place/place3.png'),
          title: '欧洲 Offer',
          number: '119'
        },
        {
          img: require('../assets/img/offers/place/place4.png'),
          title: '澳洲 Offer',
          number: '340'
        }
      ],
      demoTypes: [
        {
          name: '文科'
        },
        {
          name: '理工科'
        },
        {
          name: '商科'
        },
        {
          name: '艺术'
        }
      ],
      demos: [
        [
          {
            name: 'Y 同学',
            year: '2019',
            schoolLogo: require('../assets/img/home/school/hf.png'),
            admissionSchool: '剑桥大学',
            admissionMajor: 'MSc International Social and Public Policy',
            collegeSchool: '中国农业大学',
            collegeMajor: '国际经济与贸易',
            gpa: '3.65/4.0',
            greOrGmat: 'GRE：316',
            toeflOrIelts: 'TOEFL：76',
            bg: '三段相关实习和科研'
          },
          {
            name: 'Y 同学',
            year: '2019',
            schoolLogo: require('../assets/img/home/school/hf.png'),
            admissionSchool: '剑桥大学',
            admissionMajor: 'MSc International Social and Public Policy',
            collegeSchool: '中国农业大学',
            collegeMajor: '国际经济与贸易',
            gpa: '3.65/4.0',
            greOrGmat: 'GRE：316',
            toeflOrIelts: 'TOEFL：76',
            bg: '三段相关实习和科研'
          },
          {
            name: 'Y 同学',
            year: '2019',
            schoolLogo: require('../assets/img/home/school/hf.png'),
            admissionSchool: '剑桥大学',
            admissionMajor: 'MSc International Social and Public Policy',
            collegeSchool: '中国农业大学',
            collegeMajor: '国际经济与贸易',
            gpa: '3.65/4.0',
            greOrGmat: 'GRE：316',
            toeflOrIelts: 'TOEFL：76',
            bg: '三段相关实习和科研'
          },
          {
            name: 'Y 同学',
            year: '2019',
            schoolLogo: require('../assets/img/home/school/hf.png'),
            admissionSchool: '剑桥大学',
            admissionMajor: 'MSc International Social and Public Policy',
            collegeSchool: '中国农业大学',
            collegeMajor: '国际经济与贸易',
            gpa: '3.65/4.0',
            greOrGmat: 'GRE：316',
            toeflOrIelts: 'TOEFL：76',
            bg: '三段相关实习和科研'
          },
          {
            name: 'Y 同学',
            year: '2019',
            schoolLogo: require('../assets/img/home/school/hf.png'),
            admissionSchool: '剑桥大学',
            admissionMajor: 'MSc International Social and Public Policy',
            collegeSchool: '中国农业大学',
            collegeMajor: '国际经济与贸易',
            gpa: '3.65/4.0',
            greOrGmat: 'GRE：316',
            toeflOrIelts: 'TOEFL：76',
            bg: '三段相关实习和科研'
          },
          {
            name: 'Y 同学',
            year: '2019',
            schoolLogo: require('../assets/img/home/school/hf.png'),
            admissionSchool: '剑桥大学',
            admissionMajor: 'MSc International Social and Public Policy',
            collegeSchool: '中国农业大学',
            collegeMajor: '国际经济与贸易',
            gpa: '3.65/4.0',
            greOrGmat: 'GRE：316',
            toeflOrIelts: 'TOEFL：76',
            bg: '三段相关实习和科研'
          },
          {
            name: 'Y 同学',
            year: '2019',
            schoolLogo: require('../assets/img/home/school/hf.png'),
            admissionSchool: '剑桥大学',
            admissionMajor: 'MSc International Social and Public Policy',
            collegeSchool: '中国农业大学',
            collegeMajor: '国际经济与贸易',
            gpa: '3.65/4.0',
            greOrGmat: 'GRE：316',
            toeflOrIelts: 'TOEFL：76',
            bg: '三段相关实习和科研'
          },
          {
            name: 'Y 同学',
            year: '2019',
            schoolLogo: require('../assets/img/home/school/hf.png'),
            admissionSchool: '剑桥大学',
            admissionMajor: 'MSc International Social and Public Policy',
            collegeSchool: '中国农业大学',
            collegeMajor: '国际经济与贸易',
            gpa: '3.65/4.0',
            greOrGmat: 'GRE：316',
            toeflOrIelts: 'TOEFL：76',
            bg: '三段相关实习和科研'
          },
          {
            name: 'Y 同学',
            year: '2019',
            schoolLogo: require('../assets/img/home/school/hf.png'),
            admissionSchool: '剑桥大学',
            admissionMajor: 'MSc International Social and Public Policy',
            collegeSchool: '中国农业大学',
            collegeMajor: '国际经济与贸易',
            gpa: '3.65/4.0',
            greOrGmat: 'GRE：316',
            toeflOrIelts: 'TOEFL：76',
            bg: '三段相关实习和科研'
          }
        ],
        [
          {
            name: 'Y 同学',
            year: '2019',
            schoolLogo: require('../assets/img/home/school/hf.png'),
            admissionSchool: '剑桥大学',
            admissionMajor: 'MSc International Social and Public Policy',
            collegeSchool: '中国农业大学',
            collegeMajor: '国际经济与贸易',
            gpa: '3.65/4.0',
            greOrGmat: 'GRE：316',
            toeflOrIelts: 'TOEFL：76',
            bg: '三段相关实习和科研'
          },
          {
            name: 'Y 同学',
            year: '2019',
            schoolLogo: require('../assets/img/home/school/hf.png'),
            admissionSchool: '剑桥大学',
            admissionMajor: 'MSc International Social and Public Policy',
            collegeSchool: '中国农业大学',
            collegeMajor: '国际经济与贸易',
            gpa: '3.65/4.0',
            greOrGmat: 'GRE：316',
            toeflOrIelts: 'TOEFL：76',
            bg: '三段相关实习和科研'
          },
          {
            name: 'Y 同学',
            year: '2019',
            schoolLogo: require('../assets/img/home/school/hf.png'),
            admissionSchool: '剑桥大学',
            admissionMajor: 'MSc International Social and Public Policy',
            collegeSchool: '中国农业大学',
            collegeMajor: '国际经济与贸易',
            gpa: '3.65/4.0',
            greOrGmat: 'GRE：316',
            toeflOrIelts: 'TOEFL：76',
            bg: '三段相关实习和科研'
          },
          {
            name: 'Y 同学',
            year: '2019',
            schoolLogo: require('../assets/img/home/school/hf.png'),
            admissionSchool: '剑桥大学',
            admissionMajor: 'MSc International Social and Public Policy',
            collegeSchool: '中国农业大学',
            collegeMajor: '国际经济与贸易',
            gpa: '3.65/4.0',
            greOrGmat: 'GRE：316',
            toeflOrIelts: 'TOEFL：76',
            bg: '三段相关实习和科研'
          },
          {
            name: 'Y 同学',
            year: '2019',
            schoolLogo: require('../assets/img/home/school/hf.png'),
            admissionSchool: '剑桥大学',
            admissionMajor: 'MSc International Social and Public Policy',
            collegeSchool: '中国农业大学',
            collegeMajor: '国际经济与贸易',
            gpa: '3.65/4.0',
            greOrGmat: 'GRE：316',
            toeflOrIelts: 'TOEFL：76',
            bg: '三段相关实习和科研'
          },
          {
            name: 'Y 同学',
            year: '2019',
            schoolLogo: require('../assets/img/home/school/hf.png'),
            admissionSchool: '剑桥大学',
            admissionMajor: 'MSc International Social and Public Policy',
            collegeSchool: '中国农业大学',
            collegeMajor: '国际经济与贸易',
            gpa: '3.65/4.0',
            greOrGmat: 'GRE：316',
            toeflOrIelts: 'TOEFL：76',
            bg: '三段相关实习和科研'
          },
          {
            name: 'Y 同学',
            year: '2019',
            schoolLogo: require('../assets/img/home/school/hf.png'),
            admissionSchool: '剑桥大学',
            admissionMajor: 'MSc International Social and Public Policy',
            collegeSchool: '中国农业大学',
            collegeMajor: '国际经济与贸易',
            gpa: '3.65/4.0',
            greOrGmat: 'GRE：316',
            toeflOrIelts: 'TOEFL：76',
            bg: '三段相关实习和科研'
          },
          {
            name: 'Y 同学',
            year: '2019',
            schoolLogo: require('../assets/img/home/school/hf.png'),
            admissionSchool: '剑桥大学',
            admissionMajor: 'MSc International Social and Public Policy',
            collegeSchool: '中国农业大学',
            collegeMajor: '国际经济与贸易',
            gpa: '3.65/4.0',
            greOrGmat: 'GRE：316',
            toeflOrIelts: 'TOEFL：76',
            bg: '三段相关实习和科研'
          }
        ],
        [
          {
            name: 'Y 同学',
            year: '2019',
            schoolLogo: require('../assets/img/home/school/hf.png'),
            admissionSchool: '剑桥大学',
            admissionMajor: 'MSc International Social and Public Policy',
            collegeSchool: '中国农业大学',
            collegeMajor: '国际经济与贸易',
            gpa: '3.65/4.0',
            greOrGmat: 'GRE：316',
            toeflOrIelts: 'TOEFL：76',
            bg: '三段相关实习和科研'
          },
          {
            name: 'Y 同学',
            year: '2019',
            schoolLogo: require('../assets/img/home/school/hf.png'),
            admissionSchool: '剑桥大学',
            admissionMajor: 'MSc International Social and Public Policy',
            collegeSchool: '中国农业大学',
            collegeMajor: '国际经济与贸易',
            gpa: '3.65/4.0',
            greOrGmat: 'GRE：316',
            toeflOrIelts: 'TOEFL：76',
            bg: '三段相关实习和科研'
          },
          {
            name: 'Y 同学',
            year: '2019',
            schoolLogo: require('../assets/img/home/school/hf.png'),
            admissionSchool: '剑桥大学',
            admissionMajor: 'MSc International Social and Public Policy',
            collegeSchool: '中国农业大学',
            collegeMajor: '国际经济与贸易',
            gpa: '3.65/4.0',
            greOrGmat: 'GRE：316',
            toeflOrIelts: 'TOEFL：76',
            bg: '三段相关实习和科研'
          },
          {
            name: 'Y 同学',
            year: '2019',
            schoolLogo: require('../assets/img/home/school/hf.png'),
            admissionSchool: '剑桥大学',
            admissionMajor: 'MSc International Social and Public Policy',
            collegeSchool: '中国农业大学',
            collegeMajor: '国际经济与贸易',
            gpa: '3.65/4.0',
            greOrGmat: 'GRE：316',
            toeflOrIelts: 'TOEFL：76',
            bg: '三段相关实习和科研'
          },
          {
            name: 'Y 同学',
            year: '2019',
            schoolLogo: require('../assets/img/home/school/hf.png'),
            admissionSchool: '剑桥大学',
            admissionMajor: 'MSc International Social and Public Policy',
            collegeSchool: '中国农业大学',
            collegeMajor: '国际经济与贸易',
            gpa: '3.65/4.0',
            greOrGmat: 'GRE：316',
            toeflOrIelts: 'TOEFL：76',
            bg: '三段相关实习和科研'
          },
          {
            name: 'Y 同学',
            year: '2019',
            schoolLogo: require('../assets/img/home/school/hf.png'),
            admissionSchool: '剑桥大学',
            admissionMajor: 'MSc International Social and Public Policy',
            collegeSchool: '中国农业大学',
            collegeMajor: '国际经济与贸易',
            gpa: '3.65/4.0',
            greOrGmat: 'GRE：316',
            toeflOrIelts: 'TOEFL：76',
            bg: '三段相关实习和科研'
          },
          {
            name: 'Y 同学',
            year: '2019',
            schoolLogo: require('../assets/img/home/school/hf.png'),
            admissionSchool: '剑桥大学',
            admissionMajor: 'MSc International Social and Public Policy',
            collegeSchool: '中国农业大学',
            collegeMajor: '国际经济与贸易',
            gpa: '3.65/4.0',
            greOrGmat: 'GRE：316',
            toeflOrIelts: 'TOEFL：76',
            bg: '三段相关实习和科研'
          },
          {
            name: 'Y 同学',
            year: '2019',
            schoolLogo: require('../assets/img/home/school/hf.png'),
            admissionSchool: '剑桥大学',
            admissionMajor: 'MSc International Social and Public Policy',
            collegeSchool: '中国农业大学',
            collegeMajor: '国际经济与贸易',
            gpa: '3.65/4.0',
            greOrGmat: 'GRE：316',
            toeflOrIelts: 'TOEFL：76',
            bg: '三段相关实习和科研'
          }
        ],
        [
          {
            name: 'Y 同学',
            year: '2019',
            schoolLogo: require('../assets/img/home/school/hf.png'),
            admissionSchool: '剑桥大学',
            admissionMajor: 'MSc International Social and Public Policy',
            collegeSchool: '中国农业大学',
            collegeMajor: '国际经济与贸易',
            gpa: '3.65/4.0',
            greOrGmat: 'GRE：316',
            toeflOrIelts: 'TOEFL：76',
            bg: '三段相关实习和科研'
          },
          {
            name: 'Y 同学',
            year: '2019',
            schoolLogo: require('../assets/img/home/school/hf.png'),
            admissionSchool: '剑桥大学',
            admissionMajor: 'MSc International Social and Public Policy',
            collegeSchool: '中国农业大学',
            collegeMajor: '国际经济与贸易',
            gpa: '3.65/4.0',
            greOrGmat: 'GRE：316',
            toeflOrIelts: 'TOEFL：76',
            bg: '三段相关实习和科研'
          },
          {
            name: 'Y 同学',
            year: '2019',
            schoolLogo: require('../assets/img/home/school/hf.png'),
            admissionSchool: '剑桥大学',
            admissionMajor: 'MSc International Social and Public Policy',
            collegeSchool: '中国农业大学',
            collegeMajor: '国际经济与贸易',
            gpa: '3.65/4.0',
            greOrGmat: 'GRE：316',
            toeflOrIelts: 'TOEFL：76',
            bg: '三段相关实习和科研'
          },
          {
            name: 'Y 同学',
            year: '2019',
            schoolLogo: require('../assets/img/home/school/hf.png'),
            admissionSchool: '剑桥大学',
            admissionMajor: 'MSc International Social and Public Policy',
            collegeSchool: '中国农业大学',
            collegeMajor: '国际经济与贸易',
            gpa: '3.65/4.0',
            greOrGmat: 'GRE：316',
            toeflOrIelts: 'TOEFL：76',
            bg: '三段相关实习和科研'
          },
          {
            name: 'Y 同学',
            year: '2019',
            schoolLogo: require('../assets/img/home/school/hf.png'),
            admissionSchool: '剑桥大学',
            admissionMajor: 'MSc International Social and Public Policy',
            collegeSchool: '中国农业大学',
            collegeMajor: '国际经济与贸易',
            gpa: '3.65/4.0',
            greOrGmat: 'GRE：316',
            toeflOrIelts: 'TOEFL：76',
            bg: '三段相关实习和科研'
          },
          {
            name: 'Y 同学',
            year: '2019',
            schoolLogo: require('../assets/img/home/school/hf.png'),
            admissionSchool: '剑桥大学',
            admissionMajor: 'MSc International Social and Public Policy',
            collegeSchool: '中国农业大学',
            collegeMajor: '国际经济与贸易',
            gpa: '3.65/4.0',
            greOrGmat: 'GRE：316',
            toeflOrIelts: 'TOEFL：76',
            bg: '三段相关实习和科研'
          },
          {
            name: 'Y 同学',
            year: '2019',
            schoolLogo: require('../assets/img/home/school/hf.png'),
            admissionSchool: '剑桥大学',
            admissionMajor: 'MSc International Social and Public Policy',
            collegeSchool: '中国农业大学',
            collegeMajor: '国际经济与贸易',
            gpa: '3.65/4.0',
            greOrGmat: 'GRE：316',
            toeflOrIelts: 'TOEFL：76',
            bg: '三段相关实习和科研'
          },
          {
            name: 'Y 同学',
            year: '2019',
            schoolLogo: require('../assets/img/home/school/hf.png'),
            admissionSchool: '剑桥大学',
            admissionMajor: 'MSc International Social and Public Policy',
            collegeSchool: '中国农业大学',
            collegeMajor: '国际经济与贸易',
            gpa: '3.65/4.0',
            greOrGmat: 'GRE：316',
            toeflOrIelts: 'TOEFL：76',
            bg: '三段相关实习和科研'
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
      banner1: '',
      banner2: '',
      maxNumber: 8,
      currentPlace: 0,
      selectSchool: [],
      currentType: 0,
      selectedDemo: []
    }
  },
  created () {
    this.banner1 = require('../assets/img/offers/banner1.png')
    this.banner2 = require('../assets/img/offers/banner2.png')
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.home {
  text-align: center;

  .banner1-div {
    width: 100%;
    // padding: 16px 0 33px;
    background-color: #1BBEB2;
    height: 586px;
    position: relative;

    .banner1 {
      width: 1071px;
      height: 537px;
      margin: 0 auto;
      position: relative;
      text-align: left;
      background-repeat: no-repeat;
      background-size: cover;
      position: absolute;
      top: 121px;
      left: 50%;
      margin-left: -535px;

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
    background-color: #fff;
    padding: 122px 0 54px;

    .title {
      font-size: 24px;
      font-family: Campton, SourceHanSansCN;
      font-weight: bold;
      line-height: 24px;
      color: rgba(64,199,188,1);
      opacity: 1;
      margin: 0px auto 10px;
    }

    .title2 {
      font-size: 16px;
      font-family: Biko, SourceHanSansCN;
      font-weight: 500;
      line-height: 19px;
      color: rgba(0,0,0,1);
      opacity: 1;
      margin-bottom: 8px;
    }

    .title3 {
      margin-left: 33px;
      font-size:24px;
      font-family:SourceHanSansCN;
      font-weight:bold;
      line-height:24px;
      color:rgba(43,43,43,1);
      opacity:1;
      text-align: left;
      margin-bottom: 28px;
    }

    .number-div {
      text-align: center;
      width: 1200px;
      margin: 0 auto;

      .each-number-div {
        height: 84px;
        width: 250px;
        display: inline-block;
        margin: 0 25px;

        .number-logo {
          width: 81px;
          height: 100%;
          display: inline-block;
          background-repeat: no-repeat;
          background-size: cover;
        }

        .number-into {
          display: inline-block;
          margin-left: 25px;
          text-align: left;
          vertical-align: top;

          .number-name {
            font-size:18px;
            font-family:SourceHanSansCN;
            font-weight:bold;
            line-height:18px;
            color:rgba(34,195,182,1);
            opacity:1;
            margin: 7px 0 14px;
          }

          .number {
            font-size:40px;
            font-family:Biko, PingFang, SourceHanSansCN;
            font-weight:Bold;
            line-height:40px;
            color:rgba(43,43,43,1);
            opacity:1;
            display: inline-block;
          }

          .number-text {
            font-size: 20px;
            display: inline-block;
            color: rgba(43,43,43,1);
            font-family: SourceHanSansCN;
          }
        }
      }

      .number-dataLine {
        height:17px;
        font-size:12px;
        font-family:PingFang SC;
        font-weight:400;
        line-height:17px;
        color:rgba(34,195,182,1);
        opacity:1;
        margin-top: 20px;
        text-align: right;
        margin-right: 45px;
      }
    }

    .school-div {
      width: 1100px;
      margin: 0 auto;
      background-repeat: no-repeat;
      background-size: 80%;
      background-position: top;

      .places-div {
        margin: 75px auto 70px;
        // width: 1200px;
        text-align: center;
        padding-top: 33px;

        .each-place {
          width: 176px;
          height: 176px;
          margin: 0 43px;
          display: inline-block;
          background-repeat: no-repeat;
          background-size: cover;
          position: relative;
          cursor: pointer;
          opacity: .4;

          .place-title {
            font-size: 15px;
            font-family: Biko;
            font-weight:bold;
            line-height:15px;
            color:rgba(9,23,39,1);
            opacity:1;
            margin: 56px auto 12px;
          }

          .place-number {
            font-size: 50px;
            font-family: Biko;
            font-weight:bold;
            line-height:50px;
            color:rgba(9,23,39,1);
            opacity:1;
          }
        }

        .each-place:hover {
          opacity: 1;
        }

        .place-select-style {
          opacity: 1;
        }
      }

      .each-school-div {
        width: 299px;
        display: inline-block;
        margin: 0 15px 29px;
        background:rgba(255,255,255,1);
        box-shadow:5px 5px 12px rgba(0,0,0,0.16);
        opacity:1;
        border-radius:7px;
        padding: 10px 0 10px 25px;
        text-align: left;

        .school-logo {
          width: 63px;
          height: 58px;
          display: inline-block;
          background-repeat: no-repeat;
          background-size: contain;
        }

        .school-into {
          display: inline-block;
          width: 180px;
          margin-left: 14px;
          text-align: left;
          vertical-align: top;

          .school-name {
            font-size:18px;
            font-family:Biko, SourceHanSansCN;
            font-weight:bold;
            line-height:18px;
            color:#212121;
            opacity:1;
            margin-bottom: 5px;
            margin-top: 7px;
          }

          .school-offer {
            font-size:25px;
            font-family:Biko;
            font-weight:bold;
            line-height:25px;
            color:rgba(1,138,141,1);
            opacity:1;
            display: inline-block;
          }

          .offer-text {
            font-size:18px;
            font-family:Biko;
            font-weight:bold;
            line-height:25px;
            color:#212121;
            opacity:1;
          }
        }
      }

      .more-offer {
        margin-top: -11px;
        font-size:13px;
        font-family:PingFangSC-Medium, Avenir-Heavy;
        font-weight:800;
        line-height:13px;
        color:rgba(51,51,51,1);
        opacity:1;
        text-align: right;
        margin-right: 30px;

        a {
          text-decoration: none;
          color: rgba(51,51,51,1);
        }

        .more-img {
          width: 16px;
          height: 17px;
          margin-left: 15px;
          display: inline-block;
          vertical-align: bottom;
        }
      }
    }
  }

  .banner3-div {
    padding: 69px 0 76px;
    background-color: #EDEFF4;

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
      margin: 26px auto 65px;
      width: 865px;
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
        width: 150px;
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
      width: 1100px;
      text-align: center;
      margin: 0 auto;

      .each-demo {
        width: 212px;
        margin: 0 8px 26px;
        display: inline-block;
        vertical-align: top;
        padding: 32px 22px;
        background: #FFFFFF;
        box-shadow:5px 5px 6px rgba(0,0,0,0.16);
        opacity:1;
        border-radius:20px;
        text-align: left;

        .demo-img {
          width:75px;
          height:73px;
          background-repeat: no-repeat;
          background-size: contain;
          display: inline-block;
        }

        .right-img {
          width: 77px;
          height: 48px;
          margin-left: 60px;
        }

        .demo-info-div {
          text-align: left;

          .demo-admissionSchool {
            font-size:17px;
            font-family:SourceHanSansCN;
            font-weight:bold;
            line-height:17px;
            color:rgba(0,0,0,1);
            opacity:1;
            margin: 13px 0 7px;
          }

          .demo-admissionMajor {
            font-size:15px;
            font-family:SourceHanSansCN;
            font-weight:400;
            line-height:20px;
            color:rgba(0,0,0,1);
            opacity:1;
          }

          .demo-name {
            margin-top: 18px;
            font-size:15px;
            font-family:Biko, SourceHanSansCN;
            font-weight:500;
            line-height:23px;
            color:#23C3B6;
            opacity:1;
          }

          .demo-text {
            font-size:15px;
            font-family:Biko, SourceHanSansCN;
            font-weight:500;
            line-height:23px;
            color:#000000;
            opacity:1;
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
        margin: 0 auto;
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
</style>
