//null coalescing
//The nullish coalescing operator (??) returns the right-hand value only if the left-hand side is: null or undefined
let am = null ?? "kfd";
am = am + "Chl"
console.log(am);//➡️ result = kfdChl

let afa = null ?? "KGF1";
console.log(afa); //➡️ result = KGF1

let bfa = undefined ?? "KGF2";
console.log(bfa);//➡️ result = KGF2

let cfa = 0 ?? "KGF3";
console.log(cfa); //➡️ result = 0

let dfa = "" ?? "KGF4";
console.log(dfa);  //➡️ result = ""

let efa = false ?? "KGF5";
console.log(efa);  //➡️ result = false

let ffa = NaN ?? "KGF6";
console.log(ffa); //➡️ result = NaN

let gfa = 10 ?? "KGF7";
console.log(gfa);  //➡️ result = 10

let hfa = "KGF" ?? "KGF8";
console.log(hfa); //➡️ result = KGF

let hfa2 = "" ?? "KGF89";
console.log(hfa2); //➡️ result = ""

let name4 = undefined ?? "KGF89";
console.log(name4); // KGF89