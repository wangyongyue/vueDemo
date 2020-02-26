<template>
  <div>
    <div style="width: 500px;height: 200px;float:left">
      <br>
      <br>
      <br>
      <p style="font-size: larger;width: 300px;margin:0 auto">组件化架构，轻松点击即可完成快速设计原型，同步APP查看实际效果。
      </p>
      <br>
      <p style="font-size:large;width: 300px;margin:0 auto">提供体验账号：test， 密码：123456</p>
      <br>
      <button style="font-size: larger;color: #1CB28A;float: right;padding-right: 100px" @click="tap()">快速体验</button>
      <br>
      <br>

      <a href="https://testflight.apple.com/join/KDQROpFU" target="_blank" style="text-align: center;margin-left: 30px">示例程序请使用测试程序 TaskFlow,点击链接复制到Safari</a>

      <br>
      <br>
      <button style="font-size: 13px;float: right" @click="onEnglish">英语题后台管理</button>
    </div>
    <div style="width: 500px;height: 600px;float:left">
      <br>
      <br>
      <br>
      <p style="font-size: larger;width: 300px;margin:0 auto">后端存储，实时保存，web端，移动端同步数据，完整支持</p>
      <br>
      <p style="font-size:large;width: 300px;margin:0 auto">现在数据内测阶段，索取新账号加微信</p>
      <br>
      <br>

      <img src="../assets/wyy.jpeg" width="209px" height="284px">

    </div>


  </div>

</template>

<script>
  import VModule from '@/components/VModule'

  export default {
    name: 'VTest',
    components:{
      VModule,

    },
    methods :{
      tap (){

        this.$router.push({path:'module'})

      },
      onEnglish (){

        this.$router.push({path:'english'})

      }
    }
  }
</script>

<style scoped>

</style>
