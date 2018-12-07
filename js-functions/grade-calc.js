// student score, total possible score

let getGrade = function(score, maxScore){
    let perc = (score/maxScore)*100
    if(perc >= 90 && perc <= 100){
        return(`You got an A grade: ${perc}%`)
    } else if(perc >= 80 && perc <= 89){
        return(`You got a B grade: ${perc}%`)
    } else if(perc >= 70 && perc <= 79){
        return(`You got a C grade: ${perc}%`)
    } else if(perc >=60 && perc <= 69){
        return(`You got a D grade: ${perc}%`)
    } else {
        return(`You got an E grade: ${perc}%`)
    }
}

let getResult = getGrade(88,100)
console.log(getResult); 