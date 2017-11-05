<template>
  <container class="contain-nav canOrder">
    <div style="height:44px;">
      <grid class="order-header">
        <grid-item v-for="(item, index) in gridHeader" :key="index" class="header-item">
          <span class="grid-center info" v-html="item"></span>
        </grid-item>
      </grid>
    </div>
    <div>
      <div>待结算金额总额：<span v-html="total"></span></div>
      <order-item v-for="(item, index) in orders" :key="index" :order="item"></order-item>
    </div>
    <divider class="no-more">没有更多数据了</divider>
    <div>
      <group>
        <cell-box>
          <x-button type="primary" >立即提现</x-button>
        </cell-box>
      </group>
    </div>
  </container>
</template>

<script>
  import Container from '../components/Container.vue'
  import { Sticky, Group, CellBox, XButton, Grid, GridItem, Divider } from 'vux'
  import OrderItem from '../components/OrderItem.vue'

  export default {
    name: 'canOrder',
    data: () => {
      return {
        gridHeader: ['客户姓名', '项目', '佣金', '状态'],
        orders: [
          {id: 1, name: '张学友', type: '工商注册', price: 1000, status: 3},
          {id: 2, name: '张学友1', type: '工商服务', price: 1200, status: 4},
          {id: 2, name: '张学友1', type: '工商服务', price: 1200, status: 5}
        ],
        total: 10000
      }
    },
    components: {
      Container,
      Sticky,
      Grid,
      GridItem,
      OrderItem,
      Divider,
      Group,
      CellBox,
      XButton
    }
  }
</script>

<style lang="less">
  .canOrder {
    .order-header {
      background-color: #fff;
    }
    .header-item {
      padding: 0;
      font-size: 14px;
      color: #333;
      text-align: center;
      line-height: 32px;
    }
    .no-more {
      font-size: 10px;
      padding: 10px;
    }
  }
</style>
