//normal func
function validateStatusCode(status) {
    if (status >= 200 && status <= 300) {
        console.log("req is fine")
    } else {
        console.log("req is not fine")
    }
}

validateStatusCode(200)//req is fine

// func as expression
const validator = function validateStatusCode(status) {
    if (status >= 200 && status <= 300) {
        console.log("req is fine")
    } else {
        console.log("req is not fine")
    }
}

validator(400); //req is not fine

// arrow func
const validator2 = status => {
    if (status >= 200 && status <= 300) {
        console.log("req is fine")
    } else if (status >= 400) {
        console.log("req is blocked")
    } else {
        console.log("req is not fine")
    }
}

validator2(400) //req is blocked