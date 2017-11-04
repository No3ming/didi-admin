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
      <order-item v-for="(item, index) in orders" :key="index" :order="item"></order-item>
    </div>
    <divider class="no-more">已经没有更多数据了</divider>
  </container>
</template>

<script>
  import Container from '../components/Container.vue'
  import { Sticky, Grid, GridItem, Divider } from 'vux'
  import OrderItem from '../components/OrderItem.vue'

  export default {
    name: 'canOrder',
    data: () => {
      return {
        gridHeader: ['客户名字', '服务项目', '服务佣金', '订单状态'],
        orders: [
          {id: 1, name: '张学友', type: '工商注册', price: 1000, status: 0},
          {id: 2, name: '张学友1', type: '工商服务', price: 1200, status: 0}
        ]
      }
    },
    components: {
      Container,
      Sticky,
      Grid,
      GridItem,
      OrderItem,
      Divider
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
