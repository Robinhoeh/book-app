// Delete element/books
const list = document.querySelector('#book-list ul');

list.addEventListener('click', listEvent);

function listEvent(e) {
  if(e.target.className === "delete"){
    const li = e.target.parentElement;
    list.removeChild(li);
  }
};


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
  li.appendChild(value)
}


// Hide books
const hideBox = document.querySelector('#hide');
hideBox.addEventListener('change', hideClickedBox);

function hideClickedBox(){
  if (hideBox.checked) {
    list.style.display = "none";
  } else {
    list.style.display = "block";
  }
}


// filter books
const searchBar = document.forms['search-books'].querySelector('input');
searchBar.addEventListener('keyup', keyUpListener);

function keyUpListener(e){
  const searchTerm = e.target.value.toLowerCase();
  const listOfBooks = list.getElementsByTagName('li');

  // looks for search term title in each book
  Array.from(listOfBooks).forEach(function (book){
    const bookTitle = book.firstElementChild.textContent;
    if (bookTitle.toLowerCase().indexOf(searchTerm)!= -1) {
      book.style.display = "block";
    } else {
      book.style.display = "none";
    }
  });
}

// tabbed content
const tabs = document.querySelector('.tabs');
const panels = document.querySelectorAll('.panel');

// Listener on parent/ul
tabs.addEventListener('click', clickedTab);

function clickedTab(e) {
  if(e.target.tagName == "LI") {
    const targetPanel = document.querySelector(e.target.dataset.target);
    panels.forEach(function (panel){
      if (panel === targetPanel) {
        panel.classList.add('active');
      } else {
        panel.classList.remove('active');
      }
    });
  }
};

