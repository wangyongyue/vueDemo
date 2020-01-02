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
    name: 'VShop',
    components: {VList, VContent},
    data() {
      return{
        heros:['商业合作','定制开发','iOS组件库','安卓组件库','iOS 定制','Android 定制'],
        categoryIndex: 0,
        models: [
          { title: '商业合作e',subTitle: "商业合作" },

        ]
      }
    },
    methods:{
      menuClick (n){

        this.categoryIndex = n
        if (n == 0){
          this.models = [
            { title: '商业合作e',subTitle: "商业合作" },
          ]

        }else if (n == 1){
          this.models = [
            { title: '定制开发',subTitle: "定制开发" },

          ]
        }else if (n == 2){
          this.models = [
            { title: 'iOS组件库',subTitle: "iOS组件库" },
          ]
        }else if (n == 3){
          this.models = [
            { title: '安卓组件库',subTitle: "安卓组件库" },
          ]
        }else if (n == 4){
          this.models = [
            { title: 'iOS 定制',subTitle: "iOS 定制" },
          ]
        }else if (n == 5){
          this.models = [
            { title: 'Android 定制',subTitle: "Android 定制" },
          ]
        }
      }

    },
  }
</script>
