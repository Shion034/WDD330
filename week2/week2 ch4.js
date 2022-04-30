//Function Declarations--------------------------------
function hello() {
    console.log('Hello World!');
}//named function
//Function Expressions---
const goodbye = function () {
    console.log('Goodbye World!');
};//anonymous function 
const goodbye = function bye() {
    console.log('Goodbye World!');
};//named function expression

//Function() Constructors-----------------------------
/*const hi = new Function('console.log("Hi World!");');*/

//Invoking a Function--------------------------------
//Invoking a function is to run the code inside the function’s body.To invoke a function, simply enter its name, followed by parentheses.

//Return Values--------------------------------------
//All functions return a value, which can be specified using the return statement, which comes after the return keyword.

//Parameters and Arguments----------------------------
function mean(a, b, c) {
    return (a + b + c) / 3;
}
//Parameters and arguments are terms that are often used interchangeably to represent values provided for the function as an input.

//Variable Numbers of Arguments-----------------------
//Improved Mean Function--------------------------------
function mean(...values) {
    let total = 0;
    for (const value of values) {
        total += value;
    }
    return total / values.length;
}

//Default Parameters-------------------------------------
function hello(name = 'World') {
    console.log(`Hello ${name}!`);
}

//Arrow Functions----------------------------------------

//Function Hoisting--------------------------------------
//Variable Hoisting--------------------------------------
//Callbacks----------------------------------------------
function sing(song) {
    console.log(`I'm singing along to ${song}`);
}
function sing(song, callback) {
    console.log(`I'm singing along to ${song}.`);
    callback();
}

//Sorting Arrays With A Callback--------------------------
//Array Iterators-----------------------------------------
