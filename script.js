// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Close mobile nav if open
      const navEl = document.getElementById('nav-menu');
      const toggle = document.querySelector('.nav-toggle');
      if (navEl && navEl.classList.contains('open')) {
        navEl.classList.remove('open');
        if (toggle) toggle.classList.remove('open');
      }
    }
  });
});

// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.getElementById('nav-menu');
if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    navToggle.classList.toggle('open', isOpen);
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (!navToggle.contains(e.target) && !navMenu.contains(e.target) && navMenu.classList.contains('open')) {
      navMenu.classList.remove('open');
      navToggle.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
}

// Optional: subtle device screen live update demo (temp fluctuation)
const screen = document.querySelector('.screen');
if (screen) {
  let temp = 24.6;
  setInterval(() => {
    temp = Math.max(18, Math.min(32, temp + (Math.random() - 0.5) * 0.6));
    const rh = Math.floor(48 + Math.random() * 18);
    screen.innerHTML = `${temp.toFixed(1)}°C<br><small>RH ${rh}%</small>`;
  }, 6500);
}
