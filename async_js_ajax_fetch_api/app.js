console.clear();
console.log('63 - Asynch Programming - Custom HTTP Library (Ajax With Callbacks) - Part 1');
console.log('');

// Use for Test Site amd Test RESTAPI Data
// https://jsonplaceholder.typicode.com/


const http = new easyHTTP;

// Get Posts
http.get('https://jsonplaceholder.typicode.com/posts', function(err, response){ // pass url and callback (as a function with passthrough err and response)
  if (err){
    console.log(err); // check for errors
  } else{
    console.log(response); // if no errors then display the response
  }
});




// // Create an array called post, with dictionary data
// const posts = [
//   {title: 'Post One', body: 'This is post one'},
//   {title: 'Post Two', body: 'This is post two'}
// ];


// // //create createPost function
// // // Pass through post
// // // Mimic server response time with setTimeout()
// // function createPost(post){
// //   setTimeout(function(){
// //     posts.push(post);
// //   },2000); // Timeout 2 seconds
// // };


// // //Create getPosts function
// // // Get post to display in broswer
// // // Mimic server response time with setTimeout()
// // // ForEach through posts and append to output (+=) `<li>${ }</li>`
// // // Place response output in webpage using innerHTML
// // function getPosts(){
// //   setTimeout(function(){
// //     let output = '';
// //     posts.forEach(function(post){
// //       output += `<li>${post.title}</li>`;
// //     })
// //     document.body.innerHTML = output;
// //   }, 1000); // Timeout 1 second
// // };


// // // Call the functions
// // createPost({title: 'Post Three', body: 'This is post three'});

// // getPosts();



// // Using Callsbacks with Asych


// //create createPost function
// // Pass through post and callback
// // Mimic server response time with setTimeout()
// // Push posts data array in push (), calling some_post
// // Callback passed in and used to call other functions
// function createPost(some_post, callback){
//   setTimeout(function(){
//     posts.push(some_post);
//     callback(); // callback function reference
//   },2000); // Timeout 2 seconds
// };


// //Create getPosts function
// // Get post to display in broswer
// // Mimic server response time with setTimeout()
// // ForEach (iterate) through posts array and append to output (+=) `<li>${ }</li>`
// // Place response output in webpage using innerHTML
// function getPosts(){
//   setTimeout(function(){
//     let output = '';
//     posts.forEach(function(a_post){
//       output += `<li>${a_post.title}</li>`;
//     })
//     document.body.innerHTML = output;
//   }, 1000); // Timeout 1 second
// };


// // Call createPost function
// // Pass data for some_post
// // Append reference to getPosts function
// // This will display ALL posts
// createPost({title: 'Post Three', body: 'This is post three'}, getPosts); 