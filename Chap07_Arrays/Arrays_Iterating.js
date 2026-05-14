//Iterate - to go from one to other //traversing

let tests = ["login", "checkout", "search"]

for (let i = 0; i < tests.length; i++) {
    console.log(tests[i])
}

console.log("----------------------/for - of-")

//for - of- gives value

for (let test of tests) {
    console.log(test)
}

//for - in  - gives index
console.log("----------------------for - in")

let students = ["lamm", "ross", "Jeff", "Chriss"];
for (let student in students) {
    console.log(student + students[student]);//0 lamm
}

console.log("---------------------/for each-")
//for each
tests.forEach((test, index) => {
    console.log(test + " : " + index)
    console.log(`${test} : ${index}`) //template literal
})

console.log("----------------------")
for (let [i, test] of tests.entries()) {
    console.log(i, test) //0 login
    console.log(`${i} : ${test} `) //0 : login 
}

