//regualr functions
let square = function(x){
    return x * x;
}

console.log(square(8));

let withoutReturn = function(){
    console.log("Side effect is this log will return undefined");
}

console.log(withoutReturn());

//function declarations
console.log("Using a fnction that is defined below this expression:"+ future())

function future(){
    return "The function defined below";
}

//Arrow functions
const s1 = (x) => {return x*x;};
const s2 = x => x*x;

//elementing stckoverflow
/*let c = () => d();
let d = () => c();

c();*/

let padding = (animals, label) => {
    let animalString = String(animals);
    while (animalString.length < 3) {
        animalString = "0" + animalString;
    }
    console.log(`${animalString} ${label}`);
}

padding(7, 'chcikens');
padding(11, 'cows');
    