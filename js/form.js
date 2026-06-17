const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

contactForm?.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('cf-name').value.trim();
  const email = document.getElementById('cf-email').value.trim();
  const subject = document.getElementById('cf-subject').value.trim();
  const message = document.getElementById('cf-message').value.trim();

  if (!name || !email || !message) {
    showStatus('error', 'Please fill in all required fields.');
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    showStatus('error', 'Please enter a valid email address.');
    return;
  }

  // Build a mailto link as a static-site-friendly fallback.
  // Replace YOUR_EMAIL@example.com with the real inbox before deploying.
  const to = 'oppy.wahidun@gmail.com';
  const mailSubject = encodeURIComponent(subject || `Portfolio inquiry from ${name}`);
  const mailBody = encodeURIComponent(`${message}\n\n—\n${name}\n${email}`);
  const mailtoLink = `mailto:${to}?subject=${mailSubject}&body=${mailBody}`;

  window.location.href = mailtoLink;
  showStatus('success', 'Opening your email client — thanks for reaching out!');
  contactForm.reset();
});

function showStatus(type, msg) {
  formStatus.textContent = msg;
  formStatus.className = type;
  setTimeout(() => {
    formStatus.className = '';
  }, 6000);
}
