document.addEventListener('mousemove', function(event) {
  var mouseX = event.clientX;
  var mouseY = event.clientY;
  
  console.log('Coordenadas del mouse: X=' + mouseX + ', Y=' + mouseY);
});
let ojo_izq = document.querySelectorAll('div.ojo_izq');
let ojo_der = document.querySelectorAll('div.ojo_der');
let pup_izq = document.querySelectorAll('div.pup_izq');
let pup_der = document.querySelectorAll('div.pup_der');
