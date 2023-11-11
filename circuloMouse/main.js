var pantalla = document.querySelector('.container');
var outerCircle = document.getElementById('outer-circle');
var innerCircle = document.getElementById('inner-circle');

outerCircle.addEventListener('mousemove', function(event) {
  var outerRect = outerCircle.getBoundingClientRect();
  var mouseX = event.clientX;
  var mouseY = event.clientY;
  var centerX = outerRect.left + outerRect.width / 2;
  var centerY = outerRect.top + outerRect.height / 2;
  var deltaX = mouseX - centerX;
  var deltaY = mouseY - centerY;
  var distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
  var maxDistance = (outerRect.width - innerCircle.offsetWidth) / 2;
  
  if (distance <= maxDistance) {
    innerCircle.style.left = mouseX - outerRect.left - innerCircle.offsetWidth / 2 + 'px';
    innerCircle.style.top = mouseY - outerRect.top - innerCircle.offsetHeight / 2 + 'px';
  }
});
