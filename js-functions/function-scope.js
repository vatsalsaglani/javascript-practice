// Global Scope (convertFToC, cel, cel2)
    // Local Scope(fahrenheit, celcius)
        // Local Scope (isFreezing)

let convertFToC = function(F){
    let celcius = (F-32)*(5/9);

    if(celcius <=0 ) {
        let isFreezing = true
    }

    return celcius
}

let cel = convertFToC(32)
let cel2 = convertFToC(111)
console.log(cel)
console.log(cel2)