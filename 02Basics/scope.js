// scope

let iAmGlobal = 'someValue'

if (true){
    var iAmLocal = 'SomeMoreValue'
    iAmGlobal = 'Superman'
    console.log(iAmGlobal);
    console.log(iAmLocal)
    
}
// change in global variable reflects everywhere
console.log(iAmLocal)
console.log(iAmGlobal);


// 'let' vs 'var'

// don't declare your variables using 'var' untill and unless you want to make your
// variabels completely global

//use 'let' if you want to restrict the scope of the varible to be limited inside the 
//  scope block

