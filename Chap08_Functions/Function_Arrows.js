//arrows function (ES6)
const greet = function (name) {
    return `your name is ${name}`
}

//arrow func works only with a single line
// if you want to make func to single arrow func - remove the keyword "function", remove the curly braces, remove the keyword return, add the =>
const greet1 = (name2) => `your name is ${name}`

console.log(greet("gadg")) // //your name is gadg
console.log(greet("hsdg")) //your name is hsdg

//ex // in the below ex, () is not used, not compulsory
const doubleIt = n => n * 2;
console.log(doubleIt(21)) //42


//no param case
const getEnv = () => "staging"
console.log(getEnv()) //staging

// if you want to make func to single arrow func - remove the keyword "function", add the =>, curly braces and return statement
const greet3 = name => {
    let sagv = name
    return `your name is ${sagv}`
}
console.log(greet3("KAKA")) //your name is KAKA 