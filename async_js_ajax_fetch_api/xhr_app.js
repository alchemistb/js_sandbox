console.clear();
console.log('56 - Asynch Programming with AJAX, XHR');
console.log('');

// ***STEPS***
// 1 - Create an Event Listener for id button
// 2 - Create a function to create the object, open a request, check the HTTP status, send the request

// Create an Event Listener
// GetElementbyId for button
// addEventListener for click, with a function called loadData, which will load the data.txt info and create the get request
document.getElementById('button').addEventListener('click', loadData);


// Create function for object, check HTTP status, and send data
function loadData(){
  //Create an XHR object
  const xhr = new XMLHttpRequest();

  // OPEN() to specify the type of request to make ('GET'), and the URL or file to make it to, and set the transaction to asychronous (true)
  xhr.open('GET', 'data.txt', true); // GET request, the file data.txt, and make it true for asychronous

  
  xhr.onload = function(){
    console.log('READYSTATE', xhr.readyState); // Check the readystate of the request

    // Check to see if HTTP status is 200 (OK), and read in the text message from xhr.open() via the console.log parameters this.responseText
    if(this.status === 200){
      // console.log(this.responseText); // Send responseText data to console log
      
      document.getElementById('output').innerHTML = `<h1><b>${this.responseText}</b></h1>`; // Use 'output' tag to send responseText data to webpage without having to refresh the page
    }
  } 

  xhr.onerror = function(){ // Check Error Status
    console.log('Request error...')
  }


  xhr.send(); // Actually send the data request from xhr

  // readyState Values:
  // 0: request not initialized
  // 1: server connection establieshed
  // 2: request received
  // 3: processing request
  // 4: request finished and response is ready


  // Check the HTTP Status
  // HTTP Statuses:
  // 200: "OK"
  // 403: "Forbidden"
  // 404: "Not Found"
}
