var qh=document.getElementById('qh');
var outer=document.getElementById('outer');
var liebiao=document.getElementById('liebiao');
var qh_left1=document.getElementById('qh_left1');
var qh_right1=document.getElementById('qh_right1');
var imgs=outer.getElementsByTagName('img');
var lis=liebiao.getElementsByTagName('li');
var time1=null,time2=null;
var x=0;
function autoMove(){
	time1=setInterval(function(){
		imgs[x].style.opacity=0;
		imgs[x].style.display="none";
		x++;
		if (x>=imgs.length) {
			x=0;
		};
		imgs[x].style.display="block";
		var step=0;
		var start=0;
		var end=1;
		var start_end=(end-start)/30;
		time2=setInterval(function(){
			step++;
			if (step>=30) {
				clearInterval(time2);
			};
			start+=start_end;
			imgs[x].style.opacity=start;
		},30)
		for (var i = 0; i < lis.length; i++) {
			lis[i].className="";
		};
		lis[x].className="show";
	},2000)
};
autoMove();
function every_step(){
	var step=0;
	var start=0;
	var end=1;
	var start_end=(end-start)/30;
	time2=setInterval(function(){
		step++;
		if (step>=30) {
			clearInterval(time2);
		};
		start+=start_end;
		imgs[x].style.opacity=start;
	},30)
}

function clear(){
	clearInterval(time1);
	clearInterval(time2);
}

//点击右边
qh_right1.onclick=function(){
	clear();
	imgs[x].style.opacity=0;
	imgs[x].style.display="none";
	x++;
	if (x>=imgs.length) {
		x=0;
	};
	imgs[x].style.display="block";
	every_step()
	for (var i = 0; i < lis.length; i++) {
		lis[i].className="";
	};
	lis[x].className="show";
	autoMove();
}
//点击左边
qh_left1.onclick=function(){
	clear();
	imgs[x].style.opacity=0;
	imgs[x].style.display="none";
	x--;
	if (x<0) {
		x=lis.length-1;
	};
	imgs[x].style.display="block";
	every_step();
	for (var i = 0; i < lis.length; i++) {
		lis[i].className="";
	};
	lis[x].className="show";
	autoMove();
}

//点击下边数字
for (var i = 0; i < lis.length; i++) {
	lis[i].onmouseover=function(){
		clear();
		for (var i = 0; i < lis.length; i++) {
			if (this==lis[i]) {
				imgs[x].style.opacity=0;
				imgs[x].style.display="none";
				x=i;
				imgs[x].style.display="block";
				every_step();
				for (var i = 0; i < lis.length; i++) {
					lis[i].className="";
				};
				lis[x].className="show";
				autoMove();
			};
		};
	}
};

//鼠标移入 左右两边的图片显示
qh.onmouseover=function(){
	qh_right1.style.display="block";
	qh_left1.style.display="block";
}
qh.onmouseout=function(){
	qh_right1.style.display="none";
	qh_left1.style.display="none";
}

//城市选择
function c_city(){
	var h_con_show=document.getElementById("h_con_show");
	var city=document.getElementById("city");
	var lis1=city.getElementsByTagName('li');
	var chengshi=document.getElementById("chengshi");
	var lis=city.getElementsByTagName('li');

	h_con_show.onmouseover=function(ev){
		city.style.display="block";
		h_con_show.style.background="#fff";
	}
	h_con_show.onmouseout=function(){
		city.style.display="none";
		h_con_show.style.background="rgb(225,225,225)";
	}
	for (var i = 0; i < lis.length; i++) {
		lis[i].onclick=function (){
			city.style.display="none";
			chengshi.innerHTML=this.innerHTML;
		}
	};
	$("#city li").eq(0).addClass("hov1").siblings().removeClass("hov1");
	$("#city li").each(function (i){
		$("#city li").eq(i).click(function (){
			$(this).addClass("hov1").siblings().removeClass("hov1");
		});
		$("#city li").eq(i).mouseover(function (){
			if (!$(this).hasClass("hov1")) {
				$(this).addClass("hov2").siblings().removeClass("hov2");
			};
		})
		$("#city li").eq(i).mouseout(function (){
			if (!$(this).hasClass("hov1")) {
				$(this).removeClass("hov2");
			};
		})

	})
}
c_city();

		
		
//促销 公告
var main_right2_2_1_1=document.getElementById('main_right2_2_1_1');
var main_right2_1=document.getElementById('main_right2_1');
var spans=main_right2_1.getElementsByTagName('span');
var uls=main_right2_2_1_1.getElementsByTagName('ul');
for (var i = 0; i < spans.length; i++) {
	spans[i].index=i;
	spans[i].onmouseover=function(){
		for (var j = 0; j < uls.length; j++) {
			if (this.index==j) {
				uls[j].className="main_right2_2";
			}else{
				uls[j].className="";
			}
		};
	}
};

//我的京东
var h_con_nav_part1=document.getElementById('h_con_nav_part1');
var myJd=document.getElementById('myJd');
var aS=document.getElementsByTagName('a');
h_con_nav_part1.onmouseover=function(ev){
	var Event=ev||window.event;
	if (Event.stopPropagation) {
		Event.stopPropagation();
	}else{
		Event.cancelBubble=true;
	}
	h_con_nav_part1.style.background="#fff";
	myJd.style.display="block";
	myJd.onclick=function(ev){
		var Event=ev||window.event;
		if (Event.stopPropagation) {
			Event.stopPropagation();
		}else{
			Event.cancelBubble=true;
		}
		var target=Event.target||Event.srcElement;
		console.log(target);
		if (target.nodeName=="A") {
			myJd.style.display="none";
			h_con_nav_part1.style.background="#E3E4E5";
		};
	}
}
myJd.onmouseout=function(){
	h_con_nav_part1.style.background="#E3E4E5";
	myJd.style.display="none";
}
h_con_nav_part1.onmouseout=function(){
	h_con_nav_part1.style.background="#E3E4E5";
	myJd.style.display="none";
}
//客户服务
var h_con_nav_part2=document.getElementById('h_con_nav_part2');
var myJd_2=document.getElementById('myJd_2');
h_con_nav_part2.onmouseover=function(ev){
	var Event=ev||window.event;
	if (Event.stopPropagation) {
		Event.stopPropagation();
	}else{
		Event.cancelBubble=true;
	}
	h_con_nav_part2.style.background="#fff";
	myJd_2.style.display="block";
	myJd_2.onclick=function(ev){
		var Event=ev||window.event;
		if (Event.stopPropagation) {
			Event.stopPropagation();
		}else{
			Event.cancelBubble=true;
		}
		var target=Event.target||Event.srcElement;
		console.log(target);
		if (target.nodeName=="A") {
			myJd_2.style.display="none";
			h_con_nav_part2.style.background="#E3E4E5";
		};
	}
}
myJd_2.onmouseout=function(){
	h_con_nav_part2.style.background="#E3E4E5";
	myJd_2.style.display="none";
}
h_con_nav_part2.onmouseout=function(){
	h_con_nav_part2.style.background="#E3E4E5";
	myJd_2.style.display="none";
}

//网站导航
var h_con_nav_part3=document.getElementById('h_con_nav_part3');
var myJd_3=document.getElementById('myJd_3');
h_con_nav_part3.onmouseover=function(ev){
	var Event=ev||window.event;
	if (Event.stopPropagation) {
		Event.stopPropagation();
	}else{
		Event.cancelBubble=true;
	}
	h_con_nav_part3.style.background="#fff";
	myJd_3.style.display="block";
	myJd_3.onclick=function(ev){
		var Event=ev||window.event;
		if (Event.stopPropagation) {
			Event.stopPropagation();
		}else{
			Event.cancelBubble=true;
		}
		var target=Event.target||Event.srcElement;
		console.log(target);
		if (target.nodeName=="A") {
			myJd_3.style.display="none";
			h_con_nav_part3.style.background="#E3E4E5";
		};
	}
}
myJd_3.onmouseout=function(){
	h_con_nav_part3.style.background="#E3E4E5";
	myJd_3.style.display="none";
}
h_con_nav_part3.onmouseout=function(){
	h_con_nav_part3.style.background="#E3E4E5";
	myJd_3.style.display="none";
}

//jsonp跨域 搜索
var txt=document.getElementById('txt');
var text_list=document.getElementById('text_list');
var wuyong=document.getElementById('wuyong');
txt.onkeyup=function(){
	wuyong.innerHTML="";
	var script=document.createElement('script');
	var url="http://suggestion.baidu.com/su?cb=abc&wd="+txt.value;
	script.src=url;
	wuyong.appendChild(script);
}
function abc(json){
	text_list.innerHTML="";
	for (var i = 0; i < json.s.length; i++) {
		var oli=document.createElement('li');
		oli.innerHTML=json.s[i];
		text_list.appendChild(oli);
	};
	var text_list_lis=text_list.getElementsByTagName('li');
	for (var j = json.s.length - 1; j >= 0; j--) {
		console.log(j);
		text_list_lis[j].onclick=function (){
			txt.value=this.innerHTML;
			text_list.style.display="none";
		}
	};
}
// 家用电器
function K(shu1,shu2){
	var list1=document.getElementById(shu1);
	var jiadian=document.getElementById(shu2);
	var aS=jiadian.getElementsByTagName('a')
	list1.onmouseover=function(){
		jiadian.style.display="block";
	}
	list1.onmouseout=function(){
		jiadian.style.display="none";
	}

	for (var i = 0; i < aS.length; i++) {
		aS[i].onclick=function(){
			jiadian.style.display="none";
		}
	};	
}
K("list1","jiadian");
K("list2","jiadian1");
K("list3","jiadian2");
	

//移动图片 轻微移动
function move_pic(shu1,shu2){
	var i_part1=document.getElementById(shu1);
	var i_part1_3_1=document.getElementById(shu2);
	var time3=null,time4=null;
	var y=i_part1_3_1.offsetTop;
	i_part1.onmouseover=function(){
		clearInterval(time3);
		clearInterval(time4);
		time3=setInterval(function(){
			y--;
			if (y<=10) {
				clearInterval(time3);
				y=10;
			};
			i_part1_3_1.style.top=y+"px";
		},50);

	}
	i_part1.onmouseout=function(){
		clearInterval(time3);
		clearInterval(time4);
		time4=setInterval(function(){
			y++;
			if (y>=17) {
				clearInterval(time4);
				y=17;
			};
			i_part1_3_1.style.top=y+"px";
		},50)	
	}	
}
move_pic("i_part1","i_part1_3_1");
move_pic("i1_i_part1","i1_i_part1_3_1");
move_pic("i2_i_part1","i2_i_part1_3_1");
move_pic("i3_i_part1","i3_i_part1_3_1");
move_pic("i4_i_part1","i4_i_part1_3_1");

//倒计时
function a(){
	var shuzi1=document.getElementById('shuzi1');
	var shuzi2=document.getElementById('shuzi2');
	var shuzi3=document.getElementById('shuzi3');
	var date=new Date();
	var hour=date.getHours();
	var minate=date.getMinutes();
	var second=date.getSeconds();
	var end_hour=23;
	var end_second=59;
	var end_minute=59;
	if (hour<22) {
		var x=end_hour-hour;
		var y=end_minute-minate;
		var z=end_second-second;
		shuzi3.innerHTML=getNum(x);
		shuzi2.innerHTML=getNum(y);;
		shuzi1.innerHTML=getNum(z);;
	};	
}
function getNum(num){
	if (num>9) {
		num=num;
	}else{
		num="0"+num;
	}
		return num
}
setInterval(a,1000);

//话费
var main_right3_1_1_3_1=document.getElementById('main_right3_1_1_3_1');
var main_right3_1_1_3_2=document.getElementById('main_right3_1_1_3_2');
var divs=main_right3_1_1_3_1.getElementsByTagName('div');
var olis=main_right3_1_1_3_2.getElementsByTagName('li');
for (var i = 0; i < divs.length; i++) {
	divs[i].index=i;
	divs[i].onmouseover=function(){
		for (var j = 0; j < olis.length; j++) {
			if (this.index==j) {
				olis[j].className="diyiping";
				divs[j].className="huafei";
			}else{
				olis[j].className="";
				divs[j].className="";
			}
		};
	}
};

//商品大图滚动
function b(){
	var outer1=document.getElementById('outer1');
	var inner1=document.getElementById('inner1');
	var p_con_btn1=document.getElementById('p_con_btn1');
	var p_con_btn2=document.getElementById('p_con_btn2');
	var lis=inner1.getElementsByTagName('li');
	p_con_btn1.onclick=function(){
		if (outer1.scrollLeft<=0) {
			outer1.scrollLeft=5*(lis[0].offsetWidth);
			return false;
		}
		outer1.scrollLeft-=5*(lis[0].offsetWidth);
	};
	p_con_btn2.onclick=function(){
		outer1.scrollLeft+=5*(lis[0].offsetWidth);
		if (outer1.scrollLeft>=5*(lis[0].offsetWidth)) {
			outer1.scrollLeft=0;
		};
		
	};
}
b();	

//领券中心图片
function c(canshu1,canshu2){
	var p2_2_1=document.getElementById(canshu1);
	var p2_2_1_1_4=document.getElementById(canshu2);
	var time=null,time1=null;
	var x=p2_2_1_1_4.offsetLeft;
	p2_2_1.onmouseover=function (){
		clearInterval(time);
		clearInterval(time1);
		time=setInterval(function (){
			x++;
			if (x>=p2_2_1.clientWidth-p2_2_1_1_4.clientWidth) {
				clearInterval(time);
				x=p2_2_1.clientWidth-p2_2_1_1_4.clientWidth
			};
			p2_2_1_1_4.style.left=x+"px";
		},15)
	}
	p2_2_1.onmouseout=function (){
		clearInterval(time);
		clearInterval(time1);
		time1=setInterval(function (){
			x--;
			if (x<=44) {
				clearInterval(time1);
				x=44;
			};
			p2_2_1_1_4.style.left=x+"px";
		},15)
	}
}
c("p2_2_1","p2_2_1_1_4");
c("p2_2_2","p2_2_1_1_4_1");
c("p2_2_3","p2_2_1_1_4_2");
c("p2_2_4","p2_2_1_1_4_3");
c("p2_2_5","p2_2_1_1_4_4");


//发现好货图片移动
function d(shu1,shu2){
	var p3_con1=document.getElementById(shu1);
	var p3_con1_2=document.getElementById(shu2);
	var time=null,time1=null;
	var x=p3_con1_2.offsetLeft;
	p3_con1.onmouseover=function (){
		clearInterval(time);
		clearInterval(time1);
		time=setInterval(function (){
			x--;
			if (x<=90) {
				clearInterval(time);
				x=90;
			};
			p3_con1_2.style.left=x+"px"
		},60)
	};
	p3_con1.onmouseout=function (){
		clearInterval(time);
		clearInterval(time1);
		time1=setInterval(function (){
			x++;
			if (x>=95) {
				clearInterval(time1);
				x=95;
			};
			p3_con1_2.style.left=x+"px"
		},60)
	};
}
d("p3_con1","p3_con1_2");
d("p3_con2","p3_con1_2_1");
d("p3_con3","p3_con1_2_2");
d("p3_con4","p3_con1_2_3");
d("p3_con5","p3_con1_2_4");
d("p3_con6","p3_con1_2_5");

//品牌头条
function e(shu1,shu2){
	var p3_con1=document.getElementById(shu1);
	var p3_con1_2=document.getElementById(shu2);
	var time=null,time1=null;
	var x=p3_con1_2.offsetLeft;
	p3_con1.onmouseover=function (){
		clearInterval(time);
		clearInterval(time1);
		time=setInterval(function (){
			x--;
			if (x<=23) {
				clearInterval(time);
				x=23;
			};
			p3_con1_2.style.left=x+"px"
		},60)
	};
	p3_con1.onmouseout=function (){
		clearInterval(time);
		clearInterval(time1);
		time1=setInterval(function (){
			x++;
			if (x>=28) {
				clearInterval(time1);
				x=28;
			};
			p3_con1_2.style.left=x+"px"
		},60)
	};
}
e("part3_2_con1","part3_2_con1_4");
e("part3_2_con2","part3_2_con1_4_1");

//排行榜
function f(){
	var p3_3_con_tit=document.getElementById('p3_3_con_tit');
	var p3_con_nr=document.getElementById('p3_con_nr');
	var select1=document.getElementById('select1');
	var as=p3_3_con_tit.getElementsByTagName('a');
	var lis=p3_con_nr.getElementsByTagName('li');
	for (var i = 0; i < as.length; i++) {
		as[i].index=i;
		as[i].onmouseover=function(){
			for (var j = 0; j < lis.length; j++) {
				if (this.index==j) {
					select1.style.left=j*78+"px";
					lis[j].className="show1";
				}else{
					lis[j].className="";
				}
			};
		}
	};
}
f();


//鼠标滚轮滚动  出现标题栏
function g(){
	var time=null,time1=null;
	var biaoti=document.getElementById('biaoti');
	window.onscroll=function (){
		var yy=document.documentElement.scrollTop||document.body.scrollTop;
		var k=biaoti.offsetTop;
		if (yy>=500) {
			clearInterval(time);
			clearInterval(time1);
			time=setInterval(function (){
				k++;
				if (k>=0) {
					clearInterval(time);
					k=0
				};
				biaoti.style.top=k+"px";
			},10)
		}else{
			clearInterval(time);
			clearInterval(time1);
			time1=setInterval(function (){
				k--;
				if (k<=-50) {
					clearInterval(time1);
					k=-50
				};
				biaoti.style.top=k+"px";
			},10)
		}
		
	}	
}
g();


//登陆京东 购物车
function h(shu1,shu2){
	var b_right1_1=document.getElementById(shu1);
	var b_right1_1_1=document.getElementById(shu2);
	var x=b_right1_1_1.offsetLeft;
	var time=null,time1=null;
	b_right1_1.onmouseover=function (){
		clearInterval(time);
		clearInterval(time1);
		time=setInterval(function (){
			x--;
			if (x<=-58) {
				clearInterval(time);
				x=-58;
			};
			b_right1_1_1.style.left=x+"px";
		},5)
		b_right1_1_1.style.background="#c81623";
	}
	b_right1_1.onmouseout=function (){
		clearInterval(time);
		clearInterval(time1);
		time1=setInterval(function (){
			x++;
			if (x>=35) {
				clearInterval(time1);
				x=35;
			};
			b_right1_1_1.style.left=x+"px";
		},5)
		b_right1_1_1.style.background="#7a6e6e";
	}
}
h("b_right1_1","b_right1_1_1");
h("b_right1_2","b_right1_1_2");
h("b_right1_3","b_right1_1_3");
h("b_right1_4","b_right1_1_4");
h("b_right1_5","b_right1_1_5");
h("b_right1_6","b_right1_1_6");
h("b_right1_7","b_right1_1_7");
h("b_right1_8","b_right1_1_8");


function ab(shu1,shu2){
	var b_right1_1=document.getElementById(shu1);
	var b_right1_1_1=document.getElementById(shu2);
	b_right1_1_1.onmouseover=function (){
		b_right1_1.style.background="red";
	}
	b_right1_1_1.onmouseout=function (){
		b_right1_1.style.background="#000";
	}
}
ab("b_right1_1","b_right1_1_1");
//点击登陆
function k(){
	var b_right1_1=document.getElementById('b_right1_1');
	var denglu=document.getElementById('denglu');
	var dianji=document.getElementById('dianji');
	b_right1_1.onclick=function (){
		denglu.style.display="block";
	}
	dianji.onclick=function (){
		denglu.style.display="none";
	}
}
k();

function l(){
	var denglu_con1=document.getElementById("denglu_con1");
	var denglu_con2=document.getElementById("denglu_con2");
	var h3s=denglu_con1.getElementsByTagName('h3');
	var lis=denglu_con2.getElementsByTagName('li');
	for (var i = 0; i < h3s.length; i++) {
		h3s[i].index=i;
		h3s[i].onclick=function (){
			for (var j = 0; j < lis.length; j++) {
				if (this.index==j) {
					lis[j].className="denglu_con2_1";
					h3s[j].className="show2";
				}else{
					lis[j].className="";
					h3s[j].className="";
				}
			};
		}
	};
}
l();

function A(){
	var erwei1=document.getElementById('erwei1');
	var erwei=document.getElementById('erwei');
	var erwei2=document.getElementById('erwei2');
	var x=erwei1.offsetLeft;
	var time=null,time1=null;
	erwei.onmouseover=function (){
		clearInterval(time);
		clearInterval(time1);
		time=setInterval(function (){
			x--;
			if (x<=0) {
				clearInterval(time);
				x=0;
			};
			erwei1.style.left=x+"px";
		},2)
		setTimeout(function (){
			erwei2.style.display="block";
		},132)
	}
	erwei.onmouseout=function (){
		clearInterval(time);
		clearInterval(time1);
		time1=setInterval(function (){
			x++;
			if (x>=66) {
				clearInterval(time1);
				x=66;
			};
			erwei1.style.left=x+"px";
		},2)
		setTimeout(function (){
			erwei2.style.display="none";
		},132)
	}

}
A();

//点击返回顶部
function B(){
	var b_right1_7=document.getElementById('b_right1_7');
	b_right1_7.onclick=function (){
		document.documentElement.scrollTop = document.body.scrollTop =0;
	}
}
B();


//享品质
function C(shu1,shu2){
	var yiru=document.getElementById(shu1);
	var p5_con1_1_left_1_3=document.getElementById(shu2);
	var time=null,time1=null;
	var x=p5_con1_1_left_1_3.offsetLeft;
	yiru.onmouseover=function (){
		clearInterval(time);
		clearInterval(time1);
		time=setInterval(function (){
			x--;
			if (x<=-10) {
				clearInterval(time);
				x=-10;
			};
			p5_con1_1_left_1_3.style.left=x+"px";
		},30)
	}
	yiru.onmouseout=function (){
		clearInterval(time);
		clearInterval(time1);
		time1=setInterval(function (){
			x++;
			if (x>=0) {
				clearInterval(time1);
				x=0;
			};
			p5_con1_1_left_1_3.style.left=x+"px";
		},30)
	}
}
C("yiru","p5_con1_1_left_1_3");
C("yiru1","p5_con1_1_left_1_3_1");
C("yiru2","p5_con1_1_left_1_3_2");
C("yiru3","p5_con1_1_left_1_3_3");
C("yiru4","p5_con1_1_left_1_3_4");
C("yiru5","p5_con1_1_left_1_3_5");
C("p6_con_left_con1_1","p6_con_left_con1_1_1");
C("mp6_con_left_con1_1","mp6_con_left_con1_1_1");

C("ap6_con_left_con1_1","ap6_con_left_con1_1_1");
C("bp6_con_left_con1_1","bp6_con_left_con1_1_1");

C("p6_con_left_bottom1_1","p6_con_left_bottom1_1_11");
C("p6_con_left_bottom1_1_1","p6_con_left_bottom1_1_1_1");
C("p6_con_left_bottom1_1_2","p6_con_left_bottom1_1_1_2");

C("mp6_con_left_bottom1_1","mp6_con_left_bottom1_1_11");
C("mp6_con_left_bottom1_1_1","mp6_con_left_bottom1_1_1_1");
C("mp6_con_left_bottom1_1_2","mp6_con_left_bottom1_1_1_2");

C("ap6_con_left_bottom1_1","ap6_con_left_bottom1_1_11");
C("ap6_con_left_bottom1_1_1","ap6_con_left_bottom1_1_1_1");
C("ap6_con_left_bottom1_1_2","ap6_con_left_bottom1_1_1_2");
C("bp6_con_left_bottom1_1","bp6_con_left_bottom1_1_11");
C("bp6_con_left_bottom1_1_1","bp6_con_left_bottom1_1_1_1");
C("bp6_con_left_bottom1_1_2","bp6_con_left_bottom1_1_1_2");

C("cp6_con_left_bottom1_1","cp6_con_left_bottom1_1_11");
C("cp6_con_left_bottom1_1_1","cp6_con_left_bottom1_1_1_1");
C("cp6_con_left_bottom1_1_2","cp6_con_left_bottom1_1_1_2");
C("dp6_con_left_bottom1_1","dp6_con_left_bottom1_1_11");
C("dp6_con_left_bottom1_1_1","dp6_con_left_bottom1_1_1_1");
C("dp6_con_left_bottom1_1_2","dp6_con_left_bottom1_1_1_2");
C("cp6_con_left_con1_1","cp6_con_left_con1_1_1");
C("dp6_con_left_con1_1","dp6_con_left_con1_1_1");

C("ep6_con_left_bottom1_1","ep6_con_left_bottom1_1_11");
C("ep6_con_left_bottom1_1_1","ep6_con_left_bottom1_1_1_1");
C("ep6_con_left_bottom1_1_2","ep6_con_left_bottom1_1_1_2");
C("fp6_con_left_bottom1_1","fp6_con_left_bottom1_1_11");
C("fp6_con_left_bottom1_1_1","fp6_con_left_bottom1_1_1_1");
C("fp6_con_left_bottom1_1_2","fp6_con_left_bottom1_1_1_2");
C("ep6_con_left_con1_1","ep6_con_left_con1_1_1");
C("fp6_con_left_con1_1","fp6_con_left_con1_1_1");

C("hp6_con_left_bottom1_1","hp6_con_left_bottom1_1_11");
C("hp6_con_left_bottom1_1_1","hp6_con_left_bottom1_1_1_1");
C("hp6_con_left_bottom1_1_2","hp6_con_left_bottom1_1_1_2");
C("gp6_con_left_bottom1_1","gp6_con_left_bottom1_1_11");
C("gp6_con_left_bottom1_1_1","gp6_con_left_bottom1_1_1_1");
C("gp6_con_left_bottom1_1_2","gp6_con_left_bottom1_1_1_2");
C("hp6_con_left_con1_1","hp6_con_left_con1_1_1");
C("gp6_con_left_con1_1","gp6_con_left_con1_1_1");

C("ip6_con_left_bottom1_1","ip6_con_left_bottom1_1_11");
C("ip6_con_left_bottom1_1_1","ip6_con_left_bottom1_1_1_1");
C("ip6_con_left_bottom1_1_2","ip6_con_left_bottom1_1_1_2");
C("jp6_con_left_bottom1_1","jp6_con_left_bottom1_1_11");
C("jp6_con_left_bottom1_1_1","jp6_con_left_bottom1_1_1_1");
C("jp6_con_left_bottom1_1_2","jp6_con_left_bottom1_1_1_2");
C("ip6_con_left_con1_1","ip6_con_left_con1_1_1");
C("jp6_con_left_con1_1","jp6_con_left_con1_1_1");

C("kp6_con_left_bottom1_1","kp6_con_left_bottom1_1_11");
C("kp6_con_left_bottom1_1_1","kp6_con_left_bottom1_1_1_1");
C("kp6_con_left_bottom1_1_2","kp6_con_left_bottom1_1_1_2");
C("lp6_con_left_bottom1_1","lp6_con_left_bottom1_1_11");
C("lp6_con_left_bottom1_1_1","lp6_con_left_bottom1_1_1_1");
C("lp6_con_left_bottom1_1_2","lp6_con_left_bottom1_1_1_2");
C("kp6_con_left_con1_1","kp6_con_left_con1_1_1");
C("lp6_con_left_con1_1","lp6_con_left_con1_1_1");

C("part9_con1_con1_1","part9_con1_con1_1_1_1");
C("mpart9_con1_con1_1","mpart9_con1_con1_1_1_1");
C("apart9_con1_con1_1","apart9_con1_con1_1_1_1");
C("part9_con1_con2_1","part9_con1_con2_1_1");
C("part9_con1_con2_2","part9_con1_con2_2_1");
C("apart9_con1_con2_1","apart9_con1_con2_1_1");
C("apart9_con1_con2_2","apart9_con1_con2_2_1");
C("mpart9_con1_con2_1","mpart9_con1_con2_1_1");
C("mpart9_con1_con2_2","mpart9_con1_con2_2_1");

// 爱生活
// GXG大牌日
function D(shu1,shu2){
	var yiru=document.getElementById(shu1);
	var p5_con1_1_left_1_3=document.getElementById(shu2);
	var time=null,time1=null;
	var x=p5_con1_1_left_1_3.offsetLeft;
	yiru.onmouseover=function (){
		clearInterval(time);
		clearInterval(time1);
		time=setInterval(function (){
			x--;
			if (x<=78) {
				clearInterval(time);
				x=78;
			};
			p5_con1_1_left_1_3.style.left=x+"px";
		},50)
	}
	yiru.onmouseout=function (){
		clearInterval(time);
		clearInterval(time1);
		time1=setInterval(function (){
			x++;
			if (x>=83) {
				clearInterval(time1);
				x=83;
			};
			p5_con1_1_left_1_3.style.left=x+"px";
		},50)
	}
}
D("p6_con_left_con2_1","p6_con_left_con2_1_3")
D("p6_con_left_con2_2","p6_con_left_con2_1_3_1")
D("p6_con_left_con2_3","p6_con_left_con2_1_3_2")
D("p6_con_left_con2_4","p6_con_left_con2_1_3_3")
D("mp6_con_left_con2_1","mp6_con_left_con2_1_3")
D("mp6_con_left_con2_2","mp6_con_left_con2_1_3_1")
D("mp6_con_left_con2_3","mp6_con_left_con2_1_3_2")
D("mp6_con_left_con2_4","mp6_con_left_con2_1_3_3")
D("ap6_con_left_con2_1","ap6_con_left_con2_1_3")
D("ap6_con_left_con2_2","ap6_con_left_con2_1_3_1")
D("ap6_con_left_con2_3","ap6_con_left_con2_1_3_2")
D("ap6_con_left_con2_4","ap6_con_left_con2_1_3_3")
D("bp6_con_left_con2_1","bp6_con_left_con2_1_3")
D("bp6_con_left_con2_2","bp6_con_left_con2_1_3_1")
D("bp6_con_left_con2_3","bp6_con_left_con2_1_3_2")
D("bp6_con_left_con2_4","bp6_con_left_con2_1_3_3")

D("cp6_con_left_con2_1","cp6_con_left_con2_1_3")
D("cp6_con_left_con2_2","cp6_con_left_con2_1_3_1")
D("cp6_con_left_con2_3","cp6_con_left_con2_1_3_2")
D("cp6_con_left_con2_4","cp6_con_left_con2_1_3_3")
D("dp6_con_left_con2_1","dp6_con_left_con2_1_3")
D("dp6_con_left_con2_2","dp6_con_left_con2_1_3_1")
D("dp6_con_left_con2_3","dp6_con_left_con2_1_3_2")
D("dp6_con_left_con2_4","dp6_con_left_con2_1_3_3")

D("ep6_con_left_con2_1","ep6_con_left_con2_1_3")
D("ep6_con_left_con2_2","ep6_con_left_con2_1_3_1")
D("ep6_con_left_con2_3","ep6_con_left_con2_1_3_2")
D("ep6_con_left_con2_4","ep6_con_left_con2_1_3_3")
D("fp6_con_left_con2_1","fp6_con_left_con2_1_3")
D("fp6_con_left_con2_2","fp6_con_left_con2_1_3_1")
D("fp6_con_left_con2_3","fp6_con_left_con2_1_3_2")
D("fp6_con_left_con2_4","fp6_con_left_con2_1_3_3")

D("gp6_con_left_con2_1","gp6_con_left_con2_1_3")
D("gp6_con_left_con2_2","gp6_con_left_con2_1_3_1")
D("gp6_con_left_con2_3","gp6_con_left_con2_1_3_2")
D("gp6_con_left_con2_4","gp6_con_left_con2_1_3_3")
D("hp6_con_left_con2_1","hp6_con_left_con2_1_3")
D("hp6_con_left_con2_2","hp6_con_left_con2_1_3_1")
D("hp6_con_left_con2_3","hp6_con_left_con2_1_3_2")
D("hp6_con_left_con2_4","hp6_con_left_con2_1_3_3")

D("ip6_con_left_con2_1","ip6_con_left_con2_1_3")
D("ip6_con_left_con2_2","ip6_con_left_con2_1_3_1")
D("ip6_con_left_con2_3","ip6_con_left_con2_1_3_2")
D("ip6_con_left_con2_4","ip6_con_left_con2_1_3_3")
D("jp6_con_left_con2_1","jp6_con_left_con2_1_3")
D("jp6_con_left_con2_2","jp6_con_left_con2_1_3_1")
D("jp6_con_left_con2_3","jp6_con_left_con2_1_3_2")
D("jp6_con_left_con2_4","jp6_con_left_con2_1_3_3")

D("kp6_con_left_con2_1","kp6_con_left_con2_1_3")
D("kp6_con_left_con2_2","kp6_con_left_con2_1_3_1")
D("kp6_con_left_con2_3","kp6_con_left_con2_1_3_2")
D("kp6_con_left_con2_4","kp6_con_left_con2_1_3_3")
D("lp6_con_left_con2_1","lp6_con_left_con2_1_3")
D("lp6_con_left_con2_2","lp6_con_left_con2_1_3_1")
D("lp6_con_left_con2_3","lp6_con_left_con2_1_3_2")
D("lp6_con_left_con2_4","lp6_con_left_con2_1_3_3")

D("part9_con1_con1_2_1","part9_con1_con1_2_1_1");
D("part9_con1_con1_2_2","part9_con1_con1_2_1_2");
D("apart9_con1_con1_2_1","apart9_con1_con1_2_1_1");
D("apart9_con1_con1_2_2","apart9_con1_con1_2_1_2");
D("mpart9_con1_con1_2_1","mpart9_con1_con1_2_1_1");
D("mpart9_con1_con1_2_2","mpart9_con1_con1_2_1_2");


//下部图标滚动
function E(shu1,shu2,shu3,shu4){
	var p6_logo11=document.getElementById(shu1);
	var p6_logo1=document.getElementById(shu2);
	var iconfont1=document.getElementById(shu3);
	var iconfont2=document.getElementById(shu4);
	var lis=p6_logo1.getElementsByTagName('li');
	var patt_len=6*lis[0].offsetWidth;
	p6_logo11.scrollLeft=patt_len;
	var x=1;
	var time7=null;
	iconfont2.onclick=function (){
		clearInterval(time7);
		x++;
		if (x>=4) {
			p6_logo11.scrollLeft=patt_len;
			x=2
		};
		var s=0;
		var t1=p6_logo11.scrollLeft;
		console.log(x)
		console.log(p6_logo11.scrollLeft)
		var d1=patt_len*x;
		//alert(d1);
		var every_ste1=(d1-t1)/50;
		time7=setInterval(function (){
			s++;
			if (s>=50) {
				clearInterval(time7);
			};
			t1+=every_ste1;
			p6_logo11.scrollLeft=t1;
		},2)
	}
	iconfont1.onclick=function (){
		clearInterval(time7);
		x--;
		if (x<0) {
			p6_logo11.scrollLeft=patt_len*2;
			x=1;
		};
		var s=0;
		var t1=p6_logo11.scrollLeft;
		console.log(x)
		console.log(p6_logo11.scrollLeft)
		var d1=patt_len*x;
		//alert(d1);
		var every_ste1=(d1-t1)/50;
		time7=setInterval(function (){
			s++;
			if (s>=50) {
				clearInterval(time7);
			};
			t1+=every_ste1;
			p6_logo11.scrollLeft=t1;
		},2)
	}
}
E("p6_logo11","p6_logo1","iconfont1","iconfont2");
E("ap6_logo11","ap6_logo1","aiconfont1","aiconfont2");
E("bp6_logo11","bp6_logo1","biconfont1","biconfont2");
E("mp6_logo11","mp6_logo11","miconfont1","miconfont2");
E("ep6_logo11","ep6_logo1","eiconfont1","eiconfont2");
E("fp6_logo11","fp6_logo11","ficonfont1","ficonfont2");
E("ip6_logo11","ep6_logo1","iiconfont1","iiconfont2");
E("jp6_logo11","fp6_logo11","jiconfont1","jiconfont2");
E("kp6_logo11","kp6_logo1","kiconfont1","kiconfont2");
E("lp6_logo11","lp6_logo11","liconfont1","liconfont2");
//电脑数码
function F(shu1,shu2,shu3,shu4){
	var p6_logo11=document.getElementById(shu1);
	var p6_logo1=document.getElementById(shu2);
	var iconfont1=document.getElementById(shu3);
	var iconfont2=document.getElementById(shu4);
	var lis=p6_logo1.getElementsByTagName('li');
	var patt_len=12*lis[0].offsetWidth;
	p6_logo11.scrollLeft=patt_len;
	var x=1;
	var time7=null;
	iconfont2.onclick=function (){
		clearInterval(time7);
		x++;
		if (x>=4) {
			p6_logo11.scrollLeft=patt_len;
			x=2
		};
		var s=0;
		var t1=p6_logo11.scrollLeft;
		console.log(x)
		console.log(p6_logo11.scrollLeft)
		var d1=patt_len*x;
		//alert(d1);
		var every_ste1=(d1-t1)/50;
		time7=setInterval(function (){
			s++;
			if (s>=50) {
				clearInterval(time7);
			};
			t1+=every_ste1;
			p6_logo11.scrollLeft=t1;
		},2)
	}
	iconfont1.onclick=function (){
		clearInterval(time7);
		x--;
		if (x<0) {
			p6_logo11.scrollLeft=patt_len*2;
			x=1;
		};
		var s=0;
		var t1=p6_logo11.scrollLeft;
		console.log(x)
		console.log(p6_logo11.scrollLeft)
		var d1=patt_len*x;
		//alert(d1);
		var every_ste1=(d1-t1)/50;
		time7=setInterval(function (){
			s++;
			if (s>=50) {
				clearInterval(time7);
			};
			t1+=every_ste1;
			p6_logo11.scrollLeft=t1;
		},2)
	}
}
F("p8_logo11","p8_logo1","p8_iconfont1","p8_iconfont2");
F("hp8_logo11","hp8_logo1","hp8_iconfont1","hp8_iconfont2");

function G(shu1,shu2,shu3,shu4){
	var p6_logo11=document.getElementById(shu1);
	var p6_logo1=document.getElementById(shu2);
	var iconfont1=document.getElementById(shu3);
	var iconfont2=document.getElementById(shu4);
	var lis=p6_logo1.getElementsByTagName('li');
	var patt_len=4*lis[0].offsetWidth;
	p6_logo11.scrollLeft=patt_len;
	var x=1;
	var time7=null;
	iconfont2.onclick=function (){
		clearInterval(time7);
		x++;
		if (x>=4) {
			p6_logo11.scrollLeft=patt_len;
			x=2
		};
		var s=0;
		var t1=p6_logo11.scrollLeft;
		console.log(x)
		console.log(p6_logo11.scrollLeft)
		var d1=patt_len*x;
		//alert(d1);
		var every_ste1=(d1-t1)/50;
		time7=setInterval(function (){
			s++;
			if (s>=50) {
				clearInterval(time7);
			};
			t1+=every_ste1;
			p6_logo11.scrollLeft=t1;
		},2)
	}
	iconfont1.onclick=function (){
		clearInterval(time7);
		x--;
		if (x<0) {
			p6_logo11.scrollLeft=patt_len*2;
			x=1;
		};
		var s=0;
		var t1=p6_logo11.scrollLeft;
		console.log(x)
		console.log(p6_logo11.scrollLeft)
		var d1=patt_len*x;
		//alert(d1);
		var every_ste1=(d1-t1)/50;
		time7=setInterval(function (){
			s++;
			if (s>=50) {
				clearInterval(time7);
			};
			t1+=every_ste1;
			p6_logo11.scrollLeft=t1;
		},2)
	}
}
G("part9_logo","part9-logo1","jjiconfont1","jjiconfont2");
G("apart9_logo","apart9-logo1","ajjiconfont1","ajjiconfont2");
G("mpart9_logo","mpart9-logo1","mjjiconfont1","mjjiconfont2");


//够特色
function H(shu1,shu2){
	var yiru=document.getElementById(shu1);
	var p5_con1_1_left_1_3=document.getElementById(shu2);
	var time=null,time1=null;
	var x=p5_con1_1_left_1_3.offsetLeft;
	yiru.onmouseover=function (){
		clearInterval(time);
		clearInterval(time1);
		time=setInterval(function (){
			x++;
			if (x>=.5) {
				clearInterval(time);
				x=.5;
			};
			p5_con1_1_left_1_3.style.left=x+"px";
		},30)
	}
	yiru.onmouseout=function (){
		clearInterval(time);
		clearInterval(time1);
		time1=setInterval(function (){
			x--;
			if (x<=0) {
				clearInterval(time1);
				x=0;
			};
			p5_con1_1_left_1_3.style.left=x+"px";
		},30)
	}
}
H("p10_con_part1","p10_con_part1_3");
H("p10_con_part2","p10_con_part1_31");
H("p10_con_part3","p10_con_part1_32");
H("p10_con_part4","p10_con_part1_33");
H("p10_con_part5","p10_con_part1_34");
H("p10_con_part6","p10_con_part1_35");
H("p10_con_part7","p10_con_part1_36");



//左边条
$(function (){
	$("#huiding").click(function (){
		$(window).scroll(function (){
			$("#left_nav_bar_con li").removeClass("cl");
		});
		$("body,html").stop().animate({
			scrollTop:0
		},"slow",function (){
			scroll();
		});
	});
	$("#left_nav_bar_con li").click(function (){
		var j = $(this).index();
		$(window).scroll(function (){
			$("#left_nav_bar_con li").eq(j).addClass("cl").siblings().removeClass("cl");
		});
		$(document.body).stop().animate({
			scrollTop:$(".dd").eq(j).offset().top
		},"slow",function (){
			scroll();
		});		
	});
	//滑层;
	scroll();
	function scroll(){
		$(window).scroll(function (){
			var winT = $(window).scrollTop();
			var firstDs = $(".dd:first").offset().top;
			var winH = $(window).height();
			if( winT>=firstDs-winH ){   
				$("#left_nav_bar").fadeIn(500);
			}else{
				$("#left_nav_bar").fadeOut(500);
			};
			$(".dd").each(function (i){
				var thisT = $(".dd").eq(i).offset().top;
				if( winT+winH>thisT+(winH-400)){
					$("#left_nav_bar_con li").eq(i).addClass("cl").siblings().removeClass("cl");
				};
			});
		});
	};
});


//飞机票
function G(shu1,shu2,shu3,shu4){
	var main_right3_1=document.getElementById(shu1);
	var main_right3_1_1=document.getElementById(shu2);
	var main_right3_1_1_3=document.getElementById(shu3);
	var xx=document.getElementById(shu4);
	var time=null,time1=null,time2=null,time3=null;
	main_right3_1_1.onmouseover=function (){
		clearInterval(time);
		clearInterval(time1);
		clearInterval(time2);
		clearInterval(time3);
		var x=main_right3_1.offsetTop;
		time2=setTimeout(function (){
			main_right3_1_1_3.style.display="block";
			time=setInterval(function(){
				x--;
				if (x<=-40) {
					clearInterval(time);
				x=-40;
				};
				main_right3_1.style.top=x+"px";
			},2)
		},1)
	}
	xx.onclick=function (){
		clearInterval(time);
		clearInterval(time1);
		clearInterval(time2);
		clearInterval(time3);
		var x=main_right3_1.offsetTop;
		time3=setTimeout(function (){
			main_right3_1_1_3.style.display="none";
			time1=setInterval(function(){
				x++;
				if (x>=0) {
					clearInterval(time1);
					x=0;
				};
				main_right3_1.style.top=x+"px";
			},2)
		},1)
	}
}
G("main_right3_1","main_right3_1_1","main_right3_1_1_3","xx");



