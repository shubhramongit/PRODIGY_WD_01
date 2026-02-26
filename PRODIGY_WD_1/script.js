// ── DOM Elements ──
const navbar    = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

// ── Scroll Event ──
// Listens for window scroll and toggles the 'scrolled' class on the navbar.
// CSS then handles the visual change (background, shadow, padding).
window.addEventListener('scroll', function () {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ── Hamburger Toggle (Mobile) ──
// Toggles the open state on both the button and nav links list.
hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});

// ── Close mobile menu on link click ──
navLinks.querySelectorAll('a').forEach(function (link) {
  link.addEventListener('click', function () {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

// ── Contact Form ──
// Prevents default submit and shows a simple confirmation.
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Message sent! We will get back to you soon.');
  this.reset();
});