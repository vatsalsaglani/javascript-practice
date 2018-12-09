const todos = [
    {
        text: 'Todo 1',
        completed: true
    }, {
        text: 'Todo 2',
        completed: false
    }, {
        text: 'Todo 3',
        completed: false
    }, {
        text: 'Todo 4',
        completed: false
    }
]

// let removeElement = function(todos, text){
//     let index = todos.findIndex(function(todo, index){
//         return todo.text.toLowerCase() === text.toLowerCase()
//     });
//     if(index > -1){

//     todos.splice(index, 1);
//     } else {
//         return `No todo named "${text}"is present. 
//         Please check and try again`
//     }
// }

// let removeTodo = removeElement(todos, 'Todo 4df')
// console.log(removeTodo);

// console.log(todos)

// const uncompletedTodos = function(todos){
//     const uncompleteTodo = todos.filter(function(todo, index){
//         return !todo.completed;
//     })
//     return uncompleteTodo;
// }

// const remTodos = uncompletedTodos(todos);
// console.log(remTodos)

// displaying not competed todos first
const sortTodos = function(todos){
    todos.sort(function(a,b){
        if(a.completed < b.completed){
            return -1
        } else if(a.completed > b.completed){
            return 1
        } else {
            return 0
        }
    });
}

sortTodos(todos);
console.log(todos);


// console.log(`You have ${todos.length} todos`)



// console.log(`Todo: ${todos[0]}`)
// console.log(`Todo: ${todos[todos.length - 2]}`)

// console.log(todos)

// console.log(todos.splice(2, 1))

// console.log(todos)

// todos.push('Some Todo')

// console.log(todos)

// todos.shift()

// console.log(todos)

// todos.forEach(function(todo, index){
//     console.log(`${index + 1}. ${todo}`)
// })

// for(let count = 0; count < todos.length; count++){
//     console.log(`${count + 1}. ${todos[count]}`)
// }