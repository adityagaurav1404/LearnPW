//write a function makeRateLimiter(limit) that returns a function
//each call to the returned function should track usage and returns true if under the limit and false when limit exceeds

function makeRateLimiter(limit) {
    let attempt = 0
    function maxRetry() {
        attempt++;

        if (attempt > limit) {
            return false;
        }
        return true;
    }
    return maxRetry;
}

let ramu = makeRateLimiter(3);
console.log(ramu()); //attempt = 1  /  3  =true
console.log(ramu()); //attempt = 2  /  3 =true
console.log(ramu()); //attempt = 3  /  3 =true
console.log(ramu()); //attempt 4 exceeds the max limit = 3 =false
