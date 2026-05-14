let abdul = [] //empty array
let fruit = ["apple", "banana", "orange"] //3 0, 1,2
console.log(fruit.length); //3
console.log(fruit[0]); //apple
console.log(fruit[1]); //banana
console.log(fruit[2]); //orange
console.log(fruit[3]); //undefined


let arr = [10, 20, 30];

let testRes = ["pass", "fail", "pass", "skip"]
let mixed = ["hello", 1, true, null]; // in JS, Arrays can hold different types of values //hetrogeneous //everything is object in JS

//arrays literal (preferred)
let browser = ["chrome", "edge", "safari", "firefox"]

//array constructor
let scores = new Array(3); //creates [Empty x 3]
let scores2 = new Array("chrome", "edge", "safari", "firefox"); //4 0-3

//array of
let scores3 = Array.of("chrome", "edge", "safari", "firefox"); //4 0-3

//array from
let scores4 = Array.from("chrome"); //[c,h,r,o,m,e]


console.log(scores4[2]);//r


console.log(scores2.length);//4 // length is a property not a function
console.log(scores2[3]);//firefox


console.log(scores3.length);//4
console.log(scores3[2]);//safari
console.log(scores3[-2]);//undefined  // JS dosent support negative indexing
console.log(scores3[4]);//undefined  // no arrayoutofbound like java > it will show undefined.
console.log

//access and modify

let status = ["pass", "fail", "stop", "skip"]

console.log(status[0]) //pass
console.log(status[1]) //fail
console.log(status.at(1)); //fail


console.log(status.at(-1))// last elem //skip
console.log(status.at(-2))// second last elem //stop
console.log(status.at(-3))// third last elem //fail

//modifying
status[1] = "blocked"
console.log(status)
