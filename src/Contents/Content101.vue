<template>
  <div >
    <!--<div style="width: 100%;float: left;height: 20px">-->
      <!--<button style="float: right;font-size: 14px"  v-on:click="todo()">dsd</button>-->
    <!--</div>-->
    <div style="width: 40px;height: 40px;float: left;background-color: gainsboro">
      <img src="../assets/che1.jpg" width="40px" height="40px">
    </div>
    <div style="height: 40px;margin-left: 10px;background-color: white">
      <p style="text-align: left">{{info.title}}</p>
      <p style="text-align: left">{{info.source}}</p>

    </div>
    <div style="width: 100%;height: 10px;background-color: white"></div>
    <div style="width: 100%;height: 1px;background-color: gainsboro"></div>
    <div style="width: 100%;height: 10px;background-color: white"></div>

  </div>
</template>

<script>
  export default {
    name: 'Content101',

    props:{
      info:{
        title:String,
        source:String
      }
    },
    methods:{
      todo (){
        this.$emit('todo')
      }
    }
  }
</script>

<style scoped>

</style>
