// console.log('New application')
const notes = getSavedNotes()

const filters = {
    searchText: ''
}


renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click',function(event){
    notes.push({
       title: '',
       body: ''
        
    })
    localStorage.setItem('notes', JSON.stringify(notes))
    renderNotes(notes, filters)
})



document.querySelector('#search-text').addEventListener('input', function(e){
    filters.searchText = e.target.value;
    renderNotes(notes, filters)
})



document.querySelector('#filter-by').addEventListener('change', function(event){
    console.log(event.target.value)
})




// const notes = [
//     {
//         // properties
//         title: 'Note 1',
//         body: 'This is the first note.'
//     }, {
//         title: 'Note 2',
//         body: 'This is the second note.'
//     }, {
//         title: 'Note 3',
//         body: 'This is the third note.'
//     }
// ]

// Check for existing data saved in the localStorage

// const notesJSON = localStorage.getItem('notes')
// if(notesJSON !== null){
//     notes = JSON.parse(notesJSON)
// } 


// create data
// localStorage.setItem('location', 'Chennai');

// read data

// console.log(localStorage.getItem('location'))

// delete all data

// localStorage.clear()

// // delete data based on the key

// localStorage.removeItem('location')

// update

// storing array of objects, Array to string

// Array to string
// string to array

// const user = {
//     name: 'Vatsal',
//     age: 21
// }

// Array or object to string
// const userJson = JSON.stringify(user)
// console.log(userJson)
// localStorage.setItem('user', userJson)

// stored string to array

// const getUserJson = localStorage.getItem('user')
// const user = JSON.parse(getUserJson)
// console.log(`${user.name} is ${user.age} years old.`);



// const renderNotes = function(notes, filters){
//     const filteredNotes = notes.filter(function(note){
//         return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
//     });

//     document.querySelector('#notes').innerHTML = '';

//     filteredNotes.forEach(function(note){

//         noteElement = generateNoteDOM(note)
//         document.querySelector('#notes').appendChild(noteElement);
//     });

// }


// document.querySelector('#for-fun').addEventListener('change', function(event){
//     console.log(event.target.checked)
// });

// document.querySelector('#name-form').addEventListener('submit', function(event){
//     event.preventDefault(); // prevent default behaviour with an updated url

//     console.log(event.target.elements.firstName.value);
//     event.target.elements.firstName.value = '';
// })
// EVENTLISTENER

// document.querySelector('button').addEventListener('click', function(event){
//     // console.log(event)
//     // console.log('Did this work?')
//     event.target.textContent = 'Button Clicked!'
// })

// document.getElementById('removeBtn').addEventListener('click', function(event){
//     console.log('cancel clicked...')
// })

// // ============================= or ============================================

// document.querySelectorAll('button')[1].addEventListener('click', function(){
//     console.log('button clicked using the queryselector all!!')
// })

// // ============================= or ============================================
// // cancel all notes
// document.querySelector('#removeBtn').addEventListener('click', function(){
//     document.querySelectorAll('.note').forEach(function(note){
//         note.remove()
//     })

// })

// document.querySelector('#search-text').addEventListener('change', function(e){
//     console.log(e.target.value)
// })
// // // ============================= or ============================================





// delete an element from the .html file

// Query and remove
// const p = document.querySelector('p') // representation of the element
// // p.innerHTML = "";
// // console.log(p)
// // p.remove()

// // query all and remove

// const ps = document.querySelectorAll('p')
// console.log(ps)
// ps.forEach(function(p){
//     // p.remove()
//     p.textContent = '***'
//     // console.log(p.textContent)
// })

// const removeElement = function(elements){
//     document.querySelector(elements)
// }

// // adding a new element

// const newPara = document.createElement('p') // returns DOM representation of the element
// newPara.textContent = 'This is paragraph made by the js'
// // select the body and then add the child using the append child.
// document.querySelector('body').appendChild(newPara)