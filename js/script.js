const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('open');
});

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

const form = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    formNote.textContent = 'Başvurunuz alındı, en kısa sürede sizinle iletişime geçeceğiz.';
    form.reset();
  });
}

const quickForm = document.getElementById('quickContactForm');
const quickFormNote = document.getElementById('quickFormNote');

if (quickForm) {
  quickForm.addEventListener('submit', (e) => {
    e.preventDefault();
    quickFormNote.textContent = 'Talebiniz alındı, en kısa sürede sizinle iletişime geçeceğiz.';
    quickForm.reset();
  });
}
