
export const updateTime = () => {

  if (timeRemaining > 0) {
    countDown.textContent = `${timeRemaining}`; 
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