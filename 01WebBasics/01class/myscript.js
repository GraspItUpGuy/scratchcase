//alert ('File is attached')

// commentinh this alert here as it gets irritating to see pop-up message 
// everytime we use this live server 


// pop-up message is send using alert

// DOM is Document object model ,  here the document is HTML file atleast in the
// basic level 
// object is anything that we put in the document, eg all the tags that we use in
// the html file 
// model is how you layout this struture

document.title = ' I got changed'


// console.log(document.getElementById('idOne'))
//  // returns the id with the tags
//  console.log(document.getElementsByClassName('classOne'))

// better way of selecting the things

// using queryselector we can select any tags, classes, ids directly w/ousing any other
// thing but just passing their name as a stssring to the function 
// it selects the first tag/ class/ id that it encounters across its path
//const myElement = document.querySelector('idOne')
//console.log(myElement)

// const myElement = document.querySelectorAll('p')
// console.log(myElement)
// console.log(myElement[0])
// console.log(myElement[1])
// console.log(myElement[2])
 
const myElement = document.querySelectorAll('#idOne')

console.log(myElement)