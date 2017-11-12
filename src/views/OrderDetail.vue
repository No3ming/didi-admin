<template>
  <container class="order-detail">
    <group :title="'订单编号：' + order.order_no">
      <cell-box v-if="order.serve_type">
        <span class="title">需求项目：</span>
        <span class="word" v-html="order.serve_type"></span>
      </cell-box>
      <cell-box v-if="order.serve_city">
        <span class="title">需求城市：</span>
        <span class="word" v-html="order.serve_city"></span>
      </cell-box>
      <cell-box v-if="order.contacts">
        <span class="title">客户联系人：</span>
        <span class="word" v-html="order.contacts"></span>
      </cell-box>
      <cell-box v-if="order.phone">
        <span class="title">联系电话：</span>
        <span class="word" v-html="order.phone"></span>
      </cell-box>
      <cell-box v-if="order.company">
        <span class="title">公司名称：</span>
        <span class="word" v-html="order.company"></span>
      </cell-box>
      <cell-box v-if="order.commission_amount">
        <span class="title">服务佣金：</span>
        <span class="danger" v-html="order.commission_amount"></span>
      </cell-box>
      <cell-box v-if="order.rob_depost">
        <span class="title">抢单需支付保证金：</span>
        <span class="danger" type="warn" v-html="'¥' + order.rob_depost"></span>
      </cell-box>
      <cell-box></cell-box>
    </group>
    <div v-if="status === 1">
      <divider class="tips">温馨提示：支付保证金即可抢得此单<br/>保证金在成功完成订单后一起退还</divider>
      <group>
        <cell-box>
          <x-button type="primary" @click="onPay" v-html="order.rob_depost === 0? '立即抢单': '立即支付'"></x-button>
        </cell-box>
      </group>
    </div>
    <div v-if="status === 2">
      <group>
        <cell-box>
          <x-button plain type="primary" :link="'/order-detail-step?id=' + order.id">完成进度：<span v-html="order.status"></span></x-button>
        </cell-box>
        <cell-box>
          <x-button type="primary">完成订单</x-button>
        </cell-box>
      </group>
    </div>
    <div v-if="status === 3">
      <group>
        <cell-box>
          <x-button plain type="primary" @click.native="onFinished">订单已完成</x-button>
        </cell-box>
      </group>
    </div>
  </container>
</template>

<script>
  import Container from '../components/Container.vue'
  import { CellBox, Divider, Group, GroupTitle, XButton } from 'vux'
  import { mapGetters } from 'vuex'
  import api from '../api'

  export default {
    name: 'detail',
    data () {
      return {
        status: null,
        order: {}
      }
    },
    async mounted () {
      this.status = parseInt(this.$route.query['status'])
      this.order = this.nowOrder
    },
    methods: {
      async onPay () {
        if (this.order.rob_depost === 0) {
          const res = await api.robOrdering()
          if (res.code === 20000) {
            let self = this
            this.$vux.alert.show({
              title: '提示',
              content: '抢单成功！',
              onHide () {
                self.$router.replace('/progress')
              }
            })
          } else {
            this.$vux.alert.show({
              title: '提示',
              content: res.message
            })
          }
        } else {
          let self = this
          this.$vux.alert.show({
            title: '提示',
            content: '暂不支持支付！',
            onHide () {
              self.$router.replace('/canOrder')
            }
          })
        }
      },
      onFinished () {
        this.$router.replace('/completed')
      }
    },
    computed: {
      ...mapGetters([
        'nowOrder'
      ])
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
