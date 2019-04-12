console.clear();
console.clear();
console.log('13 - Object Literals');
console.log('');
console.log('');


// Create an object array called Aperson with a key/value pair
// Just like a dict in python
const Aperson = {
  firstName: 'Steve',
  lastName: 'Smith',
  age:  '30',
  email: 'steve@aol.com',
  hobbies: ['music', 'sports'],
  address: {
    city: 'Miami',
    state: 'FL'
    },
  getBirthYear: function(){
    return 2019 - this.age;
  } // Using "this" to reference data (age) from inside the local object (Aperson)
};

// Initiate a variable
let val50;

val50 = Aperson;

// Get specific value
val50 = Aperson.firstName; // This is the more common way to get specific values from an object array
//val50 = Aperson['firstName']; 

val50 = Aperson.lastName;

val50 = Aperson.age;
val50 = Aperson.hobbies;
val50 = Aperson.hobbies[1];
val50 = Aperson.hobbies[0];
val50 = Aperson.address;
val50 = Aperson.address.state;
val50 = Aperson.getBirthYear();

console.log(val50);


// Created an object ,(list), with more embedded objects (dictionaries)
const people = [
  {name: 'John', age: 30},
  {name: 'Mike', age: 23},
  {name: 'Nancy', age: 40}
];


// For Loop through the people object

for(let i = 0; i<people.length; i++){
  console.log(people[i].name);
}

console.log('');

// Foreach Example:

people.forEach(function(folks){
  console.log(folks);
});




