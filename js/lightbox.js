// Script de LightBox, funcion que abre en pantalla completa una imagen. Con una animacion al abrirla y un boton para cerrarla.

//Propiedades de objeto LightBox
let propLightBox = {
    imgContainer: document.getElementsByClassName('lightbox'),//elementos a los que se le aplicara un lightbox
    image: null,
    imagenSrc: null,
    cuerpoDom: document.getElementsByTagName('body')[0],
    lightbox_container: null, //contenido del Div contenedor del Lightbox
    modal: null,
    cerrarModal: null,
    animacion: 'fade'
};

//Metodos  de objeto LightBox
let metLightBox = {
    //Se asigna un evento al elemento clickeado del array de nodos de imagenes disponibles en "imgContainer".
    inicio: function(){
        for (let i = 0; i < propLightBox.imgContainer.length; i++) {
            propLightBox.imgContainer[i].addEventListener('click', metLightBox.capturaImagen)//Al clickear en la imagen(imgContainer[i]) se ejecuta la funcion "capturaImagen"
        }
    },
    //La imagen seleccionada se guarda en la propiedad "image" y se la envia como parametro a el metodo lightbox.
    capturaImagen: function () {
        propLightBox.image = this;
        metLightBox.lightBox(propLightBox.image);
    },
    lightBox: function (imagen) {
        propLightBox.imagenSrc = window.getComputedStyle(imagen, null).backgroundImage.slice(5, -2);//Se extrae el atributo backgroundImage ("url(__ruta de la imagen__)") y se le aplica metodo slice para guardar solo la ruta.
        //Se crea el div que contendrà al lightbox y se la insertarà a el nodo body.
        propLightBox.cuerpoDom.appendChild(document.createElement('DIV')).setAttribute('id', 'lightbox-container');
        //Se guarda el div que contendrà al lightbox en una propiedad.
        propLightBox.lightbox_container = document.getElementById('lightbox-container');

        //Se añaden estilos a ese contenedor del lightbox.
        propLightBox.lightbox_container.style.width = '100%';
        propLightBox.lightbox_container.style.height = '100%';
        propLightBox.lightbox_container.style.position = 'fixed';
        propLightBox.lightbox_container.style.zIndex = '1000';
        propLightBox.lightbox_container.style.background = 'rgba(0,0,0,0.8)';
        propLightBox.lightbox_container.style.top = '0';

        //Se crea un div para contener y poner en su lugar a la imagen y luego la guarda en la propiedad "modal".
        propLightBox.lightbox_container.appendChild(document.createElement('DIV')).setAttribute('id', 'modal');
        propLightBox.modal = document.getElementById('modal');

        //Se aplican estilos a modal.
        propLightBox.modal.style.height = '100%';

        //Se crea nodo de imagen y se le asigna como source propLightBox.imagenSrc que es la propiedad que guarda la ruta de la imagen clieckeada.
        propLightBox.modal.appendChild(document.createElement('IMG')).setAttribute('src', propLightBox.imagenSrc);
        //A la imagen se le añade una clase para darle estilo en CSS.
        propLightBox.modal.getElementsByTagName('img')[0].setAttribute('class', 'imagen-modal');

        //Se le añade una animacion (controlada en CSS) para cuando aparezca la imagen, con unrwtardo de 50ms.
        if (propLightBox.animacion == 'fade') {
            document.getElementsByClassName('imagen-modal')[0].style.opacity = 0;
            setTimeout(()=>{
                document.getElementsByClassName('imagen-modal')[0].style.opacity = 1;
            },50);
        }

        //Se le añade un icono "X" al modal que contiene la imagen
        propLightBox.modal.innerHTML += '<i id="cerrar-modal" class="fa fa-times" aria-hidden="true"></i>';

        //Se le asigna un Id y despues se lo usa para darle el evento de cerrar el Lightbox al hacerle click.
        propLightBox.cerrarModal = document.getElementById('cerrar-modal');
        propLightBox.cerrarModal.addEventListener('click', () =>{
            propLightBox.cuerpoDom.removeChild(propLightBox.lightbox_container);
        });
    }
};
//Se ejecuta el metodo que inicia el sript.
metLightBox.inicio();
