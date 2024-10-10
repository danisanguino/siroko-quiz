import { toMintsAndSeconds } from "./secondsConvert.js";

//in seconds
let timeRemaining = 1199;

export const updateTime = () => {

  if (timeRemaining > 0) {
    countDown.textContent = toMintsAndSeconds(timeRemaining); 
    timeRemaining--; 

  } else {
    clearInterval(interval); 
    countDown.textContent = "0"; 
    countDown.classList.add("hide"); 
    countDown.classList.remove("show");
    timeOver.classList.add("show");
    // timeOver.classList.remove("hide");
  }

  return timeRemaining;
};