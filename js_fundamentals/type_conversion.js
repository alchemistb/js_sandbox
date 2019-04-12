console.log('');
console.log('');
console.log('8 - Type Conversion:');

// Taking a variable and changing the data type

let val;

// Number to String

val = String(5);
val = String(4+4)

// Boolen to a string
val = String(true);

// Date to a string
val =  String(new Date());

// Array to String
val = String([1,2,3,4])


// toString() 

val = (5).toString();
val = (true).toString();


// Strings to numbers
val = Number('5'); // Used with .toFixed()
val = Number(true);
val = Number(false);
val = Number(null);
val = Number('hello'); // Get Not a Number NaN
val = Number([1,2,3]); // Get Not a Number NaN

val = parseInt('100'); // Interger
val = parseFloat('100.30'); // Float



// Output
console.log(val);
console.log(typeof val);
//console.log(val.length);
console.log(val.toFixed()); // Gives the length of decimal numbers


// Cohersion
const val1 = '5'; // String
const val2 = 6; // Number
const sum = val1+val2; // Concatenate
console.log(sum);
console.log(typeof sum);



