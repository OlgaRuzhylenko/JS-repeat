"use strict"
function XO(str) {
   const arr = str.toLowerCase().split('');
   let Xarr = [];
   let OArr = [];
for (let i = 0; i < arr.length; i+=1) {
    if (arr[i] === 'x') {
        Xarr.push(arr[i]);
    } else {
        OArr.push(arr[i]);
    }
}
if (Xarr.length === OArr.length) {
    return true
} else {
    return false
}
}

const result = XO("zzoo");
console.log(result);
