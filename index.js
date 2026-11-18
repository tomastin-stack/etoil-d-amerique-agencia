// Elementos
const cabecera = document.getElementById("cabecera");
const botonMenu = document.getElementById("menu-boton");
const listaMenu = document.getElementById("menu-lista");
const botonesDesplegable = document.querySelectorAll(".desplegable-boton");

// Abrir / cerrar el menú en celulares
botonMenu.addEventListener("click", () => {
  const abierto = listaMenu.classList.toggle("abierto");
  botonMenu.setAttribute("aria-expanded", abierto);
  botonMenu.setAttribute("aria-label", abierto ? "Fermer le menu" : "Ouvrir le menu");
});

// Abrir / cerrar cada desplegable (Destination, Forfait)
botonesDesplegable.forEach((boton) => {
  boton.addEventListener("click", () => {
    const abierto = boton.getAttribute("aria-expanded") === "true";
    cerrarDesplegables();
    boton.setAttribute("aria-expanded", !abierto);
  });
});

function cerrarDesplegables() {
  botonesDesplegable.forEach((b) => b.setAttribute("aria-expanded", "false"));
}

// Cerrar todo al elegir un enlace del menú
document.querySelectorAll(".menu-lista a").forEach((enlace) => {
  enlace.addEventListener("click", () => {
    cerrarDesplegables();
    listaMenu.classList.remove("abierto");
    botonMenu.setAttribute("aria-expanded", "false");
  });
});

// Cerrar desplegables al hacer clic fuera o con la tecla Escape
document.addEventListener("click", (e) => {
  if (!e.target.closest(".desplegable")) cerrarDesplegables();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") cerrarDesplegables();
});

// Sombra en el menú al bajar
window.addEventListener("scroll", () => {
  cabecera.classList.toggle("con-sombra", window.scrollY > 10);
});

// Año automático en el pie de página
document.getElementById("anio").textContent = new Date().getFullYear();