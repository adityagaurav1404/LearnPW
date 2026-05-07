
// Retry Failed API Call
// In automation testing, API calls sometimes fail due to network issues. Write a JavaScript program that simulates retrying a failed API call using a do...while loop. The program should retry a maximum of 5 times. Simulate random success/failure using Math.random() (40% chance of success: randomValue > 0.6). Log each attempt and print the final result.


let maxRet = 5;
let attempt = 0; //0 1 2 3 4 5
let success = false;

do {
    attempt++;
    console.log(attempt);

    let RandomVal = Math.random();
    console.log("Attempt Value : " + attempt);
    if (RandomVal > 0.6) {
        success = true;
        console.log("Result : Success");
        break;
    } else {
        console.log("Result : Failed");
    }
} while (attempt <= maxRet)