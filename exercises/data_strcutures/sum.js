let range = (start, end, step = 1) => {
 let sum = 0;
 
 for(let i = start; i <= end; i += step){
     sum += i;
 }
 console.log(sum);
}

range(1, 10, 2);