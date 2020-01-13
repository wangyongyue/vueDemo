<template>
  <div>
    <div style="height: 20px;background-color: white">
      <p style="text-align: left">{{info.title}}</p>
    </div>
    <div style="height: 20px;background-color: white">
      <p style="text-align: left">{{info.source}}</p>
    </div>
    <div style="height: 20px;background-color: white">
      <p style="text-align: left">{{info.subTitle}}</p>
    </div>
    <div style="width: 100%;height: 10px;background-color: white"></div>
    <div style="width: 100%;height: 1px;background-color: gainsboro"></div>
    <div style="width: 100%;height: 10px;background-color: white"></div>

  </div>

</template>

<script>
  export default {
    name: 'Content104',
    props:{
      info:{
        title:String,
        source:String,
        subTitle:String
      }
    }

  }
</script>

<style scoped>

</style>
