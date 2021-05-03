//Script de Slider, sucesion de imagenes que se deslizan cada determinado timepo en un mismo sector.

//Propiedades del Slider.
let propSlider = {
  //Se guarda el contenedor de las imagenes a deslizar en un propiedad.
  slider: document.getElementById("slider"),
  primerSlide: null,
};

let metSlider = {
  //metodo que inicializa el script, con un intervalo de ejecucion de la funcion que deslizara las imagenes.
  inicio: function () {
    setInterval(metSlider.moverSlide, 3000); //Las imagenes se deslizan cada 3 segundos. Cada imagen durara 3seg en pantalla.
  },
  //Fuencio que desliza las imagenes.
  moverSlide: function () {
    propSlider.slider.style.transition = "all 1s ease"; //Se agrega la prioedad de CSS para que definir la duracion de cada transicion.
    propSlider.slider.style.marginLeft = "-100%"; //Cada imagen se mueve a la izquierda dandole lugar a la siguiente imagen.

    setTimeout(() => {
      propSlider.primerSlide = propSlider.slider.firstElementChild;
      propSlider.slider.appendChild(propSlider.primerSlide);
      propSlider.slider.style.transition = "unset";
      propSlider.slider.style.marginLeft = 0;
    }, 1000);
  },
};

metSlider.inicio();
