//const is also block-scoped like let. difference -cannot be reassigned

const pi = 3.14;
pi = 4; //TypeError: Assignment to constant variable.


//block scope 
{
    const country = "India";
}

console.log(country); //ReferenceError: country is not defined

//obj with const
//const prevents reassignment of the variable,
//NOT modification of object contents.


const user = {
    name: "Rahul"
};

user.name = "Amit";

console.log(user); //amit