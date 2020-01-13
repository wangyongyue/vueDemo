<template>
  <div>
    <div style="width: 100%;height: 80px;background-color: gainsboro">
      <img src="../assets/che5.jpg" width="100%" height="60px">

    </div>
    <div style="height: 20px;background-color: white">
      <p style="text-align: left">{{info.title}}</p>
    </div>
    <div style="height: 20px;background-color: white">
      <p style="text-align: left">{{info.source}}</p>
    </div>
    <div style="width: 100%;height: 10px;background-color: white"></div>
    <div style="width: 100%;height: 1px;background-color: gainsboro"></div>
    <div style="width: 100%;height: 10px;background-color: white"></div>

  </div>

</template>

<script>
  export default {
    name: 'Content105',
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
