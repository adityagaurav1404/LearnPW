let a = 10;
// a = a+1 // a++


//increment OP
//Pre inc > ++a > increment me first then assign the value
// post inc >a++ > assign the value first, then increment


let a1 = 10;
let b1 = a1++;
console.log(b1); //10
console.log(a1); //11



let a2 = 10;
let b2 = ++a2;
console.log(b2) //11
console.log(a2); //11

let a3 = 10;
console.log(a3++ + a3); //10+11=21

let a4 = 10;
console.log(++a4 + a4); //11+1m1=22


let a5 = 10;
console.log(a5++ + ++a5); //10+12=22

let a6 = 10;
console.log(++a6 + a6++); //11+11=22
