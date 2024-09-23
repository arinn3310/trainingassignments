const inputField = document.getElementById('myInput');
const submitButton = document.getElementById('submitButton');
const outputElement = document.getElementById('output');

submitButton.addEventListener('click', () => {
  const inputValue = inputField.value;
  outputElement.textContent = `You entered: ${inputValue}`;
});