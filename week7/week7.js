//Call and Apply Methods
function sayHello() {
    return `Hello, my name is ${this.name}`;
}
const clark = { name: 'Clark' };
const bruce = { name: 'Bruce' };

function sayHello(greeting = 'Hello') {
    return `${greeting}, my name is ${this.name}`;
}

//Initialization Code
(function () {
    const name = 'Peter Parker'; // This might be obtained from a cookie in reality
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const date = new Date(), today = days[date.getDay()];
    console.log(`Welcome back ${name}. Today is ${today}`);
})();
{
    const name = 'Peter Parker'; // This might be obtained from a cookie in reality
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const date = new Date(), today = days[date.getDay()];
    console.log(`Welcome back ${name}. Today is ${today}`);
}

//Safe Use of Strict Mode
(function () {
    'use strict';
    // All your code would go inside this function
})();
/*This ensures that only your code inside the IIFE is forced to use strict mode.*/

//Functions that Define and Rewrite Themselves
function party() {
    console.log('Wow this is amazing!');
    party = function () {
        console.log('Been there, got the T-Shirt');
    }
}
function party() {
    console.log('Been there, got the T-Shirt');
}

//Recursive Functions
function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

//Event-driven Asynchronous Programming
function wait(message, callback, seconds) {
    setTimeout(callback, seconds * 1000);
    console.log(message);
}
function selfDestruct() {
    console.log('BOOOOM!');
}
wait('This tape will self-destruct in five seconds ... ', selfDestruct, 5);
console.log('Hmmm, should I accept this mission or not ... ?');



