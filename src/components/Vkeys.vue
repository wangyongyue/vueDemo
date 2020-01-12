<template>
  <div>
    <p style="text-align: left;font-size: larger;margin-left: 20px">{</p>
    <div v-for="item in keys" style="margin-left: 20px">
      <p style="width: 40px;float:left">key:</p><p style="float:left;width: 60px">{{item.key}}</p>
      <p style="width: 50px;float:left">value:</p><p style="float:left">{{item.value}}</p>
      <input type="text" v-model="item.value" placeholder="item.value" style="width: 100px;float:right;">
      <br>
    </div>
    <p style="text-align: left;font-size: larger;margin-left: 20px">}</p>
  </div>



</template>

<script>
  export default {
    name: 'Vkeys',
    data (){
      return{
        keys:[{key:"abc",value:"abc"}],

      }
    },
    props:{
      keys:Array
    },
  }
</script>

<style scoped>

</style>
