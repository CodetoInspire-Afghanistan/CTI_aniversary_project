$(document).ready(function(){
                $("#first").click(function(){
                    $("#info").show("8000");
                    $("#info1").show("8000");
                    $("#info3").show("8000");

                });
                  $("#imm7").click(function(){
                    $(this).hide();
                    $(".logo7").show("8000");
                });
                  $("#text").keypress(function(event){
        if(event.which==13){
            
            if($("#tek").prop("checked")){
                $("#click").click();
                event.preventDefault();
            }
                
        }

    });
    $("#click").click(function(){
        var a= $("#text").val();
        var b= $(".con").html();
        $(".con").html(b+"<br>"+a);
        $("#text").val("");
        $(".con").scrollTop($(".con").prop("scrollHeight"))

    });
            });