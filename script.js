// --------------------------------------------------------------------CAMBIO DE TEMA

const toggleBtn = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const html = document.documentElement;

// Aplicar tema guardado
if (localStorage.getItem("theme")) {
  html.setAttribute("data-bs-theme", localStorage.getItem("theme"));
  themeIcon.className =
    localStorage.getItem("theme") === "dark"
      ? "bi bi-sun-fill"
      : "bi bi-moon-fill";
} else {
  html.setAttribute("data-bs-theme", "dark");
  themeIcon.className = "bi bi-sun-fill";
}

// Cambio de tema
toggleBtn.addEventListener("click", () => {
  let currentTheme = html.getAttribute("data-bs-theme");
  let newTheme = currentTheme === "light" ? "dark" : "light";
  html.setAttribute("data-bs-theme", newTheme);

  themeIcon.className =
    newTheme === "dark" ? "bi bi-sun-fill" : "bi bi-moon-fill";

  localStorage.setItem("theme", newTheme);
});

// --------------------------------------------------------------------CAMBIO DE IDIOMA

const langBtn = document.getElementById("lang-toggle");
const langIcon = document.getElementById("lang-icon");

if (localStorage.getItem("lang")) {
  const savedLang = localStorage.getItem("lang");
  langIcon.src =
    savedLang === "es" ? "assets/images/spain.png" : "assets/images/uk.png";
}

// Cambio de idioma al hacer click
langBtn.addEventListener("click", () => {
  const currentLang = localStorage.getItem("lang") || "es";
  const newLang = currentLang === "es" ? "en" : "es";

  // Guardar idioma
  localStorage.setItem("lang", newLang);

  // Cambiar icono
  langIcon.src =
    newLang === "es" ? "assets/images/spain.png" : "assets/images/uk.png";

  // Cambiar textos
  if (newLang === "en") {
    document.getElementById("nav-about").innerText = "About Me";
    document.getElementById("nav-projects").innerText = "Projects";
    document.getElementById("nav-skills").innerText = "Skills";
    document.getElementById("nav-contact").innerText = "Contact";
  } else {
    document.getElementById("nav-about").innerText = "Sobre mí";
    document.getElementById("nav-projects").innerText = "Proyectos";
    document.getElementById("nav-skills").innerText = "Habilidades";
    document.getElementById("nav-contact").innerText = "Contacto";
  }
});
