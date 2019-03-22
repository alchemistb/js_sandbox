console.clear();
console.log('18 - General Loops');
console.log('');
console.log('');

// FOR LOOP
// for(let i=0; i < 10; i++){
//   //console.log(i);
//   //console.log('number '+ i);

//   // If statement to check for 2
//   if(i=== 2){
//     console.log(`number ${i} is my favorite number!`)
//     // continue to the next number in the loop, so 
//     // 'number 2' will be skipped in the console output. Just like continue in python.
//     continue;
//   };
//   // break out of the loop at number 5
//   if(i === 5){
//     console.log(`Stop the loop at ${i}!`);
//     break;
//   }
//   console.log('number '+ i);
// };



// WHILE LOOP
// let i = 0;

// while(i < 10){
//   console.log('Number ' + i);
//   i++;
// };



// DO WHILE LOOP (always runs at least once)
// no ; after last } because of trailing while statement
// let i = 10;
// do{
//   console.log('Number ' + i);
//   i++;
// }
// while(i<10);


// Looping through arrays []

const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

// for(let i = 0; i < cars.length; i++){
//   console.log(cars[i]);
// };


// Foreach Example to use when looping thorugh array
// Can also pass through index and array
// cars.forEach(function (get_car, index, array){
//    console.log(`${index}:${get_car}`);
//    console.log(array);
// });


// MAP to return a different array 

// Create an array [ ] with dictionaries { }

// const users=[
//   {id:1, name:'John'},
//   {id:2, name:'Sarah'},
//   {id:3, name:'Karen'},
//   {id:4, name:'Steve'}
// ];

// // Create an array called 'ids'
// // using the map method to return the id

// const ids = users.map(function(get_user){
//   return get_user.id;
// });

// console.log(ids);



// FOR IN LOOP 
// Used for objects (dictionaries in Python)

const user = {
  firstName:'John',
  lastName: 'Doe',
  age: 40
};

for(let x in user ){
  //console.log(x); //Print out just the keys
  console.log(`${x}:${user[x]}`) // Get key:value pairs
};
