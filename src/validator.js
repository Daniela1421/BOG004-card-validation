const validator = {
  // ...
};


document.getElementById("validar").addEventListener("click", function validar() {
  let numberCard = document.getElementById("card").value;
  let array = numberCard.split("").reverse();
  console.log(array);
  
});

export default validator;
