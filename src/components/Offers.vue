<template>
  <div class='home'>

    <div class='banner1-div'>
      <div class='banner1' :style="{backgroundImage:'url(' + banner1 + ')'}">
        <div class='info1-div'>
          <div class='info-number'>99.3%</div>
          <div class='info-text'>学校申请成功率达</div>
        </div>
        <div class='info2-div'>
          <div class='info-number'>71.6%</div>
          <div class='info-text'>世界排名前 50 名校录取 Offer 比例</div>
        </div>
        <div class='info3-div'>
          <div class='info-number'>99.1%</div>
          <div class='info-text'>申请满意度</div>
        </div>

        <!-- <div class='text'>数据解释权归棕榈大道</div> -->
      </div>
    </div>

    <div class='banner2-div'>
      <div class='title'>名校 offer</div>
      <div class='title2'>棕榈大道学员斩获的名校 Offer</div>
      <div class='number-div'>
        <div class='title3'>数据汇总</div>
        <div class='each-number-div'  v-for='(item, index) in numbers' :key='item.logo'>
          <div class='number-logo' :style="{backgroundImage:'url(' + item.logo + ')'}"></div>
          <div class='number-into'>
            <div class='number-name'>{{ item.title }}</div>
            <div class='number'>{{ item.number }}</div>
            <span class='number-text' v-if='index == 0'>位</span>
            <span class='number-text' v-if='index == 1'>份</span>
          </div>
        </div>
        <div class='number-dataLine'>*数据截止到2019年1月</div>
      </div>

      <div class='school-div' :style="{backgroundImage:'url(' + banner2 + ')'}">
        <div class='places-div'>
          <div class='each-place' :class="{ 'place-select-style' : index == currentPlace }" v-for='(item, index) in places' :key='item.img' :style="{backgroundImage:'url(' + item.img + ')'}" @click='changePlace(index)' >
            <div class='place-title'>{{ item.title }}</div>
            <div class='place-number'>{{ item.number }}</div>
            <div v-if="index == currentPlace" class="place-dot" :class="['place-dot' + index]"></div>
          </div>
        </div>

        <div class='each-school-div' v-for='item in selectSchool' :key='item.logo'>
          <div class='school-logo' :style="{backgroundImage:'url(' + item.logo + ')'}"></div>
          <div class='school-into'>
            <div class='school-name'>{{ item.name }}</div>
            <span class='offer-text'>Offer 数量：</span>
            <div class='school-offer'>{{ item.offer }}</div>
          </div>
        </div>
        <!-- <div class='more-offer'>
          <a href='http://palmdrive.cn/graduate_showcase' target='_blank'>
            查看更多offer<img src='../assets/img/home/more.png' class='more-img' />
          </a>
        </div> -->
      </div>
    </div>

    <div class='banner3-div'>
      <div class='title'>成功案例</div>

      <ul class='guide-item-div'>
        <li v-for='(item, index) in demoTypes' :key='item.name' @click='changeDemoType(index)' :class="{ 'guide-bg-colors' : index == currentType }">
          <div class='text'>{{ item.name }}</div>
        </li>
      </ul>

      <div class='demos-div'>
        <template v-for='(item, index) in selectedDemo' >
          <div class='each-demo' v-if='index < maxNumber' :key='item.img + item.name'>
            <div>
              <div class='demo-img' :style="{backgroundImage:'url(' + item.schoolLogo + ')'}"></div>
              <img src='../assets/img/offers/demo-right-img.png' class='right-img' />
            </div>
            <div class='demo-info-div'>
              <div class='demo-admissionSchool'>{{ item.admissionSchool }}</div>
              <div class='demo-admissionMajor' :title='item.admissionMajor'>{{ item.admissionMajor }}</div>
              <div class='demo-name'>{{ item.name }}</div>
              <div class='demo-text line1'>{{ item.collegeSchool }}</div>
              <div class='demo-text line1'>{{ item.collegeMajor }}</div>
              <div class='demo-text line3' :title="item.gpa + '，' + item.toeflOrIelts + '，' + item.greOrGmat + '，' + item.bg">GPA：{{ item.gpa }}，{{ item.toeflOrIelts }}，{{ item.greOrGmat }}，{{ item.bg }}</div>
            </div>
          </div>
        </template>

        <div class='more-demos' @click='showMoreDemo' v-if='selectedDemo.length > 8 && maxNumber != 100'>
          <div>
            查看更多
            <span class='open-ask'></span>
          </div>
          <div class='open-ask'></div>
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
            name: '李旻璞',
            year: '',
            schoolLogo: require('../assets/img/home/school/ldzzjj.png'),
            admissionSchool: '伦敦政治经济学院',
            admissionMajor: 'MSc International Social and Public Policy',
            collegeSchool: '中国农业大学',
            collegeMajor: 'International development',
            gpa: '3.5以上（85以上）',
            greOrGmat: 'GRE: 315-320',
            toeflOrIelts: 'IELTS:7.0-7.5',
            bg: '三段相关实习和科研'
          },
          {
            name: '张煜',
            year: '',
            schoolLogo: '',
            admissionSchool: '南加利福尼亚大学',
            admissionMajor: 'Master of Laws(LLM)',
            collegeSchool: '郑州大学',
            collegeMajor: 'Law',
            gpa: '3.5以上（85以上）',
            greOrGmat: 'GRE: N/A',
            toeflOrIelts: 'TOEFL：60-80',
            bg: '四段相关实习，两段校园活动经历'
          },
          {
            name: '何婧楠',
            year: '',
            schoolLogo: require('../assets/img/home/school/glby.png'),
            admissionSchool: '哥伦比亚大学',
            admissionMajor: 'MA in Curriculum and Teaching',
            collegeSchool: '中山大学',
            collegeMajor: 'Preventive Medicine',
            gpa: '3.0-3.5（80-85）',
            greOrGmat: 'GRE: 315-320',
            toeflOrIelts: 'IELTS:7.0-7.5',
            bg: '两段相关实习'
          },
          {
            name: '宫凯璇',
            year: '',
            schoolLogo: require('../assets/img/home/school/jq.png'),
            admissionSchool: '剑桥大学',
            admissionMajor: 'MPhil in Education(Research in Second Language Education)',
            collegeSchool: '浙江大学',
            collegeMajor: 'English',
            gpa: '3.5以上（85以上）',
            greOrGmat: 'GRE: N/A',
            toeflOrIelts: 'IELTS：7.5-8.0',
            bg: '多段相关经历和校园活动'
          },
          {
            name: '周雨凡',
            year: '',
            schoolLogo: require('../assets/img/home/school/jq.png'),
            admissionSchool: '剑桥大学',
            admissionMajor: 'MPhil in Development Studies MSc',
            collegeSchool: '早稻田大学',
            collegeMajor: '亚洲研究',
            gpa: '3.0-3.5（80-85）',
            greOrGmat: 'GRE：320-330',
            toeflOrIelts: 'IELTS：7.0-7.5',
            bg: '两段发展研究科研，联合国人口基金会实习'
          },
          {
            name: '赵佳璐',
            year: '',
            schoolLogo: require('../assets/img/home/school/bxfny.png'),
            admissionSchool: '宾夕法尼亚大学',
            admissionMajor: ' M.S.Ed. in Teaching English to Speakers of Other Languages ',
            collegeSchool: '温州肯恩大学',
            collegeMajor: '会计',
            gpa: '3.5以上（85以上）',
            greOrGmat: 'GRE：315-320',
            toeflOrIelts: 'TOEFL: 100-110',
            bg: '两段相关实习'
          },
          {
            name: '罗灏婷',
            year: '',
            schoolLogo: require('../assets/img/home/school/glby.png'),
            admissionSchool: '哥伦比亚大学',
            admissionMajor: 'MA in Political Science',
            collegeSchool: '中山大学',
            collegeMajor: 'Philosophy',
            gpa: '3.5以上（85以上）',
            greOrGmat: 'GRE:330+',
            toeflOrIelts: 'TOEFL:100-110',
            bg: '两段相关实习，多段相关经历'
          },
          {
            name: '陈舒婷',
            year: '',
            schoolLogo: require('../assets/img/home/school/nj.png'),
            admissionSchool: '牛津大学',
            admissionMajor: 'MSt in Linguistics, Philology and Phonetics',
            collegeSchool: '中山大学',
            collegeMajor: '英语专业',
            gpa: '3.5以上（85以上）',
            greOrGmat: 'GRE: N/A',
            toeflOrIelts: 'IELTS：7.0-7.5',
            bg: '两段暑校经历，两段相关实习'
          },
          {
            name: '李辛夷',
            year: '',
            schoolLogo: require('../assets/img/home/school/nj.png'),
            admissionSchool: '牛津大学',
            admissionMajor: 'MS in Social Anthropology',
            collegeSchool: '北大+早稻田双学位',
            collegeMajor: '哲学与宗教研究',
            gpa: '3.5以上（85以上）',
            greOrGmat: 'GRE：320-330',
            toeflOrIelts: 'TOEFL：100-110',
            bg: '相关经历丰富'
          },
          {
            name: '敖雨璐',
            year: '',
            schoolLogo: require('../assets/img/home/school/xg.png'),
            admissionSchool: '香港大学',
            admissionMajor: 'Master of Journalism',
            collegeSchool: '',
            // 江西师范大学
            collegeMajor: 'Journalism',
            gpa: '3.5以上（85以上）',
            greOrGmat: 'GRE: N/A',
            toeflOrIelts: 'IELTS：6.5-7.0',
            bg: '三段相关实习，多段校园活动经历'
          },
          {
            name: '吕明格',
            year: '',
            schoolLogo: require('../assets/img/home/school/xbdx.png'),
            admissionSchool: '西北大学',
            admissionMajor: 'M.S. Integrated Marketing Communications',
            collegeSchool: '',
            // 上海师范大学
            collegeMajor: '旅游管理',
            gpa: '3.0-3.5（80-85）',
            greOrGmat: 'GRE：320-330',
            toeflOrIelts: 'IELTS：7.0-7.5',
            bg: '四段实习'
          },
          {
            name: '袁玮',
            year: '',
            schoolLogo: '',
            admissionSchool: '蒙特雷高翻学院',
            admissionMajor: 'MA in Translation and localization management',
            collegeSchool: '北京交通大学',
            collegeMajor: '英语专业',
            gpa: '3.5以上（85以上）',
            greOrGmat: 'GRE: 315-320',
            toeflOrIelts: 'IELTS：7.5-8.0',
            bg: '毕业后工作一年，多段相关经历'
          },
          {
            name: '高晓琪',
            year: '',
            schoolLogo: '',
            admissionSchool: '多伦多大学',
            admissionMajor: 'Masters of Information in User Experience Design (MI-UXD)',
            collegeSchool: '多伦多大学',
            collegeMajor: 'Computer Science & Statistics',
            gpa: '3.5以上（85以上）',
            greOrGmat: 'GRE：320-330',
            toeflOrIelts: 'TOEFL：N/A',
            bg: '两段暑校经历，多段相关科研和实习'
          },
          {
            name: '唐妍星',
            year: '',
            schoolLogo: '',
            admissionSchool: '多伦多大学',
            admissionMajor: 'Master of Education, Educational Leadership and Policy',
            collegeSchool: '北京邮电大学',
            collegeMajor: '英语专业',
            gpa: '3.0-3.5（80-85）',
            greOrGmat: 'GRE: N/A',
            toeflOrIelts: 'IELTS：7.0-7.5',
            bg: '两段相关的实习经历'
          },
          {
            name: '冯焕琳',
            year: '',
            schoolLogo: require('../assets/img/home/school/lddx.png'),
            admissionSchool: '伦敦大学学院',
            admissionMajor: 'Master of Laws(LLM)',
            collegeSchool: '武汉大学',
            collegeMajor: '法学',
            gpa: '3.5以上（85以上）',
            greOrGmat: 'GRE: N/A',
            toeflOrIelts: 'TOEFL：N/A',
            bg: '两段法院实习，一段课程调研项目'
          },
          {
            name: '李卓文',
            year: '',
            schoolLogo: require('../assets/img/home/school/lddx.png'),
            admissionSchool: '伦敦大学学院',
            admissionMajor: 'MATeachingEnglishtoSpeakersofOtherLanguages(TESOL)Pre-service',
            collegeSchool: '香港中文大学（深圳）',
            collegeMajor: 'Translation',
            gpa: '3.5以上（85以上）',
            greOrGmat: 'GRE：320-330',
            toeflOrIelts: 'IELTS：7.5-8.0',
            bg: '一段科研，两段教育相关实习'
          },
          {
            name: '王悦霖',
            year: '',
            schoolLogo: require('../assets/img/home/school/dk.png'),
            admissionSchool: '杜克大学',
            admissionMajor: 'Master of Political Science ',
            collegeSchool: '',
            // 吉林大学
            collegeMajor: '国际政治',
            gpa: '3.5以上（85以上）',
            greOrGmat: 'GRE：320-330',
            toeflOrIelts: 'TOEFL：100-110',
            bg: '多段科研经历'
          },
          {
            name: '周若琳',
            year: '',
            schoolLogo: require('../assets/img/home/school/xjpgl.png'),
            admissionSchool: '新加坡国立大学',
            admissionMajor: 'Master of Arts(Chinese Culture and Language)',
            collegeSchool: '四川大学',
            collegeMajor: '汉语言文学',
            gpa: '3.5以上（85以上）',
            greOrGmat: 'GRE: N/A',
            toeflOrIelts: 'IELTS：6.5-7.0',
            bg: '编辑相关实习经历'
          },
          {
            name: '李旬',
            year: '',
            schoolLogo: require('../assets/img/home/school/zjg.png'),
            admissionSchool: '芝加哥大学',
            admissionMajor: 'Master of Public Policy',
            collegeSchool: '乔治华盛顿大学',
            collegeMajor: 'Public Affairs',
            gpa: '3.5以上（85以上）',
            greOrGmat: 'GRE：320-330',
            toeflOrIelts: 'TOEFL：110+',
            bg: '研究经历丰富'
          },
          {
            name: '丁傅涵',
            year: '',
            schoolLogo: '',
            admissionSchool: '纽约大学',
            admissionMajor: 'MA in Politics',
            collegeSchool: '华中科技大学',
            collegeMajor: '政治学与行政学',
            gpa: '3.5以上（85以上）',
            greOrGmat: 'GRE:  320-330',
            toeflOrIelts: 'TOEFL: 100-110',
            bg: '相关经历丰富'
          },
          {
            name: '喻静蕾',
            year: '',
            schoolLogo: '',
            admissionSchool: '鹿特丹伊拉斯姆斯大学',
            admissionMajor: 'Psychology of the Digital Media MSc',
            collegeSchool: '北京师范大学',
            collegeMajor: '心理学',
            gpa: '3.0-3.5（80-85）',
            greOrGmat: 'GRE: N/A',
            toeflOrIelts: 'IELTS：7.0-7.5',
            bg: '研究经历丰富'
          },
          {
            name: '蔡钟瑶',
            year: '',
            schoolLogo: '',
            admissionSchool: '布朗大学',
            admissionMajor: 'Master in Social Analysis and Research',
            collegeSchool: '本科：中国海洋大学 研究生：Rutgers',
            collegeMajor: '公共关系',
            gpa: '3.5以上（85以上）',
            greOrGmat: 'GRE: N/A',
            toeflOrIelts: 'TOEFL：N/A',
            bg: '有三段社会研究经历。两段市场分析实习'
          },
          {
            name: '胡芊芊',
            year: '',
            schoolLogo: require('../assets/img/home/school/bxfny.png'),
            admissionSchool: '宾夕法尼亚大学',
            admissionMajor: 'MS in Nonprofit Leadership ',
            collegeSchool: '海本',
            // 密歇根大学
            collegeMajor: 'business administration',
            gpa: '3.5以上（85以上）',
            greOrGmat: 'GRE：315-320',
            toeflOrIelts: 'TOEFL：N/A',
            bg: '两段科研实习经历'
          },
          {
            name: '周易',
            year: '',
            schoolLogo: '',
            admissionSchool: '约翰霍普金斯大学',
            admissionMajor: 'SAIS Master of Arts',
            collegeSchool: '',
            // 国际关系学院
            collegeMajor: '国际关系',
            gpa: '3.5以上（85以上）',
            greOrGmat: 'GRE：320-330',
            toeflOrIelts: 'TOEFL：100-110',
            bg: '相关经历很丰富'
          },
          {
            name: '张童瑶',
            year: '',
            schoolLogo: '',
            admissionSchool: '纽约大学',
            admissionMajor: 'MA in Psychology',
            collegeSchool: '',
            // 北京师范大学
            collegeMajor: '心理学',
            gpa: '3.5以上（85以上）',
            greOrGmat: 'GRE：324+3.5',
            toeflOrIelts: 'TOEFL：100-110',
            bg: '扎实校内科研，海外暑研'
          },
          {
            name: '冯子欣',
            year: '',
            schoolLogo: require('../assets/img/home/school/ldzzjj.png'),
            admissionSchool: '伦敦政治经济学院',
            admissionMajor: 'MSc Urbanisation and Development',
            collegeSchool: '',
            // 北京大学
            collegeMajor: '城市管理',
            gpa: '3.5以上（85以上）',
            greOrGmat: 'GRE：320-330',
            toeflOrIelts: 'TOEFL：100-110',
            bg: '伯克利交换，实习经历丰富'
          },
          {
            name: '李亭钰',
            year: '',
            schoolLogo: require('../assets/img/home/school/ldgw.png'),
            admissionSchool: '伦敦国王学院',
            admissionMajor: 'Cultural&Creative Industries MA',
            collegeSchool: '中国传媒大学',
            collegeMajor: 'Advertising, Public Relation& Technology',
            gpa: '3.5以上（85以上）',
            greOrGmat: 'GRE: N/A',
            toeflOrIelts: 'IELTS:7.0-7.5',
            bg: '奥美+拜尔两段实习'
          },
          {
            name: '高洵美',
            year: '',
            schoolLogo: '',
            admissionSchool: 'SOAS',
            admissionMajor: 'MA Chinese Studies',
            collegeSchool: '',
            // 南开大学
            collegeMajor: '对外汉语',
            gpa: '3.5以上（85以上）',
            greOrGmat: 'GRE：315-320',
            toeflOrIelts: 'IELTS:7.0-7.5',
            bg: '相关研究经历丰富，有一段北大出版社实习'
          },
          {
            name: '侯继莹',
            year: '',
            schoolLogo: '',
            admissionSchool: '华盛顿大学',
            admissionMajor: 'Master of Public Administration(Environment Policy and Management specialization)',
            collegeSchool: '',
            // 北京第二外国语学院
            collegeMajor: '国际经济与贸易',
            gpa: '3.5以上（85以上）',
            greOrGmat: 'GRE：320-330',
            toeflOrIelts: 'TOEFL：100-110',
            bg: '三段实习经历'
          },
          {
            name: '周晨茜',
            year: '',
            schoolLogo: '',
            admissionSchool: '南加利福尼亚大学',
            admissionMajor: 'Master of Arts in Strategic Public Relations ',
            collegeSchool: '北京语言大学',
            collegeMajor: '新闻',
            gpa: '3.5以上（85以上）',
            greOrGmat: 'GRE：320-330',
            toeflOrIelts: 'TOEFL：110+',
            bg: '一段英国交换，两段实习经历'
          },
          {
            name: '彭爽',
            year: '',
            schoolLogo: require('../assets/img/home/school/ldzzjj.png'),
            admissionSchool: '伦敦政治经济学院',
            admissionMajor: 'MA European History',
            collegeSchool: '985',
            // 复旦大学
            collegeMajor: '历史',
            gpa: '3.5以上（85以上）',
            greOrGmat: 'GRE：N/A',
            toeflOrIelts: 'TOEFL：100-110',
            bg: '美国学期交换，一段校内助研'
          },
          {
            name: '乔天瑜',
            year: '',
            schoolLogo: require('../assets/img/home/school/hf.png'),
            admissionSchool: '哈佛大学',
            admissionMajor: 'Master in Middle Eastern Studies (AM)',
            collegeSchool: 'UC Berkeley',
            collegeMajor: 'Political Science+Near Eastern Studies (Arabic Concentration)',
            gpa: '',
            // 3.5以上（85以上）
            greOrGmat: '',
            // GRE：320-330
            toeflOrIelts: '',
            // TOEFL：110+
            bg: '相关经历丰富'
          }
        ],
        [
          {
            name: '商若曦',
            year: '2019',
            schoolLogo: require('../assets/img/home/school/hf.png'),
            admissionSchool: '哈佛大学',
            admissionMajor: 'Master of Science in Data Science,A S.M. degree program in Data Science.',
            collegeSchool: '加州大学伯克利分校',
            collegeMajor: 'Mathematics',
            gpa: '3.5以上（85以上）',
            greOrGmat: 'GRE：320-330',
            toeflOrIelts: 'TOEFL：N/A',
            bg: '科研经历丰富，有五篇paper与专利'
          },
          {
            name: '钟憬锐',
            year: '2019',
            schoolLogo: require('../assets/img/home/school/hf.png'),
            admissionSchool: '哈佛大学',
            admissionMajor: 'Master of Science in Computation Biology and Quantitative Genetics',
            collegeSchool: '清华大学',
            collegeMajor: '生命科学',
            gpa: '3.0-3.5（80-85）',
            greOrGmat: 'GRE：320-330',
            toeflOrIelts: 'TOEFL：100-110',
            bg: '科研经历丰富，发表两篇相关论文'
          },
          {
            name: '蔡一凡',
            year: '2019',
            schoolLogo: require('../assets/img/home/school/zjg.png'),
            admissionSchool: '剑桥大学',
            admissionMajor: 'PhD in Computer Science',
            collegeSchool: '上海交通大学',
            collegeMajor: '软件工程',
            gpa: '3.5以上（85以上）',
            greOrGmat: 'GRE：330+',
            toeflOrIelts: 'TOEFL：110+',
            bg: '科研经历丰富，有一段校内RA，一段Umich RA,一段Upenn RA,发表两篇相关论文'
          },
          {
            name: '梁卓辉',
            year: '2019',
            schoolLogo: require('../assets/img/home/school/yl.png'),
            admissionSchool: '耶鲁大学',
            admissionMajor: 'MPH in Biostatistics',
            collegeSchool: '山东大学',
            collegeMajor: '预防医学',
            gpa: '3.5以上（85以上）',
            greOrGmat: 'GRE：320-330',
            toeflOrIelts: 'TOEFL：100-110',
            bg: '有卫健委实习及本校科研经历'
          },
          {
            name: '刘岳铭',
            year: '',
            schoolLogo: require('../assets/img/home/school/mslg.png'),
            admissionSchool: '麻省理工学院',
            admissionMajor: 'PHD in Polymers and Soft Matter',
            collegeSchool: '浙江大学',
            collegeMajor: 'Polymer material science and engineering',
            gpa: '3.5以上（85以上）',
            greOrGmat: 'GRE：320-330',
            toeflOrIelts: 'TOEFL：100-110',
            bg: '两段科研经历，一段芝大暑研'
          },
          {
            name: '刘岳铭',
            year: '',
            schoolLogo: '',
            admissionSchool: '加州理工大学',
            admissionMajor: 'PHD in Chemical Engineering',
            collegeSchool: '浙江大学',
            collegeMajor: 'Polymer material science and engineering',
            gpa: '3.5以上（85以上）',
            greOrGmat: 'GRE：320-330',
            toeflOrIelts: 'TOEFL：100-110',
            bg: '两段科研经历，一段芝大暑研'
          },
          {
            name: '刘岳铭',
            year: '',
            schoolLogo: require('../assets/img/home/school/stf.png'),
            admissionSchool: '斯坦福大学',
            admissionMajor: 'Doctor of Philosophy in Materials Science and Engineering',
            collegeSchool: '浙江大学',
            collegeMajor: 'Polymer material science and engineering',
            gpa: '3.5以上（85以上）',
            greOrGmat: 'GRE：320-330',
            toeflOrIelts: 'TOEFL：100-110',
            bg: '两段科研经历，一段芝大暑研'
          },
          {
            name: '李潇萌',
            year: '',
            schoolLogo: require('../assets/img/home/school/mslg.png'),
            admissionSchool: '麻省理工学院',
            admissionMajor: 'MENG in Advanced Manufacturing and Design',
            collegeSchool: 'RensselaerPolytechnicInstitute',
            collegeMajor: 'Mechanical Engineering',
            gpa: '3.5以上（85以上）',
            greOrGmat: 'GRE: 320-330',
            toeflOrIelts: 'TOEFL：NA',
            bg: '有两段project经历，一段实习经历'
          },
          {
            name: '袁翊',
            year: '',
            schoolLogo: require('../assets/img/home/school/nj.png'),
            admissionSchool: '牛津大学',
            admissionMajor: 'Dphil in Materials',
            collegeSchool: '北京交通大学',
            collegeMajor: 'Chemistry',
            gpa: '3.5以上（85以上）',
            greOrGmat: 'GRE: N/A',
            toeflOrIelts: 'IELTS：7.0-7.5',
            bg: '三段研究经历'
          },
          {
            name: '张翼',
            year: '',
            schoolLogo: require('../assets/img/home/school/nj.png'),
            admissionSchool: '牛津大学',
            admissionMajor: 'Mathematical Sciences MSc',
            collegeSchool: '天津大学+曼彻斯特大学',
            collegeMajor: 'Mathematics with Applied Mathematics',
            gpa: '3.5以上（85以上）',
            greOrGmat: 'GRE: N/A',
            toeflOrIelts: 'IELTS：7.0-7.5',
            bg: '三段研究经历'
          },
          {
            name: '朱亭仪',
            year: '',
            schoolLogo: '',
            admissionSchool: '昆士兰大学',
            admissionMajor: 'Master of Veterinary Science',
            collegeSchool: '台湾中兴大学',
            collegeMajor: 'veterinary medicine',
            gpa: '3.0-3.5（80-85）',
            greOrGmat: 'GRE: N/A',
            toeflOrIelts: 'IELTS：6.5-7.0',
            bg: '两段实习两段科研'
          },
          {
            name: '殷佳杨',
            year: '',
            schoolLogo: require('../assets/img/home/school/dglg.png'),
            admissionSchool: '帝国理工大学',
            admissionMajor: 'MSc  Statistics',
            collegeSchool: '华东师范大学',
            collegeMajor: '统计学',
            gpa: '3.5以上（85以上）',
            greOrGmat: 'GRE：320-330',
            toeflOrIelts: 'TOEFL：100-110',
            bg: '两段校内科研'
          },
          {
            name: '崔庆梅',
            year: '',
            schoolLogo: require('../assets/img/home/school/kne.png'),
            admissionSchool: '康奈尔大学',
            admissionMajor: 'M.S. track in Biostatistics and Data Science',
            collegeSchool: '天津大学',
            collegeMajor: '药学',
            gpa: '3.0-3.5（80-85）',
            greOrGmat: 'GRE：320-330',
            toeflOrIelts: 'TOEFL：100-110',
            bg: '多段校内非quant实验室经历'
          },
          {
            name: '孙祺玮',
            year: '',
            schoolLogo: '',
            admissionSchool: '瑞士皇家理工学院',
            admissionMajor: "Master's programme in Sustainable Urban Planning and Design",
            collegeSchool: '重庆大学',
            collegeMajor: 'Civil Engineering',
            gpa: '2.0-3.0（70-80）',
            greOrGmat: 'GRE：N/A',
            toeflOrIelts: 'IELTS：6.5-7.0',
            bg: '多段相关实习，经历丰富'
          },
          {
            name: '周伊楚',
            year: '',
            schoolLogo: '',
            admissionSchool: '隆德大学',
            admissionMajor: 'Master in Information System',
            collegeSchool: '中山大学',
            collegeMajor: '管理科学',
            gpa: '3.0-3.5（80-85）',
            greOrGmat: 'GRE：315-320',
            toeflOrIelts: 'IELTS：7.0-7.5',
            bg: '三段相关实习和研究经历'
          },
          {
            name: '刘紫琪',
            year: '',
            schoolLogo: require('../assets/img/home/school/lddx.png'),
            admissionSchool: '伦敦大学学院',
            admissionMajor: 'MSc Data Science',
            collegeSchool: '北京师范大学',
            collegeMajor: '信息管理',
            gpa: '3.5以上（85以上）',
            greOrGmat: 'GRE：315-320',
            toeflOrIelts: 'TOEFL：80-95',
            bg: '有多段相关实习，跨专业申请'
          },
          {
            name: '李茂然',
            year: '',
            schoolLogo: '',
            admissionSchool: '代尔夫特理工大学',
            admissionMajor: 'MSc Electrical Engineering',
            collegeSchool: '电子科技大学',
            collegeMajor: 'Electrical Engineering',
            gpa: '3.5以上（85以上）',
            greOrGmat: 'GRE：320-330',
            toeflOrIelts: 'IELTS：7.0-7.5',
            bg: '多段相关经历，中科院科研'
          },
          {
            name: '陈宇韬',
            year: '',
            schoolLogo: require('../assets/img/home/school/stf.png'),
            admissionSchool: '斯坦福大学',
            admissionMajor: 'Master of Science in Materials Science and Engineering',
            collegeSchool: '复旦大学',
            collegeMajor: '材料物理',
            gpa: '3.5以上（85以上）',
            greOrGmat: 'GRE：320-330',
            toeflOrIelts: 'TOEFL：110+',
            bg: '暑期交流，以及相关经历丰富'
          },
          {
            name: '刘雨',
            year: '',
            schoolLogo: require('../assets/img/home/school/stf.png'),
            admissionSchool: '斯坦福大学',
            admissionMajor: 'Master of Science in Materials Science and Engineering',
            collegeSchool: '川大+匹兹堡大学 3+1',
            collegeMajor: 'Material Science & Engineering',
            gpa: '3.5以上（85以上）',
            greOrGmat: 'GRE: 320-330',
            toeflOrIelts: 'TOEFL：100-110',
            bg: '海外合办项目，相关背景丰富'
          },
          {
            name: '李心怡',
            year: '',
            schoolLogo: require('../assets/img/home/school/kne.png'),
            admissionSchool: '康奈尔大学',
            admissionMajor: '',
            yecollegeSchoolar: '北京大学',
            collegeMajor: 'Experimental Medicine+Management of Innovation and Entrepreneurship',
            gpa: '2.0-3.0（70-80）',
            greOrGmat: 'GRE：310-315',
            toeflOrIelts: 'TOEFL：80-95',
            bg: '双学位背景契合，实习经历丰富'
          },
          {
            name: '吴兆宇',
            year: '',
            schoolLogo: require('../assets/img/home/school/glby.png'),
            admissionSchool: '哥伦比亚大学',
            admissionMajor: 'MS in Computer Science ',
            collegeSchool: 'UIUC ',
            collegeMajor: 'Computer Science ',
            gpa: '3.5以上（85以上）',
            greOrGmat: 'GRE: 320-330',
            toeflOrIelts: 'TOEFL：NA',
            bg: '海本CS强校，两段实习'
          },
          {
            name: '冯琰哲',
            year: '',
            schoolLogo: require('../assets/img/home/school/ldgw.png'),
            admissionSchool: '伦敦国王学院',
            admissionMajor: 'Neuroscience MSc',
            collegeSchool: '多伦多大学',
            collegeMajor: 'Physiology',
            gpa: '3.5以上（85以上）',
            greOrGmat: 'GRE：310-315',
            toeflOrIelts: 'TOEFL：NA',
            bg: '一段校内科研'
          },
          {
            name: '由珍源',
            year: '',
            schoolLogo: '',
            admissionSchool: '加州大学洛杉矶分校',
            admissionMajor: 'MS Civil Engineering',
            collegeSchool: '天津大学',
            collegeMajor: 'Civil and Environmental Engineering',
            gpa: '3.0-3.5（80-85）',
            greOrGmat: 'GRE：330+',
            toeflOrIelts: 'TOEFL：80-95',
            bg: '一段实习和三段科研经历'
          },
          {
            name: '王琦深',
            year: '',
            schoolLogo: '',
            admissionSchool: '佐治亚理工学院',
            admissionMajor: 'Master of Science in IndustrialEngineering',
            collegeSchool: '华东理工大学',
            collegeMajor: 'Mechanical Engineering',
            gpa: '3.5以上（85以上）',
            greOrGmat: 'GRE: 320-330',
            toeflOrIelts: 'TOEFL：80-95',
            bg: '一段NTU暑校经历，多段相关项目经历'
          },
          {
            name: '黄靖怡',
            year: '',
            schoolLogo: '',
            admissionSchool: '卡内基梅隆',
            admissionMajor: 'M.S. in Software Engineering',
            collegeSchool: '滑铁卢大学',
            collegeMajor: 'CS ',
            gpa: '3.5以上（85以上）',
            greOrGmat: 'GRE: <300',
            toeflOrIelts: 'TOEFL: 110+',
            bg: '多段实习经历'
          },
          {
            name: '曹倚梅',
            year: '',
            schoolLogo: '',
            admissionSchool: '约翰霍普金斯大学',
            admissionMajor: 'MSE in Biomedical Engineering',
            collegeSchool: '',
            collegeMajor: '生物医学工程',
            gpa: '3.5以上（85以上）',
            greOrGmat: 'GRE：330+',
            toeflOrIelts: 'TOEFL：110+',
            bg: 'JHU暑研，科研经历丰富'
          },
          {
            name: '王昂',
            year: '',
            schoolLogo: require('../assets/img/home/school/jzdxbkl.png'),
            admissionSchool: '加州大学伯克利分校',
            admissionMajor: 'M.Eng. in Electrical Engineering and in Computer Sciences (EECS)',
            collegeSchool: '',
            collegeMajor: 'Electrical Engineering',
            gpa: '3.5以上（85以上）',
            greOrGmat: 'GRE：320-330',
            toeflOrIelts: 'TOEFL：100-110',
            bg: '两段东南大学MEMS实习室科研经历，里海大学科研经历，UBC学期交换'
          },
          {
            name: '董书豪',
            year: '',
            schoolLogo: '',
            admissionSchool: '南洋理工大学',
            admissionMajor: 'MSc  Mechanical Engineering ',
            collegeSchool: '西南交通大学+Leeds 2+2',
            collegeMajor: '机械工程',
            gpa: '3.5以上（85以上）',
            greOrGmat: 'GRE：N/A',
            toeflOrIelts: 'TOEFL：7.0-7.5',
            bg: 'ME项目经历丰富，1年国家实验室学习'
          },
          {
            name: '何川',
            year: '',
            schoolLogo: require('../assets/img/home/school/dk.png'),
            admissionSchool: '杜克大学',
            admissionMajor: 'MEng in Mechanical Engineering ',
            collegeSchool: 'Virginia Tech',
            collegeMajor: 'Mechanical Engineering ',
            gpa: '3.5以上（85以上）',
            greOrGmat: 'GRE: 320-330',
            toeflOrIelts: 'TOEFL：N/A',
            bg: '两段课程设计，一段科研'
          },
          {
            name: '程智敏',
            year: '',
            schoolLogo: '',
            admissionSchool: '鲁汶大学',
            admissionMajor: 'Master of Statistics MS',
            collegeSchool: '西南交通大学',
            collegeMajor: 'Mathematics',
            gpa: '3.0-3.5（80-85）',
            greOrGmat: 'GRE：315-320',
            toeflOrIelts: 'TOEFL：7.0-7.5',
            bg: '相关比赛和经历丰富'
          },
          {
            name: '秦申旭',
            year: '',
            schoolLogo: require('../assets/img/home/school/dglg.png'),
            admissionSchool: '帝国理工大学',
            admissionMajor: 'MSc Advanced Computational Methods for Aeronautics, Flow Management and Fluid-Structure Interaction',
            collegeSchool: '',
            collegeMajor: 'Mechanical Engineering',
            gpa: '3.0-3.5（80-85）',
            greOrGmat: 'GRE：N/A',
            toeflOrIelts: 'IELTS：6.0-6.5',
            bg: '两段交换，两段研究，一段实习'
          },
          {
            name: '邹佳伶',
            year: '',
            schoolLogo: require('../assets/img/home/school/lddx.png'),
            admissionSchool: '伦敦大学学院',
            admissionMajor: 'Smart Buildings and Digital Engineering',
            collegeSchool: '',
            collegeMajor: '建筑环境与能源应用工程',
            gpa: '3.5以上（85以上）',
            greOrGmat: 'GRE：310-315',
            toeflOrIelts: 'IELTS：7.0-7.5',
            bg: 'UCL交换，一个专利'
          },
          {
            name: '陈柏涵',
            year: '',
            schoolLogo: '',
            admissionSchool: '布朗大学',
            admissionMajor: 'MS in Physics',
            collegeSchool: '',
            collegeMajor: 'Mechanical Engineering',
            gpa: '3.0-3.5（80-85）',
            greOrGmat: 'GRE: 315-320',
            toeflOrIelts: 'TOEFL：N/A',
            bg: '相关经历丰富'
          },
          {
            name: '丁铭',
            year: '',
            schoolLogo: '',
            admissionSchool: '瑞士皇家理工学院',
            admissionMajor: 'PhD in Computer Science',
            collegeSchool: '上海交通大学本硕',
            collegeMajor: 'Information and Communication Engineering',
            gpa: '3.5以上（85以上）',
            greOrGmat: 'GRE：320-330',
            toeflOrIelts: 'TOEFL：100-110',
            bg: '多段科研经历'
          },
          {
            name: '卓尔',
            year: '',
            schoolLogo: '',
            admissionSchool: '加州大学圣地亚哥分校',
            admissionMajor: 'MS in Computer Science and Engineering ',
            collegeSchool: '',
            collegeMajor: 'CS',
            gpa: '3.5以上（85以上）',
            greOrGmat: 'GRE：320-330',
            toeflOrIelts: 'TOEFL：110+',
            bg: 'UCI暑研，相关经历丰富'
          },
          {
            name: '施念邡',
            year: '',
            schoolLogo: require('../assets/img/home/school/lddx.png'),
            admissionSchool: '伦敦大学学院',
            admissionMajor: 'MSc Geospatial Sciences',
            collegeSchool: '北京师范大学',
            collegeMajor: '地理信息科学',
            gpa: '3.5以上（85以上）',
            greOrGmat: 'GRE：320-330',
            toeflOrIelts: 'TOEFL：100-110',
            bg: '有一段相关实习'
          },
          {
            name: '徐宗杰',
            year: '',
            schoolLogo: require('../assets/img/home/school/xjpgl.png'),
            admissionSchool: '新加坡国立大学',
            admissionMajor: 'MS in Data Science and Machine Learning ',
            collegeSchool: '东北师范大学',
            collegeMajor: '统计学',
            gpa: '3.5以上（85以上）',
            greOrGmat: 'GRE：315-320',
            toeflOrIelts: 'TOEFL：95-100',
            bg: '相关经历丰富'
          },
          {
            name: '王梓名',
            year: '',
            schoolLogo: '',
            admissionSchool: '加州大学戴维斯分校',
            admissionMajor: 'MS in Agricultural and Resource Economics',
            collegeSchool: 'UCD ',
            collegeMajor: 'managerial economics agribusiness',
            gpa: '3.0-3.5（80-85）',
            greOrGmat: 'GRE: 320-330',
            toeflOrIelts: 'TOEFL：N/A ',
            bg: '相关经历丰富'
          },
          {
            name: '吴咏菡',
            year: '',
            schoolLogo: require('../assets/img/home/school/bxfny.png'),
            admissionSchool: '宾夕法尼亚大学',
            admissionMajor: 'MS Material Science and Engineering',
            collegeSchool: '南科大',
            collegeMajor: '物理',
            gpa: '3.5以上（85以上）',
            greOrGmat: 'GRE：320-330',
            toeflOrIelts: 'TOEFL：100-110',
            bg: '相关经历丰富'
          },
          {
            name: '何昊楠',
            year: '',
            schoolLogo: '',
            admissionSchool: '阿尔伯塔大学',
            admissionMajor: 'MEng in ME',
            collegeSchool: '南开大学',
            collegeMajor: '物理',
            gpa: '3.5以上（85以上）',
            greOrGmat: 'GRE: 320-330',
            toeflOrIelts: 'IELTS：7.0-7.5',
            bg: '相关经历丰富'
          }
        ],
        [
          {
            name: '王子奕',
            year: '',
            schoolLogo: require('../assets/img/home/school/glby.png'),
            admissionSchool: '哥伦比亚大学',
            admissionMajor: 'Master of Science in Applied Analytics',
            collegeSchool: '加州大学圣迭戈分校',
            collegeMajor: 'cognitive science, human-computer interaction',
            gpa: '3.5以上（85以上）',
            greOrGmat: 'GRE：315-320',
            toeflOrIelts: 'TOEFL：100-110',
            bg: '4段实习, 自我创业'
          },
          {
            name: '潘晓琪',
            year: '',
            schoolLogo: require('../assets/img/home/school/glby.png'),
            admissionSchool: '哥伦比亚大学',
            admissionMajor: 'Master of Science in Enterprise Risk Management',
            collegeSchool: '香港中文大学',
            collegeMajor: 'Accounting',
            gpa: '3.0-3.5（80-85）',
            greOrGmat: 'GRE：330+',
            toeflOrIelts: 'TOEFL：100-110',
            bg: '3段金融实习，3段校园竞赛+校园活动经历'
          },
          {
            name: '杜宇阳',
            year: '',
            schoolLogo: '',
            admissionSchool: '纽约大学',
            admissionMajor: 'MS in Event Management',
            collegeSchool: '上海外国语大学',
            collegeMajor: '国际公务员人才实验班（英语翻译和西班牙语方向）',
            gpa: '3.5以上（85以上）',
            greOrGmat: 'GRE：330+',
            toeflOrIelts: 'TOEFL：110+',
            bg: '有全职工作经验'
          },
          {
            name: '曾同学',
            // 曾俊桦
            year: '',
            schoolLogo: '',
            admissionSchool: '约翰·霍普金斯大学',
            admissionMajor: 'MS in Finance',
            collegeSchool: '北京林业大学',
            collegeMajor: '农林经济管理',
            gpa: '3.5以上（85以上）',
            greOrGmat: 'GMAT：640-750',
            toeflOrIelts: 'TOEFL：100-110',
            bg: '两段金融知名公司实习'
          },
          {
            name: '莫紫莹',
            year: '',
            schoolLogo: '',
            admissionSchool: '约翰·霍普金斯大学',
            admissionMajor: 'M.S. in Marketing ',
            collegeSchool: '国际关系学院',
            collegeMajor: '英语/日语',
            gpa: '3.5以上（85以上）',
            greOrGmat: 'GRE：320-330',
            toeflOrIelts: 'TOEFL：100-110',
            bg: '4段相关实习，多段校园活动经历'
          },
          {
            name: '周筱扬',
            year: '',
            schoolLogo: '',
            admissionSchool: '罗切斯特大学',
            admissionMajor: 'M.S. in Marketing analytics',
            collegeSchool: '加州大学欧文分校',
            collegeMajor: 'business economics',
            gpa: '3.5以上（85以上）',
            greOrGmat: 'GMAT：640-750',
            toeflOrIelts: 'TOEFL：N/A',
            bg: '2段相关实习'
          },
          {
            name: '李丽洁',
            year: '',
            schoolLogo: '',
            admissionSchool: '华盛顿大学圣路易斯分校',
            admissionMajor: 'MS in Business Analytics',
            collegeSchool: '浙江工业大学',
            collegeMajor: 'Advertising',
            gpa: '3.5以上（85以上）',
            greOrGmat: 'GRE：320-330',
            toeflOrIelts: 'TOEFL：100-110',
            bg: '3段相关实习，多段校园竞赛与活动经历。'
          },
          {
            name: '董玲玲',
            year: '',
            schoolLogo: '',
            admissionSchool: '加利福尼亚大学欧文分校',
            admissionMajor: 'Master of Professional Accountancy',
            collegeSchool: 'University of Missouri–St. Louis',
            collegeMajor: 'Accounting',
            gpa: '3.5以上（85以上）',
            greOrGmat: 'GRE：N/A',
            toeflOrIelts: 'TOEFL：N/A',
            bg: '2段会计实习，多段商学院社团经历'
          },
          {
            name: '张之蓝',
            year: '',
            schoolLogo: '',
            admissionSchool: '波士顿大学',
            admissionMajor: 'MS in Media Science: Marketing Communication Research',
            collegeSchool: '厦门大学',
            collegeMajor: '英语',
            gpa: '3.5以上（85以上）',
            greOrGmat: 'GRE：320-330',
            toeflOrIelts: 'TOEFL：100-110',
            bg: '转专业申请，2段不知名公司实习'
          },
          {
            name: '蔡依婷',
            year: '',
            schoolLogo: require('../assets/img/home/school/kne.png'),
            admissionSchool: '康奈尔大学',
            admissionMajor: 'Master of Professional Studies (MPS) in Applied Economics and Management',
            collegeSchool: '印第安纳大学伯明顿分校',
            collegeMajor: 'Accounting',
            gpa: '3.5以上（85以上）',
            greOrGmat: 'GRE：320-330',
            toeflOrIelts: 'TOEFL：N/A',
            bg: '4段相关经历'
          },
          {
            name: '费思圆',
            year: '',
            schoolLogo: require('../assets/img/home/school/xg.png'),
            admissionSchool: '香港大学',
            admissionMajor: 'Master of accounting',
            collegeSchool: '江南大学 3+1项目',
            collegeMajor: '工商管理',
            gpa: '3.5以上（85以上）',
            greOrGmat: 'GRE：320-330',
            toeflOrIelts: 'IELTS：6.0-6.5',
            bg: '多段相关实习'
          },
          {
            name: '董宇南',
            year: '',
            schoolLogo: require('../assets/img/home/school/xg.png'),
            admissionSchool: '香港大学',
            admissionMajor: 'Master of Science in Business Analytics',
            collegeSchool: '多伦多大学',
            collegeMajor: 'Management',
            gpa: '3.5以上（85以上）',
            greOrGmat: 'GMAT：640-750',
            toeflOrIelts: 'TOEFL：N/A',
            bg: '4段工作经历,多段校园活动和学术经历'
          },
          {
            name: '厉倩',
            year: '',
            schoolLogo: '',
            admissionSchool: '香港科技大学',
            admissionMajor: 'Master of Science in Accounting',
            collegeSchool: '河海大学',
            collegeMajor: '会计',
            gpa: '3.5以上（85以上）',
            greOrGmat: 'GMAT：640-750',
            toeflOrIelts: 'IELTS：7.0-7.5',
            bg: '多段校园活动经历'
          },
          {
            name: '罗方明',
            year: '',
            schoolLogo: '',
            admissionSchool: '香港科技大学',
            admissionMajor: 'Master of Science in Business Analytics',
            collegeSchool: '南方科技大学',
            collegeMajor: '金融数学',
            gpa: '3.5以上（85以上）',
            greOrGmat: 'GRE：N/A',
            toeflOrIelts: 'TOEFL：95-100',
            bg: '多段实习，2段海外经历'
          },
          {
            name: '敬相瑞',
            year: '',
            schoolLogo: '',
            admissionSchool: '香港中文大学',
            admissionMajor: 'MSc in Marketing',
            collegeSchool: '西南大学',
            collegeMajor: '生物金属',
            gpa: '3.0-3.5（80-85）',
            greOrGmat: 'GRE：N/A',
            toeflOrIelts: 'IELTS：7.0-7.5',
            bg: '多段校园活动和一段big name实习'
          },
          {
            name: '张津尧',
            year: '',
            schoolLogo: '',
            admissionSchool: '香港中文大学',
            admissionMajor: 'Master of Science in Finance',
            collegeSchool: '广东外语外贸大学',
            collegeMajor: '会计',
            gpa: '3.5以上（85以上）',
            greOrGmat: 'GMAT：640-750',
            toeflOrIelts: 'IELTS：7.0-7.5',
            bg: '多段big name相关实习'
          },
          {
            name: '阚清澜',
            year: '',
            schoolLogo: require('../assets/img/home/school/ldzzjj.png'),
            admissionSchool: '伦敦政治经济学院',
            admissionMajor: 'Master’s in Management',
            collegeSchool: '南开大学+天津大学双学位',
            collegeMajor: '法语+工商管理双学位',
            gpa: '3.5以上（85以上）',
            greOrGmat: 'GMAT：640-750',
            toeflOrIelts: 'IELTS：7.0-7.5',
            bg: '2段海外交流,4段相关实习, 多段校园活动经历'
          },
          {
            name: '顾缘孟',
            year: '',
            schoolLogo: require('../assets/img/home/school/lds.png'),
            admissionSchool: '伦敦商学院',
            admissionMajor: 'Masters in Financial Analysis',
            collegeSchool: '',
            // 宁波诺丁汉大学
            collegeMajor: '金融',
            gpa: '3.5以上（85以上）',
            greOrGmat: 'GMAT：640-750',
            toeflOrIelts: 'IELTS：7.0-7.5',
            bg: '4段相关实习,三段竞赛,多段校园活动'
          },
          {
            name: '问殊轩',
            year: '',
            schoolLogo: require('../assets/img/home/school/jq.png'),
            admissionSchool: '剑桥大学',
            admissionMajor: 'Mphil in Finance and Economics',
            collegeSchool: '兰卡斯特大学',
            collegeMajor: 'Economics',
            gpa: '3.5以上（85以上）',
            greOrGmat: 'GRE：N/A',
            toeflOrIelts: 'TOEFL：N/A',
            bg: '3段相关实习'
          },
          {
            name: '宋志骄',
            year: '',
            schoolLogo: require('../assets/img/home/school/dglg.png'),
            admissionSchool: '帝国理工学院',
            admissionMajor: 'MSc International Management',
            collegeSchool: '北京外国语大学',
            collegeMajor: '工商管理',
            gpa: '3.5以上（85以上）',
            greOrGmat: 'GRE：N/A',
            toeflOrIelts: 'TOEFL：100-110，IELTS：7.0-7.5',
            bg: '3段商赛, 3段big name,多段活动经历'
          },
          {
            name: '严恒宇',
            year: '',
            schoolLogo: require('../assets/img/home/school/jq.png'),
            admissionSchool: '剑桥大学',
            admissionMajor: 'MPhil in Economics',
            collegeSchool: '乌得勒支大学',
            collegeMajor: 'Economics and Business Economics',
            gpa: '3.5以上（85以上）',
            greOrGmat: 'GRE：320-330',
            toeflOrIelts: 'TOEFL：100-110',
            bg: '2段相关实习,多段校园活动和学术经历'
          },
          {
            name: '朱瑞茜',
            year: '',
            schoolLogo: require('../assets/img/home/school/lddx.png'),
            admissionSchool: '伦敦大学学院',
            admissionMajor: 'Business Analytics MSc',
            collegeSchool: '重庆大学本科/墨尔本大学硕士',
            collegeMajor: 'Accounting/Accounting & Finance',
            gpa: '3.5以上（85以上）',
            greOrGmat: 'GRE：N/A',
            toeflOrIelts: 'TOEFL：N/A',
            bg: '4段相关实习和4段校园活动经历'
          },
          {
            name: '李子晔',
            year: '',
            schoolLogo: '',
            admissionSchool: '南洋理工大学',
            admissionMajor: 'MSc Business Analytics',
            collegeSchool: '复旦大学',
            collegeMajor: '工商管理',
            gpa: '3.0-3.5（80-85）',
            greOrGmat: 'GRE：N/A',
            toeflOrIelts: 'IELTS：7.0-7.5',
            bg: '相关项目活动丰富及2段实习经历'
          },
          {
            name: '黄漫琪',
            year: '',
            schoolLogo: '',
            admissionSchool: '南洋理工大学',
            admissionMajor: 'Master of Science in Accountancy',
            collegeSchool: '海本',
            // 昆士兰大学
            collegeMajor: 'Accounting',
            gpa: '3.5以上（85以上）',
            greOrGmat: 'GMAT：640-750',
            toeflOrIelts: 'IELTS：7.0-7.5',
            bg: '4段相关实习经历'
          },
          {
            name: '宋爻',
            year: '',
            schoolLogo: require('../assets/img/home/school/xjpgl.png'),
            admissionSchool: '新加坡国立大学',
            admissionMajor: 'MSc Marketing Analytics and Insights',
            collegeSchool: '洛桑酒店管理学院',
            collegeMajor: 'Hotel Management',
            gpa: '3.5以上（85以上）',
            greOrGmat: 'GMAT：640-750',
            toeflOrIelts: 'IELTS：7.5-8.0',
            bg: '3段酒店行业相关实习'
          },
          {
            name: '陈颖琪',
            year: '',
            schoolLogo: require('../assets/img/home/school/xjpgl.png'),
            admissionSchool: '新加坡国立大学',
            admissionMajor: 'Master of Finance Engineering',
            collegeSchool: '加州大学洛杉矶分校',
            collegeMajor: 'Statistics',
            gpa: '3.5以上（85以上）',
            greOrGmat: 'GRE：N/A',
            toeflOrIelts: 'TOEFL：N/A',
            bg: '无实习申请'
          },
          {
            name: '王海娇',
            year: '',
            schoolLogo: '',
            admissionSchool: '新加坡管理大学',
            admissionMajor: 'Master of Professional Accounting',
            collegeSchool: '浙江工商大学本科/北京外国语硕士',
            collegeMajor: '测控技术与仪器/外交学国际经济',
            gpa: '2.0-3.0（70-80）',
            greOrGmat: 'GRE：310-315',
            toeflOrIelts: 'TOEFL：：80-95',
            bg: '3段实习经历'
          },
          {
            name: '郭宇诚',
            year: '',
            schoolLogo: '',
            admissionSchool: '新加坡管理大学',
            admissionMajor: 'Master of IT in Business',
            collegeSchool: '上海大学',
            collegeMajor: '管理科学',
            gpa: '3.5以上（85以上）',
            greOrGmat: 'GMAT：610-640',
            toeflOrIelts: 'IELTS：6.0-6.5',
            bg: '2段相关实习 多段校园活动'
          },
          {
            name: '高诗语',
            year: '',
            schoolLogo: '',
            admissionSchool: '埃塞克商学院',
            admissionMajor: 'Master in Finance',
            collegeSchool: '清华大学',
            collegeMajor: '经济与金融',
            gpa: '3.5以上（85以上）',
            greOrGmat: 'GMAT：640-750',
            toeflOrIelts: 'TOEFL：100-110',
            bg: '2段实习,多段校园经历'
          },
          {
            name: '徐逸凡',
            year: '',
            schoolLogo: '',
            admissionSchool: '埃塞克商学院',
            admissionMajor: 'MSc in Management',
            collegeSchool: '北京师范大学',
            collegeMajor: 'International Business and Trade',
            gpa: '3.5以上（85以上）',
            greOrGmat: 'GMAT：640-750',
            toeflOrIelts: 'TOEFL：100-110',
            bg: '3段相关实习'
          },
          {
            name: '曹兆钧',
            year: '',
            schoolLogo: '',
            admissionSchool: '巴黎高等商学院',
            admissionMajor: 'M2M HEC - YALE',
            collegeSchool: '密歇根大学安娜堡分校',
            collegeMajor: 'Economics',
            gpa: '3.5以上（85以上）',
            greOrGmat: 'GRE：320-330',
            toeflOrIelts: 'TOEFL：100-110',
            bg: '海本高三维、有多段实习'
          },
          {
            name: '宋爻',
            year: '',
            schoolLogo: '',
            admissionSchool: '里昂商学院',
            admissionMajor: 'MSc in Luxury Management & Marketing',
            collegeSchool: '洛桑酒店管理学院',
            collegeMajor: 'Hotel Management',
            gpa: '3.5以上（85以上）',
            greOrGmat: 'GMAT：640-750',
            toeflOrIelts: 'IELTS：7.5-8.0',
            bg: '3段酒店行业相关实习'
          }
        ],
        [
          {
            name: '李宇',
            year: '2019',
            schoolLogo: '',
            admissionSchool: '芝加哥艺术学院',
            admissionMajor: 'MFA in Studio (Film, Video, New Media, and Animation)',
            collegeSchool: '北京师范大学',
            collegeMajor: 'Digital Arts / Multimedia',
            gpa: '3.5以上（85以上）',
            greOrGmat: 'GRE：N/A',
            toeflOrIelts: 'TOEFL：95-100',
            bg: '2段交换学习经历,2段工作经历'
          },
          {
            name: '郑舒尹',
            year: '2019',
            schoolLogo: require('../assets/img/home/school/glby.png'),
            admissionSchool: '哥伦比亚大学',
            admissionMajor: 'Film Directing',
            collegeSchool: '中央戏剧学院',
            collegeMajor: '戏剧文学',
            gpa: '3.5以上（85以上）',
            greOrGmat: 'GRE：N/A',
            toeflOrIelts: 'TOEFL：80-95',
            bg: '托福未达标破格录取'
          },
          {
            name: '钟佳雯',
            year: '2019',
            schoolLogo: '',
            admissionSchool: '米兰理工大学',
            admissionMajor: 'Interior and Spatial Design',
            collegeSchool: '同济大学',
            collegeMajor: '环境设计',
            gpa: '3.5以上（85以上）',
            greOrGmat: 'GRE：N/A',
            toeflOrIelts: 'IELTS：6.5-7.0',
            bg: '多段学校活动经历, 4段相关经历'
          },
          {
            name: '王嘉廉',
            year: '2019',
            schoolLogo: '',
            admissionSchool: 'New York Film Academy',
            admissionMajor: 'MFA in Screenwriting',
            collegeSchool: '北京大学',
            collegeMajor: '社会学',
            gpa: '3.0-3.5（80-85）',
            greOrGmat: 'GRE：N/A',
            toeflOrIelts: 'TOEFL：100-110',
            bg: '转专业申请，无太多相关经验'
          },
          {
            name: '张芸梦',
            year: '2019',
            schoolLogo: '',
            admissionSchool: '英国创意艺术大学',
            admissionMajor: 'Filmmaking MA',
            collegeSchool: '四川音乐学院',
            collegeMajor: '编导',
            gpa: '2.0-3.0（70-80）',
            greOrGmat: 'GRE：N/A',
            toeflOrIelts: 'TOEFL：N/A',
            bg: '低GPA录取;双非录取;转专业录取'
          },
          {
            name: '李诗煜',
            year: '2019',
            schoolLogo: require('../assets/img/home/school/dk.png'),
            admissionSchool: '杜克大学',
            admissionMajor: 'Master of Fine Arts in Experimental and Documentary Arts',
            collegeSchool: '北方工业大学',
            collegeMajor: '广告学',
            gpa: '3.5以上（85以上）',
            greOrGmat: 'GRE：N/A',
            toeflOrIelts: 'TOEFL：95-100',
            bg: '双非录取;含奖学金;转专业录取'
          },
          {
            name: '董正日',
            year: '2019',
            schoolLogo: '',
            admissionSchool: '皇家中央演讲与戏剧学院',
            admissionMajor: 'Applied Theatre, MA',
            collegeSchool: '上海戏剧学院',
            collegeMajor: '教育戏剧',
            gpa: '3.0-3.5（80-85）',
            greOrGmat: 'GRE：N/A',
            toeflOrIelts: 'TOEFL：N/A',
            bg: ''
          },
          {
            name: '高晓琪',
            year: '2019',
            schoolLogo: require('../assets/img/home/school/kne.png'),
            admissionSchool: '康奈尔大学',
            admissionMajor: 'Jacobs Technion-Cornell Dual Master of Science Degrees with a Concentration in Connective Media',
            collegeSchool: '多伦多大学',
            collegeMajor: 'Computer Science & Statistics',
            gpa: '3.5以上（85以上）',
            greOrGmat: 'GRE：320-330',
            toeflOrIelts: 'TOEFL：N/A',
            bg: '海本, 多段校园活动和学术经验'
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

          .place-dot {
            width: 16px;
            height: 16px;
            margin: 55px auto 0;
            border-radius:50%;
          }

          .place-dot0 {
            background: #DD99EF;
          }

          .place-dot1 {
            background: #FD8E7D;
          }

          .place-dot2 {
            background: #79D0F1;
          }

          .place-dot3 {
            background: #20ACA4;
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
          width: 198px;
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
        height: 306px;

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
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
            height: 40px;
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

          .line1 {
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
            overflow: hidden;
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
            background-image: url('../assets/img/dreamSchool/openArrow.png');
            background-repeat: no-repeat;
            background-size: cover;
        }
      }
    }
  }
}
</style>
