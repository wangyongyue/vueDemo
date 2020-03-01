
<template>
  <div style="width: 1000px;height: 1000px;background-color: white;margin: 0 auto">


    <!--<div style="width: auto;height: 100px;white-space: nowrap;overflow-x:auto;float:left;">-->
    <div style="displey:-webkit-flex; display: flex; -webkit-flex-flow:row nowrap; flex-flow:row nowrap; overflow-x: auto; list-style: none;">
      <div v-for="item in tableData" style="width: 300px;height: 1000px;float: left;margin-top: 50px;margin-right: 20px;">
        <VUnit :header="item.title" :tableStyle="item.style"></VUnit>
      </div>

    </div>


    <VLogin v-if="isLogin"  v-on:login="login" :item="loginItem"></VLogin>
    <VAlert v-on:cancle = "cancle" v-on:confirm = "confirm"  :title="alertTitle" v-if="isAlert"></VAlert>
    <VAlert v-on:cancle = "cancleSen" v-on:confirm = "confirmSen"  :title="alertTitle" v-if="isAlertSen"></VAlert>


  </div>

</template>

<script>
  import VEditor from '@/components/VEditor'
  import VLogin from '@/components/VLogin'
  import VMenu from '@/components/VMenu'
  import VAlert from '@/components/VAlert'
  import VPage from '@/components/VPage'
  import VCanvas from '@/components/VCanvas'

  import VEditorModule from '@/components/VEditorModule'
  import VEditorPage from '@/components/VEditorPage'
  import VPreview from '@/components/VPreview'

  import VHeader from '@/english/VHeader'
  import VTitle from '@/english/VTitle'
  import VInput from '@/english/VInput'
  import VButton1 from '@/english/VButton1'
  import VEngEditor from '@/english/VEngEditor'
  import VUnit from '@/english/VUnit'



  export default {
    name: 'VEnglish',
    components: {
      VEditor,
      VLogin,
      VMenu,
      VAlert,
      VPage,
      VCanvas,
      VEditorPage,
      VEditorModule,
      VPreview,
      VTitle,
      VHeader,
      VInput,
      VButton1,
      VEngEditor,
      VUnit

    },
    data() {
      return{

        tableData:[
          {title:"单词",style:"_w"},
          {title:"句子",style:"_s"},
          {title:"数学",style:"_m"},
          {title:"物理",style:"_p"},
          {title:"古诗",style:"_g"},
          {title:"地理",style:"_a"},

        ],


        isLogin:true,
        loginItem:{
          password:"",
          userName:""
        },

      }
    },
    mounted (){

      if (this.$cookies.get('token') != null){

        this.isLogin = false


      }else {

        this.isLogin = true

      }


    },
    methods :{

    }
  }
</script>

<style scoped>
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


</style>
