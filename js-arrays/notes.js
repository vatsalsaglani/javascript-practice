const notes = ['Note 1', 'Note 2', 'Note 3']


// console.log(notes.length)

// // grabbing individual item

// console.log(notes[notes.length - 1])

// notes.push('Note 4')

// console.log(notes)


// // remove from the end

// notes.pop()

// console.log(notes)

// // manupulate array form start

// // shift removes first item from the array

// console.log(notes.shift())

// // adding an item at the start of the array

// console.log(notes.unshift('Note 1'))

// console.log(notes)

// // splice will allow us to add/remove 
// elements to/from the middle of 
// the array

// notes.splice(startIndex, numberOfItemsToBeRemoved)

// delete item

// notes.splice(0,1)

// console.log(notes)

// // add item 

// // notes.splice(startIndex, 0, CONTENTTOBEADDED)

// notes.splice(0, 0, 'Note 1')

// console.log(notes)

// forEach() -- function

// notes.forEach( function(item, index) {

// });

// notes.forEach(function(item, index) {
//     console.log(index)
//     console.log(item)
// })

// for loop

// for (initializer; condition; finalexpression) {

// }

// initializer = where we need to start counting

// condition = determines how long the loop runs 
// condition must be true for the loop to run 
// condition must be false if we need to stop the loop

// final expression = how do we modify the count by one or two

// for (let count = 0; count < 4; count = count + 1 ) {
//     console.log(count)
// }

// for (let count = 4; count >= 0; count--) {
//     console.log(count);
// }

// accessing the array

// for (let count = 0; count < notes.length; count++){
//     console.log(notes[count])
// }

console.log(`--------------------------------`)

// for(let count = notes.length-1; count >= 0; count--){
//     console.log(notes[count])
// }

// FINDING A NOTE

// using indexOf

console.log(notes.indexOf('Note 13'))