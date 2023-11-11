// hora
function printTime() {
  var d = new Date();
  var hours = d.getHours();
  var mins = d.getMinutes();
  var secs = d.getSeconds();
  
  // tiempo con ceros agregados
  var horas = hours, mina = mins, seg = secs;
  
  if (hours < 10){
    var horas = '0'+hours;
  } 
  else if (mins < 10){
    var mina = '0'+mins;
  } 
  if (secs < 10){
    var seg = '0'+secs;
  } 
  
  document.getElementById('reloj').innerHTML = horas+":"+mina+":"+seg;
}

// fecha
function printFecha(){
  var f = new Date();
  var año = f.getFullYear();
  var mes = f.getMonth();
  var dia = f.getDate();
  var numdia = f.getDay();
  
  // dia y mes especificas
  var espdia, espmes;
  
  switch (numdia){
    case 1:
      espdia = 'Lun.';
      break;
    case 2:
      espdia = 'Mar.';
      break;
    case 3:
      espdia = 'Mié.';
      break;
    case 4:
      espdia = 'Jue.';
      break;
    case 5:
      espdia = 'Vie.';
      break;
    case 6:
      espdia = 'Sáb.';
      break;
    case 0:
      espdia = 'Dom.';
      break;
    default:
      espdia = 'Día';
      break;
  }
  
  switch (mes){
    case 0:
      espmes = 'ene.';
      break;
    case 1:
      espmes = 'feb.';
      break;
    case 2:
      espmes = 'mar.';
      break;
    case 3: 
      espmes = 'abr.';
    case 4:
      espmes = 'may.';
      break;
    case 5:
      espmes = 'jun.'
      break;
    case 6:
      espmes = 'jul.';
      break;
    case 7:
      espmes = 'ago.';
      break;
    case 8:
      espmes = 'sep.';
      break;
    case 9:
      espmes = 'oct.';
      break;
    case 10: 
      espmes = 'nov.';
      break;
    case 11:
      espmes = 'dic.';
      break;
    default:
      espmes = 'Mes';
      break;
  }
  
  // mostrar 
  document.getElementById('fecha').innerHTML = espdia+' '+dia+' '+espmes+' '+año;
}

window.onload = function(){
setInterval(printTime);
setInterval(printFecha);
}
// getDay retorna el numero de dia de la semana
// un dia tiene 86400000
