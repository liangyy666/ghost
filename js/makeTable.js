// 生成table

var SSR_List = ["yukuijin","nulianglusheng","yuzaoqian","xuetongzi","bianhua","huiyeji", "huaniaojuan", "yimulian", "huang", "qingxingdeng", "jiutuntongzi", "huangchuanzhizhu", "cimutongzi", "yaodaoji", "xiaolunan", "liangmianfo", "yanmo", "datiangou"];
var SR_List = ["rihefang","yi","baimugui","zhuiyueshen","shuweng","xiaosongwan","xiazhongshaonv","zhen","yijinzhentian", "jinyuji", "wannianzhu", "yanyanluo", "heitongzi", "bore", "guhuoniao", "yaoqinshi", "guishihei", "guishibai", "luoxinfu", "xuenv", "bailang", "xixueji", "yaohu", "taohuayao", "haifangzhu", "shimengmo", "kuileishi", "mengpo", "yinghuayao", "panguan", "gunv", "tiaotiaogege", "qingji", "erkounv", "fenghuanghuo", "guinvhongye", "huibishou", "lianyou", "quanshen", "yecha", "qingfangzhu", "baitongzi"];
var R_List = ["xiaoxiuzhishou","shuzhu","tuwan","gulonghuo", "yatiangou", "liyujing", "jiaotu", "tieshu", "shouwu", "shifagui", "shantu", "qingwaciqi", "yingcao", "tiaotiaomeimei", "guanhu", "duyanxiaoseng", "sanweihu", "bingyong", "zhuofutongzi", "shantong", "limao", "hetong", "tongnan", "tongnv", "egui", "wushizhiling", "yunv", "tiaotiaodidi", "wugushi", "choushizhinv", "hudiejing", "jue", "jiumingmao"];
var N_List = ["tianxieguiqing", "tianxieguichi", "tianxieguihuang", "tianxieguilv", "tangzhishanyao", "zhoushen", "tubi", "tidengxiaoseng", "denglonggui", "daomuxiaogui", "chishe", "jishenghun"];

var nameKey = {
	"yukuijin":"御馈津","nulianglusheng":"奴良陆生","yuzaoqian":"玉藻前","xuetongzi":"雪童子","bianhua":"彼岸花", "huiyeji":"辉夜姬", "huaniaojuan":"花鸟卷", "yimulian":"一目连", "huang":"荒", "qingxingdeng":"青行灯", "jiutuntongzi":"酒吞童子", "huangchuanzhizhu":"荒川之主", "cimutongzi":"茨木童子", "yaodaoji":"妖刀姬", "xiaolunan":"小鹿男", "liangmianfo":"两面佛", "yanmo":"阎魔", "datiangou":"大天狗",
	"rihefang":"日和坊","yi":"弈","baimugui":"百目鬼","zhuiyueshen":"追月神","shuweng":"书翁","xiaosongwan":"小松丸","xiazhongshaonv":"匣中少女", "zhen":"鸩","yijinzhentian":"以津真天", "jinyuji":"金鱼姬", "wannianzhu":"万年竹", "yanyanluo":"烟烟罗", "heitongzi":"黑童子", "bore":"般若", "guhuoniao":"姑获鸟", "yaoqinshi":"妖琴师", "guishihei":"鬼使黑", "guishibai":"鬼使白", "luoxinfu":"络新妇", "xuenv":"雪女", "bailang":"白狼", "xixueji":"吸血姬", "yaohu":"妖狐", "taohuayao":"桃花妖", "haifangzhu":"海坊主", "shimengmo":"食梦貘", "kuileishi":"傀儡师", "mengpo":"孟婆", "yinghuayao":"樱花妖", "panguan":"判官", "gunv":"骨女", "tiaotiaogege":"跳跳哥哥", "qingji":"清姬", "erkounv":"二口女", "fenghuanghuo":"凤凰火", "guinvhongye":"鬼女红叶", "huibishou":"惠比寿", "lianyou":"镰鼬", "quanshen":"犬神", "yecha":"夜叉", "qingfangzhu":"青坊主", "baitongzi":"白童子",
	"xiaoxiuzhishou":"小袖之手","shuzhu":"数珠","tuwan":"兔丸","gulonghuo":"古笼火", "yatiangou":"鸦天狗", "liyujing":"鲤鱼精", "jiaotu":"椒图", "tieshu":"铁鼠", "shouwu":"首无", "shifagui":"食发鬼", "shantu":"山兔", "qingwaciqi":"青蛙瓷器", "yingcao":"萤草", "tiaotiaomeimei":"跳跳妹妹", "guanhu":"管狐", "duyanxiaoseng":"独眼小僧", "sanweihu":"三尾狐", "bingyong":"兵俑", "zhuofutongzi":"座敷童子", "shantong":"山童", "limao":"狸猫", "hetong":"河童", "tongnan":"童男", "tongnv":"童女", "egui":"饿鬼", "wushizhiling":"武士之灵", "yunv":"雨女", "tiaotiaodidi":"跳跳弟弟", "wugushi":"巫蛊师", "choushizhinv":"丑时之女", "hudiejing":"蝴蝶精", "jue":"觉", "jiumingmao":"九命猫",
	"tianxieguiqing":"天邪鬼青", "tianxieguichi":"天邪鬼赤", "tianxieguihuang":"天邪鬼黄", "tianxieguilv":"天邪鬼绿", "tangzhishanyao":"唐纸伞妖", "zhoushen":"帚神", "tubi":"涂壁", "tidengxiaoseng":"提灯小僧", "denglonggui":"灯笼鬼", "daomuxiaogui":"盗墓小鬼", "chishe":"赤舌", "jishenghun":"寄生魂"
}


// 创建式神主函数
function main(){
	//---对数组中式神排序
	SSR_List.sort();
	SR_List.sort();
	R_List.sort();
	N_List.sort();


	var ssrTemp = new Array();	// 存放所ssr有单元格
	var ssrNameTemp = new Array();
	var srTemp = new Array();
	var srNameTemp = new Array();
	var rTemp = new Array();
	var rNameTemp = new Array();
	var nTemp = new Array();
	var nNameTemp = new Array();
	

	for(var i=0; i<SSR_List.length; i++){
		ssrTemp[ssrTemp.length] = creatImgTD("img\\ssr_img\\", SSR_List[i]);
		ssrNameTemp[ssrNameTemp.length] = creatNameTD(nameKey[SSR_List[i]]);
	}
	for(var i=0; i<SR_List.length; i++){
		srTemp[srTemp.length] = creatImgTD("img\\sr_img\\", SR_List[i]);
		srNameTemp[srNameTemp.length] = creatNameTD(nameKey[SR_List[i]]);
	}
	for(var i=0; i<R_List.length; i++){
		rTemp[rTemp.length] = creatImgTD("img\\r_img\\", R_List[i]);
		rNameTemp[rNameTemp.length] = creatNameTD(nameKey[R_List[i]]);
	}
	for(var i=0; i<N_List.length; i++){
		nTemp[nTemp.length] = creatImgTD("img\\n_img\\", N_List[i]);
		nNameTemp[nNameTemp.length] = creatNameTD(nameKey[N_List[i]]);
	}
	
	// 创建所有
	creatTable("ssr_div", ssrTemp, ssrNameTemp);
	creatTable("sr_div", srTemp, srNameTemp);
	creatTable("r_div", rTemp, rNameTemp);
	creatTable("n_div", nTemp, nNameTemp);
	
	// 初始只显示SSR, 设置其他的隐藏
	document.getElementById("sr_div").style.display="none";//隐藏
	document.getElementById("r_div").style.display="none";//隐藏
	document.getElementById("n_div").style.display="none";//隐藏
	
	// 设置图片宽度

	
	
	
}

// 创建文字单元格
function creatNameTD(name){
	var divT = document.createElement("div");
	divT.innerHTML = name;
	divT.style.cssText += 'text-align:center';
	
	var td = document.createElement("td");
	td.appendChild(divT);
	
	return td;
}


// 创建图片单元格函数
function creatImgTD(addr, name){
	var aLink = document.createElement("a");
	// aLink.href = "javascript:void(0);";
	aLink.href = "#right";			// 跳转到查找结果
	aLink.className = "picLink" 
	// 图片的点击事件
	aLink.onclick = function(){
		var rightDiv = document.getElementById("right");
		var listINFO = searchGhost(nameKey[name]);
		var showinfo = "";
		for(var i=0;i<listINFO.length;i++){
			showinfo += listINFO[i];
		}
		if(showinfo == ""){
			rightDiv.innerHTML = "没找到该式神";
		}
		else{
			rightDiv.innerHTML = showinfo;
		}
			

	};
	
	var img = document.createElement("img");
	img.className = "pic";
	img.src = addr + name + ".jpg"
	img.onload = function(){
		img.width = document.body.clientWidth/5 - document.body.clientWidth/100;
		img.height = document.body.clientWidth/5 - document.body.clientWidth/100;
	}
	
	aLink.appendChild(img);
	
	var td = document.createElement("td");
	td.appendChild(aLink);
	
	return td;
}

// 创建表格
function creatTable(name, imgList, nameList){
	var containDiv = document.getElementById(name);
	var containImgTr = document.createElement("tr");	// 创建图片行
	var containNameTr = document.createElement("tr");	// 创建文字行
	var sum = 1;
	for(var i=0; i<imgList.length; i++){
		containImgTr.appendChild(imgList[i]);
		containNameTr.appendChild(nameList[i]);
		sum++;
		// document.body.clientWidth	// 网页可见区域宽度
		if(sum%5 == 1){
			containDiv.appendChild(containImgTr);
			containDiv.appendChild(containNameTr);
			containImgTr = document.createElement("tr");
			containNameTr = document.createElement("tr");
			sum = 1;
		}
	}
	containDiv.appendChild(containImgTr);
	containDiv.appendChild(containNameTr);

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

// 搜索按钮的查找函数
function search(){
	var searchvalue = document.getElementById("searchvalue").value;	// 获取用户输入值

	// 不能确定用户输入的是线索还是式神名字，所以先从线索库里转换名字，
	// changeName为保存名字和线索的键值对
	var nameList = new Array();			// 所有可能的式神名字
	for(var nameKey in changeName){
		if(changeName[nameKey].indexOf(searchvalue)>=0){
			nameList[nameList.length] = nameKey;
		}
	}
	

	var rightDiv = document.getElementById("right");
	var showinfo = "搜索结果：<br/>";
	// if语句判断上面的查找是否有结果；
	if(nameList.length>0){
		// alert("列表大于0")
		for(var n=0;n<nameList.length;n++){
			showinfo += "<span style=\"color:#ff0000;\">" + nameList[n] + "</span>"+ "<br/><br/>"
			var listINFO = searchGhost(nameList[n]);
			for(var i=0;i<listINFO.length;i++){
				showinfo += listINFO[i];
			}
		}
	}
	else{
		// alert("列表小于0")
		showinfo += "<span style=\"color:#ff0000;\">" + searchvalue + "</span>"+ "<br/><br/>"
		var listINFO = searchGhost(searchvalue);
		for(var i=0;i<listINFO.length;i++){
			showinfo += listINFO[i];
		}
	}


	
	rightDiv.innerHTML = showinfo;
	rightDiv.scrollIntoView();	// 转到显示结果
	
}


//------------------------ 右边显示部分  ----------------------------------------------------

function searchGhost(name){

	var listTemp = new Array();	// 存放找到的结果
	for(var i=0; i<chapterList.length; i++){
		var info = "";
		// 查找某个章节
		for(var j=0; j<chapterList[i].ghost.length; j++){
			if(chapterList[i].ghost[j].indexOf(name)>0){
				// info += chapterList[i].ghost[j] + "<br/>";
				info += changeColor(name,chapterList[i].ghost[j]) + "<br/>";
			}
		}
		// 结束某个章节的查找
		if(info != ""){
			info = chapterList[i].name + "<br/>" + info + "<br/>" + "<br/>";
			listTemp[listTemp.length] = info
		}
	}
	
	return listTemp;
}

function changeColor(name, instring){
	// "食发鬼2  丑时之女×2 食发鬼×1 兵俑×1"
	// <span style="color:#ff0000;">298976731</span>
	var loca = instring.lastIndexOf(name)
	var tempStr = "";
	tempStr = instring.substring(0,loca) + "<span style=\"color:#ff0000;\">" + instring.substring(loca,loca+name.length+3) + "</span>" + instring.substring(loca+name.length+3, instring.length);
	return tempStr;
	
}
//------------------------------------------------------------------------------------
main();