
var a = 20;
console.log(a);
// if (true) {
//     console.log(a) // global variable since let a is not redeclared in the block

// }



if (true) {
    console.log(a) // ref error - local variable since let a is  redeclared in the block - TDZ
    var a = 30;
    console.log(a)
}
console.log(a);
