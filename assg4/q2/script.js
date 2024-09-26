const hoverDiv = document.getElementById('hover-div');

hoverDiv.onmouseover = function() {
  hoverDiv.style.backgroundColor = 'blue';
}

hoverDiv.onmouseout = function() {
  hoverDiv.style.backgroundColor = 'white';
}