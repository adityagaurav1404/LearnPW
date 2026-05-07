// Login Brute-Force Detection
// Write a JavaScript program that simulates a login system with brute-force detection. 
// The system should lock the account after 3 consecutive failed attempts. 
// Use a do...while loop to process login attempts from an array. 
// Demonstrate var (global counter), let (loop variables), and const (credentials and threshold). 
// Validate using strict equality (===) and logical operators (&&).


// op Attempt 1: ❌ FAILED - Strike 1/3 Attempt 2: ❌ FAILED - Strike 2/3
//  Attempt 3: ❌ FAILED - Strike 3/3 🚨 ACCOUNT LOCKED Attempt 4: 🔒 ACCOUNT LOCKED - Rejected

const username = "admin@testingacademy.com "
const password = " Test@1234";
let attempts = ["wrong", "wrong", "wrong", "correct", "correct"]
let lockstatus = false;
let maxCount = 3;

var globalCounter = 1;


do {
    if (lockstatus === false) {
        if (globalCounter < maxCount) {
            if (attempts[globalCounter - 1] === "correct") {
                console.log("Attempt " + globalCounter + ": Passed")
                break;
            } else {
                console.log("Attempt " + globalCounter + ": FAILED - Strike " + globalCounter + "/" + maxCount)
            }
        } else if (globalCounter == maxCount) {
            if (attempts[globalCounter - 1] === "correct") {
                console.log("Attempt " + globalCounter + ": Passed")
                break;
            } else {
                console.log("Attempt " + globalCounter + ": FAILED - Strike " + globalCounter + "/" + maxCount + " : ACCOUNT LOCKED ");
            }
        } else {
            console.log("Attempt " + globalCounter + ": ACCOUNT LOCKED  - Rejected");
        }
    } else {
        console.log("Already Locked");

    }
    globalCounter++;
}
while (globalCounter <= attempts.length) 