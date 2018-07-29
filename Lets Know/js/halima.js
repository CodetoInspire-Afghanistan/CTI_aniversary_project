var score=0;
$(document).ready(function(){
		$("#correct,#a, #c").click(function(id){
			if(this.id == "correct"){
				score ++;
				document.getElementById("score").innerHTML=score;
			}
			else{
				$("#info").show();
				$("#tick").show();
				document.getElementById("score").innerHTML=score;

			}
			$("#correct").attr("disabled", true);
			$("#a").attr("disabled", true);
			$("#c").attr("disabled", true);
		});
		});
$(document).ready(function(){
	$("#btn_first").click(function(){
	$("#first").remove();
	$("#second").show();
		});
		});
// second
$(document).ready(function(){
		$("#s_correct,#s_b, #s_c").click(function(id){
			if(this.id == "s_correct"){
				score ++;
				document.getElementById("score").innerHTML=score;
			}
			else{
				$("#info2").show();
				$("#tick").show();
				document.getElementById("score").innerHTML=score;

			}
 
 			$("#s_correct").attr("disabled", true);
			$("#s_b").attr("disabled", true);
			$("#s_c").attr("disabled", true);
		});
		});

$(document).ready(function(){
	$("#btn_second").click(function(){
	$("#second").remove();
	$("#thrid").show();
		});
		});

//third
$(document).ready(function(){
		$("#t_a,#t_b, #t_correct").click(function(id){
			if(this.id == "t_correct"){
				score ++;
				document.getElementById("score").innerHTML=score;
			}
			else{
				$("#info3").show();
				$("#tick").show();
				document.getElementById("score").innerHTML=score;

			}
			$("#t_correct").attr("disabled", true);
			$("#t_b").attr("disabled", true);
			$("#t_a").attr("disabled", true);

		});
		});
$(document).ready(function(){
	$("#btn_thrid").click(function(){
		
	$("#thrid").remove();
	$("#froth").show();
		});
		});

//forth

$(document).ready(function(){
		$("#f_correct,#f_c, #f_b").click(function(id){
			if(this.id == "f_correct"){
				score ++;
				document.getElementById("score").innerHTML=score;
			}
			else{
				$("#info4").show();
				$("#tick").show();
				document.getElementById("score").innerHTML=score;

			}
			$("#f_correct").attr("disabled", true);
			$("#f_b").attr("disabled", true);
			$("#f_c").attr("disabled", true);
		});
		});
$(document).ready(function(){
	$("#btn_froth").click(function(){

	$("#froth").remove();
	$("#fifth").show();
		});
		});

//fifth

$(document).ready(function(){
		$("#fi_correct,#fi_c, #fi_b").click(function(id){
			if(this.id == "fi_correct"){
				score ++;
				document.getElementById("score").innerHTML=score;
			}
			else{
				$("#info5").show();
				$("#tick").show();
				document.getElementById("score").innerHTML=score;

			}
			$("#fi_correct").attr("disabled", true);
			$("#fi_b").attr("disabled", true);
			$("#fi_c").attr("disabled", true);
		});
		});
$(document).ready(function(){
	$("#btn_fifth").click(function(){
	$("#fifth").remove();
	$("#sixth").show();
		});
		});
//sixth


$(document).ready(function(){
		$("#si_correct,#si_a, #si_b").click(function(id){
			if(this.id == "si_correct"){
				score ++;
				document.getElementById("score").innerHTML=score;
			}
			else{
				$("#info6").show();
				$("#tick").show();
				document.getElementById("score").innerHTML=score;

			}
			$("#si_correct").attr("disabled", true);
			$("#si_b").attr("disabled", true);
			$("#si_c").attr("disabled", true);
		});
		});
$(document).ready(function(){
	$("#btn_sixth").click(function(){
	$("#sixth").remove();
	$("#seventh").show();
		});
		});


//seventh
$(document).ready(function(){
		$("#sa_correct,#sa_b, #sa_c").click(function(id){
			if(this.id == "sa_correct"){
				score ++;
				document.getElementById("score").innerHTML=score;
			}
			else{
				$("#info7").show();
				$("#tick").show();
				document.getElementById("score").innerHTML=score;

			}
			$("#sa_correct").attr("disabled", true);
			$("#sa_b").attr("disabled", true);
			$("#sa_c").attr("disabled", true);
		});
		});

$(document).ready(function(){
	$("#btn_seventh").click(function(){
	$("#seventh").remove();
	$("#eight").show();
		});
		});
//eight
$(document).ready(function(){
		$("#e_correct,#e_b, #e_c").click(function(id){
			if(this.id == "e_correct"){
				score ++;
				document.getElementById("score").innerHTML=score;
			}
			else{
				$("#info8").show();
				$("#tick").show();
				document.getElementById("score").innerHTML=score;
			}
			$("#e_correct").attr("disabled", true);
			$("#e_b").attr("disabled", true);
			$("#e_c").attr("disabled", true);
		});
		});

$(document).ready(function(){
	$("#btn_eight").click(function(){

	$("#eight").remove();
	$("#ninth").show();
		});
		});
//ninth
$(document).ready(function(){
		$("#n_a,#n_b, #n_correct").click(function(id){
			if(this.id == "n_correct"){
				score ++;
				document.getElementById("score").innerHTML=score;
			}
			else{
				$("#info9").show();
				$("#tick").show();
				document.getElementById("score").innerHTML=score;
			}
			$("#n_correct").attr("disabled", true);
			$("#n_b").attr("disabled", true);
			$("#n_a").attr("disabled", true);

		});
		});

$(document).ready(function(){
	$("#btn_ninth").click(function(){

	$("#ninth").remove();
	$("#tenth").show();
		});
		});
//tenth
$(document).ready(function(){
		$("#b_a,#b_correct, #b_c").click(function(id){
			if(this.id == "b_correct"){
				score ++;
				document.getElementById("score").innerHTML=score;
			}
			else{
				$("#info10").show();
				$("#tick").show();
				document.getElementById("score").innerHTML=score;
			}
			$("#b_correct").attr("disabled", true);
			$("#b_a").attr("disabled", true);
			$("#b_c").attr("disabled", true);

		});
		});

$(document).ready(function(){
	$("#btn_tenth").click(function(){

	$("#tenth").remove();
	if(score>=8){
		$("#happy").show();

	}
	else if(score>=6){

		alert("you was not bad")
	}
	else{

		alert("try more")
	}
	
		});
		});
