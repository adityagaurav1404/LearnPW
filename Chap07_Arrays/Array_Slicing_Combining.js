let arr = [1, 2, 3, 4, 5];  //
///////////[0, 1, 2, 3, 4]
//slice(start, end) =  returns new array , doesnt mutate (start , end - 1) , index =0
//if end value not given, so return start to last
console.log(arr.slice(1, 4)) //[ 2, 3 ] //1 index value 2, end - 1, 4-1 =3, upto 3 index = val 4 so [2, 3, 4]


console.log(arr.slice(3)) //end not giving so 3index to last [4,5]

console.log(arr.slice(-2)) //last 2 values (4,5)
console.log(arr.slice(-3)) //last 2 values (3, 4,5)


//concatination

let a = [1, 2]
let b = [3, 4]

let z = a.concat(b)
console.log(z) //[ 1, 2, 3, 4 ]
let x = a.concat(b, [5, 6]);
console.log(x) //[ 1, 2, 3, 4, 5, 6 ]

//spread concatenation - modern array
let d = [...a, ...b]
console.log(d) //[ 1, 2, 3, 4 ]

//join convert array to string

let status = ["pass", "fail", "skip"]
let d1 = status.join(", ")
let d2 = status.join("= ")
console.log(d1) //pass, fail, skip
console.log(d2) //pass= fail= skip