let arr = [1, 2, 3];

//add to end
arr.push(4);
console.log(arr) //[ 1, 2, 3, 4 ]

//remove from end
arr.pop();
console.log(arr) //[ 1, 2, 3 ]

//add multiple to end 
arr.push(5, 6)
console.log(arr) //[ 1, 2, 3, 5, 6 ]

//add to the begining
arr.unshift(0)
console.log(arr) //[ 0, 1, 2, 3, 5, 6 ]

//remove from begining
arr.shift();
console.log(arr) //[ 1, 2, 3, 5, 6 ]

//splice(start, deleteCount, ....items to add)
arr.splice(2, 1)  //[ 1, 2, 3, 5, 6 ] from the 2nd index, remove 1 value //3 would be removed //op [ 1, 2, 5, 6 ]
//arr.splice(2, 3)  //[ 1, 2, 3, 5, 6 ] from the 2nd index, remove 3 values //3, 5, 6 would be removed // op [ 1, 2]
//arr.splice(2, 4)  //[ 1, 2, 3, 5, 6 ] from the 2nd index, remove 4 value //since only 3 value left so 3, 5, 6 would be removed// op [ 1, 2]
console.log(arr)

arr.splice(2, 0, 99)  //[ 1, 2, 5, 6 ] , from the 2nd index, remove 0 value, add 99 //op [ 1, 2, 99, 5, 6 ]
console.log(arr)

arr.splice(1, 2, 10, 20) //replace//[ 1, 2, 99, 5, 6 ], at the 1st index, remove  2 values, add 2 values  10, 20 //op[ 1, 10, 20, 5, 6 ]
console.log(arr)

arr.splice(1, 1, 11, 12) //[ 1, 10, 20, 5, 6 ]//at the 1st index, remove  1 values,add 2 values 11, 12//op[1, 11, 12, 20, 5 , 6]
console.log(arr)