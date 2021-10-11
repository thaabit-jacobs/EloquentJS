let reverseInPlace = (array) => {
    let counter = 0;
    
    while(counter != array.length){
        let lastElement;
        if(counter === 0){
            lastElement = array.pop();
            array.unshift(lastElement);
            counter++;
            continue;
        }

        lastElement = array.pop();

        let reversedArray = array.slice(0, counter);
        let unreveredArray = array.slice(counter);

        reversedArray.push(lastElement);

        array = reversedArray.concat(unreveredArray);
        counter++;
        console.log(array);
    }

    console.log(array);
}

reverseInPlace([1, 2, 3, 4, 5]);