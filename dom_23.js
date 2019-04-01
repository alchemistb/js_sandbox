console.clear();
console.log('23 - DOM Selectors for Single Elements');
console.log('');
console.log('');

// document.getElementbyID()
console.log('Get Elelment by ID, and get tag task-tile:')
console.log(document.getElementById('task-title'));
console.log('');

//Get things from the element
//get Id
console.log('Get the tag associated with id:');
console.log(document.getElementById('task-title').id);
console.log('');

// Create a variable call taskTitle to use as a reference pointer for making changes to element in document.getElementById()

const taskTitle = document.getElementById('task-title');


// Change Styling for 'Tasks' on web page
taskTitle.style.backgroud = '#333'; // change background to gray

//taskTitle.style.color = '#fff'; // Change letters to white

taskTitle.style.padding = '5px'; // change padding size


// Changing Content 
taskTitle.textContent = 'Task List'; // Change from Task to Task List

taskTitle.innerText= 'My Task'; // Change from Task List to My Task

taskTitle.innerHTML = '<span style="color:red">Task List</span>'; // Task List is red, and in a span style, also a way to insert HTML


// Query Selector - More powerful than using getElementById
// docoument.querySelector()
console.log('');
console.log('Query Selector:')
console.log(document.querySelector('#task-title')); //get the id task title information
console.log(document.querySelector('.card-title')); // get the span with the card title
console.log(document.querySelector('h5')); // get the *first* H5 information on a page


document.querySelector('li').style.color='red'; // turns the *first* element in the list red on the page
document.querySelector('li:last-child').style.color='red'; // turns the *last* element in the list on the page red (using :last-child)

document.querySelector('li:nth-child(3)').style.color='green'; // turns the *third* element in the list green on the page (using nth-child(3))

document.querySelector('li:nth-child(4)').style.color='orange'; // turns the *fourth* element in the list orange on the page (using nth-child(4))

document.querySelector('li:nth-child(4)').textContent="What's UP"; // turns the *fourth* element in the list from List Item to What's UP on the page (using nth-child(4))
