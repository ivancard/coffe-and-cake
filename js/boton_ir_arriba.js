let propiBotonArriba = {
  boton: document.getElementById("boton_arriba"),
};

let metBotonArriba = {
  inicio: function () {
    window.addEventListener("scroll", metBotonArriba.revelarBoton);
  },
  revelarBoton: function () {
    if (window.pageYOffset > 500) {
      propiBotonArriba.boton.style.opacity = 0.8;
    } else {
      propiBotonArriba.boton.style.opacity = 0;
    }
  },
};

metBotonArriba.inicio();
