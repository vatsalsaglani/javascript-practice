
const getSavedTodos = function () {
    const todosJSON = localStorage.getItem('todos')
    if (todosJSON !== null) {
        return JSON.parse(todosJSON)
    } else {
        return []
    }
}

// save todos

const saveTodos = function (todos) {
    localStorage.setItem('todos', JSON.stringify(todos))
}

// generate DOM element

const generateTodoDOM = function (todoData) {
    const newEl = document.createElement('h5');

    newEl.textContent = todoData.text

    return newEl
}

// render todos 

const renderTodos = function(todos, filters){
    const filteredTodos = todos.filter(function(todo){
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
    })

    const incompleteTodos = todos.filter(function (todo){
        return !todo.completed;
    })

    document.querySelector('#todos').innerHTML = '';

    
    generateSummaryDOM(incompleteTodos)

    filteredTodos.forEach(function(todo){
        const newEl = generateTodoDOM(todo)
        
        document.querySelector('#todos').appendChild(newEl)
    });
}

// generate summary

const generateSummaryDOM = function(intodo){
    const newElement = document.createElement('h3');
    newElement.textContent = `You have ${intodo.length} todos left!!`
    document.querySelector('#todos').appendChild(newElement)

}

// hide todos

const hideCompleteTodos = function(todos){
    document.querySelector('#todos').innerHTML = '';

    const incompleteTodos = todos.filter(function (todo){
        return !todo.completed;
    })

    incompleteTodos.forEach(function(todo){
        const newElement = document.createElement('h5');
        newElement.textContent = todo.text
        document.querySelector('#incomplete-todos').appendChild(newElement);
    });
}

