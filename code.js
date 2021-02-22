$(document).ready(function (){

    $("form").submit(loanCalc);


});

function loanCalc(event){

    event.preventDefault();

    let salary = $("input#salary").val();

    let credit = $("input#creditscore").val();

    let jobDuration = $("input#job").val();

    let message = "";

    if(salary >= 40000){
        if(credit >= 600){
            message = "approved";
        }else{
            if(jobDuration > 12){
                message = "approved";
            }else{
                message = "denied";
            }
        }
    }else if(salary < 40000){
        if(credit >= 600){
            if(jobDuration > 12){
                message = "approved";
            }else{
                message = "denied";
            }
        }else{
            message = "denied";
        }
    }
    message = message.toUpperCase();
    $("p#message").text(message);
};