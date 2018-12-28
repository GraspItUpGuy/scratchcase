const days = ['Mon', 'tues', 'wed', 'thr', 'fri', 'sat' ]

console.log(days[0]);

// let sayHello = function(){
//   console.log('Greeting message for user')
// }

// //for each loop

// days.forEach(sayHello) // calls this function for each element of the array
// // bacically cals the function for each element of the array



// //we can even define this function within the "foreach()" without 
// giving any name for the function


// we can pass an entire function either by just name of an entire function
days.forEach(  function(){
      console.log('Greeting message for user')
    } // this thing is completely acceptable

)

    days.forEach(  function(day){
        console.log(day)
      } // this thing is completely acceptable
    )




    console.log('another example')


// first parameter of function is allways the value of the array and
// the second parameter is always the index number of the element
    days.forEach(  function(day, index){
        console.log(`starts with ${index + 1} -- ${day}`)
      } // this thing is completely acceptable
    )




    