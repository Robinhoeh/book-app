// Retrieve, forEach through element, append/change text content

const books = document.querySelectorAll('#book-list li .name');

books.forEach(function(book) {
  // += APPENDS
  book.textContent += '(book-title)';
});


// Retrieve, Change/append innerHTML
// const bookList = document.querySelector('#book-list');
// bookList.innerHTML = '<h2>Books and More Books..</h2>';
// bookList.innerHTML += '<p>This is how you add html</p>';



// Nodes
// Declare, Retrieve, Do something
const banner = document.querySelector('#page-banner');
console.log('#page-banner node type is: ', banner.nodeType);
console.log('#page-banner node name is: ', banner.nodeName);
console.log('#page-banner had child nodes: ', banner.hasChildNodes());

// cloneNode(true) gives you every nested node/element
const clonedBanner = banner.cloneNode(true);
console.log(clonedBanner);



// DOM TRAVERSAL - one to another
// UP - Child to Parent
const bookList = document.querySelector('#book-list');
console.log('The Parent node is: ', bookList.parentNode);
console.log('The Parent node is: ', bookList.parentElement.parentNode);

// DOWN - Parent to childen
console.log(bookList.children);//prints elements SAME LEVEL  = siblings



// SIBLINGS - same level - Retrieve, move up or down
// UP
console.log('bookList next sibling is: ', bookList.nextSibling);//#textNode
console.log('bookList next sibling is: ', bookList.nextElementSibling);//form

// DOWN
console.log('bookList previous sibling is: ', bookList.previousSibling);//#textNode
console.log('bookList previous sibling is: ', bookList.previousElementSibling);//#header

// Search for element, define scope, append/change content, add line break
bookList.previousElementSibling.querySelector('p').innerHTML += '</br>Too cool ok?';


bookList.nextElementSibling.querySelector('button').style.backgroundColor = "pink";

// bookList.nextElementSibling.querySelector('button').innerHTML = '<h1>I dun fit here</h2>';


// DOM EVENTS - Remove Content
// 1. Add event listener to element
// 2. When event occurs
// 3. Callback function fires and code is run

// 1. variable.listener('event', functionName)
// 2. functionName(e) {}

// 1. Retrieve reference to element 
// const deleteButton = document.querySelectorAll('#book-list .delete');

// // 2. Loop through node list, listen for event
// deleteButton.forEach(function(dltBtn){
//   dltBtn.addEventListener('click', dltButton)
// });

// // 3. Select targeted element, select parent, remove child
// function dltButton(e) {
//  const li = e.target.parentElement;
//  li.parentNode.removeChild(li);
// };




// // 1. Retrieve element
// const link = document.querySelector('#page-banner a');
// // 2. listen for event
// link.addEventListener('click', linkButton)

// // 3. Run Callback function, prevent browser refresh, log textContent
// function linkButton(e) {
//   e.preventDefault();
//   console.log(`The link is to:`, e.target.textContent);
// }

// All of the code above does not take into consideration EVENT BUBBLING
// It can be refactored to be more dynamic by attaching a listener to the parent element of a section - this way when new elements are added dynamcially, the carry the same functionality


// EVENT BUBBLING
// This code is DYNAMIC and allows for content to be generated dynamically

// 1. Retrieve reference to element
const list = document.querySelector('#book-list ul');

// 2. Listen to event
list.addEventListener('click', listEvent);

// 3. Run Callback function
function listEvent(e) {
  // if class name is 'delete'
  if(e.target.className === "delete"){
    // Retrive reference to parent element
    const li = e.target.parentElement;
    //List is ul - child is li
    list.removeChild(li);
  }
};


// Event Listener on form
// add book list
const addForm = document.forms['add-book'];
// listener is on the FORM, not button
addForm.addEventListener('submit', addBookToList);

function addBookToList(e) {
  e.preventDefault();
  const value = addForm.querySelector('input[type="text"]').value;
  console.log(value);
}



// Add element/Books
const addForm = document.forms['add-book'];
addForm.addEventListener('submit', addBookToList);

function addBookToList(e) {
  e.preventDefault();
  const value = addForm.querySelector('input[type="text"]').value;
  const li = document.createElement("li");
  const bookName = document.createElement("span");
  const deleteBtn = document.createElement("span");

  // Add content to dynamically generated elements
  deleteBtn.textContent = 'delete';
  bookName.textContent = value;

  // Add classes dynamically from already existing classes
  bookName.classList.add('name');
  deleteBtn.classList.add('delete');

  // Inject to DOM - order matters
  li.appendChild(bookName);
  li.appendChild(deleteBtn);
  list.appendChild(li);
  li.appendChild(value);
}

/*
1. Retrieve reference to parent element
2. Listen for submit event
3. Create Callback function
4. Retrieve reference to other elements and value
5. Add content
6. Append or Add Class
7. Append/Inject to DOM
*/



// Get attributes
variable.getAttribute('class');
variable.getAttribute('href');

// Set attributes
variable.setAttribute('class', 'name-1');

// Has attribute
variable.hasAttrribute('class');//true or false

// Remove Attribute
variable.removeAttribute('class');





// filter books
const searchBar = document.forms['search-books'].querySelector('input');
searchBar.addEventListener('keyup', keyUpListener);

function keyUpListener(e){
  const searchTerm = e.target.value.toLowerCase();//make search term lowercase
  const listOfBooks = list.getElementsByTagName('li');

  Array.from(listOfBooks).forEach(function (book){
    // select only the name of book
    const bookTitle = book.firstElementChild.textContent;
    // compares lower case existing items to search items
    if (bookTitle.toLowerCase().indexOf(searchTerm)!= -1) {
      book.style.disaply = "block";
    } else {
      book.style.display = "none";
    }
  });
}

/*
1. Retrieve element
2. Listen for event
3. Create Callback
4. compare input to lower case and retrieve li
5. Convert HTML collection to array
6. Retrieve li text content
7. compare book tile in lower case as ell
8. If present, display - else, don't display
*/



// tabbed content
const tabs = document.querySelector('.tabs');
const panels = document.querySelectorAll('.panel');

// Listener on parent/ul
tabs.addEventListener('click', clickedTab);

function clickedTab(e) {
  if(e.target.hasAttribute('data-target')) {
    // Retrieve reference to element with data attr of target
    const targetPanel = document.querySelector(e.target.dataset.target);
    e.target.classList.add('blue');
    panels.forEach(function(panel) {
      if (panel === targetPanel) {
        panel.classList.add('active');
      } else {
        panel.classList.remove('active');
      }
    });
  }
};

/* 
1. Retrieve reference to tabs and panels
2. Listen for Click on tab
3. Create Callback
4. If clicked tab has attr or is an LI
5. Retrieve reference to desired panel
6. Loop through each panel
7. If desired panel is chosen, add active css class - else remove active css

*/
