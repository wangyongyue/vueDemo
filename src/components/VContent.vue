<template>
  <div>
    <p class="con_div">{{ info.title }}</p>
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
  }
  .con_sub{
    color: red;
  }

</style>
