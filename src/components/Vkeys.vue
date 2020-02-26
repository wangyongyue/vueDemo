<template>
  <div>
    <p style="text-align: left;font-size: larger;margin-left: 20px">{</p>

    <div v-for="(value,key) in item" style="margin-left: 20px">
      <p style="width: 40px;float:left">key:</p><p style="float:left;width: 60px">{{key}}</p>
      <p style="width: 50px;float:left">value:</p>
      <input type="text" v-model="item[key]" placeholder="请输入" style="width: 120px;float:left;">
      <br>
    </div>
    <p style="text-align: left;font-size: larger;margin-left: 20px">}</p>
  </div>

</template>

<script>
  export default {
    name: 'Vkeys',

    props:{
      item:Map
    },
  }
</script>

<style scoped>

</style>
