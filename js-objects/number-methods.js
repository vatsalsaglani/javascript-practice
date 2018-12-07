let num = 12233.9030

// to fixed method

console.log(num.toFixed(32))

// ROUND METHOD
console.log(Math.round(num))

// Round Down
console.log(Math.floor(num))


// Round Down
console.log(Math.ceil(num))

// Random number

// generates a number between 0 and 1
let min = 10
let max = 20

let randomNum = Math.floor(Math.random() * (max-min + 1)) + min 
console.log(randomNum)

let validateGuess = function(num, max = 1, min = 5){
    
    let random = Math.floor(Math.random() * (max - min + 1)) + min
    return random === num
}

console.log(validateGuess(2))