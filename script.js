const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const pubToggle = document.querySelector('[data-toggle-publications]');
const extraPubs = document.querySelectorAll('.publication.extra');
if (pubToggle && extraPubs.length) {
  pubToggle.addEventListener('click', () => {
    const showing = pubToggle.getAttribute('aria-expanded') === 'true';
    extraPubs.forEach(pub => pub.hidden = showing);
    pubToggle.setAttribute('aria-expanded', String(!showing));
    pubToggle.textContent = showing ? 'Show more publications' : 'Show fewer publications';
  });
}

const panels = document.querySelectorAll('.split-panel');
panels.forEach(panel => {
  panel.addEventListener('pointermove', event => {
    const rect = panel.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 10;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 10;
    panel.style.setProperty('--tilt-x', `${x}deg`);
    panel.style.setProperty('--tilt-y', `${-y}deg`);
  });
});

const shots = document.querySelectorAll('.shot');
shots.forEach(shot => {
  shot.addEventListener('pointermove', event => {
    const rect = shot.getBoundingClientRect();
    shot.style.setProperty('--x', `${event.clientX - rect.left}px`);
    shot.style.setProperty('--y', `${event.clientY - rect.top}px`);
  });
});
