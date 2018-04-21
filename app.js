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

  // add classes dynamically from already existing classes
  bookName.classList.add('name');
  deleteBtn.classList.add('delete');

  // Order matters
  li.appendChild(bookName);
  li.appendChild(deleteBtn);
  list.appendChild(li);
  li.appendChild(value)

}

