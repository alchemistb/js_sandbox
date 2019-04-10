console.clear();
console.log('45 - Prototypes Explained');
console.log('');

// Object.prototype
// Person.prototype

// Person Constructor
 function Person(firstName, lastName, dob){
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = new Date(dob);
  // this.calculateAge = function(){
  //   const diff = Date.now() - this.birthday.getTime();
  //   const ageDate = new Date(diff);
  //   return Math.abs(ageDate.getUTCFullYear() - 1970);
  // } // Creating a method to get the actual age inside the Person constructor
};

// Calculate Age Prototype Method
// This method is going to be the same for every person, aka global to everyone
// This belongs inside the Prototype NOT the constructor
Person.prototype.calculateAge = function(){
  const diff = Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}


// Get Full Name Prototype Method
Person.prototype.getFullName = function(){
  return(`${this.firstName} ${ this.lastName}`);
};


// Gets Married Prototype Method
Person.prototype.getsMarried =  function(newlastName){
  this.lastName = newlastName;
};

// Create two objects; John and Mary, and pass through data
const john = new Person('John', 'Doe', '2-16-1974');
const mary = new Person('Mary', 'Johnson', 'March 20 1978');

console.log('Person Constuctor Output:');
console.log(mary);
console.log('john.calculateAge():');
console.log(john.calculateAge());
console.log('');
console.log('Get Full Name:');
console.log(john.getFullName());
console.log(mary.getFullName());
console.log('');
mary.getsMarried('Smith');
console.log('Gets Married:');
console.log(mary.getFullName());


// Check to see what properties a construtor has
console.log('Check to see what properties a construtor has:');
console.log(mary.hasOwnProperty('firstName')); // Checks to see if firstName is a property of Person constructor, and returns TRUE
console.log(john.hasOwnProperty('birthday')); // Checks to see if birthday is a property of Person constructor, and returns TRUE


