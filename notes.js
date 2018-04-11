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