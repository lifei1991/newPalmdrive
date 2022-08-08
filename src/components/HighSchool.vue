<template>
  <div class="highschool-services" v-cloak>
    <div class='update-highschool-services-pagesss'>
      <div class='full-page'>
        <section class='highschool-banner-section page-section'>
          <section v-bind:class="isMobile ? 'palmDrive-title-section-mobile' : 'palmDrive-title-section' ">
            <div class='size-xl center white title'>PalmDrive</div>
            <div class='size-l center description white'>DREAMS WITHIN REACH</div>
          </section>

          <section class='service-characteristics-section' v-if='!isMobile'>
            <div class='contain'>
              <div class='index-title-contain'>
                <div class='inline green'></div>
                <div class='contain-title green'>服务特色</div>
                <div class='inline green'></div>
              </div>
              <div class='characteristics-contain'>
                <div class="each-character" @click='showCharacterDetail(index)' v-for='(character, index) in characteristics' :style="index == 0 ? 'margin-left: 0px' : ''" :key="character">
                  <div class='transparent'></div>
                  <img class='img' :src='character.img'>
                  <div class='text'>{{character.text1}}</div>
                  <div class='text'>{{character.text2}}</div>
                </div>
                <div id='characteristics-detail' v-if="showCharacteristicsDetail">
                  <img class='img-close' @click='hideCharacterDetail()' src='//webchat.7moor.com/images/invite-close.png'>
                  <div align='center' class='title-view'>
                    <img class='title-img' :src='characterDetail.img'>
                    <span class='title'>{{characterDetail.text1}}{{characterDetail.text2}}</span>
                  </div>
                  <div class='content-view'>
                    <img class='content-img' v-if="characterDetail.detail.img != ''" :src='characterDetail.detail.img'
                      :style="characterDetail.text2 == '导师服务制' || characterDetail.text2 == '数据库'? 'margin: 18px ' : ''">
                    <div class='content-detail' :style="characterDetail.text2 == '导师服务制' ? 'width: 588px' : ''">
                      <div class='content-detail-text' v-html="text" v-for='text in characterDetail.detail.text' :key="text">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section class='service-characteristics-section-mobile' v-if='isMobile'>
            <div class='index-title'>服务特色</div>
            <div align='center' class='characteristics-contain'>
              <div class='each-character' v-for='character in characteristics' :key="character">
                <div class='transparent'></div>
                <img class='img' :src='character.img'>
                <div class='text-view'>
                  <div class='text'>{{character.text1}}</div>
                  <div class='text'>{{character.text2}}</div>
                </div>
              </div>
            </div>
          </section>

          <section class='service-content-section' v-if='!isMobile'>
            <div class='contain'>
              <div class='index-title-contain'>
                <div class='inline'></div>
                <div class='contain-title'>服务内容</div>
                <div class='inline'></div>
              </div>
              <div class='characteristics-contain' style='margin-top: 80px;'>
                <div class='each-character' v-for='content in contents' :style="index == 0 ? 'margin-left: 0px' : ''" :key="content">
                  <img class='img' :src='content.img'>
                  <div class='text'>{{content.text}}</div>
                </div>
              </div>
            </div>
          </section>
          <section class='service-content-section-mobile' v-if='isMobile'>
            <div class='index-title'>服务内容</div>
            <div class='contain'>
              <div class='each-contain' v-for='content in contents' :key="content">
                <img class='img' :src='content.img'>
                <div class='text'>{{content.text}}</div>
              </div>
            </div>
            <div class='back-text'>DREAM WITHIN REACH</div>
          </section>

          <section class='almighty-master-section img' v-if='!isMobile'>
            <div class='contain'>
              <div class='index-title-contain'>
                <div class='inline green'></div>
                <div class='contain-title green'>全能主导师</div>
                <div class='inline green'></div>
              </div>
              <div class='master-contain'>
                <div class='profile' v-for='member in team' :key="member">
                  <a class='profile-img-xl' data-toggle='modal'>
                    <div class='profile-img-xl' :style="[{backgroundImage: 'url(' + member.img +')'}]"></div>
                    <div class='mask'></div>
                    <div class='introduce'>
                      <div class='name size-xl'>{{member.name}}</div>
                      <div class='name size-l'>{{member.position}}</div>
                      <div class='name size-m' v-html='member.background'></div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section class='almighty-master-section-mobile' v-if='isMobile'>
            <div class='index-title'>全能主导师</div>
            <div class='master-contain mentors-slider owl-carousel  owl-theme' id="owl-demo2" data-show-dots='false' :data-slider-number="isMobile ? '3': '3'" pd-carousel>
              <div class='profile mentor-slide pd-carousel-slider' v-for='member in team' :key="member">
                <div class='img' :style="[{backgroundImage: 'url(' + member.img +')'}]"></div>
                <div class='name text'>{{member.name}}</div>
                <div class='position text'>{{member.position}}</div>
                <div class='background text' v-html='member.background2'></div>
              </div>
            </div>
          </section>
          <section class='admissions-officer-section img' v-if='!isMobile'>
            <div class='contain'>
              <div class='index-title-contain'>
                <div class='inline green'></div>
                <div class='contain-title green'>名校招生官</div>
                <div class='inline green'></div>
              </div>
              <div class='admissions-officer-contain mentors-slider' data-show-dots='false' :data-slider-number="isMobile ? '3': '3'" pd-carousel>
                <div align='center' class='admissions-officer-div mentor-slide pd-carousel-slider' v-for='undergradMentor in undergradMentorsMobile' :key="undergradMentor">
                  <div class='admissions-officer-div-each'>
                    <div class='img' :style="[{backgroundImage: 'url(' + undergradMentor[0].img + ')'}]"></div>
                    <div class='name center' v-html="undergradMentor[0].name"></div>
                    <div class='school center' v-html="undergradMentor[0].title"></div>
                  </div>
                  <div class='admissions-officer-div-each'>
                    <div class='img' :style="[{backgroundImage: 'url(' + undergradMentor[1].img + ')'}]"></div>
                    <div class='name center' v-html="undergradMentor[1].name"></div>
                    <div class='school center' v-html="undergradMentor[1].title"></div>
                  </div>
                </div>
              </div>
              <div class='center highschool-slogan'>
                <img class='prestans-logo' src='../assets/img/old/highschool_services/Prestans.jpg'>招生官面试服务为棕榈大道与美国波士顿Prestans Online Academy联合推出。
              </div>
            </div>
          </section>
          <section class='admissions-officer-section-mobile' v-if='isMobile'>
            <div class='index-title'>名校招生官</div>
            <div class='admissions-officer-contain mentors-slider' data-show-dots='false' :data-slider-number="isMobile ? '3': '3'" pd-carousel>
              <div align='center' class='admissions-officer-div mentor-slide pd-carousel-slider' v-for='undergradMentor in undergradMentorsMobile' :key="undergradMentor">
                <div class='admissions-officer-div-each'>
                  <img class='img' :src="undergradMentor[0].img">
                  <div class='name center' v-html="undergradMentor[0].name"></div>
                  <div class='school center' v-html="undergradMentor[0].title"></div>
                </div>
                <div class='admissions-officer-div-each'>
                  <img class='img' :src="undergradMentor[1].img">
                  <div class='name center' v-html="undergradMentor[1].name"></div>
                  <div class='school center' v-html="undergradMentor[1].title"></div>
                </div>
              </div>
            </div>
          </section>

          <section :class="isMobile ? 'precedence-table-section-mobile' : 'precedence-table-section'">
            <div class='precedence-table-title size-xl center white'>棕榈大道美国高中排名表</div>
            <a class='precedence-table-button' data-toggle='modal' href='http://www.palmdrive.cn/img/marketings/3.0/highschool_services/highschoolRanking.pdf' target='_blank'>
              <div class='size-l center white rank-more-text'>点击查看完整排名</div>
              <div class='rank-more-img'></div>
            </a>
          </section>
        </section>
      </div>
      <!-- <div :data-source='{{selectedServiceId}}' service-interest-modal></div> -->
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
        return createElement('link', {
          attrs: { rel: 'stylesheet', href: this.href }
        })
      },
      props: {
        href: { type: String, required: true }
      }
    },
    'remote-js': {
      render (createElement) {
        return createElement('script', {
          attrs: { type: 'text/javascript', src: this.src }
        })
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
      characteristics: [
        {
          img: require('../assets/img/old/highschool_services/highschoolLogo1.png'),
          text1: '1+4',
          text2: '导师服务制',
          detail: {
            img: require('../assets/img/old/highschool_services/character-deatil1.png'),
            text: [
              '01.六年以上申请经验的资深主导师全程把控申请方向。',
              '02.美国名校文学或语言学专业美方导师参与面试辅导与文书润色。',
              '03.美国优质寄宿高中现任招生官模拟面试。',
              '04.三年以上申请管理经验的班主任辅助材料填写与提交。'
            ]
          }
        },
        {
          img: require('../assets/img/old/highschool_services/highschoolLogo2.png'),
          text1: '个性化定制',
          text2: '申请规划方案',
          detail: {
            img: require('../assets/img/old/highschool_services/character-deatil2.png'),
            text: [
              '01.学生信息分析和诊断定位。',
              '02.学生家长全方位采访与素材收集。',
              '03.详细整理个人经历，打造专属简历。',
              '04.个性化定制背景提升和整体申请方案。'
            ]
          }
        },
        {
          img: require('../assets/img/old/highschool_services/highschoolLogo3.png'),
          text1: '面试、选校',
          text2: '文书团审机制',
          detail: {
            img: require('../assets/img/old/highschool_services/character-deatil3.png'),
            text: [
              '01.模拟面试多位导师旁听并对学生面试表现进行综合评估。',
              '02.选校列表经过多位导师把关，确定最佳选校方案。',
              '03.文书初稿集合多位导师的修改意见，确保文书质量。',
              '04.美方导师从招生官角度进行文书模拟审核，为定稿把关。'
            ]
          }
        },
        {
          img: require('../assets/img/old/highschool_services/highschoolLogo4.png'),
          text1: '独家活动',
          text2: '数据库',
          detail: {
            img: require('../assets/img/old/highschool_services/character-deatil4.png'),
            text: [
              "01.课外活动资源库<br><span class=''>棕榈大道核心团队独立研发课外活动数据库<br/>整合国内外上千活动数据。</span>",
              "02.优质招生官资源库<br/><span class=''>棕榈大道与美国优质私立中学招生官常年保持紧密联系<br/>定期召开国内招生见面会。</span>",
              "03.专业导师资源库<br><div class=''>棕榈大道三千名海内外名校校友<br/>随时为学生提供导师咨询服务。</div>"
            ]
          }
        },
        {
          img: require('../assets/img/old/highschool_services/highschoolLogo5.png'),
          text1: '优质',
          text2: '现任招生官',
          detail: {
            img: require('../assets/img/old/highschool_services/character-deatil5.png'),
            text: [
              '美国优质寄宿高中现任招生官模拟校园以及网络面试。',
              '精准还原真实面试，针对学生表现给出详细反馈意见。'
            ]
          }
        }
      ],
      contents: [
        {
          img: require('../assets/img/old/highschool_services/highschoolLogo6.png'),
          text: '申请规划'
        },
        {
          img: require('../assets/img/old/highschool_services/highschoolLogo7.png'),
          text: '背景提升'
        },
        {
          img: require('../assets/img/old/highschool_services/highschoolLogo8.png'),
          text: '选校指导'
        },
        {
          img: require('../assets/img/old/highschool_services/highschoolLogo11.png'),
          text: '文书创作'
        },
        {
          img: require('../assets/img/old/highschool_services/highschoolLogo10.png'),
          text: '面试辅导'
        }
      ],
      undergradMentors: [
        'Terrell_Ivory',
        'Leucretia_Shaw',
        'Ronnie_Dixon',
        'Kevin_Ramos_Glew',
        'Kevin_Lawrence',
        'Rich_Ryerson'
      ],
      // undergradMentorsMobile: [['Terrell_Ivory', 'Leucretia_Shaw'], ['Kevin_Lawrence', 'Kevin_Ramos_Glew'], ['Ronnie_Dixon', 'Rich_Ryerson']],
      undergradMentorsMobile: [
        [
          {
            name: 'Terrell Ivory',
            img: require('../assets/img/old/highschool_services/admission/Terrell_Ivory.jpg'),
            title: '菲利普安多福中学<br>招生办副主任',
            intro:
              'Terrell Ivory是顶尖寄宿菲利普安多福中学(Phillips Academy Andover)的招生办副主任。Ivory先生来自北卡罗来纳州，于 2012年开始在安多福的招生办工作。在此之前，Ivory先生在新泽西州的布莱尔学院(Blair Academy)担任数学老师和篮球教练，并且在安多福中学的数学和科学暑期课程担任老师。Ivory 先生毕业于著名文理学院戴维森学院，并且曾经在Colgate大学担任男子篮球教练，在体育生的招生方面有着丰富的经验。'
          },
          {
            name: 'Leucretia Shaw',
            img: require('../assets/img/old/highschool_services/admission/Leucretia_Shaw.jpg'),
            title: '布莱尔学院<br>招生办副主任',
            intro:
              'Leucretia Shaw是布莱尔学院(Blair Academy)的招生办副 主任。她在乔治城大学获得了西班牙语专业的本科学位，专注 于语言教学。之后在哥伦比亚大学教育学院获得教育领导力方 向的硕士学位。Shaw女士从2010年起在布莱尔学院工作，除 了是招生委员会的成员以外，她还是九年级的年级主任，教授 Blair LEADS系列课程，担任学生顾问，在Timken图书馆担任 一定职务，并且是学校教务执行委员会的一员。在布莱尔学院任职期间，她也曾经教授基础、中级和高级西班牙语。在她的职 业生涯早期，Shaw女士也在圣詹姆斯学校(Saint James School) 和她的母校劳伦斯维尔学校(Lawrenceville School)担任过各 种职务。'
          }
        ],
        [
          {
            name: 'Kevin Lawrence',
            img: require('../assets/img/old/highschool_services/admission/Kevin_Lawrence.jpg'),
            title: '劳伦斯维尔学校<br>招生办副主任',
            intro:
              'Kevin Lawrence是劳伦斯维尔学校(Lawrenceville School) 的招生办副主任。 他毕业于西北大学，在2010年加入劳伦斯维 尔学校招生办，同时担任Big Red足球队和男子田径队的助理教练。在来劳伦斯维尔学校工作之前，Lawrence先生在他的母 校，位于康涅狄格州的亚凡谷农场中学(Avon Old Farms School) 担任招生办副主任和多元化招生负责人。'
          },
          {
            name: 'Kevin Ramos-Glew',
            img: require('../assets/img/old/highschool_services/admission/Kevin_Ramos_Glew.jpg'),
            title: '金博联合学院<br>招生办主任',
            intro:
              'KevinRamos-Glew是金博联合学院(Kimball Union Academy) 的招生办主任。他本科毕业于康涅狄格学院，在达特茅斯学院获得MALS硕士学位。并自2011年起担任马萨诸塞州劳伦斯世界教育学院的董事会成员。在2002年加入金博联合学院招生办 之前，他曾在纽约州的寄宿学校诺伍德学校(Northwood School)开设了当地的第一个西班牙语教学项目，也在马萨诸塞州剑桥镇的英孚基金会担任过区域经理，负责管理当地的三 百名国际学生以二十名负责学校与寄宿家庭联络的工作人员。同 时，在寄宿名校伽文纳学校(The Governor’s Academy)， Glew先生也曾经担任过夏季项目主任，并负责国际学生的招生 和录取。'
          }
        ],
        [
          {
            name: 'Ronnie Dixon',
            img: require('../assets/img/old/highschool_services/admission/Ronnie_Dixon.jpg'),
            title: '菲利普斯埃克塞特中学<br>招生办副主任',
            intro:
              'Terrell Ivory是顶尖寄宿菲利普安多福中学(Phillips Academy Andover)的招生办副主任。Ivory先生来自北卡罗来纳州，于 2012年开始在安多福的招生办工作。在此之前，Ivory先生在新泽西州的布莱尔学院(Blair Academy)担任数学老师和篮球教练，并且在安多福中学的数学和科学暑期课程担任老师。Ivory 先生毕业于著名文理学院戴维森学院，并且曾经在Colgate大学担任男子篮球教练，在体育生的招生方面有着丰富的经验。'
          },
          {
            name: 'Rich Ryerson',
            img: require('../assets/img/old/highschool_services/admission/Rich_Ryerson.jpg'),
            title: '金博联合学院<br>招生办副主任',
            intro:
              'Rich Ryerson是金博联合学院(Kimball Union Academy)的 招生办副主任。他从小在寄宿学校长大，之后就读于著名私立 寄宿圣保罗中学(St. Paul’s School)，毕业于达特茅斯学院。 多年来，Ryerson先生曾经担任过宿舍主管，学生顾问和曲棍球教练，也曾在寄宿初中卡迪根山学校(Cardigan Mountain School)和金博联合学院(Kimball Union Academy)担任招生 办主任。在短暂的离开之后，这是他在Kimball联合学院继续担 任招生官的第十三个年头，Ryerson先生拥有丰富的寄宿学校 经历，并且对寄宿学校生活充满热情，帮助了很多学生及其家 庭发掘最适合自己的寄宿高中。'
          }
        ]
      ],
      team: [
        {
          name: '盛天意 Tina',
          img: require('../assets/img/old/mentors/tina.jpg'),
          position: '导师总监',
          background: '斯坦福大学教育学院 中学教育方向硕士',
          background2: '斯坦福大学中学教育硕士<br/>中学教育方向硕士',
          intro:
            'Tina 老师在旧金山湾区的中学内工作的多年内，曾在公立及私立初高中教授过中文、历史和ESL，也在私立高中担任过招生面试官以及国际学生辅导员 , 并曾负责创立和管理旧金山湾区一所私立高中的寄宿部 , 具有丰富的双语教学、招生与国际学生指导经验。<br/>Tina 老师非常熟悉美国初高中的各类课程内容以及丰富多彩的课外活动，同时也对美国本地中学文化有着深刻的认知和了解。Tina 老师曾经在各种不同类型的学校工作过，包括教会学校、公立中学以及顶尖私立学校的天才班，因此对于美国本土中学的分层以及课程教学内容的相同性与差异性也有着独到的见解，可以更容易地针对每个孩子的特点推荐最适合他的学校。<br/>曾经在私立中学担任过三年国际学生招生官的经历让 Tina 老师非常熟悉来自世界各地的申请者，尤其是中国大陆的申请学生，因此对于国际学生如何在申请以及面试中脱颖而出有着第一手的经验，可以更有效地指导学生做出最符合学校心意的申请材料，以及在面试中尽情展示出个人魅力，获得学校的青睐。<br/>同时，Tina 老师在帮助国际学生中学期间选择校内和校外补充课程以及活动方面也有着丰富的经验 , 能快速分析判断学生的特点与优势 , 准确指导国际学生的选课与活动规划，挖掘自身亮点。Tina老师的教育学背景也让她能够从心理学角度合理理解与分析学生在各个年龄阶段会遇到的困惑，为小留学生的留学之路保驾护航。'
        },
        {
          name: '冯子昊 Zihao',
          img: require('../assets/img/old/mentors/zihao.jpg'),
          position: '首席主导师',
          background: '宾夕法尼亚大学 计算机图形学硕士<br>宾大校友面试官',
          background2: '宾夕法尼亚大学<br>计算机图形学硕士',
          intro:
            'Zihao 老师是个十足的“理工科女生”，高中时期，就读于理科实验部的她醉心于数学、生物、化学竞赛，在大学期间，她选择了计算机图形学的专业方向，并且有不少相关的行业实习经历。在美国，她获得了常春藤宾夕法尼亚大学的硕士，也曾担任宾大校友面试官，拥有多年美国学习、工作和生活经验，对美国校园和留学生日常生活极为熟悉。<br/>自 2013年秋季开始从事美国中学申请咨询，Zihao老师已经帮助数百名学子申请到理想美国学校。她非常擅长挖掘学生亮点、引导学生积极自我表达，并且能够以扎实的英文功底和流利的美式英语帮助学生进行文书写作和面试指导，并结合个人切身经历给出最准确的选校判断以及面试建议。在留美期间，Zihao 老师曾走访美国东北部新英格兰地区、费城地区、华盛顿地区多所寄宿名校，与招生官建立长期的良好关系，掌握一手录取信息。除此之外，Zihao 老师也曾作为学生督导、职场社交教练和生活监护人提供一对一的帮助和咨询，对小留学生的升学、学业和职业规划有独到的见解。'
        },
        {
          name: '邓春琳 Leina',
          img: require('../assets/img/old/mentors/leina.jpg'),
          position: '首席主导师',
          background: '北京理工大学 学士',
          background2: '北京理工大学 学士',
          intro:
            '大学毕业后，Leina 老师就开始从事教育咨询的工作，在过去的八年内，Leina 老师走遍了美国除阿拉斯加和夏威夷以外所有州超过 140 所寄宿学校，对不同寄宿学校的地理位置、环境以及学校氛围和学生都有第一手的直观了解。Leina 老师的学生遍布全美，并且她和众多顶尖寄宿学校的招生官都保持着紧密的联系。<br/>在深圳的一所高端留学机构任职至留学部副总监之后，她开始思考究竟国际教育对于中国家庭来说意味着什么。在她眼中，中国家庭对于孩子教育的付出和投资甚至到了用不惜一切代价来形容的程度，而这些付出有些值得，有些却有待商榷。怀着这样的初心，Leina 老师加入棕榈，期待用自己的服务帮助每一个家庭,将留学和教育投资的价值最大化。Leina 老师善于观察和总结，能够从一些零碎的事情中找出与众不同的角度，从小事中发掘和打磨学生的亮点。同时，个性活泼开朗的她一直深受学生喜欢，能够和所有的学生打成一片。她认为留学工作第一个关键点就是顾问与学生要有火花，碰撞在一起才能变成熊熊大火，这也是 Leina 老师在工作过程中最有成就感的时刻。'
        },
        {
          name: '宛晓红 Ivy',
          img: require('../assets/img/old/mentors/Ivy.png'),
          position: '资深主导师',
          background: '波士顿大学 英语教育硕士<br>安庆师范大学 英语专业学士',
          background2: '波士顿大学<br/>英语教育硕士',
          intro:
            'Ivy 老师拥有 8 年留学行业从业经验，同时是一位非常耐心，专业并且有责任心的老师。毕业后即就职于留学机构，而且首先就接触的是低龄留学，在这方面有非常多的经验。Ivy 老师拥有很强的亲和力和耐心，而且非常熟悉和了解青少年的心理，能够和学生很好地进行交流，建立信任。本着对教育事业的热爱，Ivy 老师在给家长和学生的日常沟通和答疑过程中能做到及时响应，充分给客户以安全感和可靠感。<br/>自 2013年秋季开始从事美国中学申请咨询，Zihao老师已经帮助数百名学子申请到理想美国学校。她非常擅长挖掘学生亮点、引导学生积极自我表达，并且能够以扎实的英文功底和流利的美式英语帮助学生进行文书写作和面试指导，并结合个人切身经历给出最准确的选校判断以及面试建议。在留美期间，Zihao 老师曾走访美国东北部新英格兰地区、费城地区、华盛顿地区多所寄宿名校，与招生官建立长期的良好关系，掌握一手录取信息。除此之外，Zihao 老师也曾作为学生督导、职场社交教练和生活监护人提供一对一的帮助和咨询，对小留学生的升学、学业和职业规划有独到的见解。'
        }
      ],
      characterDetail: {
        detail: {
          text: []
        }
      },
      showCharacteristicsDetail: false
    }
  },
  created () {
    this.banner1 = this.isMobile
      ? require('../assets/img/majorIntro/mobile/banner1.png')
      : require('../assets/img/majorIntro/banner1.png')
  },
  mounted () {
    window.scrollTo(0, 0)

    this.$nextTick(function () {
      $('#owl-demo2').owlCarousel({
        items: 3,
        margin: 20,
        lazyLoad: true,
        nav: false,
        dots: false,
        autoplay: false,
        loop: false,
        autoplayHoverPause: false,
        navText: [
          "<i class='left-arrow home-dynamic-left-arrow'></i>",
          "<i class='right-arrow home-dynamic-right-arrow'></i>"
        ]
      })
    })
  },
  methods: {
    showCharacterDetail (index) {
      this.showCharacteristicsDetail = true
      //   $('#characteristics-detail').css('display', 'block')
      this.characterDetail = this.characteristics[index]
      $('.each-character').removeClass('theme-color')
      $('.part' + index).addClass('theme-color')
    },

    hideCharacterDetail (index) {
      this.showCharacteristicsDetail = false
      //   $('#characteristics-detail').css('display', 'none')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.update-highschool-services-pagesss {
  font-size: 14px;
  margin: 0;
  color: #333;

  img {
    vertical-align: middle;
  }

  .white {
    color: white;
  }

  @themeColor: #2aa7aa;
  // @font-face
  // {
  //     font-family: Segoe-Print;
  //     src: url('/font/segoe print.ttf')
  // }
  //common index-title
  .float-left {
    float: left;
  }

  .theme-color {
    background-color: @themeColor !important;
  }

  .float-right {
    float: right;
  }

  .green {
    color: @themeColor !important;
    border-color: @themeColor !important;
  }

  .contain {
    width: 960px;
    height: 100%;
    margin-left: auto;
    margin-right: auto;

    .index-title-contain {
      width: 100%;
      // height: 230px;
      text-align: center;

      .inline {
        display: inline-block;
        width: 30px;
        border-bottom: 2px solid @themeColor;
        vertical-align: middle;
        border-color: #fff;
        margin: 0px 15px 15px;
      }

      .contain-title {
        display: inline-block;
        color: #fff;
        font-size: 30px;
        text-align: center;
        padding-top: 40px;
        line-height: 30px;
      }

      // .index-title {
      //     width: 15%;
      //     height: 100%;
      //     background-color: #ff7442;
      //     border-bottom-left-radius: 10px;
      //     border-bottom-right-radius: 10px;

      //     .index {
      //         height: 50%;
      //         text-align: center;
      //         color: rgb(249, 215, 188);
      //         font-size: 103px;
      //         line-height: 120px;
      //         font-family: BebasNeueRegular;
      //     }

      //     .name {
      //         height: 25%;
      //         text-align: center;
      //         color: rgb(255, 255, 255);
      //         font-size: 40px;
      //         width: 100%;
      //         margin-left: auto;
      //         margin-right: auto;
      //         font-family: 思源黑体 CN;
      //     }
      // }

      // .index-title-des {
      //     width: 36%;
      //     height: 100%;
      //     padding: 0px 15px;
      //     .index-tite-des-en {
      //         height: 70%;
      //         font-family: BebasNeueRegular;
      //         font-size: 110px;
      //         color: #c9caca;
      //         line-height: 185px;
      //     }

      //     .index-tite-des-zh {
      //         height: 30%;
      //         font-size: 33px;
      //         font-family: 思源黑体 CN;
      //         line-height: 35px;
      //         color: rgb(83, 83, 83);
      //     }
      // }
    }
  }

  .highschool-banner-section {
    //title棕榈大道文字
    .palmDrive-title-section {
      background: url('../assets/img/old/highschool_services/first.png')
        no-repeat center;
      height: 600px;
      width: 100%;
      background-size: cover;

      .title {
        padding-top: 240px;
        font-size: 84px;
        // font-weight: bold;
        font-family: AvantGardeDemi;
        // line-height: 1;
        line-height: 70px;
        // height: 308px;
        color: white;
      }

      .description {
        font-family: Segoe-Print;
        margin-top: 25px;
        font-size: 36px;
        line-height: 36px;
        color: white;
      }
    }
  }

  //服务特色
  .service-characteristics-section {
    background: url('../assets/img/old/highschool_services/second.png')
      no-repeat center;
    height: 468px;
    width: 100%;
    background-size: cover;

    .contain {
      .characteristics-contain {
        height: 30%;
        margin: 60px 0px 0px 0px;
        display: flex;
        position: relative;

        a:after {
          background-color: @themeColor;
        }

        .each-character {
          width: 180px;
          height: 260px;
          background-color: @themeColor;
          //background-color: #01b7b7;
          margin-left: 15px;
          border-radius: 10px;
          display: inline-block;
          flex: 1;
          position: relative;
          cursor: pointer;

          .transparent {
            width: 20px;
            height: 10px;
            position: absolute;
            background: rgb(248, 247, 248);
            left: 50%;
            margin-left: -10px;
            margin-top: -1px;
            border-bottom-left-radius: 10px;
            border-bottom-right-radius: 10px;
          }

          .img {
            color: rgb(255, 255, 255);
            width: 70px;
            height: 70px;
            display: block;
            margin: 55px auto 25px;
          }
          .text {
            height: 12%;
            color: rgb(255, 255, 255);
            font-size: 20px;
            text-align: center;
          }
        }

        // #characteristics-detail:target {
        //     display: block;
        // }

        #characteristics-detail {
          position: absolute;
          top: -35px;
          left: 80px;
          width: 800px;
          height: 400px;
          background: @themeColor;
          color: #ffffff;
          // display: none;
          z-index: 1050;
          border-radius: 8px;

          .img-close {
            width: 16px;
            height: 16px;
            cursor: pointer;
            position: absolute;
            top: 5px;
            right: 5px;
          }

          .title-view {
            width: 80%;
            height: 14.5%;
            margin: 10px auto;
            border-bottom: 2px solid rgba(255, 255, 255, 0.6);

            .title-img {
              width: 45px;
              height: 45px;
              margin-right: 10px;
              vertical-align: middle;
            }

            .title {
              font-size: 28px;
              vertical-align: middle;
            }
          }

          .content-view {
            margin: 30px auto;
            text-align: center;

            .content-img {
              width: 170px;
              margin: 30px;
              vertical-align: middle;
            }

            .content-detail {
              display: inline-block;
              vertical-align: middle;
              text-align: left;
              // width: 588px;

              .content-detail-text {
                margin-bottom: 15px;
                font-size: 20px;
                line-height: 25px;

                .detailColor {
                  color: @themeColor;
                }
              }
            }
          }
        }
      }
    }
  }

  //服务内容
  .service-content-section {
    background: url('../assets/img/old/highschool_services/third.png') no-repeat
      center;
    height: 450px;
    width: 100%;
    background-size: cover;

    .characteristics-contain {
      height: 25%;
      margin: 60px auto 20px auto;
      display: flex;
      // width: 80%;

      .each-character {
        width: 160px;
        height: 160px;
        // background-color: @themeColor;
        margin-left: 40px;
        border-radius: 6px;
        display: inline-block;
        border: 1px solid rgba(255, 255, 255, 0.8);
        flex: 1;
        cursor: pointer;

        .img {
          color: rgb(255, 255, 255);
          width: 70px;
          height: 70px;
          display: block;
          margin: 25px auto;
          color: rgb(255, 255, 255);
        }
        .text {
          height: 20%;
          color: rgb(255, 255, 255);
          font-size: 20px;
          text-align: center;
        }

        .back-text {
          font-family: BebasNeueRegular;
          font-size: 100px;
          color: rgb(106, 106, 106);
          width: 430px;
          line-height: 100px;
          float: right;
          text-align: right;
        }
      }

      .clear {
        background-color: rgba(0, 0, 0, 0);
      }
    }
  }

  //全能主导师
  .almighty-master-section {
    // background: url('../assets/img/old/highschool_services/forth.png') no-repeat center;
    background-color: white;
    height: 640px;
    width: 100%;
    background-size: cover;

    .master-contain {
      margin: 30px auto 20px;
      text-align: center;
      width: 800px;

      .profile {
        display: inline-block;
        width: 220px;
        height: 220px;
        margin: 0px 10px 20px;
        text-align: left;

        .size-xl {
          font-size: 20px;
        }

        .size-l {
          font-size: 14px;
        }

        .size-m {
          font-size: 12px;
        }

        .profile-img-xl {
          width: 220px;
          height: 220px;
          background-size: cover;
          background-repeat: no-repeat;
          display: inline-block;
          position: relative;
        }
        .mask {
          position: absolute;
          top: 0;
          left: 0;
          width: 220px;
          height: 220px;
          background: rgba(101, 101, 101, 0.6);
          color: #ffffff;
          opacity: 0;
        }

        .introduce {
          position: absolute;
          top: 120px;
          left: 0;
          width: 210px;
          height: 100px;
          background: @themeColor;
          color: #ffffff;
          opacity: 0;
          padding: 5px 0px 0px 10px;
        }

        a:hover .mask {
          opacity: 0;
        }
        a:hover .introduce {
          opacity: 1;
        }
      }
    }
  }

  //顶级招生官
  .admissions-officer-section {
    // background: url('../assets/img/old/highschool_services/fifth.png') no-repeat center;
    background-color: rgb(245, 252, 252);
    height: 840px;
    width: 100%;
    background-size: cover;

    .admissions-officer-contain {
      width: 850px;
      height: 75%;
      margin: 30px auto 0;
      //display: flex;

      // .pd-carousel {
      //     height: 100%;
      //     .sliders-container {
      //         height: 100%;
      //         .sliders-container-inner {
      //             height: 100%;
      //         }
      //     }
      //     .pd-carousel-navs {
      //         .pd-carousel-prev, .pd-carousel-next {
      //             top: 46%;
      //         }
      //     }
      // }

      .admissions-officer-div {
        //width: 25%;
        height: 100% !important;
        display: inline-block;
        margin: 0px 30px;
        //flex: 1;

        .admissions-officer-div-each {
          //width: 70%;
          height: 220px;
          width: 220px;
          background-size: cover;
          margin-bottom: 110px;

          .img {
            height: 100%;
            background-size: contain;
            background-repeat: no-repeat;
            background-position: top;
            // border-radius: 15px;
          }

          .name {
            color: @themeColor;
            font-size: 20px;
            margin: 10px 0px 5px;
          }

          .school {
            font-size: 18px;
            color: #595757;
            line-height: 23px;
          }
        }
      }
    }

    .highschool-slogan {
      margin-top: 50px;
      font-size: 18px;
      color: #595757;
      text-align: right;
      // margin-right: 78px;

      .prestans-logo {
        width: 52px;
        height: 45px;
        margin-right: 15px;
      }
    }
  }

  //排名表
  .precedence-table-section {
    background: url('../assets/img/old/highschool_services/sixth.png') no-repeat
      center;
    height: 325px;
    width: 100%;
    background-size: cover;

    .size-xl {
      font-size: 40px;
    }

    .precedence-table-title {
      padding-top: 80px;
      line-height: 50px;
      // font-weight: bold;
    }

    .precedence-table-button {
      width: 280px;
      height: 50px;
      margin-left: auto;
      margin-right: auto;
      line-height: 50px;
      background: @themeColor;
      border-radius: 6px;
      margin-top: 30px;
      display: block;
      font-size: 24px;
      text-align: center;

      .rank-more-text {
        display: inline-block;
      }

      .rank-more-img {
        width: 15px;
        height: 18px;
        background: url(../assets/img/old/highschool_services/rank-more.png)
          no-repeat center;
        background-size: contain;
        display: inline-block;
        // margin-left: 3px;
      }
    }
  }

  //手机端
  .index-title {
    width: 30%;
    background: rgb(238, 117, 43);
    text-align: center;
    color: white;
    height: 30px;
    margin-left: auto;
    margin-right: auto;
    line-height: 30px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  //手机端棕榈大道标题文字
  .palmDrive-title-section-mobile {
    background: url(../assets/img/old/highschool_services/first.png) no-repeat
      center;
    height: 250px;
    width: 100%;
    background-size: cover;

    .title {
      padding-top: 69px;
      font-size: 60px;
      font-weight: bold;
      font-family: AvantGardeDemi;
      color: white;
    }

    .description {
      font-family: Segoe-Print;
      font-size: 15px;
      color: white;
    }
  }

  //手机端服务特色
  .service-characteristics-section-mobile {
    background: url('../assets/img/old/highschool_services/second-mobile.png')
      no-repeat center;
    height: 260px;
    width: 100%;
    background-size: cover;

    .characteristics-contain {
      margin-top: 20px;

      .each-character {
        width: 32%;
        height: 75px;
        display: inline-block;
        background-color: @themeColor;
        // margin: 0px 10px;
        border-bottom-right-radius: 5px;
        border-bottom-left-radius: 5px;
        margin-top: 10px;
        position: relative;
        margin-left: 2px;

        .transparent {
          width: 20px;
          height: 20px;
          position: absolute;
          background: rgb(253, 252, 252);
          left: 50%;
          margin-left: -10px;
          margin-top: -10px;
          border-radius: 10px;
        }

        .img {
          display: inline-block;
          width: 38px;
          vertical-align: bottom;
        }

        .text-view {
          display: inline-block;

          .text {
            text-align: left;
            color: white;
            font-size: 12px;
          }

          .text:first-child {
            margin-top: 20px;
          }
        }
      }
    }
  }

  //手机端服务内容
  .service-content-section-mobile {
    background: url('../assets/img/old/highschool_services/third-mobile.png')
      no-repeat center;
    height: 300px;
    width: 100%;
    background-size: cover;

    .contain {
      height: 100px;
      margin: 60px auto 0px auto;
      display: flex;
      width: 95%;

      .each-contain {
        background-color: @themeColor;
        margin: 0px 2px;
        border-bottom-right-radius: 5px;
        border-bottom-left-radius: 5px;
        display: inline-block;
        flex: 1;

        .img {
          width: 42px;
          display: block;
          margin: 13px auto;
        }

        .text {
          text-align: center;
          color: white;
          margin-top: 7px;
        }
      }
    }

    .back-text {
      font-family: BebasNeueRegular;
      font-size: 49px;
      color: rgb(106, 106, 106);
      line-height: 100px;
      text-align: center;
    }
  }

  //手机端全能主导师
  .almighty-master-section-mobile {
    background: url('../assets/img/old/highschool_services/forth.png') no-repeat
      center;
    height: 335px;
    width: 100%;
    background-size: cover;

    .master-contain {
      height: 88%;
      margin: 20px auto 0;
      text-align: left;
      width: 8.8rem;

      .owl-stage-outer {
        margin: 20px 40px;
      }

      .profile {
        // width: 30%;
        display: inline-block;

        .img {
          height: 95px;
          width: 90px;
          background-size: cover;
          background-repeat: no-repeat;
          border-radius: 6px;
        }

        .name,
        .position {
          color: @themeColor;
        }

        .name {
          font-size: 16px !important;
          margin-top: 6px;
        }

        .text {
          font-size: 12px;
        }
      }
    }
  }

  //手机端顶级招生官
  .admissions-officer-section-mobile {
    background: url('../assets/img/old/highschool_services/fifth.png') no-repeat
      center;
    height: 440px;
    width: 100%;
    background-size: cover;

    .admissions-officer-contain {
      margin: 15px 0px;
      .admissions-officer-div {
        width: 30%;
        display: inline-block;
        vertical-align: top;

        .admissions-officer-div-each {
          height: 180px;
          .img {
            height: 90px;
            width: 90px;
            background-size: cover;
            background-repeat: no-repeat;
            border-radius: 8px;
          }
          .name {
            color: @themeColor;
          }
        }
      }
    }
  }

  //手机端排名表
  .precedence-table-section-mobile {
    background: url('../assets/img/old/highschool_services/sixth.png') no-repeat
      center;
    height: 200px;
    width: 100%;
    background-size: cover;

    .precedence-table-title {
      padding-top: 55px;
      font-weight: bold;
    }

    .precedence-table-button {
      width: 180px;
      height: 35px;
      margin-left: auto;
      margin-right: auto;
      line-height: 35px;
      background: @themeColor;
      border-radius: 6px;
      margin-top: 12px;
      display: block;
    }
  }
}
</style>
