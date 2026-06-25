let str = "Hello World"

//length (starts from 1)
console.log(str.length) //11

//access by index
console.log(str[0]) //H
console.log(str[9]) //l
console.log(str[-1]) //undefined
console.log(str.at(-1)) //d
console.log(str.at(-3)) //r

//chatAt()

console.log(str.charAt(0)); //H

//difference in returned value
console.log(str.charAt(12)); // ""
console.log(str[12]);        // undefined

console.log(str.charAt(-1)); // ""
console.log(str[-1]);        // undefined

//charCodeAt()
console.log(str.charCodeAt(0)) //   72