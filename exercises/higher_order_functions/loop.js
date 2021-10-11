function loop(value, test, body, update){
    for(let i = 0; i < value.length; i++){
        let currentValue = value[i];
        if(!test(currentValue)){
            break;
        }
        body(currentValue);

        value[i] = update(currentValue);
    }
}

let array = [1, 2, 8, 4, 5];

loop(array, value => value <= 5, value => console.log(value), value => value+10);

console.log(array);