"use strict"


function checkForName(fullName, name) {
 const result = fullName.includes(name); // Change this line
  return result;
}
const result = checkForName("Egor Kolbasov", "Egor");
console.log(result);


