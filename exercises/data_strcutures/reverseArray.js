let reverse = (array) => {
    let result = [];

    for(let i = array.length-1; i >= 0; i--){
        result.push(array[i]);
    }
    console.log(result);
}

reverse([1, 2, 3, 4, 5]);
