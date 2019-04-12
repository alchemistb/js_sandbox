console.clear();
console.log('47 - Using Object.create');
console.log('');

// Another way to create objects
// Create prototypes inside a parent object

const personPrototypes = {
  greeting: function(){
    return(`Hello there ${this.firstName} ${this.lastName}`); // Greeting method inside personPrototypes
  },
  getsMarried: function(newLastName){
    this.lastName = newLastName;
  } // Gets married method inside of personProtorypes, with newLastName as pass through
}

// Create an inheritance object called marry and inherit from personPrototypes, using Object.create
const marry = Object.create(personPrototypes);
marry.firstName = 'Marry';
marry.lastName = 'Williams';
marry.age = 30;

console.log('Marry Object: ');
console.log(marry);
console.log(marry.greeting());
console.log('');
marry.getsMarried('Thompson');
console.log("marry's new lastname:");
console.log(marry.greeting());
console.log('');


// Create an inheritance object called nick and inherit from personPrototypes, using object.create, and adding key/pair values
const nick = Object.create(personPrototypes, {
  firstName: {value: 'Nick'},
  lastName: {value: 'Jones'},
  age: {value: 36} 
});
console.log('Nick Output:');
console.log(nick);
console.log(nick.greeting());

