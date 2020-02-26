
<template>
  <div @mouseenter="enter" @mouseleave="leave" style="margin-left: 60px;width: 230px">
    <!--<div style="width: 3px;height: 30px;background-color: red;margin: 0 auto"></div>-->
    <p style="width: 230px;text-align: left;height: 30px;font-size: 16px;">{{title}}</p>
    <div style="float: left;width: 230px;background-color: #1CB28A;" v-if="isH">
      <button style="float: left;width: 100%;font-size: 14px;color: white" v-on:click="clickTodo()">查看页面</button>
      <!--<button style="float: left;width: 50%;font-size: 14px;color: white" v-on:click="clickDele()">删除页面</button>-->
    </div>


  </div>

</template>

<script>
  import VCanvas from '@/components/VCanvas'

  export default {
    name: 'VEditorModule',
    components:{
      VCanvas,
    },
    data(){
      return{
        isH:false
      }
    },
    props:{
      title:String
    },
    methods:{

      clickTodo (){

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
