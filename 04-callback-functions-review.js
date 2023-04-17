function higherOrderFunction(callback) {
    callback()
}

const funFunction = function() {
    console.log("This callback was executed by the H.O.F.")
}


higherOrderFunction([1,2,3])







// Show same call using function expression and use debuggers everywhere

// Show same call with function defined outside of parameter list

// Show what happens if a function is not passed