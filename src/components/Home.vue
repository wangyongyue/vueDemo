<template>
  <div>
    <div class="header">
      <div class="h_title">
        <button class="log_button" @click="menuClick(0)">vsk</button>
      </div>
      <div class="h_menu">
        <button :class="{ liBackground:changeLeftBackground == 1}" class="log_button1" @click="menuClick(1)">v_shop</button>
        <button :class="{ liBackground:changeLeftBackground == 2}" class="log_button2" @click="menuClick(2)">v_swift</button>
        <button :class="{ liBackground:changeLeftBackground == 3}" class="log_button3" @click="menuClick(3)">v_kotlin</button>
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
    color: #00FFFF;
    font-size: xx-large;

  }
  .log_button1{

    width: 100px;
    height: 100%;
    align-content: center;
    color: #00FFFF;


  }
  .log_button2{

    width: 100px;
    height: 100%;
    align-content: center;
    color: #00FFFF;


  }
  .log_button3{

    width: 100px;
    height: 100%;
    align-content: center;
    color: #00FFFF;


  }
  .liBackground {
    color: darkcyan;
  }

  .h_line{

    width: 1000px;
    height: 6px;
    background-color: #00FFFF;
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
      VShop
    },
    methods:{

      menuClick (n){

        this.changeLeftBackground = n;
        if (n == 0) {
          this.comName = "Tools"

        }else if (n == 1) {
          this.comName = "VShop"

        }else if (n == 2){

          this.comName = "VSwift"

        }else {
          this.comName = "VKotlin"

        }
      }

    }

  }
</script>
