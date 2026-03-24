


var a = 10;
var a=100; //reassignment  & redeclaration possible.
a=90;
console.log(a);
function test() {
     var a=20;
    console.log(a);
    if (true) {
     var   a=30;
        console.log(a)
    }
    console.log(a);
}

test();
var a= 40;
console.log(a);