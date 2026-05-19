function add(a, b, c) {
    return a + b + c;
}

let num = [1, 2, 3]

console.log(add(...num)) //6



//ex2
function hasError(...codes) {
    return codes.some(c => c >= 400); //if any -boolean
}

let responseCodes = [200, 400, 300]
console.log(hasError(...responseCodes)) //true