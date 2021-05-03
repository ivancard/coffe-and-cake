//Propiedades de efecto parallax.
let propParallax = {
  seccion: document.querySelector(".parallax"),
  recorrido: null,
  limite: null,
};

//Metodos de parallax
let metParallax = {
  //Se inicia el script y se le asigna el evento al objeto window.
  inicio: () => {
    window.addEventListener("scroll", metParallax.scrollParallax);
  },
  scrollParallax: () => {
    propParallax.recorrido = window.pageYOffset; //Se guarda la cantidad en pixeles de los pixeles escroleados.
    propParallax.limite =
      //Se establece el limite del efecto en el final de altura de la caja que contendrà el efecto.
      propParallax.seccion.offsetTop + propParallax.seccion.offsetHeight;

    //Se condiciona el momento en donde el efecto comienza a actuar. A una altura de ventana antes de que la caja ".parallax" entre en pantalla.
    if (
      propParallax.recorrido >
        propParallax.seccion.offsetTop - window.outerHeight &&
      propParallax.recorrido <= propParallax.limite
    ) {
      propParallax.seccion.style.backgroundPositionY =
        (propParallax.recorrido - propParallax.seccion.offsetTop) / 1.5 + "px";
    } else {
      propParallax.seccion.style.backgroundPositionY = 0;
    }
  },
};

metParallax.inicio();
