
$(document).ready(function(){
		$("#morsalbtn,#shabanabtn,#bustanbtn,#ourteambtn").click(function(id){
		if(this.id == "morsalbtn"){
			$("#shabana").hide();
			$("#ourteam").hide();
			$("#bustan").hide();
			$("#morsal").show();
				
		}
		else if(this.id == "shabanabtn"){
			$("#morsal").hide();
			$("#bustan").hide();
			$("#ourteam").hide();
			$("#shabana").show();
			
		}
		else if(this.id == "bustanbtn"){
			$("#morsal").hide();
			$("#shabana").hide();
			$("#ourteam").hide();
			$("#bustan").show();
		}
		else if(this.id == "ourteambtn"){
			$("#morsal").hide();
			$("#shabana").hide();
			$("#bustan").hide();
			$("#ourteam").show();
		}
		});
		});
	