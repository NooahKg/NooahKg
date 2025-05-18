// Lightbox für Galerie
document.querySelectorAll('.lightbox-img').forEach(img => {
  img.addEventListener('click', () => {
    const overlay = document.createElement('div');
    overlay.className = 'lightbox-overlay';
    const fullImg = document.createElement('img');
    fullImg.src = img.src;
    fullImg.className = 'lightbox-full';
    overlay.appendChild(fullImg);
    document.body.appendChild(overlay);
    overlay.addEventListener('click', () => overlay.remove());
  });
});

// Scroll Animation
const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

sections.forEach(section => observer.observe(section));
