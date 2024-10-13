import { toMintsAndSeconds } from "./secondsConvert.js";
import { copyToClipboard } from "./buttonCopy.js";
import { createDiscountCode } from "./discountCode.js";

const step1 = document.getElementById("step1");
const step2 = document.getElementById("step2");
const step3 = document.getElementById("step3");

const allDiscountCode = document.getElementById("all-result-code")
const discountCode = document.getElementById("result-code");

const clockCountDown = document.getElementById("clock-countdown")
const countDown = document.getElementById("count-down");
const timeOver = document.getElementById("time-over");

const buttonCopy = document.getElementById("button-copy");
const timeOverMessage = document.getElementById("message-time-over");
const copyMessage = document.getElementById("message-copy");
const buttonGoToSiroko = document.getElementById("go-to-siroko");

let valueStep1 = "";
let valueStep2 = "";

let timeRemaining = 1199; //in seconds


// STEP 1
// The form data is saved in a variable, step 1 is hidden, and step 2 is displayed.

step1.addEventListener("submit", (event) => {

  event.preventDefault();
  
  valueStep1 = step1.querySelector('input[name="year"]:checked').value;

  step1.classList.add("hide");
  step2.classList.remove("hide");
});


// STEP 2
// The form data is saved using the EventListener. This step is hidden, and STEP 3 is displayed. 
// A discount code is generated, and the countdown begins.

step2.addEventListener("submit", (event) => {

  event.preventDefault();

  valueStep2 = step2.querySelector('input[name="option"]:checked').value;

  const finalCode = createDiscountCode(valueStep1, valueStep2);

  discountCode.innerHTML = finalCode;

  step2.classList.add("hide");
  step3.classList.remove("hide");


  const updateTime = () => {
  
    if (timeRemaining > 0) {
      countDown.textContent = toMintsAndSeconds(timeRemaining) ;
      timeRemaining--; 

    } else {
      clearInterval(interval); 
      countDown.textContent = "0"; 
      timeOverMessage.textContent = "El tiempo ha terminado, pero siempre es buen momento para intentarlo de nuevo. Si no has copiado el código, te invitamos a dar el siguiente paso y volver a empezar con nosotros.";
      clockCountDown.classList.add("hide"); 
      timeOver.classList.remove("hide");
      allDiscountCode.classList.add("hide");
      copyMessage.classList.add("hide");
    }
  };
  
  const interval = setInterval(updateTime, 1000);

});

//BUTTON COPY
buttonCopy.addEventListener("click", copyToClipboard);

//BUTTON EXTERNAL LINK
buttonGoToSiroko.addEventListener("click", () => {
  window.open("https://www.siroko.com", "_blank");
});











