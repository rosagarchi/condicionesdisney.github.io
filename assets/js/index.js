
// Ejercicio 1

var isLogoActive = false;

function onPressLogo() {
  var element = document.getElementById("logoDisney");
  if (isLogoActive) {
    isLogoActive = false;
    element.classList.remove("logo-disney-active");
  } else {
    isLogoActive = true;
    element.classList.add("logo-disney-active");
  }
}


// Ejercicio 2
const maximoTickets = 10;
var ticketTipo1 = 0;
var ticketTipo2 = 0;
var ticketTipo3 = 0;

var input1 = document.getElementById("tipo1");
var input2 = document.getElementById("tipo2");
var input3 = document.getElementById("tipo3");
var mensaje = document.getElementById("mensajecontador");

function sumaStickers() {
  const suma = ticketTipo1 + ticketTipo2 + ticketTipo3;
  return suma;
}

function ticket(tipo) {

  if (tipo === "tipo1") {
      ticketTipo1++;
      input1.value = ticketTipo1;
  } else if (tipo === "tipo2") {
      ticketTipo2++;
      input2.value = ticketTipo2;
  } else if (tipo === "tipo3") {
      ticketTipo3++;
      input3.value = ticketTipo3;
  }

  const sumaTotal = sumaStickers();
  mensaje.innerText = "Llevas " + sumaTotal + " Stickers";

  if (sumaTotal > 10) {
    mensaje.innerText = "LLevas demasiados stickers";
  }
   
}

const passwordCorrecto1 = 911;
const passwordCorrecto2 = 714;

function validarPassword() {

  var numero1 = document.getElementById("selector1").value;
  var numero2 = document.getElementById("selector2").value;
  var numero3 = document.getElementById("selector3").value;
  var mensajePassword = document.getElementById("resultado-password");

  var password = parseInt(numero1 + numero2 + numero3);

  if (password === passwordCorrecto1) {
    mensajePassword.innerText = "Contraseña 1 correcta";
  } else if (password === passwordCorrecto2) {
    mensajePassword.innerText = "Contraseña 2 correcta";
  } else {
    mensajePassword.innerText = "Contraseña incorrecta";
  }
}