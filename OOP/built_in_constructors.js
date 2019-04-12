console.clear();
console.log('44 - Constructors & the "this" keyword');
console.log('');

// These are things that AREN'T USED VERY OFTEN

// set a primitive value
const name1 = 'Jeff'; // This is a string
const name2 = new String('Jeff'); // This is an object

name2.foo ='bar'
console.log('primitive value examples:');
console.log(name2);
console.log('');

console.log('typeof:');
console.log(typeof name1);
console.log(typeof name2);
console.log('');

//Number
const num1 = 5; // Number 
const num2 = new Number(5); // Object
console.log('Numbers Typeof:');
console.log(typeof num1);
console.log(typeof num2);
console.log('');

//Boolean
const bool1 = true; // Boolean 
const bool2 = new Boolean(true); // Object
console.log('Boolean Typeof:');
console.log(typeof bool1);
console.log(typeof bool2);
console.log('');

// Function
const getSum1 = function(x,y){
  return x+y;
}

const getSum2 = new Function('x','y', 'return 1 + 1');

console.log('Functions:')
console.log(getSum1(1,1));
console.log(getSum2);
console.log('');

//Object
const john1 = {name:'Johnny'};
const john2 =  new Object({name:'Johnny'})
console.log('Objects:')
console.log(typeof john1);
console.log(john1);
console.log(typeof john2);
console.log(john2);
console.log('');

// Arrays
const arr1 = [1,2,3,4];
const arr2 = new Array(1,2,3,4)
console.log('Arrays:')
console.log(arr1);
console.log(arr2);
console.log('');


// Reg Exp Regular Expression
const re1 = /\w+/; // Looking for a word character that appers multiple times
const re2 = new RegExp('\\w+'); // Have to include the escape character
console.log('Reg Exp:');
console.log(re1);
console.log(re2);

// Note: FYI -Stick to the primitive/basic way (the first option). It's faster execution 