/* 
Se declara un objeto el cual va a tener dos metodos que son las funciones 
que permiten la validacion del numero de la tarjeta y el enmascarado de todos 
numeros de la tajeta menos los ultimos cuatro digitos que el usuario va a ingresar
*/
const validator = {
  //
  isValid,maskify
}

/*
Metodo para validad el numero de la tarjeta de credito segun el algoritmo de Luhn.


*/

let isValid = creditCardNumber => 

/*function isValid(creditCardNumber)*/{

  //console.log(creditCardNumber);
  let  numberCardReverse = creditCardNumber.split("").reverse();
  console.log(numberCardReverse);
  
  let arrayPair = [];
  let theDouble = 0;
    for(let i = 0; i < numberCardReverse.length; i++) {
      if(i % 2 != 0){
        theDouble = numberCardReverse[i] * 2;
        if (theDouble > 9){
        let divided = theDouble.toString().split(' ');
        let num1 = parseInt(divided[0][0]) + parseInt(divided[0][1]);
        arrayPair.push(num1);
        }else{
          arrayPair.push(theDouble);
        }
      }else{
        arrayPair.push(numberCardReverse[i])
      }
      }
      console.log(arrayPair);
  
      let arrayInteger = arrayPair.toString().split(",").map(function(item){
        return parseInt(item,10);
    });
  
      console.log (arrayInteger);
      let sum = arrayInteger.reduce(function(a, b){
        return a + b;
      });
      console.log(sum)
      if (sum % 10 == 0){
        console.log("Es valido")
        return true
      }else{
        console.log("No es valido, verifique los datos")
        return false
      }
}
 
   
// Funcion para ocultar los digitos de la tarjeta.
   function maskify(creditCardNumber){

    let numberCardNext = creditCardNumber.split("");
     let ocultar = [];
     for(let i = 0; i < numberCardNext.length; i++){
       if(i < numberCardNext.length-4){
         ocultar.push("#");
       }else{
         ocultar.push(numberCardNext[i]);
        //console.log(ocultar)
       }
     }
     let hiddenNumber = ocultar.join("");
     console.log(hiddenNumber);
     return hiddenNumber;

}




export default validator;
