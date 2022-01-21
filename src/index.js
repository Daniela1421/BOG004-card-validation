import validator from './validator.js';

document.getElementById("validar").addEventListener("click", takeCardNumber)


function takeCardNumber(){
    let creditCardNumber = document.getElementById("card").value;
    validator.isValid(creditCardNumber)
    //validator.makkify(creditCardNumber) ?????

}







/*import isValid from './validator.js';
console.log(isValid());

import maskify from './validator.js';
console.log(maskify());*/

