<template>
  <div>
    <button class="vbutton" style="width: 50px;float: left;color: #1CB28A;font-size: large;text-align:center" v-on:click="onClick()">{{title}}</button>
  </div>
</template>

<script>
  export default {
    name: 'VButton',
    props:{
      title:String
    },
    methods:{
      onClick (){
        this.$emit("onClick");
      }
    }
  }
</script>

<style scoped>
  .vbutton{
    float: right;
    margin: 0;
    padding: 0;
    background-color: transparent;
    border: 0px solid transparent;
    outline: none;
    float: left;
    font-size: x-large;

  }

</style>
