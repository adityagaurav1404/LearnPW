//clouser= In JavaScript, a closure is when a function “remembers” the variables from its outer scope even after the outer function has finished executing.
//A closure allows an inner function to access variables of an outer function after the outer function has returned.

function makeCounter(st = 0) {

    let count = st;

    // function increment() {
    //     count++;

    // }
    // function decrement() {
    //     count--;
    // }
    // function get() {
    //     return count;
    // }

    return {
        increment() { count++; },
        decrement() { count--; },
        get() { return count; }

    }
}

let counter = makeCounter(0);
counter.increment()
counter.increment()
counter.increment()
console.log(counter.get()); //3

counter.decrement()
counter.decrement()
console.log(counter.get()); //1