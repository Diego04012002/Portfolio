document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (name && email && message) {
      alert('Gracias por tu mensaje, ' + name + '!');
      this.reset();
  } else {
      alert('Por favor, completa todos los campos.');
  }
});

// Función para cambiar el tema
function toggleTheme() {
  const body = document.body;
  body.classList.toggle('dark-mode');
  localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
}

// Cargar el tema guardado en el almacenamiento local
function loadTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
      document.body.classList.add('dark-mode');
  }
}

// Añadir evento de clic al botón de cambio de tema
document.getElementById('toggle-theme').addEventListener('click', toggleTheme);

// Cargar el tema al cargar la página
window.addEventListener('load', loadTheme);