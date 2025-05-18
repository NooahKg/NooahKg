// Scroll-Effekt bei Sichtbarkeit (Intersection Observer)
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});

document.querySelectorAll('.section').forEach(section => {
  observer.observe(section);
});

// Dark/Light Mode Toggle (optional, Button muss eingefügt werden)
const toggleButton = document.querySelector('.mode-toggle');
if (toggleButton) {
  toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
  });
}
