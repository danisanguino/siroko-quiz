const step1 = document.querySelector(".container-step1");
const step2 = document.querySelector(".container-step2");
const step3 = document.querySelector(".container-step3");

const countDown = document.getElementById("count-down");
const timeOver = document.getElementById("time-over");

const discountCodeDiv = document.getElementById("result-code");


let valueStep1 = "";
let valueStep2 = "";

let timeRemaining = 5;


// STEP 1
const formStep1 = document.querySelector(".container-step1 form");

formStep1.addEventListener("submit", function (event) {
  event.preventDefault();
  
  //Get value from the form1
  valueStep1 = formStep1.querySelector('input[name="year"]:checked').value;

  //Show and hide
  step1.classList.add("hide");
  step1.classList.remove("show");
  step2.classList.add("show");
  // step2.classList.remove("hide");
});


// STEP 2
const formStep2 = document.querySelector(".container-step2 form");

formStep2.addEventListener("submit", function (event) {
  event.preventDefault();

  //Get value from the form2
  valueStep2 = formStep2.querySelector('input[name="option"]:checked').value;


  //Discount code Step 1, even 10000 years later, always takes the 2 last numbers
  const reverseValueStep1 = valueStep1.split("").reverse().join("");
  const newValueStep1 = Number(reverseValueStep1[0]) + Number(reverseValueStep1[1]);
  
  //Discount code Step 2
  const newValueStep2 = valueStep2.split("").reverse()
                        .slice(0,4).reverse().join("")
                        .trim().toUpperCase().replace(/[A , " "]/gi, "");


  //Render discount code 
  discountCodeDiv.innerHTML = newValueStep1 + newValueStep2;

  //Show and hide
  step2.classList.add("hide");
  step2.classList.remove("show");
  step3.classList.add("show");
  // step3.classList.remove("hide");


  //Create regresive count
  const timerElement = document.getElementById("count-down");


  //Create set Interval
  
  const updateTime = () => {
    if (timeRemaining > 0) {
      countDown.textContent = `${timeRemaining}`; // Actualizamos el texto del cronómetro
      timeRemaining--; 
    } else {
      clearInterval(interval); 
      countDown.textContent = "0"; 
      countDown.classList.add("hide"); 
      countDown.classList.remove("show");
      timeOver.classList.add("show");
      // timeOver.classList.remove("hide");
    }
  };
  
  
  const interval = setInterval(updateTime, 1000);

});


// STEP 3


// button copy
document.getElementById("button-copy").addEventListener("click", async function() {
  
  const text = document.getElementById("result-code").innerText;

    try {
      await navigator.clipboard.writeText(text);
      document.getElementById("message").innerText = "CÓDIGO COPIADO!";
  } catch (err) {
      document.getElementById("message").innerText = "Error!!";
  }

});

// EXTERNAL BUTTON COPY
// document.getElementById("button-copy").addEventListener("click', copyToClipboard);







