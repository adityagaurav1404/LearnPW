// Test Case Result Counter
// After a test suite runs, you receive an array of test results (strings: "pass", "fail", "skip"). Write a JavaScript program using a for loop that counts how many tests passed, failed, and were skipped. Print a test report with total tests, counts, pass rate percentage, and a verdict (all passed → ready for release, ≤2 failures → review, >2 failures → block release).


testResults = ["pass", "pass", "fail", "pass", "skip", "pass", "fail", "pass"]


let totalCase = 0
let passCounter = 0;
let failCounter = 0
let skipCounter = 0;

for (let i = 0; i < testResults.length; i++) {
    totalCase++;
    if (testResults[i] == "pass") {
        passCounter++;
    } else if (testResults[i] == "fail") {
        failCounter++;
    } else if (testResults[i] == "skip") {
        skipCounter++;
    }
}

let PassPercent = passCounter / totalCase * 100;

let verdict = "Blocked Release"

if (failCounter <= 2) {
    verdict = "Need Review"
} else if (failCounter > 2) {
    verdict = "Blocked from release"
} else if (failCounter == 0) {
    verdict = "Ready for Release"
}

console.log("Total Tests : " + totalCase + ", Passed Tests: " + passCounter + ", Failed Tests: " + failCounter + ", Skiped Tests: " + skipCounter);
console.log("Pass Percentage% : " + PassPercent);
console.log("Verdict : " + verdict);