import validator from './validator.js';


document.getElementById("validar").addEventListener("click", takeCardNumber);


function takeCardNumber(){
    let creditCardNumber = document.getElementById("card").value;
    validator.isValid(creditCardNumber);
    validator.maskify(creditCardNumber);

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


/*import isValid from './validator.js';
console.log(isValid());

import maskify from './validator.js';
console.log(maskify());*/

