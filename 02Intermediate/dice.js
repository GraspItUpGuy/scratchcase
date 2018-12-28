// rolls a dice for a ludo game

let numOne = 22
let numTwo = 7

result = 22 / 7

console.log(result.toFixed(2)) // toFixed sets the number of decimalplaces that
                             // we want  to get

let floatRes = result.toFixed(2)


// Math.floor() is the greatest integer function 

console.log(Math.floor(floatRes))                             
 
// Math.ciel() is the samllest integer function

console.log(Math.ceil(floatRes))


// Math.random() gives the output b/w 0 and 1 
// so if we want to get b/w 0 and 10  we do (Math.random() * 10) , 10 & 0 excluded
// but it gives random decimals so we do greatest integer functionfor it 


let upper = 6
let lower = 1
let myRandom = Math.floor(Math.random() * (upper - lower + 1)) + lower
console.log(myRandom)