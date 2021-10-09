let size = 10;

let result = "";

for(let height = size; height != 0; height--){
    let row = ""
    for(; row.length != size; ){
        if(height%2 === 0){
            row += " #";
        }else{
            row += "# ";
        }
    }
    console.log(row);
    row = "";
}

console.log(result);