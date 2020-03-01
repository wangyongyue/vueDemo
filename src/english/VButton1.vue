<template>
  <div>
    <input type="text" v-model="item.content" placeholder="请输入" style="border-style:solid;border-color:grey;border-width: 1px;border-radius: 5px; font-size:15px;width: 200px;float:left;height: 26px;margin-top: 10px;">
    <button class="vbutton" style="width: 50px;float: left;color: #1CB28A;font-size: 16px;text-align:center;margin-left: 10px;margin-top: 10px;" v-on:click="onClick()">{{title}}</button>
  </div>
</template>

<script>
  export default {
    name: 'VButton1',
    props:{
      title:String,
      item:{
        content:String,
      }
    },
    methods:{
      onClick (){
        this.$emit("onClick");
      }
    }
  }
</script>

<style scoped>
  .vbutton{
    float: right;
    margin: 0;
    padding: 0;
    background-color: transparent;
    border: 0px solid transparent;
    outline: none;
    float: left;
    font-size: x-large;

  }

</style>
