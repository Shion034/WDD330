//Array----------------------------------------------
//* Initializing an Array *
const heroes = [];
heroes[0] = 'Superman';
heroes[0] = 'Batman';
heroes[1] = 'Wonder Woman';
heroes[2] = 'Flash';
heroes[5] = 'Aquaman';
const avengers = ['Captain America', 'Iron Man', 'Thor', 'Hulk', 'Hawkeye', 'Black Widow'];
delete avengers[3];
const [x, y] = [1, 2];
[x, y] = [y, x];//swapping the values of two variables over

avengers.length;//6
avengers[avengers.length - 1];// 'Black Widow'

//Pop, Push, Shift, and Unshift--------------------------
avengers.pop();//'Thor' Use pop()to remove the last item from an array
avengers.shift();//'Captain America' Use shift() to remove the first item from an array
avengers.push('Thor');//2 push() method appends a new value to the end of the array.
avengers.unshift('Captain America');// unshift() method is similar to the push() method, but this appends a new item to the beginning of the array:
avengers.concat(['Hulk', 'Hawkeye', 'Black Widow']);
//'Captain America', 'Iron Man', 'Thor', 'Hulk', 'Hawkeye', 'Black Widow'  concat() method can be used to merge an array with one or more arrays:
//↑this method just simply creates another array combining the two arrays=this dosn't change avengers array.
avengers = avengers.concat(['Hulk', 'Hawkeye', 'Black Widow']);//make new avengers array

//The join() Method---------------------------------------
avengers.join();//'Captain America, Iron Man, Thor, Hulk, Hawkeye, Black Widow'
//The join() method can be used to turn the array into a string that comprises all the items in the array, separated by commas
avengers.join(' & ');//'Captain America & Iron Man & Thor & Hulk & Hawkeye & Black Widow'

//Slicing and Splicing-------------------------------------
//The slice() method creates a subarray;
avengers.slice(2, 4)//['Thor', 'Hulk'] - This operator is non destructive, the avengers array still exists with 6 items in the array
//The splice() method removes items from an array then inserts new items in their place. 
avengers.splice(3, 1, 'Scarlet Witch');// ['Hulk'] 3:wich item remove, 1;how many items remove
//splice() method is also can insert values into an array
avengers.splice(4, 0, 'Quicksilver');//-

/*Reverse()-------------------------------------------------
We can reverse the order of an array using the reverse() method:*/

/*Sort()------------------------------------------------------
We can sort the order of an array using the sort() method:Sort array alphabetiacly*/

//Finding if a Value is in an Array---------------------------
avengers.indexOf('Iron Man');//3
avengers.indexOf('Thor');//-1 it the item is not in the array, it will return -1
avengers.includes('Iron Man');//true//This returns a boolean value
avengers.includes('Thor');//false

//Multidimensional Arrays---------------------------------------
const coordinates = [[1, 3], [4, 2]];

//sets----------------------------------------------------------
//Creating Sets-------------------------------------------------
const list = new Set();
//Adding values to sets-----------------------------------------
list.add(1).add(2).add(3).add(4);// Set { 1, 2, 3, 4 }
const numbers = new Set([1, 2, 3]);
const letters = new Set('hello');
letters //Set { 'h', 'e', 'l', 'o' }
const words = new Set().add('the').add('quick').add('brown').add('fox')
words// Set { 'the', 'quick', 'brown', 'fox' }
const arrays = new Set().add([1]).add([1]);
arrays// Set { [1], [1] } ; [1] === [1]; << false
const mixedTypes = new Set().add(2).add('2');
mixedTypes//Set { 2, '2' }
//Set Methods--------------------------------------------------------
const jla = new Set().add('Superman').add('Batman').add('Wonder Woman');
jla// Set { 'Superman', 'Batman', 'Wonder Woman' }
jla.size();//3
//The has() method can be used to check if a value is in a set. This returns a boolean value of true or false:
jla.has('Superman');//true
jla.has('Green Lantern');// false
//Removing Values From Sets------------------------------------------
jla.delete('Superman');//true
jla.delete('Flash');//false
jla.clear();
jla//Set { }
jla.size// 0

//Converting Sets to Arrays------------------------------------------
//A set can be converted into an array by placing the set, along with the spread operator directly inside an array literal.
const shoppingSet = new Set().add('Apples').add('Bananas').add('Beans');
const shoppingArray = [...shoppingSet]//shoppingArray ['Apples', 'Bananas', 'Beans']
//It's also possible to use the Array.from() method to convert a set into an array.
const shopSet = new Set().add('Apples').add('Bananas').add('Beans');
const shopArray = Array.from(shopSet);
const duplicate = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 9];//[3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 9]
const nonDuplicate = [...new Set(repeatedArray)];//[3, 1, 4, 5, 9, 2, 6]

//Create a weak set---------------------------------------------------
const weak = new WeakSet();

//Maps----------------------------------------------------------------
const romanNumerals = new Map();
romanNumerals.set(1, 'I').set(2, 'II').set(3, 'III').set(4, 'IV').set(5, 'V');;//Map { 1 => 'I', 2 => 'II', 3 => 'III', 4 => 'IV', 5 => 'V' }
romanNumerals.get(4);//'IV'
romanNumerals.has(5);//true
romanNumerals.has(10);//false
//Removing Entries From Maps The delete() method can be used to remove a key and value pair from a map. This returns a boolean value of true if the value was removed or false if it wasn't in the map.
//The clear() method will remove all key and value pairs from a map
//Converting Maps to Arrays------------------------------------------
[...romanNumerals]
Array.from(romanNumerals)
//Weak maps work in the same way as weak sets. 
const weak2 = new WeakMap();

//Logic---------------------------------------------------------------
//If Statement
const age1 = 23;
if (age1 < 18) {
    console.log('Sorry, you are not old enough to play this game')};
//Else Statement:The else keyword can be used to add an alternative block of code to run if the condition is false.
const n = 12;
if (n % 2 === 0) {
    console.log('n is an even number');
} else {
    console.log('n is an odd number');
}
const n = 5;
n % 2 === 0 ? console.log('n is an even number') : console.log('n is an odd number');
console.log(`n is a ${(n % 2 === 0) ? 'even' : 'odd'} number`);
console.log(`n is a ${(n % 2 === 0) ? 'even' : 'odd'} number`);
//Switch:The switch operator can be used to make your code easier to follow when there are lots of conditions to test.
/*if (number === 4) {
console.log('You rolled a four');
} else if (number === 5) {
console.log('You rolled a five');
} else if(number === 6){
console.log('You rolled a six');
} else {
console.log('You rolled a number less than four');
}  ↓*/
switch (number) {
    case 4:
        console.log('You rolled a four');
        break;
    case 5:
        console.log('You rolled a five');
        break;
    case 6:
        console.log('You rolled a six');
        break;
    default:
        console.log('You rolled a number less than four');
        break;
}

//Loops--------------------------------------------------------
//While loops:This will repeatedly run a block of code while a certain condition is true:
let bottles1 = 10;
while (bottles1 > 0) {
    console.log(`There were ${bottles1} green bottles, hanging on a wall. And if one green bottle should accidentally fall, there'd be ${bottles1 - 1} green bottles hanging on the wall`);
    bottles1--;
}
//do ... while Loops
//A do ... while loop is similar to a while loop. The only difference is that the condition comes after the block of code:
let bottles2 = 10;
do {
    console.log(`There were ${bottles2} green bottles, hanging on a wall. And if one green bottle should accidentally fall, there'd be ${bottles2 - 1} green bottles hanging on the wall`);
    bottles2--;
} while (bottles2 > 0)
//For loops are probably the most commonly type of loop used in JavaScript, and take the following form:
for (let bottles3 = 10; bottles3 > 0; bottles3--) {
    console.log(`There were ${bottles3} green bottles, hanging on a wall. And if one green bottle should accidentally fall, there'd be ${bottles3 - 1} green bottles hanging on the wall`);
}
for (let i = 0, max = avengers.length; i < max; i++) {
    console.log(avengers[i]);
}