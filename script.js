// Set birthday date (YYYY-MM-DD)
const birthday = new Date("2025-05-21T00:00:00").getTime();

const countdownBox = document.getElementById("countdown-box");
const overlay = document.getElementById("main-overlay");

const interval = setInterval(() => {
  const now = new Date().getTime();
  const diff = birthday - now;

  if (diff <= 0) {
    clearInterval(interval);
    showBirthdayView();
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

function showBirthdayView() {
  // Remove old overlay
  overlay.remove();

  // Create birthday screen
  const birthdayView = document.createElement('div');
  birthdayView.id = 'birthday-view';

  birthdayView.innerHTML = `
    <div class="birthday-box">
      <h1>🎉 Happy Birthday IAS Sakshi 🎉</h1>
      <a href="letter.pdf" download class="download-btn">Open Letter</a>
    </div>
  `;

  document.body.appendChild(birthdayView);
}
