"use strict"

function squareDigits(num){
    const digits = [];
    while (num > 0) {
        const digit = num % 10;
        digits.unshift(digit); // Додаємо цифру в початок масиву
        num = Math.floor(num / 10);
      }
    return digits
  }
const result = squareDigits(919)
console.log(result);




