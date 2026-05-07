// Test Data Generator
// As an SDET, you frequently need to generate test data for form testing. Write a JavaScript program that generates test user data using a for loop. Each user should have a unique ID (USR-0001 format), name, email, and role (cycling through: admin, editor, viewer, tester, manager). Every 3rd user should be inactive (edge case testing). Demonstrate proper use of var (global counter), let (loop variables), and const (fixed values).


let statement = "Generate 8 users";
// var → global counter (as requested)
var globalIncrementor = 0;

// const → fixed values (never change)
const result = statement.match(/\d+/);  // / - start /d - any digit, + if more digit like81, / close
const numVal = result ? parseInt(result[0], 10) : null;
const roles = ["admin", "editor", "viewer", "tester", "manager"];

for (let i = 1; i <= numVal; i++) {

    // let → loop-scoped variables
    let roleForUser = roles[(i - 1) % roles.length]

    if (i % 3 == 0) {
        console.log("USR-000" + i + "| TestUser_" + i + "| testuser" + i + "@testingAcademy.com | " + roleForUser + "| Inactive User")
    } else {
        console.log("USR-000" + i + "| TestUser_" + i + "| testuser" + i + "@testingAcademy.com | " + roleForUser + "| Active User")

    }
    globalIncrementor++
}

console.log("Total User created : " + globalIncrementor);