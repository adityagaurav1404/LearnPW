//callback fn
//a callback fn is a function passed as an arguement to another fun, to be called later


function runtest(testName, callback) {
    let results = "pass";
    // 100 lines of code
    callback(testName, results);
}

function oncomplete(testName, results) {
    console.log(`${testName} finished as ${results}`);
}

runtest("Login Test", oncomplete);