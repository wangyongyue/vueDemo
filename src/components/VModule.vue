<template>
  <div style="width: 1000px;height: 1000px;background-color: white;margin: 0 auto">
    <div style="width: 200px;float: left;margin-left: 20px">
      <VMenu :title="menu1"></VMenu>
      <VEditor  v-for="(item,index) in modules" :title="item.title" v-on:clickTodo="clickPageModule(index)" v-on:clickEditor="clickEditorModule(index)" v-on:clickDele="clickDeleModule(index)"></VEditor>
      <button @click="moduleNewAdd" style="color: #1CB28A;width: 100%;text-align: center;font-size: 16px;margin-top: 20px">新增模块</button>

    </div>

    <div style="width: 400px;float: left;margin-left: 20px">
      <VMenu :title="menu2"></VMenu>
      <p style="margin-bottom: 20px;width: 80px;float: left;font-size: 16px">模块标题:</p>
      <input v-model="pageTitle"  type="text" style="width: 120px;float:left;"></input>
      <button @click="moduleClean" style="color: red;width: 60px;text-align: center;font-size: 16px;float: right">清除</button>
      <button @click="moduleSave" style="color: #1CB28A;width: 60px;text-align: center;font-size: 16px;float: right">保存</button>
      <div style="width: 530px;float:left;">
        <VEditorModule v-for="(item,index) in modulesEditor" :title="item.title" v-on:clickTodo="clickFlowPage(index)"  v-on:clickDele="clickDeleFlow(index)"></VEditorModule>
      </div>

    </div>

    <div style="width: 200px;float: left;margin-left: 20px">
      <VMenu :title="menu3"></VMenu>
      <VEditorPage  v-for="(item,index) in pages" :title="item.title" v-on:clickTodo="clickPage(index)" v-on:clickEditor="clickEditor(index)" v-on:clickDele="clickDele(index)" v-on:clickAdd="clickAdd(index)"></VEditorPage>
      <button @click="pageNewAdd" style="color: #1CB28A;width: 100%;text-align: center;font-size: 16px;margin-top: 20px">新增页面</button>
    </div>
    <button @click="loginout" style="width: 80px;float: left;margin-left: 20px;font-size: 14px;color: red">退出登录</button>

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



  export default {
    name: 'VModule',
    components: {
      VEditor,
      VLogin,
      VMenu,
      VAlert,
      VPage,
      VCanvas,
      VEditorPage,
      VEditorModule,
      VPreview

    },
    data() {
      return{

        infos:[
          {title:"数据数据s"},
          {title:"数据数据"},
          {title:"数据数据"},
          {title:"数据数据"},
          {title:"数据数据"},
          {title:"数据数据"},
        ],
        modules:[],
        modulesEditor:[],
        pages:[],
        isAlert:false,
        isLogin:true,
        isPage:false,
        isPreview:false,
        deleType:1,
        deleIndex:0,
        menu1:"模块列表",
        menu2:"模块编辑",
        menu3:"单页面列表",
        alertTitle:"确定删除页面吗？",
        loginItem:{
          password:"",
          userName:""
        },
        pageId:"",
        pageTitle:"",

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
      clickEditorModule (index){

        this.modulesEditor = []
        this.pageTitle = ""
        this.moduleId = 0

        this.requestModuleDetail(this.modules[index].id)

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

      clickDele (index){

        this.isAlert = true
        this.alertTitle = "确定删除页面吗？"
        this.deleType = 3
        this.deleIndex = index

      },

      clickEditor (index){

        var aid = this.pages[index].id
        this.$router.push({name:'VCode',params:{id:aid}})

      },
      pageNewAdd (){
        this.$router.push({name:'VCode'})

      },
      moduleSave (){

        this.requestModuleSave()

      },
      moduleClean (){

        this.modulesEditor = []

      },
      moduleNewAdd (){

        this.modulesEditor = []
        this.pageTitle = ""
        this.moduleId = 0

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
