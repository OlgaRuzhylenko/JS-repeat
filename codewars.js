function descendingOrder(n){
   return +([n].join('').split('').sort((a,b)=> (b - a)).join(''))
    
}


const result = descendingOrder(1);
console.log(result);