let mininum = (a, b) => {
    if(a <= b){
        return a;
    }
    return b;
}

console.log(mininum(1, 3));
console.log(mininum(3, 1));
console.log(mininum(1, 1));