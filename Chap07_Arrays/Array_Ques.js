let code = [200, 404, 500, 201]

console.log(code.every(s => s >= 400)); //false
console.log(code.some(s => s >= 400)); //true
console.log(code.includes(s => s >= 400)) //false -  does not accept a callback function.
console.log(code.find(s => s >= 400)) //404