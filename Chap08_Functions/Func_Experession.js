// function 
function greet1(name) {
    return `Hello, ${name}`
}


//function expression - where function is assigned to an expression (greet)
const greet = function (name) {
    return `Hello, ${name}`
}

console.log(greet1("KRG"))
console.log(greet("KRG2"))