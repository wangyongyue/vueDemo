<template>
  <div style="width: 1000px;margin: 0 auto">
    <div class="com">
      <VMenu :title="menu1"></VMenu>
      <div style="height: 500px;overflow:scroll">
        <div class="code_com" v-for="(item,index) in comNames">
          <component class="code_component" :is="item" :info="infos[index]"></component>
          <button class="code_button" v-on:click="add(index)">add</button>
        </div>
      </div>

    </div>
    <div class="rong">
      <VMenu :title="menu2"></VMenu>
      <p style="margin-bottom: 20px;width: 50px;float: left">标题:</p>
      <input v-model="pageTitle"  type="text" style="width: 100px;float:left;"></input>

      <div style="width: 300px;float:left;height: 450px;overflow:scroll">
        <div class="code_rong" v-for="(item,index) in rongNames">
          <component class="code_component" :is="item" :info="infoModels[index]"></component>
          <button class="code_button_dele" v-on:click="deleteCom(index)">delete</button>
        </div>
      </div>

    </div>
    <div style="width: 350px;float: left;margin-left: 20px">
      <VMenu :title="menu3"></VMenu>
      <button v-on:click="creatCode" style="text-align:left;color: #1CB28A;font-size: 18px;margin-bottom: 10px;width: 100%" >完成</button>

      <div style="width: 100%;height: 450px;overflow:scroll;background-color: #f8f8f8">

        <div style="background-color: white;width: 400px;height: 100%;background-color: #f8f8f8">
          <!--<p style="text-align: left;font-size: larger">[</p>-->
          <Vkeys v-for="item in infoModels" :item="item"></Vkeys>
          <!--<p style="text-align: left;font-size: larger">]</p>-->

        </div>
      </div>

      <!--<div style="width: 400px;">-->
        <!--&lt;!&ndash;<div style="margin-top: 20px;width: 100%;height: 50px;background-color: white"><button v-on:click="creatCode" style="color: #1CB28A;font-size: xx-large">完成</button></div>&ndash;&gt;-->
        <!--&lt;!&ndash;<p style="float: bottom;text-align: left;margin-left: 20px">点击完成可生成二维码,使用手机APP扫描查看生成效果</p>&ndash;&gt;-->
        <!--&lt;!&ndash;<a href="https://testflight.apple.com/join/KDQROpFU" target="_blank" style="text-align: right">手机APP下载地址复制链接Safari</a>&ndash;&gt;-->
        <!--&lt;!&ndash;<div style="width: 500px;float: right;height: 10px"></div>&ndash;&gt;-->
        <!--&lt;!&ndash;<div id="qrcode" ref="qrcode"></div>&ndash;&gt;-->
        <!--&lt;!&ndash;<div style="height: 60px;" ></div>&ndash;&gt;-->

      <!--</div>-->

    </div>

  </div>

</template>

<script>
  import QRCode from 'qrcodejs2'
  import VTest from '@/components/VTest'
  import Content101 from '@/Contents/Content101'
  import Content102 from '@/Contents/Content102'
  import Content103 from '@/Contents/Content103'
  import Content104 from '@/Contents/Content104'
  import Content105 from '@/Contents/Content105'
  import Content106 from '@/Contents/Content106'
  import Content107 from '@/Contents/Content107'
  import Content108 from '@/Contents/Content108'
  import Vkeys from '@/components/Vkeys'
  import VMenu from '@/components/VMenu'


  export default {
    name: 'VCode',
    components: {
      Vkeys,
      VTest,
      Content101,
      Content102,
      Content103,
      Content104,
      Content105,
      Content106,
      Content107,
      Content108,
      VMenu,

    },

    data() {
      return{
        comNames:["Content101","Content102","Content103","Content104","Content105","Content106","Content107"],
        rongNames:[],
        conStrings:"",
        infos:[
          {title:"数据数据",source:"数据数据"},
          {title:"数据数据",source:"数据数据"},
          {title:"数据数据",source:"数据数据"},
          {title:"数据数据",source:"数据数据",subTitle:"数据数据"},
          {title:"数据数据",source:"数据数据"},
          {title:"数据数据",source:"数据数据"},
          {title:"数据数据"},
        ],
        infoModels:[],
        menu1:"组件样式",
        menu2:"编辑单页样式",
        menu3:"下方可以编辑内容",
        pageTitle:"",

      }
    },
    mounted () {

      if (this.$route.params['id'] != null){

        var params = new URLSearchParams()
        params.append('token', this.$cookies.get('token'))
        params.append('id', this.$route.params['id'])

        this.$axios
          .post('/getPageDetails', params)
          .then(response => {
            var data = response['data']
            if (data['code'] == 1000) {
              var list = data["data"]
              this.pages = [];
              var list = data["data"]
              if (list.length == 1){
                this.pageTitle = list[0]["name"]

                var par = JSON.parse(list[0]["page"])
                this.rongNames = par["dataModel"]
                this.infoModels = par["data"]
              }

            }

          })
          .catch(function (error) {
            alert(error)
          })
      }


    },

    methods: {

      atodo (){
        alert('todo')
      },

      creatCode (){

        this.conStrings  = ""
        for (let index in this.rongNames){

            if (this.conStrings.length == 0){
              this.conStrings = this.rongNames[index]
            }else {
              this.conStrings = this.conStrings + "," + this.rongNames[index]
            }

        }

        let confData = {
          "data":this.infoModels,
          "dataModel":this.rongNames,

        }

        // alert(JSON.stringify(confData))

        this.conStrings = JSON.stringify(confData)

        var params = new URLSearchParams()
        params.append('token', this.$cookies.get('token'))
        params.append('page', this.conStrings)
        params.append('name', this.pageTitle)
        if (this.$route.params['id'] != null){
          params.append('id',this.$route.params['id'])

        }else {
          params.append('id',0)

        }

        this.$axios
          .post('/updatePage', params)
          .then(response => {
            var data = response['data']
            if (data['code'] == 1000) {
              alert("成功")
              this.$router.go(-1)
            }else {
              alert(data['message'])
            }

          })
          .catch(function (error) {
            alert(error)
          })


        // document.getElementById("qrcode").innerHTML = "";
        //
        // let qrCode = new QRCode('qrcode', {
        //   width: 150,//二维码宽度，单位像素
        //   height: 150,//二维码高度，单位像素
        //   text: this.conStrings, //二维码中的内容
        //   colorDark : '#000000',//前景色
        //   colorLight : '#ffffff',//背景色
        //   correctLevel : QRCode.CorrectLevel.H //容错级别，
        // })




      },
      add (index) {

        this.rongNames.push(this.comNames[index])
        this.infoModels.push(componentModel()[index])

      },
      deleteCom (index) {

        this.rongNames.splice(index, 1);
        this.infoModels.splice(index,1)


      }
    }
  }
  function componentModel () {


    let model = [
      {title:"数据数据",source:"数据数据"},
      {title:"数据数据",source:"数据数据"},
      {title:"数据数据",source:"数据数据"},
      {title:"数据数据",source:"数据数据",subTitle:"数据数据"},
      {title:"数据数据",source:"数据数据"},
      {title:"数据数据",source:"数据数据"},
      {title:"数据数据"},
    ]
    return model

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
  .rong{
    width: 300px;
    height: 667px;
    float: left;
    margin-left: 20px
  }
  textarea{

    border: none;
    resize: none;
    cursor: pointer;

  }

  .code_rong{
    width: 270px;
    float: left;

  }
  .com{
    width: 300px;
    height: 750px;
    float: left;
  }
  .code_com{
    width: 270px;
    float: left;

  }


  .code_component{

    width: 240px;
    float: left;
  }

  .code_button{
    width: 30px;
    height: 10px;
    float: left;
    font-size: small;


  }
  .code_button_dele{

    width: 20px;
    height: 10px;
    float: left;
    color: red;
    font-size: small;
    margin-left: 10px;
  }
  p{
    font-size: small;
  }

</style>
