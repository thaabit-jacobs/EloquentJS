let listToArray = (list) => {
    let result = [];
    let current = list;

    while(current != null){
        result.push(current.value);
        current = current.rest;
    }
    console.log(result);
}



let list = { value: 1, rest: { value: 2, rest: { value: 3, rest: null } } };
listToArray(list);