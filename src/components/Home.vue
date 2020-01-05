<template>
  <div>
    <div class="header">
      <div class="h_title">
        <button class="log_button" @click="menuClick(0)">VSK</button>
      </div>
      <div class="h_menu">
        <button :class="{ liBackground:changeLeftBackground == 1}" class="log_button1" @click="menuClick(1)">组件式开发</button>
        <button :class="{ liBackground:changeLeftBackground == 2}" class="log_button2" @click="menuClick(2)">VSwift</button>
        <button :class="{ liBackground:changeLeftBackground == 3}" class="log_button3" @click="menuClick(3)">VKotlin</button>
        <button :class="{ liBackground:changeLeftBackground == 4}" class="log_button3" @click="menuClick(4)">合作</button>

      </div>
    </div>
    <div class="h_line"></div>

    <div class="content">
      <component :is="comName"></component>
    </div>

  </div>


</template>

<style>
  *{
    margin: 0px;
    padding: 0px;
  }
  button{
    float: right;
    margin: 0;
    padding: 0;
    background-color: transparent;
    border: 0px solid transparent;
    outline: none;
    float: left;
    font-size: x-large;

  }
  .log_button{

    width: 100%;
    height: 100%;
    color: #1CB28A;
    font-size: xx-large;

  }
  .log_button1{

    width: 130px;
    height: 100%;
    align-content: center;
    color: #1CB28A;


  }
  .log_button2{

    width: 130px;
    height: 100%;
    align-content: center;
    color: #1CB28A;


  }
  .log_button3{

    width: 130px;
    height: 100%;
    align-content: center;
    color: #1CB28A;


  }
  .liBackground {
    color: #689c97;
  }

  .h_line{

    width: 1000px;
    height: 1px;
    background-color: #9bcfb8;
    margin: 0 auto;
  }

  .header{
    width: 1000px;
    height: 100px;
    background-color: white;
    margin: 0 auto;
  }
  .content{
    width: 1000px;
    background-color: white;
    margin: 10px auto;
  }
  .h_title{

    width: 100px;
    height: 100%;
    background-color: white;
    float: left;
  }
  .h_menu{

    width: 600px;
    height: 100%;
    background-color: white;
    float: right;
  }

</style>

<script>
  import Tools from '@/components/Tools'
  import VSwift from '@/components/VSwift'
  import VKotlin from '@/components/VKotlin'
  import VShop from '@/components/VShop'
  import VCode from '@/components/VCode'


  export default {
    components: {Tools},
    data () {
     return {
      comName: "Tools",
       changeLeftBackground:0
     }
    },
    components:{
      VSwift,
      VKotlin,
      Tools,
      VShop,
      VCode
    },
    methods:{

      menuClick (n){

        this.changeLeftBackground = n;
        if (n == 0) {
          this.comName = "Tools"

        }else if (n == 1) {
          this.comName = "VCode"

        }else if (n == 2){

          this.comName = "VSwift"

        }else if (n == 3){
          this.comName = "VKotlin"

        }else {
          this.comName = "VShop"

        }
      }

    }

  }
</script>
