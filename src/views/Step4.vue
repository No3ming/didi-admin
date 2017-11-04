<template>
  <container class="order-detail">
    <group title="预览您即将提交的信息(如需修改信息请联系客服，电话189388318838)" label-width="7em" label-margin-right="0.5em" label-align="center">
      <x-input title="我的项目" text-align="right" v-model="value" placeholder="编辑"></x-input>
      <x-input title="我的服务的城市" text-align="right" v-model="value" placeholder="编辑"></x-input>
      <x-input title="我的姓名" text-align="right" v-model="value" placeholder="编辑"></x-input>
      <x-input title="我的手机" text-align="right" v-model="value" placeholder="编辑"></x-input>
      <x-input title="我的地址" text-align="right" v-model="value" placeholder="编辑"></x-input>
      <x-input title="我的支付宝账号" text-align="right" v-model="value" placeholder="编辑"></x-input>
      <cell title="我的证件照片" value="编辑" value-align="right" link="/registered/certification"></cell>
      <cell title="我的从业经历" value="编辑" value-align="right" @click.native="textStatus(true)"></cell>
      <x-input title="请设置一个登陆密码" type="password" placeholder="编辑" text-align="right" v-model="password"></x-input>
      <x-input title="请重复输入密码" type="password" placeholder="编辑" text-align="right" v-model="password1"></x-input>
    </group>
    <divider class="tips">以上信息用于证明您的服务能力和资格，<br/>请确保提供的信息真实有效，我们<br/>不会泄漏您的信息</divider>
    <group>
      <cell-box>
        <x-button type="primary" @click.native="onSure">确认提交</x-button>
      </cell-box>
    </group>
    <div class="text-box" v-show="isShow">
      <div class="text-header">
        <x-button type="primary" mini @click.native="textStatus(false)">保存</x-button>
      </div>
      <group class="text-container">
        <x-textarea ref="textarea" :rows="10" :max="200" :placeholder="'placeholder'" @on-focus="onEvent('focus')" @on-blur="onEvent('blur')"></x-textarea>
      </group>
      <grid class="clearfix">
        <grid-item class="xiangji-box">
          <vue-core-image-upload
            :crop="false"
            class="xiangji"
            @imageuploaded="miniUploaded"
            @imagechanged="miniChanged"
            :max-file-size="5242880"
            url="" >
            <img :src="xiangJi" class="icon-upload">
          </vue-core-image-upload>
        </grid-item>
        <grid-item class="miniImg-box">
          <img :src="nimiImg" alt="缩略图" class="miniImg"/>
        </grid-item>
      </grid>
    </div>
  </container>
</template>

<script>
  import Container from '../components/Container.vue'
  import VueCoreImageUpload from 'vue-core-image-upload'
  import xiangJi from '@/assets/xiangji.png'
  import { CellBox, Divider, XInput, Group, GroupTitle, Grid, GridItem, XButton, Cell, Checklist, XAddress, XTextarea } from 'vux'

  export default {
    name: 'detail',
    data () {
      return {
        value: '',
        password: '',
        password1: '',
        isShow: false,
        xiangJi: xiangJi,
        nimiImg: ''
      }
    },
    methods: {
      next () {
        this.$router.push('/registered/step4')
      },
      logHide (str) {
        console.log(this.value)
      },
      textStatus (status) {
        this.isShow = status
        if (status) {
          this.$refs.textarea.focus()
        }
      },
      onEvent (tips) {
        console.log(tips)
      },
      miniUploaded () {
        console.log(12)
      },
      miniChanged () {
        console.log(12)
      },
      onSure () {
        let self = this
        this.$vux.alert.show({
          title: '提交成功',
          content: '我们将在三个工作日内通过微信反馈认证结果，您也可以通过滴滴财务的"个人中心"菜单查询认证进度',
          onShow () {
            console.log('Plugin: I\'m showing')
          },
          onHide () {
            self.$router.push('/canOrder')
            console.log('Plugin: I\'m hiding')
          }
        })
      }
    },
    components: {
      Container,
      CellBox,
      Divider,
      Group,
      GroupTitle,
      XButton,
      Checklist,
      XAddress,
      XInput,
      XTextarea,
      Cell,
      VueCoreImageUpload,
      Grid,
      GridItem
    }
  }
</script>

<style lang="less">
  .order-detail {
    .order-cell {
      background-color: #fff;
    }

    .title {

    }

    .word {
      color: #666;
    }

    .weui-label, .vux-label {
      font-size: 14px;
    }

    .vux-label-desc {
      font-size: 8px;
      text-align: left;
      text-indent: 3em;
      display: block;
    }

    .label-2 {
      font-size: 8px;
    }
    .tips {
      line-height: 14px;
      font-size: 12px;
    }

    .text-box {
      position: fixed;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      background-color: #fff;
    }

    .text-header {
      line-height: 20px;
      text-align: right;
      padding: 10px;
    }

    .text-container {
      .weui-cells {
        margin-top: 0;
      }
    }

    .xiangji-box {
      padding: 5px;
      border: 0;
    }

    .xiangji {
      width: 50px;
      height: 30px;
      padding: 5px;
    }

    .icon-upload {
      height: 100%;
    }

    .miniImg-box {
      height: 50px;
      padding: 10px 5px;
      text-align: right;
      background-color: #fff;
    }

    .miniImg {
      display: inline-block;
      height: 30px;
      width: 30px;
      color: #000;
      line-height: 30px;
      border: 1px solid #ccc;
      border-radius: 3px;
      overflow: hidden;
      font-size: 10px;
      text-align: center;
    }
  }

</style>
