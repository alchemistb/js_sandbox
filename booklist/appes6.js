console.clear();
console.log('54 - Convert to ES6 Classes');
console.log('');


// Book Class 
class Book{
  constructor(title,author,isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}



// UI Class
class UI{
  addBookToList(book){
    const list = document.getElementById('book-list');
  // create tr element
  const row = document.createElement('tr');
  // Insert cols
  row.innerHTML = `
  <td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.isbn}</td>
  <td><a href="#" class="delete">X<a></td>`;
   list.appendChild(row); 
  }

  showAlert(message, className){
    // Create div
  const div = document.createElement('div');
  div.className = `alert ${className}`;
  // Add text
  div.appendChild(document.createTextNode(message));
  // Get Parent
  const container = document.querySelector('.container');
  // Get form
  const form  = document.querySelector('#book-form');
  // Insert alert
  container.insertBefore(div,form);
  // disappoint after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').remove();
  }, 3000);
  }

  deleteBook(target){
    if(target.className === 'delete'){
      target.parentElement.parentElement.remove();
    }
  }

  clearFields(){
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
  }
}

//Event Listeners for add book
document.getElementById('book-form').addEventListener('submit', function(e){
  // Get form values
  const title = document.getElementById('title').value, author = document.getElementById('author').value,
  isbn = document.getElementById('isbn').value
  //console.log(title,author,isbn);

  // Instantiate book
  const book = new Book(title,author,isbn);
  //console.log(book);

  // Instantiate UI
  const ui = new UI();
  //console.log(ui);

  // Validate
  if(title === '' || author === '' || isbn === ''){
    //Error Alert
    ui.showAlert('Please fill in all fields', 'error');
  } else{

    // Add book to list
  ui.addBookToList(book);

  // Show success
  ui.showAlert('Book Added', 'success');

  // Clear Fields
  ui.clearFields();
  }

  e.preventDefault();
});


// Event Listeners for delete
document.getElementById('book-list').addEventListener('click', function(e){
  // Instantiate UI
  const ui = new UI();

  // Delete Book
  ui.deleteBook(e.target);

  // show alert message
  ui.showAlert('Book Removed!', 'success');

  e.preventDefault();
})