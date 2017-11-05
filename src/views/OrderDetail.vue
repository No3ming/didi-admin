<template>
  <container class="order-detail">
    <group :title="'订单编号：201781231231'">
      <cell-box>
        <span class="title">需求项目：</span>
        <span class="word">工商注册</span>
      </cell-box>
      <cell-box>
        <span class="title">需求城市：</span>
        <span class="word" v-html="order.city"></span>
      </cell-box>
      <cell-box>
        <span class="title">客户联系人：</span>
        <span class="word" v-html="order.name"></span>
      </cell-box>
      <cell-box>
        <span class="title">公司名称：</span>
        <span class="word" v-html="order.company"></span>
      </cell-box>
      <cell-box>
        <span class="title">服务佣金：</span>
        <span class="danger" v-html="'¥' + order.servicePrice"></span>
      </cell-box>
      <cell-box>
        <span class="title">抢单需支付保证金：</span>
        <span class="danger" type="warn" v-html="'¥' + order.marginPrice"></span>
      </cell-box>
      <cell-box></cell-box>
    </group>
    <div v-if="order.status === 0">
      <divider class="tips">温馨提示：支付保证金即可抢得此单<br/>保证金在成功完成订单后一起退还</divider>
      <group>
        <cell-box>
          <x-button type="primary">立即支付</x-button>
        </cell-box>
      </group>
    </div>
    <div v-if="order.status === 1">
      <group>
        <cell-box>
          <x-button plain type="primary" :link="'/order-detail-step/' + order.id">完成进度：<span>0/3</span></x-button>
        </cell-box>
        <cell-box>
          <x-button type="primary">完成订单</x-button>
        </cell-box>
      </group>
    </div>
    <div v-if="order.status === 5">
      <group>
        <cell-box>
          <x-button plain type="primary" >订单已完成</x-button>
        </cell-box>
      </group>
    </div>
  </container>
</template>

<script>
  import Container from '../components/Container.vue'
  import { CellBox, Divider, Group, GroupTitle, XButton } from 'vux'

  export default {
    name: 'detail',
    data () {
      return {
        order: {
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
