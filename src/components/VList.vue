<template>
  <div>

    <div  v-for="(item,index) in heros" >
    <button style="list-style-type:none;float: left;width: 100%;padding-top: 20px;font-size: large;text-align: left" :class="{active:categoryIndex==index}" @click="handleClick(index)">{{item.title}}</button>
    <p :class="{active:categoryIndex==index} " style="text-align: left">{{item.subTitle}}</p>
  </div>

  </div>

</template>

<script>
  export default {
    name: 'VList',
    data (){
      return{
        heros:[{title:"abc",subTitle:"abc"}],
        categoryIndex: 0,

      }
    },
    props:{
      heros:Array

    },

    methods: {
      handleClick (n) {

        this.categoryIndex = n
        this.$emit('menuClick',n)
      }
    }
  }
</script>

<style scoped>
  .l_ul{
    list-style-type:none;
  }
  li{
    list-style-type:none;
    color: #304455;

  }
  .active {
    color: #1CB28A;
  }

</style>
