import validator from './validator.js';

document.getElementById("validar").addEventListener("click", takeCardNumber);


function takeCardNumber(){
    let creditCardNumber = document.getElementById("card").value;
    validator.isValid(creditCardNumber);
    //validator.makkify(creditCardNumber) ?????

}


//document.getElementById("pag3").style.display = 'none';

document.getElementsById("comprar1").addEventListener("click", ocultarPaginas);

function ocultarPaginas(){
    document.getElementsById('pag2').style.display = 'block';
    document.getElementsById('pag3').style.display = 'none';

}



/*import isValid from './validator.js';
console.log(isValid());

import maskify from './validator.js';
console.log(maskify());*/

