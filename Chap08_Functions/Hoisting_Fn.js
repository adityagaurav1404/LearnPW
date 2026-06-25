//functions declaration are hoisted
//you can call them before defined
//function expressions are not hoisted
//Arrow functions are not hoisted

greet("alice"); //allowed : YOur name alice

function greet(Name) {
    console.log("YOur name " + Name)
}

sayHI("TMC") //TypeError: sayHI is not a function

var sayHI = function (name) {
    console.log("HI " + name)
}