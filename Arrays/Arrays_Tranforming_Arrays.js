let scores = [45, 82, 91, 60, 73];

// map = transforms every element, returns new array
let grades = scores.map(s => s > 50 ? "Pass" : "Fail");
console.log(grades) //[ 'Fail', 'Pass', 'Pass', 'Pass', 'Pass' ]

//filter - Keeps only the elements that passes the condition
let passing = scores.filter(s => s > 50);
console.log(passing) //[ 82, 91, 60, 73 ]

//reduce - accumulates to a single value
let total = scores.reduce((sum, s) => sum + s, 0)
console.log(total) //351

//flat = flattens nested arrays
let nested = [[1, 2], 3, [4, 5]];
console.log(nested.flat()); //[ 1, 2, 3, 4, 5 ]


console.log("====================")

//map vs flatmap
//transforms each item and returns a new array : Map
//transforms each item and flattens one level : flatMap

const nums = [1, 2, 3];
const result = nums.map(n => [n, n * 2]);
console.log(result); //[[1, 2], [2, 4], [3, 6]]

const result2 = nums.flatMap(n => [n, n * 2]);
console.log(result2); //[ 1, 2, 2, 4, 3, 6 ]