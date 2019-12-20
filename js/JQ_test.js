let design = {
    color:"red",
    background:"yellow",
    border:"solid black 3px"
}

$(document).ready(
    function(){
        $("#submitButton").click(function(){
            alert($("#text1").val() +" Submitted!");
            $("img").removeClass("styleclass");
            
        });

        $("#text1").on("keypress", function(){
            $("#subtitle").hide();
        });

        $("#addClass").click(function(){
            $("img").toggleClass("styleclass");//toggle stylesheet
            // $("img").addClass("styleclass");
        });

        $("#hide").click(function(){
            $("img").hide();//hide and show
            $("#show").removeAttr('disabled'); 
        });

        $("#show").click(function(){
            $("img").show();
            $("#hide").removeAttr('disabled'); 
        });

        $("#fadeIn").click(function(){
            $("img").fadeIn("slow");//fade in and fade out
            $("#show").prop('disabled', true);
            $("#hide").removeAttr('disabled'); 
        });

        $("#fadeOut").click(function(){
            $("img").fadeOut("fast");
            $("#hide").prop('disabled', true);
            $("#show").removeAttr('disabled'); //enable/disable buttons
        });

        $("img").click(function(){
            $(this).hide();
        });

        $("#flagButton").click(function(){
            $("#flagColorOne").fadeIn("slow");
            $("#flagColorTwo").fadeIn("fast");
            $("#flagColorThree").fadeIn(3000);
        });

        $("#slide_up").on("click", function(){
            $("#div2").slideUp("slow");
        });

        $("#slide_down").on("click", function(){
            $("#div2").slideDown("slow");
        });

        $(function(){
            $("#draggable").draggable();
            $("#div2").droppable();
        });

        $("#date_input").datepicker();
    }
    );
