<template>
  <container class="order-detail">
    <checklist :title="'第一步: 请选择你能提供的服务（可多选）'" :label-position="labelPosition" :required="true" :options="commonList" v-model="checks" @on-change="change01"></checklist>
    <group>
      <cell-box>
        <x-button type="primary" :disabled="checks.length === 0" @click.native="next">下一步</x-button>
      </cell-box>
    </group>
  </container>
</template>

<script>
  import Container from '../components/Container.vue'
  import { CellBox, Divider, Group, GroupTitle, XButton, Checklist, XAddress, ChinaAddressV4Data } from 'vux'
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'detail',
    data () {
      return {
        labelPosition: '',
        commonList: [ '工商注册／变更', '记账报税', '只是产权注册' ],
        checks: [],
        value_0_1: [],
        addressData: ChinaAddressV4Data
      }
    },
    mounted () {
      this.checks = this.serviceList
    },
    methods: {
      next () {
        this.upServiceList(this.checks)
        this.$router.push('/registered/step2')
      },
      change01 (str) {
        console.log(str)
      },
      ...mapActions([
        'upServiceList'
      ])
    },
    computed: {
      ...mapGetters([
        'serviceList'
      ])
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
