"use strict"
function removeExclamationMarks(s) {
return s.split('!').join('');
}

const result = removeExclamationMarks("He!llo! World!")
console.log(result);
