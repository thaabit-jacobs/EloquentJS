/*function speak () {
    console.log(`${this.name} is speaking`);
}

let thaabit = {
    name: "Thaabit",
    speak
};

let kauthar = {
    name: "Kauthar",
    speak
};


thaabit.speak();
kauthar.speak();*/

/*
let protoPerson = {
    speak(){
        console.log(`${this.name} is talking`);
    }
}


let thaabit = Object.create(protoPerson);
thaabit.name = "Thaabit";
thaabit.speak();

let kauthar = Object.create(protoPerson);
kauthar.name = "Kauthar";
kauthar.speak();*/

class Rabbit {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    speak() {
        console.log(`${this.name} is ${this.age} years old`);
    }
}

Rabbit.prototype.toString = function(){
    return `${this.name}`;
}
let thaabit = new Rabbit("Thaabit", 23);
let kauthar = new Rabbit("Kauthar", 22);

console.log(thaabit.name);
console.log(thaabit.age);
thaabit.speak();
kauthar.speak();

thaabit.hasOwnProperty("type");

let ages = new Map();
ages.set("Boris", 39);
ages.set("Liang", 22);
ages.set("Júlia", 62);

console.log(ages.has("Thaabit"));

let tester = {
    name: "test",
    height: 4
}

for(let {name, height} of tester){
    console.log(name, height);
}