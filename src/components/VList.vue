<template>
  <div>
    <ul class="l_ul">
      <li :class="{active:categoryIndex==index}" v-for="(item,index) in heros" @click="handleClick(index)">{{item}}</li>
    </ul>
  </div>

</template>

<script>
  export default {
    name: 'VList',
    data (){
      return{
        heros:['雷恩加尔','安妮','沃里克','德莱厄斯'],
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
  .active {
    color: #00FFFF;
  }

</style>
