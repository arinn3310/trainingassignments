const form = document.getElementById('myForm');
const messageElement = document.getElementById('message');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // prevent form from submitting and reloading the page
  const name = document.getElementById('name').value;
  messageElement.textContent = `Thank you for submitting, ${name} !`;
});