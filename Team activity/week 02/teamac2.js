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

function getaddin(){
    let addin1 = parseFloat(document.getElementById("add1").value);
    let addin2 = parseFloat(document.getElementById("add2").value);

    let addition = addin1 + addin2;

    document.getElementById("getaddout").textContent = `Answer: ${addition}`;
}

const getsubin = function suBB() {
    let subin1 = parseFloat(document.getElementById("sub1").value);
    let subin2 = parseFloat(document.getElementById("sub2").value);

    let subtruction = subin1 - subin2;

    document.getElementById("getsubout").textContent = `Answer: ${subtruction}`;
}

const getmulin = (mul1, mul2) => mul1*mul2;
document.getElementById("getmulout").textContent = `Answer:`;





//-------------------------------------------------------------------------------

function getNum(numId) {
    const number = document.getElementById(numId).value;
    const numberFloat = parseFloat(number);
    if (numberFloat !== NaN) {
        return numberFloat;
    } else return 0;
}
function updateTotal(value) {
    const outputElement = document.getElementById('stretchOutput');
    outputElement.innerHTML = 'Total: ' + value;
}
// function declaration
function add2(num1, num2) {
    return num1 + num2;
}
// function expression
const sub2 = function (num1, num2) {
    return num1 - num2;
};
// arrow function
const mult2 = (num1, num2) => num1 * num2;

// example of using a callback to pull it all together
function performOperation(operation) {
    // the argument 'operation' is a function...so when we are ready we can call that function in our code below
    const total = operation(
        getNum('stretchNumber1'),
        getNum('stretchNumber2')
    );
    updateTotal(total);
}