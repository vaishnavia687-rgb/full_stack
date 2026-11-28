console.log("start");
    setTimeout(() => {
        console.log("setTimeout")
    }, 2000)

    promise.resolve(.then(() => {"first proise"}))
    setTimeout(() => {
        console.log("setTimeout 2")
    }, 3000)

    promise.resolve().then(() => {
        console.log("second promise")
    })  

console.log("end")