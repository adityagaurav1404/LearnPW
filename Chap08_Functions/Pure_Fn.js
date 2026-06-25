//pure functions always return the same output for the same input and  has no side effects


//Same inputs (2, 3) always produce 5.

//Doesn't change external variables, files, DOM, network, etc.
//ex1 

function add(a, b) {
    return a + b;
}

console.log(add(2, 3)); // 5
console.log(add(2, 3)); // 5 


//ex2
function doubleArray(arr) {
    return arr.map(x => x * 2);
}

const nums = [1, 2, 3];
const result = doubleArray(nums);

console.log(result); // [2, 4, 6]
console.log(nums);   // [1, 2, 3] (unchanged)


//Impure Function

//ex1

let total = 0; //any change in this can change the output

function addToTotal(value) {
    total += value;
}

addToTotal(5);
console.log(total); // 5


//ex2
let taxRate = 0.18; //this external variable can change the output

function calculateTax(price) {
    return price * taxRate;
}
