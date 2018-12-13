// const notesJSON = localStorage.getItem('notes')
// if(notesJSON !== null){
//     notes = JSON.parse(notesJSON)
// } 

// read existing notes from local storage

const getSavedNotes = function () {
    const notesJSON = localStorage.getItem('notes')
    if (notesJSON !== null) {
        return JSON.parse(notesJSON)
    } else {
        return []
    }
}

// const renderNotes = function(notes, filters){
//     const filteredNotes = notes.filter(function(note){
//         return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
//     });

//     document.querySelector('#notes').innerHTML = '';

//     filteredNotes.forEach(function(note){

//         const noteElement = document.createElement('p');
//         if(note.title.length > 0){
//             noteElement.textContent = note.title;
//         } else {
//             noteElement.textContent = 'Unnamed note'
//         }
//         document.querySelector('#notes').appendChild(noteElement);
//     });

// }
// generate the DOM structure for a DOM
const generateNoteDOM = function(noteData){
    const noteEl = document.createElement('p');

    if(noteEl.title.length > 0){
        noteEl.textContent = noteData.text
    } else {
        noteEl.textContent = 'Unnamed note'
    }

    return noteEl;
}

// Render application notes

const renderNotes = function(notes, filters){
    const filteredNotes = notes.filter(function(note){
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    });

    document.querySelector('#notes').innerHTML = '';

    filteredNotes.forEach(function(note){

        noteElement = generateNoteDOM(note)
        document.querySelector('#notes').appendChild(noteElement);
    });

}
