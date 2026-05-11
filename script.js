// Modal controls
function openModal() {
  document.getElementById('modal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modal').classList.remove('active');
  document.body.style.overflow = '';
}

// Close modal when clicking outside
document.getElementById('modal').addEventListener('click', function(e) {
  if (e.target === this) closeModal();
});

// Scroll reveal animation
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

reveals.forEach(el => observer.observe(el));

// Nav shrink on scroll
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (window.scrollY > 60) {
    nav.style.padding = '18px 60px';
    nav.style.boxShadow = '0 2px 30px rgba(0,0,0,0.06)';
  } else {
    nav.style.padding = '28px 60px';
    nav.style.boxShadow = 'none';
  }
});