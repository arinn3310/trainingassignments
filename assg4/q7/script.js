const toggleButton = document.getElementById('toggleButton');
const myElement = document.getElementById('myElement');

toggleButton.addEventListener('click', () => {
  myElement.classList.toggle('hidden');
});