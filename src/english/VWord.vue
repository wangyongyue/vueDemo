<template>
  <div style="width: 1000px;height: 1000px;background-color: white;margin: 0 auto">
    <div style="width: 100%;height:50px;float: left;margin-left: 0px">

      <VButton :title="backTitle" v-on:onClick="clickBack" ></VButton>
      <div style="width: 300px;margin-left: 50px;">
        <button style="float:right;width: 130px;height: 30px;border-radius: 5px;text-align: center;padding-top: 5px;background-color: #1CB28A;color: white;font-size: 16px">{{menu}}</button>
      </div>


    </div>
    <div style="border-style:solid;border-color:#1CB28A;border-width: 1px;border-radius: 15px; width: 400px;height: 700px;float: left;margin-top: 50px">

      <VTitle  v-for="(item,index) in infos" :title="item.title" v-on:clickTodo="clickTodo(index)" v-on:clickDele="clickDele(index)"></VTitle>

    </div>
    <div style="float: left;border-style:solid;border-color:#1CB28A;border-width: 1px;border-radius: 15px; width: 500px;height: 700px;float: left;margin-top: 50px;margin-left: 50px">

      <div style="margin: 20px 20px 20px 20px">

        <VHeader :title="topic"></VHeader>
        <VInput :item="itemTopic"></VInput>
        <br>
        <br>

        <VHeader :title="translate"></VHeader>
        <VInput :item="itemTra"></VInput>
        <br>
        <br>

        <VHeader :title="answer"></VHeader>
        <VInput :item="itemAn"></VInput>
        <br>
        <br>

        <VHeader  :title="option"></VHeader>

        <div style="width: 200px">
          <VInput :item="itemOp1"></VInput>
          <VInput :item="itemOp2"></VInput>
          <VInput :item="itemOp3"></VInput>
          <VInput :item="itemOp4"></VInput>

          <VButton :title="editorTitle" v-on:onClick="onClick" ></VButton>
          <VButton style="float: right" :title="kongTitle" v-on:onClick="onKong" ></VButton>

        </div>


      </div>


    </div>

    <VAlert v-on:cancle = "cancle" v-on:confirm = "confirm"  :title="alertTitle" v-if="isAlert"></VAlert>

  </div>

</template>

<script>
  import VHeader from '@/english/VHeader'
  import VTitle from '@/english/VTitle'
  import VInput from '@/english/VInput'
  import VButton from '@/english/VButton'
  import VEngEditor from '@/english/VEngEditor'
  import VButton1 from '@/english/VButton1'
  import VAlert from '@/components/VAlert'

  export default {
    name: 'VWord',
    components: {
      VTitle,
      VHeader,
      VInput,
      VButton,
      VEngEditor,
      VButton1,
      VAlert

    },
    props:{

    },
    data() {
      return{
        infos:[
        ],
        infosDetails:[
        ],
        menu:"单词",
        topic:"题目",
        answer:"答案",
        option:"选项",
        editorTitle:"添加",
        kongTitle:"置空",
        backTitle:"返回",
        translate:"翻译",
        wordId:0,
        isAlert:false,
        alertTitle:"确认删除？",

        itemTopic:{
          content:"",
        },
        itemTra:{
          content:"",
        },
        itemAn:{
          content:"",
        },
        itemOp1:{
          content:"",
        },
        itemOp2:{
          content:"",
        },
        itemOp3:{
          content:"",
        },
        itemOp4:{
          content:"",
        },
        numberDele:0,
        enditorId:0,

      }
    },
    mounted (){

      this.menu = this.$route.params.name
      this.requestWords()
    },
    methods:{
      clickTodo(index){

        var details =  this.infosDetails[index]
        this.itemTopic.content = details.topic
        this.itemAn.content = details.answers
        this.itemTra.content = details.translate
        this.itemOp1.content = details.options1
        this.itemOp2.content = details.options2
        this.itemOp3.content = details.options3
        this.itemOp4.content = details.options4
        this.enditorId = details.id
        this.editorTitle = "编辑"

      },
      clickDele(index){

        this.isAlert = true
        this.numberDele = index
      },
      cancle(){

        this.isAlert = false
      },
      confirm(){

        this.requestWordDele(this.numberDele)
      },
      onClick (){

        this.requestWordSave()
      },
      onKong (){

        this.itemTopic.content = ""
        this.itemTra.content = ""
        this.itemAn.content = ""
        this.itemOp1.content = ""
        this.itemOp2.content = ""
        this.itemOp3.content = ""
        this.itemOp4.content = ""
        this.enditorId = 0
        this.editorTitle = "添加"

      },
      clickBack (){

        this.$router.go(-1)
      },
      requestWords(){

        var params = new URLSearchParams()
        params.append('wordId',this.$route.params.id)
        params.append('style',this.$route.params.style)


        this.$axios
          .post('/getWordTopic', params)
          .then(response => {

            var data = response['data']
            if (data['code'] == 1000) {
              this.infos = [];
              this.infosDetails = [];
              var list = data["data"]
              for (var i = 0; i < list.length; i++) {

                this.infos.push({title:list[i].topic,id:list[i].id})

              }
              this.infosDetails = list;
            }

          })
          .catch(function (error) {
            alert(error)
          })
      },

      requestWordSave(){

        var params = new URLSearchParams()
        params.append('id',this.enditorId)
        params.append('style',this.$route.params.style)
        params.append('wordId',this.$route.params.id)
        params.append('topic', this.itemTopic.content)
        params.append('answers', this.itemAn.content)
        params.append('translate', this.itemTra.content)
        params.append('options1', this.itemOp1.content)
        params.append('options2', this.itemOp2.content)
        params.append('options3', this.itemOp3.content)
        params.append('options4', this.itemOp4.content)


          this.$axios
          .post('/updateWordTopic', params)
          .then(response => {
            var data = response['data']
            if (data['code'] == 1000) {

              this.onKong()
              this.requestWords()

            }else {
              alert(data['message'])
            }

          })
          .catch(function (error) {
            alert(error)
          })
      },

      requestWordDele(index){


        var params = new URLSearchParams()
        params.append('id',this.infos[index].id)
        params.append('wordId',this.$route.params.id)
        params.append('style',this.$route.params.style)


        this.$axios
          .post('/deleteWordTopic', params)
          .then(response => {
            var data = response['data']
            if (data['code'] == 1000) {

              this.infos.splice(index,1)
              this.isAlert = false


            }else {
              alert("删除失败")
            }

          })
          .catch(function (error) {
            alert(error)
          })
      },
    }

  }
</script>

<style scoped>
  *{
    margin: 0px;
    padding: 0px;
  }
  button{
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
