console.clear();
console.clear();
console.log('14 - Dates and Time');
console.log('');
console.log('');

// Declaring a couple of variables
let val51;
let val51string;

// Date () returns current Date, Day of week, Month, Year, and GMT
const rightnow = new Date();

val51 = rightnow;
val51string = rightnow.toString();

// Instant type 
console.log(typeof val51);
console.log(typeof val51string);
console.log('');
console.log('');

// View different Date related methods

val51 = rightnow.getMonth();
val51 = rightnow.getDate();
val51 = rightnow.getDay();
val51 = rightnow.getFullYear();
val51 = rightnow.getHours();
val51 = rightnow.getMinutes();
val51 = rightnow.getMilliseconds();
val51 = rightnow.getTime(); // Timestamp

console.log(val51);
console.log('');

// Create an variable called Birthday
// set parameters in new Date method
let birthday = new Date('2-16-1974 11:25:00');
birthday = new Date('September 10, 1981');
birthday = new Date('9/10/1981');

// Set different Date related methods

birthday.setMonth(1); // Months are zero based (0 = Jan, 1 = Feb, etc.)
birthday.setDate(16);
birthday.setFullYear(1974);
birthday.setHours(3);
birthday.setMinutes(30);
birthday.setSeconds(25);


console.log(birthday);







