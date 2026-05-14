


var a = 10;
var a = 100; //reassignment  & redeclaration possible.
a = 90;
console.log(a); //90
function test() {
    var a = 20;
    console.log(a); //20
    if (true) {
        var a = 30;
        console.log(a) //30
    }
    console.log(a);//30
}

test();
var a = 40;
console.log(a);//40