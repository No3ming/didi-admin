<template>
  <container class="certification">
    <group title="备注1">
      <x-textarea :max="100" placeholder="提示" v-model="Remarks1"></x-textarea>
    </group>
    <group title="备注2">
      <x-textarea :max="100" placeholder="提示" v-model="Remarks2"></x-textarea>
    </group>
    <group-title>请按提示上传以下证件照片</group-title>
    <grid class="upload-box">
      <grid-item>
        <vue-core-image-upload
          :crop="false"
          @imageuploaded="zhenguploaded"
          @imagechanged="imagechanged"
          :max-file-size="5242880"
          url="" >
          <x-button type="primary">点击上传</x-button>
        </vue-core-image-upload>
      </grid-item>
    </grid>
    <grid>
      <grid-item v-for="(item, i) in imgList" :key="i">
        <img :src="item.src" alt=""/>
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
  import { CellBox, Divider, XInput, Group, GroupTitle, Grid, GridItem, XButton, Cell, Checklist, XAddress, XTextarea, Selector } from 'vux'

  export default {
    name: 'certification',
    data () {
      return {
        doType: 1,
        Remarks1: '',
        Remarks2: '',
        imgList: [],
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
