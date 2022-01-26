import validator from './validator.js';


document.getElementById("validar").addEventListener("click", takeCardNumber);


function takeCardNumber(){
    let creditCardNumber = document.getElementById("card").value;
    validator.isValid(creditCardNumber);
    validator.maskify(creditCardNumber);

}

//document.getElementById("pag3").style.display = 'none';

document.getElementById("comprar1").addEventListener("click", ocultarPaginas);

function ocultarPaginas(){
    
    document.getElementById('pag2').style.display = 'none';
    document.getElementById('pag3').style.display = 'block';
    
}



/*import isValid from './validator.js';
console.log(isValid());

import maskify from './validator.js';
console.log(maskify());*/

