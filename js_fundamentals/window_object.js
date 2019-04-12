console.clear();
console.log('19 - A Look at the Window Object');
console.log('');
console.log('');

// FYI - Window is the GLOBAL OBJECT in client side JavaScript

// WINDOW METHODS/ OBJECTS / PROPERTIES
console.log(1,2,3);

// *Alert()* - Pop up Message to be displayed
//window.alert('HELLO WORLD!');

// *PROMPT ()* - Provide some input to be displayed
// const input = prompt();
// alert(input);

// *CONFIRM ()* - Make sure the choice you pick is what you want to happen
// if (confirm('Are You Sure?')){
//   console.log('YES');
// } else{
//   console.log('NO');
// };

console.log('');

let val8000;

// Get the Outter Height and Width
val8000 = window.outerHeight;
val8000 = window.outerWidth;

// Get the Inner Height and Width
val8000 = window.innerHeight;
val8000 = window.innerWidth;

// Scroll points (scroll bars)
val8000 = window.scrollY; // side scroll bar
val8000 = window.scrollX; // horizontal scroll bar

// Location
val8000 = window.location;
val8000 = window.location.hostname;
val8000 = window.location.port;
val8000 = window.location.href;
val8000 = window.location.search;

// Redirect
//window.location.href = 'https://google.com';

// Reload
//window.location.reload();


// HISTORY Object
//window.history.go(-1); // Go back to last place visited
// window.history.go(-2); // Go back to the second to the last place visited
// window.history.go(-3); // Go back to the third to the last place visited
val8000 = window.history.length; // How many sites were visited


// NAVIGATION object - Information about the Browser
val8000 = window.navigator;
val8000 = window.navigator.appName; // Browser App Name
val8000 = window.navigator.appVersion; // Browser Generation version
val8000 = window.navigator.userAgent; // Browser Generation version
val8000 = window.navigator.platform; // device type (Windows, OSX, Linux, etc.)
val8000 = window.navigator.vendor; // Browser vendor
val8000 = window.navigator.language; // Browser language

console.log(val8000);
