//Propiedades de las tabs
let propTabs = {
  primerEncabezado: document.getElementById("encabezado-menu")
    .firstElementChild,
  primerContenido: document.getElementById("contenido-menu").firstElementChild,
  enlacesEncabezado: document.querySelectorAll("#encabezado-menu li a"),
  liEncabezado: document.querySelectorAll("#encabezado-menu li"),
  divsContenido: document.querySelectorAll("#contenido-menu > div"),
  contenidoActivo: null,
};

//metodos de las tabs
let metTabs = {
  inicio: function () {
    propTabs.primerEncabezado.className = "active";
    propTabs.primerContenido.className = "active";

    for (let i = 0; i < propTabs.enlacesEncabezado.length; i++) {
      propTabs.enlacesEncabezado[i].addEventListener("click", metTabs.evento);
    }
  },

  evento: function (e) {
    e.preventDefault();
    for (i = 0; i < propTabs.liEncabezado.length; i++) {
      propTabs.liEncabezado[i].className = "";
    }

    for (i = 0; i < propTabs.divsContenido.length; i++) {
      propTabs.divsContenido[i].className = "";
    }

    this.parentElement.className = "active";
    propTabs.contenidoActivo = this.getAttribute("href");
    document.querySelector(propTabs.contenidoActivo).className = "active";
    document.querySelector(propTabs.contenidoActivo).style.opacity = 0;
    setTimeout(() => {
      document.querySelector(propTabs.contenidoActivo).style.opacity = 1;
    }, 100);
  },
};

metTabs.inicio();
