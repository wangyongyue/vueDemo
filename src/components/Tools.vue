<template>
  <div>
    <div class="jianjie">
      <H1 style="font-size: xx-large">
        <br>
        VSK
      </H1>
      <p style="color: #1CB28A;font-family: Helvetica Neue;font-size:x-large">
        <br>
        专注于移动应用    组件式框架    自动化开发
        <br>
        <br>
      </p>
      <p>针对产品，设计人员快速生成高保真Demo开发人员</p>
      <p>针对移动开发人员提供完善API服务，专注于业务流程，完美解耦，高度复用</p>

    </div>
    <div class="jianjieDetails">
      <div class="jianjie1">
        <p class="jtitle">简单易用</p>
        <p>
          <br>
          接入简单，API易用
        </p>
      </div>
      <div class="jianjie1">
        <p class="jtitle">动态组件</p>
        <p>
          <br>
          数据驱动，组件动态加载</p>
      </div>
      <div class="jianjie1">
        <p class="jtitle">开发效率</p>
        <p>
          <br>
          控制反转（IOC）,组件复用，开发效率增加至少35%</p>
      </div>
    </div>
    <div class="zanzhu">
      <div class="zanzhuline"></div>
      <p>赞助合作</p>
      <p></p>
    </div>
  </div>

</template>

<script>
  import VContent from '@/components/VContent'
  import VList from '@/components/VList'

  export default {
  name: 'Tools',
    components: {
      VList,
      VContent
    },
    data() {
     return{
       heros:['简介','简单易用','动态组件','开发效率'],
       categoryIndex: 0,
      models: [
        { title: '简介 这是一个非常牛逼的框架，小的们颤抖吧',subTitle: "这是一个非常牛逼的框架，小的们颤抖吧" },
      ]
     }
    },
    methods:{

      menuClick (n){

        this.categoryIndex = n
        if (n == 0){
          this.models = [
            { title: '简介 这是一个非常牛逼的框架，小的们颤抖吧',subTitle: "这是一个非常牛逼的框架，小的们颤抖吧" },
          ]

        }else if (n == 1){
          this.models = [
            { title: '原生框架封装，学习曲线非常低，0基础也可以快速上手',subTitle: "原生框架封装，学习曲线非常低，0基础也可以快速上手" },
          ]
        }else if (n == 2){
          this.models = [
            { title: '组件动态加载，绑定数据model,完美处理组件多个点击事件',subTitle: "组件动态加载，绑定数据model,完美处理组件多个点击事件" },

          ]
        }else{

          this.models = [
            { title: '通过组件动态加载，控制反转（IOC）完成完美复用，较之前效率提升近50%',subTitle: "通过组件动态加载，控制反转（IOC）完成完美复用，较之前效率提升近50%" },

          ]
        }

      }

    },
}
</script>

<style>

  p{
    list-style-type:none;
  }
  .jianjie{

    height: 400px;
    background-color: white;


  }
  .jianjieDetails{

    height: 200px;
    background-color: white;

  }
  .jianjie1{

    width: 330px;
    float: left;
  }
  .jtitle{

    color: #1CB28A;
  }
  .zanzhu{

    height: 200px;
    background-color: white;
  }
  .zanzhuline{

    height: 1px;
    background-color: gainsboro;

  }
  .t_list{
    background-color: white;
    width: 200px;
    height: 100%;
    float: left;
    align-self: flex-start;
  }
  .t_content{
    background-color: white;
    height: 100%;
    width: 800px;
    float: left;
    align-items: flex-start;
  }


</style>
