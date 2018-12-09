const notes = [
    {
        // properties
        title: 'Note 2',
        body: 'This is the first note.'
    }, {
        title: 'Note 1',
        body: 'This is the second note.'
    }, {
        title: 'Note 3',
        body: 'This is the third note.'
    }
]

console.log(notes)
console.log(`============================================`)
// console.log('a' < 'A')

// console.log(notes)

// console.log(`============================================`)

// notes.push({
//     title: 'Note 4',
//     body: 'This is the fourth note'
// })

// console.log(notes)


// console.log(`============================================`)


// notes.splice(0,1)

// console.log(notes)

// console.log(`============================================`)

// const findNote = function(notes, noteTitle) {
//     const index =  notes.findIndex(function(note, index) {
//         return note.title.toLowerCase() === noteTitle.toLowerCase()
//     });
//     return notes[index]
// }

// find -> Beginning to end, returns match. Not the match
// const findNote = function(notes, noteTitle){
//     const note = notes.find(function(note, index){
//         return note.title.toLowerCase() === noteTitle.toLowerCase()
//     });
//     return note
// }

// const findNote = function(notes, noteTitle){
//     return notes.find(function(note, index){
//         return note.title.toLowerCase() === noteTitle.toLowerCase()
//     });
//     // return note
// }

//  

// const note = findNote(notes, 'nodte 1')
// console.log(note)

//filter

// const filteredNotes = notes.filter(function(note, index){
//     // return boolean
//     const isTitleMatch = note.title.toLowerCase().includes('x');
//     const isBodyMatch = note.body.toLowerCase().includes('xx')
//     return isTitleMatch || isBodyMatch;
// }); 
// console.log(filteredNotes)

// console.log(`============================================`)

// // filter function

// const searchNotes = function(notes, text){
//     const filteredNotes = notes.filter(function(note, index){
//         const isTitleMatch = note.title.toLowerCase().includes(text.toLowerCase());
//         const isBodyMatch = note.body.toLowerCase().includes(text.toLowerCase());
//         return isTitleMatch || isBodyMatch;
//     });
//     return filteredNotes
// }

// const noteSearch = searchNotes(notes, 'note');
// console.log(noteSearch);

// sorting an array

const sortNotes = function(notes){
    notes.sort(function(a, b){
        // if a should come first; return -1
        // if b should come first;  return 1
        // if identical; return 0
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1;
        } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
            return 1;
        } else {
            return 0;
        }
    });
}

sortNotes(notes)

console.log(notes)




// const index = notes.findIndex(function (note, index) {
//     // console.log(note)
//     return note.title === 'Note 4'
// })

// console.log(index)