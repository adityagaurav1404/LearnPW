//check if something an array or not

let results = Array.isArray([1, 2, 3]);
console.log(results) //true

let arm = ["RS", "BUDWISER", "TUBORG"];
let results2 = Array.isArray(arm);
console.log(results2) //true


let NOTaR = 1;
let results3 = Array.isArray(false);
console.log(results3) //FALSE

//EVERY

let allement = [42, 50, 59].every(s => s > 30);
let allement2 = [42, 50, 10].every(s => s > 30);
console.log(allement)  //true
console.log(allement2)  //false

let atleast1ement = [42, 50, 10].some(s => s > 30);
let atleast1ement2 = [30, 20, 10].some(s => s > 30);
console.log(atleast1ement)  //true
console.log(atleast1ement2)  //false