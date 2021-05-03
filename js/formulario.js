//Efecto   que mueve los labels al hacer focus en un formulario.
let propFormulario = {
  formulario: document.formulario_contacto, //Se guarda el formulario en la propiedad.
  elementos: document.formulario_contacto.elements, //Se guardar los elementos del formulario en un array.
};

let metFormulario = {
  inicio: function () {
    //Se recorre el array de elementos del formulario, validando que no sea el input del tipo submit, y se le agrega los eventos focus y blur.
    for (var i = 0; i < propFormulario.elementos.length; i++) {
      if (
        propFormulario.elementos[i].type == "text" ||
        propFormulario.elementos[i].type == "email" ||
        propFormulario.elementos[i].nodeName.toLowerCase() == "textarea"
      ) {
        propFormulario.elementos[i].addEventListener(
          "focus",
          metFormulario.focusInput
        );
        propFormulario.elementos[i].addEventListener(
          "blur",
          metFormulario.blurInput
        );
      }
    }
  },

  focusInput: function () {
    //Al estar el input in focus, se le agrega la clase "active" que tiene una animacion definida en CSS.
    this.parentElement.children[1].className = "label active";
  },
  blurInput: function () {
    //Se valida que cuando el input este vacio, al hacer blur se aplique el efecto definido en CSS. De lo contrario,
    //al haber contenido en el input, el efecto no se ejecutarà.
    if (this.value == "") {
      this.parentElement.children[1].className = "label";
    }
  },
};

metFormulario.inicio();
