// let myBook = {
//     //property
//     title: "Harry Potter",
//     author: "JK Rowling",
//     numOfPages: "590"
// }

// let otherBook = {
//     //property
//     title: "Fantastic Beasts",
//     author: "JK Rowling",
//     numOfPages: "343"
// }

// let getSummary = function(book){

//     return {
//         //object
//         summary: `${book.title} by ${book.author}`,
//         pageCountSum: `${book.title} has ${book.numOfPages} pages` 
//     }

//     // console.log(`${book.title} by ${book.author} has ${book.numOfPages}`)
// }

// let bookSummary = getSummary(myBook)
// let otherBookSummary = getSummary(otherBook)

// console.log(bookSummary.pageCountSum)
// console.log(bookSummary.summary)

//  K = (y °F – 32) x 5/9 + 273.15;


let converter = function(allTemp = 32) {
    let C = (allTemp - 32)*(5/9);
    let K = (allTemp - 32)*(5/9)+273.15;

    return {
        tempF: allTemp,
        tempC: C,
        tempK: K
    }
}

let cel = converter();
console.log(cel.tempC)
console.log(cel.tempF)
console.log(cel.tempK)