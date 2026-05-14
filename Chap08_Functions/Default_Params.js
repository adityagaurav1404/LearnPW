//providing default param in the function

function retry(testName, maxRetry = 5, delay = 1000) {
    console.log(`Retrying ${testName} up to ${maxRetry} times and wait would be for ${delay}`)
}

retry("ADAM") //Retrying ADAM up to 5 times and wait would be for 1000
retry("EVE", 10) //Retrying EVE up to 10 times and wait would be for 1000
retry("JESUS", 15, 500) //Retrying JESUS up to 15 times and wait would be for 500


