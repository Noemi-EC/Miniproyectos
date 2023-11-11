alert("...Presiona rápidamente el botón...")
var estadoLicuadora = "apagado";
var sondioLicuadora = document.getElementById("blender-sonido");
var botonLicuadora = document.getElementById("blender-button-sonido");
var licuadora = document.getElementById("blender");

function controlarLicuadora() {
  if (estadoLicuadora == "apagado"){
    estadoLicuadora = "encendido";
    sonar();
    licuadora.classList.add("active");
    // console.log("Me prendiste");
  } else {
    estadoLicuadora = "apagado";
    sonar();
    licuadora.classList.remove("active");
    // console.log("me apagaste");
  }
}

function sonar(){
  if(sondioLicuadora.paused){
    botonLicuadora.pause();
    sondioLicuadora.play();
  } else {
    botonLicuadora.play();
    sondioLicuadora.pause();
    sondioLicuadora.currentTime = 0;
  }
}