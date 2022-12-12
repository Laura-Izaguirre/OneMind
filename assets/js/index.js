// Constante para el body
const body = document.querySelector("body");

// Llamar nuestras constantes principales
const main = document.getElementById("main");
const form = document.getElementById("form");
const seccionPrincipal = document.getElementById("contenido-1");

const contenedorBotones = document.getElementById("contenedor-btns");

const comillaAmarilla = document.getElementById("comilla-amarilla");
const comillaBlanca = document.getElementById("comilla-blanca");

// Inputs de la forma
const sentimiento = document.getElementById("sentimiento");

// Crear un escuchador de eventos para la forma
form.addEventListener("submit", (e) => {
  // Evitar accion por defecto de la forma
  e.preventDefault();
});

// Crear un evento global
main.addEventListener("click", (e) => {
  if (e.target.classList.contains("feliz-btn")) {
    // Agregar clases a body
    body.removeAttribute("class");
    body.classList.add("feliz");

    seccionPrincipal.classList.remove(
      "triste-s",
      "tranquilo-s",
      "enojado-s",
      "color-blanco"
    );

    
    seccionPrincipal.classList.add("feliz-s", "cuadro");
    sentimiento.classList.add("color-naranja");
    sentimiento.classList.remove("color-blanco");
    
    comillaBlanca.classList.add("ocultar");
    comillaAmarilla.classList.remove("ocultar");
    
    //Llamar función para agregar texto
    insertarEstadoDeAnimo("Feliz");
  }

  if (e.target.classList.contains("triste-btn")) {
    body.removeAttribute("class");
    body.classList.add("triste");

    seccionPrincipal.classList.remove("feliz-s", "tranquilo-s", "enojado-s");
    seccionPrincipal.classList.add("triste-s", "cuadro");

    sentimiento.classList.add("color-blanco");
    sentimiento.classList.remove("color-naranja");

    comillaBlanca.classList.remove("ocultar");
    comillaAmarilla.classList.add("ocultar");
    
    //Llamar función para agregar texto
    insertarEstadoDeAnimo("Triste");
  }
  
  if (e.target.classList.contains("tranquilo-btn")) {
    body.removeAttribute("class");
    body.classList.add("tranquilo");
    seccionPrincipal.classList.remove("feliz-s", "triste-s", "enojado-s");
    seccionPrincipal.classList.add("tranquilo-s", "cuadro", "color-blanco");
    
    sentimiento.classList.add("color-blanco");
    sentimiento.classList.remove("color-naranja");

    comillaBlanca.classList.remove("ocultar");
    comillaAmarilla.classList.add("ocultar");
    
    //Llamar función para agregar texto
    insertarEstadoDeAnimo("Tranquilo");
  }
  
  if (e.target.classList.contains("enojado-btn")) {
    body.removeAttribute("class");
    body.classList.add("enojado");
    
    seccionPrincipal.classList.remove("feliz-s", "tranquilo-s", "triste-s");
    seccionPrincipal.classList.add("enojado-s", "cuadro", "color-blanco");
    
    sentimiento.classList.add("color-blanco");
    sentimiento.classList.remove("color-naranja");
    
    comillaBlanca.classList.remove("ocultar");
    comillaAmarilla.classList.add("ocultar");
    
    //Llamar función para agregar texto
    insertarEstadoDeAnimo("Enojado");
  }
});

function insertarEstadoDeAnimo(animo) {
  const texto = document.getElementById("estado-animo");
  texto.textContent = animo;
}

function Comillas() {
  let cambiarComillas = document.createElement("div");
  cambiarComillas.innerHTML = `
  <img src="./assets/Images/comilla-blanca.png" alt="comilla-blanca">
  `;
}
