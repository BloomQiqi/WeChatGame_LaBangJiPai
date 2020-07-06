"use strict";
cc._RF.push(module, '20643v4fFlCSJyZjAmnYvBo', 'TEXT_tipKnowledge');
// Script/ThirdPage/TEXT_tipKnowledge.js

"use strict";

var cfg = {
  TextKnowledgeTotalName: new Array(new Array("易拉罐"), new Array("外卖盒"), new Array("铁架子"), new Array("针线"), new Array("手机"), new Array("绳子"), new Array("杀虫剂"), new Array("光碟"), new Array("废钢"), new Array("电视"), new Array("干电池"), new Array("玻璃门"), new Array("报纸"), new Array("保温杯"), new Array("废旧皮革"), new Array("暖气片"), new Array("木箱"), new Array("快递箱"), new Array("空调"), new Array("旧轮胎"), new Array("画纸"), new Array("塑料瓶"), new Array("杂草"), new Array("猪排骨"), new Array("奶茶"), new Array("生米"), new Array("西餐糕点残余"), new Array("核桃壳"), new Array("过期糖果"), new Array("茶叶渣"), new Array("橡皮擦"), new Array("烟头"), new Array("用过的口罩"), new Array("植物的残枝败叶"), new Array("面膜"), new Array("纽扣"), new Array("塑料扫把"), new Array("调色盘"), new Array("大骨头棒"), new Array("春联"), new Array("厕所卫生纸"), new Array("消毒液瓶子"), new Array("透明塑料药瓶"), new Array("过期胶囊"), new Array("过期口红")),
  TextKnowledgeDescription: new Array(new Array("易拉罐是可回收垃圾，铝及其合金是经济建设的重要原料，可以利用废易拉罐生产原牌号的合金铝锭。"), new Array("外卖盒是干垃圾即其它垃圾，一般由塑料组成，使用时需留心其使用范围，投放时尽量沥干水分。"), new Array("铁架子是可回收垃圾，一般是用铁板和铁条组成的支撑用的工具。废弃的铁架可以通过高温熔化以再次利用。"), new Array("针线是其它垃圾，可由纤维、棉花等高分子化合物组成，通常用于缝制衣物，投放时尽量沥干水分。"), new Array("手机是可回收垃圾，手机由大量的电子元器件组成，大部分的电子元器件都可通过回收再次利用。"), new Array("绳子是干垃圾即其它垃圾，一般指由两股以上的棉、麻、棕等纤维或金属丝绞合而成的条状物，回收时需要尽量沥干水分。"), new Array("杀虫剂是有害垃圾，一般是指杀死害虫的一种药剂，它由有机氯、有机磷和氨基甲酸酯等有机合成组成，对哺乳动物有高的急性毒性。"), new Array("光碟属于其他垃圾，以光信息做为存储的载体并用来存储数据。光盘的随意丢弃主要会对土地资源造成影响,由于光盘的主要成分是塑料,不容易降解,因而会使土壤的肥力下降,影响土地的可持续利用。"), new Array("废钢属于可回收垃圾，指的是钢铁厂生产过程中不成为产品的钢铁废料以及使用后报废的设备、构件中的钢铁材料，废钢是一种节能，低碳，循环再生资源，也是一种优质的炼钢资源。"), new Array("电视属于可回收垃圾，指使用电子技术传送活动的图像画面和音频信号的设备。电视经拆解后，电线直接回收；玻璃、外壳等会被粉碎成颗粒，通过专业的分离筛选办法分类归集；荧光粉、电子枪和线路板等将进行进一步的提炼，以获取稀土、铜、金银。"), new Array("干电池属于有害垃圾，是一种以糊状电解液来产生直流电的化学电池。废电池不仅会给人类带来极大的危害，不能与普通的可回收物混合，它里面还蕴含着很多资源有待回收。"), new Array("玻璃门属于可回收垃圾，是非晶无机非金属材料，一般是用多种无机矿物为主要原料，另外加入少量辅助原料制成的。回收一吨废玻璃大约可以节约石英砂720公斤,纯碱250公斤,长石粉60公斤,煤炭10吨,电400度。"), new Array("报纸属于可回收垃圾，是以刊载新闻和时事评论为主的定期向公众发行的印刷出版物。回收后可继续造纸，减少了对于树木等自然资源的消耗。"), new Array("保温杯属于可回收垃圾，是由陶瓷或不锈钢加上真空层作成的盛水的容器。其中包含的不锈钢等可回收继续制作成品。"), new Array("废旧皮革属于可回收垃圾，废旧皮革量大，面广具有较高的可回收价值。可以利用废旧皮革生产再生革，制作饲料和蛋白粉。"), new Array("暖气片属于可回收垃圾，主要有铸铁和钢制两种，通过灌入热水达到，冬天供暖的功能。可利用回收的暖气回炉重练，生产再生钢铁"), new Array("木箱属于其他垃圾，主要以松木为主材料，通过胶合，或钉子等方式组合，回收后可以生产三和板材，等再生符合板材的家具。"), new Array("快递箱属于可回收垃圾，主要以纸质为主，也有由聚苯乙烯（泡沫）制作的。纸质的可以通过回收加工再生纸张，泡沫制品可以制成接合剂，防水漆，分类后可再制成塑料粉等。"), new Array("空调属于可回收垃圾，空调的回收较为复杂，需要进行拆解分类。将塑料，机内的铜管、铝、铁等分类回收，制造相应的再生产品。"), new Array("旧轮胎属于可回收垃圾，轮胎由橡胶胎体和内部的钢丝组成，通过分类可以讲胎体内部的钢丝回收回炉，胎体回收后可以再次炼制橡胶，或打粉铺设道路跑道等。"), new Array("画纸属于其他垃圾，因使用颜料不同需要通过不同的工艺进行处理回收。为了避免资源浪费，纸质品在回收后会重新做成纸浆，生产再生纸质用品。"), new Array("塑料瓶是可回收垃圾，主要是由聚乙烯或聚丙烯等材料并添加了多种有机溶剂后制成的。主要用于饮料、食品、酱菜、蜂蜜药等液体或者固体一次性塑料包装容器"), new Array("杂草是厨余垃圾，它是指生长在有害于人类生存和活动场地的植物，一般是非栽培的野生植物或对人类有碍的植物，也是容易腐烂的生物质废弃物。"), new Array("猪排骨属于厨余垃圾，是指猪的排骨，有非常丰富的营养成分。猪排骨提供人体生理活动必需的优质蛋白质、脂肪，尤其是丰富的钙质可维护骨骼健康。"), new Array("奶茶是厨余垃圾，为蒙古高原游牧民族的日常饮品，不同地区有不同种类的奶茶文化。"), new Array("生米是厨余垃圾，未煮熟的米，煮熟后的米饭是南方人饭桌上常见的主食。"), new Array("西餐糕点残余是厨余垃圾，是一种以谷类、豆类、薯类等为主要原料，经调制、成型、熟制等工序制成的食品。"), new Array("核桃壳是厨余垃圾，是核桃的内果皮，回收加工研磨后可制作除油滤料，也可磨粉后作为肥料供园艺使用。"), new Array("过期的糖果属于厨余垃圾，该种垃圾可以通过发酵处理，产生再生资源生物酒精，为未来的可再生能源提供了新方案。"), new Array("茶叶渣属于厨余垃圾茶叶渣，价格低廉且具有茶多酚,蛋白质,氨基酸,维生素,常量元素和微量元素等大量有用成分，回收后可以制作饲料。"), new Array("橡皮是其他垃圾，一般是用橡胶制成的文具，能擦掉石墨或墨水的痕迹。它的种类繁多，形状和色彩各异，有普通的香橡皮，也有绘画用的美术专用橡皮，以及可塑橡皮等。"), new Array("烟头是其他垃圾，由聚丙烯丝束组成，可轻微过滤烟叶中的有毒成分。投放时尽量过滤水分，放入干垃圾容器内"), new Array("口罩是其他垃圾，通常由纺粘无纺布、熔喷无纺布搭配组成。使用过的口罩最好使用酒精消毒后投放"), new Array("植物的残枝败叶是干垃圾，通常是指干枯的树叶、枯萎的花瓣等植物的遗体。"), new Array("面膜是其他垃圾，为护肤品中的一个类别，也是美容保养品的一种载体"), new Array("纽扣是其他垃圾，作为服装配件、饰物，用来扣合衣服的球状或片状小物件。"), new Array("塑料扫把是其他垃圾，家庭、工作中最为常见的生活清扫工具。"), new Array("调色盘是其他垃圾，指为绘画常用的调色用品"), new Array("大骨头棒属于其他垃圾，因为其质地坚硬，不易降解，通过适当的渠道回收研磨，可以制成堆肥。"), new Array("春联属于其他垃圾，因其染色及油墨印刷工艺的特殊性，回收再利用形式比较特殊，工艺较为复杂。"), new Array("厕所卫生纸属于其他垃圾，因其特殊使用环境，回收再利用形式比较特殊，工艺较为复杂。"), new Array("消毒液瓶子是有害垃圾，通常是装有84消毒液、过氧乙酸 等化学物品的塑料或玻璃瓶。投放时注意轻放、易破损的请连带包装或包裹后轻放、如易发挥请密封后投放。"), new Array("透明塑料药瓶是有害垃圾，为盛装药水或药丸的容器，其材质为塑料。"), new Array("过期胶囊属于有害垃圾，因药物的特殊性，因氧化，受潮等因素的影响，药品的形状和疗效可能会不达预期，甚至对人体有害，过期药物应送至就近回收点进行回收。"), new Array("过期口红属于有害垃圾，因其特殊使用方式，可能会被吃下，过期后的口红会引起，比如嘴唇红肿、发痒等过敏症状，应送至就近回收点进行回收。"))
};
module.exports = cfg;

cc._RF.pop();