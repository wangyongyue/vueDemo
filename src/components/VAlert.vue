<template>
  <div>
    <div style="opacity:0.5;background-color: gray;z-index: 999;position: fixed;top:0;bottom: 0;left: 0;right: 0">
    </div>
    <div style="width: 200px;height: 100px;background-color: white; border-radius: 5px;margin: auto;z-index: 1000;position: absolute;top:0;bottom: 0;left: 0;right: 0">
      <p style="margin-top: 20px">{{title}}</p>
      <div style="margin-top: 20px"></div>
      <button v-on:click="cancle" style="margin-left: 10px;font-size:15px;color: white;background-color: #1CB28A;border-radius: 5px;width: 80px;height: 25px;float: left">取消</button>
      <button v-on:click="confirm" style="margin-right: 10px;font-size:15px;color: white;background-color: #1CB28A;border-radius: 5px;width: 80px;height: 25px;float: right">确定</button>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'VAlert',
    props:{
      title:String
    },
    methods:{

      confirm(){
        this.$emit("confirm")
      },
      cancle(){
        this.$emit("cancle")
      }

    }
  }
</script>

<style scoped>

</style>
