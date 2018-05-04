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

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

function moverCerdo(evento)
{
  var movimiento = 10;
  var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39,
  };
  switch (evento.keyCode)
  {
    case teclas.UP:
    yCerdo = yCerdo - movimiento;
    dibujar(xCerdo, yCerdo);
    break;
    case teclas.LEFT:
    xCerdo = xCerdo - movimiento;
    dibujar(xCerdo, yCerdo);
    break;
    case teclas.DOWN:
    yCerdo = yCerdo + movimiento;
    dibujar(xCerdo, yCerdo);
    break;
    case teclas.RIGHT:
    xCerdo = xCerdo + movimiento;
    dibujar(xCerdo, yCerdo);
    break;

  }
}


function moverVaca(evento)
{
  var movimiento2 = 10;
  var teclas2 = {
    UP2: 87,
    DOWN2: 83,
    LEFT2: 65,
    RIGHT2: 68
  };
  switch (evento.keyCode)
  {
    case teclas2.UP2:
    yVaca = yVaca - movimiento2;
    dibujar(xVaca, yVaca);
    break;
    case teclas2.LEFT2:
    xVaca = xVaca - movimiento2;
    dibujar(xVaca, yVaca);
    break;
    case teclas2.DOWN2:
    yVaca = yVaca + movimiento2;
    dibujar(xVaca, yVaca);
    break;
    case teclas2.RIGHT2:
    xVaca = xVaca + movimiento2;
    dibujar(xVaca, yVaca);
    break;
  }
}


function moverPollo(evento)
{
  var movimiento3 = 10;
  var teclas3 = {
   UP3: 73,
   DOWN3: 75,
   LEFT3: 74,
   RIGHT3: 76
} ;
  switch (evento.keyCode)
  {
    case teclas3.UP3:
    yPollo = yPollo - movimiento3;
    dibujar(xPollo, yPollo);
    break;
    case teclas3.LEFT3:
    xPollo = xPollo - movimiento3;
    dibujar(xPollo, yPollo);
    break;
    case teclas3.DOWN3:
    yPollo = yPollo + movimiento3;
    dibujar(xPollo, yPollo);
    break;
    case teclas3.RIGHT3:
    xPollo = xPollo + movimiento3;
    dibujar(xPollo, yPollo);
    break;
  }
}
