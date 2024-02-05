"use strict";
var uniqueInOrder=function(iterable){
    console.log([...iterable]);
    return [...iterable].filter((a, i) => a !== iterable[i-1])
}

const result = uniqueInOrder("AAAABBBCCDAABBB");
console.log(result);
