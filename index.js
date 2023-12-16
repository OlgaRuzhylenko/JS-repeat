"use strict"
function includes(array, value) {
  // Change code below this line
  let number = 0;
for (const item of array) {
  if (item===value) {
   number = item
  }
}
return number === value
}

  // Change code above this line



  // Change code above this line
const result = includes([1, 2, 3, 4, 5], 3)
console.log(result);

