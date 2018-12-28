
let guestUser = function (name = 'unNamed', courseCount = 0){
    // default parameters, if noting is passed then thesevalues will be taken
    return 'Hello ' + name + ' and your course count is ' + courseCount
}

console.log(guestUser())
console.log(guestUser('John Doe', 1)) // passed parameters
console.log(guestUser('John Doe')) // one one paramter passed
// by default data types are "undefined" in JS