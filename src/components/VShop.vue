<template>
  <div>
    <div class="shangye">
      <p style="font-size: x-large;color: #1CB28A;">商业合作</p>
      <p>
        <br>
        积极寻求合作，技术交流，和广告商。
      </p>
    </div>
    <div class="jianjieDetails">
      <div class="lianxi">
        <p style="color: #1CB28A;">合作内容</p>
        <p style="text-align: center">
          <br>
          技术服务与支持
          <br>
          开 发 定 制 合 作

        </p>
      </div>
      <div class="lianxi">
        <p style="color: #1CB28A;">联系方式</p>
        <p style="text-align: center">
          <br>
          电话：18601271036
          <br>
          QQ：2934939160
        </p>
      </div>
    </div>

  </div>
</template>
<style>
  .shangye{

    height: 200px;

  }
  .lianxi{

    width: 500px;
    height: 200px;
    float: left;
  }
</style>

<script>
  import VContent from '@/components/VContent'
  import VList from '@/components/VList'

  export default {
    name: 'VShop',
    components: {VList, VContent},
    data() {
      return{
        heros:['商业合作','定制开发','iOS组件库','安卓组件库','iOS 定制','Android 定制'],
        categoryIndex: 0,
        models: [
          { title: '商业合作e',subTitle: "商业合作" },

        ]
      }
    },
    methods:{
      menuClick (n){

        this.categoryIndex = n
        if (n == 0){
          this.models = [
            { title: '商业合作e',subTitle: "商业合作" },
          ]

        }else if (n == 1){
          this.models = [
            { title: '定制开发',subTitle: "定制开发" },

          ]
        }else if (n == 2){
          this.models = [
            { title: 'iOS组件库',subTitle: "iOS组件库" },
          ]
        }else if (n == 3){
          this.models = [
            { title: '安卓组件库',subTitle: "安卓组件库" },
          ]
        }else if (n == 4){
          this.models = [
            { title: 'iOS 定制',subTitle: "iOS 定制" },
          ]
        }else if (n == 5){
          this.models = [
            { title: 'Android 定制',subTitle: "Android 定制" },
          ]
        }
      }

    },
  }
</script>
