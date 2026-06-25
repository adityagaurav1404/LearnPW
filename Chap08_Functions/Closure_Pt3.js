function maxRetryTracker(max) {
    let attempts = 0;
    function tryAgain(testName) {
        attempts++; //increment
        if (attempts >= max) {
            return `${testName} exceeded the max value = ${max}`
        }
        return `attempt ${attempts}/${max} for the ${testName}`
    }
    return tryAgain;
}

let retry = maxRetryTracker(3);  // outer fun ends heree
console.log(retry("login")) //attempt 1/3 for the login
console.log(retry("login")) //attempt 2/3 for the login
console.log(retry("login")) //login exceeded the max value = 3
console.log(retry("login")) //login exceeded the max value = 3

//still retry remmbers all the variable values