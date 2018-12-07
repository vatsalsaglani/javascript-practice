// Three important parts to a function
// input, code, output

// let greetUser = function (){
//     console.log('Welcome')
// }

// greetUser()

// let square = function(n){
//     console.log(n*n)
// }

// let num = 9
// // square(9)
// square(num)

// let square = function(num){
//     let result = num*num
//     return result
// }

// let value = square(3)
// console.log(value)

let convertFToC = function(F){
    let celcius = (F-32)*(5/9);
    return celcius
}

let cel = convertFToC(32)
let cel2 = convertFToC(111)
console.log(cel)
console.log(cel2)