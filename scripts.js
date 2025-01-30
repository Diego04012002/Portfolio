document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
      alert("Gracias por tu mensaje!");
      this.reset();
    } else {
      alert("Por favor, completa todos los campos.");
    }
  });
const year = new Date().getFullYear();
const yearElement = document.getElementById("year");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");

yearElement.textContent = year;

// Función para cambiar el tema
function toggleTheme() {
  const body = document.body;
  const themeToggle = document.getElementById("toggle-theme");
  const sunIcon = themeToggle.querySelector(".sun-icon");
  const moonIcon = themeToggle.querySelector(".moon-icon");

  body.classList.toggle("dark-mode");
  localStorage.setItem(
    "theme",
    body.classList.contains("dark-mode") ? "dark" : "light"
  );

  // Cambiar el icono y el color del botón
  if (body.classList.contains("dark-mode")) {
    sunIcon.style.opacity = "0";
    moonIcon.style.opacity = "1";
  } else {
    sunIcon.style.opacity = "1";
    moonIcon.style.opacity = "0";
  }

  // Aplicar las transiciones
  themeToggle.style.transition = "background-color 0.3s, transform 0.3s";
  sunIcon.style.transition = "opacity 0.3s";
  moonIcon.style.transition = "opacity 0.3s";
}

// Cargar el tema guardado en el almacenamiento local
function loadTheme() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
  }
}

menuToggle.addEventListener("click", function () {
  navLinks.classList.toggle("show");
});

document.addEventListener("click", function (event) {
  if (!navLinks.contains(event.target) && !menuToggle.contains(event.target)) {
    navLinks.classList.remove("show");
  }
});

navItems.forEach((item) => {
  item.addEventListener("click", function () {
    navLinks.classList.remove("show");
  });
});

// Añadir evento de clic al botón de cambio de tema
document.getElementById("toggle-theme").addEventListener("click", toggleTheme);

// Cargar el tema al cargar la página
window.addEventListener("load", loadTheme);
