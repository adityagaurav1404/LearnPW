function pramod_doing_work(workers, callback) {

    let work = workers;

    callback();

}

function callwife() {
    console.log("call when done")
}


pramod_doing_work("PW class", callwife)