<template>
  <container class="order-detail">
    <group title="第三步：请提供您的个人信息" label-width="5em" label-margin-right="2em" label-align="right">
      <x-input title="我的姓名(实名认证)" v-model="value" placeholder="编辑"></x-input>
      <x-input title="我的手机(也是本平台登陆账号)" v-model="value" placeholder="编辑"></x-input>
      <x-input title="我的地址(用于快递票据)" v-model="value" placeholder="编辑"></x-input>
      <x-input title="我的收款账号(用于收取佣金)" v-model="value" placeholder="编辑"></x-input>
      <x-input title="我的认证照片(用于资格认证)" v-model="value" placeholder="编辑"></x-input>
      <x-input title="我的姓名(实名认证)" v-model="value" placeholder="编辑"></x-input>
      <x-textarea title="我的从业经历(用于评估经验)" placeholder="编辑" :show-counter="false" :rows="3"></x-textarea>
      <x-input title="请设置一个登陆密码" type="password" placeholder="编辑" v-model="password"></x-input>
      <x-input title="请重复输入密码" type="password" placeholder="编辑" v-model="password1"></x-input>
    </group>
  </container>
</template>

<script>
  import Container from '../components/Container.vue'
  import { CellBox, Divider, XInput, Group, GroupTitle, XButton, Checklist, XAddress } from 'vux'

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
        this.$router.push('/registered/step3')
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
      XInput
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

    .tips {
      line-height: 20px;
    }
  }

</style>
