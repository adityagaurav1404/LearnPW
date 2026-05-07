// Response Time SLA Analyzer
// As a performance tester, you collect API response times in milliseconds. Write a JavaScript program using a while loop that analyzes an array of response times and prints a performance report with min, max, average, and how many responses breached the SLA threshold (> 500ms). Use comparison operators for min/max tracking.

//Total Requests: 6 Min Response: 120ms Max Response: 620ms SLA Breaches: 2 (33.33%) Overall Status: ❌ SLA VIOLATED


const responseTimes = [120, 230, 450, 510, 180, 620];

let count = 0
let breachCount = 0
const SLA_LIMIT = 500;
let minValue = responseTimes[0];
let maxValue = responseTimes[0];

while (count < responseTimes.length) {

    let currentVal = responseTimes[count];

    if (currentVal < minValue) {
        minValue = currentVal;
    }
    if (currentVal > maxValue) {
        maxValue = currentVal;
    }
    if (currentVal > SLA_LIMIT) {
        breachCount++
    }
    count++;
}

let breachPercent = breachCount / count * 100;


console.log("Total Requests: " + count);
console.log("Min Response: " + minValue);
console.log("Max Response: " + maxValue);
console.log("SLA Breaches: " + breachCount);
console.log("SLA Breaches Percentage: " + breachPercent);
if (breachCount > 0) {
    console.log("Overall Status: SLA VOILATED")
} else {
    console.log("Overall Status: SLA NOT VOILATED")
}