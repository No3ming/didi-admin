<template>
  <grid class="order-item">
    <grid-item class="header-item">
      <span class="grid-center" v-html="order.name"></span>
    </grid-item>
    <grid-item  class="header-item">
      <span class="grid-center" v-html="order.type"></span>
    </grid-item>
    <grid-item  class="header-item">
      <span class="grid-center" v-html="order.price"></span>
    </grid-item>
    <grid-item  class="header-item">
      <router-link v-if="order.status === 0" class="grid-center success" :to="'/order/detail?id=' + order.id" >可以抢单</router-link>
      <router-link v-else="order.status === 1" class="grid-center success" :to="'/order/detail?id=' + order.id" v-html="order.progress"></router-link>
      <router-link v-if="order.status === 3" class="grid-center success" :to="'/order/detail?id=' + order.id" >不结算</router-link>
      <router-link v-if="order.status === 4" class="grid-center success" :to="'/order/detail?id=' + order.id" >待结算</router-link>
      <router-link v-if="order.status === 5" class="grid-center success" :to="'/order/detail?id=' + order.id" >已结算</router-link>

    </grid-item>
  </grid>
</template>

<script>
  import { Grid, GridItem } from 'vux'

  export default {
    name: 'orderItem',
    data () {
      return {

      }
    },
    props: {
      order: Object
    },
    components: {
      Grid,
      GridItem
    }
  }
</script>
<style lang="less">
  .order-item {
    background-color: #fff;
    .link {
      color: rgba(45, 168, 44, 0.67);
    }
  }

</style>
