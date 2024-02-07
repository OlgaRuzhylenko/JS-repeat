function getMiddle(s)
{
    const arr = s.split('');
    const arrLength = arr.length;
    if (arrLength % 2) {
        return arr[(arrLength - 1) / 2]
    } else {
        
    }

}

const result = getMiddle("testing");
console.log(result);