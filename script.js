const step1 = document.querySelector(".container-step1");
const step2 = document.querySelector(".container-step2");
const step3 = document.querySelector(".container-step3");

let valueStep1 = "";
let valueStep2 = "";


// STEP 1
const formStep1 = document.querySelector(".container-step1 form");

formStep1.addEventListener("submit", function (event) {
  event.preventDefault();
  
  //Get value from the form1
  valueStep1 = formStep1.querySelector('input[name="year"]:checked').value;

  //Show and hide
  step1.classList.add("hide");
  step1.classList.remove("show");
  step2.classList.remove("hide");
  step2.classList.add("show");
});


// STEP 2
const formStep2 = document.querySelector(".container-step2 form");

formStep2.addEventListener("submit", function (event) {
  event.preventDefault();

  //Get value from the form2
  valueStep2 = formStep2.querySelector('input[name="option"]:checked').value;

  //Hacer la logica y creación del código descuento aquí

  //Print on discount code div
  const discountCodeDiv = document.getElementById('result-code');
  discountCodeDiv.innerHTML = `${valueStep1} ${valueStep2[4]}`;

  //Show and hide
  step2.classList.add("hide");
  step2.classList.remove("show");
  step3.classList.remove("hide");
  step3.classList.add("show");
});


// // STEP 3
// const buttonStep3 = document.querySelector(".container-step3 button");
// buttonStep3.addEventListener("click", function () {
  
//   // No sé si esto es neceario por JS quitar si no
//   window.location.href = "https://siroko.com";
// });


//BUTTON COPY TEXT
document.getElementById('button-copy').addEventListener('click', async function() {
  
  //get code from result-code
  const text = document.getElementById('result-code');
  text.select(); 

  
  try {
    // Copiar el texto al portapapeles
    await navigator.clipboard.writeText(texto.value);
    // Mensaje de éxito
    document.getElementById('message').innerText = 'Texto copiado!';
    alert("Mensaje copiado bro");
} catch (err) {
    // Mensaje de error
    document.getElementById('message').innerText = 'Error';
}
});







