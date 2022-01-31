/* 
Se declara un objeto llamado "validator" el cual va a tener dos metodos que son las funciones 
que permiten la validacion del numero de la tarjeta y el enmascarado de todos 
numeros de la tajeta menos los ultimos cuatro digitos que el usuario va a ingresar
*/
const validator = {
  isValid,maskify
}

/*
Metodo para validar el numero de la tarjeta de credito segun el algoritmo de Luhn.
En la funcion isValid se llama a la variable creditCardNumber que contiene el numero 
de tarjeta dado por el usuario.

A esa variable se le aplican dos metodos:
    1. El metodo split que nos permite dividir el numero de la tarjeta 
       y separar cada numero entre comillas formando un array.
    2. El metodo reverse que nos permite organizar el array en orden inverso.

Como necesitamos identificar los numeros que estan en las posiciones pares del 
array utilizamos un bucle for para iterarlo. Declaramos e inicializamos nuestro bucle 
con la variable i = 0 para que itere desde la posicion 0, la condicion es que recorra 
toda la longitud del array y que la posicion vaya incrementando de uno en uno.

Para identificar las posiciones pares teniendo presente que se comienza a contar desde 
la posicion 1  (algoritmo de Luhn) creamos con un condicional que nos hiciera la siguiente operacion:
    Si la posicion i modulo(%) 2 es diferente de 0, tome el numero que esta en esa posicion, multiplicquelo
    por dos y guardelo en la variable theDouble. Si ese numero es mayor a 9 le aplicamos el metodo tostring para covertirlo
    en string y a su vez le aplicamos el metodo split para separalos con comillas simples y convertirlo en array para poder
    sumar los digitos que componen ese numero y esa sumatoria la guardamos en la variable num1, luego ese numero lo agregamos
    al array llamado arrayPair, ahora si el numero no es mayor a 9 (theDouble) se agrega de una vez a el arrayPair

Los numero que no estan en las posiciones pares son agregados al array llamado arrayPair.

Despues le dijimos que nos tomara ese array y lo convirtiera en string los divida por comas y con el metodo map
le dijimos que recorra ese array y convierta cada dato en un numero entero, guardandolo en un nuevo array llamado
arrayInteger.


Para sumar todos los numero que contiene el arrayInteger utilizamos el metodo reduce y guardamos ese valor enn la 
variable sum la cual la condicionamos con el modulo 10 y si es igual a cero retornamos true si no, retornamos false.

*/

function isValid(creditCardNumber){

  //console.log(creditCardNumber);
  let  numberCardReverse = creditCardNumber.split("").reverse();
  console.log(numberCardReverse);
  console.log(typeof(creditCardNumber))
  
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
        return parseInt(item);
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
 
   
/* Metodo para ocultar los digitos de la tarjeta, excepto los ultimos cuatro digitos.

Se llama a la variable creditCardNumber que contiene el numero de tarjeta dado por el usuario.
A esta variable le aplicamos el metodo split para convertirlo en un array y lo cuardamos en 
la variables numberCardNext.

Iteramos cada uno de los datos del array y a este ciclo lo condicionamos para que tome todos lo 
datos menos los ultimos cuatro y los cambie por el numeral (#) y los guarde el un array llamado hide, 
los ultimos cuatro digitos quedan agregados en el array con su valor incial. 

Para mostrar el array final utilizamos el metodo join para unir cada dato y que los muestre sin espacios entre ellos en una cadena.


*/

   function maskify(creditCardNumber){

    let numberCardNext = creditCardNumber.split("");
     let hide = [];
     for(let i = 0; i < numberCardNext.length; i++){
       if(i < numberCardNext.length-4){
         hide.push("#");
       }else{
         hide.push(numberCardNext[i]);
        //console.log(ocultar)
       }
     }
     let hiddenNumber = hide.join("");
     console.log(hiddenNumber);
     return hiddenNumber;

}




export default validator;
