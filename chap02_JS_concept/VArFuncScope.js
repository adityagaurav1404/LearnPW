
//var ignores if , for, while i.e.can be accessible outsite the for if and while

for (var i = 0; i < 3; i++) {
    console.log("inside") //inside
}

console.log(i); //3

//var is also block scoped //an be accessible outsite the {}
{
    var kaali = 124123;
    console.log(kaali); //124123

}
console.log(kaali); //124123



//var is a function scoped cant be accessed outside a function
function promo() {
    var rwa = 102;
}

console.log(rwa); //ReferenceError: rwa is not defined



