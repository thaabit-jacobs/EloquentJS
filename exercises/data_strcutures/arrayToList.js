let arrayToList = (array) => {
    let list = {};
    for(let i = 0; i < array.length; i++){
        if(i === 0){
            list = {value:array[i], rest:null};
            continue;
        }
        addToList(list, array[i]);    
    }
    console.log(list);
}

let addToList = (list, valueToBeAdded) => {
    let current = list;

    while(true){
        if(current.rest === null){
            current.rest = {value:valueToBeAdded, rest:null};
            break;
        }

        current = current.rest;
    }
}

arrayToList([1, 2, 3]);
