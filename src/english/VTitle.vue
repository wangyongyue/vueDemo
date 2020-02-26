<template>
  <div @mouseenter="enter" @mouseleave="leave" >
    <p style="font-size: 16px;color: black ;height: 30px;padding-top: 10px;float: left;width: 100%">{{title}}</p>
    <div style="float: right;width: 100%;background-color:  #1CB28A;padding-top: 0px;" v-if="isH">
      <button style="float: left;width: 50%;font-size: 14px;color: white" v-on:click="clickTodo()">编辑</button>
      <button style="float: left;width: 50%;font-size: 14px;color: white" v-on:click="clickDele()">删除</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'VTitle',
    props:{
      title:String,
    },
    data(){
      return{
        isH:false
      }
    },
    methods:{

      clickTodo () {

        this.$emit('clickTodo')
      },
      clickDele (){

        this.$emit('clickDele')

      },
      enter (){
        this.isH = true
      },
      leave (){
        this.isH = false

      }
    }
  }
</script>

<style scoped>

</style>
