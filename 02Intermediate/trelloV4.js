//const myToDos = ['Buy Bread', 'Go to Gym', 'Record youtube videos' ]

//console.log(myToDos.indexOf('Buy Bread')); 
 // if the element is not found then indexOf returns -1 

 // console.log(myToDos[myToDos.indexOf('Buy Bread')])

// findIndex() takes function which takes
// parameters , array and element , and returns the index of the element 

 const newToDos = [ {
     title : 'BuyBread',
     isDone : false,
 }, {
    title : 'Go to Gym',
    isDone : false,

 },{
    title : 'Record youtube videos',
    isDone : true,
 }
]
// const index = newToDos.findIndex(function(todo, index){
//     console.log(todo);
//         return todo.title === "Go to Gym"
// })
// console.log(index)


// Method 1
// const findToDO = function(myToDos, title){ 
//      const index = myToDos.findIndex(function(todo , index ){
//          return todo.title.toLowerCase() === title.toLowerCase()

//      })
//      return myToDos[index]

// } 

// let printMe = findToDO (newToDos, 'Go to gym')
// console.log(printMe)

// in find() it returns the exact element that you are looking for

// Method 2

const findToDos = function (myToDos, title){
     const titleReturned = myToDos.find(function(todo, index){
         
          return todo.title.toLowerCase() === title.toLowerCase()
     })
     return titleReturned

}

let printMe = findToDos(newToDos,'Go to Gym')

console.log(printMe)
