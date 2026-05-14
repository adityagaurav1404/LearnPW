
let a = 20;
console.log(a);//20
if (true) {
    console.log(a) // ReferenceError: Cannot access 'a' before initialization

}



if (true) {
    console.log(a) // ref error - local variable since let a is  redeclared in the block - TDZ
    let a = 30;
    console.log(a)//30
}
console.log(a); //20 different block different var
