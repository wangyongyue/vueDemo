<template>
  <div>
    <div class="t_list">
      <VList :heros="heros" v-on:menuClick="menuClick"></VList>
    </div>
    <div class="t_content">
      <VContent class="scontent"
        v-for="model in models"
        :info="model"
      ></VContent>
    </div>
  </div>

</template>
<style>

</style>

<script>
  import VContent from '@/components/VContent'
  import VList from '@/components/VList'

  export default {
    name: 'VSwift',
    components: {VList, VContent},
    data() {
      return{
        heros:['v_text','v_attributedText','v_image','v_if','v_on','v_input','v_index,v_array'],
        categoryIndex: 0,
        models: [
          { title: 'v_text',subTitle: "override func viewDidLoad() {\n" +
              "        super.viewDidLoad()\n" +
              "        self.view.backgroundColor = UIColor.white\n" +
              "        \n" +
              "        let v = Vue()\n" +
              "        aview(v)\n" +
              "        adata(v)\n" +
              "       \n" +
              "    }\n" +
              "    func adata(_ v:Vue){\n" +
              "        \n" +
              "        v.v_text(vId: \"abc\") { () -> String? in\n" +
              "                   \n" +
              "            return \"label\"\n" +
              "        }\n" +
              "    }\n" +
              "    func aview(_ v:Vue){\n" +
              "        \n" +
              "        let label = UILabel()\n" +
              "        self.view.addSubview(label)\n" +
              "        label.frame = CGRect.init(x: 100, y: 100, width: 100, height: 100)\n" +
              "        \n" +
              "        label.v_text(vId: \"abc\", vue: v)        \n" +
              "    }" },

        ]
      }
    },
    methods:{
      menuClick (n){

        this.categoryIndex = n
        if (n == 0){
          this.models = [
            { title: 'v_text',subTitle: "override func viewDidLoad() {\n" +
                "        super.viewDidLoad()\n" +
                "        self.view.backgroundColor = UIColor.white\n" +
                "        \n" +
                "        let v = Vue()\n" +
                "        aview(v)\n" +
                "        adata(v)\n" +
                "       \n" +
                "    }\n" +
                "    func adata(_ v:Vue){\n" +
                "        \n" +
                "        v.v_text(vId: \"abc\") { () -> String? in\n" +
                "                   \n" +
                "            return \"label\"\n" +
                "        }\n" +
                "    }\n" +
                "    func aview(_ v:Vue){\n" +
                "        \n" +
                "        let label = UILabel()\n" +
                "        self.view.addSubview(label)\n" +
                "        label.frame = CGRect.init(x: 100, y: 100, width: 100, height: 100)\n" +
                "        \n" +
                "        label.v_text(vId: \"abc\", vue: v)        \n" +
                "    }" },
          ]

        }else if (n == 1){
          this.models = [
            { title: 'v_attributedText',subTitle: "override func viewDidLoad() {\n" +
                "        super.viewDidLoad()\n" +
                "        self.view.backgroundColor = UIColor.white\n" +
                "        \n" +
                "        \n" +
                "        let v = Vue()\n" +
                "        \n" +
                "        aview(v)\n" +
                "        adata(v)\n" +
                "       \n" +
                "    }\n" +
                "    func adata(_ v:Vue){\n" +
                "         \n" +
                "        v.v_attributedText(vId: \"abc\") { () -> NSAttributedString? in\n" +
                "\n" +
                "            \n" +
                "            return NSAttributedString(string: \"label\", attributes: [NSAttributedString.Key.font:UIFont.systemFont(ofSize: 13.5)])\n" +
                "        }\n" +
                "        \n" +
                "    }\n" +
                "    func aview(_ v:Vue){\n" +
                "        \n" +
                "        let label = UILabel()\n" +
                "        self.view.addSubview(label)\n" +
                "        label.frame = CGRect.init(x: 100, y: 100, width: 100, height: 100)\n" +
                "        label.v_attributedText(vId: \"abc\", vue: v)\n" +
                "        \n" +
                "    }" },

          ]
        }else if (n == 2){
          this.models = [
            { title: 'v_image',subTitle: "override func viewDidLoad() {\n" +
                "        super.viewDidLoad()\n" +
                "        self.view.backgroundColor = UIColor.white\n" +
                "        \n" +
                "        \n" +
                "        let v = Vue()\n" +
                "        \n" +
                "        aview(v)\n" +
                "        adata(v)\n" +
                "       \n" +
                "    }\n" +
                "    func adata(_ v:Vue){\n" +
                "         \n" +
                "        v.v_image(vId: \"abc\") { () -> UIImage? in\n" +
                "            \n" +
                "            return UIImage.init(named: \"feng_2\")\n" +
                "        }\n" +
                "        \n" +
                "    }\n" +
                "    func aview(_ v:Vue){\n" +
                "        \n" +
                "        let image = UIImageView()\n" +
                "        self.view.addSubview(image)\n" +
                "        image.frame = CGRect.init(x: 100, y: 100, width: 100, height: 100)\n" +
                "        image.v_image(vId: \"abc\", vue: v)\n" +
                "        \n" +
                "    }" },

          ]
        }else if (n == 3){
          this.models = [
            { title: 'v_if',subTitle: "override func viewDidLoad() {\n" +
                "        super.viewDidLoad()\n" +
                "        self.view.backgroundColor = UIColor.white\n" +
                "        \n" +
                "        \n" +
                "        let v = Vue()\n" +
                "        \n" +
                "        aview(v)\n" +
                "        adata(v)\n" +
                "       \n" +
                "    }\n" +
                "    func adata(_ v:Vue){\n" +
                "         \n" +
                "        v.v_if(vId: \"abc\") { () -> Bool? in\n" +
                "            \n" +
                "            return true\n" +
                "        }\n" +
                "    }\n" +
                "    func aview(_ v:Vue){\n" +
                "        \n" +
                "        let view = UIView()\n" +
                "        self.view.addSubview(view)\n" +
                "        view.backgroundColor = UIColor.red\n" +
                "        view.frame = CGRect.init(x: 100, y: 100, width: 100, height: 100)\n" +
                "        view.v_if(vId: \"abc\", vue: v)\n" +
                "        \n" +
                "    }" },

          ]
        }else if (n == 4){
          this.models = [
            { title: 'v_on',subTitle: "override func viewDidLoad() {\n" +
                "        super.viewDidLoad()\n" +
                "        self.view.backgroundColor = UIColor.white\n" +
                "        \n" +
                "        \n" +
                "        let v = Vue()\n" +
                "        \n" +
                "        aview(v)\n" +
                "        adata(v)\n" +
                "       \n" +
                "    }\n" +
                "    func adata(_ v:Vue){\n" +
                "         \n" +
                "        v.v_on(vId: \"abc\") {\n" +
                "            \n" +
                "            print(\"button\")\n" +
                "        }\n" +
                "    }\n" +
                "    func aview(_ v:Vue){\n" +
                "        \n" +
                "        let button = UIButton()\n" +
                "        self.view.addSubview(button)\n" +
                "        button.setTitle(\"button\", for: .normal)\n" +
                "        button.setTitleColor(UIColor.red, for: .normal)\n" +
                "        button.frame = CGRect.init(x: 100, y: 100, width: 100, height: 100)\n" +
                "        button.v_on(vId: \"abc\", vue: v)\n" +
                "        \n" +
                "    }" },

          ]
        }else if (n == 5){
          this.models = [
            { title: 'v_input',subTitle: "override func viewDidLoad() {\n" +
                "        super.viewDidLoad()\n" +
                "        self.view.backgroundColor = UIColor.white\n" +
                "        \n" +
                "        \n" +
                "        let v = Vue()\n" +
                "        \n" +
                "        aview(v)\n" +
                "        adata(v)\n" +
                "       \n" +
                "    }\n" +
                "    func adata(_ v:Vue){\n" +
                "      \n" +
                "    }\n" +
                "    func aview(_ v:Vue){\n" +
                "        \n" +
                "        let field = UITextField()\n" +
                "        self.view.addSubview(field)\n" +
                "        field.borderStyle = .roundedRect\n" +
                "        field.frame = CGRect.init(x: 100, y: 100, width: 100, height: 50)\n" +
                "        field.v_input(vId: \"abc\", vue: v)\n" +
                "        \n" +
                "        \n" +
                "        let label = UILabel()\n" +
                "        self.view.addSubview(label)\n" +
                "        label.frame = CGRect.init(x: 100, y: 150, width: 100, height: 50)\n" +
                "        label.v_text(vId: \"abc\", vue: v)\n" +
                "        \n" +
                "        \n" +
                "        \n" +
                "    }" },

          ]
        }else if (n == 6){
          this.models = [
            { title: 'v_index,v_array',subTitle: "import UIKit\n" +
                "import VueSwift\n" +
                "class TestViewController: UIViewController {\n" +
                "\n" +
                "    override func viewDidLoad() {\n" +
                "        super.viewDidLoad()\n" +
                "        self.view.backgroundColor = UIColor.white\n" +
                "        \n" +
                "        \n" +
                "        let v = Vue()\n" +
                "        \n" +
                "        aview(v)\n" +
                "        adata(v)\n" +
                "       \n" +
                "    }\n" +
                "    func adata(_ v:Vue){\n" +
                "        v.v_array(vId: \"array\") { () -> Array<VueData>? in\n" +
                "            \n" +
                "            return [TestCellModel(\"abc\"),TestCellModel(\"abc\"),TestCellModel(\"abc\"),TestCellModel(\"abc\")]\n" +
                "        }\n" +
                "        v.v_index(vId: \"index\") { (index) in\n" +
                "            print(index)\n" +
                "        }\n" +
                "      \n" +
                "    }\n" +
                "    func aview(_ v:Vue){\n" +
                "        Vue.register(aClass: TestCellModel.classForCoder(), toClass: TestCell.classForCoder())\n" +
                "        let table = CTable()\n" +
                "        self.view.addSubview(table)\n" +
                "        table.frame = CGRect.init(x: 0, y: 0, width: self.view.frame.width, height: 300)\n" +
                "        table.v_array(vId: \"array\", vue: v)\n" +
                "        table.v_index(vId: \"index\", vue: v)\n" +
                "        \n" +
                "        \n" +
                "    }\n" +
                "}\n" +
                "class TestCell: UITableViewCell {\n" +
                "    \n" +
                "    \n" +
                "    \n" +
                "    lazy private var headerLabel:UILabel = {\n" +
                "        let a = UILabel()\n" +
                "        a.textAlignment = .left\n" +
                "        a.textColor = UIColor.black\n" +
                "        return a\n" +
                "    }()\n" +
                "    \n" +
                "    lazy private var tap:UITapGestureRecognizer = {\n" +
                "        let a = UITapGestureRecognizer()\n" +
                "        return a\n" +
                "    }()\n" +
                "    override init(style: UITableViewCell.CellStyle, reuseIdentifier: String?) {\n" +
                "        super.init(style: style, reuseIdentifier: reuseIdentifier)\n" +
                "        \n" +
                "        \n" +
                "       \n" +
                "        self.contentView.addSubview(self.headerLabel)\n" +
                "       \n" +
                "        self.headerLabel.frame = CGRect.init(x: 0, y: 0, width: 200, height: 50)\n" +
                "\n" +
                "        \n" +
                "        self.contentView.addGestureRecognizer(tap)\n" +
                "    }\n" +
                "    required init?(coder aDecoder: NSCoder) {\n" +
                "        super.init(coder: aDecoder)\n" +
                "    }\n" +
                "    override func setV_Model(_ aModel: VueData) {\n" +
                "        if aModel is TestCellModel{\n" +
                "            \n" +
                "            let m = aModel as! TestCellModel\n" +
                "            headerLabel.text = m.name\n" +
                "            tap.v_tap {\n" +
                "                m.v_identifier = 0\n" +
                "                m.v_to()\n" +
                "            }\n" +
                "        }\n" +
                "    }\n" +
                "}\n" +
                "class TestCellModel:VueData{\n" +
                "    \n" +
                "    var name:String?\n" +
                "    convenience init(_ a:String){\n" +
                "        self.init()\n" +
                "        name = a\n" +
                "    }\n" +
                "    override func v_height() -> CGFloat {\n" +
                "        \n" +
                "        return 50\n" +
                "    }\n" +
                "}\n" +
                "\n" },

          ]
        }
      }

    },
  }
</script>

