
// Normal Function
const SayHello = function(name = ''){
    return 'Hello ' + name  + ' How are you'
}
console.log(SayHello('Jhon'))


// convert this function  into arrow function


 // remove function keyword

const SayHello2 = (name = '') => {
    return `'Hello ${name}  How are you'`
}
// braces  and  return keyword can be removed if we want to return just the single 
//statement
console.log(SayHello2('Jhon'));

// remove the braces and return
// role of arrow function is to reduce the size of code and reduce its complexity

const SayHello3 = (name = '') => `Hello ${name}  How are you`
// runs fine
console.log(SayHello3('arrow function'))


// can always use arrow function with braces instead of normal function
 

// trello using arrow function


console.log('trello using arrow function')

console.log('    ')

const toDos = [ {
    title  : 'Buy Bread',
    isDone : false,
}, {
    title  : 'Go to gym',
    isDone : true,
}, {
    title  : 'Record youtube videos',
    isDone : false,
}]

// function to pick only todos that are done

// filter crosses every element of the array and gives back only the elemenets that
// we put in the filter condition
// we pass a call back functin in filter , here we use arrow function
const thingsDone = toDos.filter( (toDos) =>  toDos.isDone === true  )
console.log(thingsDone);