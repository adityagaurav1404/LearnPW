let x = "10";

switch (x) {
    case 10:
        console.log("first");
        break;
    case "10":
        console.log("second");
        break;
    default:
        console.log("third");
        break;
}

// OP : second , switch uses  === , so "5"!==5(diff type)