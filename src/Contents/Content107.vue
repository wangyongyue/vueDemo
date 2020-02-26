<template>
  <div>

    <div style="height: 20px;background-color: white;margin-top: 5px;">
      <p style="text-align: left">{{info.title}}</p>
    </div>

    <div style="width: 100%;height: 10px;background-color: white"></div>
    <div style="width: 100%;height: 1px;background-color: gainsboro"></div>
    <div style="width: 100%;height: 10px;background-color: white"></div>

  </div>

</template>

<script>
  export default {
    name: 'Content107',
    props:{
      info:{
        title:String,
      }
    }

  }
</script>

<style scoped>

</style>

