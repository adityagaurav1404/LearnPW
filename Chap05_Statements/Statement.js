let age = 18;

if (age > 18) {
    console.log("You are eligible for voting");
} else {
    console.log("You are not eligible for voting");
}


//double == is value verification
//triple === is value and type verification

let isLoggedIn = true;
let userRole = "Editor";
if (isLoggedIn) {
    if (userRole === "Admin") {
        console.log("Welcome to the admin dashboard");
    } else if (userRole === "Editor") {
        console.log("Welcome to the editor dashboard");
    } else {
        console.log("No idea what you are doing here");
    }
} else {
    console.log("Please login to continue");
}