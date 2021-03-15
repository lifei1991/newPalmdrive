<template>
  <div>
    <drawer
      width="200px;"
      :show.sync="isshow2"
      show-mode="push"
      placement="left"
      :drawer-style="{'background-color':'#22C3B6', width: '200px',height:'auto'}">
      <!-- drawer content -->
      <div slot="drawer">
        <group title="Drawer demo(beta)" style="margin:13px auto;color:#fff">
          <cell title="Demo" link="/demo" value="演示" @click.native="drawerVisibility = false">
          </cell>
          <cell title="Github" link="http://github.com/airyland/vux" value="Star me" @click.native="drawerVisibility = false">
          </cell>
        </group>
      </div>
      <div slot="drawer">
        222222
      </div>
      <div class="btn2">
        <!-- <x-button @click.native="isshow2=!isshow2" type="primary" plain>{{this.isshow2?'<-':'->'}}</x-button> -->
        <span slot="overwrite-left" @click="isshow2 = !isshow2">
            <x-icon type="navicon" size="35" style="fill:#fff;background: #22C3B6;border-radius: 4px;"></x-icon>
          </span>
      </div>
    </drawer>
  </div>
</template>

<script>
import { XButton, Drawer, Group, Cell } from 'vux'
export default {
  components: {
    XButton,
    Drawer,
    Group,
    Cell
  },
  data () {
    return {
      isshow2: false
    }
  }
}
</script>
<style lang="less">
//   * { touch-action: none;touch-action: pan-y;touch-action: pan-x; }

  .vux-drawer {
      font-size: .32rem;
      color: #fff;

      .weui-cells__title {
          margin: .346667rem auto;
          color: #fff;
      }
  }
</style>
