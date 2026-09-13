const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const dynamicText = document.getElementById('dynamicText');

themeToggle.addEventListener('click', () => {
  body.classList.toggle('night-mode');

  if (body.classList.contains('night-mode')) {
    dynamicText.textContent = "Slow down. Stay a little longer.";
  } else {
    dynamicText.textContent = "Take a breath. Enjoy the daylight.";
  }
});