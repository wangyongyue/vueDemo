<template>
  <div>
    <div class="code_rong">
      <component v-for="(item,index) in rongNames" :is="item"></component>
    </div>
    <div class="code_com" v-for="(item,index) in comNames">
      <component class="code_component" :is="item"></component>
      <button class="code_button" v-on:click="add(index)">add</button>
    </div>

  </div>

</template>

<script>
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
        comNames:["Content101","Content102","Content103","Content104","Content105","Content106","Content107","Content108"],
        rongNames:[],
        buttons:["add","add","add","add"]
      }
    },
    methods: {

      add (index) {

        this.rongNames.push(this.comNames[index])

      }
    }
  }
</script>

<style>
  .code_rong{
    width: 375px;
    height: 667px;
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
