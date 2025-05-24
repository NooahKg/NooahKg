let sections = ["about", "skills", "projects", "contact"];
let currentIndex = 0;

function navigateSection(direction) {
  currentIndex += direction;
  if (currentIndex < 0) currentIndex = 0;
  if (currentIndex >= sections.length) currentIndex = sections.length - 1;
  document.getElementById(sections[currentIndex]).scrollIntoView({ behavior: 'smooth' });
  document.getElementById("current-section").textContent = sections[currentIndex].charAt(0).toUpperCase() + sections[currentIndex].slice(1);
}

function togglePlay() {
  const playBtn = document.getElementById("play-btn");
  if (playBtn.textContent === "▶️") {
    playBtn.textContent = "⏸️";
  } else {
    playBtn.textContent = "▶️";
  }
}

function handleSubmit(event) {
  event.preventDefault();
  alert('Danke für deine Nachricht, ich melde mich bald!');
}
