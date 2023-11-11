let galeria = ['img/img1', 'img/img2', 'img/img3', 'img/img4', 'img/img5', 'img/img6'];

let cont = 0;

var atras = document.querySelector('.atras');
var adelante = document.querySelector('.adelante');
var imagen = document.getElementById('imagen');

function retroceder(){
  // alert('atras');
  if(cont == 0){
    cont = galeria.length-1;
  }
  cont--;
  imagen.src = galeria[cont]+'.jpg';
}

function adelantar(){
  // alert('adelante');
  if(cont == galeria.length-1){
    cont = 0;
  }
  cont++;
  // alert(cont);
  imagen.src = galeria[cont]+'.jpg';
}

setInterval(() => {
  adelantar()
}, 2500);

atras.onclick = retroceder;
adelante.onclick = adelantar;