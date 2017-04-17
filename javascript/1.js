var con=document.getElementById('con');
var divs=con.getElementsByTagName('div');
var bottom=document.getElementById('bottom');
var div1s=bottom.getElementsByTagName('div');
for (var i = 0; i < divs.length; i++) {
	divs[i].index=i;
	divs[i].onmouseover=function(){
		for (var j = 0; j < div1s.length; j++) {
			if (this.index==j) {
				divs[j].className="part";
				div1s[j].className="bottom1";
			}else{
				divs[j].className="";
				div1s[j].className="";
			}
		};
	}
};