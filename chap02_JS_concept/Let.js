


let a = 10;
// let a = 100; //SyntaxError: Identifier 'a' has already been declared //reassignment possible & redeclaration not possible.
a =100; //reassignment possible.
console.log(a);
function test() {
     let a=20;
    console.log(a);
    if (true) {
     let   a=30;
        console.log(a)
    }
    console.log(a);
}

test();
console.log(a);