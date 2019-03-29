console.clear();
console.log('20 - Block Scope with let & const');
console.log('');
console.log('');

// Global Scope

var a = 1;
let b = 2;
const  c = 3;

// function test9000(){
//   var a = 4;
//   let b = 5;
//   const  c = 6;
//   console.log('FUNCTION SCOPE: ', a, b, c);
// };

// test9000();


// Block level scrope
if(true){
  //Block Scope
  var a = 4;
  let b = 5;
  const  c = 6;
  console.log('IF SCOPE: ', a, b, c); 
};

for(var a = 0; a < 10; a++){
  console.log(`Loop: ${a}`);
};


console.log('GLOBAL SCOPE: ', a, b, c);

// *******
// Notice in the output how the value for 'a' changed, because it is assigned as a VAR
// *******

// LET and CONST assignments stay consistent, no matter where they are being assigned from (global or functional)