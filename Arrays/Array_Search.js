let result = ["pass", "fail", "pass", "error", "fail"]
console.log(result.indexOf("fail")) //first index of value //fail - 1
console.log(result.indexOf("skip")) //first index of value //skip not there, so -1
console.log(result.lastIndexOf("fail")) //last index of value //fail - 4


//includes
console.log(result.includes("fail")) //give boolean - if there or not //true
console.log(result.includes("Funny")) //give boolean - if there or not //false

//find - returns the matching element

let numb = [10, 25, 30, 45]
console.log(numb.find(n => n > 20));  // finds first value that matches the condition //25
console.log(numb.findLast(n => n > 20));  // finds first value that matches the condition //45
console.log(numb.find(n => n > 100));  // finds first value that matches the condition //undefined

//find index - returns the index of the matching element 
console.log(numb.findIndex(n => n > 25)) // finds index value that matches the condition //2
console.log(numb.findLastIndex(n => n > 25)) // finds index value that matches the condition //3