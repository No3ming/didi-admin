<template>
  <container class="order-detail">
    <group :title="'订单编号：201781231231'">
      <cell-box>
        <span class="title">需求项目：</span>
        <span class="word">工商注册</span>
      </cell-box>
      <cell-box>
        <span class="title">需求城市：</span>
        <span class="word">深圳</span>
      </cell-box>
      <cell-box>
        <span class="title">客户联系人：</span>
        <span class="word">123123345123</span>
      </cell-box>
      <cell-box>
        <span class="title">公司名称：</span>
        <span class="word">神奇有限公司</span>
      </cell-box>
      <cell-box>
        <span class="title">服务佣金：</span>
        <span class="danger">¥123</span>
      </cell-box>
      <cell-box>
        <span class="title">抢单需支付保证金：</span>
        <span class="danger" type="warn">¥123123123</span>
      </cell-box>
      <cell-box></cell-box>
    </group>
    <divider class="tips">温馨提示：支付保证金即可抢得此单<br/>保证金在成功完成订单后一起退还</divider>
    <x-button type="primary">确定</x-button>
  </container>
</template>

<script>
  import Container from '../components/Container.vue'
  import { CellBox, Divider, Group, GroupTitle, XButton } from 'vux'

  export default {
    name: 'detail',
    data () {
      return {
      }
    },
    components: {
      Container,
      CellBox,
      Divider,
      Group,
      GroupTitle,
      XButton
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
