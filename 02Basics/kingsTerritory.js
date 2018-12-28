// in comtinuation of scope...
// go and open scope waali file


// kings problem

// let king = 'john' 

if (true){
   // let  king = 'Sam'
    if(true){
         king = 'Ram' //  variable leak
                         // by default it is declared as a global variable
        console.log (king)
    }
}
// hence always declare variable using 'var' or 'let' or 'const'
// else variable leak problem occours

if (true){
   console.log('I am second part ' + king) // looks king in its scope
    // if king not found looks 1 step higher.... untill king is discovered
    
}