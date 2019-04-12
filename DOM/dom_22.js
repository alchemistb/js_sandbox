console.clear();
console.log('22 - Examining the Document Object Model (DOM)');
console.log('');
console.log('');

let val9999;

// Look at the Document properties of HTML code, under the 'windows' property
val9999 =  document;

// Look at a collection of all document properties
val9999 = document.all;

// First level of the document; Everything inside of the <head> tags
val9999 = document.all[1];

//  Everything inside of the first <meta> tag
val9999 = document.all[2];

// Everything inside of the second <meta> tag
val9999 = document.all[3];

// Everything inside of the third <meta> tag
val9999 = document.all[4];

// Show DOM property elements length
val9999 = document.all.length;

val9999 = document.head;
val9999 = document.body;
val9999 = document.doctype;
val9999 = document.domain;
val9999 = document.URL;
val9999 = document.characterSet;
val9999 = document.contentType;


// To get all of the forms information on a page
val9999 = document.forms;
val9999 = document.forms[0];
val9999 = document.forms[0].id;
val9999 = document.forms[0].method;

// To get all of the links information from a page
val9999 = document.links;
val9999 = document.links[0];
val9999 = document.links[0].className;
val9999 = document.links[0].classList[0];


// To get all images information from a page
val9999 = document.images;

// To get all scripts information from a page
val9999 = document.scripts;

// Get 'app.js' script from page, searching on src attribute
val9999 = document.scripts[2].getAttribute('src');


// To turn an HTML COllection into an array to use with forEach (3 steps)
let scripts = document.scripts; // #1 Assign document.scripts to variable called scripts

let scriptsArr = Array.from(scripts); // #2 Create an array call scriptsArr using the scripts variable from previous step, and Array.from()

scriptsArr.forEach(function(some_script){
  console.log(some_script.getAttribute('src'));
});  // #3 Use Foreach() with scriptsArr from previous step

console.log(val9999);