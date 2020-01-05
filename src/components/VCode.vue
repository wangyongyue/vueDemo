<template>
  <div>
    <div class="rong">
      <div class="code_rong" v-for="(item,index) in rongNames">
        <component class="code_component" :is="item"></component>
        <button class="code_button" v-on:click="deleteCom(index)">删除</button>
      </div>
    </div>
    <div class="code_com" v-for="(item,index) in comNames">
      <component class="code_component" :is="item"></component>
      <button class="code_button" v-on:click="add(index)">添加</button>
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
      }
    },
    methods: {

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
    width: 435px;
    height: 667px;
    float: left;
  }
  .code_rong{
    width: 435px;
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
