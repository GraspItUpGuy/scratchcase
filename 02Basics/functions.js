//functions

// console.log('john');


// function defintion

let sayHello = function(){
    console.log('Gretting message for user');
    console.log('Hey user');
    
}
// calling of the function
  sayHello()


// paramaterised function
           
  let sayHelloAgain = function(name){
      console.log(`Greeting message fot ${name}`)
      console.log(`Hey ${name}`)
  }
   


    sayHelloAgain('Jhon')  // '' bcoz we are passing a string




    // anothe example


    let fullNameMaker = function(firstName, LastName){
        console.log('Wecome to LCO')
        console.log(`We are Happy to have you, ${firstName}  ${LastName}`)
    }
    fullNameMaker('John', 'Doe')

    // adder
    let MyAdder = function(num1, num2) {
        let added = num1 + num2
        return added
  // return does not print the value...to print it put it in console.log
    }
console.log(MyAdder(3,5))


// let myMultiplier = function(num1, num2){
    
//     return (num1 * num2)
// }
// console.log(myMultiplier(3,5))


