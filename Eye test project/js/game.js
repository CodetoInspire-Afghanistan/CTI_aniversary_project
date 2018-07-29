var audio = new Audio('sound/videoplayback.mp3');
audio.play();

var second=30;
var intervalHandler;
window.setTimeout(start,1000);
function start(){

intervalHandler = window.setInterval(timer,1000);}
function timer (){
var displayTimer=document.getElementById("displaytimer");
displayTimer.innerHTML=second;
if (second===0) {
  clearInterval(intervalHandler);

  $("#gameDiv").remove();
  $("#failed").show();

}
second -- ;

}



$(document).ready(function(){
	$("#btn").click(function(){
		
window.location.reload(true);
	});
});



var truee=0;
var falsee=0;

$(document).ready(function(){
		$("#div0, #div1, #div2, #div3,#div4, #div5, #div6, #div7, #div8, #div9, #div10, #div11,#div12,#div13,#div14,#div15,#div16,#div17,#div18,#div19,#div20,#div21,#div22,#div23,#div24,#div25,#div26,#div27,#div28,#div29,#div30,#div31,#div32,#div33,#div34,#div35,#div36,#div37,#div38,#div39,#div40,#div41").click(function(id){
		if(this.id == "div0"){
				truee ++;
				
				document.getElementById("truee").innerHTML=truee;


			}		
		else {
				falsee ++;
				document.getElementById("falsee").innerHTML=falsee;
			}
		$("#first").remove();
		$("#second").show();

		});
		});
$(document).ready(function(){
		$("#div-0, #div-1, #div-2, #div-3,#div-4, #div-5, #div-6, #div-7, #div-8, #div-9, #div-10, #div-11,#div-12,#div-13,#div-14,#div-15,#div-16,#div-17,#div-18,#div-19,#div-20,#div-21,#div-22,#div-23,#div-24,#div-25,#div-26,#div-27,#div-28,#div-29,#div-30,#div-31,#div-32,#div-33,#div-34,#div-35,#div-36,#div-37,#div-38,#div-39,#div-40,#div-41").click(function(id){

		if(this.id == "div-30"){
				truee ++;
				document.getElementById("truee").innerHTML=truee;
			}
		else {
				falsee ++;
				document.getElementById("falsee").innerHTML=falsee;
			}
		$("#second").remove();
		$("#Third").show();

		});
		});
$(document).ready(function(){
		$("#divs0, #divs1, #divs2, #divs3,#divs4, #divs5, #divs6, #divs7, #divs8, #divs9, #divs10, #divs11,#divs12,#divs13,#divs14,#divs15,#divs16,#divs17,#divs18,#divs19,#divs20,#divs21,#divs22,#divs23,#divs24,#divs25,#divs26,#divs27,#divs28,#divs29,#divs30,#divs31,#divs32,#divs33,#divs34,#divs35,#divs36,#divs37,#divs38,#divs39,#divs40,#divs41").click(function(id){

			if(this.id == "divs20"){
				truee ++;
				document.getElementById("truee").innerHTML=truee;
			}
			else {
				falsee ++;
				document.getElementById("falsee").innerHTML=falsee;
			}
		$("#Third").remove();
		$("#Fourth").show();

		});
		});

$(document).ready(function(){
		$("#diva0, #diva1, #diva2, #diva3,#diva4, #diva5, #diva6, #diva7, #diva8, #diva9, #diva10, #diva11,#diva12,#diva13,#diva14,#diva15,#diva16,#diva17,#diva18,#diva19,#diva20,#diva21,#diva22,#diva23,#diva24,#diva25,#diva26,#diva27,#diva28,#diva29,#diva30,#diva31,#diva32,#diva33,#diva34,#diva35,#diva36,#diva37,#diva38,#diva39,#diva40,#diva41").click(function(id){

			if(this.id == "diva36"){
				truee ++;
				document.getElementById("truee").innerHTML=truee;
			}
			else {
				falsee ++;
				document.getElementById("falsee").innerHTML=falsee;
			}
		$("#Fourth").remove();
		$("#Fifth").show();

		});
		});

$(document).ready(function(){
		$("#divb0, #divb1, #divb2, #divb3,#divb4, #divb5, #divb6, #divb7, #divb8, #divb9, #divb10, #divb11,#divb12,#divb13,#divb14,#divb15,#divb16,#divb17,#divb18,#divb19,#divb20,#divb21,#divb22,#divb23,#divb24,#divb25,#divb26,#divb27,#divb28,#divb29,#divb30,#divb31,#divb32,#divb33,#divb34,#divb35,#divb36,#divb37,#divb38,#divb39,#divb40,#divb41").click(function(id){

			if(this.id == "divb4"){
				truee ++;
				document.getElementById("truee").innerHTML=truee;
			}
			else {
				falsee ++;
				document.getElementById("falsee").innerHTML=falsee;
			}
		$("#Fifth").remove();
		$("#Sixth").show();

		});
		});
$(document).ready(function(){
		$("#divc0, #divc1, #divc2, #divc3,#divc4, #divc5, #divc6, #divc7, #divc8, #divc9, #divc10, #divc11,#divc12,#divc13,#divc14,#divc15,#divc16,#divc17,#divc18,#divc19,#divc20,#divc21,#divc22,#divc23,#divc24,#divc25,#divc26,#divc27,#divc28,#divc29,#divc30,#divc31,#divc32,#divc33,#divc34,#divc35,#divc36,#divc37,#divc38,#divc39,#divc40,#divc41").click(function(id){

			if(this.id == "divc41"){
				truee ++;
				document.getElementById("truee").innerHTML=truee;
			}
			else {
				falsee ++;
				document.getElementById("falsee").innerHTML=falsee;
			}
		$("#Sixth").remove();
		$("#Seventh").show();

		});
		});

$(document).ready(function(){
		$("#divd0, #divd1, #divd2, #divd3,#divd4, #divd5, #divd6, #divd7, #divd8, #divd9, #divd10, #divd11,#divd12,#divd13,#divd14,#divd15,#divd16,#divd17,#divd18,#divd19,#divd20,#divd21,#divd22,#divd23,#divd24,#divd25,#divd26,#divd27,#divd28,#divd29,#divd30,#divd31,#divd32,#divd33,#divd34,#divd35,#divd36,#divd37,#divd38,#divd39,#divd40,#divd41").click(function(id){

			if(this.id == "divd1"){
				truee ++;
				document.getElementById("truee").innerHTML=truee;
			}
			else {
				falsee ++;
				document.getElementById("falsee").innerHTML=falsee;
			}
		$("#Seventh").remove();
		$("#Eighth").show();

		});
		});

$(document).ready(function(){
		$("#dive0, #dive1, #dive2, #dive3,#dive4, #dive5, #dive6, #dive7, #dive8, #dive9, #dive10, #dive11,#dive12,#dive13,#dive14,#dive15,#dive16,#dive17,#dive18,#dive19,#dive20,#dive21,#dive22,#dive23,#dive24,#dive25,#dive26,#dive27,#dive28,#dive29,#dive30,#dive31,#dive32,#dive33,#dive34,#dive35,#dive36,#dive37,#dive38,#dive39,#dive40,#dive41").click(function(id){

			if(this.id == "dive6"){
				truee ++;
				document.getElementById("truee").innerHTML=truee;
			}
			else {
				falsee ++;
				document.getElementById("falsee").innerHTML=falsee;
			}
		$("#Eighth").remove();
		$("#nine").show();

		});
		});

$(document).ready(function(){
		$("#divf0, #divf1, #divf2, #divf3,#divf4, #divf5, #divf6, #divf7, #divf8, #divf9, #divf10, #divf11,#divf12,#divf13,#divf14,#divf15,#divf16,#divf17,#divf18,#divf19,#divf20,#divf21,#divf22,#divf23,#divf24,#divf25,#divf26,#divf27,#divf28,#divf29,#divf30,#divf31,#divf32,#divf33,#divf34,#divf35,#divf36,#divf37,#divf38,#divf39,#divf40,#divf41").click(function(id){

			if(this.id == "divf18"){
				truee ++;
				document.getElementById("truee").innerHTML=truee;
			}
			else {
				falsee ++;
				document.getElementById("falsee").innerHTML=falsee;
			}
		$("#nine").remove();
		$("#tin").show();

		});
		});
$(document).ready(function(){
		$("#divg0, #divg1, #divg2, #divg3,#divg4, #divg5, #divg6, #divg7, #divg8, #divg9, #divg10, #divg11,#divg12,#divg13,#divg14,#divg15,#divg16,#divg17,#divg18,#divg19,#divg20,#divg21,#divg22,#divg23,#divg24,#divg25,#divg26,#divg27,#divg28,#divg29,#divg30,#divg31,#divg32,#divg33,#divg34,#divg35,#divg36,#divg37,#divg38,#divg39,#divg40,#divg41").click(function(id){

			if(this.id == "divg28"){
				truee ++;
				document.getElementById("truee").innerHTML=truee;
			}
			else {
				falsee ++;
				document.getElementById("falsee").innerHTML=falsee;
			}
		$("#tin").remove();
		$("#elevon").show();

		});
		});


$(document).ready(function(){
		$("#divh0, #divh1, #divh2, #divh3,#divh4, #divh5, #divh6, #divh7, #divh8, #divh9, #divh10, #divh11,#divh12,#divh13,#divh14,#divh15,#divh16,#divh17,#divh18,#divh19,#divh20,#divh21,#divh22,#divh23,#divh24,#divh25,#divh26,#divh27,#divh28,#divh29,#divh30,#divh31,#divh32,#divh33,#divh34,#divh35,#divh36,#divh37,#divh38,#divh39,#divh40,#divh41").click(function(id){

			if(this.id == "divh4"){
				truee ++;
				document.getElementById("truee").innerHTML=truee;
			}
			else {
				falsee ++;
				document.getElementById("falsee").innerHTML=falsee;
			}
		$("#elevon").remove();
		$("#tovelf").show();

		});
		});

$(document).ready(function(){
		$("#divi0, #divi1, #divi2, #divi3,#divi4, #divi5, #divi6, #divi7, #divi8, #divi9, #divi10, #divi11,#divi12,#divi13,#divi14,#divi15,#divi16,#divi17,#divi18,#divi19,#divi20,#divi21,#divi22,#divi23,#divi24,#divi25,#divi26,#divi27,#divi28,#divi29,#divi30,#divi31,#divi32,#divi33,#divi34,#divih35,#divi36,#divi37,#divi38,#divi39,#divi40,#divi41").click(function(id){

			if(this.id == "divi14"){
				truee ++;
				document.getElementById("truee").innerHTML=truee;
			}
			else {
				falsee ++;
				document.getElementById("falsee").innerHTML=falsee;
			}
		$("#tovelf").remove();
		$("#tirty").show();

		});
		});

$(document).ready(function(){
		$("#divj0, #divj1, #divj2, #divj3,#divj4, #divj5, #divj6, #divj7, #divj8, #divj9, #divj10, #divj11,#divj12,#divj13,#divj14,#divj15,#divj16,#divj17,#divj18,#divj19,#divj20,#divj21,#divj22,#divj23,#divj24,#divj25,#divj26,#divj27,#divj28,#divj29,#divj30,#divj31,#divj32,#divj33,#divj34,#divj35,#divj36,#divj37,#divj38,#divj39,#divj40,#divj41").click(function(id){

			if(this.id == "divj28"){
				truee ++;
				document.getElementById("truee").innerHTML=truee;
			}
			else {
				falsee ++;
				document.getElementById("falsee").innerHTML=falsee;
			}
		$("#tirty").remove();
		$("#forty").show();

		});
		});

$(document).ready(function(){
		$("#divk0, #divk1, #divk2, #divk3,#divk4, #divk5, #divk6, #divk7, #divk8, #divk9, #divk10, #divk11,#divk12,#divk13,#divk14,#divk15,#divk16,#divk17,#divk18,#divk19,#divk20,#divk21,#divk22,#divk23,#divk24,#divk25,#divk26,#divk27,#divk28,#divk29,#divk30,#divk31,#divk32,#divk33,#divk34,#divk35,#divk36,#divk37,#divk38,#divk39,#divk40,#divk41").click(function(id){

			if(this.id == "divk37"){
				truee ++;
				document.getElementById("truee").innerHTML=truee;
			}
			else {
				falsee ++;
				document.getElementById("falsee").innerHTML=falsee;
			}
		$("#forty").remove();
		$("#fifty").show();

		});
		});

$(document).ready(function(){
		$("#divl0, #divl1, #divl2, #divl3,#divl4, #divl5, #divl6, #divl7, #divl8, #divl9, #divl10, #divl11,#divl12,#divl13,#divl14,#divl15,#divl16,#divl17,#divl18,#divl19,#divl20,#divl21,#divl22,#divl23,#divl24,#divl25,#divl26,#divl27,#divl28,#divl29,#divl30,#divl31,#divl32,#divl33,#divl34,#divl35,#divl36,#divl37,#divl38,#divl39,#divl40,#divl41").click(function(id){

			if(this.id == "divl40"){
				truee ++;
				document.getElementById("truee").innerHTML=truee;
			}
			else {
				falsee ++;
				document.getElementById("falsee").innerHTML=falsee;
			}
			$("#fifty").remove();
			$("#text").remove();

		if( truee >= 10){		
			
			$("#displaytimer").remove();
			$("#divend1").show();

}
		else if( truee >= 7) {
			$("#displaytimer").remove();
			$("#divend2").show();
		}
		else {
			$("#displaytimer").remove();
			$("#divend3").show();
		}
		});
		});










