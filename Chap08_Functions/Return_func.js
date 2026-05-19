//Return Values

function getStatus(code) {
    if (code >= 200 && code < 300) return "success";
    if (code >= 400 && code < 500) return "client Error";
    if (code >= 500) return "server Error";
}


console.log(getStatus(203)) //success
console.log(getStatus(404)) //client Error
console.log(getStatus(503)) //server Error


//returns nothing : undefined if printing
function logTest(name) {
    console.log(`log test : ${name}`)
}

logTest("jaadu")  //log test : jaadu
console.log(logTest("jaadu")) //lundefined


//returns multple values via array or Object

function aaa() {
    return [1, 2, 3]
}
console.log(aaa().join(", ")) //1, 2, 3

function aaa2() {
    return 1, 2, 3; //The comma operator: evaluates all expressions,returns the last value
}
console.log(aaa2()) //3


function aaa3() {
    return { "name": "pramod" }
}
console.log(aaa3())  //{ name: 'pramod' }