function calculate(){
    var a = parseInt(document.querySelector("#value1").value);
    var b = parseInt(document.querySelector("#value2").value);
    var op = document.querySelector("#operator").value;
    var cal;
    if(op == "add"){
        cal = a+b;
    }
    else if(op == "sub"){
        cal = a-b;
    }
    else if(op == "mul"){
        cal = a*b;
    }
    else if(op == "div"){
        cal = a/b;
    }
    document.querySelector("#result").innerHTML = cal;

}