const convertToRs = (dollor) =>  {
    if(typeof( dollor) === 'number') {
             return dollor * 70        
    } else {
        throw Error('Amount needs to be in number')
        // it is used to throw an error stating that we did a stupidity over here
    }
}




try {
    const myValue = convertToRs('five') 
    console.log(myValue)
} catch (e) {
    
    console.log (e)
}
// got the error but still the latte part runs
// handle errors in try and catch instad of  throwing randow errors so that the code
// still runs in case of a potntial error

console.log(`i will not run if program crashes`)