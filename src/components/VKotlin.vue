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
    name: 'VKotlin',
    components: {VList, VContent},
    data() {
      return{

        heros:[
          {title:'开发中',subTitle:''},

        ],
      }
    },
    methods:{
      menuClick (n){

      }

    },
  }
</script>

