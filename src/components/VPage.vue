<template>
  <div>
    <div style="opacity:0.5;background-color: gray;z-index: 999;position: fixed;top:0;bottom: 0;left: 0;right: 0">
    </div>
    <div style="width: 270px;height: 560px;background-color: white; border-radius: 5px;margin: auto;z-index: 1000;position: absolute;top: 70px;bottom: 0;left: 0;right: 0">
      <button style="font-size: 14px;color: red;width: 260px;text-align: right;margin-bottom: 10px;" @click="pageClick">关闭</button>
      <p style="width: 270px;text-align: center;margin-bottom: 10px">{{title}}</p>
      <div style="width: 270px;height: 500px;overflow:scroll;background-color: white; border-radius: 5px;margin: auto;z-index: 1000;position: absolute;top: 70px;bottom: 0;left: 0;right: 0">
        <div style="margin-left: 10px" v-for="(item,index) in comNames">
          <component style="width: 240px;float: left;" :is="item" :info="infos[index]"></component>
        </div>
      </div>

    </div>
  </div>

</template>

<script>
  import Content101 from '@/Contents/Content101'
  import Content102 from '@/Contents/Content102'
  import Content103 from '@/Contents/Content103'
  import Content104 from '@/Contents/Content104'
  import Content105 from '@/Contents/Content105'
  import Content106 from '@/Contents/Content106'
  import Content107 from '@/Contents/Content107'

  export default {
    name: 'VPage',
    components: {

      Content101,
      Content102,
      Content103,
      Content104,
      Content105,
      Content106,
      Content107

    },
    props:{
      pid:String
    },
    methods:{
      pageClick (){
        this.$emit("pageClick")
      }
    },

    data() {
      return{
        comNames:[],
        infos:[
        ],
        title:"",
      }
    },
    mounted () {

      var params = new URLSearchParams()
      params.append('token', this.$cookies.get('token'))
      params.append('id', this.pid)

      this.$axios
        .post('/getPageDetails', params)
        .then(response => {
          var data = response['data']
          if (data['code'] == 1000) {
            var list = data["data"]
            this.pages = [];
            var list = data["data"]
            if (list.length == 1){
              this.title = list[0]["name"]

              var par = JSON.parse(list[0]["page"])
              this.comNames = par["dataModel"]
              this.infos = par["data"]
            }

          }

        })
        .catch(function (error) {
          alert(error)
        })
    }
  }
</script>

<style scoped>

</style>
