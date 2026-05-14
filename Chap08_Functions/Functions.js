//without func logic

let score1 = 85;
let results1 = score1 >= 30 ? "pass" : "fail"
console.log(results1);

let score2 = 25;
let results2 = score2 >= 30 ? "pass" : "fail"
console.log(results2);

//with func

function checkRes(score) {
    return result = score >= 30 ? "pass" : "fail";

}

console.log(checkRes(10))
console.log(checkRes(100))