<template>
  <div>
    <canvas id="can" width="100x" height="100px" style="background-color: black"></canvas>
  </div>
</template>

<script>
  export default {
    name: 'VCanvas',
    mounted () {
      addCan()
    },


  }
  function addCan () {

    var x1 = 50
    var y1 = 0
    var x2 = 50
    var y2 = 50
    var c = document.getElementById("can")
    var context = c.getContext("2d")

    context.moveTo(x1,y1)
    context.lineTo(x2,y2)
    context.strokeStyle = "red"
    context.lineWidth = 3;
    context.stroke()

  }
</script>

<style scoped>

</style>
