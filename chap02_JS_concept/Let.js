


let a = 10;
// let a = 100; //SyntaxError: Identifier 'a' has already been declared //reassignment possible & redeclaration not possible.
a = 100; //reassignment possible.
console.log(a); //100
function test() {
    let a = 20;
    console.log(a);//20
    if (true) {
        a = 30;
        console.log(a) //30
    }
    console.log(a); //300
}

test();
console.log(a); //100