"use strict"
function century(year) {
  const newCentury = Math.ceil((year / 100))
  return newCentury
}

const result = century(1700)
console.log(result);
