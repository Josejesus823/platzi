var vp = document.getElementById("villa");
var papel = vp.getContext("2d");
document.addEventListener("keydown", moverCerdo);
document.addEventListener("keydown", moverVaca);
document.addEventListener("keydown", moverPollo);
var cantidad = aleatorio(0, 1);

var xCerdo = 250;
var yCerdo = 250;

var xVaca = 100;
var yVaca = 100;

var xPollo = 300;
var yPollo = 300;


var fondo = {
  url:"tile.png",
  cargaOK: false
};
var vaca = {
  url: "vaca.png",
  cargaOk: false
};
var cerdo = {
  url:"cerdo.png",
  cargaOk: false
};
var pollo = {
  url:"pollo.png",
  cargaOK:false
};
