// Set your birthday date here (YYYY-MM-DD)
const birthday = new Date("2025-05-19T12:20:00").getTime();

const countdownBox = document.getElementById("countdown-box");
const countdown = document.getElementById("countdown");
const message = document.getElementById("message");

const interval = setInterval(() => {
  const now = new Date().getTime();
  const diff = birthday - now;

  if (diff <= 0) {
    clearInterval(interval);
    showBirthdayMessage();
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}, 1000);

function showBirthdayMessage() {
  // Change background image
  document.body.style.backgroundImage = "url('sakshi.jpg')";

  // Optional: remove or hide overlay if it interferes
  const overlays = document.querySelectorAll('.overlay');
  overlays.forEach(overlay => overlay.style.backgroundColor = 'transparent');

  // Update content
  countdownBox.innerHTML = `
    <h1>🎉 Happy Birthday IAS Sakshi 🎉</h1>
    <div id="happy-birthday">
      <img src="sakshi.jpg" alt="IAS Sakshi">
    </div>
  `;
}

