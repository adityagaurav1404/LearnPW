
// && - AND - Strict = BOTH true then true
// || - OR - Loose = ANY true then true
// ! - NOT - Reverse = true becomes false and false becomes true

let a = true;
let b = false;


console.log(a && b); //false
console.log(a || b); //true
console.log(!a); //false



let name3 = "" || "default1";
console.log(name3); // ||operator returns the first truthy value. Empty string is always false hence default

let name5 = 0 || "default2";
console.log(name5); // ||operator returns the first truthy value. 0 is always false hence default

let name141 = "default4" || "default1" || "";
console.log(name141); //||operator returns the first truthy value. first false  default4


let name1412 = 0 || "";
console.log(name1412); //||operator returns the first truthy value or last falsy value. last false  is empty string

let name4 = "" && "default3";
console.log(name4); // && operator returns the first false value or the last truth value. Empty string is always false hence empty

let name6 = 0 && "default4";
console.log(name6); // && operator returns the first false value or the last truth value. 0 is always false hence 0

let name2 = "default4" && 0 && "";
console.log(name2); // && operator returns the first false value or the last truth value. first false 0

let name7 = "default4" && "default5";
console.log(name7); // && operator returns the first false value or the last truth value. Empty string is always false hence default5

let name8 = "5" && "3"
console.log(name8);// "3"  (returns last truthy value)

let name9 = "5" & "3"
console.log(name9);// 1    (bitwise result)

