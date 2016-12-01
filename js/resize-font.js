var minP=20;
var maxP=30;

var minA=15;
var maxA=21;

var minH3=21;
var maxH3=27;

var minH2=31;
var maxH2=37;

var minH1=43;
var maxH1=49;

function standardFontSize(){
	var p = document.getElementsByTagName('p');
	for(i=0;i<p.length;i++) {
	  p[i].style.fontSize = "17px"
   }
   
   var a = document.getElementsByTagName('a');
	for(i=0;i<a.length;i++) {
	  a[i].style.fontSize = "17px"
   }
   
   var h3 = document.getElementsByTagName('h3');
	for(i=0;i<h3.length;i++) {
	  h3[i].style.fontSize = "23px"
   }
   
   var h2 = document.getElementsByTagName('h2');
	for(i=0;i<h2.length;i++) {
	  h2[i].style.fontSize = "33px"
   }
   
   var h1 = document.getElementsByTagName('h1');
	for(i=0;i<h1.length;i++) {
	  h1[i].style.fontSize = "45px"
   }
	
}


function increaseFontSize() {
	var p = document.getElementsByTagName('p');
   for(i=0;i<p.length;i++) {
	  if(p[i].style.fontSize) {
		 var s = parseInt(p[i].style.fontSize.replace("px",""));
	  } else {
		 var s = 17;
	  }
	  if(s!=maxP) {
		 s += 1;
	  }
	  p[i].style.fontSize = s+"px"
   }
   
   var a = document.getElementsByTagName('a');
   for(i=0;i<a.length;i++) {
	  if(a[i].style.fontSize) {
		 var s1 = parseInt(a[i].style.fontSize.replace("px",""));
	  } else {
		 var s1 = 17;
	  }
	  if(s1!=maxA) {
		 s1 += 1;
	  }
	  a[i].style.fontSize = s1+"px"
   }
   
	var h3 = document.getElementsByTagName('h3');
   for(i=0;i<h3.length;i++) {
	  if(h3[i].style.fontSize) {
		 var s3 = parseInt(h3[i].style.fontSize.replace("px",""));
	  } else {
		 var s3 = 25;
	  }
	  if(s3!=maxH3) {
		 s3 += 1;
	  }
	  h3[i].style.fontSize = s3+"px"
   }
   
   var h2 = document.getElementsByTagName('h2');
   for(i=0;i<h2.length;i++) {
	  if(h2[i].style.fontSize) {
		 var s2 = parseInt(h2[i].style.fontSize.replace("px",""));
	  } else {
		 var s2 = 33;
	  }
	  if(s2!=maxH2) {
		 s2 += 1;
	  }
	  h2[i].style.fontSize = s2+"px"
   }
   
   var h1 = document.getElementsByTagName('h1');
   for(i=0;i<h1.length;i++) {
	  if(h1[i].style.fontSize) {
		 var s1 = parseInt(h1[i].style.fontSize.replace("px",""));
	  } else {
		 var s1 = 45;
	  }
	  if(s1!=maxH1) {
		 s1 += 1;
	  }
	  h1[i].style.fontSize = s1+"px"
   }
   
   
   
}

function decreaseFontSize() {
   var p = document.getElementsByTagName('p');
   for(i=0;i<p.length;i++) {
	  if(p[i].style.fontSize) {
		 var s = parseInt(p[i].style.fontSize.replace("px",""));
	  } else {
		 var s = 17;
	  }
	  if(s!=minP) {
		 s -= 1;
	  }
	  p[i].style.fontSize = s+"px"
   } 
	
   var a = document.getElementsByTagName('a');
   for(i=0;i<a.length;i++) {
	  if(a[i].style.fontSize) {
		 var s1 = parseInt(a[i].style.fontSize.replace("px",""));
	  } else {
		 var s1 = 17;
	  }
	  if(s1!=minA) {
		 s1 -= 1;
	  }
	  a[i].style.fontSize = s1+"px"
   }
   
	var h3 = document.getElementsByTagName('h3');
   for(i=0;i<h3.length;i++) {
	  if(h3[i].style.fontSize) {
		 var s3 = parseInt(h3[i].style.fontSize.replace("px",""));
	  } else {
		 var s3 = 25;
	  }
	  if(s3!=minH3) {
		 s3 -= 1;
	  }
	  h3[i].style.fontSize = s3+"px"
   }
   
   var h2 = document.getElementsByTagName('h2');
   for(i=0;i<h2.length;i++) {
	  if(h2[i].style.fontSize) {
		 var s2 = parseInt(h2[i].style.fontSize.replace("px",""));
	  } else {
		 var s2 = 33;
	  }
	  if(s2!=minH2) {
		 s2 -= 1;
	  }
	  h2[i].style.fontSize = s2+"px"
   }
   
   var h1 = document.getElementsByTagName('h1');
   for(i=0;i<h1.length;i++) {
	  if(h1[i].style.fontSize) {
		 var s1 = parseInt(h1[i].style.fontSize.replace("px",""));
	  } else {
		 var s1 = 45;
	  }
	  if(s1!=minH1) {
		 s1 -= 1;
	  }
	  h1[i].style.fontSize = s1+"px"
   }
   
}