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
    name: 'ComSwift',
    components: {VList, VContent},
    data() {
      return{
        heros:['sdf','sdf','sdf','sdf'],
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

