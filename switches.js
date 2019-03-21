console.clear();
console.log('16 - Switches');
console.log('');
console.log('');

const Xcolor = 'blue';

// Use SWITCHES instead of multiple if/else statements

// Use switch function to for Xcolor
// use case and break statements
// Note the indents
switch(Xcolor){
  case 'red':
    console.log('Color is red');
    break;
  case 'blue':
    console.log('color is blue');
    break;
  default:
    console.log('Color is not red or blue');
    break;
};

console.log('');


// Switch to get the day of the week

// Create a variable called day
let day;

// Build out switch cases, and evaluate to get the day of the week, using Date and getDay methods as conditionals

switch(new Date().getDay()){
  case 0:
    day = 'Sunday';
    break;  
  case 1:
    day = 'Monday';
    break;  
  case 2:
    day = 'Tuesday';
    break;  
  case 3:
    day = 'Wednesday';
    break;  
  case 4:
    day = 'Thursday';
    break;  
  case 5:
    day = 'Friday';
    break;  
  case 6:
    day = 'Saturday';
    break;  
};
console.log(`Today is ${day}`);