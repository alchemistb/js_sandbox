console.clear();
console.log('15 - If Statements and Comparisions');
console.log('');
console.log('');

// if (something){
//   do something
// } else {
//   do something else
// }

const id = 100;

// // Equal to (==)
// if (id == 101){
//   console.log('Correct!');
// } else{
//     console.log('incorrect!');
// };

// // Not Equal to (!=)
// if (id != 101){
//   console.log('Correct!');
// } else{
//     console.log('incorrect!');
// };


// // To test value and type, using ( === )
// // Value and type have to be the same as comparison value & type

// if (id === 100){
//   console.log('Correct!');
// } else{
//     console.log('incorrect!');
// };


// if (id !== 100){
//   console.log('Correct!');
// } else{
//     console.log('incorrect!');
// };


// Test to see if ID undefined, 
// using an IF example

// If typeof (value & type) id is NOT undefined then print ID or print NO ID
// if(typeof id !== 'undefined'){
//   console.log(`The ID is => ${id}!`);
// } else {
//   console.log('NO ID!!')
// };

// Great or Less than

// if (id >= 100){
//    console.log('Correct!');
//  } else{
//      console.log('incorrect!');
//  };

// IF ELSE

const color = 'yellow';

// if(color == 'red'){
//   console.log('Color is red!')
// } else if (color == 'blue'){
//   console.log('Color is blue')
// }else{
//   console.log('color is not red or blue')
// };


// Logical Operators AND (&&) OR (||)
const Xname = 'Steve';
const Xage = '4';

if(Xage > 0 && Xage < 12){
  console.log(`${Xname} is a child`);
  } else if(Xage >= 13 && Xage <= 19){
    console.log(`${Xname} is a teenager!`);
  } else {
    console.log(`${Xname} is an adult`);
  };


  if (Xage < 16 || Xage > 65){
    console.log(`${Xname} cannot run in the race.`);
  } else {
    console.log(`${Xname} is registered for the race.`);
  };


 // TERNARY OPERATOR
// Short-hand ways of using operators
// if typeof id is eqaul to 100, (?) then True  correct, else (:) incorrect

console.log(id === 100 ? `${id} is Correct!` : `${id} is NOT correct!`);


// if id is greater than 200, (?) then 'Greater than 200, else (:) Not greater than 200
console.log(id > 200 ? 'Greater than 200' : 'Not greater than 200');
