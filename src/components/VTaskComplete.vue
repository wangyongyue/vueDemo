<template>
  <div @mouseenter="enter" @mouseleave="leave">
    <p style="float: left;width: 100%;text-align: left;height: 30px;font-size: 16px">{{title}}</p>
    <div style="float: left;width: 100%;background-color: #1CB28A;" v-if="isH">
      <button style="float: left;width: 100%;font-size: 14px;color: white" v-on:click="clickTodo()">查看</button>
    </div>


  </div>

</template>

<script>
  export default {
    name: 'VTaskComplete',
    data(){
      return{
        isH:false
      }
    },
    props:{
      title:String
    },
    methods:{

      clickTodo () {

        this.$emit('clickTodo')
      },
      clickDele (){

        this.$emit('clickDele')

      },
      clickEditor (){

        this.$emit('clickEditor')

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
