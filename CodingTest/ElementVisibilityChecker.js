// Element Visibility Checker
// In UI automation (Cypress/Playwright), you often need to validate element states before interacting with them. Write a JavaScript program that checks an element's properties (isPresent, isDisplayed, isEnabled) and prints the appropriate action a QA engineer should take. Use strict equality (===), logical operators (&&, ||), and the ternary operator for severity level.

// States: READY (all true), DISABLED (present+displayed but not enabled), HIDDEN (present but not displayed), NOT FOUND (not present).
// Severity: CRITICAL (not present), WARNING (not displayed or not enabled), OK (all good).
let status = "active";

let msg = status === "active" ? "user is active"
    : status == "inactive" ? "user is inactive"
        : status == "banned" ? "user is banned"
            : "user is unknown"

let isPresent = true;
let isDisplayed = false;
let isEnabled = false;

if (isPresent == true && isDisplayed == true && isEnabled == true) {
    console.log("Ready");
    console.log("Element is present, displayed and enabled");
} else if (isPresent == true && isDisplayed == true && isEnabled != true) {
    console.log("DISABLED");
    console.log("Element is present, displayed but not enabled");
} else if (isPresent == true && isDisplayed != true) {
    console.log("HIDDEN");
    console.log("Element is present, but not displayed");
} else if (isPresent != true) {
    console.log("NOT FOUND");
    console.log("Element is not present");
}

//Severity: CRITICAL (not present), WARNING (not displayed or not enabled), OK (all good).

let severity = isPresent != true ? "CRITICAL"
    : isPresent == true && (isDisplayed != true || isEnabled != true) ? "WARNING"
        : "OK"

console.log(severity);

