//immediately invoked function expression
//they dont need to be called, they call by themselves //atmanirbhar
//; always recomended at end

(function () {
    console.log("hi")
})();//hi


(() => {
    console.log("hi")
})(); //hi