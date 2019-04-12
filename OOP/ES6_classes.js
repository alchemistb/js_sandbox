console.clear();
console.log('48 - ES6 Classes');
console.log('');

// Create a class called Person9000
class Person9000{ 
  constructor(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
  } // Add constructors to the class
  greeting(){
    return(`Hello there ${this.firstName} ${this.lastName}`);
  } // Add greeting method to the class
  calculateAge(){
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return(Math.abs(ageDate.getUTCFullYear() - 1974));
  } // Add calculate Age method to class
  getsMarried(newLastName){
    this.lastName = newLastName;
  } // Add gets married method to class, with new LastName pass through
  static addNumbers(x,y){
    return(x + y);
  } // Static method is a standalone method. Not using this.<something> = <something> to init a method.
  // This method adds two values together
};

// create an object for barry from class Person9000
const barry = new Person9000('Barry', 'Williams', 2-16-1974);

console.log('Barry Output:')
console.log(barry);
console.log(barry.greeting());
console.log(barry.calculateAge());
barry.getsMarried('Carter');
console.log(barry.greeting());
console.log(Person9000.addNumbers(1,2)); // Calling the static method (addNumbers), with pass through values (1,2), defined in class Person9000
