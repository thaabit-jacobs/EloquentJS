function rot13(message){
    let alphabetLow = "abcdefghijklmnopqrstuvwxyz";
    let alphabetUp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = "";

    for(let letter of message){
        if(!/[A-Za-z]/.test(letter)) return letter;

        let letterPos;
        let newPos;

        if(/[a-z]/.test(letter)){
            letterPos = alphabetLow.indexOf(letter) + 1;
            if(letterPos + 13 > 26){
                newPos = 13 - (26 - (letterPos));
                result = result.concat(alphabetLow.charAt(newPos -1));
            }else{
                result = result.concat(alphabetLow.charAt((letterPos - 1) + 13));
            }
        }else{
            letterPos = alphabetUp.indexOf(letter) + 1; 
            if(letterPos + 13 > 26){
                newPos = 13 - (26 - (letterPos));
                result = result.concat(alphabetUp.charAt(newPos -1));
            }else{
                result = result.concat(alphabetUp.charAt((letterPos - 1) + 13));
                console.log(result)
            }
        }
    }
    return result;
  }

console.log(rot13("Test"));