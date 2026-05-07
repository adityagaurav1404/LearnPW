
let msg = "" ? "has name" : "No name"

console.log(msg); // Empty string is always false

let name3 = "" || "default";
console.log(name3); // operator returns the first truthy value. Empty string is always false hence default

let name5 = 0 || "default";
console.log(name5); // operator returns the first truthy value. Empty string is always false hence default

let name4 = "" ?? "default";
console.log(name4); // op - "" null coalescing ?? --- only uses the right-side value if the left side is:null or undefined



console.log("_______---")


let name1312 = true ? "" : "default";
console.log(name1312); //op -  "" true vale - empty 


