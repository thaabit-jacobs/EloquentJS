let countBs = (str, charToBeChecked) => {
    let totalBCount = 0;

    for(let i = 0; i < str.length; i++){
        if(str[i] === charToBeChecked){
            totalBCount++;
        }
    }

    return totalBCount;
}

console.log(countBs("thaaBit", "z"));