console.clear();
console.log('59 - Asynch Programming with AJAX and JSON');
console.log('');

// ***STEPS***
// 1 - Create an Event Listener for id button
// 2 - Create a function to create the object, open a request, check the HTTP status, send the request

// Create an Event Listener
// GetElementbyId for button
// addEventListener for click, with a function called loadCustomer, which will load the customer.json info and create the get request
document.getElementById('button1').addEventListener('click', loadCustomer);

document.getElementById('button2').addEventListener('click', loadCustomers);


// Create function for object, check HTTP status, and send data
function loadCustomer(){
  //Create an XHR object for xmlhttp requests
  const xhr = new XMLHttpRequest();

  // OPEN() to specify the type of request to make ('GET'), and the URL or file to make it to, and set the transaction to asychronous (true)
  xhr.open('GET', 'customer.json', true); // GET request, the file data.txt, and make it true for asychronous

    xhr.onload = function(){
    // Check to see if HTTP status is 200 (OK), and read in the text message from xhr.open() via the console.log parameters this.responseText
    if(this.status === 200){
      // console.log(this.responseText); // Send responseText data to console log
      
      const customer = JSON.parse(this.responseText);// Create a variable called customer to parse the JSON response using JSON parsing method

      const output = `
        <ul>
          <li>ID:${customer.id}</li>
          <li>Name:${customer.name}</li>
          <li>Company:${customer.company}</li>
          <li>Phone:${customer.phone}</li>
        </ul>
      `; // Create a variable called output and use template to create html displyed output for customer

      document.getElementById('customer').innerHTML = output; // Create Event Listener using 'customer' tag to send output data to webpage without having to refresh the page
    }
  } 

  xhr.onerror = function(){ // Check Error Status
    console.log(`Request error..., ${this.onerror}`)
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


// Load Customers
// Create function for object, check HTTP status, and send data
function loadCustomers(){
  //Create an XHR object for xmlhttp requests
  const xhr = new XMLHttpRequest();

  // OPEN() to specify the type of request to make ('GET'), and the URL or file to make it to, and set the transaction to asychronous (true)
  xhr.open('GET', 'customers.json', true); // GET request, the file data.txt, and make it true for asychronous

  xhr.onload = function(){
  // Check to see if HTTP status is 200 (OK), and read in the text message from xhr.open() via the console.log parameters this.responseText
    if(this.status === 200){
      // console.log(this.responseText); // Send responseText data to console log
      
      const customers = JSON.parse(this.responseText);// Create a variable called customers to parse the JSON response using JSON parsing method


      let output = ''; // Create a variable output, using let which will cause output value to change

      // Foreach Loop thorugh customers, and create a variable called output. Append to output using += and use template to create html displyed output for customer
      customers.forEach(function(customer){
        output += `
        <ul>
          <li>ID:${customer.id}</li>
          <li>Name:${customer.name}</li>
          <li>Company:${customer.company}</li>
          <li>Phone:${customer.phone}</li>
        </ul>
      `; 
       }); 

      
      // Create Event Listener using 'customers' tag to send output data to webpage without having to refresh the page
       document.getElementById('customers').innerHTML = output; 
    }
  } 

  xhr.onerror = function(){ // Check Error Status
    console.log(`Request error..., ${this.onerror}`)
  }


  xhr.send(); // Actually send the data request from xhr
  
}