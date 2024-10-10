export const createDiscountCode = (valueStep1, valueStep2)=> {

    //Creating Discount code Step 1, even 10000 years later, always takes the 2 last numbers
    const reverseValueStep1 = valueStep1.split("").reverse().join("");
    const newValueStep1 = Number(reverseValueStep1[0]) + Number(reverseValueStep1[1]);
    
    //Creating Discount code Step 2
    const reversedAndSliced = valueStep2.split("").reverse().slice(0, 4); 
    const trimmedAndUpperCased = reversedAndSliced.reverse().join("").trim().toUpperCase();  
    const newValueStep2 = trimmedAndUpperCased.replace(/[A , " "]/gi, ""); 


    const newValue = newValueStep1 + newValueStep2;
    return newValue;
}