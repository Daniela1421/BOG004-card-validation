import validator from './validator.js';


/*document.getElementById("validar").addEventListener("click", takeCardNumber);


function takeCardNumber(){
    let creditCardNumber = document.getElementById("card").value;
    validator.isValid(creditCardNumber)
    //validator.maskify(creditCardNumber) ?????

}*/


document.getElementById("pag2").style.display = 'block';
document.getElementById("pag3").style.display = 'none';

const btnComprar= document.getElementById("comprar1");
btnComprar.addEventListener("click", () => {
    const secPagina2 = document.getElementById("pag2").style = "display:none";
    const secPagina3 = document.getElementById("pag3").style = "display:block";
});

/*function ocultarPaginas(){
    document.getElementsById('pag2').style.display = 'none';
    document.getElementsById('pag3').style.display = 'block';

}*/



/*import isValid from './validator.js';
console.log(isValid());

import maskify from './validator.js';
console.log(maskify());*/

