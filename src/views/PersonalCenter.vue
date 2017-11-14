<template>
  <container class="order-detail">
    <group :title="'我的赚钱'">
      <cell title="账户金额(可提现)" :value="'¥' + amount" value-align="right" ></cell>
      <cell title="已结算金额" value="查看" value-align="right" link="/personal/amount/1"></cell>
      <cell title="已提现金额" value="查看" value-align="right" link="/personal/amount/2"></cell>
    </group>
    <group :title="'我的信息'">
      <cell title="我的信息(服务项目,城市,个人信息)" value="查看" value-align="right" link="/personal/my-info"></cell>
    </group>
  </container>
</template>

<script>
  import Container from '../components/Container.vue'
  import {CellBox, Divider, Group, GroupTitle, XButton, Cell} from 'vux'
  import api from '../api'

  export default {
    name: 'detail',
    data () {
      return {
        amount: null,
        frozen_amount: null,
        withdraw_amount: null
      }
    },
    async mounted () {
      const res = await api.getCenter()
      if (res.code === 20000) {
        this.amount = res.data.amount
        this.frozen_amount = res.data.frozen_amount
        this.withdraw_amount = res.data.withdraw_amount
      } else {
        let self = this
        this.$vux.alert.show({
          title: '提示',
          content: res.message,
          onHide () {
            if (res.code === 402) {
              self.$router.replace('/login')
            }
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

    .tips {
      line-height: 20px;
    }
  }

</style>
