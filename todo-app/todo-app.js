// const ps = document.querySelectorAll('p')
let todos = getSavedTodos()

let filters = {
    searchText: ''
}


renderTodos(todos, filters)

document.querySelector('#search-text').addEventListener('input', function(e){
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})


document.querySelector('#todo-form').addEventListener('submit', function(event){
    event.preventDefault();

    todos.push({
        text: event.target.elements.todoText.value,
        completed: false
    });
    saveTodos(todos);
    renderTodos(todos, filters)
    // event.target.elements.todoText.value = '';


});

document.querySelector('#showIncompleteTodos').addEventListener('change', function(event){
    event.preventDefault();
    if(event.target.checked){
        hideCompleteTodos(todos)
    } else {
        document.querySelector('#incomplete-todos').innerHTML = '';
        renderTodos(todos, filters)
    }
})

// const todosJSON = localStorage.getItem('todos')
// if(todosJSON !== null){
//     todos = JSON.parse(todosJSON)
// }





// const summary = function(todos, element){
//     let count = 0;
//     todos.forEach(function(todo){
//         if(!todo.completed){
//             count = count + 1
//         }
//     });
//     const newElement = document.createElement(element);
//     newElement.textContent = `You have ${count} todos left!!`
//     document.querySelector('body').appendChild(newElement)
// }



// const summaryFilter = function(todos, element){
//     let c = todos.filter(function (todo){
//         return !todo.completed
//     })
//     const newElement = document.createElement(element);
//     newElement.textContent = `You have ${c.length} todos left!!`
//     document.querySelector('body').appendChild(newElement)
// }


// summaryFilter(todos, 'h3')
// const pTodo = document.createElement('p');
// pTodo.textContent = `You have ${todosLeft} todos left!`;
// document.querySelector('body').appendChild(pTodo)

// function to add all the todos to the screen

// const displayTodos = function(todos, element){
//     todos.forEach(function(todo){
//         const newElement = document.createElement(element);
//         newElement.textContent = todo.text;
//         document.querySelector('body').appendChild(newElement)
//     });

// }

// displayTodos(todos, 'h5');




// document.querySelector('button').addEventListener('click', function(event){
//     console.log(`The button was clicked`)
//     event.target.textContent = 'Button Clicked'
// })

// document.querySelector('#addTodoBtn').addEventListener('click', function(event){
//     console.log(`Add todo clicked`);
//     event.target.textContent = 'Button Clicked'
// })

// document.querySelector('#add-text').addEventListener('change', function(event){
//     const newElement = document.createElement('h5');
//     newElement.textContent = event.target.value;
//     document.querySelector('body').appendChild(newElement)
// })

// todos.forEach(function(todo){
//     const p = document.createElement('p');
//     p.textContent = todo.text;
//     document.querySelector('body').appendChild(p);
// })

//

// console.log(ps)

// ps.forEach(function(p){
//     if(p.textContent.includes('Eum')){
//         p.remove()
//     }
// });

// function

// const removeByText = function(text, ele){
//     document.querySelectorAll(ele).forEach(function(e){
//         if(e.textContent.includes(text)){
//             e.remove()
//         }
//     });
// }



// removeByText('Eum', 'p')

// 