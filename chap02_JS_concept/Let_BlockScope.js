//let is block-scoped. Works only inside the nearest {}.
{
    let a = 100;
    console.log(a); //100
}

console.log(a); //ReferenceError: a is not defined

//let doesnt ignores if , for, while i.e.cant be accessible outsite the for if and while
for (let i = 0; i < 3; i++) {
    console.log(i);//0, 1, 2
}

console.log(i);//ReferenceError: i is not defined

if (true) {
    let z = "aan"
    console.log(z) //aan
}

console.log(z) //ReferenceError: z is not defined


//different block, different variables
{
    let as = 1;
    console.log(as); //1
}

{
    let as = 2;
    console.log(as);//2
}