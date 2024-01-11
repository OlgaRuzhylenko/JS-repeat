"use strict"
const quarterOf = (month) => {
  let quarter;
  switch (month) {
    case 1:
      case 2:
      case 3:
        quarter = 1;
        break;
  
      case 4:
      case 5:
      case 6:
        quarter = 2;
        break;
  
      case 7:
      case 8:
      case 9:
        quarter = 3;
        break;
  
      case 10:
      case 11:
      case 12:
        quarter = 4;
        break;
  
  }
  return quarter
}

const result = quarterOf(3);
console.log(result);
