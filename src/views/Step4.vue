<template>
  <container class="order-detail">
    <group title="第三步：请提供您的个人信息" label-width="7em" label-margin-right="0.5em" label-align="center">
      <x-input title="我的姓名<br/><span class='label-2'>(实名认证)</span>" v-model="value" placeholder="编辑"></x-input>
      <x-input title="我的手机<br/><span class='label-2'>(也是本平台登陆账号)</span>" v-model="value" placeholder="编辑"></x-input>
      <x-input title="我的地址<br/><span class='label-2'>(用于快递票据)</span>" v-model="value" placeholder="编辑"></x-input>
      <x-input title="我的收款账号<br/><span class='label-2'>(用于收取佣金)</span>" v-model="value" placeholder="编辑"></x-input>
      <x-input title="我的认证照片<br/><span class='label-2'>(用于资格认证)</span>" v-model="value" placeholder="编辑"></x-input>
      <x-input title="我的姓名<br/><span class='label-2'>(实名认证)</span>" v-model="value" placeholder="编辑"></x-input>
      <cell title="我的从业经历" inline-desc="(用于评估经验)" is-link value="编辑" value-align="left"></cell>
      <x-input title="请设置一个登陆密码" type="password" placeholder="编辑" v-model="password"></x-input>
      <x-input title="请重复输入密码" type="password" placeholder="编辑" v-model="password1"></x-input>
      <divider class="tips">以上信息用于证明您的服务能力和资格，<br/>请确保提供的信息 真实有效，我们<br/>不会泄漏您的信息</divider>
    </group>
    <group>
      <cell-box>
        <x-button type="primary" :disabled="value.length === 0" @click.native="next">下一步</x-button>
      </cell-box>
    </group>
  </container>
</template>

<script>
  import Container from '../components/Container.vue'
  import { CellBox, Divider, XInput, Group, GroupTitle, XButton, Cell, Checklist, XAddress, XTextarea } from 'vux'

  export default {
    name: 'detail',
    data () {
      return {
        value: '',
        password: '',
        password1: ''
      }
    },
    methods: {
      next () {
        this.$router.push('/registered/step4')
      },
      logHide (str) {
        console.log(this.value)
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
      Cell
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
  }

</style>
