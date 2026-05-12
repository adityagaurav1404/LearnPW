let fruits = ["banana", "apple", "cherry"]
console.log(fruits.sort()); //[ 'apple', 'banana', 'cherry' ] //alphabetical by default 

let nums = [10, 1, 21, 2]
console.log(nums.sort()) //[ 1, 10, 2, 21 ] -WRONG - Compares them as a string

nums.sort((a, b) => a - b); // ascending order
console.log(nums) //[ 1, 2, 10, 21 ]

nums.sort((a, b) => b - a); // descending order
console.log(nums) //[ 21, 10, 2, 1 ]