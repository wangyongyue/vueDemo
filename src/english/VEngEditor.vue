<template>
  <div @mouseenter="enter" @mouseleave="leave">
    <p style="float: left;width: 100%;text-align: left;height: 30px;font-size: 16px;margin-left: 12px;margin-right: 12px">{{title}}</p>
    <div style="float: left;width: 100%;background-color: #1CB28A;" v-if="isH">
      <button style="float: left;width: 50%;font-size: 14px;color: white" v-on:click="clickTodo()">查看</button>
      <button style="float: left;width: 50%;font-size: 14px;color: white" v-on:click="clickDele()">删除</button>

    </div>

  </div>

</template>

<script>
  export default {
    name: 'VEngEditor',
    data(){
      return{
        isH:false
      }
    },
    props:{
      title:String,
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
