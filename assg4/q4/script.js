const myList = document.getElementById('my-list');

// create a list of items
const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
items.forEach((item, index) => {
  const listItem = document.createElement('li');
  const listItemText = document.createTextNode(item);
  const removeButton = document.createElement('button');
  removeButton.textContent = 'Remove';
  removeButton.addEventListener('click', function() {
    removeItem(index);
  });
  listItem.appendChild(listItemText);
  listItem.appendChild(removeButton);
  myList.appendChild(listItem);
});

// function to remove an item from the list
function removeItem(index) {
  myList.removeChild(myList.children[index]);
}