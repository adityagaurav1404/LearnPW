//function hoisting - always check the implementation in the code
//hoisting means declarations are conceptually moved to the top of their scope before code execution.
//function declaration are hoisted, You can call them before they are initialized: whenerever we call, it will search the implementation
//function expressions and arrow functions are NOT HOISTED



//function declaration
greet("Alice")

function greet(name) {
    console.log(`Hellow + ${name}`) //Hellow + Alice
}

//function expressions
sayHi("Bob") //since assigned in const, so in TDZ and exists, but cannot be accessed before the line where it is initialized.

const sayHi = function (name) {
    console.log(`Hi + ${name}`) //ReferenceError: Cannot access 'sayHi' before initialization
}


//Because only the variable declaration is hoisted:sayHi becomes undefined:calling undefined as a function → TypeError
sayHi("Bob")

var sayHis = function (name) {
    console.log(`Hi + ${name}`) //Hellow + Alice //TypeError: sayHi is not a function
}

//function declarations are fully hoisted
//function expressions are not fully hoisted

foo(); // works
function foo() { }


bar(); // error
const bar = function () { };