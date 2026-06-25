//A callback function in JavaScript is a function that is passed as an argument to another function and is executed later, usually after some operation completes.

function greet(name) {
    console.log("Hello " + name);
}

function processUser(callback) {
    const name = "Aditya";
    callback(name);
}

processUser(greet);

//greet is the callback function.
//processUser receives the callback and executes it.