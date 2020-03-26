var dibujo = document.getElementById("canvas");
var lapiz = dibujo.getContext("2d");
//***********************************************************
var recorrido = 40;
var cordenadasX = 0;
var cordenadasY = 0;
document.addEventListener("keyup",dibujar_cerdo);
//***********************************************************
var teclas = {
  UP : 38 ,
  DOWN : 40,
  LEFT : 37,
  RIGHT : 39
};
//**********************************************************
var Ruta_mapa = {
  url : "tile.png",
  cargaOK : false
};

var Ruta_cerdo = {
  url:"cerdo.png",
  cargaOK:false
};
//**********************************************************
var fondo = new Image();
fondo.src = Ruta_mapa.url;
fondo.addEventListener("load",dibujar_fondo);


var cerdo = new Image();
cerdo.src = Ruta_cerdo.url;
cerdo.addEventListener("load",cerdo_dibujar);

//***********************************************************

function dibujar_fondo() {
  fondo.cargaOK = true;
  dibujar();
}

function cerdo_dibujar() {
  cerdo.cargaOK = true;
  dibujar();
}

//***********************************************************

function dibujar() {
  if (fondo.cargaOK == true) {
    lapiz.drawImage(fondo,0,0);
  }
  if (cerdo.cargaOK == true) {
    lapiz.drawImage(cerdo,0,0);
  }
}

//***********************************************************

function dibujar_cerdo(evento) {
  var colorcito = "blue";
  switch (evento.keyCode) {
    case teclas.UP:
    lapiz.drawImage(cerdo,cordenadasX,cordenadasY-recorrido);
    cordenadasY=cordenadasY-recorrido
      break;
    case teclas.DOWN:
    lapiz.drawImage(cerdo,cordenadasX,cordenadasY+recorrido);
    cordenadasY=cordenadasY+recorrido
      break;
    case teclas.LEFT:
    lapiz.drawImage(cerdo,cordenadasX-recorrido-30,cordenadasY);
    cordenadasX=cordenadasX-recorrido-30
      break;
    case teclas.RIGHT:
    lapiz.drawImage(cerdo,cordenadasX+recorrido+30,cordenadasY);
    cordenadasX=cordenadasX+recorrido+30
      break;
    default:
    console.log("otraa tecla");
  }
}
//****************************************************************
