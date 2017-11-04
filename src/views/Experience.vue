<template>
  <container class="experience">
    text
  </container>
</template>

<script>
  import Container from '../components/Container.vue'
  import { CellBox, Divider, XInput, Group, GroupTitle, XButton, Cell, Checklist, XAddress, XTextarea } from 'vux'

  export default {
    name: 'experience',
    data () {
      return {
        value: '',
        password: '',
        password1: ''
      }
    },
    methods: {
      next () {
        this.$router.push('/registered/step4')
      },
      logHide (str) {
        console.log(this.value)
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
      XAddress,
      XInput,
      XTextarea,
      Cell
    }
  }
</script>

<style lang="less">
  .experience {

  }
</style>
