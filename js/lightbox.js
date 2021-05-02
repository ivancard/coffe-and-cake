//Propiedades de objeto LightBox
let propLightBox = {
    imgContainer: document.getElementsByClassName('lightbox'),
    image: null,
    imagenSrc: null,
    cuerpoDom: document.getElementsByTagName('body')[0],
    lightbox_container: null,
    modal: null,
    cerrarModal: null,
    animacion: 'fade'
};

//Metodos  de objeto LightBox
let metLightBox = {
    inicio: function(){
        for (let i = 0; i < propLightBox.imgContainer.length; i++) {
            propLightBox.imgContainer[i].addEventListener('click', metLightBox.capturaImagen)
        }
    },
    capturaImagen: function () {
        propLightBox.image = this;
        metLightBox.lightBox(propLightBox.image);
    },
    lightBox: function (imagen) {
        propLightBox.imagenSrc = window.getComputedStyle(imagen, null).backgroundImage.slice(5, -2);
        propLightBox.cuerpoDom.appendChild(document.createElement('DIV')).setAttribute('id', 'lightbox-container');
        propLightBox.lightbox_container = document.getElementById('lightbox-container');

        propLightBox.lightbox_container.style.width = '100%';
        propLightBox.lightbox_container.style.height = '100%';
        propLightBox.lightbox_container.style.position = 'fixed';
        propLightBox.lightbox_container.style.zIndex = '1000';
        propLightBox.lightbox_container.style.background = 'rgba(0,0,0,0.8)';
        propLightBox.lightbox_container.style.top = '0';

        propLightBox.lightbox_container.appendChild(document.createElement('DIV')).setAttribute('id', 'modal');
        propLightBox.modal = document.getElementById('modal');

        propLightBox.modal.style.height = '100%';

        propLightBox.modal.appendChild(document.createElement('IMG')).setAttribute('src', propLightBox.imagenSrc);
        propLightBox.modal.getElementsByTagName('img')[0].setAttribute('class', 'imagen-modal');
        if (propLightBox.animacion == 'fade') {
            document.getElementsByClassName('imagen-modal')[0].style.opacity = 0;
            setTimeout(()=>{
                document.getElementsByClassName('imagen-modal')[0].style.opacity = 1;
            },50);
        }

        propLightBox.modal.innerHTML += '<i id="cerrar-modal" class="fa fa-times" aria-hidden="true"></i>';

        propLightBox.cerrarModal = document.getElementById('cerrar-modal');
        propLightBox.cerrarModal.addEventListener('click', () =>{
            propLightBox.cuerpoDom.removeChild(propLightBox.lightbox_container);
        });
    }
};

metLightBox.inicio();
