console.clear();
console.log('');
console.log('');
console.log('10 - String Method and Concatneation;');
console.log('');

const firstname = 'William';
const lastname = 'Johnson';
const str = 'Hello there my name is Brad';

// Create an array called val200
let val200;

// Concatenation
val200 = firstname+ ' ' +lastname;


// Appending using +=
val200 = 'Brad';
val200 += ' Traversy'

val200 = 'Hello, my name is ' + firstname+ ' and I am '+ age;


//Escaping using \'

val200 = "That's awesome, I can't wait!"; // double quotes
val200 = 'That\'s awesome, I can\'t wait!'; // \'

//Length
val200 = firstname.length;

//concat
val200 = firstname.concat(' ', lastname);

//Change case

val200 = firstname.toUpperCase();
val200 = firstname.toLowerCase();

// Index of  (find the index of a value)
val200 = firstname.indexOf('l');

//charAt() to find the value at an index
val200 = firstname.charAt('2');

//Get the last character of a string
// use charAt(), .length, and -1
val200 = firstname.charAt(firstname.length -1);

// Get substring out of a string
val200 = firstname.substring(0,4);

//slicing
val200 = firstname.slice(0,4);
val200 = firstname.slice(-3);

//split
//split by spaces in this example
val200 = str.split(' ');
//split by commas in this example
val200 = str.split(',');

//replace (current value, new value)
val200 = str.replace('Brad', 'Jack');

//includes ()
// returns T or F if something is in the string or not
val200 = str.includes('car'); // Returns False
val200 = str.includes('Brad'); // Returns True

console.log(val200);

