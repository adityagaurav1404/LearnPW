//Rest Params
function logResults(suiteName, ...results) { //...results is called array spread
    console.log(`suite name : ${suiteName}`)
    console.log(`Results: ${results.join(", ")}`) //to join the arrays
}

logResults("TestSuite", "Pass", "Fail", "Skip", "Pass") //suite name : TestSuite /nResults: Pass, Fail, Skip, Pass


//Ex2

function add(a, b, c) {
    return a + b + c;

}

let nums = [1, 2, 3]
console.log(add(...nums)) //6