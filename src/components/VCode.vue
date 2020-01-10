<template>
  <div>
    <div class="rong">
      <div class="code_rong" v-for="(item,index) in rongNames">
        <component class="code_component" :is="item"></component>
        <button class="code_button" v-on:click="deleteCom(index)">删除</button>
      </div>
    </div>
    <div class="com">
      <div class="code_com" v-for="(item,index) in comNames">
        <component class="code_component" :is="item"></component>
        <button class="code_button" v-on:click="add(index)">添加</button>
      </div>
    </div>

    <div style="width: 500px;float: right;">
      <div style="width: 375px;height: 50px;background-color: white"><button v-on:click="creatCode" style="color: #1CB28A;font-size: xx-large"><br>完成</button></div>
      <p style="float: bottom;text-align: left;margin-left: 20px">点击完成可生成二维码,使用手机APP扫描查看生成效果</p>
      <a href="https://testflight.apple.com/join/KDQROpFU" target="_blank" style="text-align: right">手机APP下载地址复制链接Safari</a>
      <div style="width: 500px;float: right;height: 10px"></div>
      <div id="qrcode" ref="qrcode"></div>
      <div style="height: 60px;" ></div>

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

  export default {
    name: 'VCode',
    components: {
      VTest,
      Content101,
      Content102,
      Content103,
      Content104,
      Content105,
      Content106,
      Content107,
      Content108,

    },
    data() {
      return{
        comNames:["Content101","Content102","Content103","Content104","Content105","Content106"],
        rongNames:[],
        conStrings:""
      }
    },
    methods: {

      creatCode (){

        this.conStrings  = ""
        for (let index in this.rongNames){

            if (this.conStrings.length == 0){
              this.conStrings = this.rongNames[index]
            }else {
              this.conStrings = this.conStrings + "," + this.rongNames[index]
            }

        }

        document.getElementById("qrcode").innerHTML = "";

        let qrCode = new QRCode('qrcode', {
          width: 100,//二维码宽度，单位像素
          height: 100,//二维码高度，单位像素
          text: this.conStrings, //二维码中的内容
          colorDark : '#000000',//前景色
          colorLight : '#ffffff',//背景色
          correctLevel : QRCode.CorrectLevel.H //容错级别，
        })

      },
      add (index) {

        this.rongNames.push(this.comNames[index])

      },
      deleteCom (index) {

        this.rongNames.splice(index, 1);

      }
    }
  }
</script>

<style>
  .rong{
    width: 500px;
    height: 667px;
    float: left;
  }
  .code_rong{
    width: 435px;
    float: left;
  }
  .com{
    width: 500px;
    height: 750px;
    float: left;
  }
  .code_com{
    width: 435px;
    float: left;
  }

  .code_component{

    width: 375px;
    float: left;
  }

  .code_button{
    width: 60px;
    height: 10px;
    float: left;

  }

</style>
