import { toMintsAndSeconds } from "./secondsConvert.js";
import { copyToClipboard } from "./buttonCopy.js";
// import { updateTime } from "./timer.js";

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
step1.addEventListener("submit", function (event) {
  event.preventDefault();
  
  //Get value from the form1
  valueStep1 = step1.querySelector('input[name="year"]:checked').value;

  //Show and hide
  step1.classList.add("hide");
  step1.classList.remove("show");
  step2.classList.add("show");
  // step2.classList.remove("hide");
});


// STEP 2
step2.addEventListener("submit", function (event) {
  event.preventDefault();

  //Get value from the form2
  valueStep2 = step2.querySelector('input[name="option"]:checked').value;


  //Creating Discount code Step 1, even 10000 years later, always takes the 2 last numbers
  const reverseValueStep1 = valueStep1.split("").reverse().join("");
  const newValueStep1 = Number(reverseValueStep1[0]) + Number(reverseValueStep1[1]);
  
  //Creating Discount code Step 2
  const newValueStep2 = valueStep2.split("").reverse()
                        .slice(0,4).reverse().join("")
                        .trim().toUpperCase().replace(/[A , " "]/gi, "");


  //Render discount code 
  discountCode.innerHTML = newValueStep1 + newValueStep2;

  //Show and hide
  step2.classList.add("hide");
  step2.classList.remove("show");
  step3.classList.add("show");
  // step3.classList.remove("hide");



  //Create set Interval to Step 3
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
      // timeOver.classList.remove("hide");

      allDiscountCode.classList.add("hide");
      allDiscountCode.classList.remove("show");
    }
  };
  
  const interval = setInterval(updateTime, 1000);

});

//BUTTON COPY
buttonCopy.addEventListener("click", copyToClipboard);










