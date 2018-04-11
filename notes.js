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

bookList.nextElementSibling.querySelector('button').innerHTML = '<h1>I dun fit here</h2>';