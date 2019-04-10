console.clear();
console.log('46 - Prototypal_inheritance');
console.log('');

//To have one object type inherit from another

// Person constructor
function Person(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
};


//Greeting Prototype
Person.prototype.greeting = function(){
  return(`Hello there ${this.firstName} ${ this.lastName}`);
};

const person1 = new Person('Brian', 'Doe');
console.log('person1.greeting()');
console.log(person1.greeting());
console.log('');
console.log('');

//Customer constructor, call person constructor
function customer(firstName, lastName, phone, membership){
  Person.call(this, firstName, lastName); // Call another function/object/method,etc from elsewhere in the context, using 'this' and other pass through data
  this.phone = phone;
  this.membership = membership;
};


// Inherit the Person prototype methods, using 'object.create'
customer.prototype = Object.create(Person.prototype);

// Make customer.prototype return customer
customer.prototype.constructor = customer;

// Create a customer object
const customer1 = new customer('Tom', 'Smith', '777-777-7778', 'standard');

console.log('Customer:');
console.log(customer1);


//Customer greeting
customer.prototype.greeting = function(){
  return(`Hello there ${this.firstName} ${ this.lastName}, Welcome to our company!`);
};
console.log(customer1.greeting());