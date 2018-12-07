// let add = function(a, b) {
//     return a+b;
// }

// let result = add(11, 234)
// console.log(result)

// default arguments

// let getScoreText = function(name = 'Player 1', score = 0) {
//     console.log(name)
//     console.log(score)
// }

// getScoreText('Vatsal', 112)

let getTip = function(amt, tipP = 0.05){
    let tip = amt*tipP
    return tip
}

let resultTip = getTip(3000, 0.7)
console.log(resultTip)