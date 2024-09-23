const myList = document.getElementById('my-list');
const addButton = document.getElementById('add-button');

addButton.addEventListener('click', function() {
  const newListItem = document.createElement('li');
  const listItemText = document.createTextNode('New list item!');
  newListItem.appendChild(listItemText);
  myList.appendChild(newListItem);
});