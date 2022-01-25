import validator from './validator.js';

/*document.getElementById("pag3").style.display = 'none';
let btnComprar = document.getElementsByClassName("comprar")
btnComprar.addEventListener("click", () => {
    let sectionPagina2= document.getElementById("pag2").style = "display:none";
    let sectionPagina3= document.getElementById("pag3").style = "display:block";
});




/*function ocultarPaginas(){
    document.getElementsById('pag2').style.display = 'block';
    document.getElementsById('pag3').style.display = 'none';
}*/











document.getElementById("validar").addEventListener("click", takeCardNumber)


function takeCardNumber(){
    let creditCardNumber = document.getElementById("card").value;
    validator.isValid(creditCardNumber)
    //validator.maskify(creditCardNumber) ?????

}







/*import isValid from './validator.js';
console.log(isValid());

import maskify from './validator.js';
console.log(maskify());*/

