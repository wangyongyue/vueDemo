<template>
  <div>
    <div style="height: 40px;background-color: white;float: left;">
      <p style="text-align: left">{{info.title}}</p>
      <p style="text-align: left">{{info.source}}</p>

    </div>
    <div style="width: 40px;height: 40px;float: right;background-color: gainsboro">
      <img src="../assets/che2.jpg" width="40px" height="40px">
    </div>
    <div style="width: 100%;height: 10px;background-color: white;float: left"></div>
    <div style="width: 100%;height: 1px;background-color: gainsboro;float: left"></div>
    <div style="width: 100%;height: 10px;background-color: white;float: left"></div>

  </div>

</template>

<script>
  export default {
    name: 'Content102',
    props:{
      info:{
        title:String,
        source:String
      }
    }

  }
</script>

<style scoped>

</style>
