import validator from './validator.js';

document.getElementById("validar").addEventListener("click", takeCardNumber);

function takeCardNumber(){
    let creditCardNumber = document.getElementById("card").value;
    if (validator.isValid(creditCardNumber) == true){
        document.getElementById("respuesta").innerHTML = "Su tarjeta N° " + validator.maskify(creditCardNumber) + " es Valida.";
        document.getElementById("felicitaciones").innerHTML = "Felicitaciones por su compra"
        } else {
        document.getElementById("respuesta").innerHTML = "Su tarjeta N° " + validator.maskify(creditCardNumber) + " es Invalida.";
        document.getElementById("rectificar").innerHTML = "Por favor verifique sus datos.";
    }
}

//Enlace de boton comprar con la siguiente pagina

document.getElementById("comprar1").addEventListener("click", hidePages);
document.getElementById("comprar2").addEventListener("click", hidePages);
document.getElementById("comprar3").addEventListener("click", hidePages);
document.getElementById("comprar4").addEventListener("click", hidePages);

function hidePages(){
   document.getElementById('pag2').style.display = 'none';
   document.getElementById('pag3').style.display = 'block';
}
