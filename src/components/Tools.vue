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
    components: {VList, VContent},
    data() {
     return{
       heros:['雷恩加尔','安妮','沃里克','德莱厄斯','德莱厄斯','德莱厄斯','德莱厄斯'],
       categoryIndex: 0,
      models: [
        { title: 'My journey with Vue',subTitle: "sdfsdf" },
        { title: 'My journey with Vue',subTitle: "sdfsdf" },
        { title: 'My journey with Vue',subTitle: "sdfsdf" },
        { title: 'My journey with Vue',subTitle: "sdfsdf" },
        { title: 'My journey with Vue',subTitle: "sdfsdf" },


      ]
     }
    },
    methods:{
      menuClick (n){

        this.categoryIndex = n
        if (n == 0){
          this.models = [
            { title: 'My journey \n with Vue',subTitle: "sdfsdf" },
            { title: 'My journey with Vue',subTitle: "sdfsdf" },

          ]

        }else if (n == 1){
          this.models = [
            { title: 'My journey \n with Vue',subTitle: "sdfsdf" },
            { title: 'My journey with Vue',subTitle: "sdfsdf" },
            { title: 'My journey with Vue',subTitle: "sdfsdf" },

          ]
        }else if (n == 2){
          this.models = [
            { title: 'My journey \n with Vue',subTitle: "sdfsdf" },
            { title: 'My journey with Vue',subTitle: "sdfsdf" },
            { title: 'My journey with Vue',subTitle: "sdfsdf" },
            { title: 'My journey with Vue',subTitle: "sdfsdf" },
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
    float: left;
  }

</style>
