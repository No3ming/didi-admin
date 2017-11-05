<template>
  <container class="order-detail">
    <group :title="'我的赚钱'">
      <cell title="账户金额" value="我要提现" value-align="right" link="/personal/amount/1"></cell>
      <cell title="待结算金额" value="查看" value-align="right" link="/personal/amount/2"></cell>
      <cell title="已结算金额" value="查看" value-align="right" link="/personal/amount/3"></cell>
      <cell title="已提现金额" value="查看" value-align="right" link="/personal/amount/4"></cell>
    </group>
  </container>
</template>

<script>
  import Container from '../components/Container.vue'
  import { CellBox, Divider, Group, GroupTitle, XButton } from 'vux'

  export default {
    name: 'detail',
    data () {
      return {
        user: {
          id: 12,
          city: '深圳',
          type: '工商注册',
          name: '张学友',
          phone: 189123123123,
          company: '神奇公司',
          servicePrice: 12312,
          marginPrice: 100,
          status: 1
        }
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
