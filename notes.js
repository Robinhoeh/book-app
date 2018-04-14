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
const deleteButton = document.querySelectorAll('#book-list .delete');

// 2. Loop through node list, attach listener
deleteButton.forEach(function(dltBtn){
  dltBtn.addEventListener('click', dltButton)
});

// 3. Select targeted element, select parent, remove child
function dltButton(e) {
 const li = e.target.parentElement;
 li.parentNode.removeChild(li);
};

// 1. Retrieve element
const link = document.querySelector('#page-banner a');
// 2. listen for event
link.addEventListener('click', linkButton)

// 3. Run Callback function, prevent browser refresh, log textContent
function linkButton(e) {
  e.preventDefault();
  console.log(`The link is to:`, e.target.textContent);
}