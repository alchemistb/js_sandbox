console.clear();
console.clear();

console.log('12 - Arrays and Array Methods');
console.log('');
console.log('');

// Create some arrays
const number9000 = [43,56,33,23,44,36,5];
const numbers9001 = new Array(22,45,33,76,54); // Another way to create arrays

const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
const mixed = [22,'Hello',true,undefined,null,{a:1,b:1}, new Date()];

//initialize a variable called val9000
let val9000;

//Get array length
val9000 = number9000.length;

//check if is an array
val9000 = Array.isArray(number9000); // True
val9000 = Array.isArray('Today is monday'); // False

//Get a single value
// Reminder: Arrays are zero based
val9000 = number9000[3]; // Returns chanracter in 4th position
val9000 = number9000[0]; // Returns character at the first position (the zero position)

// Insert into array
number9000[2] = 100; // Add 100 to index 2

//Find index of value
val9000 = number9000.indexOf(36);

// //Mutating Arrays
// number9000.push(10); // Add '10' at the END of array
// number9000.unshift(120); // Add '120' to the START of array
// number9000.pop(); // REMOVE the LAST element in an array
// number9000.shift(); // Remove the FIRST element in an array
// number9000.splice(1,1); // Remove ONE value from the array (in the case remove value at index one, and only one value)
// number9000.splice(1,3); // Remove first  -  third index values from the array 
// number9000.reverse();  // Reverse the order in an array

//concatenate array
val9000 = number9000.concat(numbers9001);

//sort
val9000 = fruit.sort(); // Alphabetical order

// Use the "compare function" to sort numbers
val9000 = number9000.sort(function(x, y){
  return x - y;
});


val9000 = number9000.sort(function(x, y){
  return y - x;
}); // REVERSE sort "compare function"



// Find 
// Create a test functions to return a value under and over 50
function under50(num){
  return num < 50;
};

function over50(num){
  return num > 50;
};


// use the find method and pass in the 'under50' function
val9000 = numbers9001.find(under50);

// use the find method and pass in the 'over50' function
val9000 = numbers9001.find(over50);


console.log('Numbers9001:')
console.log(numbers9001);
console.log('number9000:');
console.log(number9000);
console.log('val9000:');
console.log(val9000);