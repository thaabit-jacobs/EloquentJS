const MOUNTAINS = [
    {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
    {name: "Everest", height: 8848, place: "Nepal"},
    {name: "Mount Fuji", height: 3776, place: "Japan"},
    {name: "Vaalserberg", height: 323, place: "Netherlands"},
    {name: "Denali", height: 6168, place: "United States"},
    {name: "Popocatepetl", height: 5465, place: "Mexico"},
    {name: "Mont Blanc", height: 4808, place: "Italy/France"}
];

let table = document.querySelector("table");

for(let mountain of MOUNTAINS){
    let mountainToBeAdded = document.createElement("tr");
    let mountainName = document.createElement("td");
    let mountainHeight = document.createElement("td");
    let mountainPlace = document.createElement("td");

    mountainName.innerText = mountain.name; 
    mountainHeight.innerText = mountain.height;
    mountainPlace.innerText = mountain.place;

    mountainHeight.style.textAlign = "right";

    mountainToBeAdded.appendChild(mountainName);
    mountainToBeAdded.appendChild(mountainHeight);
    mountainToBeAdded.appendChild(mountainPlace);

    table.appendChild(mountainToBeAdded);
}


console.log(table);