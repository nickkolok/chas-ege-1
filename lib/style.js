'use strict';
nastr.style={fon:'white',pan:'#e9b96e',menuLinkTarget:"_self"};//Оформление по умолчанию
if(egeok || (document.referrer.search(/\/\/ege-ok\.ru/)+1)){
	//Если с сайта ege-ok.ru, меняем оформление
	nastr.style.fon='white';
	nastr.style.pan='#DED';
	document.write('<style>div.egeok{display:block;}</style>');
//	$('.egeok').css('display','auto');
}else if(izvk || _4ege){
	nastr.style.fon='#FFF';
	nastr.style.pan='#DDF';
}else if(document.referrer.search(/\/\/edu\.ru/)+1){
	nastr.style.fon='white';
	nastr.style.menuLinkTarget='_self';
}

try{
	if(parsedJSON){
		nastr.style.importFrom(parsedJSON.style);
	}
}catch(e){};

document.write('<style>');
document.write('body, .fon{');
document.write('	background-color:'+nastr.style.fon+';');
document.write('}');
document.write('#prov_knopki, #panel, ul.pureCssMenu,ul.pureCssMenu ul, ul.pureCssMenu a, ul.pureCssMenu li.dis a:hover, ul.pureCssMenu li.sep a:hover, ul.pureCssMenu li a.pureCssMenui0{');
document.write('	background-color:'+nastr.style.pan+';');
document.write('}');
document.write('ul.pureCssMenu li:hover>a, ul.pureCssMenu li a:hover, ul.pureCssMenu li a.pureCssMenui0:hover, ul.pureCssMenu li.dis a:hover, ul.pureCssMenu li.sep a:hover {');
document.write('	background-color:'+nastr.style.fon+';');
document.write('}');
document.write('.anythingSlider .arrow span {');
document.write('	color:'+nastr.style.pan+';');
document.write('}');
document.write('#inf {');
document.write('	border: 2px ridge'+nastr.style.pan+';');
document.write('	border-top:none;');
document.write('}');
document.write('#sovety{');
document.write("	font:13.5px bold;");
document.write("	font-family:'liberation_sans';");
document.write('}');
document.write('#menucenter{');
document.write("	font:14px bold;");
document.write("	font-family:'liberation_sans';");
document.write('}');
document.write('</style>');
document.write('<style id="imported">');
try{
	document.write(''+(nastr.style.strCSS).neutralizeXSS());
}catch(e){}
document.write('</style>');
