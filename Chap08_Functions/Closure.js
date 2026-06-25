//clouser= In JavaScript, a closure is when a function “remembers” the variables from its outer scope even after the outer function has finished executing.
//A closure allows an inner function to access variables of an outer function after the outer function has returned.

function outer() {
    let message = "TMV";
    console.log("Outer called");
    function inner() {
        console.log(message)
    }
    return inner;
}
outer(); //Outer called
//inner() //ReferenceError: inner is not defined

let fn_inner = outer();
fn_inner(); //Outer called //TMV


console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");


function outer1() {
    let message = "TMV";
    console.log("Outer called");
    function inner1() {
        console.log(message)
    }
    inner1;
}
outer1();  //Outer called

console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");


function outer2() {
    let message = "TMV";
    console.log("Outer called");
    function inner2() {
        console.log(message)
    }
    inner2();  //this is calling not returning
}
outer2(); //Outer called //TMV
