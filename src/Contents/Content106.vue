<template>
  <div>
    <div style="height: 20px;background-color: white">
      <p style="text-align: left">{{info.title}}</p>
    </div>
    <div style="height: 20px;background-color: white">
      <p style="text-align: left">{{info.source}}</p>
    </div>
    <div>
      <div style="width: 76px;height: 76px;float: left;background-color: gainsboro">
        <img src="../assets/che1.jpg" width="76px" height="76px">

      </div>
      <div style="width: 76px;height: 76px;float: left;background-color: gainsboro;margin-left: 6px;margin-right: 6px">
        <img src="../assets/che4.jpg" width="76px" height="76px">

      </div>
      <div style="width: 76px;height: 76px;float: right;background-color: gainsboro">
        <img src="../assets/che6.jpg" width="76px" height="76px">

      </div>
    </div>
    <div style="width: 100%;height: 10px;background-color: white;float: left"></div>
    <div style="width: 100%;height: 1px;background-color: gainsboro;float: left"></div>
    <div style="width: 100%;height: 10px;background-color: white;float: left"></div>
  </div>

</template>

<script>
  export default {
    name: 'Content106',
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
