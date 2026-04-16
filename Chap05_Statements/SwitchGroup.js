let browser = "safari"


// switch(score) → compares values
// switch(true) → compares conditions

switch (browser) {
    case "chrome":
    case "edge":
    case "brave":
    case "opera":
        console.log("Chromimium Project");
        break;
    case "firefox":
        console.log("gecko Project");
        break;
    case "safari":
        console.log("webkit Project");
        break;
    default:
        console.log("Unknown browser");
        break;
}