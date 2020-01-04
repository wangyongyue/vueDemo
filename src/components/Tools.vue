<template>
  <div>
    <div class="t_list">
      <VList :heros="heros" v-on:menuClick="menuClick"></VList>
    </div>
    <div class="t_content">
      <VContent
      v-for="model in models"
      :info="model"
      ></VContent>
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
