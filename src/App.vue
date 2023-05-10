<template>
  <div id="app" v-cloak :style="{'min-width': isMobile ? '100%' : '1200px'}">

    <div v-if="!isMobile" class="web-div">
      <!-- <img src="./assets/logo.png"> -->
      <div class="head">
        <div class="logo"></div>

        <ul>
          <li v-bind:class="{ 'select-menu-colors' : currentType == 0 }"><a href="http://palmdrive.cn/" target="_blank">首页</a></li>

          <li v-bind:class="{ 'select-menu-colors' : currentType == 1 }"><a href="http://palmdrive.cn/highschool_services" target="_blank">申请初高中</a></li>

          <li v-bind:class="{ 'select-menu-colors' : currentType == 2 }"><a href="http://palmdrive.cn/undergrad_services" target="_blank">申请本科</a></li>

          <li @mouseenter="changeMenu(3)" v-bind:class="{ 'select-menu-colors' : currentType == 3 }">申请研究生</li>

          <!-- <li v-bind:class="{ 'select-menu-colors' : currentType == 4 }"><a href="http://www.palmdrive.cn/v2/graduate.html#/four_to_one">导师团队</a></li> -->

          <li v-bind:class="{ 'select-menu-colors' : currentType == 5 }"><a href="http://www.palmdrive.cn/v2/graduate.html#/offers" target="_blank">成功案例</a></li>

          <li v-bind:class="{ 'select-menu-colors' : currentType == 6 }"><a href="http://palmdrive.cn/news-all?type=graduate" target="_blank">申请动态</a></li>

          <li v-bind:class="{ 'select-menu-colors' : currentType == 7 }"><a href="http://palmdrive.cn/about" target="_blank">关于我们</a></li>
        </ul>

        <div class="register">
          <a href="http://cms.palmdrive.cn/signin" target="_blank">注 册</a>
          <el-popover placement="right" width="100" trigger="hover">
            <div>400-006-2153</div>
            <!-- <div>010-53153818</div> -->
            <div slot="reference" class="phone"></div>
          </el-popover>

          <el-popover placement="right" width="100" trigger="hover">
            <img class="link-img" src="./assets/img/head/ercode-detail3.png" style="
                width: 100px;
                height: 100px;
                background-image: url('./assets/img/head/ercode-detail3.png');
                background-repeat: no-repeat;
                background-size: cover;" />
            <div class="ercode" slot="reference"></div>
          </el-popover>
        </div>

        <transition name="fade">
          <div v-if="showMenus" class="menus-div" @mouseleave="outMenu()">
            <div class="menu-intro" @click="goUrl(selectedMenu.url)">
              {{ selectedMenu.title }}
              <div class="icon-new"></div>
            </div>

            <div class="each-menus" v-for="(menus, index) in selectedMenu.menus" :key="index">
              <div class="each-menu-title">{{ menus.title }}</div>
              <div class="menu" v-for="(item, ind) in menus.items" :key="ind" @click="goUrl(item.url)">
                {{ item.name }}
                <span class="menu-name2">{{ item.name2 }}</span>
              </div>
            </div>
          </div>
        </transition>
      </div>

      <router-view />

      <div class="foot">
        <div class="left-div">
          <div class="link">
            <img class="link-img" src="./assets/img/home/foot/lianjie.png" />
            站内链接
          </div>
          <div class="heng-line"></div>
          <ul class="link-item-div">
            <li><a href="http://palmdrive.cn/undergrad_services" target="_blank">本科服务介绍</a></li>
            <li><a href="http://palmdrive.cn/highschool_services" target="_blank">初高中服务介绍</a></li>
            <li><a href="http://www.palmdrive.cn/v2/graduate.html#/graduate" target="#">研究生服务介绍</a></li>
            <li><a href="http://www.palmdrive.cn/v2/graduate.html#/offers" target="_blank">成功案例</a></li>
            <li><a href="http://palmdrive.cn/mentors" target="_blank">导师团队</a></li>
          </ul>

          <div class="link">
            <img class="link-img" src="./assets/img/home/foot/location.png" />
            公司地址
          </div>
          <div class="heng-line"></div>
          <ul class="location-item-div">
            <li v-for="(item, index) in cities" :key="item.name" v-html="item.name" @click="addClass(index)" v-bind:class="{ 'bg-colors' : index == current }"></li>
          </ul>

          <div class="place" v-for="(item, index) in selectedCity.place" :key="index">
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
              <img src="./assets/img/home/foot/contact2.png" class="contact2-img" />全国客服: 400-006-2153
            </div>
            <div class="text">
              <img src="./assets/img/home/foot/contact3.png" class="contact2-img" />留学辅导咨询微信：13166276053
            </div>
            <div class="text">
              <img src="./assets/img/home/foot/contact4.png" class="contact2-img" />邮箱：suggestions@palmdrive.cn
            </div>
          </div>
          <div class="wechat-div">
            <div class="title">
              <img src="./assets/img/home/foot/wechat.png" />
              关注我们
            </div>
            <div class="code-div">
              <div v-for="(item, index) in codes" :key="index" class="each-code">
                <img :src="item.img" />
                <div>{{ item.name }}</div>
              </div>
            </div>
          </div>

          <div class="other-contact">
            <a href="https://weibo.com/u/3384549622" target="_blank">
              <div class="each-contact left">
                <div class="each-img" :style="{backgroundImage:'url(' + otherContact1 + ')'}"></div>
              </div>
            </a>
            <a href="http://www.zhihu.com/org/zong-lu-da-dao" target="_blank">
              <div class="each-contact">
                <div class="each-img" :style="{backgroundImage:'url(' + otherContact2 + ')'}"></div>
              </div>
            </a>
            <a href="https://space.bilibili.com/480551209" target="_blank">
              <div class="each-contact right">
                <div class="each-img" :style="{backgroundImage:'url(' + otherContact3 + ')'}"></div>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div class="copy-right">
        <div class="content">
          <div class="content-title">隐私协议&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;关于我们&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;加入我们
          </div>
          <div class="content-title2">
            <span>CopyRight©2017 棕榈大道教育科技(北京)有限公司</span>
            <span>增值电信业务经营许可证：京B2-20191218</span>
            <span><a style="color: #fff" href="https://beian.miit.gov.cn" rel="noreferrer" target="_blank">京ICP备14009960号-1</a></span>
          </div>
        </div>
      </div>

      <!-- 左下角二维码弹框 -->
      <div class="contact-info hidden-phone" id="contact-info" style="display: block;">
        <div class="contact-circle">
          <div class="circle-dot center size-xs white">
            <!-- <i class="fa fa-lg fa-phone white"></i> -->
            <i class="el-icon-phone-outline size16"></i>
            <br>
            <div class="black">400-006-2153</div>
            <div class="size-s">
              OR
            </div>
            <div class="pull-right black">
              扫描二维码
              <br>咨询详情<br>
            </div>
          </div>
        </div>
        <div class="contact-square">
          <div class="square-dot">
            <img src="./assets/img/head/ercode-detail3.png" width="100%">
          </div>
        </div>
      </div>
    </div>

    <div v-if="isMobile" class="mobile-div" :class="showZindex ? 'littleHeight' : ''">
      <!-- <x-header>headddd</x-header> -->
      <div class="head">
        <div class="logo"></div>

        <div class="my-drawer" style="height: 100%">
          <drawer width="5.333333rem;" :show.sync="isshow" show-mode="push" placement="right" :drawer-style="{'background-color':'#22C3B6', width: '0', 'z-index': '10px'}">

            <div slot="drawer">
              <cell title="首页" link="http://palmdrive.cn/" :border-intent="false">
              </cell>

              <cell title="申请初高中" link="http://palmdrive.cn/highschool_services" :border-intent="false">
              </cell>

              <cell title="申请本科" link="http://palmdrive.cn/undergrad_services" :border-intent="false">
              </cell>

              <cell title="申请研究生" is-link :border-intent="false" :arrow-direction="show1 ? 'up' : 'down'" @click.native="show1 = !show1; show2=false;show3=false;show4=false;show5=false;">
              </cell>

              <!-- <p class="slide" :class="show1?'animate':''">blablabla...<br/>blablabla...<br/>blablabla...<br/>blablabla...</p> -->

              <cell class="slide title2" :class="show1?'animate':''" title="研究生服务介绍" link="/graduate" :border-intent="false" @click.native="isshow = false">
              </cell>

              <cell class="slide title2" :class="show1?'animate':''" title="辅导项目" is-link :border-intent="false" :arrow-direction="show2 ? 'up' : 'down'" @click.native="show2 = !show2">
              </cell>

              <cell class="slide title3" :class="show2?'animate':''" title="梦校计划" link="/dream" :border-intent="false" @click.native="isshow = false">
              </cell>

              <cell class="slide title3" :class="show2?'animate':''" title="种子计划" link="/seed" :border-intent="false" @click.native="isshow = false">
              </cell>

              <cell class="slide title3" :class="show2?'animate':''" title="能力提升" link="/ability" :border-intent="false" @click.native="isshow = false">
              </cell>

              <cell class="slide title3" :class="show2?'animate':''" title="核桃英语" link="/walnut" :border-intent="false" @click.native="isshow = false">
              </cell>

              <cell class="slide title2" :class="show1?'animate':''" title="师资团队" is-link :border-intent="false" :arrow-direction="show3 ? 'up' : 'down'" @click.native="show3 = !show3">
              </cell>

              <cell class="slide title3" :class="show3?'animate':''" title="四位一体" link="/four_to_one" :border-intent="false" @click.native="isshow = false">
              </cell>

              <cell class="slide title2" :class="show1?'animate':''" title="辅导结果" is-link :border-intent="false" :arrow-direction="show4 ? 'up' : 'down'" @click.native="show4 = !show4">
              </cell>

              <cell class="slide title3" :class="show4?'animate':''" title="申请季offer" link="/offers" :border-intent="false" @click.native="isshow = false">
              </cell>

              <cell class="slide title3" :class="show4?'animate':''" title="背景提升offer" link="/bg_promote" :border-intent="false" @click.native="isshow = false">
              </cell>

              <cell class="slide title3" :class="show4?'animate':''" title="学员故事" link="/story" :border-intent="false" @click.native="isshow = false">
              </cell>

              <cell class="slide title2" :class="show1?'animate':''" title="留学干货" is-link :border-intent="false" :arrow-direction="show5 ? 'up' : 'down'" @click.native="show5 = !show5">
              </cell>

              <cell class="slide title3" :class="show5?'animate':''" title="申请指南" link="/guide" :border-intent="false" @click.native="isshow = false">
              </cell>

              <cell class="slide title3" :class="show5?'animate':''" title="专业介绍" link="/major" :border-intent="false" @click.native="isshow = false">
              </cell>

              <cell class="slide title3" :class="show5?'animate':''" title="资料下载" link="/material" :border-intent="false" @click.native="isshow = false">
              </cell>

              <!-- <cell
                title="导师团队"
                link="/teachers"
                :border-intent="false"
                @click.native="isshow = false">
              </cell> -->

              <cell title="成功案例" link="http://www.palmdrive.cn/v2/graduate.html#/offers" :border-intent="false" @click.native="isshow = false">
              </cell>

              <cell title="最新动态" link="http://palmdrive.cn/news-all?type=graduate" :border-intent="false" @click.native="isshow = false">
              </cell>

              <cell title="关于我们" link="http://palmdrive.cn/about" :border-intent="false">
              </cell>

            </div>
            <div class="btn2">
              <span slot="overwrite-left" @click="isshow = !isshow">
                <x-icon type="navicon" size="30" style="fill:#fff;background: #22C3B6;border-radius: 4px; width:.8rem; height:.8rem"></x-icon>
              </span>
            </div>

            <div class="login" @click="showLogin()"></div>
          </drawer>
        </div>

      </div>

      <div class="loginDialogDiv">
        <el-dialog customClass="loginDialog" :visible.sync="showLoginDialog" width="7rem">
          <img src="./assets/img/head/login2.png" class="login2" />
          <div class="text">请在电脑上登录</div>
          <div class="text2"><a href="http://cms.palmdrive.cn/" target="_blank">cms.palmdrive.cn</a></div>
        </el-dialog>
      </div>

      <!-- 遮罩层 -->
      <div class="mask2" v-if="showLoginDialog"></div>

      <div style="position: relative;" :style=" showZindex ? 'z-index: 1000; height: 680px' : 'z-index: 3000'">
        <router-view />
      </div>

      <div class="foot">
        <div class="foot-div">
          <div class="title contact-us">
            <div class="title-div">
              <img src="./assets/img/home/mobile/foot/contact1.png" class="title-logo" />
              <span class="title-text">联系我们</span>
            </div>

            <div class="link-list">
              <div class="link">
                <img src="./assets/img/home/mobile/foot/contact4.png" class="link-logo" />
                <span>全国客服：400-006-2153</span>
              </div>
              <div class="link">
                <img src="./assets/img/home/mobile/foot/contact5.png" class="link-logo" />
                <span>留学辅导咨询微信：13166276053</span>
              </div>
              <div class="link">
                <img src="./assets/img/home/mobile/foot/contact6.png" class="link-logo" />
                <span>邮箱：suggestions@palmdrive.cn</span>
              </div>
            </div>
          </div>

          <div class="title care-us">
            <div class="title-div">
              <img src="./assets/img/home/mobile/foot/contact2.png" class="title-logo" />
              <span class="title-text">关注我们</span>
            </div>

            <div class="code-div">
              <div>
                <div v-for="(item, index) in codes" :key="index" class="each-code">
                  <img :src="item.img" />
                  <div>{{ item.name }}</div>
                </div>
              </div>

              <div class="other-contact">
                <a href="https://weibo.com/u/3384549622" target="_blank">
                  <div class="each-contact left">
                    <div class="each-img" :style="{backgroundImage:'url(' + otherContact1 + ')'}"></div>
                  </div>
                </a>
                <a href="http://www.zhihu.com/org/zong-lu-da-dao" target="_blank">
                  <div class="each-contact">
                    <div class="each-img" :style="{backgroundImage:'url(' + otherContact2 + ')'}"></div>
                  </div>
                </a>
                <a href="https://space.bilibili.com/480551209" target="_blank">
                  <div class="each-contact right">
                    <div class="each-img" :style="{backgroundImage:'url(' + otherContact3 + ')'}"></div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div class="title address">
            <div class="title-div">
              <img src="./assets/img/home/mobile/foot/contact3.png" class="title-logo" />
              <span class="title-text">公司地址</span>
            </div>

            <div class="address-div">
              <ul class="location-item-div">
                <li v-for="(item, index) in cities" :key="item.name2" v-html="item.name2" @click="addClass(index)" v-bind:class="{ 'bg-colors' : index == current }"></li>
              </ul>

              <div class="place" v-for="(item, index) in selectedCity.place" :key="index">
                <div class="text">{{ item.text }}</div>
                <div class="number">{{ item.number }}</div>
                <div class="place-line" v-if="selectedCity.place.length - 1 != index "></div>
              </div>
            </div>
          </div>
        </div>

        <div class="copy-right">
          <div class="content">
            <div class="content-title">隐私协议&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;关于我们&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;加入我们
            </div>
            <div class="content-title2">
              <div class="line1">CopyRight©2017 棕榈大道教育科技(北京)有限公司</div>
              <div>增值电信业务经营许可证：京B2-20191218 <a style="color: #fff" href="https://beian.miit.gov.cn" rel="noreferrer" target="_blank">京ICP备14009960号-1</a></div>
            </div>
          </div>
        </div>
      </div>

      <!-- 手机端自定义七陌聊天按钮 -->
      <!-- <a v-if="isMobile" href="https://webchat.7moor.com/wapchat.html?accessId=9155aa90-e5c5-11ea-85fa-319a5fe89624&fromUrl=http://www.palmdrive.cn/v2/graduate.html#/graduate&urlTitle=%E7%A0%94%E7%A9%B6%E7%94%9F%E9%A1%B5">
        <div id="chatBtn" class="chatBtn" style="display: block; background-color: rgb(25, 202, 166); border-radius: 50%; width: 100px; height: 100px; padding: 15px; right: 18px; bottom: 18px;">
          <img width="100px" height="100px" src="//webchat.7moor.com/images/1.png?1221" style="width: 100px; height: 100px; margin: 0px; padding: 0px; transform: unset; transition: unset;"><span></span><span id="qimo_badge"></span>
        </div>
      </a> -->
    </div>
  </div>
</template>

<script>
import { Badge, Drawer, Group, XHeader } from 'vux'
import Common from './components/common/common'
// import Drawer from 'vux/src/components/drawer'
// import Group from 'vux/src/components/group'
import Cell from 'vux/src/components/cell'
// import Badge from 'vux/src/components/badge'

export default {
  name: 'App',
  data () {
    return {
      isshow: false,
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false,
      cities: [
        {
          name: '北&nbsp;&nbsp;&nbsp;京',
          name2: '北京',
          place: [
            {
              text: '北京市海淀区北四环西路66号中国技术交易大厦A座1501室',
              number: '010-6268 0655'
            }
          ]
        },
        {
          name: '上&nbsp;&nbsp;&nbsp;海',
          name2: '上海',
          place: [
            {
              text: '上海市黄浦区马当路388号 SOHO复兴广场A座1001',
              number: '021-6331 0108'
            }
          ]
        },
        {
          name: '广&nbsp;&nbsp;&nbsp;州',
          name2: '广州',
          place: [
            {
              text: '广州市天河区珠江东路11号高德置地广场F座11楼02-03单元',
              number: '020-8981 9380'
            }
          ]
        },
        {
          name: '深&nbsp;&nbsp;&nbsp;圳',
          name2: '深圳',
          place: [
            {
              text: '深圳市福田区金田路卓越世纪中心1号楼407-410室',
              number: '0755-8891 2010'
            }
          ]
        },
        {
          name: '武&nbsp;&nbsp;&nbsp;汉',
          name2: '武汉',
          place: [
            {
              text: '武汉市洪山区珞瑜路10号群光中心写字楼16楼1606',
              number: '027-87791846'
            }
          ]
        },
        {
          name: '成&nbsp;&nbsp;&nbsp;都',
          name2: '成都',
          place: [
            {
              text:
                '成都市锦江区红星路三段1号国际金融中心一号办公楼36楼1及8-10单元',
              number: '028-8675 8946'
            }
          ]
        },
        {
          name: '沈&nbsp;&nbsp;&nbsp;阳',
          name2: '沈阳',
          place: [
            {
              text: '沈阳市沈河区青年大街125号企业广场B座805',
              number: '024-8338 3577'
            }
          ]
        },
        {
          name: '南&nbsp;&nbsp;&nbsp;京',
          name2: '南京',
          place: [
            {
              text: '南京市栖霞区学津路8号仙林高创中心B座707室',
              number: '025-87761332（面访前请电话预约）'
            }
          ]
        },
        {
          name: '硅&nbsp;&nbsp;&nbsp;谷',
          name2: '硅谷',
          place: [
            {
              text: '2381 Zanker Rd, Ste 110, San Jose, CA, 95131',
              number: '+1 (669) 298 5171'
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
        }
        // {
        //   img: require('./assets/img/home/foot/htyy-code.png'),
        //   name: '核桃英语'
        // }
      ],
      menus: [
        {
          title: '研究生服务介绍',
          url: '/graduate',
          menus: [
            {
              title: '辅导项目',
              items: [
                {
                  name: '梦校计划',
                  name2: '（申请季）',
                  url: '/dream'
                },
                {
                  name: '种子计划',
                  name2: '（大一至大三）',
                  url: '/seed'
                },
                {
                  name: '能力提升',
                  name2: '',
                  url: ''
                }
              ]
            },
            {
              title: '师资团队',
              items: [
                // {
                //   name: '导师介绍',
                //   name2: '',
                //   url: ''
                // },
                {
                  name: '四位一体',
                  name2: '',
                  url: ''
                }
              ]
            },
            {
              title: '辅导结果',
              items: [
                {
                  name: '申请季offer',
                  name2: '',
                  url: ''
                },
                {
                  name: '背景提升offer',
                  name2: '',
                  url: ''
                },
                {
                  name: '成功案例',
                  name2: '',
                  url: ''
                }
              ]
            },
            {
              title: '留学干货',
              items: [
                {
                  name: '申请指南',
                  name2: '',
                  url: '/guide'
                },
                {
                  name: '专业介绍',
                  name2: '',
                  url: ''
                },
                {
                  name: '资料下载',
                  name2: '',
                  url: ''
                }
              ]
            }
          ]
        },
        {
          title: '研究生服务介绍',
          url: '/graduate',
          menus: [
            {
              title: '辅导项目',
              items: [
                {
                  name: '梦校计划',
                  name2: '（申请季）',
                  url: '/dream'
                },
                {
                  name: '种子计划',
                  name2: '（大一至大三）',
                  url: '/seed'
                },
                {
                  name: '能力提升',
                  name2: '',
                  url: '/ability'
                }
              ]
            },
            {
              title: '师资团队',
              items: [
                // {
                //   name: '导师介绍',
                //   name2: '',
                //   url: ''
                // },
                {
                  name: '四位一体',
                  name2: '',
                  url: ''
                }
              ]
            },
            {
              title: '辅导结果',
              items: [
                {
                  name: '申请季offer',
                  name2: '',
                  url: ''
                },
                {
                  name: '背景提升offer',
                  name2: '',
                  url: ''
                },
                {
                  name: '成功案例',
                  name2: '',
                  url: ''
                }
              ]
            },
            {
              title: '留学干货',
              items: [
                {
                  name: '申请指南',
                  name2: '',
                  url: '/guide'
                },
                {
                  name: '专业介绍',
                  name2: '',
                  url: ''
                },
                {
                  name: '资料下载',
                  name2: '',
                  url: ''
                }
              ]
            }
          ]
        },
        {
          title: '本科服务介绍',
          url: '/graduate',
          menus: [
            {
              title: '本科项目',
              items: [
                {
                  name: '梦校计划',
                  name2: '（申请季）',
                  url: '/dream'
                },
                {
                  name: '种子计划',
                  name2: '（大一至大三）',
                  url: '/seed'
                },
                {
                  name: '能力提升',
                  name2: '',
                  url: ''
                }
              ]
            },
            {
              title: '师资团队',
              items: [
                // {
                //   name: '导师介绍',
                //   name2: '',
                //   url: ''
                // },
                {
                  name: '四位一体',
                  name2: '',
                  url: ''
                }
              ]
            },
            {
              title: '辅导结果',
              items: [
                {
                  name: '申请季offer',
                  name2: '',
                  url: ''
                },
                {
                  name: '背景提升offer',
                  name2: '',
                  url: ''
                },
                {
                  name: '成功案例',
                  name2: '',
                  url: ''
                }
              ]
            },
            {
              title: '留学干货',
              items: [
                {
                  name: '申请指南',
                  name2: '',
                  url: '/guide'
                },
                {
                  name: '专业介绍',
                  name2: '',
                  url: ''
                },
                {
                  name: '资料下载',
                  name2: '',
                  url: ''
                }
              ]
            }
          ]
        },
        {
          title: '研究生服务介绍',
          url: '/graduate',
          menus: [
            {
              title: '辅导项目',
              items: [
                {
                  name: '梦校计划',
                  name2: '（申请季）',
                  url: '/dream'
                },
                {
                  name: '种子计划',
                  name2: '（大一至大三）',
                  url: '/seed'
                },
                {
                  name: '能力提升',
                  name2: '',
                  url: '/ability'
                },
                {
                  name: '核桃英语',
                  name2: '',
                  url: '/walnut'
                }
              ]
            },
            {
              title: '师资团队',
              items: [
                // {
                //   name: '导师介绍',
                //   name2: '',
                //   url: '/teachers'
                // },
                {
                  name: '四位一体',
                  name2: '',
                  url: '/four_to_one'
                }
              ]
            },
            {
              title: '辅导结果',
              items: [
                {
                  name: '申请季offer',
                  name2: '',
                  url: '/offers'
                },
                {
                  name: '背景提升offer',
                  name2: '',
                  url: '/bg_promote'
                },
                {
                  name: '学员故事',
                  name2: '',
                  url: '/story'
                }
              ]
            },
            {
              title: '留学干货',
              items: [
                {
                  name: '申请指南',
                  name2: '',
                  url: '/guide'
                },
                {
                  name: '专业介绍',
                  name2: '',
                  url: '/major'
                },
                {
                  name: '资料下载',
                  name2: '',
                  url: '/material'
                }
              ]
            }
          ]
        }
      ],
      selectedCity: {},
      current: 0,
      showMenus: false,
      currentType: '99',
      selectedMenu: {},
      otherContact1: '',
      otherContact2: '',
      otherContact3: '',
      isMobile: Common.isMobile,
      lastScrollTop: 0,
      showZindex: false,
      old: this.$route.query.old,
      showLoginDialog: false
    }
  },
  components: {
    Group,
    Cell,
    Badge,
    Drawer,
    XHeader
  },
  created () {
    console.log(this.$route.query)
    console.log(this.old)
    this.otherContact1 = require('./assets/img/home/foot/otherContact1.png')
    this.otherContact2 = require('./assets/img/home/foot/otherContact2.png')
    this.otherContact3 = require('./assets/img/home/foot/otherContact3.png')
    // if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
    //   this.isMobile = true
    // } else {
    //   this.isMobile = false
    // }
  },
  mounted () {
    this.$nextTick(function () {
      this.selectedCity = this.cities[0]
    })

    // 监听页面滚动条
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    clearAll () {
      // this.showMenus = false
    },
    addClass: function (index) {
      this.current = index
      this.selectedCity = this.cities[index]
    },
    changeMenu (index) {
      this.currentType = index
      this.showMenus = true
      this.selectedMenu = this.menus[index]
    },
    outMenu () {
      this.showMenus = false
      this.currentType = '99'
    },
    goUrl (url) {
      this.showMenus = false
      this.$router.push({
        path: url
      })
    },

    handleScroll () {
      $(window).scroll(function () {
        var st = $(this).scrollTop()
        if (st > this.lastScrollTop) {
          // downscroll code
          $('#contact-info').removeClass('contact-info-fadeout')
          $('#contact-info').css('display', 'block')
        } else if (st < this.lastScrollTop) {
          // upscroll code
          $('#contact-info').addClass('contact-info-fadeout')
          // $('#contact-info').css('display', 'none')
        }
        this.lastScrollTop = st
      })
    },

    showLogin () {
      this.showLoginDialog = true
    }
  },
  watch: {
    isshow (newVla, oldVal) {
      let that = this
      if (newVla) {
        that.showZindex = true
      } else {
        setTimeout(() => {
          that.showZindex = false
        }, 500)
      }
    }
  }
}
</script>

<style lang="less">
#app {
  font-family: 'SourceHanSansCN', 'Avenir', Helvetica, Arial, sans-serif;
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
  // min-width: 1200px;
  font-family: SourceHanSansCN;
}

.left-arrow {
  width: 14px;
  height: 23px;
  background-image: url('assets/img/home/left-arrow.png');
  background-repeat: no-repeat;
  background-size: cover;
  display: block;
  cursor: pointer;
}

.right-arrow {
  width: 14px;
  height: 23px;
  background-image: url('assets/img/home/right-arrow.png');
  background-repeat: no-repeat;
  background-size: cover;
  display: block;
  cursor: pointer;
}

.left-arrow-circule {
  background-image: url('assets/img/ability/left-arrow-circule.png') !important;
  width: 56px !important;
  height: 56px !important;
  left: -76px !important;
}

.right-arrow-circule {
  background-image: url('assets/img/ability/right-arrow-circule.png') !important;
  width: 56px !important;
  height: 56px !important;
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

.ability-program-left-arrow {
  position: absolute;
  top: 35%;
  left: -58px;
}

.ability-program-right-arrow {
  position: absolute;
  top: 35%;
  right: -58px;
}

.ability-program-left-arrow-mobile {
  position: absolute;
  top: 30%;
  left: -30px !important;
  width: 0.586667rem !important;
  height: 0.586667rem !important;
}

.ability-program-right-arrow-mobile {
  position: absolute;
  top: 30%;
  right: -30px !important;
  width: 0.586667rem !important;
  height: 0.586667rem !important;
}

@media not all and (min-resolution: 0.001dpcm) {
  body {
    letter-spacing: -1px;
  }
}

@font-face {
  font-family: 'Biko';
  src: url('./assets/font/biko.otf') format('truetype');
}

@font-face {
  font-family: 'SourceHanSansCN';
  src: url('./assets/font/SourceHanSansCN-Regular.ttf') format('truetype');
}

// @font-face {
//   font-family: 'SourceHanSansCN';
//   src: url('./SourceHanSansCN-Regular.eot');
//   src:
//     url('./SourceHanSansCN-Regular.eot?#font-spider') format('embedded-opentype'),
//     url('./SourceHanSansCN-Regular.woff') format('woff'),
//     url('./SourceHanSansCN-Regular.ttf') format('truetype'),
//     url('./SourceHanSansCN-Regular.svg') format('svg');
//   font-weight: normal;
//   font-style: normal;
// }

@font-face {
  font-family: 'Campton';
  src: url('./assets/font/campton.otf') format('truetype');
}

@font-face {
  font-family: 'CamptonLight';
  src: url('./assets/font/Campton-LightDEMO.otf') format('truetype');
}

// 老官网所需字体
@font-face {
  font-family: 'AvantGardeDemi';
  src: url('./assets/font/old/AvantGardeDemi.otf');
}

@font-face {
  font-family: 'Segoe-Print';
  src: url('./assets/font/old/segoe_print.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'BebasNeueRegular';
  src: url('./assets/font/old/bebasneue_regular-webfont.eot');
  src: url('./assets/font/old/bebasneue_regular-webfont.eot?#iefix')
      format('embedded-opentype'),
    url('./assets/font/old/bebasneue_regular-webfont.woff') format('woff'),
    url('./assets/font/old/bebasneue_regular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

.web-div {
  .head {
    height: 87px;
    width: 100%;
    // background:rgba(33,195,182,1);
    opacity: 1;
    text-align: center;
    // overflow: hidden;
    position: relative;
    background: rgba(31, 195, 181, 1);
    box-shadow: 5px 5px 7px rgba(0, 0, 0, 0.08);

    .logo {
      width: 113px;
      height: 36px;
      background-image: url('assets/img/head/logo.png');
      background-repeat: no-repeat;
      background-size: cover;
      margin: 38px 111px 0 0;
      display: inline-block;
      vertical-align: top;
    }

    ul {
      display: inline-block;
      width: auto;
      list-style-type: none;
      white-space: nowrap;
      overflow: hidden;
      padding: 0;
      height: 100%;

      li {
        float: left;
        padding: 0 18px;
        position: relative;
        overflow: hidden;
        font-size: 16px;
        font-family: SourceHanSansCN;
        font-weight: bold;
        line-height: 115px;
        color: rgba(255, 255, 255, 1);
        opacity: 1;
        height: 100%;
        cursor: pointer;

        a {
          display: block;
          color: white;
          text-align: center;
          // padding: 3px 0px;
          overflow: hidden;
          text-decoration: none;
          height: 100%;
        }
      }

      li:hover {
        background: #35a79e;
      }
    }

    .register {
      display: inline-block;
      width: 88px;
      height: 30px;
      background: rgba(255, 255, 255, 1);
      opacity: 1;
      border-radius: 17px;
      font-size: 13px;
      font-family: SourceHanSansCN;
      font-weight: bold;
      line-height: 30px;
      color: rgba(34, 195, 182, 1);
      opacity: 1;
      vertical-align: bottom;
      margin-left: 64px;
      position: relative;
      cursor: pointer;
      margin-bottom: 13px;

      a {
        text-decoration: none;
        color: rgba(34, 195, 182, 1);
      }

      .phone {
        width: 23px;
        height: 23px;
        position: absolute;
        top: -32px;
        left: 7px;
        background-image: url('assets/img/head/phone.png');
        background-repeat: no-repeat;
        background-size: cover;
      }

      .ercode {
        width: 23px;
        height: 23px;
        position: absolute;
        top: -32px;
        right: 7px;
        background-image: url('assets/img/head/ercode.png');
        background-repeat: no-repeat;
        background-size: cover;
      }

      .ercode-detail {
        background: chocolate;
      }
    }

    .fade-enter-active,
    .fade-leave-active {
      transition: opacity 0.5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
      opacity: 0;
    }

    .select-menu-colors {
      background: #35a79e;
    }

    .menus-div {
      width: 100%;
      height: 233px;
      background-color: #fff;
      z-index: 2;
      position: absolute;

      .menu-intro {
        font-size: 14px;
        font-family: SourceHanSansCN;
        font-weight: bold;
        line-height: 14px;
        color: rgba(57, 60, 61, 1);
        opacity: 1;
        margin-top: 48px;
        position: relative;
        display: inline-block;
        margin-right: 139px;
        cursor: pointer;

        .icon-new {
          width: 31px;
          height: 14px;
          position: absolute;
          top: -15px;
          right: -32px;
          background-image: url('assets/img/head/icon-new.png');
          background-repeat: no-repeat;
          background-size: cover;
        }
      }

      .menu-intro:hover {
        color: rgba(1, 183, 183, 1);
      }

      .each-menus {
        display: inline-block;
        width: 186px;
        text-align: left;
        vertical-align: top;
        margin-top: 36px;

        .each-menu-title {
          font-size: 14px;
          font-family: SourceHanSansCN;
          font-weight: bold;
          line-height: 14px;
          color: rgba(74, 74, 74, 1);
          opacity: 1;
          padding-bottom: 8px;
          border-bottom: 2px solid rgba(197, 197, 197, 1);
          width: 70px;
        }

        .menu {
          font-size: 14px;
          font-family: SourceHanSansCN;
          font-weight: 500;
          line-height: 20px;
          color: rgba(57, 60, 61, 1);
          opacity: 1;
          margin-top: 15px;
          cursor: pointer;
        }

        .menu:hover {
          color: rgba(1, 183, 183, 1);
        }

        .menu-name2 {
          color: #a2a2a2;
        }
      }
    }
  }

  .foot {
    padding: 0px 0 38px;
    background-color: #f1f7fa;
    text-align: center;
    background-image: url('assets/img/home/foot/foot-bg.png');
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 330px;

    .left-div {
      width: 627px;
      display: inline-block;
      margin-top: 48px;
      text-align: left;

      .link {
        font-size: 15px;
        font-family: SourceHanSansCN;
        font-weight: bold;
        line-height: 15px;
        color: rgba(255, 255, 255, 1);
        opacity: 1;

        .link-img {
          width: 13px;
          height: 20px;
          vertical-align: sub;
          margin-right: 5px;
        }
      }

      .heng-line {
        width: 31px;
        height: 0px;
        border: 1px solid rgba(1, 183, 183, 1);
        opacity: 1;
        margin: 8px 0 9px;
      }

      .link-item-div {
        list-style: none;
        text-align: left;
        padding: 0;
        margin-bottom: 46px;

        li {
          font-size: 14px;
          font-family: SourceHanSansCN;
          font-weight: 500;
          line-height: 14px;
          opacity: 1;
          margin-right: 38px;
          display: inline-block;
          color: #fff;

          a {
            text-decoration: none;
            color: #fff;
          }

          a:hover {
            color: rgba(1, 183, 183, 1);
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
          margin-right: 27px;
          display: inline-block;
          color: #fff;
          padding-bottom: 3px;
          margin-top: 3px;
          cursor: pointer;
        }

        .bg-colors {
          color: rgba(1, 183, 183, 1);
          border-bottom: 3px solid rgba(1, 183, 183, 1);
        }
      }

      .place {
        .text,
        .number {
          font-size: 14px;
          font-family: PingFangSC-Regular, Biko;
          font-weight: 400;
          line-height: 20px;
          color: rgba(255, 255, 255, 1);
          opacity: 1;
        }

        .place-line {
          width: 124px;
          height: 0px;
          border: 1px solid rgba(154, 154, 154, 1);
          opacity: 1;
          margin: 9px 0;
        }
      }
    }

    .middle-div {
      height: 237px;
      border: 1px solid rgba(255, 255, 255, 1);
      opacity: 1;
      display: inline-block;
      vertical-align: top;
      margin-top: 73px;
    }

    .right-div {
      margin: 32px 0 0 57px;
      display: inline-block;
      vertical-align: top;

      .contact {
        width: 300px;
        height: 122px;
        background: rgba(36, 195, 182, 0.83);
        border-radius: 13px;
        padding: 19px 0 0 38px;
        text-align: left;
        // background-image: url("assets/img/home/foot/contact-us.png");
        // background-repeat: no-repeat;
        // background-size: cover;

        .title {
          font-size: 15px;
          font-family: PingFang SC;
          font-weight: 600;
          line-height: 20px;
          color: rgba(255, 255, 255, 1);
          opacity: 1;
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
          font-size: 13px;
          font-family: SourceHanSansCN, Biko;
          font-weight: 400;
          line-height: 19px;
          color: rgba(255, 255, 255, 1);
          opacity: 1;

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
          font-size: 15px;
          font-family: PingFang SC;
          // font-weight:600;
          line-height: 15px;
          color: rgba(255, 255, 255, 1);
          opacity: 1;

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
            margin-right: 31px;
            font-size: 14px;
            font-family: SourceHanSansCN;
            font-weight: 500;
            line-height: 14px;
            color: rgba(255, 255, 255, 1);
            opacity: 1;
            text-align: center;

            img {
              width: 66px;
              height: 66px;
              margin-bottom: 9px;
            }
          }

          .each-code:last-child {
            margin-right: 0px;
          }
        }
      }

      .other-contact {
        width: 146px;
        height: 27px;
        background: rgba(36, 195, 182, 0.83);
        border-radius: 18px;
        margin-top: 20px;
        float: right;
        padding: 4px;

        .each-contact {
          width: 23px;
          height: 23px;
          background: rgba(34, 114, 119, 1);
          border-radius: 50%;
          opacity: 1;
          padding: 2px;
          display: inline-block;

          .each-img {
            width: 23px;
            height: 23px;
            background-repeat: no-repeat;
            background-size: cover;
          }
        }

        .left {
          float: left;
        }

        .right {
          float: right;
        }
      }
    }
  }

  .copy-right {
    padding: 31px 0 30px;
    background-color: #25c3b6;
    text-align: left;

    .content {
      width: 1100px;
      margin: 0 auto;

      .content-title {
        margin-bottom: 6px;
        font-size: 12px;
        font-family: SourceHanSansCN, Biko;
        font-weight: 500;
        line-height: 12px;
        color: rgba(255, 255, 255, 1);
        opacity: 1;
      }

      .content-title2 {
        span {
          margin-right: 38px;
          font-size: 12px;
          font-family: SourceHanSansCN, Biko;
          font-weight: 500;
          line-height: 12px;
          color: rgba(255, 255, 255, 1);
          opacity: 1;
        }
      }
    }
  }

  @keyframes popin {
    0% {
      right: -170px;
      bottom: -170px;
    }
    100% {
      right: 0px;
      bottom: 0px;
    }
  }

  @keyframes popout {
    0% {
      right: 0px;
      bottom: 0px;
    }
    100% {
      right: -170px;
      bottom: -170px;
    }
  }

  // 左下角二维码弹框
  .contact-info {
    display: none;
    z-index: 999;
    position: fixed;
    width: 170px;
    height: 170px;
    left: 0;
    bottom: 0;
    animation: popin 1s;
    .contact-circle {
      box-shadow: -2px -2px 14px #ccc;
      width: 140px;
      height: 140px;
      padding: 15px;
      border-radius: 50%;
      background-color: #56ccca;
      .circle-dot {
        padding: 5px;
        width: 126px;
        height: 126px;
        border-radius: 50%;
        border: 2px dashed white;
        background-color: #56ccca;
        font-size: 12px;
      }
    }
    .contact-square {
      left: 0;
      bottom: 0;
      position: absolute;
      width: 85px;
      height: 85px;
      background-color: #56ccca;
      .square-dot {
        margin-left: 15px;
        padding: 5px;
        width: 58px;
        height: 58px;
        border-bottom: 2px dashed white;
        border-left: 2px dashed white;
        background-color: #56ccca;
      }
    }

    .white {
      color: white;
    }

    .pull-right {
      float: right;
    }

    .size-s {
      font-size: 14px;
    }

    .black {
      color: #393c3d;
    }

    .size16 {
      font-size: 16px;
    }
  }

  .contact-info-fadeout {
    animation: popout 1s forwards;
  }

  #chatBtn {
    position: fixed;
    background-color: #19caa6;
    font-family: 'Helvetica Neue', Helvetica, 'Microsoft Yahei', Arial,
      sans-serif;
    font-size: 16px;
    right: 0;
    bottom: -48px;
    color: #fff;
    text-align: center;
    padding: 10px 0;
    cursor: pointer;
    z-index: 2147483645;
    width: 100%;
    box-sizing: content-box !important;
  }
}

.littleHeight {
  height: calc(100vh);
  overflow: hidden;
}

.mobile-div {
  // * { touch-action: none;touch-action: pan-y;touch-action: pan-x; }

  .head {
    height: 1.173333rem;
    text-align: left;

    .logo {
      width: 2.133333rem;
      height: 0.613333rem;
      margin-top: 0.293333rem;
      margin-left: 0.533333rem;
      background-image: url('assets/img/head/mobile/logo.png');
      background-repeat: no-repeat;
      background-size: cover;
      display: inline-block;
      vertical-align: top;
    }

    .my-drawer {
      .vux-drawer {
        font-family: SourceHanSansCN;
        font-size: 0.426667rem;
        color: #fff;
        position: absolute;
        z-index: 2500;
        font-weight: 500;
        line-height: 0.533333rem;

        .weui-cells__title {
          margin: 0.346667rem auto;
          color: #fff;
        }

        .btn2 {
          margin: 0.213333rem;
          text-align: right;
        }

        .slide {
          padding: 0 0.533333rem;
          overflow: hidden;
          max-height: 0;
          transition: max-height 0.5s cubic-bezier(0, 1, 0, 1) -0.1s;
          line-height: 1.013333rem;
        }

        .animate {
          max-height: 9999px;
          transition-timing-function: cubic-bezier(0.5, 0, 1, 0);
          transition-delay: 0s;
        }

        .vux-drawer-content {
          overflow-y: auto;
        }

        .vux-drawer-content.vux-drawer-active {
          width: 5.333333rem !important;
        }

        .title2 {
          font-size: 0.373333rem;
          line-height: 1.013333rem;
          background: #fff;
          color: #ecaa26;
          padding-left: 0.666667rem;
        }

        .title3 {
          font-size: 0.373333rem;
          line-height: 1.013333rem;
          background: #fff;
          color: #383b3c;
          padding-left: 0.933333rem;
        }

        // .weui-cell_access .weui-cell__ft:after {
        //   content: " ";
        //   display: inline-block;
        //   height: 6px;
        //   width: 6px;
        //   border-width: 2px 2px 0 0;
        //   border-color: #C8C8CD;
        //   border-style: solid;
        //   -webkit-transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
        //   transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
        //   position: relative;
        //   top: -2px;
        //   position: absolute;
        //   top: 50%;
        //   margin-top: -4px;
        //   right: 2px;
        // }
      }
    }

    .login {
      width: 0.746667rem;
      height: 0.746667rem;
      background-image: url('assets/img/head/login.png');
      background-repeat: no-repeat;
      background-size: cover;
      // margin: 38px 111px 0 0;
      display: inline-block;
      vertical-align: top;
      position: absolute;
      top: 0.213333rem;
      right: 1.3rem;
      z-index: 3000;
    }
  }

  .loginDialogDiv {
    .el-dialog__wrapper {
      z-index: 5000 !important;
    }

    .loginDialog {
      border-radius: 0.266667rem;

      .login2 {
        width: 3.893333rem;
        height: 3.893333rem;
        margin: 0 auto;
      }

      .text {
        font-family: SourceHanSansCN;
        font-size: 0.346667rem;
        line-height: 0.346667rem;
        margin: 0.48rem auto 0.213333rem;
        color: #313131;
      }

      .text2 {
        font-family: Campton;
        font-size: 0.373333rem;
        line-height: 0.346667rem;
        color: #22c3b6;
        margin-bottom: 1.066667rem;

        a {
          color: #22c3b6;
          text-decoration: none;
        }
      }
    }
  }

  .mask2 {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0.5;
    background: #000;
    z-index: 4000;
  }

  .foot {
    font-family: SourceHanSansCN;

    .foot-div {
      padding-top: 1.04rem;
      padding-left: 0.853333rem;
      padding-right: 1.6rem;
      background: #4a494e;
      text-align: left;
      padding-bottom: 1.173333rem;

      .title {
        font-size: 0;
        font-family: PingFang SC;
        font-weight: 600;
        line-height: 0.586667rem;
        color: #ffffff;
        opacity: 1;
        margin-bottom: 13px;

        .title-div {
          margin-bottom: 0.346667rem;

          .title-logo {
            width: 0.666667rem;
            height: 0.666667rem;
            margin-right: 0.266667rem;
            vertical-align: bottom;
          }

          .title-text {
            font-size: 0.426667rem;
            vertical-align: bottom;
          }
        }
      }

      .contact-us {
        .link-list {
          font-size: 0.32rem;
          margin-left: 0.986667rem;
          padding-bottom: 0.32rem;
          border-bottom: 1px solid #fff;
          margin-bottom: 0.373333rem;

          .link {
            margin-bottom: 0.213333rem;
            height: 0.4rem;

            .link-logo {
              width: 0.4rem;
              height: 0.4rem;
              margin-right: 0.133333rem;
            }

            span {
              font-family: Campton;
              line-height: 0.4rem;
              vertical-align: text-top;
            }
          }
        }
      }

      .care-us {
        .code-div {
          font-size: 0.32rem;
          margin-left: 0.986667rem;
          padding-bottom: 0.586667rem;
          border-bottom: 1px solid #fff;
          margin-bottom: 0.373333rem;

          .each-code {
            display: inline-block;
            margin-right: 0.56rem;
            font-family: SourceHanSansCN;
            font-weight: 500;
            color: rgba(255, 255, 255, 1);
            opacity: 1;
            text-align: center;

            img {
              width: 1.76rem;
              height: 1.76rem;
              margin-bottom: 0.16rem;
              display: block;
            }
          }

          .each-code:last-child {
            margin-right: 0px;
          }

          .other-contact {
            text-align: center;
            width: 2.266667rem;
            height: 0.506667rem;
            background: #e1e1e2;
            border-radius: 0.48rem;
            margin-top: 0.266667rem;
            padding: 0.053333rem;

            .each-contact {
              width: 0.4rem;
              height: 0.4rem;
              background: #4a494e;
              border-radius: 50%;
              opacity: 1;
              padding: 0.053333rem;
              display: inline-block;

              .each-img {
                width: 0.4rem;
                height: 0.4rem;
                background-repeat: no-repeat;
                background-size: cover;
              }
            }

            .left {
              float: left;
            }

            .right {
              float: right;
            }
          }
        }
      }

      .address {
        .address-div {
          font-size: 0.32rem;
          margin-left: 0.986667rem;
          padding-bottom: 0.586667rem;
          margin-bottom: 0.373333rem;

          .location-item-div {
            list-style: none;
            text-align: left;
            padding: 0;
            margin-bottom: 0.293333rem;

            li {
              font-size: 0.32rem;
              font-family: SourceHanSansCN;
              font-weight: 500;
              line-height: 0.373333rem;
              opacity: 1;
              margin-right: 0.266667rem;
              display: inline-block;
              color: #fff;
              padding-bottom: 0.08rem;
              margin-top: 0.08rem;
              cursor: pointer;
            }

            .bg-colors {
              color: rgba(1, 183, 183, 1);
              border-bottom: 3px solid rgba(1, 183, 183, 1);
            }
          }

          .place {
            .text,
            .number {
              font-size: 0.293333rem;
              font-family: PingFangSC-Regular, Biko;
              font-weight: 400;
              line-height: 20px;
              color: rgba(255, 255, 255, 1);
              opacity: 1;
            }

            .place-line {
              width: 2.24rem;
              height: 0px;
              border: 1px solid rgba(154, 154, 154, 1);
              opacity: 1;
              margin: 0.186667rem 0;
            }
          }
        }
      }
    }

    .copy-right {
      padding: 0.853333rem 0 0.746667rem;
      background-color: #25c3b6;
      text-align: center;

      .content {
        margin: 0 auto;

        .content-title {
          margin-bottom: 6px;
          font-size: 0.32rem;
          font-family: SourceHanSansCN, Biko;
          font-weight: 500;
          line-height: 12px;
          color: rgba(255, 255, 255, 1);
          opacity: 1;
        }

        .content-title2 {
          div {
            text-align: center;
            // margin-right: 38px;
            font-size: 0.32rem;
            font-family: SourceHanSansCN, Biko;
            font-weight: 500;
            line-height: 0.32rem;
            color: rgba(255, 255, 255, 1);
            opacity: 1;
          }

          .line1 {
            margin-top: 0.426667rem;
            margin-bottom: 0.213333rem;
          }
        }
      }
    }
  }
}
</style>
