// && - AND optr - all of them to be true
// || - OR optr -  either one of them is true
// ! - NOT optr -  changes the value----- remember by reverse phychology



let isVerified = false
let isLoggedIn = false
let hasPaymentToken = false
let isGuest = false

if ( (isVerified) && (isLoggedIn ) && (hasPaymentToken )    ){
    console.log('Greeting message oto user')
    console.log('has access to paid courses')
}  else if( isVerified || isGuest  ){
    console.log('acess to free previews')

} else {
    console.log('please contact admin')
}