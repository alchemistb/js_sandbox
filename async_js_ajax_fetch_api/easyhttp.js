console.log('63 - Asynch Programming - EasyHTTP Library');
console.log('');

function easyHTTP(){
  this.http = new XMLHttpRequest()
};

//Make an HTTP GET request using prototype
easyHTTP.prototype.get = function(url, callback){
  this.http.open('GET', url, true);
  
  let self = this; // let self assign to this, so self can be used inside of the if function as 'this'
  this.http.onload = function(){
    if(self.http.status === 200){
      callback(null,self.http.responseText); // Use callback 
      // use null parameter to capture any errors
      // replace 'this' with 'self' inside if function
    } else{
      callback('Error:  '+ self.http.status);  // Error handling for http status
    }
  };
  this.http.send();
}


//Make an HTTP POST request


//Make an HTTP PUT request


//Make an HTTP DELETE request
