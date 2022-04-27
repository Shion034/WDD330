//Array----------------------------------------------
//* Initializing an Array *
const heroes = [];
heroes[0] = 'Superman';
heroes[0] = 'Batman';
heroes[1] = 'Wonder Woman';
heroes[2] = 'Flash';
heroes[5] = 'Aquaman';
const avengers1 = ['Captain America', 'Iron Man', 'Thor', 'Hulk'];
delete avengers[3];
const [x, y] = [1, 2];
[x, y] = [y, x];//swapping the values of two variables over
const avengers = ['Captain America', 'Iron Man', 'Thor', 'Hulk', 'Hawkeye', 'Black Widow'];
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

