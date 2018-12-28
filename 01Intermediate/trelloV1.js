const myToDos = []

myToDos.push('Buy bread')
myToDos.push('Go to gym')
myToDos.push('record videos for youtube')

myToDos.forEach(function(todo, index){
     
     console.log(`your task number ${index + 1} is :  ${todo}`)

})


// assignment


console.log(' another example using for loop')
const yourToDos = []

yourToDos.unshift('record videos for youtube')
yourToDos.unshift('Go to Gym')
yourToDos.unshift('buy bread')


for (let index = 0; index < yourToDos.length; index++) {
    console.log(`task number ${index + 1} on your list is : ${yourToDos[index]}`)
    
}