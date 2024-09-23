const currentTimeElement = document.getElementById('currentTime');

function updateTime() {
  const now = new Date();
  const currentTime = now.toLocaleTimeString();
  currentTimeElement.textContent = `Current Time: ${currentTime}`;
}

setInterval(updateTime, 1000);