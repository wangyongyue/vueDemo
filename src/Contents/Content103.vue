<template>
  <div>
    <div style="text-align: left">{{info.title}}</div>
    <div style="width: 40px;height: 40px;float: left;background-color: gainsboro">
      <img src="../assets/che3.jpg" width="40px" height="40px">

    </div>
    <div style="height: 40px;margin-left: 10px;background-color: white">
      <p style="text-align: left">{{info.source}}</p>
    </div>
    <div style="width: 100%;height: 10px;background-color: white"></div>
    <div style="width: 100%;height: 1px;background-color: gainsboro"></div>
    <div style="width: 100%;height: 10px;background-color: white"></div>

  </div>

</template>

<script>
  export default {
    name: 'Content103',
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
