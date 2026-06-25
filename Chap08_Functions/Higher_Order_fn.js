// a function that takes function as an arguement or returns a function


function runWithLogging(testfn, testName) {
    console.log(`Starting : ${testName}`);//Starting : Login Test
    let result = testfn();
    console.log(`Finished : ${testName} -> ${result}`); //Finished : Login Test -> pass
    return result;
}


function loginTestFn() {
    return "pass";
}

runWithLogging(loginTestFn, "Login Test")