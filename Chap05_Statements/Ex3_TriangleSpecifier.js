let a = 11;
let b = 160;
let c = 9;


if (a + b + c != 180) {
    console.log("Not a triangle");
} else if (a == b && b == c) {
    console.log("Equilateral");
} else if ((a == b && c != a) || (b == c && c != a) || (a == c && c != b)) {
    console.log("Isosceles");
} else {
    console.log("Scalene");
}