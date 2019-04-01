console.clear();
console.log('24 - DOM Selectors for Multiple Elements');
console.log('');
console.log('');

// Selectors for Multiple elements

// document.getElementsByClassName()

//Create a variable called items to reference document.getElementsByClassName()
const items = document.getElementsByClassName('collection-item'); // create a collection of items in the list of collection-item

console.log(items);
console.log(items[0]); // To get the first item in the list of items (not to sound reptitive-lol)
items[0].style.color = 'red'; // changes the color of the first item in the list to red
items[3].textContent = 'Hello'; // Change text form List item to Hello

console.log('');
// Can use querySelector to get the list of items inside the ul, to then get elements by classname, instead of globally ul. In other words, to get the specific content under the ul
const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
console.log(listItems);
console.log('');

// document.getElementByTagName - Tag Name-

let lis = document.getElementsByTagName('li'); // create a variable called lis which will get elements with tagName li in a collection

console.log('lis:')
console.log(lis);
console.log(lis[0]); // To get the first item in the list of lis (not to sound reptitive-lol)
lis[0].style.color = 'red'; // changes the color of the first item in the list to red
lis[3].textContent = 'Hello'; // Change text form List item to Hello
console.log('');

// Convert HTML Collection into an Array
lis = Array.from(lis);
lis.reverse(); // Reverse the list order
console.log(lis);

// Use Foreach and use index along with textContent to change the name to Hello, and list each index in output
console.log('Foreach for lis:')
lis.forEach(function(li, index){
  console.log(li.className);
  li.textContent = `${index}: Hello`;
});
console.log(lis);
console.log('');


// Query Selector ALL - Returns a Node List, with each element indexed in an object array
const things = document.querySelectorAll('ul.collection li.collection-item'); // Select everything: ul collection and li collection-item
console.log("Query SelectorAll:")
console.log(things);
console.log(typeof(things));

console.log('ForEach querySelectorAll: ');
things.forEach(function(stuff, index){
  console.log(stuff);
  stuff.textContent =`${index}: GoodBye!`;
});

console.log('');
console.log('');

// Select Even and Odd lines and making changes

const liOdd = document.querySelectorAll('li:nth-child(odd)'); // Select all Odd lines in list
const liEven = document.querySelectorAll('li:nth-child(even)'); // Select all Even lines in list

// Use Foreach to change background on odd lines to dark gray
liOdd.forEach(function(odd, index){
  odd.style.background = '#ccc';
});

// Use For Loop to change background on even lines to light gray
for(i = 0; i < liEven.length; i++){
  liEven[i].style.background = '#f4f4f4';
};