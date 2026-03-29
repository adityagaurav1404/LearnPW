console.log(0 == ""); // both converted to 0;
console.log(0 == "0"); // both converted to 0;
console.log(0 == false); // both converted to 0;
console.log(0 === false); //false

console.log("0" == false); //true
console.log("0" == ""); //false
console.log("==============="); //true;
console.log(null == undefined); //true;
console.log(null === undefined); //false;

console.log("\t" == 0); //true; whitespace → 0 // here conversion is done as per no

console.log("\t" == ""); //false // here conversion is done as per string one is tab other is empty string


// rule breaker for equality
console.log(0 == null); // false
console.log(0 == undefined); // false
console.log(NaN == NaN); //false //not a number
console.log(NaN === NaN); //false //not a number
console.log(NaN != NaN); //true //not a number
console.log("" == false); //true
console.log("" === false); //false
console.log("==============="); //true;

console.log("" == null); //false
console.log("" == undefined); //false
console.log(false == null); //false
console.log(false == undefined); //false