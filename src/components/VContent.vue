<template>
  <div>
    <p class="con_div">{{ info.title }}</p>
    <p class="con_yan">
      <br>
    </p>
    <p class="con_sub">{{ info.subTitle }}</p>
  </div>

</template>

<script>
  export default {
    name: 'VContent',
    data (){
      return{

      }
    },
    props:{
      info:{
        title: String,
        subTitle: String
      }
    }
  }
</script>

<style scoped>
  .con_div{
    white-space: pre-wrap;
    text-align: left;
    color: #304455;
    font-size: x-large;
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;


  }
  .con_yan{

    white-space: pre-wrap;
    text-align: left;
    color: #304455;
  }

  .con_sub{
    color: #304455;
    list-style-type:none;
    white-space: pre-wrap;
    text-align: left;
    background-color: #f8f8f8;
    font-family: "Roboto Mono", Monaco, courier, monospace;
    margin: 0 2px;
    border-radius: 2px;
    font-size: large;

  }



</style>
