function compute(){
    let x = Number(document.getElementById("num1").value);
    let y = Number(document.getElementById("num2").value);
    let op = document.getElementById("ope").value;
    let sol;
    if(op == '+'){
        sol = x+y;
    }else if(op == '-'){
        sol = x-y;
    }else if(op == '*'){
        sol = x*y;
    }else if(op == '/'){
        sol = x/y;
    }else{
        document.getElementById("output").innerHTML = "Enter valid operation";
        return;
    }

    document.getElementById("output").innerHTML = sol;
    
}

function clearAll(){
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("ope").value = "choose";
    document.getElementById("output").innerHTML = "";

}