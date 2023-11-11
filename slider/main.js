const btnIzq = document.querySelector('.btn-izq');
const btnDer = document.querySelector('.btn-der');
const slider = document.querySelector('#slider');
const sliderSection = document.querySelectorAll('.slider-section');
// console.log(sliderSection);

// Variables auxiliares
let operacion = 0;
let contador = 0;
// Variable que contendrá el cálculo
// ancho_imagen = 100% (del contenedor padre) / cantidad_imágenes
let anchoImg = 100 / sliderSection.length;

function derecha(){
  if (contador >= sliderSection.length - 1) {
    contador = 0;
    operacion = 0;
    slider.style.transform = `translate(-${operacion}%)`;
    // evita que la transición se desplaze por completo hacia la izquierda, sino que pueda solo mostrar la imagen del inicio de frente
    slider.style.transition = "none";
  } else {
    contador++;
    operacion += anchoImg;
    slider.style.transform = `translate(-${operacion}%)`;
    slider.style.transition = 'all ease 2s';
  }
}

function izquierda(){
  contador--;
  if(contador < 0){
    contador = sliderSection.length - 1;
    operacion = anchoImg * (sliderSection.length - 1);
    slider.style.transform = `translate(-${operacion}%)`;
    slider.style.transition = "none";
  } else{
    operacion -= anchoImg;
    slider.style.transform = `translate(-${operacion}%)`;
    slider.style.transition = 'all esase 2s';
  }
}

btnIzq.addEventListener('click', e => izquierda());
btnDer.addEventListener('click', e => derecha());

setInterval(() => {
  derecha()
}, 3000);