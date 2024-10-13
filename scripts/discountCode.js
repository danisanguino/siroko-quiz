export const createDiscountCode = (valueStep1, valueStep2) => {

    //Creating Discount code Step 1, even 10000 years later, always takes the 2 last numbers
    const reverseValueStep1 = valueStep1.split("").reverse().join("");
    const newValueStep1 = Number(reverseValueStep1[0]) + Number(reverseValueStep1[1]);
    
    //Creating Discount code Step 2
    const upperCaseTrimmedAndReplace = valueStep2.toUpperCase().trim().replace(/[A , " "]/gi, "");
    const reversedAndSliced = upperCaseTrimmedAndReplace.split("").reverse().slice(0, 4); 
    const newValueStep2 = reversedAndSliced.reverse().join(""); 


    const newValue = newValueStep1 + newValueStep2;
    return newValue;
}