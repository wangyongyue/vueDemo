<template>
  <div>
    <div style="width: 150px;height: 30px;margin: 0 auto;border-radius: 5px;text-align: center;padding-top: 5px;background-color: #1CB28A;color: white">{{title}}</div>
    <br>
    <div style="width: 100%;height: 1px;background-color: gainsboro;float: left;"></div>
    <br>
  </div>
</template>

<script>
  export default {
    name: 'VMenu',
    props:{
      title:String
    }
  }
</script>

<style scoped>

</style>
