document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  document.getElementById('confirmation').textContent = "Thank you for reaching out. We will get back to you soon, In Sha Allah.";
  this.reset();
});
