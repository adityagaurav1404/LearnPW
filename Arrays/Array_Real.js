let browser = ["chrome", "firefox", "Safari", "Opera", "Edge"];
console.log(browser.length) //5
console.log(browser) //[ 'chrome', 'firefox', 'Safari', 'Opera', 'Edge' ]


browser.pop(); //remove from last [ 'chrome', 'firefox', 'Safari', 'Opera' ]
console.log(browser)

console.log("---------------TTA-------------")

let removed = browser.shift();
console.log(browser) //remove from first [ 'firefox', 'Safari', 'Opera' ]
console.log(removed) //removed element //chrome
console.log("---------------TTA-------------")

for (let i = 0; i < browser.length; i++) {
    console.log(browser[i]);
    if (browser[i] === "Safari") {
        browser.splice(i, 1);
        console.log("Safari is removed");
    }
}
console.log(browser);