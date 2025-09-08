// Script básico para formulario de contacto
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert("¡Gracias por contactarnos! 🌈\nTe responderemos en menos de 24hs.");
  this.reset();
});
