let env = "Staging" // global scoped

function setup() {
    let timeout = 3000; //local scope
    console.log(env) //can access global //staging
    console.log(timeout)//can access local  //3000
}

setup();
console.log(env) //staging
//console.log(timeout) //cant access the local : ReferenceError: timeout is not defined


console.log("xxxxxxxxxxxxxx-------------xxxxxxxxxxxxxxxxxxxxxx")
//Nested Scope

function out() {
    let x = 10;
    function inner() {
        let y = 20;
        console.log(x)// 10
    }
    inner();
    console.log(y) //cant access the local : y: timeout is not defined

    out()