console.clear();
console.log('17 - Function Declarations & Expressions');
console.log('');
console.log('');


// Function Declarations

// Can define/assign parameters in pass through
function greet(firstname= 'John', lastname = 'Doe'){
  //console.log('Hello');
  return 'Hello ' + firstname + ' ' + lastname;
};

//console.log(greet('Steve', 'Smith')); // This would override what was assigned in the pass through firstname= 'John', lastname = 'Doe', with Steve Smith

// console.log(greet());

// FUNCTION EXPRESSIONS

// Can create an object and assign it to a function
const square = function(x){
  return x*x;
};

//console.log(square(8));

// IMMEDIATELY INVOKABLE FUNCTION EXPRESSIONS (IIFEs)
// Declare and run function at the same time
// 'inside function'

(function(){
  console.log('IIFE Ran..');
})();

// Example of hello + name
// Pass through 'name'
// Pass through 'Brian'

// (function(name){
//   console.log('Hello ' + name);
// })('Brian');

let carX;
carX = 'nissan';
// Property Methods
// Adding functions or methods inside an object
const todo = {
  add: function(){
    console.log('Add todo...');
  },
  edit: function(id){
    console.log(`Edit todo ${id}`);
  },
  something: function(X){
    console.log(`This is a test out ${X}!`);
  } 
};


todo.delete = function(){
  console.log('Delete todo....');
};

todo.add();
todo.edit(22);
todo.delete();
todo.something(carX);