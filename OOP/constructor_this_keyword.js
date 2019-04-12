console.clear();
console.log('43 - Constructors & the "this" keyword');
console.log('');

//object literal example
// const brad = {
//   name: 'Brad',
//   age: 30
// };
// console.log(brad);


//*****Person Constuctor *****
// Define a function called Person
// Define properties called name and age (use 'this' as a personal reference inside the Person function)
// Use name and age or dob in function pass through
function Person(name, dob){
  this.name = name,
  //this.age = age
  this.birthday = new Date(dob);
  this.calculateAge = function(){
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  } // Creating a method to get the actual age inside the Person constructor
};

// Note: When 'this' is in the global scope, it refers to the window object
// console.log(this);


//instantiate an object, using 'new' and function, with values to pass through
// const brad = new Person('brad', 28);
// const john = new Person('john',30);

// console.log(brad);
// console.log(john);

//instantiate an object, using 'new' and function, with values ('name' and dob to pass through
const brad = new Person('Brad', '9-10-1981');
console.log(brad);
console.log('');
console.log('Get the Actual Age, using calculateAge():');
console.log(brad.calculateAge());