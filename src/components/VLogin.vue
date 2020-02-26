<template>

  <div>
    <div style="opacity:0.5;background-color: gray;z-index: 999;position: fixed;top:0;bottom: 0;left: 0;right: 0">
    </div>
    <div style="width: 400px;height: 200px;background-color: white; border-radius: 20px;margin: auto;z-index: 1001;position: absolute;top:0;bottom: 0;left: 0;right: 0">
      <div style="width: 300px;height: 200px;margin: 0 auto">
        <br>
        <p style="color: #1CB28A;font-size: larger">VSK</p>
        <br>
        <p style="width: 60px;float: left" >用户名:</p>
        <input v-model="item.userName" type="text" style="float: left;width: 200px;outline-style: none ; border: 1px solid #ccc; border-radius: 3px; padding: 3px 3px; font-size: 15px;"></input>
        <br>
        <br>
        <p style="width: 60px;float: left">密码:</p>
        <input v-model="item.password" type="password" style="float: left;width: 200px;outline-style: none ; border: 1px solid #ccc; border-radius: 3px; padding: 3px 3px; font-size: 15px;"></input>
        <br>
        <br>
        <button style="width: 100%;color: #1CB28A;font-size: large;text-align:center" @click="login()">登录</button>
      </div>
    </div>
  </div>


</template>

<script>
  export default {
    name: 'VLogin',
    methods :{
      login(){

        this.$emit("login")
      }
    },
    props:{
      item:{
        userName:String,
        password:String
      }

    },

  }
</script>

<style scoped>

</style>
