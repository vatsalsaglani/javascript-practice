let name = 'Vatsal Saglani'

// length property

console.log(name.length)

// convert to upper case

console.log(name.toUpperCase())

// convert to lower case
console.log(name.toLowerCase())

// Includes method -- to check password --

let password = 'abc123PASSWORD098'
console.log(password.toLowerCase().includes('password'))

// Trim method -- remove extra whitespace in the input

let mt = ' dfdff '
console.log(mt.length)
console.log(mt.trim().length)


// Password validator

let isPasswordValid = function(password) {
    // if(password.length < 8 || password.toLowerCase().includes('password')){
    //     console.log('Invalid password')
    // } else {
    //     console.log('Validated!!')
    // }
    return password.length >= 8 && !password.toLowerCase().includes('password')
}

console.log(isPasswordValid('pAssWord1212'))

// let pass = 'pAssWord1212'
// console.log(pass.toLowerCase().includes('password'))