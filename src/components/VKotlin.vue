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
        heros:['v_text','v_attributedText','v_image','v_if','v_on','v_input','v_index','v_array'],
        categoryIndex: 0,
        models: [
          { title: 'v_text',subTitle: "v_text" },

        ]
      }
    },
    methods:{
      menuClick (n){

        this.categoryIndex = n
        if (n == 0){
          this.models = [
            { title: 'v_text',subTitle: "v_text" },
          ]

        }else if (n == 1){
          this.models = [
            { title: 'v_attributedText',subTitle: "v_attributedText" },

          ]
        }else if (n == 2){
          this.models = [
            { title: 'v_image',subTitle: "v_image" },

          ]
        }else if (n == 3){
          this.models = [
            { title: 'v_if',subTitle: "v_if" },

          ]
        }else if (n == 4){
          this.models = [
            { title: 'v_on',subTitle: "v_on" },

          ]
        }else if (n == 5){
          this.models = [
            { title: 'v_input',subTitle: "v_input" },

          ]
        }else if (n == 6){
          this.models = [
            { title: 'v_index',subTitle: "v_index" },

          ]
        }else if (n == 7){
          this.models = [
            { title: 'v_array',subTitle: "v_array" },

          ]
        }
      }

    },
  }
</script>

