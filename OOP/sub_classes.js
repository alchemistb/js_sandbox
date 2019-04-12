console.clear();
console.log('49 - Sub Classes');
console.log('');

// Inheritance in ES6 Classes

class Person9001{
  constructor(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
  }
  greeting(){
    return(`Hello there ${this.firstName} ${this.lastName}`);
  }
};


// Extend Person9001 class with a customer class
// customer9001 is a subclass of Person9001
class customer9001 extends Person9001{
  constructor(firstName, lastName, phone, memebership){
    super(firstName, lastName);// *super() - This calls properties from the parent class constructor Person9001
    this.phone = phone; // Specific to customer9001
    this.memebership = memebership; // Specific to customer9001
  }
  static getMembershipCost(){
    return(`$500`); //static method - stand alone
  }
};

// Create an object called Johnny and associate it to customer9001
const johnny = new customer9001('Johnny', 'Dough', '888-888-8889', 'standard');

console.log('Customer Johnny Info:');
console.log(johnny);
console.log('');
console.log('Greeting Method');
console.log(johnny.greeting());  
//Note: There is NO greeting method in customer9001, but greeting is used in class Person9001 since class customer9001 was extended from Person9001
console.log('');
console.log('Get membership cost:')
console.log(customer9001.getMembershipCost()); // Calling the static method from customer9001