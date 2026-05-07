let score = -91;

if (typeof score !== "number") {

    console.log("chal be! kya bak riya hai");
} else if (score > 100 || score < 0) {
    console.log("chal be! kya bak riya hai");
} else if (score >= 90 && score <= 100) {
    console.log("GRADE A");

} else if (score >= 80 && score <= 89) {
    console.log("GRADE B");

} else if (score >= 70 && score <= 79) {
    console.log("GRADE C");
} else if (score >= 60 && score <= 69) {
    console.log("GRADE D");
} else {
    console.log("GRADE F");
}

switch (true) {
    case (score >= 90 && score <= 100): console.log("Grade A");
        break;
    case (score >= 80 && score <= 89): console.log("Grade B");
        break;
    case (score >= 70 && score <= 79): console.log("Grade C");
        break;
    case (score >= 60 && score <= 69): console.log("Grade D");
        break;
    default: console.log("Grade F");
        break;

}


