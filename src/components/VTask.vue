<template>
  <div style="width: 1000px;height: 1000px;background-color: white;margin: 0 auto">
    <div style="width: 300px;float: left;margin-left: 20px">
      <VMenu :title="menu1"></VMenu>
      <VTaskProgress  v-for="(item,index) in modules" :title="item.title" v-on:clickTodo="clickPageModule(index)" v-on:clickDele="clickDeleModule(index)"></VTaskProgress>

    </div>

    <div style="width: 300px;float: left;margin-left: 20px">
      <VMenu :title="menu2"></VMenu>
      <div style="width: 260px;">
        <p style="width: 80px;float: left;font-size: 16px">任务标题:</p>
        <input v-model="pageTitle"  type="text" style="width: 200px;float:left;"></input>
        <div style="width: 260px;height: 50px"></div>
        <p style="width: 80px;font-size: 16px">任务内容:</p>
        <input v-model="pageContent"  type="text" style="width: 200px;float:left;"></input>
      </div>
      <div style="width: 260px;height: 50px"></div>

      <button @click="moduleSave" style="background-color: white;border:0px;color: #1CB28A;width: 200px;text-align: right;font-size: 16px;">保存</button>

    </div>

    <div style="width: 200px;float: left;margin-left: 20px">
      <VMenu :title="menu3"></VMenu>
      <VTaskComplete  v-for="(item,index) in pages" :title="item.title" v-on:clickTodo="clickPage(index)"></VTaskComplete>
    </div>
    <button @click="loginout" style="background-color: white;border:0px;width: 80px;float: left;margin-left: 20px;font-size: 14px;color: red">退出登录</button>

    <VAlert v-on:cancle = "cancle" v-on:confirm = "confirm"  :title="alertTitle" v-if="isAlert"></VAlert>
    <VLogin v-if="isLogin"  v-on:login="login" :item="loginItem"></VLogin>
    <VPage :pid="pageId" v-if="isPage" v-on:pageClick="pageClick"></VPage>
    <VPreview :pid="previewId" v-if="isPreview" v-on:pageClick="previewClick"></VPreview>
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

  import VTaskProgress from '@/components/VTaskProgress'
  import VTaskComplete from '@/components/VTaskComplete'




  export default {
    name: 'VTask',
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
      VTaskComplete,
      VTaskProgress

    },
    data() {
      return{

        modules:[],
        modulesEditor:[],
        pages:[],
        isAlert:false,
        isLogin:true,
        isPage:false,
        isPreview:false,
        deleType:1,
        deleIndex:0,
        menu1:"任务列表",
        menu2:"添加任务",
        menu3:"任务记录",
        alertTitle:"确定删除页面吗？",
        loginItem:{
          password:"",
          userName:""
        },
        pageId:"",
        pageTitle:"",
        pageContent:"",

        moduleId:0,
        previewId:0,


      }
    },
    mounted (){

      if (this.$cookies.get('token') != null){

        this.isLogin = false

        this.requestPages()
        this.requestModules()

      }else {

        this.isLogin = true

      }


    },
    methods :{
      loginout (){

        this.$cookies.remove('token')
        this.$router.go(-1)
      },
      previewClick (){

        this.isPreview = false
      },

      pageClick(){

        this.isPage = false


      },
      confirm (){

        if (this.deleType == 3){

          var page = this.pages[this.deleIndex]
          var params = new URLSearchParams()
          params.append('token', this.$cookies.get('token'))
          params.append('id', page.id)

          this.$axios
            .post('/deletePage', params)
            .then(response => {
              var data = response['data']
              if (data['code'] == 1000) {
                this.pages.splice(this.deleIndex,1)
                this.isAlert = false

              }

            })
            .catch(function (error) {
              alert(error)
            })
        }else if (this.deleType == 2) {

          this.modulesEditor.splice(this.deleIndex,1)
          this.isAlert = false

        }else if (this.deleType == 1) {

          this.requestModuleDele(this.deleIndex)
        }

      },
      cancle (){

        this.isAlert = false
      },

      clickPageModule (index){

        this.previewId = this.modules[index].id
        this.isPreview = true

      },
      clickDeleModule (index){


        this.isAlert = true
        this.alertTitle = "确定要删除模块吗？"
        this.deleType = 1
        this.deleIndex = index

      },

      clickDeleFlow (index){

        this.isAlert = true
        this.alertTitle = "确定要删除流程吗？"
        this.deleType = 2
        this.deleIndex = index

      },


      clickAdd (index){

        this.modulesEditor.push(this.pages[index])

      },

      moduleSave (){

        this.requestModuleSave()

      },

      clickFlowPage (index){

        this.pageId =  this.modulesEditor[index].id.toString()

        this.isPage = true
      },
      clickPage (index){


        this.pageId =  this.pages[index].id.toString()

        this.isPage = true

      },

      login: function () {


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
              this.requestPages()
              this.requestModules()

            } else {
              alert('登录失败')

            }
          })
          .catch(function (error) {
            alert(error)
          })


      },
      requestPages(){

        var params = new URLSearchParams()
        params.append('token', this.$cookies.get('token'))
        this.$axios
          .post('/getPages', params)
          .then(response => {
            var data = response['data']
            if (data['code'] == 1000) {
              this.pages = [];
              var list = data["data"]
              for (var i = 0; i < list.length; i++) {

                this.pages.push({title:list[i].name,id:list[i].id})

              }
            }

          })
          .catch(function (error) {
            alert(error)
          })
      },
      requestModules(){

        var params = new URLSearchParams()
        params.append('token', this.$cookies.get('token'))
        this.$axios
          .post('/getModules', params)
          .then(response => {
            var data = response['data']
            if (data['code'] == 1000) {
              this.modules = [];
              var list = data["data"]
              for (var i = 0; i < list.length; i++) {

                this.modules.push({title:list[i].name,id:list[i].id})

              }
            }

          })
          .catch(function (error) {
            alert(error)
          })
      },
      requestModuleSave(){

        var params = new URLSearchParams()
        params.append('token', this.$cookies.get('token'))
        params.append('modular', JSON.stringify(this.modulesEditor))
        params.append('name', this.pageTitle)
        params.append('id',this.moduleId)

        this.$axios
          .post('/updateModules', params)
          .then(response => {
            var data = response['data']
            if (data['code'] == 1000) {
              this.modulesEditor = []
              this.pageTitle = ""
              this.moduleId = 0

              this.requestModules()


            }else {
              alert(data['message'])
            }

          })
          .catch(function (error) {
            alert(error)
          })
      },

      requestModuleDele(index){


        var params = new URLSearchParams()
        params.append('token', this.$cookies.get('token'))
        params.append('id',this.modules[index].id)

        this.$axios
          .post('/deleteModules', params)
          .then(response => {
            var data = response['data']
            if (data['code'] == 1000) {

              this.modules.splice(index,1)
              this.isAlert = false


            }else {
              alert("删除失败")
            }

          })
          .catch(function (error) {
            alert(error)
          })
      },
      requestModuleDetail(aid){

        var params = new URLSearchParams()
        params.append('token', this.$cookies.get('token'))
        params.append('id', aid)

        this.$axios
          .post('/getModuleDetails', params)
          .then(response => {
            var data = response['data']
            if (data['code'] == 1000) {

              var list = data["data"]
              if (list.length == 1){

                this.moduleId = list[0]["id"]
                this.pageTitle = list[0]["name"]
                this.modulesEditor = JSON.parse(list[0]["module"])

              }
            }

          })
          .catch(function (error) {
            alert(error)
          })
      },

    }
  }
</script>

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


</style>
