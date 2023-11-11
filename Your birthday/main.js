const days = {
  0: 'Domingo',
  1: 'Lunes',
  2: 'Martes',
  3: 'Miércoles',
  4: 'Jueves',
  5: 'Viernes',
  6: 'Sábado'
}

const btn = document.getElementById('btn');

const aver = () => {

  let anio = document.getElementById('anio').value;

  let mes = document.getElementById('mes').value;

  mes--;
  
  let dia = document.getElementById('dia').value;
  
  // comprobando datos de entrada
  let error = false;
  if(anio < 0 || mes < 0 || mes > 12 || dia < 0 || dia > 31){
    
    Swal.fire({
      position: 'middle',
      title: 'Error!',
      text: 'Datos incorrectos, escribe correctamente la fecha.',
      icon: 'error',
      confirmButtonText: 'Ok',
    }).then((result) => {
    $(document).ready(function() {
      $('input[type="number"]').val('');
      });
    });
    
    error = true;
    
  }
  
  // hallando fecha
  let birthday = new Date(anio, mes, dia);
  
  let your_day = days[birthday.getDay()];
  
  if (error == false) {
    document.getElementById('tu_dia').innerHTML = your_day;
  }
  
  // para el confetti
  const today = new Date();
  const hoy_mes = today.getMonth();
  const hoy_dia = today.getDate();
  
  if (mes == hoy_mes && dia == hoy_dia) {
    
    Swal.fire({
      position: 'middle',
      title: 'Felicidades',
      text: '¡Feliz cumpleaños!',
      icon: 'info',
      confirmButtonText: 'Ok',
    }).then((result) => {
    $(document).ready(function() {
      
      const jsConfetti = new JSConfetti();
      jsConfetti.addConfetti({
      confettiColors: [ '#5662E9', '#56E7E9', '#7FE956', '#D5E956', '#E9D256', '#E98A56' ],
      });
      setInterval(3);
      jsConfetti.addConfetti({
      emojis : ['🍄', '🍍','🍥','⭐','🍪','🍊','🎉'],
      });
      setInterval(5);
      jsConfetti.addConfetti({
      confettiColors: [ '#5662E9', '#56E7E9', '#7FE956', '#D5E956', '#E9D256', '#E98A56' ],
      });
      
      });
    });
    
  }
}

btn.addEventListener('click', aver);
