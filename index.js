"use strict"


function changeEven(numbers, value) {
  // Change code below this line
  let newArr = []
  numbers.forEach((item)=> {
    if (item % 2 === 0) {
      item = item + value
    }
    newArr.push(item)
  })
  return newArr;
  // Change code above this line
}



const result = changeEven([1, 2, 3, 4, 5], 10)
console.log(result);


