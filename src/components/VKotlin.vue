<template>
  <div>
    <div class="t_list">
      <VList :heros="heros" v-on:menuClick="menuClick"></VList>
    </div>
    <div class="t_content">
      <VContent
        v-for="model in models"
        :info="model"
      ></VContent>
    </div>
  </div>

</template>

<script>
  import VContent from '@/components/VContent'
  import VList from '@/components/VList'

  export default {
    name: 'VKotlin',
    components: {VList, VContent},
    data() {
      return{
        heros:[
          {title:'简介',subTitle:''},
          {title:'v_text',subTitle:'文字内容'},
          {title:'v_image',subTitle:'图片内容的指定'},
          {title:'v_on',subTitle:'对象事件的传递'},
          {title:'v_input',subTitle:'输入绑定'},
          {title:'v_index,v_array',subTitle:'列表数组的现实的点击事件'},

        ],
        categoryIndex: 0,
        models: [
          { title: 'VKotlin 原名（VueKotlin）android框架，组件化，数据驱动，动态加载的无侵入框架。',subTitle: "简单易用,完美解耦" },
          { title: '安装方式简单',subTitle: "allprojects {\n" +
              "    repositories {\n" +
              "        google()\n" +
              "        jcenter()\n" +
              "        maven { url 'https://jitpack.io' }\n" +
              "\n" +
              "    }\n" +
              "}\n\n" +
              "implementation 'com.github.wangyongyue:vuekotlin:2.0.2'"},

        ]
      }
    },
    methods:{
      menuClick (n){

        this.categoryIndex = n

        if (n == 0) {

          this.models = [
            { title: 'VKotlin 原名（VueKotlin）android框架，组件化，数据驱动，动态加载的无侵入框架。',subTitle: "简单易用，完美解耦" },
            { title: '安装方式简单',subTitle: "allprojects {\n" +
                "    repositories {\n" +
                "        google()\n" +
                "        jcenter()\n" +
                "        maven { url 'https://jitpack.io' }\n" +
                "\n" +
                "    }\n" +
                "}\n\n" +
                "implementation 'com.github.wangyongyue:vuekotlin:2.0.2'"},
          ]
        }else if (n == 1){
          this.models = [
            { title: 'v_text',subTitle: "class MainActivity : AppCompatActivity() {\n" +
                "\n" +
                "    override fun onCreate(savedInstanceState: Bundle?) {\n" +
                "        super.onCreate(savedInstanceState)\n" +
                "\n" +
                "        setContentView(R.layout.activity_main)\n" +
                "        addActivity()\n" +
                "\n" +
                "\n" +
                "        var v = Vue()\n" +
                "        text.v_text(\"abc\",v)\n" +
                "        v.v_text(\"aba\",{\n" +
                "            return@v_text \"text\"\n" +
                "        })\n" +
                "\n" +
                "\n" +
                "    }\n" +
                "\n" +
                "    override fun onDestroy() {\n" +
                "        super.onDestroy()\n" +
                "        removeActivity()\n" +
                "    }\n" +
                "}" },
          ]


        }else if (n == 2){
          this.models = [
            { title: 'v_image',subTitle: "class MainActivity : AppCompatActivity() {\n" +
                "\n" +
                "    override fun onCreate(savedInstanceState: Bundle?) {\n" +
                "        super.onCreate(savedInstanceState)\n" +
                "\n" +
                "        setContentView(R.layout.activity_main)\n" +
                "        addActivity()\n" +
                "\n" +
                "\n" +
                "        var v = Vue()\n" +
                "        imageView.v_image(\"abc\",v)\n" +
                "        v.v_image(\"abc\") {\n" +
                "\n" +
                "            return@v_image BitmapFactory.decodeResource(baseContext.resources,R.drawable.ic_launcher_background)\n" +
                "        }\n" +
                "\n" +
                "\n" +
                "    }\n" +
                "\n" +
                "    override fun onDestroy() {\n" +
                "        super.onDestroy()\n" +
                "        removeActivity()\n" +
                "    }\n" +
                "}" },

          ]
        }else if (n == 3){
          this.models = [
            { title: 'v_if',subTitle: "class MainActivity : AppCompatActivity() {\n" +
                "\n" +
                "    override fun onCreate(savedInstanceState: Bundle?) {\n" +
                "        super.onCreate(savedInstanceState)\n" +
                "\n" +
                "        setContentView(R.layout.activity_main)\n" +
                "        addActivity()\n" +
                "\n" +
                "\n" +
                "        var v = Vue()\n" +
                "        button.v_if(\"abc\",v)\n" +
                "        v.v_if(\"abc\",{\n" +
                "            \n" +
                "            return@v_if true\n" +
                "        })\n" +
                "\n" +
                "\n" +
                "    }\n" +
                "\n" +
                "    override fun onDestroy() {\n" +
                "        super.onDestroy()\n" +
                "        removeActivity()\n" +
                "    }\n" +
                "}" },

          ]
        }else if (n == 4){
          this.models = [
            { title: 'v_on',subTitle: "var v = Vue()\n" +
                "        button.v_on(\"abc\",v)\n" +
                "        v.v_on(\"abc\",{\n" +
                "            \n" +
                "            print(\"点击\")\n" +
                "        })" },

          ]
        }else if (n == 5){
          this.models = [
            { title: 'v_input',subTitle: "class MainActivity : AppCompatActivity() {\n" +
                "\n" +
                "    override fun onCreate(savedInstanceState: Bundle?) {\n" +
                "        super.onCreate(savedInstanceState)\n" +
                "\n" +
                "        setContentView(R.layout.activity_main)\n" +
                "        addActivity()\n" +
                "\n" +
                "\n" +
                "        var v = Vue()\n" +
                "        editText.v_input(\"abc\",v)\n" +
                "        editText.v_text(\"abc\",v)\n" +
                "\n" +
                "\n" +
                "    }\n" +
                "\n" +
                "    override fun onDestroy() {\n" +
                "        super.onDestroy()\n" +
                "        removeActivity()\n" +
                "    }\n" +
                "}\n" },

          ]
        }else if (n == 6){
          this.models = [
            { title: 'v_index,v_array',subTitle: "val arrayID = \"arrayID\"\n" +
                "val indexID = \"indexID\"\n" +
                "\n" +
                "class MainActivity : AppCompatActivity() {\n" +
                "\n" +
                "    override fun onCreate(savedInstanceState: Bundle?) {\n" +
                "        super.onCreate(savedInstanceState)\n" +
                "\n" +
                "        setContentView(R.layout.activity_main)\n" +
                "        addActivity()\n" +
                "\n" +
                "\n" +
                "\n" +
                "        Vue.register(R.layout.layout_item, RUserViewHolder::class.java.toString())\n" +
                "\n" +
                "        var vue = Vue()\n" +
                "        recyler.layoutManager = LinearLayoutManager(this)\n" +
                "        var ad =  RAdapter()\n" +
                "        recyler.adapter = ad\n" +
                "\n" +
                "        ad.v_array(arrayID,vue)\n" +
                "        ad.v_index(indexID,vue)\n" +
                "\n" +
                "\n" +
                "\n" +
                "        val list = listOf(\"数据\",\"数据\",\"数据\")\n" +
                "        var items = mutableListOf<VueData>()\n" +
                "        for (value in list){\n" +
                "            items.add(UserData(value))\n" +
                "        }\n" +
                "        vue.v_array(arrayID,{\n" +
                "\n" +
                "            return@v_array items\n" +
                "        })\n" +
                "        vue.v_index(indexID,{ it:Int ->\n" +
                "\n" +
                "            print(it)\n" +
                "\n" +
                "        })\n" +
                "\n" +
                "\n" +
                "    }\n" +
                "\n" +
                "    override fun onDestroy() {\n" +
                "        super.onDestroy()\n" +
                "        removeActivity()\n" +
                "    }\n" +
                "}\n" +
                "\n" +
                "class UserData(var name:String): VueData {\n" +
                "\n" +
                "    override val layoutIdentity: Int\n" +
                "        get() = R.layout.layout_item\n" +
                "\n" +
                "    override var v_identifier: Int = 0\n" +
                "\n" +
                "\n" +
                "\n" +
                "}\n" +
                "class RUserViewHolder(viewItem: View) : RHolder(viewItem){\n" +
                "\n" +
                "    val textView: TextView = viewItem.findViewById(R.id.text)\n" +
                "\n" +
                "    override fun setData(item: VueData){\n" +
                "\n" +
                "        if (item is UserData){\n" +
                "\n" +
                "            var model = item as? UserData\n" +
                "            textView.setText(model?.name)\n" +
                "\n" +
                "\n" +
                "            textView.setOnClickListener {\n" +
                "\n" +
                "                model?.v_identifier = 1\n" +
                "\n" +
                "                v_to()\n" +
                "\n" +
                "            }\n" +
                "\n" +
                "        }\n" +
                "\n" +
                "    }\n" +
                "\n" +
                "}\n" },

          ]
        }
      }

    },
  }
</script>


