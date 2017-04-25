// 生成table

var SSR_List = ["huiyeji", "huaniaojuan", "yimulian", "huang", "qingxingdeng", "jiutuntongzi", "huangchuanzhizhu", "cimutongzi", "yaodaoji", "xiaolunan", "liangmianfo", "yanmo", "datiangou"];
var SR_List = ["yijinzhentian", "jinyuji", "wannianzhu", "yanyanluo", "heitongzi", "bore", "guhuoniao", "yaoqinshi", "guishihei", "guishibai", "luoxinfu", "xuenv", "bailang", "xixueji", "yaohu", "taohuayao", "haifangzhu", "shimengmo", "kuileishi", "mengpo", "yinghuayao", "panguan", "gunv", "tiaotiaogege", "qingji", "erkounv", "fenghuanghuo", "guinvhongye", "huibishou", "lianyou", "quanshen", "yecha", "qingfangzhu", "baitongzi"];
var R_List = ["gulonghuo", "yatiangou", "liyujing", "jiaotu", "tieshu", "shouwu", "shifagui", "shantu", "qingwaciqi", "yingcao", "tiaotiaomeimei", "guanhu", "duyanxiaoseng", "sanweihu", "bingyong", "zhuofutongzi", "shantong", "limao", "hetong", "tongnan", "tongnv", "egui", "wushizhiling", "yunv", "tiaotiaodidi", "wugushi", "choushizhinv", "hudiejing", "jue", "jiumingmao"];
var N_List = ["tianxieguiqing", "tianxieguichi", "tianxieguihuang", "tianxieguilv", "tangzhishanyao", "zhoushen", "tubi", "tidengxiaoseng", "denglonggui", "daomuxiaogui", "chishe", "jishenghun"];

var nameKey = {
	"huiyeji":"辉夜姬", "huaniaojuan":"花鸟卷", "yimulian":"一目连", "huang":"慌", "qingxingdeng":"青行灯", "jiutuntongzi":"酒吞童子", "huangchuanzhizhu":"荒川之主", "cimutongzi":"茨木童子", "yaodaoji":"妖刀姬", "xiaolunan":"小鹿男", "liangmianfo":"两面佛", "yanmo":"阎魔", "datiangou":"大天狗",
	"yijinzhentian":"以津真天", "jinyuji":"金鱼姬", "wannianzhu":"万年竹", "yanyanluo":"烟烟罗", "heitongzi":"黑童子", "bore":"般若", "guhuoniao":"姑获鸟", "yaoqinshi":"妖琴师", "guishihei":"鬼使黑", "guishibai":"鬼使白", "luoxinfu":"络新妇", "xuenv":"雪女", "bailang":"白狼", "xixueji":"吸血姬", "yaohu":"妖狐", "taohuayao":"桃花妖", "haifangzhu":"海坊主", "shimengmo":"食梦貘", "kuileishi":"傀儡师", "mengpo":"孟婆", "yinghuayao":"樱花妖", "panguan":"判官", "gunv":"骨女", "tiaotiaogege":"跳跳哥哥", "qingji":"青姬", "erkounv":"二口女", "fenghuanghuo":"凤凰火", "guinvhongye":"鬼女红叶", "huibishou":"惠比寿", "lianyou":"镰鼬", "quanshen":"犬神", "yecha":"夜叉", "qingfangzhu":"青坊主", "baitongzi":"白童子",
	"gulonghuo":"古笼火", "yatiangou":"鸦天狗", "liyujing":"鲤鱼精", "jiaotu":"椒图", "tieshu":"铁鼠", "shouwu":"首无", "shifagui":"食发鬼", "shantu":"山兔", "qingwaciqi":"青蛙瓷器", "yingcao":"莹草", "tiaotiaomeimei":"跳跳妹妹", "guanhu":"管狐", "duyanxiaoseng":"独眼小僧", "sanweihu":"三尾狐", "bingyong":"兵俑", "zhuofutongzi":"座敷童子", "shantong":"山童", "limao":"狸猫", "hetong":"河童", "tongnan":"童男", "tongnv":"童女", "egui":"饿鬼", "wushizhiling":"武士之灵", "yunv":"雨女", "tiaotiaodidi":"跳跳弟弟", "wugushi":"巫蛊师", "choushizhinv":"丑时之女", "hudiejing":"蝴蝶精", "jue":"觉", "jiumingmao":"九命猫",
	"tianxieguiqing":"天邪鬼青", "tianxieguichi":"天邪鬼赤", "tianxieguihuang":"天邪鬼黄", "tianxieguilv":"天邪鬼绿", "tangzhishanyao":"唐纸扇妖", "zhoushen":"帚神", "tubi":"涂壁", "tidengxiaoseng":"提灯小僧", "denglonggui":"灯笼鬼", "daomuxiaogui":"盗墓小鬼", "chishe":"赤舌", "jishenghun":"寄生魂"
}


// 创建式神主函数
function main(){

	var ssrTemp = new Array();	// 存放所ssr有单元格
	var srTemp = new Array();
	var rTemp = new Array();
	var nTemp = new Array();
	
	for(var i=0; i<SSR_List.length; i++){
		ssrTemp[ssrTemp.length] = creatTD("img\\ssr_img\\", SSR_List[i]);
	}
	for(var i=0; i<SR_List.length; i++){
		srTemp[srTemp.length] = creatTD("img\\sr_img\\", SR_List[i]);
	}
	for(var i=0; i<R_List.length; i++){
		rTemp[rTemp.length] = creatTD("img\\r_img\\", R_List[i]);
	}
	for(var i=0; i<N_List.length; i++){
		nTemp[nTemp.length] = creatTD("img\\n_img\\", N_List[i]);
	}
	
	// 创建所有
	creatTable("ssr_div", ssrTemp);
	creatTable("sr_div", srTemp);
	creatTable("r_div", rTemp);
	creatTable("n_div", nTemp);
	
	// 初始只显示SSR, 设置其他的隐藏
	document.getElementById("sr_div").style.display="none";//隐藏
	document.getElementById("r_div").style.display="none";//隐藏
	document.getElementById("n_div").style.display="none";//隐藏
	

}

// 创建单元格函数
function creatTD(addr, name){
	var aLink = document.createElement("a");
	aLink.href = "javascript:void(0);";
	aLink.className = "picLink" 
	aLink.onclick = function(){
		var rightDiv = document.getElementById("right");
		rightDiv.innerHTML = nameKey[name];
	};
	
	var img = document.createElement("img");
	img.className = "pic";
	img.src = addr + name + ".jpg"
	
	aLink.appendChild(img);
	
	var td = document.createElement("td");
	td.appendChild(aLink);
	
	return td;
}

// 创建图片表格
function creatTable(name, list){
	var containDiv = document.getElementById(name);
	var containTr = document.createElement("tr");	// 创建行
	var sum = 1;
	for(var i=0; i<list.length; i++){
		containTr.appendChild(list[i]);
		sum++;
		if(sum%5 == 1){
			containDiv.appendChild(containTr);
			containTr = document.createElement("tr");
			sum = 1;
		}
	}
	containDiv.appendChild(containTr);

}

// 创建名字表格
function creatName(){
	
}




// 显示点击的式神(SSR,SR,R,N 四个按钮)
function showme(name){
	var nameList = ["ssr_div", "sr_div", "r_div", "n_div"]
	for(var i=0; i<nameList.length; i++){
		if(nameList[i] != name){
			var div = document.getElementById(nameList[i]).style.display="none";
		}
	}
	document.getElementById(name).style.display="block";
}

main();