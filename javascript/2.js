var m2_con_part1=document.getElementById('m2_con_part1');
var m2_con_part1_opc=document.getElementById('m2_con_part1_opc');
var m2_con_part1_weizi=document.getElementById('m2_con_part1_weizi');
var time1=null,time2=null,time3=null,time4=null;
var step=0;
var max_step=30;
var every_opc=1/60;
var every_height=220/30
function run(){
	clearTimeout(time1);
	clearInterval(time2);
	time1=setTimeout(function(){
		time2=setInterval(function(){
			step++;
			if (step>=30) {
				step=30
			};
			m2_con_part1_opc.style.height=every_height*step+"px";
			m2_con_part1_opc.style.opacity=every_opc*step;
		},20)
	},20)	
}
m2_con_part1_opc.onmouseover=function(){
	run();
	m2_con_part1_opc.style.display=block;
}

