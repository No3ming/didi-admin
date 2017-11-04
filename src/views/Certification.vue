<template>
  <container class="certification">
    <group title="请选择操作类型">
      <selector placeholder="请选择操作类型" v-model="doType" :options="doTypeList"></selector>
    </group>
    <group label-width="5em" label-margin-right="0.5em">
      <selector title="车牌类型" :options="careTypeList" v-model="careType"></selector>
      <grid>
        <grid-item class="care-item">
          <selector title="车牌号码" :options="careNumBerTypeList" v-model="careNumBerType"></selector>
        </grid-item>
        <grid-item class="care-item">
          <x-input v-model="careNumber" placeholder="请输入车牌号码"></x-input>
        </grid-item>
      </grid>
      <x-input title="车架号码" v-model="frameNumber" placeholder="请输入车架号后4位"></x-input>
      <x-input title="车主姓名" v-model="frameNumber" placeholder="请输入车主姓名"></x-input>
      <x-input title="身份证号" v-model="frameNumber" placeholder="(车主身份证)外籍人士请在证件号前加F"></x-input>
    </group>
    <group-title>请按提示上传以下证件照片</group-title>
    <grid class="upload-box">
      <grid-item label="证件正面">
        <vue-core-image-upload
          :crop="false"
          @imageuploaded="zhenguploaded"
          @imagechanged="imagechanged"
          :max-file-size="5242880"
          url="" >
          <img :src="uploadZheng?uploadZheng:zheng" class="icon-upload">
        </vue-core-image-upload>
      </grid-item>
      <grid-item label="证件反面">
        <vue-core-image-upload
          :crop="false"
          @imageuploaded="zhenguploaded"
          @imagechanged="imagechanged"
          :max-file-size="5242880"
          url="" >
        <img :src="uploadFan?uploadFan:fan" class="icon-upload">
        </vue-core-image-upload>
      </grid-item>
      <grid-item label="自拍照片">
        <vue-core-image-upload
          :crop="false"
          @imageuploaded="zhenguploaded"
          @imagechanged="imagechanged"
          :max-file-size="5242880"
          url="" >
          <img :src="uploadTou?uploadTou:touXiang" class="icon-upload">
        </vue-core-image-upload>
      </grid-item>
    </grid>
    <group>
      <cell-box>
        <x-button type="primary" @click.native="onSure">确认</x-button>
      </cell-box>
    </group>
  </container>
</template>

<script>
  import Container from '../components/Container.vue'
  import VueCoreImageUpload from 'vue-core-image-upload'
  import zheng from '@/assets/zheng.png'
  import fan from '@/assets/fan.png'
  import touXiang from '@/assets/touxiang.png'
  import { CellBox, Divider, XInput, Group, GroupTitle, Grid, GridItem, XButton, Cell, Checklist, XAddress, XTextarea, Selector } from 'vux'

  export default {
    name: 'certification',
    data () {
      return {
        doType: 1,
        doTypeList: [{key: 1, value: '绑定他人车辆'}, {key: 2, value: '绑定其他'}],
        careTypeList: [{key: 1, value: '蓝牌'}, {key: 2, value: '黄牌'}],
        careType: 1,
        careNumBerTypeList: [{key: 1, value: '粤'}, {key: 2, value: '贵'}],
        careNumBerType: 1,
        careNumber: '',
        frameNumber: '',
        zheng: zheng,
        fan: fan,
        touXiang: touXiang,
        uploadZheng: '',
        uploadFan: '',
        uploadTou: ''
      }
    },
    methods: {
      onSure () {
        console.log('确认返回')
        this.$router.back()
      },
      zhenguploaded (res) {
        this.$vux.loading.hide()
        console.log(res)
      },
      imagechanged () {
        this.$vux.loading.show({
          text: 'Loading'
        })
        console.log('loading')
      }
    },
    components: {
      Container, CellBox, Divider, XInput, Group, GroupTitle, Grid, GridItem, XButton, Cell, Checklist, XAddress, XTextarea, Selector, VueCoreImageUpload
    }
  }
</script>

<style lang="less">
  .certification {
    .care-item {
      padding: 0;
      color: #000;
    }

    .weui-label, .vux-label {
      font-size: 14px;
    }
    .weui-label {
      width: 6em;
    }

    .label-2 {
      font-size: 8px;
    }

    .weui-input {
      font-size: 14px;
      line-height: 14px;
    }
    .upload-box {
      background-color: #fff;
    }
    .icon-upload {
      display: block;
      width: 75px;
      height: 75px;
      margin: 0 auto;
    }
  }
</style>
