function getInput(){
    let input = document.getElementById("userinput").value;
    document.getElementById("getoutput").textContent = input;
}

function getInput2(){
    let input2 = document.getElementById("userinput2").value;
    let number = parseFloat(input2)
    let totalOutput = total_num(number)
    document.getElementById("getoutput2").textContent = `Total: ${totalOutput}`;
}

function total_num(number){
    let total = 0;
    for(let i=number; i >= 0 ; i--){
        total += i;
    }
    return total;
}

function getInput3() {
    let input3 = parseFloat(document.getElementById("userinput3").value);
    let input4 = parseFloat(document.getElementById("userinput4").value);

    let sum = input3 + input4;

    document.getElementById("getoutput3").textContent = `Sum: ${sum}`;
}