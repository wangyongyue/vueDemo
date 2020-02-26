<template>

  <div >
    <input type="text" v-model="item.content"  placeholder="请输入" style="border-style:solid;border-color:grey;border-width: 1px;border-radius: 5px; font-size:15px;width: 200px;float:left;height: 26px;margin-top: 10px;">
  </div>
</template>

<script>
  export default {
    name: 'VInput',
    props:{
      item:{
        content:String,
      }

    }
  }
</script>

<style scoped>

</style>
