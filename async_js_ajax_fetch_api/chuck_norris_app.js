console.clear();
console.log('60 - Asynch Programming - Data From External API -Chuck Norris Project');
console.log('');


// Create Event Listener
// Use querySelector b/c tag get-jokes is assigned to a class (not an id)
// Add the listener for click, and create a function called getJokes
document.querySelector('.get-jokes').addEventListener('click', getJokes);


// Create getJokes function
// Pass 'e' parameter
function getJokes(e){
  // Create variable called number, to ONLY allow a number, not a letter
  // assign to querySelector with input type "number", with value
  const number = document.querySelector('input[type="number"]').value;
  

  //Create an xhr object for xmlhttp requests
  const xhr = new XMLHttpRequest();


  // OPEN() to specify the type of request to make ('GET'), and the URL to access
  // Use `template` to add ${number} at the end of the URL to allow random number of jokes
  // Set the transaction to asychronous (true)
  xhr.open('GET',`http://api.icndb.com/jokes/random/${number}`, true);


  // Check the http status and send the request
  // Create variable called response and assign to responseText, wrapped in JSON.parse()
  xhr.onload = function(){
    if(this.status === 200){
      const response = JSON.parse(this.responseText);
      console.log(response); // test to see if works

      
      let output = ''; //output variable will change because of let


      // Check to see if response.type is success
      if(response.type === 'success'){
        // Use forEach to loop thorugh response, and use .value because the value object is where jokes are located
        // Append output to template `<li>${ }</li>` for each returned joke from response
        response.value.forEach(function(a_joke){
          output+= `<li>${a_joke.joke}</li>`
        }); 
      }else{
        output +='<li>Something went wrong...</li>';
      }
      // Place response output in webpage
      document.querySelector('.jokes').innerHTML = output;
    }
  };

  xhr.send(); // Send the API request

  e.preventDefault(); // Use to prevent default behavior
};