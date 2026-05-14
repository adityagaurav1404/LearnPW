function getStatus(code) {
    if (code >= 200 && code < 300) return "success";
    if (code >= 400 && code < 500) return "client Error";
    if (code >= 500) return "client Error";
}

getStatus(200) //success
getStatus(404) //client Error

//Ex2
function logtest(name) {
    console.log(`running : ${name}`) //running login
}

let result = logtest("login")
console.log(result) //undefined


//Ex3 //function hoisting - always check the implementation in the cpde
//hoisting means declarations are conceptually moved to the top of their scope before code execution.
greet("Alice")

function greet(name) {
    console.log(`Hellow + ${name}`) //Hellow + Alice
}

sayHi("Bob") //since assigned in const, so in TDZ and exists, but cannot be accessed before the line where it is initialized.

const sayHi = function (name) {
    console.log(`Hi + ${name}`) //ReferenceError: Cannot access 'sayHi' before initialization
}


//ex4
//Because only the variable declaration is hoisted:sayHi becomes undefined:calling undefined as a function → TypeError
sayHi("Bob")

var sayHis = function (name) {
    console.log(`Hi + ${name}`) //Hellow + Alice //TypeError: sayHi is not a function
}

//ex5
//function declarations are fully hoisted
//function expressions are not fully hoisted

foo(); // works
function foo() { }


bar(); // error
const bar = function () { };

