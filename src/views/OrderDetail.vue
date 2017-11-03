<template>
  <container class="not-found">
    detail
  </container>
</template>

<script>
  import Container from '../components/Container.vue'

  export default {
    name: 'detail',
    data () {
      return {
      }
    },
    components: {
      Container
    }
  }
</script>

<style>
  .not-found {
    padding-top: 76px;
    text-align: center;
  }

  .not-found-tip {
    margin-top: 40px;
    margin-bottom: 12px;
    font-size: 18px;
    color: #767676;
  }
</style>
