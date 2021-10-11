function everyWithLoop(array, test){
    for(let value of array){
        if(!test(value))
            return false;    
    }
    return true;
}



let array = [2, 4, 6, 7, 10];

console.log(everyWithSome(array, value => value % 3 === 0));