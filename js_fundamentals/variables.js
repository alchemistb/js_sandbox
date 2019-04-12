console.log('');
console.log('');
console.log('6 - VARIABLES:');

// var, let, const

//var 
// var name = 'John Doe';
// console.log(name);

// name = 'Steve Smith';
// console.log(name);

// // init a variable

// var greeting;
// console.log(greeting);
// greeting = 'hello';
// console.log(greeting);

// // Var can include letters, numbers, _, $
// // Can't start with number

// // multi word variables
// var firstName = "John"; // Camel case
// var first_name = 'Sarah'; // Underscrore
// var Firstname = 'Tom'; //Pascal case



// Let
// let name = 'John Doe';
// console.log(name);

// name = 'Steve Smith';
// console.log(name);
// console.log('');
// console.log('');

// CONST (constant, immutable)

const name = "John";
console.log(name);
// Can not reassign
// name = 'Sarah';
//Have to assign a value
// const greeting;

const person={
  name: "john",
  age: 30
};
console.log(person);

person.name = 'Sarah';
person.age = 32;
console.log(person);

const numbers = [1,2,3,4,5];
console.log(numbers);
numbers.push(10);
console.log(numbers);
numbers.push(55);
console.log(numbers);



