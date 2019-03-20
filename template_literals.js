console.clear();
console.log('11 - Template Literals');
console.log('');
console.log('');

// Create some arrays:
const theName = 'John';
const theAge = 45;
const job = 'Web Developer';
const city = 'Miami';

// initialize a variable called html
let html;

// Without Template Strings (es5):
html = '<ul><li>Name: ' + theName + '</li><li>Age:' + theAge + '</li><li>job:' + job +'</li><li>city:' + city + '</li></ul>';
// test the html output to webppage,  referencing the above html code
document.body.innerHTML = html;

function hello(){
  return 'HELLO!';
};

// With Template Strings/Literals (es6)
// use `` (left of the number 1 key), (on the tilda key)
// Pass in paramaters using ${ }
html = `
  <ul>
    <li>Name: ${theName}</li>
    <li>Age: ${theAge}</li>
    <li>Job: ${city}</li>
    <li>City: ${city}</li>
    <li>${2+2}</li> 
    <li>${hello()}</li>
    <li>${theAge > 30 ? 'Over 30' : 'Under 30'}</li>
  </ul>
`;
document.body.innerHTML = html;



