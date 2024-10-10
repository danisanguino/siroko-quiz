import { toMintsAndSeconds } from "./secondsConvert.js";
import { copyToClipboard } from "./buttonCopy.js";
import { createDiscountCode } from "./discountCode.js";

const step1 = document.getElementById("step1");
const step2 = document.getElementById("step2");
const step3 = document.getElementById("step3");

const allDiscountCode = document.getElementById("all-result-code")
const discountCode = document.getElementById("result-code");

const countDown = document.getElementById("count-down");
const timeOver = document.getElementById("time-over");

const buttonCopy = document.getElementById("button-copy");

let valueStep1 = "";
let valueStep2 = "";

let timeRemaining = 1199; //in seconds


// STEP 1
// The form data is saved in a variable, step 1 is hidden, and step 2 is displayed.

step1.addEventListener("submit", function (event) {

  event.preventDefault();
  
  
  valueStep1 = step1.querySelector('input[name="year"]:checked').value;

  step1.classList.add("hide");
  step1.classList.remove("show");
  step2.classList.add("show");
  step2.classList.remove("hide");
});


// STEP 2
// The form data is saved using the EventListener. This step is hidden, and STEP 3 is displayed. 
// A discount code is generated, and the countdown begins.

step2.addEventListener("submit", function (event) {

  event.preventDefault();

  valueStep2 = step2.querySelector('input[name="option"]:checked').value;

  const finalCode = createDiscountCode(valueStep1, valueStep2);

  discountCode.innerHTML = finalCode;

  step2.classList.add("hide");
  step2.classList.remove("show");
  step3.classList.add("show");
  step3.classList.remove("hide");


  const updateTime = () => {
  
    if (timeRemaining > 0) {
      countDown.textContent = toMintsAndSeconds(timeRemaining) ;
      timeRemaining--; 

    } else {
      clearInterval(interval); 
      countDown.textContent = "0"; 
      countDown.classList.add("hide"); 
      countDown.classList.remove("show");
      timeOver.classList.add("show");
      timeOver.classList.remove("hide");

      allDiscountCode.classList.add("hide");
      allDiscountCode.classList.remove("show");
    }
  };
  
  const interval = setInterval(updateTime, 1000);

});

//BUTTON COPY
buttonCopy.addEventListener("click", copyToClipboard);










