
<template>
  <div style="width: 1000px;height: 1000px;background-color: white;margin: 0 auto">
    <div style="width: 200px;float: left;margin-left: 0px">

      <button style="float: left;width: 200px;height: 30px;margin: 0 auto;border-radius: 5px;text-align: center;padding-top: 5px;background-color: #1CB28A;color: white;font-size: 16px">{{menu1}}</button>
      <VButton1 :title="Mnue1Button" :item="item1" v-on:onClick="addMnue1" ></VButton1>

    </div>
    <div style="width: 260px;float: left;margin-left: 20px">

      <button style="float: left;width: 200px;height: 30px;margin: 0 auto;border-radius: 5px;text-align: center;padding-top: 5px;background-color: #1CB28A;color: white;font-size: 16px">{{menu2}}</button>
      <VButton1 :title="Mnue2Button" :item="item2" v-on:onClick="addMnue2" ></VButton1>

    </div>
    <div style="width: 100%;height: 900px;float: left">

      <div style="border-style:solid;border-color:#1CB28A;border-width: 1px;border-radius: 15px; width: 200px;height: 700px;float: left;margin-top: 50px">

        <VEngEditor  v-for="(item,index) in infos" :title="item.title" v-on:clickTodo="clickTodo(index)" v-on:clickDele="clickDele(index)"></VEngEditor>

      </div>

      <div style="width: 20px;height: 900px;float: left"></div>

      <div style="border-style:solid;border-color:#1CB28A;border-width: 1px;border-radius: 15px; width: 200px;height: 700px;float: left;margin-top: 50px">

        <VEngEditor  v-for="(item,index) in infoSentences" :title="item.title" v-on:clickTodo="clickTodo1(index)" v-on:clickDele="clickDele1(index)"></VEngEditor>

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
      VEngEditor

    },
    data() {
      return{

        infos:[],
        infoSentences:[],

        isLogin:true,
        menu1:"单词",
        menu2:"句子",
        Mnue1Button:"添加",
        Mnue2Button:"添加",
        alertTitle:"确定删除页面吗？",
        loginItem:{
          password:"",
          userName:""
        },
        pageId:"",
        item1:{
          content:"",
        },
        item2:{
          content:"",
        },
        loginItem:{
          password:"",
          userName:""
        },
        isAlert:false,
        isAlertSen:false,
        alertTitle:"确定删除？",
        numberDele:0


      }
    },
    mounted (){

      if (this.$cookies.get('token') != null){

        this.isLogin = false

        this.requestWords()
        this.requestSentences()

      }else {

        this.isLogin = true

      }


    },
    methods :{
      cancle(){

        this.isAlert = false

      },
      confirm (){

        this.requestWordDele(this.numberDele)

      },
      cancleSen(){

        this.isAlertSen = false

      },
      confirmSen (){

        this.requestSentenceDele(this.numberDele)

      },
      addMnue1(){

        this.requestWordSave()

      },
      addMnue2 (){

        this.requestSentenceSave()

      },
      clickTodo (index){

        this.$router.push({name:'VWord',params:{id:this.infos[index].id,name:this.infos[index].title,style:"_w"}})

      },
      clickDele (index){

        this.numberDele = index
        this.isAlert = true


      },
      clickTodo1 (index){

        this.$router.push({name:'VWord',params:{id:this.infos[index].id,name:this.infos[index].title,style:"_s"}})

      },
      clickDele1 (index){

        this.numberDele = index
        this.isAlertSen = true

      },

      login: function () {


        if (this.loginItem.userName != "ww"){
          alert('用户名不对')
          return
        }
        var params = new URLSearchParams()
        params.append('name', this.loginItem.userName)
        params.append('password', this.loginItem.password)
        this.$axios
          .post('/login', params)
          .then(response => {
            var data = response['data']
            if (data['code'] == 1000) {

              this.$cookies.set('token', data['data'])
              this.isLogin = false
              this.requestWords()
              this.requestSentences()


            } else {
              alert('登录失败')

            }
          })
          .catch(function (error) {
            alert(error)
          })


      },
      requestWords(){

        var params = new URLSearchParams()
        params.append('style',"_w")

        this.$axios
          .post('/getWord', params)
          .then(response => {

            var data = response['data']
            if (data['code'] == 1000) {
              this.infos = [];
              var list = data["data"]
              for (var i = 0; i < list.length; i++) {

                this.infos.push({title:list[i].name,id:list[i].id})

              }
            }

          })
          .catch(function (error) {
            alert(error)
          })
      },

      requestWordSave(){

        var params = new URLSearchParams()
        params.append('id',0)
        params.append('name', this.item1.content)
        params.append('style',"_w")

        this.$axios
          .post('/updateWord', params)
          .then(response => {
            var data = response['data']
            if (data['code'] == 1000) {

              this.item1.content = ""

              this.requestWords()


            }else {
              alert(data['message'])
            }

          })
          .catch(function (error) {
            alert(error)
          })
      },

      requestWordDele(index){


        var params = new URLSearchParams()
        params.append('id',this.infos[index].id)
        params.append('style',"_w")

        this.$axios
          .post('/deleteWord', params)
          .then(response => {
            var data = response['data']
            if (data['code'] == 1000) {

              this.infos.splice(index,1)
              this.isAlert = false


            }else {
              alert("删除失败")
            }

          })
          .catch(function (error) {
            alert(error)
          })
      },
      requestSentences(){

        var params = new URLSearchParams()
        params.append('style',"_s")

        this.$axios
          .post('/getWord', params)
          .then(response => {

            var data = response['data']
            if (data['code'] == 1000) {
              this.infoSentences = [];
              var list = data["data"]
              for (var i = 0; i < list.length; i++) {

                this.infoSentences.push({title:list[i].name,id:list[i].id})

              }
            }


          })
          .catch(function (error) {
            alert(error)
          })
      },

      requestSentenceSave(){

        var params = new URLSearchParams()

        params.append('name', this.item2.content)
        params.append('id',0)
        params.append('style',"_s")

        this.$axios
          .post('/updateWord', params)
          .then(response => {
            var data = response['data']
            if (data['code'] == 1000) {
              this.item2.content = ""
              this.requestSentences()


            }else {
              alert(data['message'])
            }

          })
          .catch(function (error) {
            alert(error)
          })
      },

      requestSentenceDele(index){


        var params = new URLSearchParams()
        params.append('id',this.infoSentences[index].id)
        params.append('style',"_s")

        this.$axios
          .post('/deleteWord', params)
          .then(response => {
            var data = response['data']
            if (data['code'] == 1000) {

              this.infoSentences.splice(index,1)
              this.isAlertSen = false


            }else {
              alert("删除失败")
            }

          })
          .catch(function (error) {
            alert(error)
          })
      },


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
