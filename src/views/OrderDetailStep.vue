<template>
  <container class="order-detail">
    <checklist :title="'订单编号： 12323123'" :label-position="labelPosition" :required="true" :options="commonList" v-model="checklist" @on-change="change01"></checklist>
    <group>
      <cell-box>
        <x-button type="primary" @click.native="onSubmit">提交进度</x-button>
      </cell-box>
    </group>
  </container>
</template>

<script>
  import Container from '../components/Container.vue'
  import { CellBox, Divider, Group, GroupTitle, XButton, Checklist, XAddress, ChinaAddressV4Data } from 'vux'

  export default {
    name: 'detail',
    data () {
      return {
        labelPosition: '',
        commonList: [
          {key: '1', value: '完成核名', inlineDesc: '2017.10.17 15：00'},
          {key: '2', value: '完成刻章', inlineDesc: '未完成'},
          {key: '3', value: '快递给客户', inlineDesc: '未完成'}
        ],
        checklist: [],
        value_0_1: [],
        addressData: ChinaAddressV4Data
      }
    },
    methods: {
      next () {
        this.$router.push('/registered/step2')
      },
      change01 (str) {
        console.log(str)
      },
      onSubmit () {
        let self = this
        this.$vux.alert.show({
          content: '提交成功',
          onHide () {
            self.$router.back()
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
      Checklist,
      XAddress
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
