//Efecto   que mueve los labels al hacer focus en un formulario.
let propFormulario = {
  formulario: document.formulario_contacto, //Se guarda el formulario en la propiedad.
  elementos: document.formulario_contacto.elements, //Se guardar los elementos del formulario en un array.
  error: null,
  textoError: null,
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
    propFormulario.formulario.addEventListener(
      "submit",
      metFormulario.validarInputs
    );
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
  validarInputs: function (e) {
    for (var i = 0; i < propFormulario.elementos.length; i++) {
      if (propFormulario.elementos[i].value == "") {
        e.preventDefault();

        if (propFormulario.elementos[i].parentElement.children.length < 3) {
          propFormulario.error = document.createElement("p");
          propFormulario.textoError = document.createTextNode(
            "Por favor llena el campo con tu " +
              propFormulario.elementos[i].name
          );
          propFormulario.error.appendChild(propFormulario.textoError);
          propFormulario.error.className = "error";

          propFormulario.elementos[i].parentElement.appendChild(
            propFormulario.error
          );
        }
      } else {
        if (propFormulario.elementos[i].parentElement.children.length >= 3) {
          propFormulario.error = propFormulario.elementos[
            i
          ].parentElement.getElementsByTagName("p")[0];
          propFormulario.elementos[i].parentElement.removeChild(
            propFormulario.error
          );
        }
      }
    }
  },
};

metFormulario.inicio();
