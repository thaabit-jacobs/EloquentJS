let makePositive = n => {
    if(n < 0){
        return -(n);
    }
    return n;
}

let isEven = n => {
    n = makePositive(n);
    if(n === 0){
        return true;
    }else if(n === 1){
        return false;
    }else{
        return isEven(n - 2);
    }
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-2));