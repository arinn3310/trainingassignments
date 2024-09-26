const myElement = document.getElementById('myElement');
const innerHTMLOutput = document.getElementById('innerHTMLOutput');
const textContentOutput = document.getElementById('textContentOutput');

function getInnerHTML() {
  const innerHTML = myElement.innerHTML;
  innerHTMLOutput.textContent = `innerHTML: ${innerHTML}`;
}

function getTextContent() {
  const textContent = myElement.textContent;
  textContentOutput.textContent = `textContent: ${textContent}`;
}

getInnerHTML();
getTextContent();