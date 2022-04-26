//CH 2------------------------------------------
const Name = { value: "Alexa"};
//name.value = "Siri";
Name.length; //5 retrive the name bariable's length property
Name.length = 7;//7 
//Method
Name.toUpperCase();//write a string in all capital letters
Name.toLowerCase();//write name in all lower-case letters
Name.charAt(1);//l This tells us that the character 'l' is at position 1.
Name.indexOf('A');//0 
Name.indexOf('z');//-1 if a character doesn'T apper in the string, -1 will be returned
Name.lastIndexOf('a');//4 last occurence of a character or substring
Name.includes('a');//true
Name.includes('z');//false
name.startsWith('A');//true
name.startsWith('a');//false
name.endsWith('A');//false
name.endsWith('a');//true

const a = 1;//global scope
{const a = 3; a;}//local scope
//console refers 1 ----------- using consst again, that means those "a" are different.
let b = 2;// global scope
{ b = 4; b;}//global scope
//console refers 4 ----------- with out useing let, those "b" are same.
{c = 5; c;}// global scope
{const d = 6; d;}// not definded!! // local scope

//Concat()method can be used to concatenate two or more strings together:
'JavaScript'.concat('Ninja');//'JavaScriptNinja'
'Hello'.concat(' ', 'World', '!');//'Hello World!'
'Java' + 'Script' + ' ' + 'Ninja';//'JavaScript Ninja'
//trim() method will remove any whitespace from the beginning and end of a string:
'    Hello World     '.trim(); //'Hello World' the space in the middle will be preserved
'   \t\t  JavaScript Ninja! \r'.trim(); //'JavaScript Ninja!' escaped tabs and carriage returns are also removed
// repeat() method that will repeat a string the stated number of times:
'Hello'.repeat(2);//'HelloHello'

const naMe = `Siri`;
`hello ${naMe}!`;//'Hello Siri!'
const age = 39;
`I will be ${age + 1} next year`;//'I will be 40 next year'

let uniqueID = Symbol('this is a unique ID');//inside of the ()will be it's description.
console.log(uniqueID);//Symbol(this is a unique ID)
String(uniqueID)//'Symbol(this is a unique ID)'

/*----------number----------*/
Number.isInteger(42);//true
Number.isInteger(3.142);// false
//Octal and Hexadecimal Numbers 
//If a number starts with a 0x, it is considered to be in hexadecimal(base 16) notation:
0xAF; //175 A represents 10, F represents 15
//If a number starts with a zero, followed by the letter o, then it is considered to be in octal (base 8) notation:
0o47; //39 4 eights and 7 units
//If a number starts with a zero, followed by the letter b then it is considered to be in binary (base 2) notation:
0b1010; //10 1 eight, 0 fours, 1 two and 0 units
//Exponential Notation
1e6; //1000000 means 1 multiplied by 10 to the power 6 (a million)
2E3; //2000 2 multiplied by 10^3 (two thousand)
2.5e-3; //0.0025 means 2.5 multiplied by 10 to the power -3 (0.001) 

const number = 5;
number.toExponential();//"5e+0"
const PI = 3.1415926
PI.toFixed();//"3.142"
(325678).toPrecision(2);//"3.3e+5"
2.459.toPrecision(2);//"2.5"
//Number() method convert the tering form of a number into an actual number;
Number('23');//23
//String() method convert the number to a string;
String(3);//"3" or 3+" "; , use toString() method
parseInt('1010', 2); //10 converts from binary, back to decimal
//if you use parseInt() with a decimal, it will remove anything after the decimal point
parseInt("2.9",10);//2
//parseFloat() that converts strings into floating point decimal numbers:
parseFloat('2.9', 10);//2.9

/*----------Boolean----------*/
Boolean('hello');// true
Boolean(24);//true
Boolean(0);//false