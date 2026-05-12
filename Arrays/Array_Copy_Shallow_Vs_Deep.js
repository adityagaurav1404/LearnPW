let og = [1, 2, 3];

let copy1 = [...og]
console.log(copy1) //[ 1, 2, 3 ]


let copy2 = og.slice()
console.log(copy2) //[ 1, 2, 3 ]

let copy3 = Array.from(og);
console.log(copy3) //[ 1, 2, 3 ]


//Shallow Copy
copy1.push(99);
console.log(og) //[ 1, 2, 3 ]
console.log(copy1) //[ 1, 2, 3, 99 ] 
//This is shallow copy, new memory will be allocated to the new copy element, and if updating the new copied element, old wont be affected

og.push(55)
console.log(og) //[ 1, 2, 3 ]
console.log(copy1) //[ 1, 2, 3, 99 ] 
